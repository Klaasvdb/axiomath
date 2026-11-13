"""Bouwt de leerkrachtensite in server/, klaar voor uitrol.py. Uitvoeren vanuit deze map:

    py -3.13 -P maak.py

Leest:
  - Ontwerp/voorkanten/maak-voorkanten.py en voortgang.yaml: de pakketten, de handboeken en hun status;
  - de PDF's die Opmaak/maak-pdf.py in elke cursus zet (handboek, leerkracht, zelfstudie, oplossingen).
Schrijft:
  - server/app/boeken.json en server/app/laatste.json;
  - server/app/versies/<h>.pdf en <h>.json: elke nieuwe PDF als vaste versie (h = begin van de SHA-256);
  - server/public_html/omslagen/<h>.webp: de voorkant (pagina 1 van het handboek);
  - server/public_html/fonts/, logo.svg, icoon.svg, icoon-180.png en kunst.jpg (het schilderij op de aanmeldpagina);
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


def laad_lijst(graden=None):
    graden = graden or GRADEN_OP_SITE
    pad = REPO / "Ontwerp" / "voorkanten" / "maak-voorkanten.py"
    spec = importlib.util.spec_from_file_location("maak_voorkanten", pad)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    cfg = yaml.safe_load((REPO / "voortgang.yaml").read_text(encoding="utf-8"))
    status_van = cfg.get("handboeken") or {}
    boeken = []
    for pakket, map_, motief, jaar in m.ALLE_HANDBOEKEN:
        if m.graad(pakket) not in graden:
            continue
        sleutel = m.sleutel(pakket, map_)
        delen = map_.split("/")
        boeken.append({
            "sleutel": sleutel, "graad": m.graad(pakket), "pakketid": m.pakket_id(pakket), "pakket": pakket,
            "pakketnr": int(pakket.split()[0]), "map": map_, "pad": m.cursusmap(pakket, map_).relative_to(REPO).as_posix(),
            "titel": delen[-1], "rubriek": delen[0] if len(delen) > 1 else "",
            "jaar": jaar, "motief": motief, "status": status_van.get(sleutel, "gepland"),
        })
    pakketten = [{"id": m.pakket_id(p), "graad": m.graad(p), "nr": int(p.split()[0]), "naam": p.split(" ", 1)[1], "map": p,
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
    with Image.open(REPO / "Ontwerp" / "logo" / "axiomath-icoon.png") as im:  # voor het beginscherm van een gsm
        im.resize((180, 180), Image.LANCZOS).save(PUBLIEK / "icoon-180.png", optimize=True)
    kunst = PUBLIEK / "kunst.jpg"
    if not kunst.exists():  # Rafaël, De school van Athene (publiek domein)
        with Image.open(REPO / "Ontwerp" / "omslagen" / "omslag-athene.jpg") as im:
            im.thumbnail((1600, 1600))
            im.convert("RGB").save(kunst, quality=82, optimize=True, progressive=True)


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
    schrijf_json(APP / "boeken.json", {"pakketten": pakketten, "boeken": boeken, "voortgang": voortgang})
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
    schrijf_json(APP / "laatste.json", laatste)
    vaste_bestanden()
    voorbeeldcursus()
    n = sum(len(v) for v in laatste.values())
    print(f"{len(laatste)} van de {len(boeken)} handboeken hebben een PDF ({n} edities). Klaar: server/ (uitrollen met uitrol.py).")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main(sys.argv[1:])
