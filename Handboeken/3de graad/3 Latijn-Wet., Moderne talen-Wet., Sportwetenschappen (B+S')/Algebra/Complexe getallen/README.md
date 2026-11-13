# Complexe getallen: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 29-33, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van de versie voor pakket 4 (PR #1): dezelfde vier hoofdstukken. De LPD-nummers in de leerkrachtennota's zijn omgerekend van pakket 4 (LPD 38-42) naar pakket 3 (LPD 29-33), in de veronderstelling dat de doelen één op één overeenkomen; dat is nog na te kijken. De prent en haar herkomst zijn mee gekopieerd. Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met complexe getallen | `hoofdstukken/01-rekenen-met-complexe-getallen.tex` | LPD 29-33 | eerste versie, nog na te lezen |
| 2. Vierkantswortels en vergelijkingen | `hoofdstukken/02-vierkantswortels-en-vergelijkingen.tex` | LPD 29-33 | eerste versie, nog na te lezen |
| 3. De goniometrische vorm | `hoofdstukken/03-goniometrische-vorm.tex` | LPD 29-33 | eerste versie, nog na te lezen |
| 4. Machten en wortels | `hoofdstukken/04-machten-en-wortels.tex` | LPD 29-33 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Algebra/Complexe getallen"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
