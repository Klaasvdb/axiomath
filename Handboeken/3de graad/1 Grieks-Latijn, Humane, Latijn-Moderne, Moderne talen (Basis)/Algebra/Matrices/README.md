# Matrices (pakket 1, Basis): handboek

Cursus voor pakket 1 (Grieks-Latijn, Humane wetenschappen, Latijn-Moderne talen, Moderne talen), keuzedoelen K3 en K4, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De voorkant (Mondriaan) komt uit `Ontwerp/voorkanten/`: pas ze daar aan. De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met matrices | `hoofdstukken/01-rekenen-met-matrices.tex` | K3 | eerste versie, nog na te lezen |
| 2. Matrixmodellen | `hoofdstukken/02-matrixmodellen.tex` | K4 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-zelfstudie.pdf)

## Maken

Vanuit de hoofdmap van de repo, in PowerShell:

```
py -3.13 -P Opmaak/maak-pdf.py 1/Algebra/Matrices                  alles: handboek, oplossingen, leerkracht, zelfstudie
py -3.13 -P Opmaak/maak-pdf.py 1/Algebra/Matrices --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

Zoals bij Integralen: de grafieken worden bewaard in `figuren-cache/`, LaTeX leest `gen/`, en de oefeningen (83) staan in `oefeningen/*.yaml`. Pas een opgave dus aan in de YAML.

## Afbakening

Het leerplan Basis heeft voor matrices alleen twee keuzedoelen: bewerkingen (optelling, scalaire vermenigvuldiging, product, machten, transpositie) en matrixmodellen voor evoluties. De formulering volgt het leerplan B+S' (LPD 26-27): kijk na of de wenken in het leerplan Basis dezelfde zijn.

- **Niet opgenomen:** stelsels (Gauss-Jordan), inverse, rang en determinant. Die staan niet in het leerplan Basis.
- **Bewijzen:** alleen eenvoudige, op het niveau van $2 \times 2$-matrices (optelling commutatief, eenheidsmatrix) en het tellen van wegen met $V^2$. Associativiteit en distributiviteit worden aangenomen.
- **Evenwicht:** algebraïsch alleen bij twee toestanden (één vergelijking). Bij drie toestanden met een hoge macht op het rekentoestel, zoals de wenken toelaten.
- **Afspraak:** in elke matrix van hoofdstuk 2 is de kolom het vertrek (van) en de rij de aankomst (naar), ook bij grafen. Zo werkt $X_{n+1} = MX_n$ met een kolom. Het boek zegt dat andere boeken het soms omgekeerd doen.
- **Rekentoestel:** de leerkrachtenversie noemt de toetsen van de TI-84. Pas aan als de school een ander toestel gebruikt.

## Eigen macro's

- `notatie.tex`: `\tr` (getransponeerde), `\km` (compacte matrix in tekst en antwoorden), `mat`, de TikZ-stijlen `knoop`, `boog`, `lus`, `kans` en `getallen` (matrix in TikZ, kolommen met `\&`), `\markeer` (rij of kolom kleuren) en `\staaf`. De integraalmacro's zijn weg.

## Controle

Alle uitkomsten van voorbeelden, oefeningen, Koppel en test zijn nagerekend met numpy (machten, evenwichten en groeifactoren ook numeriek). Uitlegvragen en bewijzen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
