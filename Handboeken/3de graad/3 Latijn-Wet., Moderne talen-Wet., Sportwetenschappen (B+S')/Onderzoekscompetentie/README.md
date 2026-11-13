# Onderzoekscompetentie: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 41, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van de versie voor pakket 4 (PR #13): dezelfde drie hoofdstukken (van vraag tot onderzoek, modelleren met data, rapporteren). Verwijzingen naar Telproblemen en Logica en bewijzen (niet in pakket 3) zijn vervangen door een korte uitleg ter plaatse. Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Van vraag tot onderzoek | `hoofdstukken/01-onderzoeksvraag.tex` | LPD 41 | eerste versie, nog na te lezen |
| 2. Modelleren met data | `hoofdstukken/02-modelleren.tex` | LPD 41 | eerste versie, nog na te lezen |
| 3. Rapporteren | `hoofdstukken/03-rapporteren.tex` | LPD 41 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Onderzoekscompetentie-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Onderzoekscompetentie-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Onderzoekscompetentie-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Onderzoekscompetentie-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Onderzoekscompetentie-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Onderzoekscompetentie"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
