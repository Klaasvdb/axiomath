# Lineair programmeren: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.4.5, LPD 36-39) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Stilleven met kazen, amandelen en krakelingen* van Clara Peeters (ca. 1615, publiek domein): het dieetprobleem, de goedkoopste voeding die genoeg voedingsstoffen geeft, was een van de eerste problemen van lineair programmeren. De voorkant komt uit `Ontwerp/voorkanten/` (motief `lineair-programmeren`: het toegestane gebied van hoofdstuk 2 met niveaulijnen en het optimum).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Lineair programmeren/](<../../../cursussen/Lineair programmeren/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op. Het probleem van hoofdstuk 2 (een mini-onderneming met kaarsen en zeep) loopt door in hoofdstuk 3.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Stelsels van ongelijkheden | `hoofdstukken/01-stelsels-van-ongelijkheden.tex` | welke combinaties van uren ijssalon en bijles kan Lotte kiezen? | LPD 36 | eerste versie, leerkracht moet nalezen |
| 2. Grafisch optimaliseren | `hoofdstukken/02-grafisch-optimaliseren.tex` | hoeveel kaarsen en dozen zeep geven de grootste winst? | LPD 37 | eerste versie, leerkracht moet nalezen |
| 3. Gevoeligheid en grotere problemen | `hoofdstukken/03-gevoeligheid-en-ict.tex` | tot welke winst per kaars blijft het plan, wat is extra olie of een extra uur werk waard? | LPD 39 (sectie 1 en 2), LPD 38 (sectie 3) | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Het halfvlak (stelling met bewijs: $ax + by < c$ is een open halfvlak), testpunt, volle en open grens, het oplossingsgebied als doorsnede, hoekpunten (niet elk snijpunt), begrensd, onbegrensd en leeg, convex (stelling met bewijs: elk oplossingsgebied is convex), van figuur naar stelsel, voorwaarden in woorden (ook *zoveel keer als* en percentages).
2. Doelfunctie en niveaulijnen (stelling: $Z$ stijgt in de richting van $(a, b)$), de stelling op een lijnstuk, de hoekpuntstelling met bewijs, de hoekpuntmethode en de niveaulijnmethode, het vraagstuk in vijf stappen (winst, kost met onbegrensd gebied, transport), geen optimum, meer dan één optimum, gehele oplossingen.
3. Bindend en speling, de stelling van de buurhoekpunten met bewijs, het optimaliteitsbereik (met de buren en met de richtingscoëfficiënten), de schaduwprijs (stelling met bewijs: constant binnen het geldigheidsbereik), de niet-bindende voorwaarde, het nut van een gevoeligheidsanalyse, het algemene probleem met $n$ onbekenden, de simplexmethode (uitleg), het model in een rekenblad met een oplosser, het gevoeligheidsrapport en een nieuw product beoordelen met schaduwprijzen.

## Afbakening

- **Opgenomen buiten de wenken:** convexiteit met bewijs (hoofdstuk 1), de stelling op een lijnstuk en het bewijs van de hoekpuntstelling (hoofdstuk 2), de stelling van de buurhoekpunten (hoofdstuk 3, ook als idee achter de simplexmethode), gehele oplossingen (hoofdstuk 2), en het beoordelen van een nieuw product met schaduwprijzen (hoofdstuk 3, in feite de gereduceerde kost).
- **Weggelaten:** de simplexmethode zelf (alleen het idee), dualiteit (alleen zichtbaar in de schaduwprijzen), ontaarde hoekpunten (alleen in een opdracht van niveau 3).
- **ICT (LPD 38):** het boek toont een rekenblad op papier, met `SOMPRODUCT` en de oplosser van Excel of LibreOffice Calc. De opdrachten met ICT geven de uitkomst van de oplosser in de oplossingen, zodat ze ook zonder computer na te kijken zijn. Of het gevoeligheidsrapport in elk rekenblad bestaat, is niet nagegaan (Excel heeft het, LibreOffice Calc niet standaard).
- **Notatie:** doelfunctie $Z$ (of $W$ voor winst, $K$ voor kost), toegestaan gebied, schaduwprijs, optimaliteitsbereik, geldigheidsbereik.

## Oefeningen

De 124 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (43, 42 en 39: telkens 2 Start, 9, 8 en 7 korte oefeningen, 22, 22 en 21 opdrachten met 65, 60 en 60 deelvragen, 3 Koppel en 7, 7 en 6 testvragen), met Start (Opwarmer en Verken), korte oefeningen, Opdrachten op drie niveaus, Koppel en Test jezelf. Twee opdrachten hebben een kleine prent (bakker, koffie), gekopieerd uit Kansverdelingen; de bron staat in `afbeeldingen/prenten/README.md` van de bron.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen (`\rooster`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenvrij` ...), `\roosterom` (rooster met getallen om de zoveel lijnen), en voor deze cursus de stijlen `grens`, `opengrens`, `niveau` en `gebied`, met `\venster` (knipt een scope af), `\grenslijn{a}{b}{c}` (de rechte $ax + by = c$), `\halfvlak{a}{b}{c}` (kleurt $ax + by \leqslant c$), `\halfvlakfig` (een klein halfvlak met rooster), `\hoekpunt` en `\optimum`.

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "4/Algebra/Lineair programmeren"
py -3.13 -P Opmaak/maak-pdf.py "4/Algebra/Lineair programmeren" --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd en steekproefsgewijs bekeken. De hoekpunten, optima, schaduwprijzen, bereiken en gehele optima van de voorbeelden en oefeningen zijn nagerekend met een exact script (hoekpunten opsommen met SymPy, ook voor de problemen met drie en zes onbekenden). Niet getest: de afdruk op de schoolkopieerder, het gebruik in de klas en de stappen in een echt rekenblad. De leerkracht moet de opgaven nog nalezen.
