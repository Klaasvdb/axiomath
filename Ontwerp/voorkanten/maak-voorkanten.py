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

# De finaliteit van een pakket ("finaliteit" in PAKKETTEN...; zonder: doorstroom). Op de voorkant: "3de graad <naam>".
FINALITEITEN = {"D": "doorstroomfinaliteit", "DA": "dubbele finaliteit", "A": "arbeidsmarktfinaliteit"}

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
    (P1, [("Analyse/Afgeleiden", "afgeleiden"), ("Algebra/Matrices", "matrices"), ("Discrete wiskunde/Rijen", "rijen-trappen"),
          ("Data en onzekerheid/Kansrekenen", "kansrekenen"), ("Data en onzekerheid/Statistiek", "statistiek")]),
    (P2, [("Analyse/Rationale functies", "rationale-functies"), ("Analyse/Afgeleiden", "afgeleiden"),
          ("Analyse/Integralen", "integralen"), ("Algebra/Matrices", "matrices"), ("Discrete wiskunde/Rijen", "rijen-trappen"),
          ("Discrete wiskunde/Telproblemen", "telproblemen"),  # alleen voor GO! (koepels.yaml)
          ("Data en onzekerheid/Kansrekenen", "kansrekenen"), ("Data en onzekerheid/Statistiek", "statistiek"),
          ("Onderzoekscompetentie", "onderzoekscompetentie")]),
    (P3, [("Analyse/Rationale functies", "rationale-functies"), ("Analyse/Afgeleiden", "afgeleiden"),
          ("Analyse/Integralen", "integralen"), ("Algebra/Matrices", "matrices"), ("Algebra/Complexe getallen", "complexe-getallen"),
          ("Discrete wiskunde/Rijen", "rijen-trappen"), ("Discrete wiskunde/Telproblemen", "telproblemen"),  # alleen voor GO!
          ("Data en onzekerheid/Kansrekenen", "kansrekenen"),
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
    ("Analyse/Differentiaalvergelijkingen", "differentiaalvergelijkingen", "6de jaar"),
    ("Analyse/Reeksen", "reeksen", "6de jaar"),
    ("Analyse/Numerieke methodes", "numerieke-methodes", "6de jaar"),
    ("Algebra/Matrices", "matrices", "5de jaar"),
    ("Algebra/Complexe getallen", "complexe-getallen", "5de jaar"),
    ("Algebra/Groepen", "groepen", "6de jaar"),
    ("Algebra/Getaltheorie", "getaltheorie", "6de jaar"),
    ("Algebra/Lineair programmeren", "lineair-programmeren", "6de jaar"),
    ("Algebra/Vectorruimten", "vectorruimten", "6de jaar"),
    ("Algebra/Financiële algebra", "financiele-algebra", "6de jaar"),
    ("Meetkunde/Ruimtemeetkunde", "ruimtemeetkunde", "6de jaar"),
    ("Meetkunde/Kegelsneden", "kegelsneden", "6de jaar"),
    ("Discrete wiskunde/Rijen", "rijen", "6de jaar"),
    ("Discrete wiskunde/Telproblemen", "telproblemen", "6de jaar"),
    ("Discrete wiskunde/Logica en bewijzen", "logica-en-bewijzen", "6de jaar"),
    ("Discrete wiskunde/Predicatenlogica", "predicatenlogica", "6de jaar"),
    ("Discrete wiskunde/Iteraties en fractalen", "iteraties-en-fractalen", "6de jaar"),
    ("Data en onzekerheid/Kansrekenen", "kansrekenen", "6de jaar"),
    ("Data en onzekerheid/Statistiek", "statistiek", "6de jaar"),
    ("Data en onzekerheid/Kansverdelingen", "kansverdelingen", "6de jaar"),
    ("Data en onzekerheid/Lineaire regressie", "lineaire-regressie", "6de jaar"),
    ("Data en onzekerheid/Multivariate statistiek", "multivariate-statistiek", "6de jaar"),
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
    # bundels kernvaardigheden, een per jaar (ontwerpregels, deel Kernvaardigheden)
    ("Kernvaardigheden 4de jaar", "g2-kernvaardigheden", "5"),
]
HANDBOEKEN_2 = [(pakket, m, n, None) for pakket in PAKKETTEN_2 for m, n, in_ in MODULES_2 if pakket.split()[0] in in_]

# --- dubbele finaliteit (D/A) en arbeidsmarktfinaliteit (A) ----------------------------------------------------
# De pakketten nummeren verder in hun graad (3de graad: 5-8, 2de graad: 6-8). Zo werken \alleenvoor{…}, maak-pdf.py
# en de sleutels ongewijzigd, en kan een D/A-pakket dezelfde bron in cursussen/ gebruiken als de doorstroom.
# Leerplannen: Katholiek Onderwijs Vlaanderen, versie januari en oktober 2024 (zie Handboeken/<graad>/README.md).
# De pakketnaam tussen haakjes is \pakketnaam (Opmaak/pakketten.py zet D-A om in D/A: een map kan geen / bevatten).
PAKKETTEN_DA3 = {
    "5 Handel, Zorg, Horeca, Agro e.a. (D-A Basis)": {
        "finaliteit": "DA", "leerplan": "III-Wis-da",
        "richtingen": "Bedrijfsorganisatie, Gezondheidszorg, Horeca, Opvoeding en begeleiding, Toerisme en andere",
        "alle_richtingen": ["Agrotechnieken dier", "Agrotechnieken plant", "Architectuur en interieur", "Bakkerijtechnieken",
                            "Bedrijfsorganisatie", "Beeldende kunst", "Commerciële organisatie", "Defensie en veiligheid",
                            "Dierenverzorgingstechnieken", "Fotografie", "Gezondheidszorg", "Horeca",
                            "Internationale handel en logistiek", "Mode", "Natuur- en groentechnieken",
                            "Opvoeding en begeleiding", "Slagerij-Traiteurtechnieken", "Sportbegeleiding",
                            "Taal en communicatie", "Toerisme", "Topsport (dubbele finaliteit)", "Tuinaanleg en -beheer",
                            "Wellness en schoonheid"],
        "uren": "2 uur per week",
    },
    "6 Bouw, Elektro, Auto, ICT e.a. (D-A B+S)": {
        "finaliteit": "DA", "leerplan": "III-WisS-da",
        "richtingen": "Autotechnieken, Bouwtechnieken, Elektromechanische technieken, Elektrotechnieken, Industriële ICT en andere",
        "alle_richtingen": ["Applicatie- en databeheer", "Autotechnieken", "Bouwtechnieken", "Elektromechanische technieken",
                            "Elektrotechnieken", "Houttechnieken", "Industriële ICT", "Koel- en warmtetechnieken",
                            "Mechanische vormgevingstechnieken", "Podiumtechnieken", "Vliegtuigtechnieken"],
        "uren": "3 en 2 uur per week (5 graaduren)",
    },
    "7 Crossmedia, Dentaal, Grafimedia, Optiek e.a. (D-A B+S')": {
        "finaliteit": "DA", "leerplan": "III-WisS'-da",
        "richtingen": "Crossmedia, Dentaaltechnieken, Grafimedia, Optiektechnieken, Orthopedietechnieken",
        "uren": "2 uur per week",
    },
    "8 Biotechnologische en chemische technieken (D-A B+S'')": {
        "finaliteit": "DA", "leerplan": "III-WisS''-da",
        "richtingen": "Biotechnologische en chemische technieken",
        "uren": "3 en 2 uur per week (5 graaduren)",
    },
}
# 3de graad D/A: (map, motief, pakketten, voorgesteld leerjaar). De motieven van verwante handboeken worden hergebruikt.
MODULES_DA3 = [
    ("Analyse/Functies en verandering", "da-verandering", "5678", "5de jaar"),
    ("Analyse/Exponentiële en logaritmische functies", "exponentieel-logaritmisch", "5678", "5de jaar"),
    ("Analyse/Tweedegraadsfuncties", "g2-tweedegraads", "68", "5de jaar"),
    ("Meetkunde/Vectoren", "g2-vectoren", "678", "5de jaar"),
    ("Analyse/Goniometrische functies", "goniometrische-functies", "5678", "6de jaar"),
    ("Data en onzekerheid/Kansrekenen", "kansrekenen", "5678", "6de jaar"),
    ("Data en onzekerheid/Statistiek", "statistiek", "5678", "6de jaar"),
]
HANDBOEKEN_DA3 = [(p, m, n, None) for p in PAKKETTEN_DA3 for m, n, in_, _ in MODULES_DA3 if p.split()[0] in in_]

PAKKETTEN_DA2 = {
    "6 Bedrijf, Horeca, Maatschappij, Sport e.a. (D-A Basis)": {
        "finaliteit": "DA", "leerplan": "II-Wis-da",
        "richtingen": "Bedrijf en organisatie, Horeca, Maatschappij en welzijn, Sport, Toerisme en andere",
        "alle_richtingen": ["Architecturale en beeldende kunsten", "Bakkerijtechnieken", "Bedrijf en organisatie",
                            "Beeldende en audiovisuele kunsten", "Creatie en mode", "Fotografie", "Horeca",
                            "Maatschappij en welzijn", "Plant-, dier- en milieutechnieken", "Slagerijtechnieken", "Sport",
                            "Taal en communicatie", "Toerisme", "Topsport (dubbele finaliteit)", "Wellness en lifestyle"],
        "uren": "3 uur per week",
    },
    "7 Bouw, Elektro, Hout, Mechanica e.a. (D-A B+S)": {
        "finaliteit": "DA", "leerplan": "II-WisS-da",
        "richtingen": "Bouwtechnieken, Elektrotechnieken, Houttechnieken, Mechanische technieken en andere",
        "alle_richtingen": ["Biotechnieken", "Bouwtechnieken", "Elektromechanische technieken", "Elektrotechnieken",
                            "Grafische technieken", "Houttechnieken", "Mechanische technieken", "Voertuigtechnieken"],
        "uren": "3 uur per week",
    },
}
# 2de graad D/A: dezelfde handboeken als de doorstroom (MODULES_2), met een eigen voorstel van leerjaar (JAAR_VOORSTEL).
MODULES_DA2 = {"6": ["Algebra/Reële getallen", "Algebra/Eerstegraadsvergelijkingen", "Analyse/Functies", "Algebra/Stelsels",
                     "Meetkunde/Gelijkvormigheid", "Meetkunde/Driehoeksmeting", "Data en onzekerheid/Statistiek",
                     "Meetkunde/Ruimtemeetkunde", "Discrete wiskunde/Telproblemen"]}
MODULES_DA2["7"] = MODULES_DA2["6"][:8] + ["Meetkunde/Vectoren"] + MODULES_DA2["6"][8:]
MOTIEF_2 = {m: n for m, n, _ in MODULES_2}
HANDBOEKEN_DA2 = [(p, m, MOTIEF_2[m], None) for p in PAKKETTEN_DA2 for m in MODULES_DA2[p.split()[0]]]

# Arbeidsmarktfinaliteit: alleen de 2de graad, één handboek, gemaakt op aanvraag (de site vraagt wie interesse heeft).
PAKKETTEN_A2 = {
    "8 Arbeidsmarktfinaliteit (A)": {
        "finaliteit": "A", "leerplan": "II-Wis-a", "op_aanvraag": True,
        "richtingen": "alle richtingen van de arbeidsmarktfinaliteit",
        "uren": "2 uur per week",
    },
}
HANDBOEKEN_A2 = [(p, "Wiskunde in de praktijk", "a-praktijk", None) for p in PAKKETTEN_A2]

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
    "Predicatenlogica": ("Predicatenlogica", 46),
    "Onderzoekscompetentie": (r"Onderzoeks-\\competentie", 46),
    "Reële getallen": (r"Reële\\getallen", 46),
    "Eerstegraadsvergelijkingen": (r"Eerstegraads-\\vergelijkingen", 46),
    "Tweedegraadsfuncties": (r"Tweedegraads-\\functies", 46),
    "Spreidingsdiagrammen": (r"Spreidings-\\diagrammen", 46),
    "Driehoeksmeting": ("Driehoeksmeting", 46),
    "Gelijkvormigheid": ("Gelijkvormigheid", 46),
    "Analytische meetkunde": (r"Analytische\\meetkunde", 46),
    "Functies en verandering": (r"Functies en\\verandering", 46),
    "Wiskunde in de praktijk": (r"Wiskunde in\\de praktijk", 46),
    "Kernvaardigheden 4de jaar": (r"Kernvaardigheden\\4de jaar", 46),
    "Differentiaalvergelijkingen": (r"Differentiaal-\\vergelijkingen", 46),
    "Numerieke methodes": (r"Numerieke\\methodes", 46),
    "Iteraties en fractalen": (r"Iteraties en\\fractalen", 46),
    "Kansverdelingen": ("Kansverdelingen", 50),
    "Lineaire regressie": (r"Lineaire\\regressie", 46),
    "Multivariate statistiek": (r"Multivariate\\statistiek", 46),
    "Lineair programmeren": (r"Lineair\\programmeren", 46),
    "Vectorruimten": ("Vectorruimten", 52),
    "Financiële algebra": (r"Financiële\\algebra", 46),
}


