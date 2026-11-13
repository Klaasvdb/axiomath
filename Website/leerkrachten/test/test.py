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
        for js in ["app.js", "plannen.js"]:
            r = subprocess.run([node, "--check", str(SERVER / "public_html" / js)], capture_output=True, text=True)
            meld(f"node --check {js}", r.returncode == 0, r.stderr)
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
    def __init__(self, url, sleutel=None):
        self.url = url
        self.sleutel = sleutel  # een sleutel voor Claude, zoals feedback.py: geen koekjes
        self.op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))

    def __call__(self, methode, pad, body=None, kop=True, ruw=False):
        p, _, q = pad.partition("?")
        url = f"{self.url}/api/index.php?r={urllib.parse.quote(p)}" + (f"&{q}" if q else "")
        h = {"User-Agent": "Mozilla/5.0 (test)"}
        if kop:
            h["X-Axiomath"] = "1"
        if methode in ("PATCH", "DELETE"):
            h["X-Methode"] = methode
        if self.sleutel:
            h["X-Axiomath-Sleutel"] = self.sleutel
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
    l("POST", "bezoek"); l("POST", "bezoek"); b("POST", "bezoek")
    s, d = b("GET", "beheer/bezoekers?dagen=7")
    vandaag = d["dagen"][-1] if s == 200 else {}
    meld("bezoekers: uniek per dag, beheerder telt niet mee", s == 200 and len(d["dagen"]) == 7 and vandaag["bezoekers"] == 1 and vandaag["weergaven"] == 2, d)
    s, d = l("GET", "beheer/bezoekers")
    meld("leerkracht ziet geen bezoekers", s == 403, d)
    s, d = b("GET", "beheer/gebruikers")
    an = next((g for g in d["gebruikers"] if g["email"] == "an@voorbeeld.be"), None) if s == 200 else None
    meld("beheer: accounts en open codes", bool(an) and len(d["codes"]) == 1, d)
    sleutel_tests(url, b, l, f1, f2)
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


