"""Maakt de voorkant van elk handboek. Uitvoeren in PowerShell, vanuit deze map:

    py -3.13 -P maak-voorkanten.py

Resultaat:
  - alle-voorkanten.pdf: alle handboeken, een pagina per handboek, met bladwijzers;
  - in elke cursus die al een handboek.tex heeft: voorkant-gegevens.tex (de gegevens en de naam van het motief).
    De voorkant, de motieven, de schilderijen en het logo blijven hier: de cursussen lezen ze rechtstreeks.

Een nieuwe cursus krijgt haar voorkant dus vanzelf bij de volgende keer dat dit script draait.
Kunstwerken: ../omslagen/maak-omslagen.py. Het logo: ../logo/.
"""
import re
import shutil
import subprocess
from pathlib import Path

import os

MAP = Path(__file__).resolve().parent
HANDBOEKEN = MAP.parent.parent / "Handboeken"
MAP_3, MAP_2 = "3de graad", "2de graad"  # de mappen per graad onder Handboeken/
TEXLIVE = Path(r"C:\texlive\2024\bin\windows")

GRAAD = "3de graad doorstroomfinaliteit"
GRAAD_2 = "2de graad doorstroomfinaliteit"

# Kleur van de voorkant per graad (accent: de band, fel: het label en de rubriek), zie de ontwerpregels.
# De 3de graad gebruikt de standaardkleuren uit Opmaak/opmaak.tex (0B6470 en 3FD6F0).
KLEUR_2 = ("8C1D40", "FFC857")  # bordeaux en goud: wit op bordeaux 8,9; inkt op goud 10,8

# Richtingen en uren: Handboeken/README.md.
PAKKETTEN = {
    "1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)": {
        "richtingen": "Grieks-Latijn, Humane wetenschappen, Latijn-Moderne talen, Moderne talen",
        "uren": r"5de jaar: 3 uur per week. 6de jaar: 4 uur per week (W\&S), in Moderne talen 2 uur",
    },
    "2 Economie-Moderne talen (B+S)": {
        "richtingen": "Economie-Moderne talen",
        "uren": "5de jaar: 3 uur per week. 6de jaar: 4 uur per week",
    },
    "3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')": {
        "richtingen": "Latijn-Wetenschappen, Moderne talen-Wetenschappen, Sportwetenschappen",
        "uren": "4 uur per week",
    },
    "4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')": {
        "richtingen": "Economie-Wiskunde, Grieks-Wiskunde, Latijn-Wiskunde, Wetenschappen-Wiskunde",
        "uren": "6 uur per week",
    },
}
P1, P2, P3, P4 = PAKKETTEN

# Map (onder het pakket) en naam van het motief, zoals in de README's van de pakketten. Het leerjaar
# staat er alleen bij pakket 4 bij (de verdeling over de jaren ligt daar vast). De leerplannen zijn
# graadleerplannen: bij de andere pakketten is de verdeling over de jaren nog niet vastgelegd.
# (pakket, map, motief, leerjaar)
HANDBOEKEN_LIJST = []
GEMEEN = [
    ("Analyse/Algemene functies", "algemene-functies"),
    ("Analyse/Exponentiële en logaritmische functies", "exponentieel-logaritmisch"),
    ("Analyse/Goniometrische functies", "goniometrische-functies"),
]
for pakket, extra in (
    (P1, [("Analyse/Afgeleiden", "afgeleiden"), ("Algebra/Matrices", "matrices"), ("Discrete wiskunde/Rijen", "rijen"),
          ("Data en onzekerheid/Kansrekenen", "kansrekenen"), ("Data en onzekerheid/Statistiek", "statistiek")]),
    (P2, [("Analyse/Rationale functies", "rationale-functies"), ("Analyse/Afgeleiden", "afgeleiden"),
          ("Analyse/Integralen", "integralen"), ("Algebra/Matrices", "matrices"), ("Discrete wiskunde/Rijen", "rijen"),
          ("Data en onzekerheid/Kansrekenen", "kansrekenen"), ("Data en onzekerheid/Statistiek", "statistiek"),
          ("Onderzoekscompetentie", "onderzoekscompetentie")]),
    (P3, [("Analyse/Rationale functies", "rationale-functies"), ("Analyse/Afgeleiden", "afgeleiden"),
          ("Analyse/Integralen", "integralen"), ("Algebra/Matrices", "matrices"), ("Algebra/Complexe getallen", "complexe-getallen"),
          ("Discrete wiskunde/Rijen", "rijen"), ("Data en onzekerheid/Kansrekenen", "kansrekenen"),
          ("Data en onzekerheid/Statistiek", "statistiek"), ("Onderzoekscompetentie", "onderzoekscompetentie")]),
):
    HANDBOEKEN_LIJST += [(pakket, m, n, None) for m, n in GEMEEN + extra]
