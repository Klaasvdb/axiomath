# Tekent het definitieve Axiomath-logo als SVG, PDF en PNG, in inkt en in wit.
# Uitvoeren vanuit PowerShell: py -3.13 -P Ontwerp/logo/maak-logo.py
# De letters zijn opgebouwd uit vlakken, dus er is geen lettertype nodig. De spleten in de O zijn
# echte openingen: op de achtergrond komt geen wit vlak, ook niet in de versie in inkt.
import math
from pathlib import Path

import pymupdf

MAP = Path(__file__).resolve().parent
INKT, WIT = "#12202B", "#FFFFFF"

# Maten, in eenheden waarvan de hoofdletter er 200 hoog is
B = 200.0  # basislijn
A_BREED, A_DIK, BALK, BEEN_LANGER = 190.0, 46.0, 139.0, 20.0
KLEIN_DIK, KLEIN_R, KLEIN_MIDDEN = 42.0, 76.0, 126.0  # ronde kleine letters
KLEIN_TOP = KLEIN_MIDDEN - KLEIN_R + 2  # rechte letters; de rondingen steken 2 voorbij
X_BREED, BOOG_R = 150.0, 38.0
SPLEET, AS_UIT, PIJL_LENGTE, PIJL_BREEDTE = 5.0, 8.0, 10.0, 6.0
# Ruimte tussen de letters: A-x, x-i, i-o, o-m, m-a, a-t, t-h
RUIMTE = (4.0, 7.0, 12.0, 22.0, 7.0, 7.0, 6.0)
T_BREED, T_TOP = 86.0, 16.0  # de t: breedte van de dwarsbalk en hoogte van de stam


class Tekening:
    def __init__(self):
        self.paden, self.pts = [], []

    def poly(self, *pts):
        self.paden.append("M" + "L".join(f"{x:.2f},{y:.2f}" for x, y in pts) + "Z")
        self.pts += pts

    def recht(self, x0, y0, x1, y1):
        self.poly((x0, y0), (x1, y0), (x1, y1), (x0, y1))

    def balk(self, x0, y0, x1, y1, dik):
        """Schuine balk, aan de uiteinden horizontaal afgesneden."""
        hw = dik / 2 * math.hypot(x1 - x0, y1 - y0) / abs(y1 - y0)
        self.poly((x0 - hw, y0), (x0 + hw, y0), (x1 + hw, y1), (x1 - hw, y1))

    def ring(self, cx, cy, r, ri=0.0):
        d = f"M{cx - r:.2f},{cy:.2f}a{r:.2f},{r:.2f} 0 1,0 {2 * r:.2f},0a{r:.2f},{r:.2f} 0 1,0 {-2 * r:.2f},0Z"
        if ri:
            d += f"M{cx - ri:.2f},{cy:.2f}a{ri:.2f},{ri:.2f} 0 1,1 {2 * ri:.2f},0a{ri:.2f},{ri:.2f} 0 1,1 {-2 * ri:.2f},0Z"
        self.paden.append(d)
        self.pts += [(cx - r, cy - r), (cx + r, cy + r)]

    def svg(self, kleur, marge=2.0):
        xs, ys = [p[0] for p in self.pts], [p[1] for p in self.pts]
        x0, y0 = min(xs) - marge, min(ys) - marge
        b, h = max(xs) - min(xs) + 2 * marge, max(ys) - min(ys) + 2 * marge
        # elke vorm een eigen pad: overlappende vormen tellen zo op, en enkel de ringen hebben een gat
        vormen = "\n".join(f'<path d="{d}"/>' for d in self.paden)
        return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0:.2f} {y0:.2f} {b:.2f} {h:.2f}" '
                f'role="img" aria-label="Axiomath">\n<title>Axiomath</title>\n'
                f'<g fill="{kleur}" fill-rule="evenodd">\n{vormen}\n</g>\n</svg>\n')


def letter_A(t, x):
    """Hoofdletter A: het linkerbeen loopt een tikkeltje door onder de basislijn."""
    hw = A_DIK / 2
    for _ in range(12):
        hw = A_DIK / 2 * math.hypot(A_BREED / 2 - hw, B) / B
    cx, m = x + A_BREED / 2, (A_BREED / 2 - hw) / B
    t.balk(cx, 0, cx - m * (B + BEEN_LANGER), B + BEEN_LANGER, A_DIK)
    t.balk(cx, 0, cx + m * B, B, A_DIK)
    d = m * BALK
    t.recht(cx - d, BALK - A_DIK / 2, cx + d, BALK + A_DIK / 2)
    return x + A_BREED