def sleutel_tests(url, b, l, f1, f2):
    """Sleutels voor Claude: zonder account, met een naam. Feedback ophalen en verwerken, ook met feedback.py."""
    s, d = l("POST", "beheer/sleutel", {"naam": "Iemand"})
    meld("sleutel: leerkracht maakt geen sleutel", s == 403, d)
    s, d = b("POST", "beheer/sleutel", {"naam": " "})
    meld("sleutel: naam verplicht", s == 400, d)
    s, d = b("POST", "beheer/sleutel", {"naam": "Ingmar"})
    sl = d.get("sleutel") if s == 200 else None
    meld("sleutel: beheerder maakt een sleutel zonder account", bool(sl) and sl.startswith("axm-"), d)
    if not sl:
        return
    k = Klant(url, sl)
    s, d = k("GET", "ik")
    meld("sleutel: ik", s == 200 and d.get("sleutel") is True and d.get("naam") == "Ingmar" and "email" not in d, d)
    s, d = Klant(url, "axm-fout")("GET", "ik")
    meld("sleutel: ongeldige sleutel geweigerd", s == 401, d)
    s, d = k("GET", "feedback?status=open")
    ids = {f["id"] for f in d} if s == 200 else set()
    meld("sleutel: open feedback", ids == {f1["id"], f2["id"]}, d)
    tekst = json.dumps(d, ensure_ascii=False)
    meld("sleutel: zonder namen", s == 200 and "An Leerkracht" not in tekst and "Team Lid" not in tekst and "auteur" not in tekst, tekst[:400])
    plek = next((f for f in d if f["id"] == f1["id"]), {}) if s == 200 else {}
    meld("sleutel: map in de repo en link naar de plek", (plek.get("map") or "").startswith("Handboeken/")
         and f"#/lees/{plek.get('versie')}?p={plek.get('pagina')}&f={f1['id']}" in (plek.get("link") or ""), plek)
    s, md = k("GET", "feedback?status=open&formaat=md", ruw=True)
    md = md.decode() if isinstance(md, bytes) else str(md)
    meld("sleutel: Markdown", s == 200 and f"**#{f1['id']}**" in md and "An Leerkracht" not in md, md[:300])
    s, d = k("PATCH", f"feedback/{f1['id']}", {"status": "behandeling", "notitie": "Claude kijkt"})
    meld("sleutel: status en notitie", s == 200 and d["status"] == "behandeling" and d["notitie"] == "Claude kijkt", d)
    s, d = k("POST", f"feedback/{f1['id']}/reactie", {"tekst": "De spatie is weg, dank je."})
    meld("sleutel: antwoord als team, zonder namen", s == 200 and d["reacties"][-1]["team"] and d["reacties"][-1]["naam"] is None, d)
    s, d = l("GET", "feedback?van=ik")
    r = next((f for f in d if f["id"] == f1["id"]), {}) if s == 200 else {}
    meld("sleutel: de leerkracht ziet het antwoord van het team, met de naam van de sleutel",
         bool(r.get("reacties")) and r["reacties"][-1]["team"] and r["reacties"][-1]["naam"] == "Ingmar", r)
    s, d = k("DELETE", f"feedback/{f1['id']}")
    meld("sleutel: niet verwijderen", s == 403, d)
    s, d = k("POST", f"feedback/{f1['id']}/steun")
    meld("sleutel: niet steunen", s == 403, d)
    s, d = k("GET", "beheer/gebruikers")
    meld("sleutel: geen beheer", s == 403, d)
    # feedback.py, van begin tot eind, met een eigen uitvoermap
    uit = Path(tempfile.mkdtemp(prefix="axiomath-feedback-"))
    env = dict(os.environ, AXIOMATH_URL=url, AXIOMATH_SLEUTEL=sl, AXIOMATH_UIT=str(uit), PYTHONIOENCODING="utf-8")
    script = [sys.executable, "-P", str(HIER.parent / "feedback.py")]
    r = subprocess.run(script + ["haal"], env=env, capture_output=True, text=True, encoding="utf-8")
    js = json.loads((uit / "open.json").read_text(encoding="utf-8")) if (uit / "open.json").is_file() else []
    meld("feedback.py haal: open.md en open.json", r.returncode == 0 and len(js) == 2 and (uit / "open.md").is_file(), r.stdout + r.stderr)
    r = subprocess.run(script + ["haal", plek.get("handboek") or "?"], env=env, capture_output=True, text=True, encoding="utf-8")
    js = json.loads((uit / "open.json").read_text(encoding="utf-8")) if (uit / "open.json").is_file() else []
    md = (uit / "open.md").read_text(encoding="utf-8") if (uit / "open.md").is_file() else ""
    meld("feedback.py haal <handboek>: alleen dat handboek", r.returncode == 0 and {f["id"] for f in js} == {f1["id"], f2["id"]}
         and md.count("# Feedback Axiomath") == 1, r.stdout + r.stderr)
    r = subprocess.run(script + ["zet", str(f2["id"]), "verwerkt", "--antwoord", "Het tempo ligt nu lager."], env=env,
                       capture_output=True, text=True, encoding="utf-8")
    s, d = b("GET", "beheer/feedback?status=verwerkt")
    f = next((x for x in d if x["id"] == f2["id"]), {}) if s == 200 else {}
    meld("feedback.py zet: verwerkt, met antwoord", r.returncode == 0 and f.get("status") == "verwerkt"
         and f["reacties"][-1]["tekst"] == "Het tempo ligt nu lager." and f["reacties"][-1]["team"], r.stdout + r.stderr)
    r = subprocess.run(script + ["haal"], env=dict(env, AXIOMATH_SLEUTEL="axm-fout"), capture_output=True, text=True, encoding="utf-8")
    meld("feedback.py: duidelijke fout bij een ongeldige sleutel", r.returncode != 0 and "401" in r.stderr, r.stdout + r.stderr)
    shutil.rmtree(uit, ignore_errors=True)
    s, d = b("GET", "beheer/gebruikers")
    lijst = d.get("sleutels", []) if s == 200 else []
    meld("sleutel: lijst in beheer, met laatst gebruikt", len(lijst) == 1 and lijst[0]["naam"] == "Ingmar" and lijst[0]["gebruikt"], d)
    s, d = b("DELETE", f"beheer/sleutel/{lijst[0]['id']}") if lijst else (0, None)
    s2, d2 = k("GET", "ik")
    meld("sleutel: ingetrokken sleutel werkt niet meer", s == 200 and s2 == 401, d2)


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
