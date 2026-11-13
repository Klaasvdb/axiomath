# Goniometrische functies: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 13-17, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van de versie voor pakket 4 (PR #9): dezelfde vier hoofdstukken (eenheidscirkel, formules, grafieken, vergelijkingen). Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De eenheidscirkel | `hoofdstukken/01-eenheidscirkel.tex` | LPD 13-17 | eerste versie, nog na te lezen |
| 2. Goniometrische formules | `hoofdstukken/02-formules.tex` | LPD 13-17 | eerste versie, nog na te lezen |
| 3. Goniometrische functies | `hoofdstukken/03-grafieken.tex` | LPD 13-17 | eerste versie, nog na te lezen |
| 4. Goniometrische vergelijkingen | `hoofdstukken/04-vergelijkingen.tex` | LPD 13-17 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Analyse/Goniometrische functies"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
