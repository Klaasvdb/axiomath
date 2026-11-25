# Telproblemen: bron

Bron van het handboek Discrete wiskunde/Telproblemen van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (november 2026), nog na te lezen.

Niet te verwarren met de cursus Telproblemen van de 3de graad (`Handboeken/3de graad/cursussen/Telproblemen/`): die bouwt hierop verder met variaties, permutaties, combinaties en het binomium.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Boomdiagrammen en de productregel | `hoofdstukken/01-productregel.tex` | 1-5 |
| 2. Venndiagrammen, som- en complementregel | `hoofdstukken/02-somregel.tex` | 1-5 |

Hoofdstuk 1: systematisch tellen met een boomdiagram (ook een boom die niet overal even breed is), de productregel, kiezen met en zonder herhaling, alle volgordes, beginnen bij de strengste voorwaarde, het wegendiagram en de tabel (roosterdiagram; die twee alleen in pakket 4 en 5). Hoofdstuk 2: verzamelingen en $\#A$, het venndiagram invullen, doorsnede en unie, de somregel, gevallen onderscheiden, de somregel met overlap (inclusie en exclusie bij twee verzamelingen), het complement en de complementregel, *minstens één* en *geen van beide*.

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: de stijl `boom` voor boomdiagrammen met `child{node{..}}` (met `wortel`, `knoop` en `uitkomst`), `stad` en `tak` voor wegendiagrammen, `\venntwee` en `\vennaantal` voor een venndiagram met twee verzamelingen (met `\cirkelA`, `\cirkelB` en `\vennU` om stukken te kleuren), `\venndrie` en `\vennaantaldrie` voor drie verzamelingen, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Leerplan

Getoetst aan de geldende KOV-leerplannen van de 2de graad D (november 2026): II-Wis-d (pakket 1, versie oktober 2024), II-Wis'-d (pakket 2, oktober 2024), II-WisS'-d (pakket 3, juni 2024), II-WisS-d (pakket 4, oktober 2024) en II-WisS''-d (pakket 5, oktober 2024), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde. Het onderwerp is in elk leerplan de deelrubriek *Telproblemen* (4.5.1), met één doel: telproblemen oplossen met boomdiagrammen en venndiagrammen, met als afbakening de somregel, de productregel en de complementregel, en als samenhang met de 1ste graad de bewerkingen met twee verzamelingen (I-Wis-a LPD 7). Doel, afbakening en de wenk (de moeilijkheid zit in een gepaste tekening, daarna lees je het antwoord af) zijn in de vijf leerplannen woordelijk gelijk. Het enige verschil: andere voorstellingen zoals wegendiagrammen en roosterdiagrammen zijn een *extra* in pakket 4 en een *wenk* in pakket 5; pakket 1-3 noemen ze niet. Het servicedocument 5u voegt bij dit doel niets toe, en geen van B1-B6 gaat over tellen.

| Pakket | Leerplan (versie) | H1 | H2 |
|---|---|---|---|
| 1 | II-Wis-d (oktober 2024) | LPD 25 | LPD 25 |
| 2 | II-Wis'-d (oktober 2024) | LPD 29 | LPD 29 |
| 3 | II-WisS'-d (juni 2024) | LPD 31 | LPD 31 |
| 4 | II-WisS-d (oktober 2024) | LPD 35 (sectie 3: extra) | LPD 35 |
| 5 | II-WisS''-d (oktober 2024) en het servicedocument 5u | LPD 35 (sectie 3: wenk) | LPD 35 |

**Aansluiting met de 3de graad.** Kansrekenen van de 3de graad (KOV III-WisS-d en III-WisS'-d, pakket 2 en 3) verwijst naar dit doel als voorkennis (II-WisS-d LPD 35, II-WisS'-d LPD 31), rekent zonder combinaties of variaties, en noemt roosterdiagrammen (twee dobbelstenen) en venndiagrammen daar zelf als extra. Telproblemen met formules (variaties, permutaties, combinaties, de faculteit) zitten bij KOV alleen in pakket 4 van de 3de graad (6 uur), waar pakket 5 van de 2de graad naartoe leidt; die cursus voert de faculteit zelf opnieuw in.

## Verschillen per pakket

| Onderdeel | 1 | 2 | 3 | 4 | 5 | Reden |
|---|---|---|---|---|---|---|
| H1, sectie 3: wegendiagram en tabel (roosterdiagram), met de korte oefeningen `h1-wegen` en `h1-tabel`, de opdrachten `h1-o4`, `h1-o6`, `h1-o16`, `h1-o17` en de testvragen `h1-t7`, `h1-t8`; in 1-3 volgt Terug naar het probleem meteen op sectie 2 | | | | x | x | extra bij LPD 35 (pakket 4), wenk bij LPD 35 (pakket 5) |
| H2: voorbeeld met een wegendiagram bij Gevallen onderscheiden (`vb:h2-routes`), en de opdrachten `h2-o12` (wegendiagram), `h2-o17` (tabel) en `h2-o22` (rooster) | | | | x | x | idem |
| H1: de faculteit als notatie ($4! = 4 \cdot 3 \cdot 2 \cdot 1$), alleen als uitleg zonder kader, niet gebruikt in de oefeningen | | | | | x | niet gevraagd; bereidt Telproblemen van pakket 4 van de 3de graad voor |
| H1, opdrachten van niveau 3: getallen aanvullen met nullen (`h1-o21`), jongens en meisjes afwisselend in een rij (`h1-o24`) | | x | x | x | x | didactische keuze (het leerplan is in alle pakketten hetzelfde) |
| H2, opdracht van niveau 3: minstens één 1 en minstens één 2 (`h2-o25`, complement van een unie) | | x | x | x | x | didactische keuze |
| H2, onderdeel Drie verzamelingen: voorbeeld, korte oefening, twee opdrachten (met de regel voor drie verzamelingen) en een testvraag | | | | | x | niet gevraagd; meer diepgang in B+S'' (de leerkrachtenversie zegt dat je het kunt overslaan) |

