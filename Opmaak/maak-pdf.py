"""Bouwt een cursus. Uitvoeren vanuit de hoofdmap van de repo, in PowerShell:

    py -3.13 -P Opmaak/maak-pdf.py <cursus>                  alles: handboek, oplossingen, leerkracht, zelfstudie
    py -3.13 -P Opmaak/maak-pdf.py <cursus> --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
    py -3.13 -P Opmaak/maak-pdf.py <cursus> --hoofdstuk 2 --versie leerkracht

<cursus> is <pakketnummer>/<rubriek>/<cursus>, bijvoorbeeld 4/Analyse/Integralen, of het pad naar de map
van de cursus. Zonder <cursus> bouwt het script de map waar je staat. De bestanden verschijnen in de map van de cursus.

Eén bron per cursus: de hoofdstukken, oefeningen, notatie.tex en afbeeldingen/ staan één keer in
Handboeken/<graad>/cursussen/<cursus>/, voor alle pakketten. De map van een pakket heeft alleen handboek.tex
(welke hoofdstukken), de voorkant, de README en de PDF's. Het pakket is het nummer vooraan de map van het
pakket. Dit script houdt van de bron alleen wat voor dat pakket is (zie pakketten.py) en schrijft het in gen/,
samen met notatie.tex en afbeeldingen/. Heeft een cursus (nog) geen map in cursussen/, dan is de bron de map zelf.

Twee dingen maken het sneller, zonder dat er iets aan de bronbestanden verandert.

Grafieken: TikZ rekent elke kromme in LaTeX uit, en dat is traag. Daarom zet dit script de
grafieken van een hoofdstuk in een eigen PDF in figuren-cache/ (een pagina per figuur). De naam
bevat een hash van de figuren, notatie.tex en Opmaak/opmaak.tex: alleen als daarin iets verandert,
wordt die PDF opnieuw gemaakt. In gen/ komen kopieën van de hoofdstukken waarin elke figuur
vervangen is door die pagina. Pas de hoofdstukken dus aan in hoofdstukken/, nooit in gen/.

Rondes: LaTeX draait opnieuw tot het .aux-bestand niet meer verandert. Dat blijft bewaard, zodat
de volgende bouw minder rondes nodig heeft.

Oefeningen: die staan in oefeningen/*.yaml (zie oefeningenbank.py). Een hoofdstuk bevat \\oef{id},
en dit script vult daar de LaTeX in. LaTeX leest dus altijd gen/: draai dit script minstens een
keer voor je `latexmk -pdf handboek.tex` gebruikt, en opnieuw na elke wijziging.
"""
import argparse
import hashlib
import os
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

OPMAAK = Path(__file__).resolve().parent
HOOFD = OPMAAK.parent
sys.path.insert(0, str(OPMAAK))  # py -P zoekt niet in de map van het script
import oefeningenbank
import pakketten

TEXLIVE = Path(r"C:\texlive\2024\bin\windows")  # wordt aan het PATH toegevoegd als pdflatex ontbreekt
# De map van de cursus, de bron en het pakket: zet_cursus() vult dit in
MAP = CACHE = GEN = BRON = PAKKET = NAAM = None
HOOFDMAP = "../../../../"
HOOFDSTUK = re.compile(r"\\hoofdstuk\{(\d+)\}\{([^}]+)\}")
FIGUUR = re.compile(r"\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}", re.S)
TUSSENBESTANDEN = (".aux", ".log", ".out", ".toc", ".fls", ".fdb_latexmk", ".synctex.gz")
OPLOSSINGEN = [("numeriek", "numerieke oplossingen"), ("uitgewerkt", "uitgewerkte oplossingen")]

VOORAF = r"""\def\hoofdmap{@@HOOFDMAP@@}\documentclass[11pt,fleqn,oneside,openany]{book}
\newcommand{\cursustitel}{Figuren}
\newcommand{\cursusondertitel}{}
\newcommand{\cursusauteur}{}
\newcommand{\schooljaar}{}
\input{\hoofdmap Opmaak/opmaak}
\input{gen/notatie}
% Elke figuur op een eigen pagina, met een marge van 3bp: lijnen mogen iets buiten de figuur steken.
\hoffset=-1in \voffset=-1in
\newcommand{\figuurpagina}{%
  \pdfpagewidth=\dimexpr\wd0+6bp\relax
  \pdfpageheight=\dimexpr\ht0+\dp0+6bp\relax
  \shipout\vbox{\kern3bp\hbox{\kern3bp\box0\kern3bp}\kern3bp}}
\begin{document}
"""


