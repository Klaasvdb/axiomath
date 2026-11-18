# Telproblemen: bron

Bron van het handboek Discrete wiskunde/Telproblemen van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

Niet te verwarren met de cursus Telproblemen van de 3de graad (`Handboeken/3de graad/cursussen/Telproblemen/`): die bouwt hierop verder met variaties, permutaties, combinaties en het binomium.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Boomdiagrammen en de productregel | `hoofdstukken/01-productregel.tex` | 1-5 |
| 2. Venndiagrammen, som- en complementregel | `hoofdstukken/02-somregel.tex` | 1-5 |

Hoofdstuk 1: systematisch tellen met een boomdiagram (ook een boom die niet overal even breed is), de productregel, kiezen met en zonder herhaling, alle volgordes, beginnen bij de strengste voorwaarde, het wegendiagram en de tabel (rooster). Hoofdstuk 2: verzamelingen en $\#A$, het venndiagram invullen, doorsnede en unie, de somregel, gevallen onderscheiden, de somregel met overlap (inclusie en exclusie bij twee verzamelingen), het complement en de complementregel, *minstens één* en *geen van beide*.

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: de stijl `boom` voor boomdiagrammen met `child{node{..}}` (met `wortel`, `knoop` en `uitkomst`), `stad` en `tak` voor wegendiagrammen, `\venntwee` en `\vennaantal` voor een venndiagram met twee verzamelingen (met `\cirkelA`, `\cirkelB` en `\vennU` om stukken te kleuren), `\venndrie` en `\vennaantaldrie` voor drie verzamelingen, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Verschillen per pakket

Alle pakketten hebben dezelfde twee hoofdstukken (LPD 25 in pakket 1, 29 in pakket 2, 31 in pakket 3, 35 in pakket 4 en 5). De verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| De faculteit als notatie ($4! = 4 \cdot 3 \cdot 2 \cdot 1$), alleen als uitleg zonder kader, niet gebruikt in de oefeningen | | | | x | x |
| Hoofdstuk 1, opdrachten van niveau 3: getallen aanvullen met nullen (geen cijfer 3), jongens en meisjes afwisselend in een rij | | x | x | x | x |
| Hoofdstuk 2, opdracht van niveau 3: minstens één 1 en minstens één 2 (complement van een unie) | | x | x | x | x |
| Hoofdstuk 2, onderdeel Drie verzamelingen: voorbeeld, korte oefening, twee opdrachten (met de regel voor drie verzamelingen) en een testvraag | | | | | x |

## Aantallen

| | korte oefeningen | opdrachten (deelvragen) | testvragen |
|---|---|---|---|
| Hoofdstuk 1, pakket 1 | 8 | 22 (69) | 8 |
| Hoofdstuk 1, pakket 2-5 | 8 | 24 (73) | 8 |
| Hoofdstuk 2, pakket 1 | 8 | 21 (62) | 7 |
| Hoofdstuk 2, pakket 2-4 | 8 | 22 (63) | 7 |
| Hoofdstuk 2, pakket 5 | 9 | 24 (69) | 8 |

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad, de LPD-tabel en de kennis van het leerplan. De 3de graad (`01-tellen.tex`) noemt "de som- en productregel en het venndiagram uit de 2de graad als basis" en definieert zelf de faculteit, variaties en permutaties: die staan hier dus niet met formules. *Alle volgordes* wordt alleen met de productregel geteld.
- **Faculteit.** Bewust alleen in pakket 4 en 5, als korte uitleg zonder kader ("hier volstaat het product"), omdat de 3de graad haar opnieuw invoert. Weglaten of in alle pakketten zetten kan met één `\alleenvoor` in `01-productregel.tex`.
- **Drie verzamelingen** (alleen pakket 5) gaat verder dan "inclusie-exclusie bij twee verzamelingen". Na te kijken of dat bij de meer diepgang van B+S'' past, of beter weg kan.
- **Notatie.** $\#A$ voor het aantal elementen (zoals in de 3de graad), $\overline{A}$ voor het complement (met de vermelding $U \setminus A$, die de 3de graad gebruikt), en het woord *omgevingsverzameling* voor $U$. Kies de afspraak van de school als die anders is (bijvoorbeeld $n(A)$, $A'$ of *referentieverzameling*).
- **Termen.** *Somregel met overlap* (zoals in de 3de graad), met de vermelding *regel van inclusie en exclusie*; *disjunct* wordt genoemd maar niet gebruikt in de oefeningen. *Wegendiagram* en *tabel* staan als uitleg, niet in een theoriekader.
- **LPD per hoofdstuk.** De leerkrachtenversie zegt bij beide hoofdstukken hetzelfde LPD-nummer met het deel dat het hoofdstuk behandelt. Niet nagekeken in het leerplan.
- **Titel van hoofdstuk 2** is ingekort tot *Venndiagrammen, som- en complementregel*: de volledige titel uit het voorstel past niet in de hoofdstukband.
- **Contexten** zijn verzonnen: de nummerplaat (een cijfer, drie letters en drie cijfers) is "in een land" en geen bewering over een echt land.
- Hoofdstuk 2 verwijst één keer naar een voorbeeld van hoofdstuk 1 (`vb:h1-voorwaarde`); in een snelle bouw van alleen hoofdstuk 2 geeft dat "??".

## Controle

Alle aantallen in de voorbeelden, oefeningen en antwoorden zijn nagerekend met een Python-script, met brute force waar dat kan (alle codes, getallen, dobbelsteenworpen en volgordes echt opgesomd). Uitlegvragen en tekeningen zijn niet automatisch gecontroleerd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