HANDBOEKEN_LIJST += [(P4, m, n, jaar) for m, n, jaar in [
    ("Analyse/Algemene functies", "algemene-functies", "5de jaar"),
    ("Analyse/Exponentiële en logaritmische functies", "exponentieel-logaritmisch", "5de jaar"),
    ("Analyse/Goniometrische functies", "goniometrische-functies", "5de jaar"),
    ("Analyse/Rationale functies", "rationale-functies", "5de jaar"),
    ("Analyse/Limieten en afgeleiden", "afgeleiden", "5de jaar"),
    ("Analyse/Integralen", "integralen", "6de jaar"),
    ("Algebra/Matrices", "matrices", "5de jaar"),
    ("Algebra/Complexe getallen", "complexe-getallen", "5de jaar"),
    ("Algebra/Groepen", "groepen", "6de jaar"),
    ("Meetkunde/Ruimtemeetkunde", "ruimtemeetkunde", "6de jaar"),
    ("Discrete wiskunde/Rijen", "rijen", "6de jaar"),
    ("Discrete wiskunde/Telproblemen", "telproblemen", "6de jaar"),
    ("Discrete wiskunde/Logica en bewijzen", "logica-en-bewijzen", "6de jaar"),
    ("Data en onzekerheid/Kansrekenen", "kansrekenen", "6de jaar"),
    ("Data en onzekerheid/Statistiek", "statistiek", "6de jaar"),
    ("Onderzoekscompetentie", "onderzoekscompetentie", None),
]]

# 2de graad: vijf pakketten naar de leerplannen wiskunde 2de graad D (zie Handboeken/2de graad/README.md).
# Richtingen uit de leerplannen; de uren volgen uit de graaduren van het leerplan en verschillen per school.
PAKKETTEN_2 = {
    "1 Kunst, Dans, Muziek, Woordkunst, Maatschappij (Basis)": {
        "richtingen": "Beeldende en audiovisuele vorming, Dans, Maatschappij- en welzijnswetenschappen, Muziek, Woordkunst-drama",
        "uren": "3 uur per week",
    },
    "2 Humane wetenschappen (B+)": {
        "richtingen": "Humane wetenschappen",
        "uren": "4 uur per week",
    },
    "3 Bedrijfswetenschappen, Topsport-Economie (B+S')": {
        "richtingen": "Bedrijfswetenschappen, Topsport-Economie",
        "uren": "4 en 3 uur per week (7 graaduren)",
    },
    "4 Economie, Grieks-Latijn, Latijn, Moderne talen, STEM (B+S)": {
        "richtingen": "Economische wetenschappen, Grieks-Latijn, Latijn, Moderne talen, Sportwetenschappen, "
                      "Technologische wetenschappen en andere",
        # de volledige lijst, voor de keuze per studierichting op de leerkrachtensite (de kaft heeft geen plaats)
        "alle_richtingen": ["Architecturale en beeldende vorming", "Biotechnologische STEM-wetenschappen",
                            "Biotechnologische wetenschappen", "Bouwwetenschappen", "Economische wetenschappen",
                            "Freinetpedagogie", "Grieks-Latijn", "Latijn", "Moderne talen", "Sportwetenschappen",
                            "Technologische wetenschappen", "Topsport-Natuurwetenschappen"],
        "uren": "4 uur per week",
    },
    "5 Economie, Grieks-Latijn, Latijn, Natuur-, Techn. wet. (B+S'')": {
        "richtingen": "Economische wetenschappen, Grieks-Latijn, Latijn, Natuurwetenschappen, Technologische wetenschappen",
        "uren": "5 uur per week",
    },
}
Q1, Q2, Q3, Q4, Q5 = PAKKETTEN_2