# Kenmerk van het pakket rechtsboven: een regelmatige veelhoek met het pakketnummer erin. Meer zijden = meer wiskunde
# binnen de finaliteit (Basis: driehoek). Doorstroom: gevuld; D/A: dezelfde vorm met een witte binnenrand;
# A: een cirkel. De kleur per niveau komt uit de felle kleuren van de hoofdstukken (hf1-hf5 en hf8 in Opmaak/opmaak.tex).
KENMERK_KLEUR = {1: "5CB8FF", 2: "2EDDA5", 3: "FFA62B", 4: "FF7DBD", 5: "BC96FF", "A": "FFD93D"}


def kenmerk(pakket):
    """(niveau, aantal zijden, vorm, kleur) van het pakket; zijden 0 is een cirkel."""
    n = int(pakket.split()[0])
    fin = finaliteit(pakket)
    if fin == "A":
        return 1, 0, "ring", KENMERK_KLEUR["A"]
    niveau = n if fin == "D" else n - (4 if graad(pakket) == 3 else 5)
    return niveau, niveau + 2, "vol" if fin == "D" else "ring", KENMERK_KLEUR[niveau]


def uren_kort(uren):
    """De lesuren per week voor in het kenmerk: "6", "6,5" of "3-4" (een bereik als het per jaar of richting
    verschilt). Leeg als er geen vast aantal is (bv. GO! D/A: volgens de lessentabel van de richting).
    Niet meegeteld: het leerjaar ("5de jaar") en het aantal graaduren."""
    getallen = re.findall(r"(?<![\d,])(\d+(?:,\d+)?)(?![\d,]|de\b| graaduren)", uren or "")
    waarden = sorted({float(g.replace(",", ".")) for g in getallen})
    if not waarden:
        return ""
    tekst = [f"{w:g}".replace(".", ",") for w in (waarden[0], waarden[-1])]
    return tekst[0] if tekst[0] == tekst[1] else f"{tekst[0]}-{tekst[1]}"


