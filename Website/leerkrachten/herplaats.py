"""Hangt de open feedback aan de nieuwste versie van elke PDF. uitrol.py draait dit na elke uitrol; los kan ook:

    py -3.13 -P herplaats.py           verplaats wat open is (nieuw of goedgekeurd) en nog op een oudere versie staat
    py -3.13 -P herplaats.py --droog   toon alleen wat er zou gebeuren (en maak de uitsneden lokaal)

Waarom: leerkrachten lezen altijd de nieuwste versie. Een opmerking die nog niet beslist of nog niet verwerkt is, moet
daar staan, anders ziet een collega ze niet en vraagt die hetzelfde opnieuw. Verwerkte en afgekeurde opmerkingen blijven
op de versie waar ze gemaakt zijn (de kaders Verwerkt in verwerkt.yaml tonen op de nieuwe versie wat er veranderde).

Hoe de nieuwe plek gevonden wordt, per opmerking:
  1. De woorden in het kader en een strook erboven en eronder (de context) uit de oude PDF (server/app/versies/).
  2. Op de pagina's van de nieuwe versie (eerst rond dezelfde pagina) de langste gelijke reeksen woorden
     (difflib). De pagina met de meeste gelijke woorden wint.
  3. Het kader schuift mee met die woorden (de mediaan van de verschuiving). Staan de woorden IN het kader er nog
     (minstens 70 %), dan is de plek exact. Anders is de tekst veranderd: de plek is bij benadering.
  4. Te weinig gelijke woorden: het begin van dezelfde sectie (of hetzelfde hoofdstuk) in de nieuwe inhoudstafel,
     bij benadering. Ook dat niet: de opmerking blijft staan en het rapport meldt ze.
De oude plek blijft op de server bewaard (feedback.oorspronkelijk), met een uitsnede van het oude kader als PNG in
server/public_html/uitsneden/f<id>.png: zo blijft te zien waar de leerkracht het over had, ook als de oude PDF
ooit opgeruimd wordt (uitrol.py --opruimen). Het verslag komt in feedback/herplaatst.md (zonder namen).
Werkt met de sleutel voor Claude (zie feedback.py).
"""
import difflib
import importlib.util
import json
import re
import statistics
import sys
from pathlib import Path

import pymupdf

HIER = Path(__file__).resolve().parent
APP = HIER / "server" / "app"
UITSNEDEN = HIER / "server" / "public_html" / "uitsneden"
VERSLAG = HIER / "feedback" / "herplaatst.md"
WOORDEN = pymupdf.TEXT_DEHYPHENATE | pymupdf.TEXT_MEDIABOX_CLIP
CONTEXT = 70      # punten boven en onder het kader die mee zoeken
GENOEG = 0.45     # deel van de contextwoorden dat terug moet komen om de pagina te vertrouwen
EXACT = 0.70      # deel van de woorden in het kader dat er nog moet staan voor een exacte plek


def module(naam, bestand):
    spec = importlib.util.spec_from_file_location(naam, HIER / bestand)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def norm(w):
    return re.sub(r"[^\w]", "", w.lower())


def woorden(pagina):
    """[(rect, token)] van een pagina, zonder lege tokens."""
    uit = []
    for x0, y0, x1, y1, w, *_ in pagina.get_text("words", flags=WOORDEN):
        t = norm(w)
        if t:
            uit.append((pymupdf.Rect(x0, y0, x1, y1), t))
    return uit


def kader(pagina, rect):
    """Het kader in punten. Een klik (een punt) wordt een klein vak rond die plek."""
    W, H = pagina.rect.width, pagina.rect.height
    R = pymupdf.Rect(rect[0] * W, rect[1] * H, rect[2] * W, rect[3] * H)
    if R.width < 12 and R.height < 12:
        m = R.tl + (R.br - R.tl) * 0.5
        R = pymupdf.Rect(m.x - 40, m.y - 8, m.x + 40, m.y + 8)
    return R


def overeenkomst(oud, nieuw):
    """Gelijke reeksen woorden: [(i in oud, j in nieuw)]. Alleen reeksen die iets zeggen: minstens 3 woorden, of
    2 woorden van minstens 4 letters, of 1 woord van minstens 8 letters. Losse paren zoals "van de" tellen niet:
    die staan overal."""
    sm = difflib.SequenceMatcher(None, [t for _, t in oud], [t for _, t in nieuw], autojunk=False)
    paren = []
    for a, b, n in sm.get_matching_blocks():
        lang = [len(oud[a + k][1]) for k in range(n)]
        if n >= 3 or (n == 2 and min(lang) >= 4) or (n == 1 and lang[0] >= 8):
            paren += [(a + k, b + k) for k in range(n)]
    return paren