def pdflatex(job, invoer):
    """Eén ronde. Stopt het script bij een fout en toont de eerste foutregels."""
    r = subprocess.run(["pdflatex", "-interaction=nonstopmode", "-halt-on-error", f"-jobname={job}", invoer],
                       cwd=MAP, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True,
                       encoding="latin-1", errors="replace")
    if r.returncode != 0:
        fouten = [regel for regel in r.stdout.splitlines() if regel.startswith("!")]
        print(r.stdout[-2500:])
        sys.exit(f"Bouwen van {job} mislukt: {fouten[:3]}")


def tot_stabiel(job, invoer, maximum=5):
    """Herhaalt tot het .aux-bestand niet meer verandert (minstens één ronde)."""
    aux = MAP / f"{job}.aux"
    for ronde in range(1, maximum + 1):
        voor = aux.read_bytes() if aux.exists() else None
        pdflatex(job, invoer)
        if voor is not None and aux.read_bytes() == voor:
            return ronde
    return maximum


def kopieer_bron():
    """Zet notatie.tex (voor dit pakket) en afbeeldingen/ van de bron in gen/."""
    notatie = pakketten.kies((BRON / "notatie.tex").read_text(encoding="utf-8"), PAKKET, NAAM)
    if not (GEN / "notatie.tex").exists() or (GEN / "notatie.tex").read_text(encoding="utf-8") != notatie:
        (GEN / "notatie.tex").write_text(notatie, encoding="utf-8")
    bron, doel = BRON / "afbeeldingen", GEN / "afbeeldingen"
    gezien = set()
    for f in bron.rglob("*") if bron.exists() else []:
        if f.is_file():
            kopie = doel / f.relative_to(bron)
            gezien.add(kopie)
            if not kopie.exists() or kopie.read_bytes() != f.read_bytes():
                kopie.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(f, kopie)
    for f in doel.rglob("*") if doel.exists() else []:
        if f.is_file() and f not in gezien:
            f.unlink()
    return notatie


def maak_figuren():
    """Zorgt dat elk hoofdstuk zijn figuren-PDF heeft, en schrijft de kopieën in gen/."""
    CACHE.mkdir(exist_ok=True)
    GEN.mkdir(exist_ok=True)
    notatie = kopieer_bron()
    basis = hashlib.sha1(notatie.encode("utf-8") + (OPMAAK / "opmaak.tex").read_bytes()).digest()
    bank = oefeningenbank.laad(BRON, PAKKET)
    gebruikt = set()
    # alleen de hoofdstukken die handboek.tex van dit pakket kiest, met het nummer dat ze daar krijgen
    # (een pakket mag een hoofdstuk anders nummeren: Matrices, pakket 1, \hoofdstuk{2}{04-matrixmodellen})
    for nummer, naam in HOOFDSTUK.findall((MAP / "handboek.tex").read_text(encoding="utf-8")):
        nummer, bron = int(nummer), BRON / "hoofdstukken" / f"{naam}.tex"
        tekst = pakketten.kies(bron.read_text(encoding="utf-8"), PAKKET, NAAM)
        tekst = oefeningenbank.vul_in(tekst, bank, gebruikt)
        figuren = FIGUUR.findall(tekst)
        code = hashlib.sha1(basis + "\0".join(figuren).encode("utf-8")).hexdigest()[:12]
        naam = f"h{nummer}-{code}"
        if figuren and not (CACHE / f"{naam}.pdf").exists():  # zonder figuren geen PDF (pdflatex maakt er dan geen)
            print(f"  figuren van hoofdstuk {nummer}: {len(figuren)} opnieuw maken")
            bouw = MAP / f"_figuren-{nummer}.tex"
            inhoud = VOORAF.replace("@@HOOFDMAP@@", HOOFDMAP) + rf"\colorlet{{accent}}{{hd{nummer}}}\colorlet{{fel}}{{hf{nummer}}}" + "\n"
            inhoud += "".join(rf"\setbox0\hbox{{{f}}}\figuurpagina" + "\n" for f in figuren)
            bouw.write_text(inhoud + "\\end{document}\n", encoding="utf-8")
            pdflatex(bouw.stem, bouw.name)
            for oud in CACHE.glob(f"h{nummer}-*.pdf"):
                oud.unlink()
            shutil.move(MAP / f"{bouw.stem}.pdf", CACHE / f"{naam}.pdf")
            bouw.unlink()
            for ext in TUSSENBESTANDEN:
                (MAP / f"{bouw.stem}{ext}").unlink(missing_ok=True)
        teller = iter(range(1, len(figuren) + 1))
        (GEN / bron.name).write_text(
            FIGUUR.sub(lambda _: rf"\grafiekbestand{{{naam}}}{{{next(teller)}}}", tekst), encoding="utf-8")