def gegevens(pakket, map_, jaar, richtingen=None, uren=None):
    """De regels van voorkant-gegevens.tex voor één handboek. richtingen en uren: die van een andere koepel dan KOV."""
    delen = map_.split("/")
    titel = delen[-1]
    rubriek = delen[0] if len(delen) > 1 else ""
    omslagtitel, grootte = TITELS.get(titel, (titel, 64))
    p = ALLE_PAKKETTEN[pakket]
    tweede = graad(pakket) == 2
    tekst = f"{graad(pakket)}de graad {FINALITEITEN[finaliteit(pakket)]}"
    tekst = f"{tekst}, {jaar}" if jaar else tekst
    kleur = [f"\\def\\omslagaccent{{{KLEUR_2[0]}}}", f"\\def\\omslagfel{{{KLEUR_2[1]}}}"] if tweede else []
    _, zijden, vorm, kkleur = kenmerk(pakket)
    kort = uren_kort(p["uren"] if uren is None else uren)  # de uren van de koepel van deze voorkant
    # lettergrootte: een driehoek heeft minder plaats, en een bereik ("3-4", "2,5-3") is breder
    kgrootte = (19 if zijden == 3 else 24) * (1 if len(kort) <= 1 else .75 if len(kort) <= 3 else .58)
    kleur.append(f"\\def\\omslagkenmerk{{{{{kort}}}{{{zijden}}}{{{vorm}}}{{{kkleur}}}{{{kgrootte:.1f}}}}}")
    return "\n".join(kleur + [
        f"\\def\\cursusrubriek{{{rubriek}}}",
        f"\\def\\cursusrichtingen{{{p['richtingen'] if richtingen is None else richtingen}}}",
        f"\\def\\cursusgraad{{{tekst}}}",
        f"\\def\\cursusuren{{{p['uren'] if uren is None else uren}}}",
        f"\\def\\omslagtitel{{{omslagtitel}}}",
        f"\\def\\omslagtitelgrootte{{{grootte}}}",
    ]) + "\n"


