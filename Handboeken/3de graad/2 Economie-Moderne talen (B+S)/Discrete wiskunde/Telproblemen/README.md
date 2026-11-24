# Telproblemen: handboek (pakket 2)

Cursus voor pakket 2 (B+S). **Het KOV-leerplan van dit pakket vraagt geen telproblemen**; het boek dient vooral voor GO! (zie "Voor welke koepel" hieronder, de [README van het pakket](../../README.md) en [Ontwerp/koepels.md](../../../../../Ontwerp/koepels.md)). Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Leerplan KOV:** Wiskunde B+S, III-WisS-d (versie oktober 2024). Het leerplan heeft geen doel over telproblemen, het binomium van Newton of de driehoek van Pascal, ook geen keuzedoel of extra. Het overzicht van de vier leerplannen van de 3de graad noemt telproblemen alleen bij B+S''. Bij Kansrekenen (LPD 29) vraagt een wenk uitdrukkelijk eenvoudige kansberekeningen zonder combinaties of variaties; telproblemen komen alleen voor als samenhang met de 2de graad (tellen met boom- en venndiagrammen). Ook de onderzoekscompetentie (LPD 35) noemt ze niet bij de specifieke inhouden. Het leerplan geeft geen lestijden per rubriek (het hele leerplan is gericht op 7 graaduren). De inhoud blijft daarom zoals hij voor GO! is gemaakt (PR #47); alleen de leerkrachtennota's en deze README zeggen nu juist voor wie het boek is.

## Voor welke koepel

Volgens [Handboeken/koepels.yaml](<../../../../koepels.yaml>) en [Ontwerp/koepels.md](../../../../../Ontwerp/koepels.md):

| Koepel | Richtingen | Doel |
|---|---|---|
| GO! | Economie-Moderne talen en de andere economische richtingen | telproblemen uit de cluster Statistiek (WD 06.01), die GO! als GO!-doelen toevoegt aan Uitgebreide wiskunde in functie van economie (WD 06.05) |
| GO! | Humane wetenschappen, Freinetpedagogie, Grieks-Latijn | idem (WD 06.01, bij Grieks-Latijn als GO!-doelen) |
| GO! | Welzijnswetenschappen, Latijn-Moderne talen, Moderne talen, Taal- en communicatiewetenschappen | alleen combinaties (Pakket uit statistiek, WD 06.02, als GO!-doel): hoofdstuk 2, met hoofdstuk 1 als basis |
| KOV | Humane wetenschappen, Freinetpedagogie | Statistiek (III-Sta-d) bovenop Basis; niet nagekeken tegen de leerplantekst |
| POV | Humane wetenschappen, Freinetpedagogie | cluster 06.01 Statistiek (SV06) |
| KOV, POV | Economie-Moderne talen e.a. (B+S) | niet: III-WisS-d en de cluster 06.05 hebben geen telproblemen |

## Bron en hoofdstukken

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Telproblemen/](<../../../cursussen/Telproblemen/README.md>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` en `pakketten:` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Lichtere versie** van [Telproblemen voor pakket 4](<../../../4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Discrete wiskunde/Telproblemen/README.md>), dat voor 6 uur wiskunde geschreven is: dezelfde drie hoofdstukken en dezelfde kern, met minder bewijzen, minder uitbreidingen en minder zware opdrachten. Wat wegvalt, staat in de tabel "Verschillen per pakket" in de [README van de bron](<../../../cursussen/Telproblemen/README.md>).

| Hoofdstuk | Bestand | Doel (GO!) | Status |
|---|---|---|---|
| 1. Tellen | `hoofdstukken/01-tellen.tex` | WD 06.01: telproblemen (met volgorde) | eerste versie, nog na te lezen |
| 2. Combinaties | `hoofdstukken/02-combinaties.tex` | WD 06.01: telproblemen (zonder volgorde), driehoek van Pascal; WD 06.02 (GO!-doel): combinaties | eerste versie, nog na te lezen |
| 3. Het binomium van Newton | `hoofdstukken/03-binomium.tex` | WD 06.01: opstap naar de binomiale verdeling | eerste versie, nog na te lezen |

**Leerkrachtennota's** (24 nov 2026, na de afstemming van Kansrekenen en Statistiek op KOV): hoofdstuk 1 zegt nu dat III-WisS-d geen telproblemen heeft (overzicht van de leerplannen, wenk bij LPD 29) en voor welke koepels en richtingen het boek dient; hoofdstuk 2 en 3 noemen het GO!-cluster (WD 06.01, voor hoofdstuk 2 ook WD 06.02). De verwijzingen naar combinaties en de binomiale verdeling in Kansrekenen wijzen nu naar het handboek Kansrekenen van pakket 4, want dat van pakket 2 volgt KOV (LPD 29) en heeft die hoofdstukken niet meer. De Koppel-nota's van hoofdstuk 2 en 3 spreken van "de oefening": in dit pakket staat er telkens maar één. De inhoud, de oefeningen en de aantallen zijn niet veranderd: 47 pagina's (handboek), 50 (leerkrachtenversie), zoals voordien.

## Maken

```
python Opmaak/maak-pdf.py "2/Discrete wiskunde/Telproblemen"
```

## Na te kijken

- **De afbakening voor GO!**: er is geen leerplantekst van GO! in de repo. Of WD 06.01 het binomium van Newton, combinaties met herhaling, permutaties met herhaling en het sommatieteken vraagt, is niet nagekeken. Zie ook "Na te kijken" in de README van de bron.
- **KOV Statistiek (III-Sta-d)** voor Humane wetenschappen en Freinetpedagogie verwijst in `koepels.yaml` naar dit boek. De tekst van III-Sta-d is niet in de repo; welke telproblemen het vraagt (en of het binomium erbij hoort), is niet nagekeken.
- **De binomiale verdeling.** Hoofdstuk 3 is een opstap naar de binomiale verdeling, die GO! in WD 06.01 vraagt. Het handboek Kansrekenen van pakket 2 heeft ze sinds de afstemming op KOV niet meer (alleen pakket 4, hoofdstuk 3 en 4). In `koepels.yaml` zou bij GO! (economie, Humane, Grieks-Latijn) "4/Data en onzekerheid/Kansrekenen, hoofdstuk 3 en 4" als extra moeten komen.
- **Combinaties voor de GO!-talenrichtingen en Welzijnswetenschappen.** `koepels.yaml` noemt "2/Discrete wiskunde/Telproblemen, combinaties". Hoofdstuk 2 steunt op hoofdstuk 1 (variaties, faculteiten): beter "hoofdstuk 1 en 2".
- **De voorkant** is die van KOV (Economie-Moderne talen, uren van pakket 2), zoals bij alle handboeken, terwijl KOV dit boek in die richting niet gebruikt. De website zet er bij GO! de voorkant van GO! op; voor KOV Humane wetenschappen zou de voorkant van dat profiel passen.

## Controle

De wiskunde is dezelfde als in pakket 4 en daar nagerekend (Python, SymPy); het nieuwe voorbeeld met $(x^2 - 3)^5$ is nagerekend met SymPy. Na het aanpassen van de leerkrachtennota's (24 nov 2026) gebouwd zonder ongedefinieerde verwijzingen, zonder ?? in de PDF's en zonder overvolle regels boven 2 pt; in `gen/` veranderden alleen de nota's, en de `gen/` van pakket 4 is identiek aan die van voordien. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