def bouw(job, hoofd, extra=""):
    begin = time.time()
    rondes = tot_stabiel(job, rf"\def\hoofdmap{{{HOOFDMAP}}}\def\hoofdstukmap{{gen}}{extra}\input{{{hoofd}}}")
    print(f"  {job}.pdf: {rondes} rondes, {time.time() - begin:.0f} s")


def zet_cursus(naam):
    """Zoekt de map van de cursus en zet de paden die ervan afhangen."""
    global MAP, CACHE, GEN, HOOFDMAP, BRON, PAKKET, NAAM
    pad = Path(naam) if naam else Path.cwd()
    if naam and not (pad / "handboek.tex").exists():
        naam_ = naam.replace("\\", "/")
        basis = HOOFD / "Handboeken" / "3de graad"  # standaard de 3de graad
        for graad in ("2de graad", "3de graad"):  # of met de graad ervoor: 2de graad/<pakketnummer>/...
            if naam_.startswith(graad + "/"):
                basis, naam_ = HOOFD / "Handboeken" / graad, naam_.split("/", 1)[1]
        nummer, _, rest = naam_.partition("/")
        gevonden = list(basis.glob(f"{nummer} */{rest}")) if rest else []
        pad = gevonden[0] if len(gevonden) == 1 else pad
    if not (pad / "handboek.tex").exists():
        sys.exit(f"Geen cursus gevonden voor {naam or pad}: geef <pakketnummer>/<rubriek>/<cursus> "
                 "(2de graad: 2de graad/<pakketnummer>/<rubriek>/<cursus>), of het pad naar de map.")
    MAP = pad.resolve()
    CACHE, GEN = MAP / "figuren-cache", MAP / "gen"
    BRON, PAKKET, NAAM = MAP, None, None
    try:
        graad, pakketmap = MAP.relative_to(HOOFD / "Handboeken").parts[:2]
    except ValueError:  # een map buiten Handboeken/: de bron is de map zelf
        graad = pakketmap = None
    if pakketmap and pakketmap.split(" ")[0].isdigit():
        PAKKET, NAAM = int(pakketmap.split(" ")[0]), pakketten.naam_van(pakketmap)
        gedeeld = HOOFD / "Handboeken" / graad / "cursussen" / MAP.name
        if (gedeeld / "hoofdstukken").exists():
            BRON = gedeeld
    HOOFDMAP = os.path.relpath(HOOFD, MAP).replace("\\", "/") + "/"


def main():
    parser = argparse.ArgumentParser(description="Bouwt een cursus.")
    parser.add_argument("cursus", nargs="?", help="<pakketnummer>/<rubriek>/<cursus> of het pad naar de map; standaard de huidige map")
    parser.add_argument("--hoofdstuk", type=int, help="bouw alleen dit hoofdstuk, in snel-h<nummer>.pdf")
    parser.add_argument("--versie", choices=["handboek", "leerkracht", "zelfstudie"], default="handboek")
    args = parser.parse_args()
    zet_cursus(args.cursus)

    if not shutil.which("pdflatex"):
        os.environ["PATH"] = str(TEXLIVE) + os.pathsep + os.environ["PATH"]
        if not shutil.which("pdflatex"):
            sys.exit("pdflatex niet gevonden: zet TeX Live in het PATH")

    begin = time.time()
    maak_figuren()
    if args.hoofdstuk:
        bouw(f"snel-h{args.hoofdstuk}", args.versie, rf"\def\enkelhoofdstuk{{{args.hoofdstuk}}}")
    else:
        bouw("handboek", "handboek")
        for uitvoer, omschrijving in OPLOSSINGEN:
            job = f"handboek - {omschrijving}"
            bouw(job, "handboek", rf"\def\uitvoer{{{uitvoer}}}")
            for ext in TUSSENBESTANDEN:
                (MAP / f"{job}{ext}").unlink(missing_ok=True)
        bouw("leerkracht", "leerkracht")
        bouw("zelfstudie", "zelfstudie")
    print(f"klaar in {time.time() - begin:.0f} s")


if __name__ == "__main__":
    main()
