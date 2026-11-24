# Telproblemen: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), **alleen voor GO!**: het KOV-leerplan van dit pakket vraagt geen telproblemen, en POV ook niet (zie "Voor welke koepel" hieronder, de [README van het pakket](../../README.md) en [Ontwerp/koepels.md](../../../../../Ontwerp/koepels.md)). Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Leerplan KOV:** Wiskunde B+S', III-WisS'-d (versie oktober 2024). Het leerplan heeft geen doel over telproblemen, het binomium van Newton of de driehoek van Pascal, ook geen keuzedoel of extra. Het overzicht van de vier leerplannen van de 3de graad noemt telproblemen alleen bij B+S''. Bij Kansrekenen (LPD 35) vraagt een wenk uitdrukkelijk eenvoudige kansberekeningen zonder combinaties of variaties; telproblemen komen alleen voor als samenhang met de 2de graad (tellen met boom- en venndiagrammen). Ook de onderzoekscompetentie (LPD 41) noemt ze niet bij de specifieke inhouden, en de samenhang met Natuurwetenschappen (de wetenschappelijke toepassingen van B+S') noemt ze evenmin. Het leerplan geeft geen lestijden per rubriek (het hele leerplan is gericht op 8 graaduren). De inhoud blijft daarom zoals hij voor GO! is gemaakt (PR #47); alleen de leerkrachtennota's en deze README zeggen nu juist voor wie het boek is.

## Voor welke koepel

Volgens [Handboeken/koepels.yaml](<../../../../koepels.yaml>) en [Ontwerp/koepels.md](../../../../../Ontwerp/koepels.md):

| Koepel | Richtingen | Doel |
|---|---|---|
| GO! | Latijn-Wetenschappen, Moderne talen-Wetenschappen, Sportwetenschappen en de andere richtingen met cluster 06.04 | telproblemen met het binomium van Newton, een GO!-doel bij Uitgebreide wiskunde in functie van wetenschappen (WD 06.04) |
| KOV | dezelfde richtingen | niet: III-WisS'-d heeft geen telproblemen |
| POV | dezelfde richtingen | niet: de cluster 06.04 van het decreet heeft geen telproblemen |

## Bron en hoofdstukken

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Telproblemen/](<../../../cursussen/Telproblemen/README.md>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` en `pakketten:` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Lichtere versie** van [Telproblemen voor pakket 4](<../../../4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Discrete wiskunde/Telproblemen/README.md>), dat voor 6 uur wiskunde geschreven is: dezelfde drie hoofdstukken en dezelfde kern, met minder bewijzen, minder uitbreidingen en minder zware opdrachten. Wat wegvalt, staat in de tabel "Verschillen per pakket" in de [README van de bron](<../../../cursussen/Telproblemen/README.md>).

| Hoofdstuk | Bestand | Doel (GO!) | Status |
|---|---|---|---|
| 1. Tellen | `hoofdstukken/01-tellen.tex` | WD 06.04 (GO!-doel): telproblemen (met volgorde) | eerste versie, nog na te lezen |
| 2. Combinaties | `hoofdstukken/02-combinaties.tex` | WD 06.04 (GO!-doel): telproblemen (zonder volgorde), driehoek van Pascal | eerste versie, nog na te lezen |
| 3. Het binomium van Newton | `hoofdstukken/03-binomium.tex` | WD 06.04 (GO!-doel): binomium van Newton | eerste versie, nog na te lezen |

**Leerkrachtennota's** (24 nov 2026, na de afstemming van Kansrekenen en Statistiek op KOV): hoofdstuk 1 zegt nu dat III-WisS'-d geen telproblemen heeft (overzicht van de leerplannen, wenk bij LPD 35), dat POV ze ook niet heeft, en dat het boek voor GO! (WD 06.04) is; hoofdstuk 2 en 3 noemen dat GO!-doel. De verwijzingen naar combinaties en de binomiale verdeling in Kansrekenen wijzen nu naar het handboek Kansrekenen van pakket 4, want dat van pakket 3 volgt KOV (LPD 35) en heeft die hoofdstukken niet meer. De Koppel-nota van hoofdstuk 2 spreekt van "de oefening": in dit pakket staat er maar één. De inhoud, de oefeningen en de aantallen zijn niet veranderd: 47 pagina's (handboek), 50 (leerkrachtenversie), zoals voordien.

## Maken

```
python Opmaak/maak-pdf.py "3/Discrete wiskunde/Telproblemen"
```

## Na te kijken

- **De afbakening voor GO!**: er is geen leerplantekst van GO! in de repo. Of het GO!-doel bij WD 06.04 ook combinaties met herhaling, permutaties met herhaling en het sommatieteken vraagt, is niet nagekeken. Zie ook "Na te kijken" in de README van de bron.
- **De binomiale verdeling** is bij GO! ook een GO!-doel bij WD 06.04. Het handboek Kansrekenen van pakket 3 heeft ze sinds de afstemming op KOV niet meer (alleen pakket 4, hoofdstuk 3 en 4). In `koepels.yaml` zou bij GO! (wetenschappen) "4/Data en onzekerheid/Kansrekenen, hoofdstuk 3 en 4" als extra moeten komen.
- **De voorkant** is die van KOV (richtingen en uren van pakket 3), zoals bij alle handboeken, terwijl KOV dit boek niet gebruikt. De website zet er bij GO! de voorkant van GO! op.

## Controle

De wiskunde is dezelfde als in pakket 4 en daar nagerekend (Python, SymPy); het nieuwe voorbeeld met $(x^2 - 3)^5$ is nagerekend met SymPy. Na het aanpassen van de leerkrachtennota's (24 nov 2026) gebouwd zonder ongedefinieerde verwijzingen, zonder ?? in de PDF's en zonder overvolle regels boven 2 pt; in `gen/` veranderden alleen de nota's, en de `gen/` van pakket 4 is identiek aan die van voordien. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
