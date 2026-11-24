"""Bouwt de leerkrachtensite in server/, klaar voor uitrol.py. Uitvoeren vanuit deze map:

    py -3.13 -P maak.py

Leest:
  - Ontwerp/voorkanten/maak-voorkanten.py en voortgang.yaml: de pakketten, de handboeken en hun status;
  - de PDF's die Opmaak/maak-pdf.py in elke cursus zet (handboek, leerkracht, zelfstudie, oplossingen).
Schrijft:
  - server/app/boeken.json en server/app/laatste.json;
  - server/app/verwerkt.json: per versie wat uit de feedback verwerkt is (verwerkt.yaml van de cursus), met de plek;
  - server/app/versies/<h>.pdf en <h>.json: elke nieuwe PDF als vaste versie (h = begin van de SHA-256);
  - server/public_html/omslagen/<h>.webp: de voorkant (pagina 1 van het handboek);
  - server/public_html/fonts/, logo.svg, icoon.svg, kunst.jpg (het schilderij op de aanmeldpagina) en de iconen
    voor het beginscherm van een gsm (icoon-180.png, icoon-192.png, icoon-512.png, icoon-maskeerbaar-512.png);
  - server/public_html/voorbeeld/integralen/: een kopie van de voorbeeldcursus in Website/ (index.html en assets/),
    het voorproefje van de interactieve theorie op #/plannen.
Bestaande versies blijven staan: een opmerking hoort bij de versie waarop ze gemaakt is.
"""
import hashlib
import importlib.util
import json
import shutil
import sys
from pathlib import Path

import pymupdf
import yaml
from PIL import Image

HIER = Path(__file__).resolve().parent
REPO = HIER.parent.parent
APP = HIER / "server" / "app"
PUBLIEK = HIER / "server" / "public_html"

# De bestanden die maak-pdf.py in een cursus zet. Dezelfde sleutels als EDITIES in lib.php.
EDITIES = [
    ("handboek", "handboek.pdf"),
    ("leerkracht", "leerkracht.pdf"),
    ("zelfstudie", "zelfstudie.pdf"),
    ("oplossingen", "handboek - numerieke oplossingen.pdf"),
    ("uitwerkingen", "handboek - uitgewerkte oplossingen.pdf"),
]


# De graden die op de site staan (sinds 13 november 2026 beide). De site, de voortgang en de feedback
# kennen beide graden al (sleutels "4/..." in de 3de graad, "2g5/..." in de 2de, uit maak-voorkanten.py).
GRADEN_OP_SITE = (2, 3)


_MV = None


def voorkanten_module():
    """Ontwerp/voorkanten/maak-voorkanten.py: de handboeken, pakketten, koepels en voorkanten."""
    global _MV
    if _MV is None:
        spec = importlib.util.spec_from_file_location("maak_voorkanten", REPO / "Ontwerp" / "voorkanten" / "maak-voorkanten.py")
        _MV = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(_MV)
    return _MV


def laad_lijst(graden=None):
    graden = graden or GRADEN_OP_SITE
    m = voorkanten_module()
    cfg = yaml.safe_load((REPO / "voortgang.yaml").read_text(encoding="utf-8"))
    status_van = cfg.get("handboeken") or {}
    boeken = []
    for pakket, map_, motief, jaar in m.ALLE_HANDBOEKEN:
        if m.graad(pakket) not in graden:
            continue
        sleutel = m.sleutel(pakket, map_)
        delen = map_.split("/")
        boeken.append({
            "sleutel": sleutel, "graad": m.graad(pakket), "finaliteit": m.finaliteit(pakket),
            "pakketid": m.pakket_id(pakket), "pakket": pakket,
            "pakketnr": int(pakket.split()[0]), "map": map_, "pad": m.cursusmap(pakket, map_).relative_to(REPO).as_posix(),
            "titel": delen[-1], "rubriek": "Extra" if m.is_extra(sleutel) else delen[0] if len(delen) > 1 else "",
            "jaar": jaar, "jaar_voorstel": m.jaar_voorstel(pakket, map_), "motief": motief,
            "status": status_van.get(sleutel, "gepland"),
        })
    # Per graad eerst de doorstroom, dan de dubbele finaliteit en de arbeidsmarktfinaliteit (de volgorde in ALLE_PAKKETTEN).
    # naam: zonder het nummer, met D/A in plaats van D-A (een map kan geen / bevatten); kort: de naam van het leerplan.
    pakketten = [{"id": m.pakket_id(p), "graad": m.graad(p), "finaliteit": m.finaliteit(p), "nr": int(p.split()[0]),
                  "naam": p.split(" ", 1)[1].replace("D-A", "D/A"), "kort": m.pakket_naam(p), "map": p,
                  "leerplan": v.get("leerplan"), "op_aanvraag": bool(v.get("op_aanvraag")),
                  "richtingen": v["richtingen"], "uren": v["uren"].replace("\\&", "&"),
                  "richtingenlijst": v.get("alle_richtingen") or v["richtingen"].split(", ")}
                 for g in sorted(graden, reverse=True) for p, v in m.ALLE_PAKKETTEN.items() if m.graad(p) == g]
    voortgang = {k: {"percentage": v["percentage"], "uitleg": v["uitleg"]} for k, v in cfg["statussen"].items()}
    return boeken, pakketten, voortgang


