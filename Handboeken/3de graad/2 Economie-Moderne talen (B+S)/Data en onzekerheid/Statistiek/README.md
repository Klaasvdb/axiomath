# Statistiek: handboek (pakket 2)

Cursus voor pakket 2 (B+S), LPD 30-34, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van de versie voor pakket 3 (PR #22), die zelf van pakket 4 (PR #5) komt: dezelfde vier hoofdstukken; LPD-nummers omgerekend naar 30-34. Hoofdstuk 4 hoort in pakket 4 bij keuzedoel K1; of het in pakket 2 aan bod komt, is na te kijken. Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Steekproeven en samenhang | `hoofdstukken/01-steekproeven.tex` | LPD 30-34 | eerste versie, nog na te lezen |
| 2. De normale verdeling | `hoofdstukken/02-normale-verdeling.tex` | LPD 30-34 | eerste versie, nog na te lezen |
| 3. Hypothesetoetsen | `hoofdstukken/03-hypothesetoetsen.tex` | LPD 30-34 | eerste versie, nog na te lezen |
| 4. Betrouwbaarheidsintervallen | `hoofdstukken/04-betrouwbaarheidsintervallen.tex` | LPD 30-34 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Statistiek-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Statistiek-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Statistiek-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Statistiek-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Statistiek-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Data en onzekerheid/Statistiek"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
