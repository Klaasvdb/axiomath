"""Zet de leerkrachtensite online op axiomath.be, via de DirectAdmin-API van Vimexx (zelfde hosting als Puntmuts).

    py -3.13 -P maak.py       eerst bouwen (nieuwe PDF's als versie, voorkanten)
    py -3.13 -P uitrol.py     dan testen en alles online zetten

Wat er gebeurt:
  app/lib.php, app/.htaccess          de serverlogica, BUITEN public_html
  app/boeken.json, app/laatste.json   de handboeken en de jongste versie van elke editie
  app/verwerkt.json                   wat uit de feedback verwerkt is, per versie (de kaders Verwerkt in de lezer)
  app/versies/<h>.pdf en <h>.json     alleen de versies die nog niet online staan (een versie verandert nooit)
  app/config.php                      alleen de eerste keer, of met --config
  public_html/                        de app (index.html, app.js, plannen.js, app.css), lettertypes, logo, voorkanten, api/index.php
  public_html/voorbeeld/integralen/   de voorbeeldcursus uit Website/ (maak.py kopieert ze), telkens helemaal
  daarna herplaats.py                 de open feedback naar de nieuwe versies, met een uitsnede van de oude plek
                                      (public_html/uitsneden/); zonder sleutel voor Claude alleen een melding

    py -3.13 -P uitrol.py --zonder-test   zonder de testreeks vooraf (alleen in nood)
    py -3.13 -P uitrol.py --config        app/config.php opnieuw uploaden
    py -3.13 -P uitrol.py --opruimen      wis online de oudere versies zonder feedback (eerst met --droog: alleen tonen)

De databank (app/axiomath.sqlite: accounts en feedback) maakt de server zelf aan en wordt nooit overschreven.
De inloggegevens van DirectAdmin komen uit ~/.netrc_vimmex (dezelfde als voor Puntmuts).

Eerste keer:
  1. Voeg axiomath.be toe als domein in DirectAdmin en zet er een certificaat (Let's Encrypt) op.
  2. uitrol.py maakt server/app/config.php met een startcode en toont die. Ga naar https://axiomath.be,
     kies 'Uitnodiging' en maak met die code het eerste beheerdersaccount. Daarna werkt de startcode niet meer.
"""
import base64
import json
import netrc
import secrets
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid
from pathlib import Path

HIER = Path(__file__).resolve().parent
SERVER = HIER / "server"
HOST = "web0154.zxcs.nl"
DOMEIN = "/domains/axiomath.be"
SITE = "axiomath.be"
POORT = [443]  # het paneel luistert ook op 2222 (zie Puntmuts: certificaat op 443 was ooit vervallen)

login, _, wachtwoord = netrc.netrc(str(Path.home() / ".netrc_vimmex")).authenticators(HOST)
AUTH = "Basic " + base64.b64encode(f"{login}:{wachtwoord}".encode()).decode()


def roep(pad, velden=None, bestand=None):
    url = f"https://{HOST}:{POORT[0]}/{pad}"
    kop = {"Authorization": AUTH}
    data = None
    if bestand:
        grens = uuid.uuid4().hex
        data = (f"--{grens}\r\nContent-Disposition: form-data; name=\"file1\"; filename=\"{bestand.name}\"\r\n"
                f"Content-Type: application/octet-stream\r\n\r\n").encode() + bestand.read_bytes() + f"\r\n--{grens}--\r\n".encode()
        kop["Content-Type"] = f"multipart/form-data; boundary={grens}"
    elif velden is not None:
        data = urllib.parse.urlencode(velden).encode()
    try:
        for poging in range(5):  # een verbroken verbinding (de host sluit er soms een) is geen reden om te stoppen
            try:
                r = urllib.request.urlopen(urllib.request.Request(url, data=data, headers=kop), timeout=300)
                break
            except (ConnectionError, TimeoutError, urllib.error.HTTPError) as e:
                if isinstance(e, urllib.error.HTTPError) and e.code < 500:
                    raise
                if poging == 4:
                    raise
                time.sleep(5 * (poging + 1))
    except urllib.error.URLError as e:
        if POORT[0] != 443 or not isinstance(e.reason, ssl.SSLCertVerificationError):
            raise
        print("certificaat op poort 443 ongeldig, verder over poort 2222")
        POORT[0] = 2222
        return roep(pad, velden, bestand)
    return urllib.parse.unquote_plus(r.read().decode("utf-8", "replace"))


def lijst(map_):
    """De lijst van DirectAdmin voor een map (een lange tekst met de volledige paden erin)."""
    return roep("CMD_API_FILE_MANAGER?path=" + urllib.parse.quote(map_))


def bestaat(pad):
    return pad in lijst(pad.rpartition("/")[0])


def map_maken(ouder, naam):
    if not bestaat(f"{ouder}/{naam}"):
        uit = roep("CMD_API_FILE_MANAGER", {"action": "folder", "path": ouder, "name": naam})
        print(f"  map {ouder}/{naam}:", "gemaakt" if "error=0" in uit else uit[:120])


