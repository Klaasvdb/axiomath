# Matrices: handboek (pakket 2)

Cursus voor pakket 2 (B+S), LPD 25-27, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van de versie voor pakket 3 (PR #19), die zelf van pakket 4 (PR #2) komt: dezelfde vier hoofdstukken, met de prenten en hun herkomst. Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met matrices | `hoofdstukken/01-rekenen-met-matrices.tex` | LPD 25-27 | eerste versie, nog na te lezen |
| 2. Stelsels en de methode van Gauss-Jordan | `hoofdstukken/02-stelsels.tex` | LPD 25-27 | eerste versie, nog na te lezen |
| 3. Inverse, determinant en rang | `hoofdstukken/03-inverse-determinant-rang.tex` | LPD 25-27 | eerste versie, nog na te lezen |
| 4. Matrixmodellen | `hoofdstukken/04-matrixmodellen.tex` | LPD 25-27 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Matrices-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Matrices-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Matrices-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Matrices-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Matrices-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Algebra/Matrices"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
