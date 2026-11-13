"""De testreeks van de leerkrachtensite: de echte server (app/lib.php) lokaal met PHP, met een lege databank.

    py -3.13 -P test/test.py              syntaxis + de API van begin tot eind
    py -3.13 -P test/test.py --browser    ook een doorloop in Edge (Playwright), met schermafbeeldingen in test/uit/
    py -3.13 -P test/test.py --open       de testserver laten draaien om zelf te kijken (startcode wordt getoond)

Draai eerst maak.py: de test gebruikt server/app/boeken.json, laatste.json en versies/. De databank en de
configuratie van de test staan in een tijdelijke map (AXIOMATH_CONFIG), nooit in server/app/.
PHP: winget install PHP.PHP.8.3.
"""
import glob
import http.cookiejar
import json
import os
import shutil
import socket
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

HIER = Path(__file__).resolve().parent
SERVER = HIER.parent / "server"
STARTCODE = "test-start-code"
UITSLAG = []


def php_pad():
    p = shutil.which("php")
    if p:
        return p
    kand = glob.glob(os.path.expandvars(r"%LOCALAPPDATA%\Microsoft\WinGet\Packages\PHP.PHP.8.*\php.exe"))
    if not kand:
        sys.exit("PHP niet gevonden: winget install PHP.PHP.8.3")
    return sorted(kand)[-1]


PHP = php_pad()
_GELADEN = set(subprocess.run([PHP, "-m"], capture_output=True, text=True).stdout.lower().split())
_NODIG = [e for e in ["pdo_sqlite", "sqlite3", "mbstring"] if e not in _GELADEN]
EXT = (["-d", "extension_dir=" + str(Path(PHP).parent / "ext")] if _NODIG else []) + sum((["-d", "extension=" + e] for e in _NODIG), [])


def meld(naam, ok, uitleg=""):
    UITSLAG.append((naam, ok))
    print(("  ok    " if ok else "  FOUT  ") + naam + ("" if ok or not uitleg else "\n        " + str(uitleg)[:600]))
    return ok


def statisch():
    for f in sorted(SERVER.rglob("*.php")):
        if f.name == "config.php":
            continue
        r = subprocess.run([PHP] + EXT + ["-l", str(f)], capture_output=True, text=True)
        meld("php -l " + f.relative_to(SERVER).as_posix(), r.returncode == 0, r.stdout + r.stderr)
    node = shutil.which("node")
    if node:
        r = subprocess.run([node, "--check", str(SERVER / "public_html" / "app.js")], capture_output=True, text=True)
        meld("node --check app.js", r.returncode == 0, r.stderr)
    for naam in ["boeken.json", "laatste.json"]:
        meld(f"app/{naam} bestaat (maak.py)", (SERVER / "app" / naam).is_file())


def vrije_poort():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def start_server():
    tmp = Path(tempfile.mkdtemp(prefix="axiomath-test-"))
    config = tmp / "config.php"
    config.write_text("<?php\nreturn ['databank' => __DIR__ . '/test.sqlite', 'startcode' => '" + STARTCODE + "'];\n", encoding="utf-8")
    poort = vrije_poort()
    env = dict(os.environ, AXIOMATH_CONFIG=str(config))
    log = open(tmp / "php.log", "w")
    proc = subprocess.Popen([PHP] + EXT + ["-S", f"127.0.0.1:{poort}", "-t", str(SERVER / "public_html")],
                            env=env, stdout=log, stderr=subprocess.STDOUT)
    url = f"http://127.0.0.1:{poort}"
    for _ in range(50):
        try:
            urllib.request.urlopen(url + "/api/index.php?r=menu", timeout=1)
            break
        except OSError:
            time.sleep(0.1)
    return proc, url, tmp


