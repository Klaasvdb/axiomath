"""Maak het weblettertype voor formules op de sites, uit dezelfde TeX-lettertypes als de handboeken.

De handboeken zetten formules met Source Sans en newtxsf:
- letters (cursief) uit zsfmi-reg (newtxsf),
- cijfers en = uit zsfmia-reg (newtxsf),
- + − · × ( ) ≤ ≥ ∞ √ uit txsys (newtx), het integraalteken uit txexs (newtx).
Dit script neemt die glyphs over in twee woff2-bestanden met de familienaam "Axiomath Wiskunde":
- axiomath-wiskunde.woff2 (normaal): cijfers en symbolen. Zonder letters, zodat bv. "d" in "dx" uit Source Sans komt,
  zoals in de handboeken.
- axiomath-wiskunde-cursief.woff2 (cursief): de letters en Griekse letters, voor veranderlijken.

Gebruik: python Website/maak-wiskundefont.py (TeX Live met newtx en newtxsf, en fonttools en brotli).
De bestanden komen in Website/assets/fonts/; Website/leerkrachten/maak.py kopieert ze naar de leerkrachtensite.
Licentie: newtxsf valt onder de SIL OFL 1.1, newtx onder de LPPL 1.3. Zie assets/fonts/LICENSE.md.
"""
import subprocess
from pathlib import Path

from fontTools.agl import toUnicode
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.t2CharStringPen import T2CharStringPen
from fontTools.pens.transformPen import TransformPen
from fontTools.t1Lib import T1Font

UIT = Path(__file__).resolve().parent / "assets" / "fonts"
FAMILIE = "Axiomath Wiskunde"


def t1(naam):
    pad = subprocess.run(["kpsewhich", naam + ".pfb"], capture_output=True, text=True, check=True).stdout.strip()
    f = T1Font(pad)
    f.parse()
    return f.getGlyphSet()


def bouw(glyphs, bestand, stijl):
    """glyphs: lijst van (unicode, glyphset, naam in de glyphset, verschuiving omhoog)."""
    namen, cmap, breedtes, tekens = [".notdef"], {}, {".notdef": 500}, {}
    leeg = T2CharStringPen(500, None)
    tekens[".notdef"] = leeg.getCharString()
    for code, gs, bron, omhoog in glyphs:
        naam = f"u{code:04X}"
        g = gs[bron]
        opname = RecordingPen()
        g.draw(opname)  # na het tekenen kent een Type 1-glyph zijn breedte
        pen = T2CharStringPen(round(g.width), None)
        opname.replay(TransformPen(pen, (1, 0, 0, 1, 0, omhoog)))
        tekens[naam] = pen.getCharString()
        breedtes[naam] = round(g.width)
        namen.append(naam)
        cmap[code] = naam
    fb = FontBuilder(1000, isTTF=False)
    fb.setupGlyphOrder(namen)
    fb.setupCharacterMap(cmap)
    psnaam = "AxiomathWiskunde-" + ("Italic" if stijl == "cursief" else "Regular")
    fb.setupCFF(psnaam, {"FullName": psnaam}, tekens, {})
    fb.setupHorizontalMetrics({n: (breedtes[n], 0) for n in namen})
    # dezelfde verticale maten als Source Sans 3, zodat de regelhoogte niet verspringt
    fb.setupHorizontalHeader(ascent=1024, descent=-400)
    fb.setupNameTable({"familyName": FAMILIE, "styleName": "Italic" if stijl == "cursief" else "Regular"})
    fb.setupOS2(sTypoAscender=1024, sTypoDescender=-400, sTypoLineGap=0, usWinAscent=1024, usWinDescent=400,
                fsSelection=0x01 if stijl == "cursief" else 0x40, usWeightClass=400)
    fb.font["head"].macStyle = 0x02 if stijl == "cursief" else 0
    fb.setupPost(isFixedPitch=0, italicAngle=-14 if stijl == "cursief" else 0)
    fb.font.flavor = "woff2"
    fb.save(UIT / bestand)
    print(bestand, len(namen) - 1, "glyphs")


def main():
    zsfmi, zsfmia, txsys, txexs = t1("zsfmi-reg"), t1("zsfmia-reg"), t1("txsys"), t1("txexs")

    recht = [(ord(c), zsfmia, n, 0) for c, n in zip("0123456789", "zero one two three four five six seven eight nine".split())]
    recht.append((ord("="), zsfmia, "equal", 0))
    for code, n in [(0x2B, "plus"), (0x2212, "minus"), (0x28, "parenleft"), (0x29, "parenright"),
                    (0xB7, "periodcentered"), (0xD7, "multiply"), (0x2264, "lessequal"), (0x2265, "greaterequal"),
                    (0x221E, "infinity"), (0x221A, "radical")]:
        recht.append((code, txsys, n, 0))
    # het integraalteken staat in TeX onder de basislijn; zet het rond de wiskundige as (250 eenheden)
    recht.append((0x222B, txexs, "integraltext", 1261 // 2 + 250))
    bouw(recht, "axiomath-wiskunde.woff2", "normaal")

    cursief = []
    for n in list(zsfmi.keys()):
        if n in ("partialdiff",):
            cursief.append((0x2202, zsfmi, n, 0))
            continue
        u = toUnicode(n)
        if len(u) == 1 and (u.isalpha()) and n[0] != "." and "1" not in n:
            cursief.append((ord(u), zsfmi, n, 0))
    bouw(cursief, "axiomath-wiskunde-cursief.woff2", "cursief")


if __name__ == "__main__":
    main()
