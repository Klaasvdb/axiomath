"""De oefeningenbank: leest oefeningen/*.yaml en maakt er LaTeX van.

Een hoofdstuk bevat alleen \\oef{id} op een eigen regel, op de plaats waar de oefening in het boek
komt. maak-pdf.py vervangt die regel door de LaTeX uit de bank. Velden van een oefening:

    id          vast en uniek binnen de cursus; verandert nooit, ook niet als de oefening verhuist
    pakketten   de pakketten waarin de oefening staat, bv. [2, 3]; ontbreekt als ze in alle pakketten staat.
                Twee oefeningen mogen hetzelfde id hebben als hun pakketten niet overlappen: zo
                verschilt een oefening per pakket, met hetzelfde id. In een ander pakket valt \\oef{id} weg.
    soort       start, kort, opdracht, koppel of test (informatie voor de website, niet voor LaTeX)
    niveau      1, 2 of 3 (de balkjes); ontbreekt bij Start en bij de korte oefeningen
    thema       onderwerp, alleen zichtbaar in de leerkrachtenversie
    koppel      rubriek en onderwerp van het label naar andere leerstof
    figuur      opties en code van een grafiek rechts van de opgave (metgrafiek)
    prent       naam (en eventueel breedte) van een kleine prent rechts van de opgave (metprent)
    opgave      de tekst vooraan
    lijst       reeks of enumerate, als de oefening deelvragen heeft; kolommen hoort bij reeks
    delen       de deelvragen, elk met opgave en eventueel antwoord en uitwerking
    slot        tekst na de deelvragen
    antwoord    kort antwoord voor de hele oefening, als het niet per deelvraag kan
    antwoord_voor  tekst voor de antwoorden per deelvraag, zoals (telkens +C)
    uitwerking  uitwerking voor de hele oefening, als het niet per deelvraag kan
    latex       noodoplossing: de hele oefening tussen begin en end, als ze niet in dit stramien past
"""
import re
from pathlib import Path

import yaml

OEF = re.compile(r"^\\oef\{([^}]+)\}[ ]*(\n|$)", re.M)
LETTERS = "abcdefghijklmnopqrstuvwxyz"


def laad(cursusmap, pakket=None):
    """Geeft de oefeningen van een cursus, als {id: oefening}.

    Met een pakket alleen de oefeningen van dat pakket; een oefening van een ander pakket staat er
    met de waarde None, zodat vul_in() haar weglaat. Zonder pakket alle oefeningen: dan mag een id
    maar één keer voorkomen.
    """
    bank = {}
    for bestand in sorted((Path(cursusmap) / "oefeningen").glob("*.yaml")):
        for oef in yaml.safe_load(bestand.read_text(encoding="utf-8")) or []:
            hier = pakket is None or "pakketten" not in oef or pakket in oef["pakketten"]
            if bank.get(oef["id"]) is not None and hier:
                raise ValueError(f"oefening {oef['id']} staat twee keer in de bank ({bestand.name})")
            if hier or oef["id"] not in bank:
                bank[oef["id"]] = oef if hier else None
    return bank


def _per_deel(oef, veld, scheiding, voor=""):
    """Voegt de antwoorden of uitwerkingen van de deelvragen samen tot één tekst."""
    stukken = [rf"\textbf{{{LETTERS[i]}.}}~{deel[veld]}" for i, deel in enumerate(oef.get("delen", [])) if veld in deel]
    if not stukken:
        return None
    return (voor + " " if voor else "") + scheiding.join(stukken)


def _opgave(oef):
    regels = []
    begin = (oef.get("thema") is not None and rf"\thema{{{oef['thema']}}}" or "")
    if "koppel" in oef:
        begin += rf"\koppel{{{oef['koppel']['rubriek']}}}{{{oef['koppel']['onderwerp']}}} "
    if begin or oef.get("opgave"):
        regels.append(begin + oef.get("opgave", ""))
    if "lijst" in oef:
        opties = f"[{oef['kolommen']}]" if "kolommen" in oef else ""
        regels.append(rf"\begin{{{oef['lijst']}}}{opties}")
        regels += [rf"  \item {deel['opgave']}" for deel in oef["delen"]]
        regels.append(rf"\end{{{oef['lijst']}}}")
    if "slot" in oef:
        regels.append(oef["slot"])
    return regels


def latex(oef):
    """De LaTeX van één oefening, van begin tot end."""
    niveau = f"[{oef['niveau']}]" if "niveau" in oef else ""
    regels = [rf"\begin{{oefening}}{niveau}\label{{oef:{oef['id']}}}"]
    if "latex" in oef:
        regels.append(oef["latex"])
    else:
        if "figuur" in oef:
            opties = oef["figuur"].get("opties")
            opties = "" if opties is None else f"[{opties}]"
            regels.append(rf"\begin{{metgrafiek}}{opties}{{{oef['figuur']['code']}}}")
        elif "prent" in oef:
            breedte = f"[{oef['prent']['breedte']}]" if "breedte" in oef["prent"] else ""
            regels.append(rf"\begin{{metprent}}{breedte}{{{oef['prent']['naam']}}}")
        regels += _opgave(oef)
        if "figuur" in oef:
            regels.append(r"\end{metgrafiek}")
        elif "prent" in oef:
            regels.append(r"\end{metprent}")
        antwoord = oef.get("antwoord", _per_deel(oef, "antwoord", r" \quad ", oef.get("antwoord_voor", "")))
        # \par en niet \\ tussen de deelvragen: een uitwerking mag op een figuur eindigen (\figuren)
        uitwerking = oef.get("uitwerking", _per_deel(oef, "uitwerking", "\\par\n"))
        if antwoord is not None:
            regels += [r"\begin{solution}", antwoord, r"\end{solution}"]
        if uitwerking is not None:
            regels += [r"\begin{fullsolution}", uitwerking, r"\end{fullsolution}"]
    regels.append(r"\end{oefening}")
    return "\n".join(regels)


def vul_in(tekst, bank, gebruikt=None):
    """Vervangt elke regel \\oef{id} door de LaTeX uit de bank.

    Geef een set mee als gebruikt om te controleren dat geen oefening twee keer in het boek staat:
    dan zou ook het label dubbel staan.
    """
    gebruikt = set() if gebruikt is None else gebruikt

    def vervang(treffer):
        code = treffer.group(1)
        if code not in bank:
            raise KeyError(f"\\oef{{{code}}}: deze oefening staat niet in de bank")
        if bank[code] is None:  # een oefening van een ander pakket: de hele regel valt weg
            return ""
        if code in gebruikt:
            raise ValueError(f"\\oef{{{code}}} staat twee keer in het boek")
        gebruikt.add(code)
        return latex(bank[code]) + treffer.group(2)

    return OEF.sub(vervang, tekst)
