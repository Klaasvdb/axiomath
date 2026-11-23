"""Berekent de PNG-figuren van de cursus Iteraties en fractalen (eigen werk, met numpy en Pillow).

Uitvoeren vanuit deze map:  python maak-afbeeldingen.py
De assen en labels tekent de cursus zelf met TikZ over de afbeelding: elke afbeelding beslaat precies
het gebied dat hieronder staat, zonder rand.

    bifurcatie.png   logistische afbeelding x -> r x (1 - x): r van 2,8 tot 4 (horizontaal), x van 0 tot 1
    mandelbrot.png   de Mandelbrotverzameling: Re c van -2,2 tot 0,8, Im c van -1,25 tot 1,25
    julia-*.png      gevulde Julia-verzamelingen voor vier waarden van c: Re z en Im z van -1,8 tot 1,8
    chaosspel.png    het chaosspel: 60 000 punten, telkens halfweg naar een willekeurig hoekpunt
    varen.png        de varen van Barnsley: vier affiene transformaties, 120 000 punten
"""
import numpy as np
from PIL import Image

INKT = 18  # bijna zwart, zoals de inkt van de opmaak


def bewaar(grijs, naam):
    Image.fromarray(np.clip(grijs, 0, 255).astype(np.uint8), "L").save(naam, optimize=True)
    print(naam)


def bifurcatie(breedte=1500, hoogte=760):
    teller = np.zeros((hoogte, breedte))
    for kolom in range(breedte):
        r = 2.8 + 1.2 * (kolom + 0.5) / breedte
        x = np.linspace(0.05, 0.95, 40)
        for _ in range(600):  # eerst laten uitsterven wat niet blijft
            x = r * x * (1 - x)
        for _ in range(250):
            x = r * x * (1 - x)
            np.add.at(teller, (((1 - x) * (hoogte - 1)).astype(int), kolom), 1)
    bewaar(255 - (255 - INKT) * np.minimum(1, teller / 4), "bifurcatie.png")


def ontsnapping(z, c, n=200):
    """Aantal stappen tot |z| > 2 (n als de baan binnen de cirkel met straal 2 blijft)."""
    teller = np.full(z.shape, n)
    actief = np.ones(z.shape, bool)
    for k in range(n):
        z[actief] = z[actief] ** 2 + c[actief]
        weg = actief & (np.abs(z) > 2)
        teller[weg] = k
        actief &= ~weg
    return teller


def kleur(teller, n):
    """Binnen: inkt. Buiten: wit als de baan snel ontsnapt, donkerder naarmate ze later ontsnapt,
    zodat ook een dunne Julia-verzameling (zonder binnenste) zichtbaar wordt."""
    t = np.where(teller >= n, -1, teller)
    grijs = 255 - 215 * (np.clip(t - 2, 0, 30) / 30) ** 0.7
    grijs[t < 0] = INKT
    return grijs


def mandelbrot(breedte=1500, n=250):
    hoogte = int(breedte * 2.5 / 3.0)
    re = np.linspace(-2.2, 0.8, breedte)
    im = np.linspace(1.25, -1.25, hoogte)
    c = re[None, :] + 1j * im[:, None]
    bewaar(kleur(ontsnapping(np.zeros_like(c), c, n), n), "mandelbrot.png")


def julia(c, naam, breedte=700, n=250):
    re = np.linspace(-1.8, 1.8, breedte)
    im = np.linspace(1.8, -1.8, breedte)
    z = re[None, :] + 1j * im[:, None]
    bewaar(kleur(ontsnapping(z, np.full(z.shape, c), n), n), naam)


def chaosspel(n=60000, breedte=900):
    rng = np.random.default_rng(2026)
    hoeken = np.array([[0.0, 0.0], [1.0, 0.0], [0.5, np.sqrt(3) / 2]])
    p = np.array([0.3, 0.2])
    hoogte = int(breedte * np.sqrt(3) / 2)
    beeld = np.full((hoogte + 1, breedte + 1), 255.0)
    for k in range(n):
        p = (p + hoeken[rng.integers(3)]) / 2
        if k > 20:
            beeld[int((np.sqrt(3) / 2 - p[1]) * breedte), int(p[0] * breedte)] = INKT
    bewaar(beeld, "chaosspel.png")


def varen(n=120000, hoogte=1000):
    rng = np.random.default_rng(1988)
    A = [np.array([[0, 0], [0, 0.16]]), np.array([[0.85, 0.04], [-0.04, 0.85]]),
         np.array([[0.2, -0.26], [0.23, 0.22]]), np.array([[-0.15, 0.28], [0.26, 0.24]])]
    b = [np.array([0, 0]), np.array([0, 1.6]), np.array([0, 1.6]), np.array([0, 0.44])]
    kans = np.cumsum([0.01, 0.85, 0.07, 0.07])
    breedte = int(hoogte * 5.5 / 10.0)
    beeld = np.full((hoogte + 1, breedte + 1), 255.0)
    p = np.zeros(2)
    for k in range(n):
        i = int(np.searchsorted(kans, rng.random()))
        p = A[i] @ p + b[i]
        if k > 20:  # x van -2,75 tot 2,75, y van 0 tot 10
            beeld[int((10 - p[1]) / 10 * hoogte), int((p[0] + 2.75) / 5.5 * breedte)] = INKT
    bewaar(beeld, "varen.png")


if __name__ == "__main__":
    bifurcatie()
    mandelbrot()
    for c, naam in [(-1, "julia-basiliek.png"), (-0.12 + 0.75j, "julia-konijn.png"),
                    (1j, "julia-dendriet.png"), (0.4 + 0.3j, "julia-stof.png")]:
        julia(c, naam)
    chaosspel()
    varen()