def groottes(map_):
    """{bestandsnaam: bytes} van een map online."""
    import re
    uit = {}
    for deel in re.split(r"&(?=/domains/)", lijst(map_)):
        m, s = re.match(r"(/domains/\S+?)=", deel), re.search(r"&size=(\d+)", deel)
        if m and s:
            uit[m.group(1).rsplit("/", 1)[1]] = int(s.group(1))
    return uit


def opruimen(droog):
    """Online staat elke PDF als vaste versie. Wat niet de jongste versie van een editie is en geen feedback heeft,
    opent geen lezer meer: dat wissen we, zodat de hosting niet volloopt. Een versie met feedback blijft staan, want
    daar hangt het kader van de leerkracht aan. Open feedback verhuist na elke uitrol mee naar de nieuwste versie
    (herplaats.py, met een uitsnede van de oude plek), dus blijven vooral versies met verwerkte of afgekeurde
    opmerkingen staan. Zonder sleutel voor Claude (feedback.py) wissen we niets."""
    import importlib.util
    spec = importlib.util.spec_from_file_location("feedbackscript", HIER / "feedback.py")
    fb = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(fb)
    rijen = fb.api("GET", "feedback", {"status": ""})
    met_feedback = {r["versie"] for r in rijen if r.get("versie")}
    laatste = json.loads((SERVER / "app" / "laatste.json").read_text(encoding="utf-8"))
    houd = {e["hash"] for ed in laatste.values() for e in ed.values()} | met_feedback
    online = groottes(f"{DOMEIN}/app/versies")
    weg = sorted(n for n in online if n.split(".")[0] not in houd and n.rsplit(".", 1)[-1] in ("pdf", "json"))
    mb = sum(online[n] for n in weg) / 1e6
    print(f"opruimen: {len(online)} bestanden online, {len(met_feedback)} versies met feedback blijven, {len(weg)} bestanden ({mb:.0f} MB) mogen weg")
    if droog:
        print("  (droog: niets gewist)")
        return
    for i in range(0, len(weg), 40):
        velden = [("action", "multiple"), ("button", "delete"), ("path", f"{DOMEIN}/app/versies")]
        velden += [(f"select{j}", f"{DOMEIN}/app/versies/{n}") for j, n in enumerate(weg[i:i + 40])]
        uit = roep("CMD_API_FILE_MANAGER", velden)
        if "error=0" not in uit:
            sys.exit(f"Wissen mislukt: {uit[:200]}")
        voortgang(f"Opruimen: {min(i + 40, len(weg))}/{len(weg)} bestanden gewist")
    print(f"  {len(weg)} bestanden gewist")
    voortgang("")


def voortgang(tekst):
    """Eén regel voor voortgang.bat en de statusregel van Claude Code (~/.claude/voortgang.txt)."""
    try:
        (Path.home() / ".claude" / "voortgang.txt").write_text(tekst, encoding="utf-8")
    except OSError:
        pass


def upload(lokaal, doelmap):
    uit = roep("CMD_API_FILE_MANAGER?action=upload&overwrite=yes&path=" + urllib.parse.quote(f"{DOMEIN}/{doelmap}"), bestand=lokaal)
    ok = "error=0" in uit
    print(f"  {'ok ' if ok else 'FOUT'} {doelmap}/{lokaal.name}" + ("" if ok else "  " + uit[:160]))
    if not ok:
        sys.exit(1)


def config_maken():
    config = SERVER / "app" / "config.php"
    if config.exists():
        return config
    code = "-".join(secrets.token_hex(2) for _ in range(3))
    config.write_text("<?php\n/* Niet in git. De startcode maakt het eerste beheerdersaccount en werkt daarna niet meer.\n"
                      "   contact: het e-mailadres voor een aanvraag om uitnodiging (leeg = geen link op de aanmeldpagina). */\n"
                      f"return ['databank' => __DIR__ . '/axiomath.sqlite', 'startcode' => '{code}', 'contact' => ''];\n", encoding="utf-8")
    print(f"server/app/config.php gemaakt. Startcode voor het eerste beheerdersaccount: {code}")
    return config


