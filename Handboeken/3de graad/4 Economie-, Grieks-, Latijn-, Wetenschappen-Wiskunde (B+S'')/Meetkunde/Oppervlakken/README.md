# Oppervlakken: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.2.3, LPD 11-13) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Zelfportret in een bolle spiegel* van Parmigianino (ca. 1524, publiek domein): hij schilderde wat hij zag in een bolle spiegel, op een houten halve bol. De voorkant komt uit `Ontwerp/voorkanten/` (motief `oppervlakken`: de eenbladige hyperboloïde als regeloppervlak).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Oppervlakken/](<../../../cursussen/Oppervlakken/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. De bol | `hoofdstukken/01-de-bol.tex` | waar is een gps-ontvanger die zijn afstand tot drie satellieten kent, en waarom volstaan er geen twee? | LPD 11 | eerste versie, leerkracht moet nalezen |
| 2. Oppervlakken en ruimtekrommen | `hoofdstukken/02-oppervlakken-en-ruimtekrommen.tex` | hoe lang is de leuning van een wenteltrap, en waarom is de trap aan de binnenkant zo steil? | LPD 12 | eerste versie, leerkracht moet nalezen |
| 3. Kwadrieken | `hoofdstukken/03-kwadrieken.tex` | hoe smal wordt een toren van Sjoechov uit rechte staven, en welke vorm heeft hij? | LPD 13 | eerste versie, leerkracht moet nalezen |

## Inhoud

1. De bol als meetkundige plaats, de middelpuntsvergelijking en de algemene vergelijking (wanneer bol, punt of leeg, met bewijs), Thales in de ruimte (de bol op een middellijn), de doorsnede met een vlak ($\rho = \sqrt{r^2 - d^2}$), het raakvlak door te ontdubbelen, de bol die een vlak raakt, snijpunten met een rechte (twee, één of geen, met bewijs via de afstand), de horizon, twee bollen en het machtvlak, drie bollen (gps).
2. Cartesiaanse vergelijking en niveaukrommen, cilinders (een vergelijking zonder $z$), omwentelingsoppervlakken ($F(\sqrt{x^2+y^2}, z) = 0$; sombrero en torus), parametervoorstellingen met twee parameters en parameterlijnen, de bol met lengte en breedte, omwentelingsoppervlakken en de torus met parameters, de helicoïde, ruimtekrommen (de kromme van Viviani), de kubische schroeflijn (een vlak snijdt ze hoogstens drie keer), de schroeflijn (spoed, uitrollen, lengte en helling).
3. Kwadrieken: de ellipsoïde (doorsneden, parametervoorstelling, de aarde), de eenbladige en de tweebladige hyperboloïde en de kegel als één familie, de elliptische en de hyperbolische paraboloïde, een overzichtstabel, herkennen door kwadraten af te splitsen (ook met de as langs $x$ of $y$), regeloppervlakken: de twee families rechten op de eenbladige hyperboloïde en op het zadel (met bewijs), de toren van Sjoechov.

## Afbakening

- **Extra's buiten de wenken van LPD 11-13:** Thales in de ruimte, de horizon, twee en drie bollen met het machtvlak (hoofdstuk 1, nodig voor het probleem); de kromme van Viviani en de stelling over vlakken en de kubische schroeflijn (hoofdstuk 2); het raakvlak aan een kwadriek door te ontdubbelen (zonder bewijs) en de cirkeldoorsneden van een ellipsoïde (opdrachten van niveau 3 in hoofdstuk 3).
- **Weggelaten:** het wegwerken van termen in $xy$, $xz$ en $yz$ (alleen vermeld, met een Koppel met matrices), de volledige classificatie van kwadrieken met eigenwaarden, krommingen en oppervlakte van gebogen oppervlakken.
- **Afstemming:** de module Krommen en meetkundige plaatsen (parametervoorstellingen van vlakke krommen, poolcoördinaten) wordt vermeld maar niet verondersteld. Kegelsneden is wel voorkennis: doorsneden van kwadrieken zijn kegelsneden.
- **Notatie:** "cartesiaanse vergelijking" zoals in Ruimtemeetkunde; de bol heeft middelpunt $M(a, b, c)$ en algemene vergelijking $x^2 + y^2 + z^2 + Dx + Ey + Fz + G = 0$; breedte $\varphi$ en lengte $\lambda$.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk, met Start (Opwarmer en Verken), 8 tot 10 korte oefeningen, 22 tot 24 opdrachten op drie niveaus (66, 64 en 68 deelvragen), 3 Koppel-oefeningen en 7 testvragen. Er zijn geen prenten. Zie de README van Integralen en `Opmaak/oefeningenbank.py` voor de werkwijze.

## Figuren

Ruimtelijke figuren staan in loodrechte projectie (stijl `zicht` in `notatie.tex`: azimut 30°, hoogte 20°), zodat een bol echt een cirkel is. De gebogen oppervlakken (sombrero, torus, helicoïde, de kwadrieken) zijn berekende PNG's uit `afbeeldingen/maak-afbeeldingen.py` (numpy en Pillow, schildersalgoritme): het script geeft per figuur de regel `\beeld{...}` met de plaats in cm, zodat de assen van TikZ op het oppervlak vallen.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen en Kegelsneden (`\rooster`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`, `\hyperbool`, `\hyperboolv`), en voor deze cursus `\vcr`, `\norm`, `\afst`, de stijl `zicht`, `\assenzicht`, `\bolzicht`, `\cirkelzicht`, `\stipr` en `\beeld`.

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py 4/Meetkunde/Oppervlakken
py -3.13 -P Opmaak/maak-pdf.py 4/Meetkunde/Oppervlakken --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd (alle versies, zonder fouten, `??` of Overfull boven 2 pt) en steekproefsgewijs bekeken. De voorbeelden en de antwoorden van de oefeningen zijn nagerekend met Python/SymPy (105 controles: middelpunten en stralen, doorsnedecirkels, raakvlakken, snijpunten, machtvlakken, het gps-stelsel, de toren van Sjoechov, afgeronde getallen van aarde, horizon, schroeflijnen en rugbybal). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
