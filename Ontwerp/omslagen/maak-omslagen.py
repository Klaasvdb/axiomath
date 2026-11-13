"""Haalt de schilderijen voor de voorkaft op (Wikimedia Commons, publiek domein) en
snijdt ze bij tot de afbeelding bovenaan de voorkaft.

Uitvoeren vanuit de map Ontwerp/omslagen:
    py -3.13 -P maak-omslagen.py            alle schilderijen
    py -3.13 -P maak-omslagen.py grande-jatte   alleen deze

Resultaat: omslag-<naam>.jpg in deze map (21 x 20 cm, 2100 x 2000 px).
Op de voorkaft van Integralen valt de onderste 1,5 cm achter de gekleurde band.

Een nieuw schilderij toevoegen:
  1. een regel bij SCHILDERIJEN (bestandsnaam op Commons, uitsnede);
  2. een motief in ../voorkanten/motieven/ met \\omslagbestand en \\omslagbron (kunstenaar en titel).
Controleer altijd of de licentie op Commons "Public domain" of CC0 is (CC0: musea zoals het Rijksmuseum).

De Mandelbrotverzameling (Complexe getallen) is geen schilderij maar wordt hier berekend:
    py -3.13 -P maak-omslagen.py mandelbrot
Daarvoor is ook numpy nodig.
"""
import io
import json
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image

MAP = Path(__file__).resolve().parent
API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "AxiomathWiskunde/1.0 (educatief project; https://github.com/Klaasvdb/axiomath)"}
BREEDTE, HOOGTE = 2100, 2000

# naam: (bestand op Commons, horizontale positie 0..1, verticale positie 0..1 van de uitsnede)
SCHILDERIJEN = {
    "athene": ("File:Sanzio 01.jpg", 0.5, 0.5),                       # Rafaël, De School van Athene
    "nevelzee": ("File:Caspar David Friedrich - Wanderer above the sea of fog.jpg", 0.5, 0.3),
    "sterrennacht": ("File:Van Gogh - Starry Night - Google Art Project.jpg", 0.45, 0.5),
    "golf": ("File:Great Wave off Kanagawa2.jpg", 0.15, 0.5),           # Hokusai
    "impressie": ("File:Monet - Impression, Sunrise.jpg", 0.5, 0.5),
    "waterlelies": ("File:Claude Monet - Water Lilies - 1906, Ryerson.jpg", 0.5, 0.5),
    "grande-jatte": ("File:A Sunday on La Grande Jatte, Georges Seurat, 1884.jpg", 0.85, 0.5),  # Seurat
    "middelharnis": ("File:Meindert Hobbema 001.jpg", 0.5, 0.5),        # Hobbema
    "zeilwagen": ("File:De zeilwagen van Simon Stevin, 1602 Currus veliferi Ill.mi Pr. Mauritii Nassouii (titel op object), RP-P-OB-80.576.jpg", 0.62, 0.5),  # Rijksmuseum, CC0
    "broadway": ("File:Piet Mondrian, 1942 - Broadway Boogie Woogie.jpg", 0.5, 0.5),
    "aardbeiendief": ("File:Textile, Strawberry Thief, designed 1883, printed ca. 1934 (CH 18340065).jpg", 0.5, 0.5),  # Morris
    "ideale-stad": ("File:Formerly Piero della Francesca - Ideal City - Galleria Nazionale delle Marche Urbino.jpg", 0.5, 0.5),
    "populieren": ("File:Claude Monet - Poplars on the Epte - Google Art Project.jpg", 0.5, 0.5),
    "volkstelling": ("File:Pieter Bruegel the Elder - The Numbering at Bethlehem - Google Art Project.jpg", 0.1, 0.5),
    "valsspelers": ("File:Caravaggio (Michelangelo Merisi) - The Cardsharps - Google Art Project.jpg", 0.5, 0.5),
    "staalmeesters": ("File:Rembrandt - De Staalmeesters- het college van staalmeesters (waardijns) van het Amsterdamse lakenbereidersgilde - Google Art Project.jpg", 0.5, 0.5),
    "geograaf": ("File:Johannes Vermeer - The Geographer - Google Art Project.jpg", 0.5, 0.3),
    # 2de graad: frissere, lichtere werken, één per reeks handboeken (zie Handboeken/2de graad/README.md)
    "contracompositie": ("File:Theo van Doesburg 022.jpg", 0.5, 0.5),                    # Van Doesburg
    "goudweegster": ("File:Pieter de Hooch - Die Goldwägerin - 001.jpg", 0.5, 0.5),
    "bui": ("File:Hiroshige, Sudden shower over Shin-Ōhashi bridge and Atake, 1857.jpg", 0.5, 0.4),
    "fontein": ("File:John Singer Sargent - The Fountain, Villa Torlonia, Frascati, Italy - Google Art Project.jpg", 0.5, 0.25),
    "suprematisme": ("File:Suprematism - Abstract Composition (Malevich, 1915).jpg", 0.5, 0.5),
    "kringen": ("File:Wassily Kandinsky Color Study. Squares with Concentric Circles.jpg", 0.5, 0.5),
    "sainte-victoire": ("File:Paul Cézanne - Mont Sainte-Victoire (La Montagne Sainte-Victoire) - BF13 - Barnes Foundation.jpg", 0.5, 0.5),
    "altaarstuk": ("File:Hilma af Klint - Altarpiece No. 1 Group X (13919).jpg", 0.5, 0.45),
    "assendelft": ("File:Interieur van de Sint-Odulphuskerk in Assendelft Rijksmuseum SK-C-217.jpeg", 0.5, 0.5),
    "saint-tropez": ("File:Paul Signac - The Port of Saint-Tropez - Google Art Project.jpg", 0.5, 0.5),
    "cirkelvormen": ("File:Delaunay, Robert - Formes circulaires; lune no. 1 - Google Art Project.jpg", 0.5, 0.5),
    "taeuber": ("File:Sophie Taeuber-Arp - Kompozycja r.jpg", 0.5, 0.5),
    "levensboom": ("File:Klimt - Nine Cartoons for the Stoclet Frieze- Part 4, Part of the tree of life (1910-11).jpg", 0.5, 0.25),
    "hoofdweg": ("File:Hauptweg und Nebenwege - Paul Klee - Museum Ludwig-7026 (cropped).jpg", 0.5, 0.5),
    "galette": ("File:Auguste Renoir - Dance at Le Moulin de la Galette - Google Art Project.jpg", 0.5, 0.5),
}
# deel dat rondom wegvalt: Seurat schilderde een stippelrand mee, de andere foto's tonen de lijst of de stofrand.
# Eén getal voor alle kanten, of (links, boven, rechts, onder): bij de zeilwagen vallen de titel en de witte rand weg.
RAND = {"grande-jatte": 0.015, "broadway": 0.01, "aardbeiendief": 0.05, "ideale-stad": 0.03,
        "zeilwagen": (0.01, 0.07, 0.01, 0.03), "goudweegster": (0.03, 0.01, 0.03, 0.01)}


