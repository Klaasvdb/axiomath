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

De 122 onvolledige open kubussen (Telproblemen) zijn ook eigen werk, berekend en getekend:
    py -3.13 -P maak-omslagen.py kubussen
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
    "planetarium": ("File:Wright of Derby, The Orrery.jpg", 0.5, 0.45),  # Wright of Derby, kegelsneden
    "thee": ("File:Jean-Baptiste Siméon Chardin 018.jpg", 0.7, 0.5),  # Chardin, Dame die thee drinkt (differentiaalvergelijkingen)
    "ambassadeurs": ("File:Hans Holbein the Younger - The Ambassadors - Google Art Project.jpg", 0.5, 0.5),  # Holbein, getaltheorie
    "deuren": ("File:Vilhelm Hammershøi- Weiße Türen, offene Türen, 1905.jpg", 0.5, 0.5),  # Hammershøi, reeksen
    "newton": ("File:Newton-WilliamBlake.jpg", 0.5, 0.5),  # Blake, Newton (numerieke methodes)
    "siphonophoren": ("File:Haeckel Siphonophorae.jpg", 0.5, 0.5),  # Haeckel, Kunstformen der Natur (iteraties en fractalen)
    "regendag": ("File:Gustave Caillebotte - Paris Street; Rainy Day - Google Art Project.jpg", 0.62, 0.5),  # Caillebotte, kansverdelingen
    "kazen": ("File:Clara Peeters - Still Life with Cheeses, Almonds and Pretzels - 1203 - Mauritshuis.jpg", 0.5, 0.5),  # Clara Peeters, lineair programmeren
    "geldwisselaar": ("File:Quentin Massys 001.jpg", 0.5, 0.5),  # Quinten Massys, De geldwisselaar en zijn vrouw (financiële algebra)
    "sterrenkundige": ("File:Astronomer in a window, by Gerard Dou.jpg", 0.5, 0.62),  # Gerrit Dou, lineaire regressie
    "irissen": ("File:KORIN-Irises-R.jpg", 0.42, 0.5),  # Ogata Korin, Irissen (rechterscherm), multivariate statistiek
    "melencolia": ("File:Albrecht Dürer, Melencolia I, 1514, NGA 6640.jpg", 0.5, 0.2),  # Dürer, Melencolia I met het magische vierkant (vectorruimten)
    "bolle-spiegel": ("File:Francesco Mazzola, called Parmigianino - Self-Portrait in a Convex Mirror - Google Art Project.jpg", 0.5, 0.5),  # Parmigianino, Zelfportret in een bolle spiegel (oppervlakken)
    "theekransje": ("File:John Tenniel - Illustration from The Nursery Alice (1890) - c03757 07.jpg", 0.45, 0.5),  # Tenniel, predicatenlogica
    "hooiwagen": ("File:John Constable - The Hay Wain (1821).jpg", 0.25, 0.5),  # Constable, De hooiwagen: een rollend wiel (krommen en meetkundige plaatsen)
    "spinsters": ("File:Velázquez - La Fábula de Aracne o Las Hilanderas (Museo del Prado, 1657-58).jpg", 0.15, 0.5),  # Velázquez, De spinsters: het spinnewiel draait om een vaste as (eigenwaarden en eigenvectoren)
    "pacioli": ("File:Jacopo de' Barbari (attributed to) Portrait of Luca Pacioli (1445 1517) with a student (Guidobaldo da Montefeltro) (2).jpg", 0.35, 0.5),  # Jacopo de' Barbari, Luca Pacioli met veelvlakken en hun draaiingsgroepen (groepentheorie)
    "vaten": ("File:Francisco de Zurbarán - Still Life with Four Vessels - Google Art Project.jpg", 0.5, 0.5),  # Zurbarán, Stilleven met vier vaten: omwentelingslichamen (integratiemethodes)
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
    "hoofdweg": ("File:Hauptweg und Nebenwege - Paul Klee - Museum Ludwig-7026 (cropped).jpg", 0.5, 0.5),
    "galette": ("File:Auguste Renoir - Dance at Le Moulin de la Galette - Google Art Project.jpg", 0.5, 0.5),
    "dansles": ("File:Edgar Degas - The Ballet Class - Google Art Project.jpg", 0.5, 0.62),  # Degas, De dansles (Kernvaardigheden)
}
# deel dat rondom wegvalt: Seurat schilderde een stippelrand mee, de andere foto's tonen de lijst of de stofrand.
# Eén getal voor alle kanten, of (links, boven, rechts, onder): bij de zeilwagen vallen de titel en de witte rand weg.
RAND = {"grande-jatte": 0.015, "melencolia": 0.016, "bolle-spiegel": 0.245,"broadway": 0.01, "aardbeiendief": 0.05, "ideale-stad": 0.03,
        "zeilwagen": (0.01, 0.07, 0.01, 0.03), "goudweegster": (0.03, 0.01, 0.03, 0.01),
        "bui": (0.056, 0, 0.026, 0),
        "theekransje": (0.11, 0.09, 0.09, 0.07),  # Tenniel: het witte papier rond de prent
        "sterrenkundige": (0.035, 0, 0.035, 0.01)}  # Dou: de witte achtergrond naast de boog; Hiroshige: de papierrand en het kaderlijntje, links breder dan rechts


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