def cursusmap(pakket, map_):
    """De map van een cursus: Handboeken/<graad>/<pakket>/<rubriek>/<cursus>."""
    return HANDBOEKEN / (MAP_2 if graad(pakket) == 2 else MAP_3) / pakket / Path(map_)


# Eén plaats voor de graad, het kenmerk en de sleutel van een handboek: maak-voortgang.py en de leerkrachtensite
# (Website/leerkrachten/maak.py) gebruiken ze. De 3de graad houdt de sleutels van voor de 2de graad er was
# ("4/Analyse/Integralen"), zodat de feedback op de site bij het juiste boek blijft; de 2de graad krijgt "2g5/...".
PAKKETTEN_3_ALLE = {**PAKKETTEN, **PAKKETTEN_DA3}
PAKKETTEN_2_ALLE = {**PAKKETTEN_2, **PAKKETTEN_DA2, **PAKKETTEN_A2}
ALLE_PAKKETTEN = {**PAKKETTEN_3_ALLE, **PAKKETTEN_2_ALLE}
ALLE_HANDBOEKEN = HANDBOEKEN_LIJST + HANDBOEKEN_DA3 + HANDBOEKEN_2 + HANDBOEKEN_DA2 + HANDBOEKEN_A2


def graad(pakket):
    return 2 if pakket in PAKKETTEN_2_ALLE else 3


