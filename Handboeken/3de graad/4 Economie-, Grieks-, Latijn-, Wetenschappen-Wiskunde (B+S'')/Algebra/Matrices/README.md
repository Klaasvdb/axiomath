# Matrices (pakket 4, B+S''): handboek

Cursus voor pakket 4 (Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde), leerplandoelen 34-37, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De voorkant (Mondriaan) komt uit `Ontwerp/voorkanten/`: pas ze daar aan. De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met matrices | `hoofdstukken/01-rekenen-met-matrices.tex` | LPD 34 | eerste versie, nog na te lezen |
| 2. Stelsels en de methode van Gauss-Jordan | `hoofdstukken/02-stelsels.tex` | LPD 37 | eerste versie, nog na te lezen |
| 3. Inverse, determinant en rang | `hoofdstukken/03-inverse-determinant-rang.tex` | LPD 36 | eerste versie, nog na te lezen |
| 4. Matrixmodellen | `hoofdstukken/04-matrixmodellen.tex` | LPD 35 | eerste versie, nog na te lezen |

## Herkomst

Hoofdstuk 1 en 4 zijn de twee hoofdstukken van [Matrices in pakket 1](<../../../1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Algebra/Matrices/README.md>), met dezelfde oefeningen (in hoofdstuk 4 met nieuwe nummers `h4-`). Aangepast: de leerplanverwijzingen, de verwijzingen tussen hoofdstukken, en het evenwicht bij drie toestanden in hoofdstuk 4, dat nu exact berekend wordt met Gauss-Jordan in plaats van alleen met een hoge macht. Hoofdstuk 2 en 3 zijn nieuw. Een verbetering in hoofdstuk 1 of 4 moet dus ook in pakket 1 gebeuren.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Matrices-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Matrices-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Matrices-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Matrices-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Matrices-zelfstudie.pdf)

## Maken

Vanuit de hoofdmap van de repo:

```
python Opmaak/maak-pdf.py 4/Algebra/Matrices                  alles: handboek, oplossingen, leerkracht, zelfstudie
python Opmaak/maak-pdf.py 4/Algebra/Matrices --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

## Afbakening

- **Volgorde:** stelsels (LPD 37) komen voor de inverse (LPD 36), omdat de inverse en de rang met rijherleiden berekend worden. Matrixmodellen (LPD 35) staan achteraan, zodat het evenwicht met een stelsel kan.
- **Hoofdstuk 2:** uitgebreide matrix, elementaire rijbewerkingen (met bewijs dat ze de oplossingen niet veranderen), rijgereduceerde vorm (uniciteit niet bewezen), bepaald, onbepaald en strijdig, stelsels met één parameter. Minstens een stelsel met drie onbekenden, zoals het leerplan vraagt; ook één met vier onbekenden als opdracht.
- **Hoofdstuk 3:** inverse (uniek, met bewijs), matrixvergelijkingen, inverse met $[A \,|\, I]$, determinant van een $2 \times 2$-matrix (via de inverse, met bewijs) en van een $3 \times 3$-matrix (ontwikkelen en Sarrus), eigenschappen van de determinant (elk apart, bewezen voor $2 \times 2$ en $3 \times 3$), de regel van Cramer, de rang en het verband tussen rang, determinant, inverse en stelsels.
- **Niet opgenomen:** determinanten van $4 \times 4$-matrices met de hand, de adjunctmatrix in het algemeen.
- **Rekentoestel:** de leerkrachtenversie noemt `rref(` op de TI-84.

## Eigen macro's

Zoals in pakket 1 (`\tr`, `\km`, `mat`, `knoop`, `boog`, `getallen`, `\markeer`, ...), plus `\um{kolommen}{...}` voor een uitgebreide matrix met een streep, `\rb{...}` voor een rijbewerking naast een matrix, en `\R`.

## Controle

De uitkomsten van hoofdstuk 2 en 3 (stelsels, inversen, determinanten, rangen) zijn nagerekend met SymPy, ook de tussenstappen van de uitgewerkte rijherleidingen die in de voorbeelden staan. Hoofdstuk 1 en 4 zijn nagerekend in pakket 1 (numpy); het nieuwe evenwicht in hoofdstuk 4 met SymPy. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
