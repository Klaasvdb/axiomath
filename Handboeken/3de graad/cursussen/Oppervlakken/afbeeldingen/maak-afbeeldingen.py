"""Berekent de PNG-figuren van de cursus Oppervlakken (eigen werk, met numpy en Pillow).

Uitvoeren vanuit deze map:  python maak-afbeeldingen.py [naam ...]

Elk oppervlak is een parametervoorstelling (u, v) -> (x, y, z). Het script tekent het in loodrechte
projectie, met dezelfde kijkrichting als de stijl zicht in notatie.tex (azimut 30 graden, hoogte 20 graden):
de vierhoekjes van het rooster worden van achter naar voor gevuld (schildersalgoritme), met een belichting
die van de stand van elk vierhoekje afhangt. De lijnen van het rooster zijn de parameterlijnen; bij de
regeloppervlakken zijn dat de rechten die op het oppervlak liggen.

Voor elke figuur drukt het script de regel \\beeld{...}{x0}{y0}{breedte} af: zet die in een tikzpicture met
[zicht=k] (dezelfde k als hieronder), dan vallen de assen en labels van TikZ precies op het oppervlak.
"""
import sys
import numpy as np
from PIL import Image, ImageDraw

AZ, EL = np.radians(30), np.radians(20)
RECHTS = np.array([-np.sin(AZ), np.cos(AZ), 0.0])
OMHOOG = np.array([-np.sin(EL) * np.cos(AZ), -np.sin(EL) * np.sin(AZ), np.cos(EL)])
OOG = np.array([np.cos(EL) * np.cos(AZ), np.cos(EL) * np.sin(AZ), np.sin(EL)])
LICHT = np.array([0.55, 0.15, 0.82]); LICHT /= np.linalg.norm(LICHT)

PX_PER_CM = 300 / 2.54
OVER = 3  # supersampling
KLEUR = {"groen": ((46, 221, 165), (10, 122, 92)), "oranje": ((255, 166, 43), (178, 74, 6)),
         "blauw": ((92, 184, 255), (18, 87, 176))}


def teken(naam, stukken, kleur, k, marge=0.05):
    """stukken: lijst van (f, urange, vrange, nu, nv, stap); stap = om de hoeveel vakjes een roosterlijn."""
    roosters = []
    for f, urange, vrange, nu, nv, stap in stukken:
        U, V = np.meshgrid(np.linspace(*urange, nu + 1), np.linspace(*vrange, nv + 1), indexing="ij")
        roosters.append((np.stack(f(U, V), axis=-1), nu, nv, stap))
    alle = np.concatenate([P.reshape(-1, 3) for P, *_ in roosters])
    x0, x1 = (alle @ RECHTS * k).min() - marge, (alle @ RECHTS * k).max() + marge
    y0, y1 = (alle @ OMHOOG * k).min() - marge, (alle @ OMHOOG * k).max() + marge
    b, h = int(round((x1 - x0) * PX_PER_CM)), int(round((y1 - y0) * PX_PER_CM))
    s = PX_PER_CM * OVER
    beeld = Image.new("RGBA", (b * OVER, h * OVER), (255, 255, 255, 0))
    d = ImageDraw.Draw(beeld)
    licht, donker = np.array(KLEUR[kleur][0], float), np.array(KLEUR[kleur][1], float)
    lijn = tuple(int(t) for t in donker) + (255,)
    dik = max(1, int(round(0.012 * s)))  # ongeveer 0,12 mm
    vlakjes = []
    for P, nu, nv, stap in roosters:
        px, py = (P @ RECHTS * k - x0) * s, (y1 - P @ OMHOOG * k) * s
        for i in range(nu):
            for j in range(nv):
                hoek = [P[i, j], P[i + 1, j], P[i + 1, j + 1], P[i, j + 1]]
                n = np.cross(hoek[2] - hoek[0], hoek[3] - hoek[1])
                if np.linalg.norm(n) < 1e-12:
                    continue
                n = n / np.linalg.norm(n)
                hk = [(px[i, j], py[i, j]), (px[i + 1, j], py[i + 1, j]), (px[i + 1, j + 1], py[i + 1, j + 1]), (px[i, j + 1], py[i, j + 1])]
                randen = [i % stap[0] == 0, (i + 1) % stap[0] == 0 or i + 1 == nu, j % stap[1] == 0, (j + 1) % stap[1] == 0 or j + 1 == nv]
                vlakjes.append((np.mean(hoek, axis=0) @ OOG, n, hk, randen))
    vlakjes.sort(key=lambda t: t[0])
    for diepte, n, hk, randen in vlakjes:
        voor = n @ OOG >= 0
        helder = 0.45 + 0.55 * abs(n @ LICHT)
        tint = 0.30 if voor else 0.48                     # de binnenkant iets donkerder
        c = (255 * (1 - tint) + licht * tint) * helder + (1 - helder) * donker * 0.35
        c = tuple(int(min(255, max(0, t))) for t in c) + (255,)
        d.polygon(hk, fill=c, outline=c)
        for doe, (a, b2) in zip(randen, [(0, 3), (1, 2), (0, 1), (3, 2)]):
            if doe:
                d.line([hk[a], hk[b2]], fill=lijn, width=dik)
    beeld = beeld.resize((b, h), Image.LANCZOS)
    beeld.save(naam + ".png", optimize=True)
    print(f"{naam}.png  [zicht={k}]  \\beeld{{{naam}.png}}{{{x0:.3f}}}{{{y0:.3f}}}{{{x1 - x0:.3f}}}")