def finaliteit(pakket):
    """"D" (doorstroom), "DA" (dubbele finaliteit) of "A" (arbeidsmarkt)."""
    return ALLE_PAKKETTEN[pakket].get("finaliteit", "D")


def pakket_naam(pakket):
    """De naam van het leerplan tussen haakjes, zoals \\pakketnaam: Basis, B+S, D/A Basis, A."""
    return pakket.rsplit("(", 1)[1].rstrip(")").replace("D-A", "D/A")


def pakket_id(pakket):
    nummer = pakket.split()[0]
    return f"2g{nummer}" if graad(pakket) == 2 else nummer


def sleutel(pakket, map_):
    return f"{pakket_id(pakket)}/{map_}"


# Het voorgestelde leerjaar, voor de website (een richtingaangever: de school kiest). Niet op de KOV-voorkant,
# behalve bij pakket 4 (zie HANDBOEKEN_LIJST). 3de graad: zoals in pakket 4; 2de graad: Handboeken/2de graad/README.md.
JAAR_VOORSTEL = {
    3: {"Analyse/Algemene functies": "5de jaar", "Analyse/Exponentiële en logaritmische functies": "5de jaar",
        "Analyse/Goniometrische functies": "5de jaar", "Analyse/Rationale functies": "5de jaar",
        "Analyse/Afgeleiden": "5de jaar", "Analyse/Limieten en afgeleiden": "5de jaar", "Analyse/Integralen": "6de jaar",
        "Analyse/Differentiaalvergelijkingen": "6de jaar", "Analyse/Reeksen": "6de jaar", "Analyse/Numerieke methodes": "6de jaar",
        "Algebra/Matrices": "5de jaar", "Algebra/Complexe getallen": "5de jaar", "Algebra/Groepen": "6de jaar",
        "Meetkunde/Ruimtemeetkunde": "6de jaar", "Meetkunde/Kegelsneden": "6de jaar", "Algebra/Getaltheorie": "6de jaar", "Algebra/Lineair programmeren": "6de jaar", "Algebra/Vectorruimten": "6de jaar", "Algebra/Financiële algebra": "6de jaar", "Discrete wiskunde/Rijen": "6de jaar",
        "Discrete wiskunde/Telproblemen": "6de jaar", "Discrete wiskunde/Logica en bewijzen": "6de jaar", "Discrete wiskunde/Predicatenlogica": "6de jaar", "Discrete wiskunde/Iteraties en fractalen": "6de jaar",
        "Data en onzekerheid/Kansrekenen": "6de jaar", "Data en onzekerheid/Statistiek": "6de jaar",
        "Data en onzekerheid/Kansverdelingen": "6de jaar", "Data en onzekerheid/Lineaire regressie": "6de jaar", "Data en onzekerheid/Multivariate statistiek": "6de jaar"},
    2: {m: ("3de jaar" if i < 9 else "4de jaar") for i, (m, _, _) in enumerate(MODULES_2)},
}
# Per finaliteit een eigen voorstel waar het verschilt. 2de graad D/A heeft geen tweedegraadsfuncties in het 4de jaar:
# Stelsels en Driehoeksmeting schuiven daarom naar het 4de jaar.
JAAR_VOORSTEL_FIN = {
    (3, "DA"): {m: j for m, _, _, j in MODULES_DA3},
    (2, "DA"): {**{m: "3de jaar" for m in MODULES_DA2["7"]},
                **{m: "4de jaar" for m in ["Algebra/Stelsels", "Meetkunde/Driehoeksmeting", "Meetkunde/Ruimtemeetkunde",
                                           "Meetkunde/Vectoren", "Discrete wiskunde/Telproblemen"]}},
    (2, "A"): {},
}