def schrijf_json(pad, data):
    tekst = json.dumps(data, ensure_ascii=False, indent=1)
    if not pad.exists() or pad.read_text(encoding="utf-8") != tekst:
        pad.write_text(tekst, encoding="utf-8")


def bewaar_versie(bron, sleutel, editie):
    """Geeft de hash van de PDF; bewaart ze als nieuwe versie als ze er nog niet is."""
    h = hashlib.sha256(bron.read_bytes()).hexdigest()[:20]
    pdf, meta = APP / "versies" / f"{h}.pdf", APP / "versies" / f"{h}.json"
    if not meta.exists():
        shutil.copyfile(bron, pdf)
        with pymupdf.open(pdf) as doc:
            maten = [[round(p.rect.width, 2), round(p.rect.height, 2)] for p in doc]
            inhoud = [[n, t, p] for n, t, p, *_ in doc.get_toc(simple=False)]
        schrijf_json(meta, {"hash": h, "sleutel": sleutel, "editie": editie, "paginas": len(maten), "maten": maten,
                            "inhoud": inhoud, "gebouwd": int(bron.stat().st_mtime)})
        print(f"  nieuwe versie {h}  {sleutel} · {editie}")
    return h, json.loads(meta.read_text(encoding="utf-8"))


ZOEK = pymupdf.TEXT_DEHYPHENATE | pymupdf.TEXT_MEDIABOX_CLIP  # zonder TEXT_PRESERVE_LIGATURES: "fi" vindt ook de ligatuur


def verwerkt(boeken, laatste):
    """Wat uit de feedback verwerkt is: <cursusbron>/verwerkt.yaml (zie het voorbeeld in Tweedegraadsfuncties).
    Per versie in laatste.json de plek van elk item in de PDF (de eerste pagina waarop `zoek` staat), als
    {hash: [{pagina, rect (in delen van de pagina), tekst, feedback, datum}]} in app/verwerkt.json.
    De lezer tekent er een stippellijn naar een kader "Verwerkt: ..." mee. Versies die niet meer in laatste.json
    staan, houden wat ze hadden."""
    pad = APP / "verwerkt.json"
    uit = json.loads(pad.read_text(encoding="utf-8")) if pad.exists() else {}
    nooit = {}
    for b in boeken:
        bron = REPO / "Handboeken" / f"{b['graad']}de graad" / "cursussen" / b["titel"] / "verwerkt.yaml"
        if not bron.is_file() or b["sleutel"] not in laatste:
            continue
        items = yaml.safe_load(bron.read_text(encoding="utf-8")) or []
        for e, x in laatste[b["sleutel"]].items():
            lijst = []
            with pymupdf.open(APP / "versies" / f"{x['hash']}.pdf") as doc:
                for i, item in enumerate(items):
                    zinnen = item["zoek"] if isinstance(item["zoek"], list) else [item["zoek"]]
                    plek = next(((p, r) for z in zinnen for p in doc for r in [p.search_for(str(z), flags=ZOEK)] if r), None)
                    if not plek:
                        continue
                    p, rs = plek
                    W, H = p.rect.width, p.rect.height
                    x0, y0 = min(r.x0 for r in rs), min(r.y0 for r in rs)
                    x1, y1 = max(r.x1 for r in rs), max(r.y1 for r in rs)
                    lijst.append({"pagina": p.number + 1, "rect": [round(x0 / W, 4), round(y0 / H, 4), round(x1 / W, 4), round(y1 / H, 4)],
                                  "tekst": str(item["tekst"]).strip(), "feedback": item.get("feedback", []), "datum": str(item.get("datum", ""))})
                    nooit.setdefault(bron, set()).add(i)
            uit[x["hash"]] = lijst
        nooit.setdefault(bron, set())
    for bron, gevonden in nooit.items():
        items = yaml.safe_load(bron.read_text(encoding="utf-8")) or []
        for i, item in enumerate(items):
            if i not in gevonden:
                print(f"  verwerkt: niet gevonden in een PDF: {item['zoek']!r} ({bron.parent.name})")
    schrijf_json(pad, uit)


