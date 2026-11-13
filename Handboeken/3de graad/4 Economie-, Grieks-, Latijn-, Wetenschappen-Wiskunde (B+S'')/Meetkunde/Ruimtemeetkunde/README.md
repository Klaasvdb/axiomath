# Ruimtemeetkunde: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 5-8, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Vectoren in de ruimte | `hoofdstukken/01-vectoren.tex` | LPD 5-8 | eerste versie, nog na te lezen |
| 2. Rechten en vlakken | `hoofdstukken/02-rechten-vlakken.tex` | LPD 5-8 | eerste versie, nog na te lezen |
| 3. Onderlinge ligging | `hoofdstukken/03-ligging.tex` | LPD 5-8 | eerste versie, nog na te lezen |
| 4. Hoeken en afstanden | `hoofdstukken/04-scalair-product.tex` | LPD 5-8 | eerste versie, nog na te lezen |

De verdeling van de leerstof over de afzonderlijke doelen 5 tot 8 is nog na te kijken met de leerplantekst.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Ruimtemeetkunde-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Ruimtemeetkunde-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Ruimtemeetkunde-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Ruimtemeetkunde-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Ruimtemeetkunde-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Meetkunde/Ruimtemeetkunde"
```

## Afbakening

- **Hoofdstuk 1:** coördinaten in de ruimte, afstand en midden, vectoren, norm, collineaire en coplanaire vectoren.
- **Hoofdstuk 2:** vector- en parametervergelijkingen van rechten en vlakken, cartesiaanse vergelijking van een vlak (ook de asafsnedenvergelijking), een rechte als snijlijn van twee vlakken.
- **Hoofdstuk 3:** onderlinge ligging van twee rechten (ook kruisend), van een rechte en een vlak, van twee en drie vlakken (stelsels, zoals in Matrices).
- **Hoofdstuk 4:** scalair product met bewijs via de cosinusregel, hoeken, normaalvector, loodrechte stand, afstand van een punt tot een vlak (met bewijs, en een tweede bewijs als opdracht) en tot een rechte.
- Het vectorieel product staat er niet in.

## Figuren

De ruimtelijke figuren gebruiken de TikZ-stijl `ruimte` (schuine projectie: $x$ schuin naar voren, $y$ naar rechts, $z$ omhoog) en `\assendrie{lengte}` voor de assen, beide in `notatie.tex`.

## Eigen macro's

`\vc{a}{b}{c}` (kolomvector), `\vcr{a}{b}{c}` (vector op één regel), `\norm`, `\R`; zoals in Integralen `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`.

## Controle

Alle afstanden, hoeken, vergelijkingen, snijpunten en stelsels zijn nagerekend met Python (NumPy). Bewijzen en uitlegvragen zijn nagelezen, niet machinaal gecontroleerd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
