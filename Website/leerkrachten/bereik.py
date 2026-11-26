"""Hoeveel leerlingen een handboek van Axiomath hebben: de pagina #/bereik op de site. Uitvoeren vanuit deze map:

    py -3.13 -P bereik.py              # haalt de cijfers op en schrijft server/public_html/bereik.json
    py -3.13 -P bereik.py --cache      # rekent opnieuw met de gegevens van de vorige keer (zonder de API)

Bron: de API's van het onderwijs-API-portaal van de Vlaamse overheid (https://onderwijs-api-portaal.vlaanderen.be):
  - Inschrijvingsaantal SO: de leerlingen per school en administratieve groep (telling van 1 februari);
  - Structuuronderdelen: de studierichtingen met graad en finaliteit, om de afgekorte namen te herkennen;
  - Instelling: het net en de koepel van elke school.
De API-sleutel staat in ~/.onderwijs-sleutel (of in de omgevingsvariabele ONDERWIJS_SLEUTEL), nooit in de repo.

Wat telt als "voorzien": een leerling van de 2de of 3de graad in een doorstroomrichting die in
Handboeken/koepels.yaml een pakket heeft. Het pakket volgt de koepel van de school (GO! of KOV; POV als het
profiel er een heeft, anders KOV). De dubbele finaliteit heeft een pakket, maar nog geen handboeken. bereik.json
bevat alleen totalen: geen scholen, geen namen.
"""
import collections
import datetime
import difflib
import json
import os
import re
import sys
import time
import urllib.request
from pathlib import Path

import yaml

HIER = Path(__file__).resolve().parent
REPO = HIER.parent.parent
CACHE = HIER / "feedback" / "bereik-cache"   # feedback/ staat in .gitignore
UIT = HIER / "server" / "public_html" / "bereik.json"

API = "https://onderwijs.api.vlaanderen.be"
INSCHRIJVINGEN = f"{API}/instellingsgegevens/inschrijvingsaantal_so/v1"
INSTELLINGEN = f"{API}/instellingsgegevens/instelling/v2/instelling"
STRUCTUUR = f"{API}/kwalificaties-en-curriculum/structuuronderdelen/v2/structuuronderdeelgroep"

# Officiële titels met een tikfout of een andere schrijfwijze dan in koepels.yaml
ALIAS = {"mechantronica": "mechatronica"}


def sleutel():
    s = os.environ.get("ONDERWIJS_SLEUTEL")
    pad = Path.home() / ".onderwijs-sleutel"
    if not s and pad.exists():
        s = pad.read_text(encoding="utf-8").strip()
    if not s:
        sys.exit("Geen API-sleutel: zet ze in ~/.onderwijs-sleutel (aan te vragen op onderwijs-api-portaal.vlaanderen.be).")
    return s


def haal(url, k):
    for poging in range(4):
        try:
            req = urllib.request.Request(url, headers={"x-api-key": k, "Accept": "application/json"})
            return json.load(urllib.request.urlopen(req, timeout=120))
        except Exception as e:  # 429 of een trage server: even wachten
            if poging == 3:
                raise
            print(f"  opnieuw ({e})")
            time.sleep(5 * (poging + 1))