def letter_x(t, x):
    h, hw = B - KLEIN_TOP, KLEIN_DIK / 2
    for _ in range(12):
        hw = KLEIN_DIK / 2 * math.hypot(X_BREED - 2 * hw, h) / h
    t.balk(x + hw, B, x + X_BREED - hw, KLEIN_TOP, KLEIN_DIK)
    t.balk(x + hw, KLEIN_TOP, x + X_BREED - hw, B, KLEIN_DIK)
    return x + X_BREED


def letter_i(t, x):
    t.recht(x, KLEIN_TOP, x + KLEIN_DIK, B)
    t.ring(x + KLEIN_DIK / 2, KLEIN_TOP - 9 - 21, 21)
    return x + KLEIN_DIK


def letter_o(t, x, spleet=SPLEET, as_uit=AS_UIT, pijl_lengte=PIJL_LENGTE, pijl_breedte=PIJL_BREEDTE):
    """Open O: de assen zijn spleten in de ring en lopen erbuiten als volle lijn verder,
    met een pijltje rechts en boven. De opening van de O blijft leeg."""
    r, ri, h = KLEIN_R, KLEIN_R - KLEIN_DIK, spleet / 2
    cx, cy = x + r, KLEIN_MIDDEN
    ybuiten, ybinnen = math.sqrt(r * r - h * h), math.sqrt(ri * ri - h * h)
    for sx, sy in ((1, 1), (-1, 1), (-1, -1), (1, -1)):
        klok = 0 if sx * sy > 0 else 1
        pt = lambda u, v: f"{cx + sx * u:.2f},{cy + sy * v:.2f}"
        t.paden.append(f"M{pt(h, ybinnen)}L{pt(h, ybuiten)}A{r},{r} 0 0 {klok} {pt(ybuiten, h)}"
                       f"L{pt(ybinnen, h)}A{ri},{ri} 0 0 {1 - klok} {pt(h, ybinnen)}Z")
    t.pts += [(cx - r, cy - r), (cx + r, cy + r)]
    v, p, w = r + as_uit, r + as_uit + pijl_lengte, pijl_breedte
    # de lijnen lopen een eenheid in de pijltjes, zodat er geen haarlijn tussen komt
    t.recht(cx + ybuiten, cy - h, cx + v + 1, cy + h)
    t.recht(cx - v, cy - h, cx - ybuiten, cy + h)
    t.recht(cx - h, cy - v - 1, cx + h, cy - ybuiten)
    t.recht(cx - h, cy + ybuiten, cx + h, cy + v)
    t.poly((cx + v, cy - w), (cx + p, cy), (cx + v, cy + w))
    t.poly((cx - w, cy - v), (cx, cy - p), (cx + w, cy - v))
    return x + 2 * r


def letter_m(t, x):
    s, ra = KLEIN_DIK, BOOG_R
    x1, x2, x3 = x + s / 2, x + s / 2 + 2 * ra, x + s / 2 + 4 * ra
    ya = KLEIN_TOP - 2 + s / 2 + ra
    ru, ri = ra + s / 2, ra - s / 2
    t.recht(x, KLEIN_TOP, x + s, B)
    k = 0.5523  # kwartcirkels als bezierkrommen: begin en einde sluiten exact aan op de stammen
    for links, rechts in ((x1, x2), (x2, x3)):
        c = (links + rechts) / 2
        t.paden.append(
            f"M{c - ru:.2f},{ya:.2f}C{c - ru:.2f},{ya - k * ru:.2f} {c - k * ru:.2f},{ya - ru:.2f} {c:.2f},{ya - ru:.2f}"
            f"C{c + k * ru:.2f},{ya - ru:.2f} {c + ru:.2f},{ya - k * ru:.2f} {c + ru:.2f},{ya:.2f}H{c + ri:.2f}"
            f"C{c + ri:.2f},{ya - k * ri:.2f} {c + k * ri:.2f},{ya - ri:.2f} {c:.2f},{ya - ri:.2f}"
            f"C{c - k * ri:.2f},{ya - ri:.2f} {c - ri:.2f},{ya - k * ri:.2f} {c - ri:.2f},{ya:.2f}Z")
    # de stammen lopen een eenheid in de bogen, zodat er geen naad te zien is
    t.recht(x2 - s / 2, ya - 1, x2 + s / 2, B)
    t.recht(x3 - s / 2, ya - 1, x3 + s / 2, B)
    t.pts += [(x, KLEIN_TOP - 2), (x3 + s / 2, B)]
    return x3 + s / 2


def letter_a(t, x):
    t.ring(x + KLEIN_R - 1, KLEIN_MIDDEN, KLEIN_R, KLEIN_R - KLEIN_DIK)
    t.recht(x + 2 * KLEIN_R - KLEIN_DIK, KLEIN_TOP, x + 2 * KLEIN_R, B)
    return x + 2 * KLEIN_R