def omslag(h):
    doel = PUBLIEK / "omslagen" / f"{h}.webp"
    if doel.exists():
        return
    with pymupdf.open(APP / "versies" / f"{h}.pdf") as doc:
        p = doc[0]
        pix = p.get_pixmap(matrix=pymupdf.Matrix(480 / p.rect.width, 480 / p.rect.width), alpha=False)
    Image.frombytes("RGB", (pix.width, pix.height), pix.samples).save(doel, "WEBP", quality=82, method=6)


def voorkanten_zonder_pdf(boeken):
    """Een handboek zonder PDF (zoals de 2de graad nu) krijgt zijn voorkant uit Ontwerp/voorkanten/alle-voorkanten.pdf,
    als voorkant-<sleutel-hash>.webp. Zo staat in de boekenkast al de echte voorkant in plaats van een leeg vak."""
    bron = REPO / "Ontwerp" / "voorkanten" / "alle-voorkanten.pdf"
    zonder = [b for b in boeken if not b.get("heeft_pdf")]
    if not zonder or not bron.exists():
        return
    with pymupdf.open(bron) as doc:
        pagina = {titel: p - 1 for _, titel, p in doc.get_toc()}
        for b in zonder:
            titel = f"{'2de graad, ' if b['graad'] == 2 else ''}Pakket {b['pakketnr']} - {b['titel']}"
            if titel not in pagina:
                continue
            naam = "voorkant-" + hashlib.sha256(b["sleutel"].encode("utf-8")).hexdigest()[:16] + ".webp"
            p = doc[pagina[titel]]
            pix = p.get_pixmap(matrix=pymupdf.Matrix(480 / p.rect.width, 480 / p.rect.width), alpha=False)
            Image.frombytes("RGB", (pix.width, pix.height), pix.samples).save(PUBLIEK / "omslagen" / naam, "WEBP", quality=82, method=6)
            b["voorkant"] = f"/omslagen/{naam}"


def vaste_bestanden():
    fonts = PUBLIEK / "fonts"
    fonts.mkdir(exist_ok=True)
    for f in (HIER.parent / "assets" / "fonts").glob("*.woff2"):
        shutil.copyfile(f, fonts / f.name)
    shutil.copyfile(HIER.parent / "assets" / "fonts" / "LICENSE.md", fonts / "LICENSE.md")
    shutil.copyfile(REPO / "Ontwerp" / "logo" / "axiomath-logo.svg", PUBLIEK / "logo.svg")
    shutil.copyfile(REPO / "Ontwerp" / "logo" / "axiomath-icoon.svg", PUBLIEK / "icoon.svg")  # favicon: de O met de assen
    app_iconen()
    kunst = PUBLIEK / "kunst.jpg"
    if not kunst.exists():  # Rafaël, De school van Athene (publiek domein)
        with Image.open(REPO / "Ontwerp" / "omslagen" / "omslag-athene.jpg") as im:
            im.thumbnail((1600, 1600))
            im.convert("RGB").save(kunst, quality=82, optimize=True, progressive=True)


