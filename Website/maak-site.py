"""Zet de oefeningenbank van een hoofdstuk om voor de website. Uitvoeren vanuit deze map:

    py -3.13 -P maak-site.py

Leest uit de cursus Integralen:
  - oefeningen/01-*.yaml: opgaven, antwoorden en uitwerkingen;
  - hoofdstukken/01-*.tex: de volgorde (dus de nummers uit het boek), de voorbeelden en het schema Fout? Herhaal;
  - figuren-cache/h1-*.pdf: de grafieken van de opgaven, gemaakt door maak-pdf.py.

Schrijft assets/h1/oefeningen.js en assets/fig/h1-*.svg. Pas de oefeningen dus aan in de YAML, nooit hier.
Het script meldt welke antwoorden de website automatisch kan nakijken; de rest kijkt de leerling zelf na.
"""
import json
import math
import re
import shutil
import sys
from pathlib import Path

import pymupdf
import yaml

HIER = Path(__file__).resolve().parent
CURSUS = next((HIER.parent / "Handboeken" / "3de graad").glob("4 *")) / "Analyse" / "Integralen"
sys.path.insert(0, str(HIER.parent / "Opmaak"))
import oefeningenbank  # noqa: E402

NUMMER = 1
UIT = HIER / "assets" / "h1"
FIG = HIER / "assets" / "fig"
FIGUUR = re.compile(r"\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}", re.S)


def binnen_haakjes(tekst, begin):
    """Geeft de index van het haakje dat sluit bij het haakje op plaats begin."""
    diepte = 0
    for i in range(begin, len(tekst)):
        if tekst[i] == "{" and tekst[i - 1] != "\\":
            diepte += 1
        elif tekst[i] == "}" and tekst[i - 1] != "\\":
            diepte -= 1
            if diepte == 0:
                return i
    raise ValueError(f"haakje sluit niet: {tekst[begin:begin + 60]}")


class Omzetter:
    def __init__(self, figuren):
        self.figuren = figuren  # alle TikZ-code van het hoofdstuk, in de volgorde van de cache-PDF
        self.gebruikt = set()

    def figuur(self, code):
        nummer = self.figuren.index(code) + 1
        self.gebruikt.add(nummer)
        return f'<img class="fig" src="assets/fig/h{NUMMER}-{nummer}.svg" alt="Grafiek bij de opgave, zoals in het boek" loading="lazy">'

    def html(self, tekst):
        """LaTeX-tekst naar HTML. Formules blijven tussen dollars: de browser zet ze om met KaTeX."""
        if tekst is None:
            return None
        tekst = self._figuren_weg(tekst.strip())
        stukken = re.split(r"(\$[^$]*\$)", tekst)
        for i in range(0, len(stukken), 2):
            stukken[i] = self._gewone_tekst(stukken[i])
        return "".join(stukken).strip()

    def _figuren_weg(self, tekst):
        while (plaats := tekst.find(r"\figuren{")) >= 0:
            haakje = plaats + len(r"\figuren")
            einde = binnen_haakjes(tekst, haakje)
            binnen = tekst[haakje + 1:einde]
            beelden = "".join(self.figuur(f) for f in FIGUUR.findall(binnen))
            tekst = tekst[:plaats] + f'\u0001<div class="figrij">{beelden}</div>\u0002' + tekst[einde + 1:]
        return FIGUUR.sub(lambda t: "\u0001" + self.figuur(t.group(0)) + "\u0002", tekst)

    @staticmethod
    def _gewone_tekst(t):
        # Stukken tussen \u0001 en \u0002 zijn al HTML.
        delen = re.split("(\u0001.*?\u0002)", t, flags=re.S)
        for i, deel in enumerate(delen):
            if deel.startswith("\u0001"):
                delen[i] = deel[1:-1]
                continue
            deel = deel.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            deel = re.sub(r"\\textbf\{([^}]*)\}", r"<b>\1</b>", deel)
            deel = re.sub(r"\\\\(\[[^\]]*\])?", "<br>", deel)
            deel = deel.replace("``", "“").replace("''", "”").replace(r"\%", "%")
            deel = deel.replace(r"\quad", " ").replace(r"\ ", " ").replace("~", " ")
            delen[i] = re.sub(r"\n\s*\n", "<br>", deel)
        return "".join(delen)


# --- automatisch nakijken -----------------------------------------------------------------------