def letter_t(t, x):
    """De t: een rechte stam met een dwarsbalk op x-hoogte, even dik als de andere lijnen."""
    s = KLEIN_DIK
    m = x + T_BREED / 2
    t.recht(m - s / 2, T_TOP, m + s / 2, B)
    t.recht(x, KLEIN_TOP, x + T_BREED, KLEIN_TOP + s)
    return x + T_BREED


def letter_h(t, x):
    """De h: een hoge stam en dezelfde boog als in de m."""
    s, ra = KLEIN_DIK, BOOG_R
    x1, x2 = x + s / 2, x + s / 2 + 2 * ra
    ya = KLEIN_TOP - 2 + s / 2 + ra
    ru, ri = ra + s / 2, ra - s / 2
    k = 0.5523
    t.recht(x, 0, x + s, B)
    c = (x1 + x2) / 2
    t.paden.append(
        f"M{c - ru:.2f},{ya:.2f}C{c - ru:.2f},{ya - k * ru:.2f} {c - k * ru:.2f},{ya - ru:.2f} {c:.2f},{ya - ru:.2f}"
        f"C{c + k * ru:.2f},{ya - ru:.2f} {c + ru:.2f},{ya - k * ru:.2f} {c + ru:.2f},{ya:.2f}H{c + ri:.2f}"
        f"C{c + ri:.2f},{ya - k * ri:.2f} {c + k * ri:.2f},{ya - ri:.2f} {c:.2f},{ya - ri:.2f}"
        f"C{c - k * ri:.2f},{ya - ri:.2f} {c - ri:.2f},{ya - k * ri:.2f} {c - ri:.2f},{ya:.2f}Z")
    t.recht(x2 - s / 2, ya - 1, x2 + s / 2, B)
    t.pts += [(x, 0), (x2 + s / 2, B)]
    return x2 + s / 2


def teken():
    t = Tekening()
    x = 0.0
    for letter, ruimte in zip((letter_A, letter_x, letter_i, letter_o, letter_m, letter_a, letter_t, letter_h), RUIMTE + (0.0,)):
        x = letter(t, x) + ruimte
    return t


def icoon():
    """Het icoon (favicon): enkel de O met de assen, wit op een tegel in inkt, zodat het op een lichte
    en een donkere tabbalk even goed te zien is. De assen lopen tot net binnen de rand van de tegel."""
    t = Tekening()
    # dikkere assen en grotere pijltjes dan in het woordmerk: op 16 px moeten ze nog te zien zijn
    as_uit, pijl_lengte = 14.0, 22.0
    letter_o(t, -KLEIN_R, spleet=13.0, as_uit=as_uit, pijl_lengte=pijl_lengte, pijl_breedte=15.0)  # middelpunt in (0, KLEIN_MIDDEN)
    vormen = "\n".join(f'<path d="{d}"/>' for d in t.paden)
    z = KLEIN_R + as_uit + pijl_lengte + 8  # halve breedte van de tegel
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{-z:.2f} {KLEIN_MIDDEN - z:.2f} {2 * z:.2f} {2 * z:.2f}" '
            f'role="img" aria-label="Axiomath">\n<title>Axiomath</title>\n'
            f'<rect x="{-z:.2f}" y="{KLEIN_MIDDEN - z:.2f}" width="{2 * z:.2f}" height="{2 * z:.2f}" rx="{0.22 * z:.2f}" fill="{INKT}"/>\n'
            f'<g fill="{WIT}" fill-rule="evenodd">\n{vormen}\n</g>\n</svg>\n')


def main():
    svg = icoon()
    (MAP / "axiomath-icoon.svg").write_text(svg, encoding="utf-8")
    doc = pymupdf.open(stream=svg.encode(), filetype="svg")
    z = 512 / doc[0].rect.width
    doc[0].get_pixmap(matrix=pymupdf.Matrix(z, z), alpha=True).save(MAP / "axiomath-icoon.png")
    t = teken()
    for achtervoegsel, kleur in (("", INKT), ("-wit", WIT)):
        svg = t.svg(kleur)
        naam = f"axiomath-logo{achtervoegsel}"
        (MAP / f"{naam}.svg").write_text(svg, encoding="utf-8")
        doc = pymupdf.open(stream=svg.encode(), filetype="svg")
        (MAP / f"{naam}.pdf").write_bytes(doc.convert_to_pdf())
        z = 2400 / doc[0].rect.width
        doc[0].get_pixmap(matrix=pymupdf.Matrix(z, z), alpha=True).save(MAP / f"{naam}.png")


if __name__ == "__main__":
    main()
