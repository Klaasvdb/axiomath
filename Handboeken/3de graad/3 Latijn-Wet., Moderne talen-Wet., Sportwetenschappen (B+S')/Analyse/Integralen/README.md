# Integralen: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 23-25, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van Klaas' eigen Integralen voor pakket 4 (op main): dezelfde vier hoofdstukken, met de prenten en hun herkomst. De LPD-nummers zijn omgerekend (pakket 4 LPD 31-33 naar pakket 3 LPD 23-25). De Koppel-opdrachten over Telproblemen en Ruimtemeetkunde (niet in pakket 3) zijn geschrapt en de nota erbij aangepast. Inhoudelijk niets gewijzigd: of je deze afgeleide versie wilt, is uiteraard jouw keuze. Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De bepaalde integraal | `hoofdstukken/01-bepaalde-integraal.tex` | LPD 23-25 | eerste versie, nog na te lezen |
| 2. Hoofdstelling en primitieve functies | `hoofdstukken/02-hoofdstelling.tex` | LPD 23-25 | eerste versie, nog na te lezen |
| 3. Integratiemethoden | `hoofdstukken/03-integratiemethoden.tex` | LPD 23-25 | eerste versie, nog na te lezen |
| 4. Toepassingen van integralen | `hoofdstukken/04-toepassingen.tex` | LPD 23-25 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Analyse/Integralen"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