# De handboeken van de 2de graad, zoals in Handboeken/2de graad/README.md: klein, maar opbouwende hoofdstukken
# uit hetzelfde jaar samen. Een reeks verwante handboeken deelt een kunstwerk (motieven/g2-<reeks>.tex).
# (map, motief, pakketten waarin de module staat)
MODULES_2 = [
    # 3de jaar
    ("Algebra/Reële getallen", "g2-getallen", "12345"),
    ("Algebra/Eerstegraadsvergelijkingen", "g2-vergelijkingen", "12345"),
    ("Analyse/Functies", "g2-functies", "12345"),
    ("Algebra/Stelsels", "g2-stelsels", "12345"),
    ("Meetkunde/Gelijkvormigheid", "g2-gelijkvormigheid", "12345"),
    ("Meetkunde/Driehoeksmeting", "g2-driehoeken", "12345"),
    ("Discrete wiskunde/Logica", "g2-logica", "12345"),
    ("Data en onzekerheid/Statistiek", "g2-statistiek", "12345"),
    ("Data en onzekerheid/Spreidingsdiagrammen", "g2-spreiding", "2345"),
    # 4de jaar
    ("Analyse/Tweedegraadsfuncties", "g2-tweedegraads", "12345"),
    ("Algebra/Veeltermen", "g2-veeltermen", "5"),
    ("Meetkunde/Goniometrie", "g2-goniometrie", "45"),
    ("Meetkunde/Ruimtemeetkunde", "g2-ruimte", "12345"),
    ("Meetkunde/Vectoren", "g2-vectoren", "12345"),
    ("Meetkunde/Analytische meetkunde", "g2-vectoren", "5"),
    ("Meetkunde/De cirkel", "g2-cirkel", "45"),
    ("Discrete wiskunde/Telproblemen", "g2-tellen", "12345"),
    ("Discrete wiskunde/Grafen", "g2-grafen", "45"),
]
HANDBOEKEN_2 = [(pakket, m, n, None) for pakket in PAKKETTEN_2 for m, n, in_ in MODULES_2 if pakket.split()[0] in in_]

# Titels die niet op één regel van 64 pt passen: (titel met regeleinde, grootte in pt).
TITELS = {
    "Algemene functies": (r"Algemene\\functies", 46),
    "Exponentiële en logaritmische functies": (r"Exponentiële en\\logaritmische functies", 40),
    "Goniometrische functies": (r"Goniometrische\\functies", 46),
    "Rationale functies": (r"Rationale\\functies", 46),
    "Limieten en afgeleiden": (r"Limieten en\\afgeleiden", 46),
    "Complexe getallen": (r"Complexe\\getallen", 46),
    "Ruimtemeetkunde": ("Ruimtemeetkunde", 50),
    "Logica en bewijzen": (r"Logica en\\bewijzen", 46),
    "Onderzoekscompetentie": (r"Onderzoeks-\\competentie", 46),
    "Reële getallen": (r"Reële\\getallen", 46),
    "Eerstegraadsvergelijkingen": (r"Eerstegraads-\\vergelijkingen", 46),
    "Tweedegraadsfuncties": (r"Tweedegraads-\\functies", 46),
    "Spreidingsdiagrammen": (r"Spreidings-\\diagrammen", 46),
    "Driehoeksmeting": ("Driehoeksmeting", 46),
    "Gelijkvormigheid": ("Gelijkvormigheid", 46),
    "Analytische meetkunde": (r"Analytische\\meetkunde", 46),
}


def gegevens(pakket, map_, jaar):
    """De regels van voorkant-gegevens.tex voor één handboek."""
    delen = map_.split("/")
    titel = delen[-1]
    rubriek = delen[0] if len(delen) > 1 else ""
    omslagtitel, grootte = TITELS.get(titel, (titel, 64))
    tweede = pakket in PAKKETTEN_2
    graad = GRAAD_2 if tweede else GRAAD
    graad = f"{graad}, {jaar}" if jaar else graad
    p = (PAKKETTEN_2 if tweede else PAKKETTEN)[pakket]
    kleur = [f"\\def\\omslagaccent{{{KLEUR_2[0]}}}", f"\\def\\omslagfel{{{KLEUR_2[1]}}}"] if tweede else []
    return "\n".join(kleur + [
        f"\\def\\cursusrubriek{{{rubriek}}}",
        f"\\def\\cursusrichtingen{{{p['richtingen']}}}",
        f"\\def\\cursusgraad{{{graad}}}",
        f"\\def\\cursusuren{{{p['uren']}}}",
        f"\\def\\omslagtitel{{{omslagtitel}}}",
        f"\\def\\omslagtitelgrootte{{{grootte}}}",
    ]) + "\n"


def cursusmap(pakket, map_):
    """De map van een cursus: Handboeken/<graad>/<pakket>/<rubriek>/<cursus>."""
    return HANDBOEKEN / (MAP_2 if pakket in PAKKETTEN_2 else MAP_3) / pakket / Path(map_)


# Eén plaats voor de graad, het kenmerk en de sleutel van een handboek: maak-voortgang.py en de leerkrachtensite
# (Website/leerkrachten/maak.py) gebruiken ze. De 3de graad houdt de sleutels van voor de 2de graad er was
# ("4/Analyse/Integralen"), zodat de feedback op de site bij het juiste boek blijft; de 2de graad krijgt "2g5/...".
ALLE_PAKKETTEN = {**PAKKETTEN, **PAKKETTEN_2}
ALLE_HANDBOEKEN = HANDBOEKEN_LIJST + HANDBOEKEN_2


