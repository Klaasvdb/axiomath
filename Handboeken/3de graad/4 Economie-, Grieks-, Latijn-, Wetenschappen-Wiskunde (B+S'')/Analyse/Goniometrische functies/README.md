# Goniometrische functies: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 18-23, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De eenheidscirkel | `hoofdstukken/01-eenheidscirkel.tex` | LPD 18-23 | eerste versie, nog na te lezen |
| 2. Goniometrische formules | `hoofdstukken/02-formules.tex` | LPD 18-23 | eerste versie, nog na te lezen |
| 3. Goniometrische functies | `hoofdstukken/03-grafieken.tex` | LPD 18-23 | eerste versie, nog na te lezen |
| 4. Goniometrische vergelijkingen | `hoofdstukken/04-vergelijkingen.tex` | LPD 18-23 | eerste versie, nog na te lezen |

De verdeling van de leerstof over de afzonderlijke doelen 18 tot 23 is nog na te kijken met de leerplantekst.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Goniometrische-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Goniometrische-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Goniometrische-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Goniometrische-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Goniometrische-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Analyse/Goniometrische functies"
```

## Afbakening

- **Hoofdstuk 1:** radialen, booglengte en sectoroppervlakte, sinus en cosinus op de eenheidscirkel, grondformule, bijzondere waarden, verwante hoeken.
- **Hoofdstuk 2:** som- en verschilformules (met bewijs via een afstand op de eenheidscirkel), verdubbelingsformules, formules van Carnot, $a\sin x + b\cos x$ samenvoegen tot één sinus.
- **Hoofdstuk 3:** grafieken van $\sin$, $\cos$ en $\tan$ met periode en nulwaarden, de algemene sinusfunctie $a\sin\bigl(b(x - c)\bigr) + d$ (schetsen met vijf punten, voorschrift uit top en dal), modellen (daglengte, getijden, veer, wisselspanning, reuzenrad).
- **Hoofdstuk 4:** $\bgsin$, $\bgcos$, $\bgtan$, elementaire vergelijkingen met algemene oplossing, herleidbare vergelijkingen (substitutie, ontbinden, samenvoegen), vergelijkingen en ongelijkheden in een context.
- Formules van Simpson (som naar product) staan er niet in. Afgeleiden van goniometrische functies horen bij Limieten en afgeleiden.

## Eigen macro's

Zoals in Algemene functies (`\R`, `\dom`, `\ber`, `\inv`, `\kromme`, `\rooster`, ...); daarnaast `\bgsin`, `\bgcos`, `\bgtan`, `\Z` en `\eenheidscirkel` (assen en cirkel met straal 1).

## Controle

Exacte waarden, formules en identiteiten zijn nagerekend met SymPy; de oplossingen van de vergelijkingen ook, en numeriek gecontroleerd door invullen (SymPy's `solveset` mist oplossingen bij sommige kwadratische vergelijkingen in $\sin x$, daarom ook numeriek). De modellen zijn nagerekend met Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
