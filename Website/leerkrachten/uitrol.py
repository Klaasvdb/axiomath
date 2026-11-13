"""Zet de leerkrachtensite online op axiomath.be, via de DirectAdmin-API van Vimexx (zelfde hosting als Puntmuts).

    py -3.13 -P maak.py       eerst bouwen (nieuwe PDF's als versie, voorkanten)
    py -3.13 -P uitrol.py     dan testen en alles online zetten

Wat er gebeurt:
  app/lib.php, app/.htaccess          de serverlogica, BUITEN public_html
  app/boeken.json, app/laatste.json   de handboeken en de jongste versie van elke editie
  app/versies/<h>.pdf en <h>.json     alleen de versies die nog niet online staan (een versie verandert nooit)
  app/config.php                      alleen de eerste keer, of met --config
  public_html/                        de app (index.html, app.js, app.css), lettertypes, logo, voorkanten, api/index.php

    py -3.13 -P uitrol.py --zonder-test   zonder de testreeks vooraf (alleen in nood)
    py -3.13 -P uitrol.py --config        app/config.php opnieuw uploaden

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
        r = urllib.request.urlopen(urllib.request.Request(url, data=data, headers=kop), timeout=300)
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
    config.write_text("<?php\n/* Niet in git. De startcode maakt het eerste beheerdersaccount en werkt daarna niet meer. */\n"
                      f"return ['databank' => __DIR__ . '/axiomath.sqlite', 'startcode' => '{code}'];\n", encoding="utf-8")
    print(f"server/app/config.php gemaakt. Startcode voor het eerste beheerdersaccount: {code}")
    return config


def main():
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
    for h in nieuw:
        upload(SERVER / "app" / "versies" / f"{h}.pdf", "app/versies")
        upload(SERVER / "app" / "versies" / f"{h}.json", "app/versies")  # de .json als laatste: dan is de versie compleet

    print("voorkanten (alleen nieuwe)")
    online = lijst(f"{DOMEIN}/public_html/omslagen")
    for f in sorted((SERVER / "public_html" / "omslagen").glob("*.webp")):
        if f"{DOMEIN}/public_html/omslagen/{f.name}" not in online:
            upload(f, "public_html/omslagen")

    print("site")
    upload(SERVER / "app" / "boeken.json", "app")
    upload(SERVER / "app" / "laatste.json", "app")  # pas na de versies: leerkrachten zien de nieuwe edities nu
    for f in sorted((SERVER / "public_html" / "fonts").iterdir()):
        upload(f, "public_html/fonts")
    upload(SERVER / "public_html" / "api" / "index.php", "public_html/api")
    for naam in ["logo.svg", "icoon.svg", "icoon-180.png", "kunst.jpg", "app.css", "app.js", ".htaccess", "index.html"]:
        upload(SERVER / "public_html" / naam, "public_html")

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