def ophalen():
    k = sleutel()
    CACHE.mkdir(parents=True, exist_ok=True)
    jaren = [x["schooljaar"] for x in haal(f"{INSCHRIJVINGEN}/schooljaar?size=100", k)["content"]]
    jaar = max(jaren)
    print(f"inschrijvingen, schooljaar {jaar}-{jaar + 1}")
    rijen, p = [], 1
    while True:
        d = haal(f"{INSCHRIJVINGEN}/inschrijvingsaantal?filter_schooljaar={jaar}&size=1000&page={p}", k)
        rijen += d["content"]
        print(f"  pagina {p}/{d['meta']['total_pages']}", end="\r")
        if d["meta"]["last"]:
            break
        p += 1
    print()
    print("scholen")
    scholen, p = [], 1
    while True:
        d = haal(f"{INSTELLINGEN}?filter_instelling_niveau=SO&size=200&page={p}", k)
        scholen += [{"nummer": s["instelling_nummer"], "net": (s.get("instelling_net") or {}).get("omschrijving"),
                     "koepel": (s.get("instelling_koepel") or {}).get("naam")} for s in d["content"]]
        if d["meta"]["last"]:
            break
        p += 1
    print("studierichtingen")
    groepen, p = [], 1
    while True:
        d = haal(f"{STRUCTUUR}?size=100&pagenr={p}", k)  # deze API heet de parameter pagenr, niet page
        groepen += d["structuuronderdeel_groepen"]
        if d["meta"]["last"] or not d["structuuronderdeel_groepen"]:
            break
        p += 1
    for naam, x in [("inschrijvingen", {"jaar": jaar, "rijen": rijen}), ("scholen", scholen), ("structuur", groepen)]:
        (CACHE / f"{naam}.json").write_text(json.dumps(x, ensure_ascii=False), encoding="utf-8")


def lees_cache(naam):
    pad = CACHE / f"{naam}.json"
    if not pad.exists():
        sys.exit(f"Geen cache in {CACHE}: draai eerst zonder --cache.")
    return json.loads(pad.read_text(encoding="utf-8"))


def norm(t):
    """Alleen de letters, voor een vergelijking die tegen accenten en een kapotte ë kan."""
    t = re.sub(r"[^a-z]", "", t.lower())
    return ALIAS.get(t, t)


def woorden(t):
    t = re.sub(r"\(.*?\)", "", t.lower())
    return [w for w in re.findall(r"[a-zà-ÿ]+", t) if w not in ("en", "dl", "af", "syn")]


def past(afgekort, titel):
    """'Biotech.&chem.STEM-wet.' past op 'Biotechnologische en chemische STEM-wetenschappen': elk woord is een begin."""
    a, b = woorden(afgekort), woorden(titel)
    return len(a) == len(b) and a and all(y.startswith(x) for x, y in zip(a, b))


def koppel(omschrijvingen, groepen):
    """Administratieve groep ('1e lj 3e gr Wetenschappen-Wiskunde ASO') -> (leerjaar, graad, officiële titel, finaliteit)."""
    kand = collections.defaultdict(list)
    for g in groepen:
        graad = (g.get("graad") or {}).get("code")
        fin = (g.get("finaliteit") or {}).get("code")
        if graad not in ("2", "3"):
            continue
        for t in [g["titel"]] + [o["titel"] for o in g.get("structuuronderdelen", [])]:
            kand[graad].append((t, g["titel"], fin))
    uit, twijfel = {}, []
    for o in omschrijvingen:
        m = re.match(r"^(\d)e lj ([23])e gr (.+)$", o)
        if not m:
            continue
        lj, graad, naam = m.groups()
        naam = re.sub(r"\s?(ASO|TSO|KSO|BSO|DBSO)\b.*$", "", naam)
        exact = [x for x in kand[graad] if past(naam, x[0])]
        if exact:
            best = min(exact, key=lambda x: len(x[0]))
        else:
            n = " ".join(woorden(naam))
            best = max(kand[graad], key=lambda x: difflib.SequenceMatcher(None, n, " ".join(woorden(x[0]))).ratio())
            twijfel.append((o, best[1]))
        uit[o] = {"leerjaar": int(lj), "graad": int(graad), "titel": best[1], "fin": best[2]}
    return uit, twijfel


def koepel_van(s):
    kp, net = (s or {}).get("koepel") or "", (s or {}).get("net") or ""
    if "Kat" in kp:
        return "KOV"
    if "GO!" in kp or net == "Gemeenschapsonderwijs":
        return "GO!"
    if "OVSG" in kp:
        return "OVSG"
    if "Provinciaal" in kp:
        return "POV"
    return "andere"