class Klant:
    """Een browser zonder browser: koekjes, JSON en de X-Axiomath-kop, zoals app.js."""
    def __init__(self, url):
        self.url = url
        self.op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))

    def __call__(self, methode, pad, body=None, kop=True, ruw=False):
        p, _, q = pad.partition("?")
        url = f"{self.url}/api/index.php?r={urllib.parse.quote(p)}" + (f"&{q}" if q else "")
        h = {"X-Axiomath": "1"} if kop else {}
        if methode in ("PATCH", "DELETE"):
            h["X-Methode"] = methode
        data = json.dumps(body).encode() if body is not None else (b"" if methode != "GET" else None)
        if data is not None:
            h["Content-Type"] = "application/json"
        req = urllib.request.Request(url, data=data, headers=h, method="GET" if methode == "GET" else "POST")
        try:
            r = self.op.open(req, timeout=20)
            inhoud = r.read()
            return r.status, (inhoud if ruw else json.loads(inhoud or b"null"))
        except urllib.error.HTTPError as e:
            inhoud = e.read()
            try:
                return e.code, json.loads(inhoud)
            except ValueError:
                return e.code, inhoud


def api_tests(url):
    b, l, x = Klant(url), Klant(url), Klant(url)
    s, d = x("GET", "ik")
    meld("niet aangemeld: ik = null", s == 200 and d is None, d)
    s, gast = x("GET", "boeken")
    meld("zonder account: boekenkast met alleen de editie handboek",
         s == 200 and all(e["editie"] == "handboek" for bk in gast["boeken"] for e in bk["edities"])
         and any(bk["edities"] for bk in gast["boeken"]), gast if s != 200 else "")
    meld("zonder account: geen feedbacktellingen", s == 200 and all(bk["feedback"] is None for bk in gast["boeken"]))
    s, d = x("GET", "feedback?niveau=algemeen")
    meld("zonder account: feedback geweigerd (401)", s == 401, d)
    s, d = b("POST", "registreer", {"code": "fout-code", "naam": "X", "email": "x@voorbeeld.be", "wachtwoord": "lang-genoeg-ww"})
    meld("ongeldige code geweigerd", s == 400, d)
    s, d = b("POST", "registreer", {"code": STARTCODE, "naam": "Team Lid", "email": "team@voorbeeld.be", "wachtwoord": "geheim-wachtwoord"})
    meld("startcode maakt de eerste beheerder", s == 200, d)
    s, d = b("GET", "ik")
    meld("beheerder aangemeld", s == 200 and d and d["rol"] == "beheerder", d)
    s, d = x("POST", "registreer", {"code": STARTCODE, "naam": "Y", "email": "y@voorbeeld.be", "wachtwoord": "lang-genoeg-ww"})
    meld("startcode werkt geen tweede keer", s == 400, d)
    s, d = b("POST", "beheer/uitnodiging", {"aantal": 2, "rol": "leerkracht"}, kop=False)
    meld("POST zonder X-Axiomath geweigerd (CSRF)", s == 403, d)
    s, d = b("POST", "beheer/uitnodiging", {"aantal": 2, "rol": "leerkracht", "notitie": "test"})
    meld("uitnodigingscodes", s == 200 and len(d["codes"]) == 2, d)
    code = d["codes"][0]
    s, d = l("POST", "registreer", {"code": code, "naam": "An Leerkracht", "email": "an@voorbeeld.be", "wachtwoord": "nog-een-wachtwoord"})
    meld("leerkracht registreert met code", s == 200, d)
    s, d = x("POST", "registreer", {"code": code, "naam": "Z", "email": "z@voorbeeld.be", "wachtwoord": "lang-genoeg-ww"})
    meld("code werkt maar één keer", s == 400, d)
    s, d = l("GET", "beheer/gebruikers")
    meld("leerkracht kan niet in beheer", s == 403, d)
    s, d = l("GET", "boeken")
    boek = next((bk for bk in d["boeken"] if len(bk["edities"]) > 1 and bk["edities"][0]["editie"] == "handboek"), None) if s == 200 else None
    meld("boeken met edities en voorkant", bool(boek and boek["omslag"]), d if s != 200 else "geen boek met PDF")
    if not boek:
        return
    h = boek["edities"][0]["hash"]
    s, v = l("GET", f"versie/{h}")
    meld("versie: pagina's en inhoud", s == 200 and v["paginas"] > 0 and len(v["maten"]) == v["paginas"], v)
    s, pdf = l("GET", f"pdf/{h}", ruw=True)
    meld("PDF wordt geleverd", s == 200 and pdf[:4] == b"%PDF", pdf[:40])
    ed = {e["editie"]: e["hash"] for e in boek["edities"]}
    s, pdf = x("GET", f"pdf/{ed['handboek']}", ruw=True)
    meld("zonder account: PDF van het handboek", s == 200 and pdf[:4] == b"%PDF", pdf[:40])
    s, v0 = x("GET", f"versie/{ed['handboek']}")
    meld("zonder account: versie van het handboek", s == 200 and v0["editie"] == "handboek", v0)
    andere = next((hh for e, hh in ed.items() if e != "handboek"), None)
    if andere:
        s, _ = x("GET", f"pdf/{andere}", ruw=True)
        meld("zonder account: geen PDF van de andere edities", s == 401)
        s, _ = x("GET", f"versie/{andere}")
        meld("zonder account: geen versie van de andere edities", s == 401)
    s, _ = l("GET", "versie/../../app/config")
    meld("ongeldige versie geweigerd", s == 404)
    s, f1 = l("POST", "feedback", {"niveau": "plek", "versie": h, "pagina": min(5, v["paginas"]), "rect": [0.1, 0.2, 0.6, 0.3],
                                    "citaat": "1.1 Domein . . . . . . 4", "soort": "taal", "ernst": "klein", "tekst": "Spatie te veel."})
    meld("feedback op een plek", s == 200 and f1["pagina"] == min(5, v["paginas"]) and f1["citaat"] == "1.1 Domein … 4", f1)
    meld("hoofdstuk uit de inhoudstafel", s == 200 and (f1["hoofdstuk"] is not None or not v["inhoud"]), f1)
    s, d = l("POST", "feedback", {"niveau": "plek", "versie": h, "pagina": 9999, "rect": [0, 0, 1, 1], "soort": "taal", "tekst": "x"})
    meld("onbestaande pagina geweigerd", s == 400, d)
    s, d = l("POST", "feedback", {"niveau": "plek", "versie": h, "pagina": 1, "rect": [0, 0, 1, 1], "soort": "premisse", "tekst": "x"})
    meld("soort 'premisse' alleen algemeen", s == 400, d)
    s, f2 = l("POST", "feedback", {"niveau": "handboek", "sleutel": boek["sleutel"], "soort": "didactiek", "ernst": "dringend", "tekst": "Tempo te hoog."})
    meld("feedback op het handboek", s == 200 and f2["ernst"] == "dringend", f2)
    s, f3 = l("POST", "feedback", {"niveau": "algemeen", "soort": "premisse", "tekst": "Mooi idee."})
    meld("algemene feedback", s == 200 and f3["sleutel"] is None, f3)
    s, d = l("PATCH", f"feedback/{f1['id']}", {"tekst": "Spatie te veel, tweede zin."})
    meld("eigen feedback bewerken", s == 200 and d["tekst"].endswith("tweede zin."), d)
    s, d = b("POST", f"feedback/{f1['id']}/steun")
    meld("steunen", s == 200 and d["steun"] == 1 and d["gesteund"], d)
    s, d = l("POST", f"feedback/{f1['id']}/steun")
    meld("eigen feedback niet steunen", s == 200 and d["steun"] == 1 and not d["gesteund"], d)
    s, d = b("POST", f"feedback/{f2['id']}/reactie", {"tekst": "Dank je, we kijken het na."})
    meld("team antwoordt: status in behandeling", s == 200 and d["status"] == "behandeling" and d["reacties"][0]["team"], d)
    s, d = l("PATCH", f"feedback/{f2['id']}", {"tekst": "toch anders"})
    meld("in behandeling: niet meer bewerken", s == 403, d)
    s, d = l("DELETE", f"feedback/{f2['id']}")
    meld("in behandeling: niet meer verwijderen", s == 403, d)
    s, d = b("PATCH", f"feedback/{f3['id']}", {"status": "verwerkt", "notitie": "opgenomen in README"})
    meld("status en interne notitie", s == 200 and d["status"] == "verwerkt" and d["notitie"] == "opgenomen in README", d)
    s, d = l("GET", "feedback?van=ik")
    meld("mijn feedback: 3, zonder interne notitie", s == 200 and len(d) == 3 and all("notitie" not in f for f in d), d)
    s, d = l("GET", f"feedback?versie={h}")
    meld("feedback per versie", s == 200 and [f["id"] for f in d] == [f1["id"]], d)
    s, d = b("GET", "beheer/feedback?status=open")
    meld("beheer: open feedback", s == 200 and {f["id"] for f in d} == {f1["id"], f2["id"]}, d)
    s, d = b("GET", f"beheer/feedback?soort=taal&zoek=tweede")
    meld("beheer: filter en zoeken", s == 200 and [f["id"] for f in d] == [f1["id"]], d)
    s, md = b("GET", "beheer/export?formaat=md", ruw=True)
    md = md.decode() if isinstance(md, bytes) else str(md)
    meld("Markdown-export zonder namen", s == 200 and "Spatie te veel" in md and "An Leerkracht" not in md and "- [ ] **#" in md, md[:300])
    s, csv = b("GET", "beheer/export?formaat=csv", ruw=True)
    meld("CSV-export met namen", s == 200 and csv.startswith("﻿".encode()) and "An Leerkracht".encode() in csv, csv[:200])
    s, d = b("GET", "beheer/overzicht")
    meld("beheer: telling per handboek", s == 200 and sum(r["n"] for r in d["telling"]) == 3, d)
    s, d = b("GET", "beheer/gebruikers")
    an = next((g for g in d["gebruikers"] if g["email"] == "an@voorbeeld.be"), None) if s == 200 else None
    meld("beheer: accounts en open codes", bool(an) and len(d["codes"]) == 1, d)
    s, d = b("POST", f"beheer/herstel/{an['id']}")
    herstel = d.get("code") if s == 200 else None
    meld("herstelcode", bool(herstel), d)
    s, d = x("POST", "herstel", {"code": herstel, "wachtwoord": "een-nieuw-wachtwoord"})
    meld("wachtwoord herstellen met code", s == 200, d)
    s, d = l("GET", "ik")
    meld("herstel meldt oude sessies af", s == 200 and d is None, d)
    s, d = l("POST", "aanmelden", {"email": "an@voorbeeld.be", "wachtwoord": "een-nieuw-wachtwoord"})
    meld("aanmelden met nieuw wachtwoord", s == 200, d)
    s, d = b("PATCH", f"beheer/gebruiker/{an['id']}", {"actief": False})
    s2, d2 = l("GET", "ik")
    meld("geblokkeerd account is afgemeld", s == 200 and d2 is None, d2)
    for _ in range(10):
        x("POST", "aanmelden", {"email": "team@voorbeeld.be", "wachtwoord": "fout"})
    s, d = x("POST", "aanmelden", {"email": "team@voorbeeld.be", "wachtwoord": "geheim-wachtwoord"})
    meld("snelheidsrem na 10 mislukte aanmeldingen", s == 429, d)


