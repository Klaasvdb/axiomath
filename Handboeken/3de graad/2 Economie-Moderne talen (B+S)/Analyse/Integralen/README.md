# Integralen: handboek (pakket 2)

Cursus voor pakket 2 (B+S), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Integralen/](<../../../cursussen/Integralen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)) of in `pakketten:` in de YAML. Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S, III-WisS-d (versie oktober 2024), rubriek Analyse, deelrubriek Integralen: LPD 22 (de bepaalde integraal als limiet van een som en als georiënteerde oppervlakte; contexten afstand, snelheid, arbeid, en de Lorenzcurve met de Gini-coëfficiënt; extra: volume van een omwentelingslichaam en booglengte aangeven, eventueel met ICT), LPD 23 (verband met primitieve functies; wenk en extra met de oppervlakte van een trapezium bij een eerstegraadsfunctie) en LPD 24 (bepaalde en onbepaalde integralen van **veeltermfuncties**, ook voor oppervlaktes; extra: substitutie voor een macht van een eerstegraadsfunctie). Verder LPD 3 (ICT) en LPD 4 (bewijsvoering is een extra). Het leerplan geeft geen lestijden per rubriek.

**Afgestemd op B+S** (24 nov 2026). De versie kwam via pakket 3 (PR #24) van Klaas' versie voor pakket 4. Omdat B+S alleen veeltermfuncties laat integreren, valt het hoofdstuk Integratiemethoden weg (`handboek.tex` kiest de bronhoofdstukken 1, 2 en 4, als hoofdstuk 1, 2 en 3). De onbepaalde integraal en de macht van een eerstegraadsfunctie staan nu op het einde van hoofdstuk 2. Pakket 1 en 4 zijn ongewijzigd; de tekst van pakket 4 is niet veranderd.

| Hoofdstuk | Bronbestand | Leerplan | Status |
|---|---|---|---|
| 1. De bepaalde integraal | `hoofdstukken/01-bepaalde-integraal.tex` | LPD 22 | afgestemd op B+S, nog na te lezen |
| 2. Hoofdstelling en primitieve functies | `hoofdstukken/02-hoofdstelling.tex` | LPD 23, 24, wenk LPD 22 (Gini) | afgestemd op B+S, nog na te lezen |
| 3. Toepassingen van integralen | `hoofdstukken/04-toepassingen.tex` | wenken en extra bij LPD 22, LPD 24 | afgestemd op B+S, nog na te lezen |

## Verschillen met pakket 4

| Waar | In pakket 2 | Reden |
|---|---|---|
| Integratiemethoden (bron 03) | weg | LPD 24: alleen veeltermfuncties; substitutie, splitsing van breuken en partiële integratie vragen andere functies |
| 1, middelwaardestelling | bewijs weg; de redenering met de boot verklaart ze | LPD 4: bewijsvoering is een extra |
| 1, insluitstelling en continuïteit | in woorden (ingesloten tussen 0 en $B_n - O_n$; een continue functie tekent zonder de pen op te heffen) | Limieten en continuïteit valt in Afgeleiden van pakket 2 weg |
| 1, korte oefening even en oneven | $x^2\sin x$ in plaats van $x\cos x$ | geen cosinus in B+S |
| 2, probleem en Terug naar het probleem | de oppervlakte onder $x^3$ op $[0, 2]$ in plaats van onder de sinusboog | geen primitieve van $\sin x$ in B+S |
| 2, hoofdstelling deel 1 | bewijs weg; verklaard met de strook en de Verken (trapezium bij $t + 1$) | LPD 4 (extra); wenk en extra bij LPD 23 |
| 2, basisprimitieven | alleen $x^n$; tabel, uitleg over $\ln\lvert x\rvert$ en $\bgcos$, voorbeeld met elke regel en "Wanneer mag het niet?" weg | LPD 24 |
| 2, voorbeelden en korte oefeningen | eigen versies met veeltermen: `vb:h2-basis`, `vb:h2-lin`, `vb:h2-splits`, `vb:h2-terug`, `h2-start-1`, `h2-afgeleide`, `h2-basis`, `h2-lin` | LPD 24; geen cosinus en geen goniometrische afgeleiden |
| 2, Controleren met ICT | toegevoegd (GeoGebra, rekentoestel) | LPD 3 |
| 2, Inkomensongelijkheid | toegevoegd: Lorenzcurve, Gini-coëfficiënt, voorbeeld `vb:h2-gini`, korte oefening `h2-gini` | wenk en samenhang bij LPD 22 |
| 2, De onbepaalde integraal | toegevoegd als sectie 2.4: definitie, voorbeeld, marginale kosten van een bakkerij, macht van $ax + b$; `h2-onb`, `h2-sublin`, opdracht `h2-donb`, test `h2-t9` | LPD 24 en zijn extra |
| 2, opdrachten | eigen versie met veeltermen: `h2-dp`, `h2-d1`, `h2-d3`, `h2-o5`, `h2-o13`, `h2-o23`; weg: `h2-o2`, `h2-d2`, `h2-o10`, `h2-a2`, `h2-o27`, `h2-o29` | LPD 24; `h2-o27` vraagt de stelling van Lagrange |
| 2, Koppel en Test jezelf | `h2-koppel-3` (Rijen, met $\ln$) weg; `h2-t2` in eigen versie, `h2-t7` weg, `h2-t9` erbij | idem |
| 3 (bron 04), booglengte | bewijs weg (steunt op Lagrange), het idee in woorden; exact voorbeeld weg, numeriek met ICT blijft; `h4-boog` en `h4-t5` met ICT | extra bij LPD 22: aangeven, met ICT |
| 3, oneigenlijke integralen | weg, met `h4-oneindig`, `h4-o7`, `h4-o19`, `h4-o21`, `h4-o23`, `h4-o24`, `h4-machten`, `h4-o26`, `h4-t8` | niet in het leerplan |
| 3, opdrachten met sinus, $\e^x$ of $\frac{1}{x}$ | weg: `h4-o10`, `h4-o16`, `h4-o17`, `h4-o18`, `h4-o22`; `h4-o5` en `h4-start-1` in eigen versie | LPD 24 |
| 3, Koppel | alleen Statistiek, met een veeltermdichtheid (`h4-koppel-3`, versie voor pakket 2 en 3) | de oefeningen van pakket 4 vragen oneigenlijke integralen |
| Leerkrachtennota's | eigen versie per hoofdstuk met de LPD-nummers van III-WisS-d | |

Aantallen in pakket 2 (pakket 4 tussen haakjes):

| Hoofdstuk | Voorbeelden | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|---|
| 1. De bepaalde integraal | 17 (17) | 8 (8) | 31 (31) | 3 (3) | 8 (8) |
| 2. Hoofdstelling en primitieve functies | 15 (12) | 10 (7) | 21 (26) | 3 (4) | 6 (6) |
| 3. Toepassingen (bron 04) | 11 (17) | 7 (8) | 14 (26) | 1 (4) | 7 (8) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken). Het handboek telt 59 pagina's (was 86), de leerkrachtenversie 63 (was 93) en de zelfstudieversie 69 (was 98).