def graad(pakket):
    return 2 if pakket in PAKKETTEN_2 else 3


def pakket_id(pakket):
    nummer = pakket.split()[0]
    return f"2g{nummer}" if graad(pakket) == 2 else nummer


def sleutel(pakket, map_):
    return f"{pakket_id(pakket)}/{map_}"


def met_motief():
    """Alle handboeken van beide graden waarvan het motief al bestaat; meldt de andere."""
    zonder = sorted({n for _, _, n, _ in HANDBOEKEN_2 if not (MAP / "motieven" / f"{n}.tex").exists()})
    if zonder:
        print(f"2de graad: nog geen motief (en dus geen voorkant) voor {', '.join(zonder)}")
    return HANDBOEKEN_LIJST + [h for h in HANDBOEKEN_2 if (MAP / "motieven" / f"{h[2]}.tex").exists()]


def bouw_alles():
    pagina = []
    lijst = met_motief()
    for pakket, map_, motief, jaar in lijst:
        tweede = pakket in PAKKETTEN_2
        nummer = pakket.split()[0]
        titel = map_.split("/")[-1]
        graad = "2de graad, " if tweede else ""
        pagina.append(
            "\\begingroup\n"
            f"\\input{{motieven/{motief}}}\n"
            f"{gegevens(pakket, map_, jaar)}"
            f"\\pdfbookmark[0]{{{graad}Pakket {nummer} - {titel}}}{{{'g2' if tweede else ''}p{nummer}-{re.sub('[^a-z]', '', titel.lower())}}}\n"
            "\\maakomslag\n"
            "\\endgroup\n"
        )
    tex = r"""%% Gemaakt door maak-voorkanten.py: pas dat script of de motieven aan, niet dit bestand.
\documentclass[11pt,oneside,openany]{book}
\usepackage{etoolbox}
\usepackage[dutch]{babel}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{amsmath}
\usepackage[T1]{fontenc}
\usepackage[default]{sourcesanspro}
\usepackage{newtxsf}
\renewcommand{\familydefault}{\sfdefault}
\linespread{1.1}
\usepackage{icomma}
\usepackage{ragged2e}
\usepackage{array}
\usepackage{graphicx}
\graphicspath{{../omslagen/}{../logo/}}
\usepackage{xcolor}
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc}
\definecolor{inkt}{HTML}{12202B}
\definecolor{accent}{HTML}{0B6470}
\definecolor{fel}{HTML}{3FD6F0}
\newcommand{\kopletter}{\sffamily\bfseries}
\newcommand{\cursusondertitel}{Handboek}
\input{voorkant}
\usepackage[hyperfootnotes=false]{hyperref}
\hypersetup{hidelinks,pdftitle={Voorkanten van de handboeken},pdflang={nl}}
\begin{document}
""" + "".join(pagina) + "\\end{document}\n"
    (MAP / "alle-voorkanten.tex").write_text(tex, encoding="utf-8")
    env = dict(os.environ)
    env["PATH"] = str(TEXLIVE) + os.pathsep + env["PATH"]
    for _ in range(2):  # twee rondes: de voorkant staat op een vaste plaats op de pagina (remember picture)
        r = subprocess.run(["pdflatex", "-interaction=nonstopmode", "-halt-on-error", "alle-voorkanten.tex"],
                           cwd=MAP, env=env, capture_output=True, text=True, encoding="latin-1")
        if r.returncode:
            print(r.stdout[-3000:])
            raise SystemExit("pdflatex is mislukt")
    print("alle-voorkanten.pdf:", len(lijst), "handboeken")


def zet_in_cursussen():
    """Bestanden naar de cursussen die al een handboek.tex hebben."""
    for pakket, map_, motief, jaar in HANDBOEKEN_LIJST + HANDBOEKEN_2:
        cursus = cursusmap(pakket, map_)
        if (cursus / "Handboek").is_dir():
            cursus = cursus / "Handboek"
        if not (cursus / "handboek.tex").exists():
            continue
        (cursus / "voorkant-gegevens.tex").write_text(
            gegevens(pakket, map_, jaar) + f"\\def\\motiefnaam{{{motief}}}\n", encoding="utf-8")
        print("cursus bijgewerkt:", map_, f"({pakket.split(' (')[0]})")


if __name__ == "__main__":
    bouw_alles()
    zet_in_cursussen()