def main(argv):
    if "--cache" not in argv:
        ophalen()
    ins, scholen, groepen = lees_cache("inschrijvingen"), lees_cache("scholen"), lees_cache("structuur")
    jaar, rijen = ins["jaar"], ins["rijen"]
    school = {s["nummer"]: s for s in scholen}
    kp = yaml.safe_load((REPO / "Handboeken" / "koepels.yaml").read_text(encoding="utf-8"))
    profiel = {}
    for graad, gd in kp["graden"].items():
        for pd in gd["profielen"].values():
            pak = {k: str(pd[k]["pakket"]) for k in ("KOV", "GO", "POV") if isinstance(pd.get(k), dict) and pd[k].get("pakket")}
            pref = "" if graad == 3 else "2g"
            pak = {k: (v if v.startswith("2g") or graad == 3 else pref + v) for k, v in pak.items()}
            for r in pd["richtingen"]:
                profiel[(graad, norm(r))] = pak

    koppeling, twijfel = koppel({r["administratievegroep_omschrijving"] for r in rijen}, groepen)
    for o, t in twijfel:
        print(f"  bij benadering: {o} -> {t}")

    groep = collections.Counter()      # (graad, categorie)
    perkoepel = collections.Counter()  # (koepel, categorie)
    perpakket = collections.Counter()  # pakket-id
    richting = collections.Counter()   # (graad, titel, pakket-id)
    zonder = collections.Counter()     # (graad, titel): doorstroom zonder pakket
    perleerjaar = collections.Counter()  # (graad, leerjaar, categorie)
    scholen_met = collections.defaultdict(set)
    for r in rijen:
        x = koppeling.get(r["administratievegroep_omschrijving"])
        if not x or not x["fin"]:
            continue
        n = r["aantal_inschrijvingen"]["totaal"]
        g, k = x["graad"], koepel_van(school.get(r["instelling_nummer"]))
        pak = profiel.get((g, norm(x["titel"])), {})
        p = pak.get({"GO!": "GO", "POV": "POV"}.get(k, "KOV")) or pak.get("KOV")
        if x["fin"] == "DO":
            cat = "voorzien" if p else "zonder"
        elif x["fin"] == "DU":
            cat = "da"
        else:
            cat = "a"
        groep[(g, cat)] += n
        perkoepel[(k, cat)] += n
        perleerjaar[(g, x["leerjaar"], cat)] += n
        if cat in ("voorzien", "da") and p:
            perpakket[p] += n
        if cat == "voorzien":
            richting[(g, x["titel"].replace("Mechantronica", "Mechatronica"), p)] += n
            scholen_met[k].add(r["instelling_nummer"])
        if cat == "zonder":
            zonder[(g, x["titel"])] += n

    alle_so = sum(r["aantal_inschrijvingen"]["totaal"] for r in rijen)
    data = {
        "schooljaar": f"{jaar}-{jaar + 1}",
        "teldatum": f"1 februari {jaar + 1}",
        "gemaakt": datetime.date.today().isoformat(),
        "bron": "Onderwijs Vlaanderen, onderwijs-API-portaal: Inschrijvingsaantal SO, Structuuronderdelen en Instelling",
        "secundair": alle_so,
        "graden": [{"graad": g, "cat": c, "n": n} for (g, c), n in sorted(groep.items())],
        "leerjaren": [{"graad": g, "leerjaar": lj, "cat": c, "n": n} for (g, lj, c), n in sorted(perleerjaar.items())],
        "koepels": [{"koepel": k, "cat": c, "n": n} for (k, c), n in sorted(perkoepel.items())],
        "pakketten": [{"pakket": p, "n": n} for p, n in sorted(perpakket.items())],
        "richtingen": [{"graad": g, "richting": t, "pakket": p, "n": n} for (g, t, p), n in richting.most_common()],
        "zonder": [{"graad": g, "richting": t, "n": n} for (g, t), n in zonder.most_common()],
        "scholen": {k: len(v) for k, v in sorted(scholen_met.items())},
    }
    UIT.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    voorzien = sum(n for (g, c), n in groep.items() if c == "voorzien")
    totaal = sum(groep.values())
    print(f"{voorzien} van de {totaal} leerlingen in de 2de en 3de graad ({voorzien / totaal:.0%}) -> {UIT.relative_to(HIER)}")


if __name__ == "__main__":
    main(sys.argv[1:])
