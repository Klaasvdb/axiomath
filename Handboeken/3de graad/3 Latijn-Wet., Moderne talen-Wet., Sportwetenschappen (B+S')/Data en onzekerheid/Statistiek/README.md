# Statistiek: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 36-40, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van de versie voor pakket 4 (PR #5): dezelfde vier hoofdstukken. De LPD-nummers zijn omgerekend (pakket 4 LPD 50-54 naar pakket 3 LPD 36-40, in de veronderstelling dat ze één op één overeenkomen). Hoofdstuk 4 hoort in pakket 4 bij keuzedoel K1; of het in pakket 3 aan bod komt, is na te kijken. Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Steekproeven en samenhang | `hoofdstukken/01-steekproeven.tex` | LPD 36-40 | eerste versie, nog na te lezen |
| 2. De normale verdeling | `hoofdstukken/02-normale-verdeling.tex` | LPD 36-40 | eerste versie, nog na te lezen |
| 3. Hypothesetoetsen | `hoofdstukken/03-hypothesetoetsen.tex` | LPD 36-40 | eerste versie, nog na te lezen |
| 4. Betrouwbaarheidsintervallen | `hoofdstukken/04-betrouwbaarheidsintervallen.tex` | LPD 36-40 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Data en onzekerheid/Statistiek"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