def getal(latex):
    """Rekent een eenvoudige LaTeX-uitdrukking uit, of geeft None."""
    s = latex.strip().replace("{,}", ".").replace(r"\,", "").replace(r"\!", "")
    s = re.sub(r"\\[dt]frac(\d)(\d)", r"(\1)/(\2)", s)
    for _ in range(3):
        s = re.sub(r"\\[dt]frac\{([^{}]*)\}\{([^{}]*)\}", r"(\1)/(\2)", s)
    s = s.replace(r"\ln ", "log(").replace(r"\pi", "pi")
    if "log(" in s:
        s = re.sub(r"log\((\d+)", r"log(\1)", s)
    s = re.sub(r"(\d)(pi|log)", r"\1*\2", s)
    s = re.sub(r"\)(\(|pi|\d)", r")*\1", s)
    if not re.fullmatch(r"[\d\.\+\-\*/\(\)\s]*(?:(?:pi|log)[\d\.\+\-\*/\(\)\s]*)*", s) or not s.strip():
        return None
    try:
        return float(eval(s, {"__builtins__": {}}, {"pi": math.pi, "log": math.log}))  # alleen getallen, zie regex
    except Exception:
        return None


def decimalen(latex):
    t = re.search(r"\{,\}(\d+)\s*$|,(\d+)\s*$", latex.strip())
    return len(t.group(1) or t.group(2)) if t else 0


def veld(deel):
    """Eén antwoordveld uit een stuk tekst als 'O_4 = 3,75', 'Verplaatsing 5 m' of '20 km'."""
    deel = deel.strip().rstrip(".;")
    ongeveer = False
    if deel.startswith("ongeveer "):
        ongeveer, deel = True, deel[9:]
    wiskunde = re.fullmatch(r"([^$]*)\$([^$]*)\$\s*([^$]*)", deel)
    label, eenheid, benadering = "", "", False
    if wiskunde:
        voor, formule, eenheid = wiskunde.groups()
        label = voor.strip()
        scheiding = re.split(r"\\approx|=", formule)
        if len(scheiding) > 2:
            return None
        if len(scheiding) == 2:
            benadering = r"\approx" in formule
            links = scheiding[0].strip()
            if links:
                label = (label + " " if label else "") + f"${links}$"
            formule = scheiding[1]
        waarde = getal(formule)
        if waarde is None:
            return None
        juist = formule
    else:
        t = re.fullmatch(r"([A-Za-zë ]*?)\s*(-?\d+(?:,\d+)?)\s*([A-Za-z/]*)", deel)
        if not t:
            return None
        label, juist, eenheid = t.groups()
        waarde = float(juist.replace(",", "."))
    d = decimalen(juist)
    if ongeveer:
        tol = max(abs(waarde) * 0.07, 0.1)
    elif benadering or d >= 2:
        tol = 0.6 * 10 ** (-d)
    else:
        tol = 1e-6
    # Een exact antwoord met pi of een breuk: een afgerond getal is juist, maar krijgt een opmerking.
    exact = bool(re.search(r"pi|frac", juist)) and not benadering
    return {"label": label.strip(), "waarde": round(waarde, 8), "tol": tol, "exact": exact, "eenheid": eenheid.strip()}


def controle(antwoord):
    if antwoord is None:
        return None
    kaal = antwoord.strip()
    if kaal in ("positief", "negatief", "nul"):
        return {"keuze": ["positief", "negatief", "nul"], "juist": kaal}
    if "\\int" in kaal:
        return None
    stukken = re.split(r"\s+en\s+|;\s+|,\s+(?![^$]*\$(?:[^$]*\$[^$]*\$)*[^$]*$)", kaal)
    velden = [veld(s) for s in stukken]
    return {"velden": velden} if velden and all(velden) else None


# --- de bank omzetten ---------------------------------------------------------------------------