def zoek_sectie(doc, hoofdstuk, sectie):
    """Pagina, kop en hoogte van de kop (in punten van boven) van dezelfde sectie (of hetzelfde hoofdstuk) in de
    inhoudstafel van de nieuwe versie. De hoogte komt uit het doel van de bladwijzer: een sectie kan dezelfde naam
    hebben als haar hoofdstuk, en dan vindt zoeken op de titel de verkeerde kop."""
    def plek(p, titel, doel):
        to = (doel or {}).get("to")
        return p, titel, (doc[p - 1].rect.height - to.y) if to is not None else None
    toc = doc.get_toc(simple=False)
    hfst = None
    for niveau, titel, p, doel in toc:
        if niveau == 1:
            hfst = titel
        if hoofdstuk and hfst == hoofdstuk and ((niveau == 2 and titel == sectie) or (niveau == 1 and not sectie)):
            return plek(p, titel, doel)
    for niveau, titel, p, doel in toc:
        if niveau == 1 and titel == hoofdstuk:
            return plek(p, titel, doel)
    return None


def plaats(oud_doc, nieuw_doc, f):
    """(pagina, rect in delen van de pagina, benaderd, hoe) of None."""
    po = oud_doc[f["pagina"] - 1]
    R = kader(po, f["rect"])
    ow = woorden(po)
    strook = pymupdf.Rect(0, R.y0 - CONTEXT, po.rect.width, R.y1 + CONTEXT)
    ctx = [(r, t) for r, t in ow if strook.contains(r.tl + (r.br - r.tl) * 0.5)]
    binnen = {i for i, (r, _) in enumerate(ctx) if R.intersects(r)}  # ook een woord dat het kader maar half raakt
    beste = None
    if len(ctx) >= 3:
        rond = sorted(range(len(nieuw_doc)), key=lambda i: abs(i - (f["pagina"] - 1)))
        for deel in (rond[:30], rond[30:]):  # eerst rond de oude pagina; pas als het daar niet staat, de rest van het boek
            for i in deel:
                nw = woorden(nieuw_doc[i])
                paren = overeenkomst(ctx, nw)
                if not beste or len(paren) > len(beste[1]):
                    beste = (i, paren, nw)
            if beste and len(beste[1]) >= GENOEG * len(ctx):
                break
    if beste and len(beste[1]) >= max(3, GENOEG * len(ctx)):
        i, paren, nw = beste
        pn = nieuw_doc[i]
        dx = statistics.median(nw[j][0].x0 - ctx[a][0].x0 for a, j in paren)
        dy = statistics.median(nw[j][0].y0 - ctx[a][0].y0 for a, j in paren)
        N = pymupdf.Rect(R.x0 + dx, R.y0 + dy, R.x1 + dx, R.y1 + dy) & pn.rect
        # een woord uit het oude kader telt alleen als het ook in het nieuwe kader staat (niet ergens verder op de pagina)
        ruim = pymupdf.Rect(N.x0 - 6, N.y0 - 6, N.x1 + 6, N.y1 + 6)
        gevonden = {a for a, j in paren if a in binnen and ruim.contains(nw[j][0].tl + (nw[j][0].br - nw[j][0].tl) * 0.5)}
        # Exact: de woorden in het kader staan er nog. Zonder woorden in het kader (een figuur): bijna alle context.
        exact = (len(gevonden) >= EXACT * len(binnen)) if binnen else len(paren) >= EXACT * len(ctx)
        W, H = pn.rect.width, pn.rect.height
        return i + 1, [round(N.x0 / W, 4), round(N.y0 / H, 4), round(N.x1 / W, 4), round(N.y1 / H, 4)], not exact, \
            f"{len(paren)}/{len(ctx)} woorden terug" + ("" if exact else f", in het kader {len(gevonden)}/{len(binnen)}")
    s = zoek_sectie(nieuw_doc, f.get("hoofdstuk"), f.get("sectie"))
    if not s:
        return None
    p, titel, y = s
    pn = nieuw_doc[p - 1]
    W, H = pn.rect.width, pn.rect.height
    y = 0.08 * H if y is None else y
    kop = sorted(pn.search_for(titel[:60]), key=lambda r: abs(r.y0 - y))  # de kop die het dichtst bij de bladwijzer staat
    k = kop[0] if kop and abs(kop[0].y0 - y) < 40 else pymupdf.Rect(0, y, W, y + 18)
    return p, [0.12, round(k.y0 / H, 4), 0.88, round(k.y1 / H, 4)], True, f"tekst niet teruggevonden: begin van '{titel}'"