## Aantallen

| | korte oefeningen | opdrachten (deelvragen) | testvragen |
|---|---|---|---|
| Hoofdstuk 1, pakket 1 | 6 | 18 (55) | 6 |
| Hoofdstuk 1, pakket 2-3 | 6 | 20 (59) | 6 |
| Hoofdstuk 1, pakket 4-5 | 8 | 24 (73) | 8 |
| Hoofdstuk 2, pakket 1 | 8 | 19 (57) | 7 |
| Hoofdstuk 2, pakket 2-3 | 8 | 20 (58) | 7 |
| Hoofdstuk 2, pakket 4 | 8 | 23 (66) | 7 |
| Hoofdstuk 2, pakket 5 | 9 | 25 (72) | 8 |

## Wat het leerplan besliste

- **Afbakening.** Boomdiagram, venndiagram, productregel, somregel (ook met overlap bij twee verzamelingen) en complementregel in alle pakketten: dat is het doel met zijn afbakening. Geen formules voor variaties, permutaties of combinaties: het leerplan noemt ze niet, en de 3de graad voert ze in (Kansrekenen in pakket 2 en 3 van de 3de graad heeft ze niet eens nodig). *Alle volgordes* blijft met de productregel geteld.
- **Wegendiagram en tabel (roosterdiagram)** stonden in alle pakketten. Ze zijn een extra in pakket 4 en een wenk in pakket 5, en ontbreken in pakket 1-3. Ze staan nu alleen in 4-5 (zie de tabel); de leerkrachtenversie van pakket 4 zegt dat sectie 3 een extra is. De tabel heet nu ook *roosterdiagram*, het woord van het leerplan (ook in Kansrekenen van de 3de graad). Een route die in woorden beschreven is en geen wegendiagram vraagt (`h2-gevallen` c) blijft in alle pakketten: die los je op met de productregel en de somregel.
- **Faculteit.** Geen enkel leerplan van de 2de graad vraagt haar. Ze blijft alleen in pakket 5, als korte uitleg zonder kader, omdat pakket 5 naar pakket 4 van de 3de graad leidt, waar Telproblemen haar gebruikt; uit pakket 4 is ze weg (B+S leidt naar de 3de graad met 4 uur, waar KOV geen telproblemen met formules heeft).
- **Drie verzamelingen** (alleen pakket 5) vraagt het leerplan niet (de samenhang met de 1ste graad noemt twee verzamelingen). Het blijft als verdieping, zoals in andere handboeken van pakket 5 ("meer diepgang"), en de leerkrachtenversie zegt dat je het kunt overslaan.
- **Wenk over de gepaste tekening.** In alle pakketten. Pakket 4-5 hadden al de subsectie *Welke tekening kies je?*; voor alle pakketten is er nu opdracht `h2-o26` (niveau 2): zelf kiezen tussen een boomdiagram en een venndiagram, en uitleggen waarom. De leerkrachtenversie van hoofdstuk 1 noemt de wenk.
- **LPD per hoofdstuk.** Eén doel voor beide hoofdstukken: 25, 29, 31, 35, 35. De nummers klopten. De `\lkr`-kaders noemen nu ook de extra of de wenk (pakket 4-5) en de 1ste graad (I-Wis-a LPD 7).

## Wat open blijft

- **Notatie.** $\#A$ voor het aantal elementen (zoals in de 3de graad), $\overline{A}$ voor het complement (met de vermelding $U \setminus A$, die de 3de graad gebruikt), en het woord *omgevingsverzameling* voor $U$. Het leerplan legt geen notatie op; kies de afspraak van de school (of die van de 1ste graad) als die anders is, bijvoorbeeld $n(A)$, $A'$ of *referentieverzameling*.
- **Termen.** *Somregel met overlap* (zoals in de 3de graad), met de vermelding *regel van inclusie en exclusie*; *disjunct* wordt genoemd maar niet gebruikt in de oefeningen. *Wegendiagram* en *tabel* staan als uitleg, niet in een theoriekader. Het leerplan noemt alleen de drie regels.
- **Didactische keuzes** die het leerplan niet beslist: de niveau 3-opdrachten `h1-o21`, `h1-o24` en `h2-o25` pas vanaf pakket 2 (kan ook naar pakket 1, want het doel is overal hetzelfde); de boom die niet overal even breed is; beginnen bij de strengste voorwaarde.
- **Titel van hoofdstuk 2** is ingekort tot *Venndiagrammen, som- en complementregel*: de volledige titel uit het voorstel past niet in de hoofdstukband.
- **Contexten** zijn verzonnen: de nummerplaat (een cijfer, drie letters en drie cijfers) is "in een land" en geen bewering over een echt land.
- Hoofdstuk 2 verwijst één keer naar een voorbeeld van hoofdstuk 1 (`vb:h1-voorwaarde`); in een snelle bouw van alleen hoofdstuk 2 geeft dat "??".

## Controle

Alle aantallen in de voorbeelden, oefeningen en antwoorden zijn nagerekend met een Python-script (ook die van de nieuwe opdracht `h2-o26`), met brute force waar dat kan (alle codes, getallen, dobbelsteenworpen en volgordes echt opgesomd). Uitlegvragen en tekeningen zijn niet automatisch gecontroleerd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