def jaar_voorstel(pakket, map_):
    fin = (graad(pakket), finaliteit(pakket))
    return (JAAR_VOORSTEL_FIN[fin] if fin in JAAR_VOORSTEL_FIN else JAAR_VOORSTEL[graad(pakket)]).get(map_)


# --- koepels ---------------------------------------------------------------------------------------------------
# Welke richting in welke koepel welke handboeken volgt: Handboeken/koepels.yaml (uitleg in Ontwerp/koepels.md).
# De KOV-voorkant blijft zoals hierboven (richtingen en uren per pakket); een andere koepel krijgt een eigen voorkant
# met dezelfde inhoud, met de richtingen en uren van die koepel.
KOEPELS_YAML = HANDBOEKEN / "koepels.yaml"
KOEPEL_NAMEN = {"KOV": "Katholiek Onderwijs Vlaanderen", "GO": "GO!", "POV": "Provinciaal Onderwijs Vlaanderen"}


def _uren_tekst(graaduren):
    per_week = f"{graaduren / 2:g}".replace(".", ",")
    return f"{per_week} uur per week"


def koepeltabel():
    """{graad: {koepel: {richting: gegevens}}} met elke verwijzing uit koepels.yaml omgezet naar een sleutel.
    Gegevens: profiel, decreet, leerplan, pakket (id), uren, verplicht, keuze, uitbreiding, nieuw (nog te maken),
    opmerking. Een item in een lijst: {"sleutel": ..., "noot": ...} of {"tekst": ...}."""
    import yaml
    cfg = yaml.safe_load(KOEPELS_YAML.read_text(encoding="utf-8"))
    alle = [(p, m) for p, m, _, _ in ALLE_HANDBOEKEN]
    sleutels = [sleutel(p, m) for p, m in alle]
    per_pakket = {}
    for p, m in alle:
        per_pakket.setdefault(pakket_id(p), []).append(sleutel(p, m))
    uren_kov = {pakket_id(p): v["uren"].replace("\\&", "&") for p, v in ALLE_PAKKETTEN.items()}

    def item(ref):
        ref = str(ref)
        if ref.startswith("nieuw:"):
            return {"nieuw": ref[6:]}
        treffers = [s for s in sleutels if s in ref]
        if not treffers:
            return {"tekst": ref}
        s = max(treffers, key=len)
        voor, _, na = ref.partition(s)
        noot = " ".join(x.strip(" ,:()") for x in (voor, na) if x.strip(" ,:()"))
        return {"sleutel": s, "noot": noot} if noot else {"sleutel": s}

    uit = {}
    for g, gdata in cfg["graden"].items():
        for prof_naam, prof in gdata["profielen"].items():
            for k in ("KOV", "GO", "POV"):
                e = prof.get(k) or {}
                rec = {"profiel": prof_naam, "finaliteit": prof.get("finaliteit", "D"), "label": prof.get("label"),
                       "decreet": prof.get("decreet", []),
                       "leerplan": e.get("leerplan"), "pakket": e.get("pakket"), "verplicht": [], "keuze": [],
                       "uitbreiding": [], "nieuw": [],
                       "opmerking": " ".join(x for x in (e.get("opmerking"), prof.get("opmerking")) if x) or None}
                if k == "KOV" and e.get("pakket"):
                    rec["uren"] = uren_kov.get(str(e["pakket"]))
                elif e.get("graaduren"):
                    rec["uren"] = f"{_uren_tekst(e['graaduren'])} ({e['graaduren']} graaduren, indicatieve lessentabel)"
                elif e.get("uren"):
                    rec["uren"] = e["uren"]
                niet = {item(r).get("sleutel") for r in e.get("niet", [])}
                noten = {}
                extra = []
                for r in e.get("extra", []):
                    i = item(r)
                    if "nieuw" in i:
                        rec["nieuw"].append(i["nieuw"])
                    elif i.get("sleutel") in per_pakket.get(str(e.get("pakket")), []):
                        noten[i["sleutel"]] = i.get("noot")  # al in het pakket: alleen een noot (bv. een hoofdstuk)
                    else:
                        extra.append(i)
                if e.get("pakket"):
                    for s in per_pakket[str(e["pakket"])]:
                        if s not in niet:
                            rec["verplicht"].append({"sleutel": s, **({"noot": noten[s]} if noten.get(s) else {})})
                rec["verplicht"] += extra
                rec["keuze"] = [item(r) for r in e.get("keuze", [])]
                # een hele cursus als keuze (bv. Matrices in KOV Basis) is niet verplicht; een hoofdstuk als keuze wel
                hele = {i["sleutel"] for i in rec["keuze"] if "sleutel" in i and not i.get("noot", "").startswith("hoofdstuk")}
                rec["verplicht"] = [i for i in rec["verplicht"] if i.get("sleutel") not in hele]
                rec["uitbreiding"] = [item(r) for r in e.get("uitbreiding", [])]
                for r in e.get("niet", []):
                    rec["uitbreiding"].append({**item(r), "noot": "geen leerstof voor deze koepel"})
                for i in rec["uitbreiding"]:
                    if "nieuw" in i:
                        rec["nieuw"].append(i["nieuw"])
                rec["uitbreiding"] = [i for i in rec["uitbreiding"] if "nieuw" not in i]
                for r in prof["richtingen"]:
                    uit.setdefault(int(g), {}).setdefault(k, {})[r] = rec
    return uit