## Na te kijken

- **Limiet van een som in hoofdstuk 1.** De voorbeelden met de somformule voor kwadraten en de limiet voor $n \to +\infty$ blijven: ze zijn de kern van LPD 22. B+S vraagt alleen een informeel limietbegrip (Afgeleiden); wie het lichter wil, kan de limiet met een tabel (ICT) laten benaderen.
- **Bewijzen.** De lange bewijzen (middelwaardestelling, hoofdstelling deel 1, booglengte) zijn weg, zoals in Afgeleiden van dit pakket. De korte bewijzen van de lineariteit, van het verschil van twee primitieven en van deel 2 van de hoofdstelling bleven: ze zijn een paar regels algebra. Te bekijken of ze ook weg moeten.
- **Hoofdstelling met een samengestelde bovengrens en met de productregel** (`vb:h2-afgeleide`, `vb:h2-letters`, `h2-o5`) blijven; ze gaan verder dan LPD 23, maar gebruiken alleen de kettingregel en de productregel uit Afgeleiden.
- **Volume en booglengte.** Het leerplan vraagt ze alleen aan te geven (extra). De volumes van veeltermfuncties worden hier exact uitgerekend, zoals in pakket 4; booglengte numeriek.
- **Hoofdstuk 3 heeft maar één Koppel-oefening** (Statistiek).
- **Gini-coëfficiënt:** staat nu als leerstof in hoofdstuk 2 én als Koppel-oefening (`h2-koppel-1`, met andere landen).
- **ICT:** de tekst noemt GeoGebra (`Integraal`) en `fnInt`; het juiste menu hangt af van het rekentoestel.
- Nog niet nagelezen door een leerkracht.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Integralen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Integralen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Integralen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Integralen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Integralen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Analyse/Integralen"
```

## Controle

De gedeelde wiskunde is nagerekend in de bronversie (SymPy, NumPy); de nieuwe en gewijzigde opgaven, voorbeelden en antwoorden voor dit pakket zijn nagerekend met SymPy (primitieven door af te leiden, booglengtes numeriek). Na het afstemmen gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek en in de oplossingen; pakket 1 en 4 geven dezelfde `gen/`-bestanden als voor de aanpassing (Integralen staat niet in pakket 1). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
