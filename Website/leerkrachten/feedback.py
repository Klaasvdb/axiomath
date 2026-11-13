"""De feedback van leerkrachten op axiomath.be ophalen en verwerken, met Claude Code of met de hand.

    py -3.13 -P feedback.py haal                        alle open feedback
    py -3.13 -P feedback.py haal Integralen             alleen handboeken waarvan titel of map 'Integralen' bevat
    py -3.13 -P feedback.py haal --pakket 4 --soort fout --status nieuw
    py -3.13 -P feedback.py zet 12 behandeling          status: nieuw, behandeling, verwerkt, afgewezen
    py -3.13 -P feedback.py zet 12 verwerkt --antwoord "Aangepast, dank je!" --notitie "commit abc123"

'haal' schrijft feedback/open.md (leesbaar, per handboek, hoofdstuk en pagina) en feedback/open.json
(dezelfde opmerkingen met id, map in de repo, citaat en link naar de plek). De map feedback/ staat in .gitignore.
Er staan nooit namen van leerkrachten in.

De sleutel: een beheerder maakt hem bij Beheer > Leerkrachten > 'Sleutels voor Claude' (geen account nodig). Zet hem in het bestand
~/.axiomath-sleutel of in de omgevingsvariabele AXIOMATH_SLEUTEL. Een andere server (de testreeks): AXIOMATH_URL;
een andere uitvoermap: AXIOMATH_UIT.
Alleen de standaardbibliotheek van Python.
"""
import argparse
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

HIER = Path(__file__).resolve().parent
UIT = Path(os.environ.get("AXIOMATH_UIT") or HIER / "feedback")
STATUSSEN = ["nieuw", "behandeling", "verwerkt", "afgewezen"]


def sleutel():
    s = os.environ.get("AXIOMATH_SLEUTEL", "").strip()
    pad = Path.home() / ".axiomath-sleutel"
    if not s and pad.is_file():
        s = pad.read_text(encoding="utf-8").strip()
    if not s:
        sys.exit("Geen sleutel. Vraag het team om een sleutel voor Claude "
                 f"en zet ze in {pad} of in AXIOMATH_SLEUTEL.")
    return s


def api(methode, pad, params=None, body=None):
    url = os.environ.get("AXIOMATH_URL", "https://axiomath.be").rstrip("/")
    q = urllib.parse.urlencode({"r": pad, **{k: v for k, v in (params or {}).items() if v}})
    h = {"X-Axiomath-Sleutel": sleutel(), "X-Axiomath": "1", "User-Agent": "axiomath-feedback"}
    if methode in ("PATCH", "DELETE"):
        h["X-Methode"] = methode
    data = None
    if methode != "GET":
        data = json.dumps(body or {}).encode()
        h["Content-Type"] = "application/json"
    req = urllib.request.Request(f"{url}/api/index.php?{q}", data=data, headers=h, method="GET" if methode == "GET" else "POST")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            inhoud = r.read().decode("utf-8")
            return json.loads(inhoud) if "json" in r.headers.get("Content-Type", "") else inhoud
    except urllib.error.HTTPError as e:
        try:
            fout = json.loads(e.read()).get("fout")
        except ValueError:
            fout = None
        sys.exit(f"De server weigert ({e.code}): {fout or e.reason}")
    except urllib.error.URLError as e:
        sys.exit(f"Geen verbinding met {url}: {e.reason}")


def haal(a):
    params = {"status": a.status if a.status != "alles" else "", "pakket": a.pakket, "soort": a.soort,
              "ernst": a.ernst, "niveau": a.niveau}
    rijen = api("GET", "feedback", params)
    if a.handboek:
        z = a.handboek.lower()
        rijen = [r for r in rijen if z in (r["handboek"] or "").lower() or z in (r["map"] or "").lower()
                 or z in (r["sleutel"] or "").lower()]
    UIT.mkdir(exist_ok=True)
    (UIT / "open.json").write_text(json.dumps(rijen, ensure_ascii=False, indent=1), encoding="utf-8")
    # De Markdown komt van de server, in dezelfde volgorde als de export in Beheer. Met een filter op het
    # handboek vragen we ze per gevonden handboek op.
    sleutels = sorted({r["sleutel"] for r in rijen if r["sleutel"]}) if a.handboek else [""]
    md = [api("GET", "feedback", {**params, "sleutel": s, "formaat": "md"}) for s in sleutels] if rijen else []
    md = md[:1] + [m.split("\n", 1)[1] for m in md[1:]]  # één titel bovenaan
    (UIT / "open.md").write_text("\n".join(md) or "# Geen feedback met dit filter\n", encoding="utf-8")
    per = {}
    for r in rijen:
        per[r["handboek"] or "Algemeen"] = per.get(r["handboek"] or "Algemeen", 0) + 1
    print(f"{len(rijen)} opmerking(en) in {UIT / 'open.md'} en {UIT / 'open.json'}")
    for titel, n in sorted(per.items(), key=lambda x: -x[1]):
        print(f"  {n:3}  {titel}")


def zet(a):
    if a.status:
        api("PATCH", f"feedback/{a.id}", body={"status": a.status, **({"notitie": a.notitie} if a.notitie is not None else {})})
    elif a.notitie is not None:
        api("PATCH", f"feedback/{a.id}", body={"notitie": a.notitie})
    if a.antwoord:
        api("POST", f"feedback/{a.id}/reactie", body={"tekst": a.antwoord})
    if not (a.status or a.notitie is not None or a.antwoord):
        sys.exit("Geef een status, --antwoord of --notitie.")
    print(f"#{a.id}: " + ", ".join(x for x in [a.status and f"status {a.status}", a.antwoord and "antwoord gegeven",
                                                  a.notitie is not None and "notitie gezet"] if x))


def main():
    p = argparse.ArgumentParser(description="Feedback van axiomath.be ophalen en verwerken.")
    sub = p.add_subparsers(dest="actie", required=True)
    h = sub.add_parser("haal", help="de feedback ophalen naar feedback/open.md en open.json")
    h.add_argument("handboek", nargs="?", help="deel van de titel of de map van een handboek")
    h.add_argument("--status", default="open", choices=["open", "alles"] + STATUSSEN, help="standaard: open (nieuw en in behandeling)")
    h.add_argument("--pakket", help="1 tot 4 (3de graad) of 2g1 tot 2g5 (2de graad)")
    h.add_argument("--soort", help="fout, taal, oefening, uitleg, figuur, leerplan, didactiek, pluim, vraag, andere, premisse, website")
    h.add_argument("--ernst", choices=["klein", "belangrijk", "dringend"])
    h.add_argument("--niveau", choices=["plek", "handboek", "algemeen"])
    z = sub.add_parser("zet", help="status, antwoord aan de leerkracht of interne notitie")
    z.add_argument("id", type=int)
    z.add_argument("status", nargs="?", choices=STATUSSEN)
    z.add_argument("--antwoord", help="zichtbaar voor de leerkracht, als antwoord van het team")
    z.add_argument("--notitie", help="interne notitie, alleen voor het team")
    a = p.parse_args()
    haal(a) if a.actie == "haal" else zet(a)


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