c, s, ch, sh = np.cos, np.sin, np.cosh, np.sinh
pi = np.pi


def sombrero(u, v):
    r = u
    return r * c(v), r * s(v), np.where(r == 0, 1.0, s(r) / np.where(r == 0, 1, r)) * 4


FIGUREN = {
    # hoofdstuk 2 (groen)
    "sombrero": (sombrero, (0, 3 * pi), (0, 2 * pi), 72, 72, (6, 6), "groen", .22),
    "torus": (lambda u, v: ((2 + c(v)) * c(u), (2 + c(v)) * s(u), s(v)), (0, 2 * pi), (0, 2 * pi), 72, 36, (6, 6), "groen", .45),
    "helicoide": (lambda u, v: (u * c(v), u * s(v), .4 * v), (-2, 2), (0, 2.5 * pi), 16, 120, (4, 6), "groen", .75),
    "kom": (lambda u, v: (v * c(u), v * s(u), v**2), (0, 2 * pi), (0, 1.6), 72, 24, (6, 4), "groen", .6),
    "zadel-graf": (lambda u, v: (u, v, (u**2 - v**2) / 2), (-1.5, 1.5), (-1.5, 1.5), 30, 30, (3, 3), "groen", .8),
    "vaas": (lambda u, v: ((1 + .35 * s(1.6 * v)) * c(u), (1 + .35 * s(1.6 * v)) * s(u), v), (0, 2 * pi), (-1.8, 1.8), 72, 36, (6, 4), "groen", .6),
    # hoofdstuk 3 (oranje)
    "ellipsoide": (lambda u, v: (2 * c(v) * c(u), 3 * c(v) * s(u), 1.5 * s(v)), (0, 2 * pi), (-pi / 2, pi / 2), 72, 36, (6, 6), "oranje", .42),
    # de familie x^2 + y^2 - z^2/1,2^2 = 1, 0, -1 (eenbladige hyperboloide, kegel, tweebladige), op dezelfde schaal
    "hyperboloide-1": (lambda u, v: (ch(v) * c(u), ch(v) * s(u), 1.2 * sh(v)), (0, 2 * pi), (-1.25, 1.25), 72, 30, (6, 5), "oranje", .45),
    "hyperboloide-2": ([(lambda u, v: (sh(v) * c(u), sh(v) * s(u), 1.2 * ch(v)), (0, 2 * pi), (0, 1.2), 72, 24, (6, 4)),
                        (lambda u, v: (sh(v) * c(u), sh(v) * s(u), -1.2 * ch(v)), (0, 2 * pi), (0, 1.2), 72, 24, (6, 4))], "oranje", .45),
    "paraboloide": (lambda u, v: (v * c(u), v * s(u), v**2 / 2), (0, 2 * pi), (0, 2), 72, 24, (6, 4), "oranje", .55),
    "zadel": (lambda u, v: (u, v, (u**2 - v**2) / 2), (-1.6, 1.6), (-1.6, 1.6), 32, 32, (4, 4), "oranje", .6),
    "kegel": (lambda u, v: (v * c(u), v * s(u), 1.2 * v), (0, 2 * pi), (-1.8, 1.8), 72, 36, (6, 6), "oranje", .45),
    "regels-hyperboloide": (lambda u, v: (c(u) - v * s(u), s(u) + v * c(u), 2 * v), (0, 2 * pi), (-1.3, 1.3), 48, 26, (2, 26), "oranje", .55),
    "regels-zadel": (lambda u, v: ((u + v) / 2, (u - v) / 2, u * v / 2), (-2, 2), (-2, 2), 16, 16, (1, 1), "oranje", .6),
}

if __name__ == "__main__":
    for naam, args in FIGUREN.items():
        if len(sys.argv) == 1 or naam in sys.argv[1:]:
            if callable(args[0]):
                args = ([args[:6]], *args[6:])
            teken(naam, *args)