def kubussen():
    """Telproblemen: alle onvolledige open kubussen, getekend in een raster (eigen berekening).
    Een onvolledige open kubus is een verbonden deel van de 12 ribben van een kubus, met ribben in alle drie
    de richtingen, maar niet alle 12. Twee die door een draaiing in elkaar overgaan, tellen als één: zo zijn er 122
    (3 tot 11 ribben: 3, 5, 14, 24, 32, 25, 13, 5, 1). Tel je ook spiegelbeelden als gelijk, dan zijn het er 77.
    Het idee komt van Sol LeWitt (Incomplete Open Cubes, 1974); de telling en de tekening zijn eigen werk."""
    import itertools
    import math
    from PIL import ImageDraw

    hoeken = list(itertools.product((0, 1), repeat=3))
    ribben = [(a, b) for a, b in itertools.combinations(hoeken, 2) if sum(x != y for x, y in zip(a, b)) == 1]
    nummer = {frozenset(r): i for i, r in enumerate(ribben)}

    def draaiingen():
        """De 24 draaiingen van de kubus, als permutatie van de ribben (matrices met determinant 1)."""
        for perm in itertools.permutations(range(3)):
            for teken in itertools.product((1, -1), repeat=3):
                pariteit = sum(perm[i] > perm[j] for i in range(3) for j in range(i + 1, 3)) % 2
                if math.prod(teken) * (-1) ** pariteit != 1:
                    continue
                beeld = lambda v: tuple((teken[i] * (2 * v[perm[i]] - 1) + 1) // 2 for i in range(3))
                yield [nummer[frozenset((beeld(a), beeld(b)))] for a, b in ribben]

    groep = list(draaiingen())
    assert len(groep) == 24

    def geldig(deel):
        rs = [ribben[i] for i in deel]
        if len({next(k for k in range(3) if a[k] != b[k]) for a, b in rs}) < 3:
            return False
        bereikt, nieuw = set(rs[0]), True
        while nieuw:
            nieuw = False
            for a, b in rs:
                if (a in bereikt) != (b in bereikt):
                    bereikt |= {a, b}
                    nieuw = True
        return bereikt == {v for r in rs for v in r}

    gezien, lijst = set(), []
    for n in range(3, 12):
        for deel in itertools.combinations(range(12), n):
            if geldig(deel):
                vorm = min(tuple(sorted(g[i] for i in deel)) for g in groep)
                if vorm not in gezien:
                    gezien.add(vorm)
                    lijst.append(vorm)
    assert len(lijst) == 122, len(lijst)

    ss = 2
    beeld = Image.new("RGB", (BREEDTE * ss, HOOGTE * ss), (244, 241, 234))
    teken = ImageDraw.Draw(beeld)
    inkt, schim = (18, 32, 43), (214, 208, 196)
    kolommen, rijen = 12, 11
    mx, my = 110 * ss, 95 * ss
    cw = (BREEDTE * ss - 2 * mx) / kolommen
    ch = (HOOGTE * ss - my - 115 * ss) / rijen  # de onderste rand valt achter de band
    s = min(cw, ch) * 0.42 * 1.35
    az, el = math.radians(28), math.radians(22)  # schuin bekeken: geen twee hoekpunten vallen samen

    def proj(v, cx, cy):
        x, y, z = (c - 0.5 for c in v)
        X, Y = x * math.cos(az) - y * math.sin(az), x * math.sin(az) + y * math.cos(az)
        return cx + X * s, cy + (Y * math.sin(el) - z * math.cos(el)) * s

    laatste = len(lijst) - kolommen * (rijen - 1)
    for k, kubus in enumerate(lijst):
        r, c = divmod(k, kolommen)
        c += (kolommen - laatste) / 2 if r == rijen - 1 else 0
        cx, cy = mx + (c + 0.5) * cw, my + (r + 0.5) * ch
        for i, (a, b) in enumerate(ribben):
            if i not in kubus:
                teken.line([proj(a, cx, cy), proj(b, cx, cy)], fill=schim, width=2 * ss)
        for i in kubus:
            a, b = ribben[i]
            teken.line([proj(a, cx, cy), proj(b, cx, cy)], fill=inkt, width=5 * ss)
    doel = MAP / "omslag-kubussen.jpg"
    beeld.resize((BREEDTE, HOOGTE), Image.LANCZOS).save(doel, quality=90, optimize=True)
    print(doel.name, doel.stat().st_size // 1024, "kB", "eigen werk,", len(lijst), "kubussen")


if "mandelbrot" in sys.argv[1:] or not sys.argv[1:]:
    mandelbrot()
if "kubussen" in sys.argv[1:] or not sys.argv[1:]:
    kubussen()

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