def haal(url):
    """Commons antwoordt met 429 als je te snel vraagt: dan even wachten."""
    for poging in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA)) as r:
                return r.read()
        except urllib.error.HTTPError as fout:
            if fout.code != 429 or poging == 4:
                raise
            time.sleep(40)


def info(titel):
    params = {
        "action": "query", "format": "json", "prop": "imageinfo", "titles": titel,
        "iiprop": "url|size|extmetadata", "iiurlwidth": 3840,
        "iiextmetadatafilter": "LicenseShortName",
    }
    pagina = next(iter(json.loads(haal(API + "?" + urllib.parse.urlencode(params)))["query"]["pages"].values()))
    i = pagina["imageinfo"][0]
    return i["thumburl"] if i["width"] > 3840 else i["url"], i["extmetadata"]["LicenseShortName"]["value"]


def mandelbrot(cx=-0.7453, cy=0.1127, breedte=0.012, n=1200, ss=2):
    """De zeepaardjesvallei van de Mandelbrotverzameling: alle c waarvoor z -> z^2 + c begrensd blijft.
    Kleur buiten de verzameling: cyclisch volgens het (gladde) aantal stappen tot |z| > 256."""
    import numpy as np
    w, h = BREEDTE * ss, HOOGTE * ss
    x = np.linspace(cx - breedte / 2, cx + breedte / 2, w)
    y = np.linspace(cy + breedte * HOOGTE / BREEDTE / 2, cy - breedte * HOOGTE / BREEDTE / 2, h)
    c = (x[None, :] + 1j * y[:, None]).ravel()
    stap = np.full(c.size, -1.0)  # -1: in de verzameling
    idx, z, cc = np.arange(c.size), np.zeros_like(c), c.copy()
    for k in range(n):
        z = z * z + cc
        weg = np.abs(z) > 256
        if weg.any():
            stap[idx[weg]] = k + 1 - np.log2(np.log(np.abs(z[weg])))
            z, cc, idx = z[~weg], cc[~weg], idx[~weg]
        if idx.size == 0:
            break
    s = (np.log(np.maximum(stap, 1)) / 0.9) % 1.0
    # room, fel, accent, goud en terug naar room; de verzameling zelf in inkt
    stops = np.array([[250, 246, 236], [63, 214, 240], [11, 100, 112], [245, 184, 50], [250, 246, 236]], float)
    pos = np.linspace(0, 1, len(stops))
    rgb = np.stack([np.interp(s, pos, stops[:, k]) for k in range(3)], -1)
    rgb[stap < 0] = [18, 32, 43]
    beeld = Image.fromarray(rgb.reshape(h, w, 3).astype(np.uint8)).resize((BREEDTE, HOOGTE), Image.LANCZOS)
    doel = MAP / "omslag-mandelbrot.jpg"
    beeld.save(doel, quality=90, optimize=True)
    print(doel.name, doel.stat().st_size // 1024, "kB", "eigen werk")


if "mandelbrot" in sys.argv[1:] or not sys.argv[1:]:
    mandelbrot()

for naam, (titel, px, py) in SCHILDERIJEN.items():
    if sys.argv[1:] and naam not in sys.argv[1:]:
        continue
    url, licentie = info(titel)
    if "public domain" not in licentie.lower() and licentie.strip().upper() != "CC0":
        print(f"{naam}: licentie '{licentie}', overgeslagen")
        continue
    img = Image.open(io.BytesIO(haal(url))).convert("RGB")
    time.sleep(5)
    b, h = img.size
    rand = RAND.get(naam, 0)
    links, boven, rechts, onder = rand if isinstance(rand, tuple) else (rand,) * 4
    img = img.crop((round(b * links), round(h * boven), round(b * (1 - rechts)), round(h * (1 - onder))))
    b, h = img.size
    # grootst mogelijke uitsnede met de verhouding van de afbeelding op de voorkaft
    if b / h > BREEDTE / HOOGTE:
        nb, nh = round(h * BREEDTE / HOOGTE), h
    else:
        nb, nh = b, round(b * HOOGTE / BREEDTE)
    x = round((b - nb) * px)
    y = round((h - nh) * py)
    uitsnede = img.crop((x, y, x + nb, y + nh)).resize((BREEDTE, HOOGTE), Image.LANCZOS)
    doel = MAP / f"omslag-{naam}.jpg"
    uitsnede.save(doel, quality=85, optimize=True)
    print(doel.name, doel.stat().st_size // 1024, "kB", licentie)
