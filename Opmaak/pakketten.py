"""Eén bron voor alle pakketten: houdt van een hoofdstuk alleen wat voor één pakket is.

Een cursus staat één keer in Handboeken/<graad>/cursussen/<cursus>/. Wat maar voor sommige pakketten
geldt, krijgt een voorwaarde met de nummers van die pakketten:

    \\begin{alleenvoor}{1,2}        een blok: de regels ertussen, elk op een eigen regel
    ...
    \\end{alleenvoor}

    \\alleenvoor{4}{tekst}          binnen een regel; de accolades moeten in evenwicht zijn

    \\pakketnaam                    de naam van het pakket, tussen haakjes in de naam van zijn map
                                   (3de graad: Basis, B+S, B+S', B+S''), bv. \\lkr{Leerplan \\pakketnaam: LPD ...}

maak-pdf.py past dit toe vóór de oefeningen en de figuren, en schrijft het resultaat in gen/. LaTeX
ziet \\alleenvoor dus nooit. Een oefening die maar in sommige pakketten staat, krijgt in de YAML een
veld pakketten: (zie oefeningenbank.py).
"""
import re

PAKKETNAAM = re.compile(r"\\pakketnaam(?![a-zA-Z])")
BEGIN = re.compile(r"^[ \t]*\\begin\{alleenvoor\}\{([\d, ]+)\}[ \t]*\n?", re.M)
EINDE = re.compile(r"^[ \t]*\\end\{alleenvoor\}[ \t]*\n?", re.M)
INLINE = re.compile(r"\\alleenvoor\{([\d, ]+)\}\{")


def lijst(tekst):
    """'1, 2' wordt {1, 2}."""
    return {int(n) for n in tekst.replace(" ", "").split(",") if n}


def _blokken(tekst, pakket):
    uit, stapel, pos = [], [], 0
    merkers = sorted([(m.start(), m.end(), m.group(1)) for m in BEGIN.finditer(tekst)] +
                     [(m.start(), m.end(), None) for m in EINDE.finditer(tekst)])
    for begin, einde, nummers in merkers:
        if all(stapel):
            uit.append(tekst[pos:begin])
        if nummers is None:
            if not stapel:
                raise ValueError(r"\end{alleenvoor} zonder \begin{alleenvoor}")
            stapel.pop()
        else:
            stapel.append(pakket in lijst(nummers))
        pos = einde
    if stapel:
        raise ValueError(r"\begin{alleenvoor} zonder \end{alleenvoor}")
    uit.append(tekst[pos:])
    return "".join(uit)


def _sluit(tekst, open_):
    """De positie van de accolade die de groep sluit die op open_ begint (na de openende accolade)."""
    diepte, i = 1, open_
    while i < len(tekst):
        c = tekst[i]
        if c == "\\":
            i += 2
            continue
        if c == "{":
            diepte += 1
        elif c == "}":
            diepte -= 1
            if diepte == 0:
                return i
        i += 1
    raise ValueError(r"\alleenvoor{...}{ zonder sluitende accolade")


def _inline(tekst, pakket):
    while (m := INLINE.search(tekst)):
        sluit = _sluit(tekst, m.end())
        binnen = _inline(tekst[m.end():sluit], pakket) if pakket in lijst(m.group(1)) else ""
        tekst = tekst[:m.start()] + binnen + tekst[sluit + 1:]
    return tekst


def naam_van(pakketmap):
    """'4 Economie-, ... (B+S'')' wordt "B+S''"; None zonder haakjes."""
    m = re.search(r"\(([^()]*)\)\s*$", pakketmap)
    return m.group(1) if m else None


def kies(tekst, pakket, naam=None):
    """De tekst zoals pakket ze ziet. Zonder pakket (None) blijft de tekst ongewijzigd."""
    if pakket is None:
        return tekst
    tekst = _inline(_blokken(tekst, pakket), pakket)
    return PAKKETNAAM.sub(lambda _: naam, tekst) if naam else tekst