def zet_om(oef, nr, om, verslag):
    uit = {"id": oef["id"], "nr": nr, "soort": oef.get("soort"), "niveau": oef.get("niveau")}
    opgave = oef.get("opgave", "")
    titel = re.match(r"\\blokkop\{([^}]*)\}(?:\\quad)?\s*", opgave)
    if titel:
        uit["titel"] = titel.group(1)
        opgave = opgave[titel.end():]
    uit["opgave"] = om.html(opgave)
    if "koppel" in oef:
        uit["koppel"] = {"rubriek": oef["koppel"]["rubriek"], "onderwerp": oef["koppel"]["onderwerp"]}
    if "figuur" in oef:
        uit["figuur"] = om.figuur(oef["figuur"]["code"].strip())
    if "prent" in oef:
        uit["prent"] = oef["prent"]["naam"]
    if "lijst" in oef:
        uit["lijst"] = oef["lijst"]
        uit["kolommen"] = oef.get("kolommen", 1)
        uit["delen"] = []
        for deel in oef.get("delen", []):
            d = {"opgave": om.html(deel["opgave"]), "antwoord": om.html(deel.get("antwoord")),
                 "uitwerking": om.html(deel.get("uitwerking")), "controle": controle(deel.get("antwoord"))}
            uit["delen"].append(d)
    if "slot" in oef:
        uit["slot"] = om.html(oef["slot"])
    uit["antwoord"] = om.html(oef.get("antwoord"))
    uit["uitwerking"] = om.html(oef.get("uitwerking"))
    uit["controle"] = controle(oef.get("antwoord"))

    if uit.get("delen"):
        for letter, d in zip("abcdefgh", uit["delen"]):
            if d["antwoord"]:
                verslag.append((d["controle"] is not None, f"{nr}{letter}", d["antwoord"]))
    if uit["antwoord"]:
        verslag.append((uit["controle"] is not None, str(nr), uit["antwoord"]))
    return uit


def main():
    tex = next((CURSUS / "hoofdstukken").glob(f"{NUMMER:02d}-*.tex")).read_text(encoding="utf-8")
    bank = oefeningenbank.laad(CURSUS)
    gevuld = oefeningenbank.vul_in(tex, bank)
    figuren = [f.strip() for f in FIGUUR.findall(gevuld)]

    pdfs = list((CURSUS / "figuren-cache").glob(f"h{NUMMER}-*.pdf"))
    if len(pdfs) != 1:
        sys.exit("Geen of meerdere figuren-PDF's: draai eerst maak-pdf.py in de cursusmap.")
    pdf = pymupdf.open(pdfs[0])
    if pdf.page_count != len(figuren):
        sys.exit(f"De figuren-PDF heeft {pdf.page_count} pagina's en het hoofdstuk {len(figuren)} figuren: draai eerst maak-pdf.py.")

    om = Omzetter(figuren)
    volgorde = re.findall(r"^\\oef\{([^}]+)\}", tex, re.M)
    verslag = []
    oefeningen = [zet_om(bank[code], nr, om, verslag) for nr, code in enumerate(volgorde, 1)]
    voorbeelden = {code: nr for nr, code in enumerate(re.findall(r"\\label\{vb:([^}]+)\}", tex), 1)}
    herhaal = [{"test": t, "voorbeeld": v, "oefening": o}
               for t, v, o in re.findall(r"\\fv\{oef:([^}]+)\}\{vb:([^}]+)\}\{oef:([^}]+)\}", tex)]

    FIG.mkdir(parents=True, exist_ok=True)
    UIT.mkdir(parents=True, exist_ok=True)
    for oud in FIG.glob(f"h{NUMMER}-*.svg"):
        oud.unlink()
    for nummer in sorted(om.gebruikt):
        svg = pdf[nummer - 1].get_svg_image(matrix=pymupdf.Matrix(1.5, 1.5), text_as_path=True)
        (FIG / f"h{NUMMER}-{nummer}.svg").write_text(svg, encoding="utf-8")
    if any(o.get("prent") for o in oefeningen):
        for naam in {o["prent"] for o in oefeningen if o.get("prent")}:
            shutil.copyfile(CURSUS / "afbeeldingen" / "prenten" / f"{naam}.png", FIG / f"prent-{naam}.png")

    data = {"oefeningen": oefeningen, "voorbeelden": voorbeelden, "herhaal": herhaal}
    (UIT / "oefeningen.js").write_text(
        "// Gemaakt door maak-site.py uit de oefeningenbank. Niet met de hand aanpassen.\n"
        f"window.AXIOMATH_H{NUMMER} = {json.dumps(data, ensure_ascii=False, indent=0)};\n", encoding="utf-8")

    auto = [v for v in verslag if v[0]]
    print(f"{len(oefeningen)} oefeningen, {len(voorbeelden)} voorbeelden, {len(om.gebruikt)} figuren")
    print(f"automatisch nakijken: {len(auto)} van {len(verslag)} antwoorden. Zelf nakijken:")
    for ok, plaats, tekst in verslag:
        if not ok:
            print(f"  {plaats}: {tekst[:90]}")


if __name__ == "__main__":
    main()
