"""Zet het voortgangsoverzicht in README.md, op basis van voortgang.yaml.

    python maak-voortgang.py

De lijst met handboeken (beide graden) en hun sleutels komen uit Ontwerp/voorkanten/maak-voorkanten.py,
de status per handboek uit voortgang.yaml. Het script vervangt alleen wat tussen de twee markeringen in
README.md staat: <!-- voortgang:begin --> en <!-- voortgang:end -->.
"""
import importlib.util
import re
import sys
from pathlib import Path

import yaml

HIER = Path(__file__).resolve().parent
README = HIER / "README.md"
BREEDTE = 20  # aantal blokjes in een balk: elk blokje is 5 %


def laad_voorkanten():
    pad = HIER / "Ontwerp" / "voorkanten" / "maak-voorkanten.py"
    spec = importlib.util.spec_from_file_location("maak_voorkanten", pad)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def afronden(x):
    """Gewoon afronden (2,5 wordt 3), niet naar het even getal zoals round()."""
    return int(x + 0.5)


def balk(percentage):
    vol = afronden(percentage / 100 * BREEDTE)
    if percentage > 0:
        vol = max(vol, 1)  # een begonnen handboek toont altijd minstens één blokje
    return "`" + "█" * vol + "░" * (BREEDTE - vol) + "`"


def pct(x):
    return f"{afronden(x):>3} %".replace(" ", " ")


def bouw():
    vk = laad_voorkanten()
    cfg = yaml.safe_load((HIER / "voortgang.yaml").read_text(encoding="utf-8"))
    statussen, status_van = cfg["statussen"], cfg.get("handboeken") or {}

    sleutels = {vk.sleutel(p, m) for p, m, _, _ in vk.ALLE_HANDBOEKEN}
    onbekend = [k for k in status_van if k not in sleutels]
    if onbekend:
        sys.exit("Onbekende sleutel in voortgang.yaml: " + ", ".join(onbekend))
    for k, s in status_van.items():
        if s not in statussen:
            sys.exit(f"Onbekende status '{s}' bij {k}")

    def status(p, m):
        return status_van.get(vk.sleutel(p, m), "gepland")

    def waarde(p, m):
        return statussen[status(p, m)]["percentage"]

    def link(p, m):
        pad = vk.cursusmap(p, m)
        if (pad / "README.md").exists():
            return f"[{m.split('/')[-1]}](<{pad.relative_to(HIER).as_posix()}/README.md>)"
        return m.split("/")[-1]

    uit = [
        "Een percentage hoort bij een status: " + ", ".join(
            f"{statussen[s]['teken']} **{s.replace('-', ' ')}** ({statussen[s]['percentage']} %): {statussen[s]['uitleg']}"
            for s in statussen) + ".\n"]
    for g in (3, 2):
        pakketten = [p for p in vk.ALLE_PAKKETTEN if vk.graad(p) == g]
        lijst = [(p, m) for p, m, _, _ in vk.ALLE_HANDBOEKEN if vk.graad(p) == g]
        per_pakket = {p: [waarde(q, m) for q, m in lijst if q == p] for p in pakketten}
        gemiddeld = {p: sum(v) / len(v) for p, v in per_pakket.items()}
        totaal = sum(waarde(p, m) for p, m in lijst) / len(lijst)
        aantal = {s: sum(1 for p, m in lijst if status(p, m) == s) for s in statussen}

        uit.append(f"### {g}de graad\n")
        uit.append(f"**Totaal** &nbsp; {balk(totaal)} &nbsp; **{afronden(totaal)} %** van {len(lijst)} handboeken\n")
        uit.append(" · ".join(f"{statussen[s]['teken']} {aantal[s]} {s.replace('-', ' ')}" for s in statussen if aantal[s]) + "\n")

        uit.append("#### Per richting\n")
        uit.append("Elke richting volgt één pakket, en de voortgang van de richting is het gemiddelde van de handboeken in dat pakket.\n")
        uit.append("| Richting | Pakket | Voortgang | |")
        uit.append("|---|---|---|---:|")
        for p in pakketten:
            naam = re.search(r"\((.+)\)$", p).group(1)
            for richting in vk.ALLE_PAKKETTEN[p]["richtingen"].split(", "):
                uit.append(f"| {richting} | {p.split()[0]} ({naam}) | {balk(gemiddeld[p])} | {pct(gemiddeld[p])} |")
        uit.append("")

        uit.append("#### Per handboek\n")
        for p in pakketten:
            naam = re.search(r"\((.+)\)$", p).group(1)
            uit.append(f"##### Pakket {p.split()[0]} · {naam} &nbsp; {balk(gemiddeld[p])} {afronden(gemiddeld[p])} %\n")
            uit.append(f"<sub>{vk.ALLE_PAKKETTEN[p]['richtingen']}</sub>\n")
            uit.append("| Handboek | Rubriek | Status | Voortgang | |")
            uit.append("|---|---|---|---|---:|")
            for q, m in lijst:
                if q != p:
                    continue
                delen = m.split("/")
                rubriek = delen[0] if len(delen) > 1 else "–"
                s = status(p, m)
                uit.append(f"| {link(p, m)} | {rubriek} | {statussen[s]['teken']} {s.replace('-', ' ')} | {balk(waarde(p, m))} | {pct(waarde(p, m))} |")
            uit.append("")
    return "\n".join(uit).rstrip() + "\n"


def main():
    tekst = README.read_text(encoding="utf-8")
    begin, einde = "<!-- voortgang:begin -->", "<!-- voortgang:end -->"
    if begin not in tekst or einde not in tekst:
        sys.exit("README.md mist de markeringen voor het voortgangsoverzicht")
    voor, rest = tekst.split(begin, 1)
    _, na = rest.split(einde, 1)
    README.write_text(voor + begin + "\n" + bouw() + einde + na, encoding="utf-8", newline="\n")
    print("README.md bijgewerkt")


if __name__ == "__main__":
    main()