def richtingen_tekst(namen_per_profiel, alle_profielen, labels):
    """De richtingen voor op een voorkant, kort genoeg voor drie regels. namen_per_profiel: {profiel: [namen]} met
    de richtingen die het handboek gebruiken; alle_profielen: {profiel: [namen]} van de graad. Is een profiel volledig
    en heeft het meer dan drie richtingen, dan komt de korte naam in de plaats. Lukt het korter als 'alle richtingen
    behalve ...', dan dat."""
    def deel(prof, namen):
        return [labels[prof]] if len(namen) > 3 and set(namen) == set(alle_profielen[prof]) and labels.get(prof) else namen
    erin = [x for p, n in namen_per_profiel.items() for x in deel(p, n)]
    niet = [p for p in alle_profielen if p not in namen_per_profiel]
    if not niet:
        return "alle richtingen"
    tekst = ", ".join(erin)
    if all(set(namen_per_profiel[p]) == set(alle_profielen[p]) for p in namen_per_profiel):
        behalve = "alle richtingen behalve " + ", ".join(x for p in niet for x in deel(p, alle_profielen[p]))
        if len(behalve) < len(tekst):
            return behalve
    return tekst


def koepel_voorkant(koepel):
    """{sleutel: (richtingen, uren)} voor de voorkant van een koepel, uit de verplichte handboeken per richting."""
    import yaml
    cfg = yaml.safe_load(KOEPELS_YAML.read_text(encoding="utf-8"))
    tabel = koepeltabel()
    uit = {}
    # per graad en finaliteit: "alle richtingen" op een voorkant betekent alle richtingen van die finaliteit
    groepen = [(g, fin, {p: v for p, v in gdata["profielen"].items() if v.get("finaliteit", "D") == fin})
               for g, gdata in cfg["graden"].items()
               for fin in dict.fromkeys(v.get("finaliteit", "D") for v in gdata["profielen"].values())]
    for g, fin, profielen in groepen:
        alle = {p: v["richtingen"] for p, v in profielen.items()}
        labels = {p: v.get("label") for p, v in profielen.items()}
        per_boek = {}
        for r, rec in tabel[int(g)].get(koepel, {}).items():
            if rec["profiel"] not in profielen:
                continue
            for i in rec["verplicht"]:
                if "sleutel" in i:
                    per_boek.setdefault(i["sleutel"], {}).setdefault(rec["profiel"], []).append(r)
        for s, pp in per_boek.items():
            ordered = {p: pp[p] for p in profielen if p in pp}
            uren = sorted({(profielen[p].get(koepel) or {}).get("graaduren") for p in ordered} - {None})
            tekst_uren = {(profielen[p].get(koepel) or {}).get("uren") for p in ordered} - {None}
            if not uren:
                u = next(iter(tekst_uren), "")
            elif len(uren) == 1:
                u = _uren_tekst(uren[0])
            else:
                u = f"{_uren_tekst(uren[0]).split(' ')[0]} tot {_uren_tekst(uren[-1])}"
            tekst = richtingen_tekst(ordered, alle, labels)
            uit[s] = (tekst[0].upper() + tekst[1:], u)
    return uit


