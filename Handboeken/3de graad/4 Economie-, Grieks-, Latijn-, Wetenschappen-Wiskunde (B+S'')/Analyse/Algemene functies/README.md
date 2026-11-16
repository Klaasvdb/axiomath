# Algemene functies: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 9-11, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Functies en hun eigenschappen | `hoofdstukken/01-eigenschappen.tex` | LPD 9-11 | eerste versie, nog na te lezen |
| 2. Transformaties van grafieken | `hoofdstukken/02-transformaties.tex` | LPD 9-11 | eerste versie, nog na te lezen |
| 3. Samenstellen en inverse functies | `hoofdstukken/03-samenstellen-inverse.tex` | LPD 9-11 | eerste versie, nog na te lezen |

De verdeling van de leerstof over de afzonderlijke doelen 9, 10 en 11 is nog na te kijken met de leerplantekst.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Algemene-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Algemene-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Algemene-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Algemene-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Algemene-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Analyse/Algemene functies"
```

## Afbakening

- **Hoofdstuk 1:** functie, domein en bereik (berekenen en aflezen), nulwaarden en tekentabel (ook met een noemer), stijgen, dalen en extrema (aflezen, met een verlooptabel), even en oneven functies. Extrema worden afgelezen, niet berekend: afgeleiden komen in Limieten en afgeleiden.
- **Hoofdstuk 2:** vijf basisfuncties ($x^2$, $x^3$, $\sqrt{x}$, $|x|$, $\frac1x$), verschuiven, uitrekken, spiegelen, en combineren in de vorm $a \cdot f\bigl(b(x - c)\bigr) + d$; een voorschrift uit een grafiek halen.
- **Hoofdstuk 3:** samenstelling met domein, ontbinden (voorbereiding op de kettingregel), injectief, inverse functie met domein en bereik, spiegelen om $y = x$, domein beperken.
- Veeltermfuncties van hogere graad en rationale functies horen bij de cursus Rationale functies.

## Eigen macro's

`\R`, `\dom`, `\ber`, `\inv{f}`, `\tekentabel{kolommen}{x-rij}{f-rij}`, `\vol` en `\open` (vol en open bolletje), `\kromme`, `\rooster`, `\roosterleeg`; zoals in Integralen `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`.

## Controle

Domeinen, tekentabellen, extrema, inverses en samenstellingen zijn nagerekend met SymPy; de getallen in de contexten (doos, worp, Fahrenheit) ook. Bewijzen en uitlegvragen zijn nagelezen, niet machinaal gecontroleerd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