def main():
    if "--opruimen" in sys.argv:
        opruimen("--droog" in sys.argv)
        if "--droog" in sys.argv or "--alleen" in sys.argv:
            return
    for nodig in ["boeken.json", "laatste.json"]:
        if not (SERVER / "app" / nodig).exists():
            sys.exit(f"server/app/{nodig} ontbreekt: draai eerst maak.py")
    if "--zonder-test" not in sys.argv:
        import importlib.util
        spec = importlib.util.spec_from_file_location("testreeks", HIER / "test" / "test.py")
        testreeks = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(testreeks)
        print("testen")
        if not testreeks.main([]):
            sys.exit("\nNiets uitgerold: eerst de fouten hierboven oplossen (of --zonder-test, alleen in nood).")
    if not bestaat(DOMEIN):
        sys.exit(f"{DOMEIN} bestaat niet op {HOST}. Voeg axiomath.be eerst toe als domein in DirectAdmin.")
    config = config_maken()

    print("mappen")
    map_maken(DOMEIN, "app")
    map_maken(f"{DOMEIN}/app", "versies")
    for m in ["api", "fonts", "omslagen"]:
        map_maken(f"{DOMEIN}/public_html", m)

    print("server")
    upload(SERVER / "app" / "lib.php", "app")
    upload(SERVER / "app" / ".htaccess", "app")
    if "--config" in sys.argv or not bestaat(f"{DOMEIN}/app/config.php"):
        upload(config, "app")
    else:
        print("  -- app/config.php staat er al (gebruik --config om te vervangen)")

    print("versies (alleen nieuwe)")
    online = lijst(f"{DOMEIN}/app/versies")
    laatste = json.loads((SERVER / "app" / "laatste.json").read_text(encoding="utf-8"))
    nodig = sorted({e["hash"] for ed in laatste.values() for e in ed.values()})
    nieuw = [h for h in nodig if f"{DOMEIN}/app/versies/{h}.json" not in online]
    print(f"  {len(nodig) - len(nieuw)} staan er al, {len(nieuw)} nieuw")
    for i, h in enumerate(nieuw):
        voortgang(f"Uitrol: versies {i}/{len(nieuw)} online")
        upload(SERVER / "app" / "versies" / f"{h}.pdf", "app/versies")
        upload(SERVER / "app" / "versies" / f"{h}.json", "app/versies")  # de .json als laatste: dan is de versie compleet

    print("voorkanten (alleen nieuwe)")
    online = lijst(f"{DOMEIN}/public_html/omslagen")
    alle = sorted(p for p in (SERVER / "public_html" / "omslagen").iterdir() if p.suffix in (".webp", ".pdf"))  # .pdf: voorkant per koepel
    nieuwe = [f for f in alle if f"{DOMEIN}/public_html/omslagen/{f.name}" not in online]
    for i, f in enumerate(nieuwe):
        voortgang(f"Uitrol: voorkanten {i}/{len(nieuwe)} online")
        upload(f, "public_html/omslagen")
    voortgang("Uitrol: site-bestanden en controle")

    print("site")
    upload(SERVER / "app" / "boeken.json", "app")
    upload(SERVER / "app" / "laatste.json", "app")  # pas na de versies: leerkrachten zien de nieuwe edities nu
    if (SERVER / "app" / "verwerkt.json").exists():
        upload(SERVER / "app" / "verwerkt.json", "app")  # de kaders "Verwerkt" in de lezer
    for f in sorted((SERVER / "public_html" / "fonts").iterdir()):
        upload(f, "public_html/fonts")
    upload(SERVER / "public_html" / "api" / "index.php", "public_html/api")
    print("voorbeeldcursus")
    voorbeeld = SERVER / "public_html" / "voorbeeld"
    map_maken(f"{DOMEIN}/public_html", "voorbeeld")
    for m in sorted(p for p in voorbeeld.rglob("*") if p.is_dir()):
        rel = m.relative_to(SERVER / "public_html").as_posix()
        map_maken(f"{DOMEIN}/public_html/{rel.rpartition('/')[0]}", m.name)
    for f in sorted(p for p in voorbeeld.rglob("*") if p.is_file()):
        upload(f, "public_html/" + f.parent.relative_to(SERVER / "public_html").as_posix())
    for naam in ["logo.svg", "icoon.svg", "icoon-180.png", "icoon-192.png", "icoon-512.png", "icoon-maskeerbaar-512.png",
                 "kunst.jpg", "og-image.jpg", "manifest.webmanifest", "app.css", "plannen.js", "app.js", "sw.js", ".htaccess", "index.html"]:
        upload(SERVER / "public_html" / naam, "public_html")

    # De open feedback verhuist mee naar de nieuwe versies (pas nu: de server moet ze kennen). Zonder sleutel: melden.
    print("feedback herplaatsen")
    voortgang("Uitrol: open feedback naar de nieuwe versies")
    try:
        import importlib.util
        spec = importlib.util.spec_from_file_location("herplaats", HIER / "herplaats.py")
        herplaats = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(herplaats)
        if not herplaats.main([]):
            print("  LET OP: niet alle open feedback kon verplaatst worden (zie feedback/herplaatst.md)")
    except SystemExit as e:
        print(f"  LET OP: niet herplaatst ({e}). Draai later py -3.13 -P herplaats.py.")

    print("controle")
    try:
        r = urllib.request.urlopen(f"https://{SITE}/api/index.php?r=menu", timeout=30)
        print("  API werkt" if "soorten" in json.loads(r.read()) else "  LET OP: onverwacht antwoord van de API")
        online = urllib.request.urlopen(f"https://{SITE}/app.js", timeout=30).read()
        print("  app.js: " + ("nieuwe versie" if online == (SERVER / "public_html" / "app.js").read_bytes() else "LET OP: verschilt van de lokale versie"))
    except (urllib.error.URLError, ValueError) as e:
        print(f"  LET OP: https://{SITE} antwoordt niet zoals verwacht ({e}). Staat het certificaat er al op?")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
    voortgang("")