def met_motief():
    """Alle handboeken van beide graden waarvan het motief al bestaat; meldt de andere."""
    zonder = sorted({n for _, _, n, _ in ALLE_HANDBOEKEN if not (MAP / "motieven" / f"{n}.tex").exists()})
    if zonder:
        print(f"nog geen motief (en dus geen voorkant) voor {', '.join(zonder)}")
    return [h for h in ALLE_HANDBOEKEN if (MAP / "motieven" / f"{h[2]}.tex").exists()]


def bladwijzer(pakket, map_):
    """De titel van de bladwijzer in alle-voorkanten.pdf (de leerkrachtensite zoekt de voorkant op deze titel)."""
    vooraf = "2de graad, " if graad(pakket) == 2 else ""
    return f"{vooraf}Pakket {pakket.split()[0]} - {map_.split('/')[-1]}"


# De ondertitel van elke editie (zoals in Opmaak/boek.tex), voor de voorkanten per koepel op de website.
ONDERTITELS = {"handboek": "Handboek", "leerkracht": "Leerkrachtenversie", "zelfstudie": "Zelfstudie voor thuis",
               "oplossingen": "Numerieke oplossingen", "uitwerkingen": "Uitgewerkte oplossingen"}


def bouw_alles(koepel="KOV", lijst=None, naam=None, zonder_kunst=False):
    """Alle voorkanten in één PDF, een pagina per handboek. KOV: alle-voorkanten.pdf, zoals altijd.
    Een andere koepel: alle-voorkanten-<koepel>.pdf, met de richtingen en uren van die koepel. lijst: eigen
    pagina's als (pakket, map, motief, jaar, editie), voor de voorkanten per editie op de website.
    zonder_kunst: zonder het kunstwerk, als laag die de website over de voorkant van de PDF legt (klein bestand)."""
    andere = koepel_voorkant(koepel) if koepel != "KOV" else {}
    if lijst is None:
        lijst = [(p, m, n, j, "handboek") for p, m, n, j in met_motief()]
    naam = naam or ("alle-voorkanten" if koepel == "KOV" else f"alle-voorkanten-{koepel.lower()}")
    pagina = []
    for i, (pakket, map_, motief, jaar, editie) in enumerate(lijst):
        if koepel == "KOV":
            g = gegevens(pakket, map_, jaar)
        else:
            richtingen, uren = andere.get(sleutel(pakket, map_), ("niet in de leerplannen van deze koepel", ""))
            g = gegevens(pakket, map_, None, richtingen, uren)
        pagina.append(
            "\\begingroup\n"
            f"\\input{{motieven/{motief}}}\n"
            f"{g}"
            f"\\renewcommand{{\\cursusondertitel}}{{{ONDERTITELS[editie]}}}\n"
            f"\\pdfbookmark[0]{{{bladwijzer(pakket, map_)}}}{{v{i}}}\n"
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
""" + ("\\def\\omslagzonderkunst{}\n" if zonder_kunst else "") + r"""\input{voorkant}
\usepackage[hyperfootnotes=false]{hyperref}
\hypersetup{hidelinks,pdftitle={Voorkanten van de handboeken},pdflang={nl}}
\begin{document}
""" + "".join(pagina) + "\\end{document}\n"
    (MAP / f"{naam}.tex").write_text(tex, encoding="utf-8")
    env = dict(os.environ)
    env["PATH"] = str(TEXLIVE) + os.pathsep + env["PATH"]
    for _ in range(2):  # twee rondes: de voorkant staat op een vaste plaats op de pagina (remember picture)
        r = subprocess.run(["pdflatex", "-interaction=nonstopmode", "-halt-on-error", f"{naam}.tex"],
                           cwd=MAP, env=env, capture_output=True, text=True, encoding="latin-1")
        if r.returncode:
            print(r.stdout[-3000:])
            raise SystemExit("pdflatex is mislukt")
    print(f"{naam}.pdf:", len(lijst), "voorkanten")
    return MAP / f"{naam}.pdf"


def zet_in_cursussen():
    """Bestanden naar de cursussen die al een handboek.tex hebben."""
    for pakket, map_, motief, jaar in ALLE_HANDBOEKEN:
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
    bouw_alles("GO")
    zet_in_cursussen()