def app_iconen():
    """De iconen voor het beginscherm van een gsm of tablet (manifest.webmanifest en apple-touch-icon in index.html).
    icoon-192/512: het icoon zelf, met de afgeronde hoeken. icoon-180 (iPhone) en icoon-maskeerbaar-512 (Android):
    een volle vierkante achtergrond, want het toestel rondt de hoeken zelf af of knipt er een cirkel uit."""
    with Image.open(REPO / "Ontwerp" / "logo" / "axiomath-icoon.png") as im:
        im = im.convert("RGBA")
        inkt = im.getpixel((im.width // 2, 5))  # de achtergrond van het icoon (#12202B)
        for n in (192, 512):
            im.resize((n, n), Image.LANCZOS).save(PUBLIEK / f"icoon-{n}.png", optimize=True)
        for naam, n, deel in [("icoon-180.png", 180, 1.0), ("icoon-maskeerbaar-512.png", 512, 0.8)]:
            vol = Image.new("RGBA", (n, n), inkt)  # 0.8: binnen de veilige zone van een maskeerbaar icoon
            m = round(n * deel)
            vol.alpha_composite(im.resize((m, m), Image.LANCZOS), ((n - m) // 2, (n - m) // 2))
            vol.convert("RGB").save(PUBLIEK / naam, optimize=True)


def voorbeeldcursus():
    """Kopieert de voorbeeldcursus (Website/index.html en assets/) naar /voorbeeld/integralen/. Pas ze aan in Website/."""
    bron, doel = HIER.parent / "assets", PUBLIEK / "voorbeeld" / "integralen"
    # Erover kopiëren in plaats van eerst alles te wissen: OneDrive weigert soms een map te verwijderen (WinError 5).
    shutil.copytree(bron, doel / "assets", dirs_exist_ok=True)
    shutil.copyfile(HIER.parent / "index.html", doel / "index.html")
    for f in (doel / "assets").rglob("*"):  # wat niet meer in Website/assets staat, mag weg (lukt het niet, geen probleem)
        if f.is_file() and not (bron / f.relative_to(doel / "assets")).exists():
            try:
                f.unlink()
            except OSError as e:
                print(f"  kon {f.name} niet wissen: {e}")


# De koepels op de site. KOV: de voorkant in de PDF zelf. Een andere koepel: dezelfde PDF, maar de site zet bij het
# downloaden de voorkant van die koepel erop (app.js, met pdf-lib in de browser). POV staat niet op de site: wie
# dat vraagt, krijgt het (zie "Over"). De gegevens: Handboeken/koepels.yaml, via maak-voorkanten.py.
KOEPELS_OP_SITE = [("KOV", "Katholiek onderwijs (KOV)"), ("GO", "GO!")]


def koepels(graden):
    m = voorkanten_module()
    tabel = m.koepeltabel()
    return {"lijst": [{"id": k, "naam": n} for k, n in KOEPELS_OP_SITE],
            "graden": {str(g): {k: tabel[g][k] for k, _ in KOEPELS_OP_SITE} for g in graden if g in tabel}}


def koepel_omslagen(boeken, laatste):
    """Per andere koepel dan KOV, in public_html/omslagen/:
      <k>-laag-<h>.pdf  per editie een laag van één pagina: de voorkant ZONDER kunstwerk (band, titel, gegevens, motief).
                        De browser legt ze over de eerste pagina van de PDF, waar het kunstwerk al op staat. Zo blijft
                        elke laag klein (~0,2 MB in plaats van 1 à 2 MB met het kunstwerk).
      <k>-<h>.webp      de volledige voorkant als beeld voor de boekenkast.
    h hangt af van wat er op de voorkant staat (motief, kunstwerk, gegevens, editie): een voorkant die niet verandert,
    houdt zijn naam, wordt niet opnieuw gebouwd en niet opnieuw uitgerold."""
    m = voorkanten_module()
    vk = REPO / "Ontwerp" / "voorkanten"
    om = PUBLIEK / "omslagen"
    vast = (vk / "voorkant.tex").read_text(encoding="utf-8")

    def bouw(koepel, items, zonder_kunst):
        """items: [(b, editie, bestandsnaam)]; bouwt alleen wat er nog niet is."""
        nodig = [x for x in items if not (om / x[2]).exists()]
        if not nodig:
            return
        pdf = m.bouw_alles(koepel, [(b["pakket"], b["map"], b["motief"], None, e) for b, e, _ in nodig],
                           naam=f"site-voorkanten-{koepel.lower()}", zonder_kunst=zonder_kunst)
        with pymupdf.open(pdf) as doc:
            for p, (_, _, naam) in enumerate(nodig):
                if naam.endswith(".pdf"):
                    with pymupdf.open() as een:
                        een.insert_pdf(doc, from_page=p, to_page=p)
                        een.save(om / naam, garbage=4, deflate=True)
                else:
                    pg = doc[p]
                    pix = pg.get_pixmap(matrix=pymupdf.Matrix(480 / pg.rect.width, 480 / pg.rect.width), alpha=False)
                    Image.frombytes("RGB", (pix.width, pix.height), pix.samples).save(om / naam, "WEBP", quality=82, method=6)
        for f in vk.glob(f"site-voorkanten-{koepel.lower()}.*"):
            f.unlink()
        print(f"  {koepel}: {len(nodig)} nieuwe {'lagen' if zonder_kunst else 'voorkanten'}")

    for koepel, _ in KOEPELS_OP_SITE:
        if koepel == "KOV":
            continue
        tekst = m.koepel_voorkant(koepel)
        lagen, beelden = [], []
        for b in boeken:
            motief = vk / "motieven" / f"{b['motief']}.tex"
            if not motief.exists():
                continue
            beeld = motief.read_text(encoding="utf-8")
            bestand = next((r.split("{")[1].split("}")[0] for r in beeld.splitlines() if r.startswith("\\def\\omslagbestand")), "")
            kunst = REPO / "Ontwerp" / "omslagen" / bestand
            kunst_h = hashlib.sha256(kunst.read_bytes()).hexdigest() if kunst.is_file() else ""
            h = lambda *x: hashlib.sha256("|".join([koepel, b["sleutel"], beeld, repr(tekst.get(b["sleutel"])), vast, *x])
                                          .encode("utf-8")).hexdigest()[:20]
            k = b.setdefault("koepelomslag", {}).setdefault(koepel, {"pdf": {}})
            naam = f"{koepel.lower()}-{h('handboek', kunst_h)}.webp"
            beelden.append((b, "handboek", naam))
            k["beeld"] = f"/omslagen/{naam}"
            for e in laatste.get(b["sleutel"], {}):
                naam = f"{koepel.lower()}-laag-{h(e)}.pdf"
                lagen.append((b, e, naam))
                k["pdf"][e] = f"/omslagen/{naam}"
        bouw(koepel, beelden, False)
        bouw(koepel, lagen, True)


def main(argv=()):
    """--graden 2,3: bouw lokaal met deze graden in plaats van GRADEN_OP_SITE (om de 2de graad te testen)."""
    graden = None
    if "--graden" in argv:
        graden = tuple(int(g) for g in argv[argv.index("--graden") + 1].split(","))
    (APP / "versies").mkdir(parents=True, exist_ok=True)
    (PUBLIEK / "omslagen").mkdir(parents=True, exist_ok=True)
    boeken, pakketten, voortgang = laad_lijst(graden)
    for b in boeken:
        b["heeft_pdf"] = any((REPO / b["pad"] / bestand).is_file() for _, bestand in EDITIES)
    voorkanten_zonder_pdf(boeken)
    for b in boeken:
        del b["heeft_pdf"]
    laatste = {}
    for b in boeken:
        cursus = REPO / b["pad"]
        for editie, bestand in EDITIES:
            if (cursus / bestand).is_file():
                h, meta = bewaar_versie(cursus / bestand, b["sleutel"], editie)
                laatste.setdefault(b["sleutel"], {})[editie] = {"hash": h, "paginas": meta["paginas"], "gebouwd": meta["gebouwd"]}
        ed = laatste.get(b["sleutel"])
        if ed:
            omslag((ed.get("handboek") or next(iter(ed.values())))["hash"])
    koepel_omslagen(boeken, laatste)
    schrijf_json(APP / "boeken.json", {"pakketten": pakketten, "boeken": boeken, "voortgang": voortgang,
                                       "koepels": koepels(graden or GRADEN_OP_SITE)})
    schrijf_json(APP / "laatste.json", laatste)
    verwerkt(boeken, laatste)
    vaste_bestanden()
    voorbeeldcursus()
    n = sum(len(v) for v in laatste.values())
    print(f"{len(laatste)} van de {len(boeken)} handboeken hebben een PDF ({n} edities). Klaar: server/ (uitrollen met uitrol.py).")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main(sys.argv[1:])