def main(argv):
    print("syntaxis")
    statisch()
    proc, url, tmp = start_server()
    try:
        print(f"API ({url})")
        api_tests(url)
        if "--browser" in argv:
            print("browser")
            proc.terminate(); proc.wait()
            (tmp / "test.sqlite").unlink(missing_ok=True)
            proc, url, tmp2 = start_server()
            sys.path.insert(0, str(HIER))
            import browser
            for naam, ok, uitleg in browser.doorloop(url, STARTCODE, HIER / "uit"):
                meld(naam, ok, uitleg)
        if "--open" in argv:
            proc.terminate(); proc.wait()
            (tmp / "test.sqlite").unlink(missing_ok=True)
            proc, url, _ = start_server()
            print(f"\nDe testserver draait op {url}  (startcode: {STARTCODE}). Ctrl+C stopt.")
            proc.wait()
    except KeyboardInterrupt:
        pass
    finally:
        proc.terminate()
    fout = [n for n, ok in UITSLAG if not ok]
    print(f"\n{len(UITSLAG) - len(fout)} van de {len(UITSLAG)} ok" + (": FOUT bij " + ", ".join(fout) if fout else ""))
    if fout:
        print(f"PHP-log: {tmp / 'php.log'}")
    return not fout


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(0 if main(sys.argv[1:]) else 1)