def uitsnede(doc, f):
    """Een PNG van het oude kader met wat ruimte errond, als het oude kader zichtbaar blijft na het opruimen."""
    doel = UITSNEDEN / f"f{f['id']}.png"
    if doel.exists():
        return doel  # de eerste uitsnede blijft: daar had de leerkracht het over
    p = doc[f["pagina"] - 1]
    R = kader(p, f["rect"])
    clip = pymupdf.Rect(R.x0 - 18, R.y0 - 24, R.x1 + 18, R.y1 + 24)
    if clip.width < 300:
        m = (clip.x0 + clip.x1) / 2
        clip = pymupdf.Rect(m - 150, clip.y0, m + 150, clip.y1)
    clip &= p.rect
    UITSNEDEN.mkdir(parents=True, exist_ok=True)
    pix = p.get_pixmap(clip=clip, dpi=150, alpha=False)
    rand = pymupdf.Rect(R.x0 - clip.x0, R.y0 - clip.y0, R.x1 - clip.x0, R.y1 - clip.y0) * (150 / 72)
    # het oude kader zelf in een zachte kleur, zoals de markering in de lezer
    for x in range(max(0, int(rand.x0)), min(pix.width, int(rand.x1))):
        for y in (int(rand.y0), int(rand.y1) - 1):
            if 0 <= y < pix.height:
                pix.set_pixel(x, y, (232, 120, 40))
    for y in range(max(0, int(rand.y0)), min(pix.height, int(rand.y1))):
        for x in (int(rand.x0), int(rand.x1) - 1):
            if 0 <= x < pix.width:
                pix.set_pixel(x, y, (232, 120, 40))
    pix.save(doel)
    return doel


def main(argv=()):
    droog = "--droog" in argv
    fb = module("feedbackscript", "feedback.py")
    laatste = json.loads((APP / "laatste.json").read_text(encoding="utf-8"))
    rijen = fb.api("GET", "feedback", {"status": "open", "niveau": "plek"})
    te_doen = []
    for f in rijen:
        jongste = laatste.get(f["sleutel"] or "", {}).get(f["editie"] or "", {}).get("hash")
        if f.get("versie") and f.get("rect") and jongste and jongste != f["versie"]:
            te_doen.append((f, jongste))
    print(f"herplaatsen: {len(rijen)} open opmerkingen op een plek, {len(te_doen)} op een oudere versie")
    if not te_doen:
        return True
    plan, niet = [], []
    for f, jongste in te_doen:
        oud = APP / "versies" / f"{f['versie']}.pdf"
        if not oud.exists():
            niet.append((f, "de oude PDF staat niet lokaal in server/app/versies"))
            continue
        with pymupdf.open(oud) as od, pymupdf.open(APP / "versies" / f"{jongste}.pdf") as nd:
            p = plaats(od, nd, f)
            if not p:
                niet.append((f, "tekst, sectie en hoofdstuk niet teruggevonden"))
                continue
            png = uitsnede(od, f)
        plan.append((f, jongste, p, png))
    regels = [f"# Herplaatst ({'droog' if droog else 'uitgevoerd'})", ""]
    for f, jongste, (pagina, rect, benaderd, hoe), _ in plan:
        regels.append(f"- **#{f['id']}** {f['sleutel']} · {f['editie']}: p. {f['pagina']} → p. {pagina}"
                      f"{' · **bij benadering**' if benaderd else ''} ({hoe})")
    for f, waarom in niet:
        regels.append(f"- **#{f['id']}** {f['sleutel']} · {f['editie']}: NIET verplaatst, {waarom}")
    VERSLAG.parent.mkdir(exist_ok=True)
    VERSLAG.write_text("\n".join(regels) + "\n", encoding="utf-8")
    print("\n".join(regels[2:]))
    if droog:
        print(f"(droog: niets verplaatst; uitsneden in {UITSNEDEN})")
        return True
    # eerst de uitsneden online, dan de plekken: zo vindt de server de uitsnede meteen
    ur = module("uitrolscript", "uitrol.py")
    ur.map_maken(f"{ur.DOMEIN}/public_html", "uitsneden")
    online = ur.lijst(f"{ur.DOMEIN}/public_html/uitsneden")
    for _, _, _, png in plan:
        if f"{ur.DOMEIN}/public_html/uitsneden/{png.name}" not in online:
            ur.upload(png, "public_html/uitsneden")
    for f, jongste, (pagina, rect, benaderd, _), _ in plan:
        fb.api("POST", f"feedback/{f['id']}/plek", body={"versie": jongste, "pagina": pagina, "rect": rect, "benaderd": benaderd})
    print(f"  {len(plan)} verplaatst, {sum(p[2][2] for p in plan)} bij benadering, {len(niet)} niet (zie {VERSLAG.relative_to(HIER)})")
    return not niet


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main(sys.argv[1:])
