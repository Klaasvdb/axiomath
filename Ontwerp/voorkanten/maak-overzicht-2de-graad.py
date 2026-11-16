"""Zet de voorkanten van pakket 5 van de 2de graad (alle onderwerpen) naast elkaar in voorstellen-2de-graad.png.

Eerst maak-voorkanten.py draaien. Dan, in PowerShell vanuit deze map:

    py -3.13 -P maak-overzicht-2de-graad.py
"""
from pathlib import Path

import pymupdf
from PIL import Image, ImageDraw, ImageFont

MAP = Path(__file__).resolve().parent
KOLOMMEN, MARGE, KOP = 6, 24, 90


def letter(naam, grootte):
    try:
        return ImageFont.truetype(naam, grootte)
    except OSError:
        return ImageFont.load_default()


def main():
    pdf = pymupdf.open(MAP / "alle-voorkanten.pdf")
    paginas = [p - 1 for _, titel, p in pdf.get_toc() if titel.startswith("2de graad, Pakket 5")]
    beelden = []
    for i in paginas:
        pix = pdf[i].get_pixmap(dpi=72)
        beelden.append(Image.frombytes("RGB", (pix.width, pix.height), pix.samples))
    b, h = beelden[0].size
    rijen = (len(beelden) + KOLOMMEN - 1) // KOLOMMEN
    blad = Image.new("RGB", (KOLOMMEN * b + (KOLOMMEN + 1) * MARGE, KOP + rijen * h + (rijen + 1) * MARGE), "#F4F1EC")
    teken = ImageDraw.Draw(blad)
    teken.text((MARGE, 18), "Axiomath 2de graad: voorstellen voor de voorkanten", fill="#8C1D40", font=letter("segoeuib.ttf", 40))
    teken.text((MARGE, 62), f"Pakket 5 (B+S''), alle {len(beelden)} handboeken in de voorgestelde volgorde: eerst het 3de jaar, dan het 4de.",
               fill="#12202B", font=letter("segoeui.ttf", 24))
    for k, beeld in enumerate(beelden):
        blad.paste(beeld, (MARGE + (k % KOLOMMEN) * (b + MARGE), KOP + MARGE + (k // KOLOMMEN) * (h + MARGE)))
    blad.save(MAP / "voorstellen-2de-graad.png", optimize=True)
    print("voorstellen-2de-graad.png:", len(beelden), "voorkanten")


if __name__ == "__main__":
    main()
