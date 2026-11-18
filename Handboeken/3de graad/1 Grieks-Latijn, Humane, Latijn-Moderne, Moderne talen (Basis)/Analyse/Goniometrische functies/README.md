# Goniometrische functies: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 11-13 en K2, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Goniometrische functies/](<../../../cursussen/Goniometrische functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan Basis** (III-Wis-d, oktober 2024). Basis vraagt alleen de sinus: de grafiek van $\sin x$ vanuit de goniometrische cirkel, met radialen (LPD 11), de algemene sinusfunctie opgebouwd met transformaties, met ICT (LPD 12), en haar kenmerken aan de hand van de grafiek, in contexten (LPD 13). Het keuzedoel K2 vraagt vergelijkingen van de vorm $\sin(ax + b) = c$ algebraïsch op te lossen, waarvoor de sinus van supplementaire hoeken volstaat. De cosinus staat alleen bij de extra's (LPD 11 en 12), de tangens nergens. Het leerplan noemt geen aantal lestijden voor deze doelen. Daarom kiest `handboek.tex` de hoofdstukken 1, 3 en 4 van de bron, als hoofdstuk 1, 2 en 3: Goniometrische formules (som-, verschil- en verdubbelingsformules) valt helemaal buiten Basis. De bron in [cursussen/Goniometrische functies/](<../../../cursussen/Goniometrische functies/>) houdt dat hoofdstuk voor de andere pakketten.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De eenheidscirkel | `hoofdstukken/01-eenheidscirkel.tex` | LPD 11 | afgestemd op Basis, nog na te lezen |
| 2. Goniometrische functies | `hoofdstukken/03-grafieken.tex` | LPD 11-13 | afgestemd op Basis, nog na te lezen |
| 3. Goniometrische vergelijkingen | `hoofdstukken/04-vergelijkingen.tex` | K2, LPD 13 (en LPD 6) | afgestemd op Basis, nog na te lezen |

## Verschillen met pakket 4

Alles staat in de gedeelde bron met `\alleenvoor` of `pakketten:` in de YAML; pakket 2, 3 en 4 zijn niet veranderd (hun `gen/` is na het bouwen identiek aan die van voor de aanpassing).

| Waar | In pakket 1 | Reden |
|---|---|---|
| Hoofdstuk 2 van de bron (formules) | weg (niet in `handboek.tex`); hoofdstuk 3 en 4 van de bron heten hier 2 en 3 (`\mychapter` en de verwijzingen naar hoofdstuknummers met `\alleenvoor`) | buiten Basis |
| Alle hoofdstukken, bewijzen | weg; waar nodig een verklaring in woorden of met de figuur (bijzondere waarden met de tekendriehoeken, cosinus als verschoven sinus met een draaiende driehoek) | minder formalisme |
| 1, sectoroppervlakte | weg, met voorbeeld en korte oefening | niet in LPD 11 |
| 1, tangens | weg uit de definities, de tabel, de verwante hoeken en de voorbeelden (`vb:h1-assen`, `vb:h1-waarden`, `vb:h1-tegengesteld` in een eigen versie) | niet in Basis |
| 1, grondformule en identiteiten | weg, met voorbeelden en korte oefeningen | niet in Basis |
| 1, verwante hoeken | alleen tegengestelde en supplementaire hoeken; antisupplementaire en complementaire hoeken weg; Een hoek herleiden met een eigen inleiding en werkwijze | wenk K2: supplementaire hoeken volstaan; tegengestelde voor de windturbine en de symmetrie van de grafiek |
| 1, Met ICT (nieuw) | het rekentoestel in radialen (voorbeeld `vb:h1-rekentoestel`), een draaiend punt in GeoGebra, korte oefening `h1-ict` | ICT bij LPD 11; vult ook de pagina na het wegvallen van de grondformule |
| 1, korte oefeningen | eigen versie zonder tangens of grondformule: `h1-assen-k`, `h1-tabel-k`, `h1-tegen-k`, `h1-waarden`, `h1-herleid`; weg: `h1-sector`, `h1-grondf`, `h1-ident-k`, `h1-punt`, `h1-compl-k`, `h1-verwant` | idem |
| 1, opdrachten | eigen versie: o2, o7, o11, o12, o13, o18, o22, o23 (zonder tangens, grondformule, sector of antisupplementaire hoeken); weg: o4, o5, o6, o14, o15, o17, o19, o20, o24, o25, o26 | idem |
| 1, Koppel en Test jezelf | `h1-koppel-2` zonder tangens; test 2 (boog in radialen en graden) en 3 (zonder tangens) in eigen versie, 4, 7 en 8 weg, nieuw: `h1-t9` (hoogte op een reuzenrad) | idem |
| 2, tangensfunctie | weg, met voorbeeld `vb:h3-tan` en korte oefening `h3-aantal` | niet in Basis |
| 2, Van de cirkel naar de grafiek (nieuw) | figuur met de hoogtes van twaalf punten van de cirkel overgebracht naar de grafiek, werkwijze, ICT, korte oefening `h3-cirkel` | LPD 11 en wenk: grafiek vanuit de goniometrische cirkel, met of zonder ICT |
| 2, de sinusfunctie | extra alinea over het tekenverloop en de symmetrie (puntsymmetrisch om $O$, symmetrisch om de rechte door een top) | LPD 13: tekenverloop en symmetrie |
| 2, de periode | extra zin over de frequentie | wenk LPD 13; samenhang met Trillingen en golven |
| 2, Ontdekken met ICT (nieuw) | schuifknoppen in GeoGebra, de volgorde van de transformaties, korte oefening `h3-ict` | wenk LPD 12 |
| 2, Kenmerken van een sinusfunctie (nieuw) | voorbeeld `vb:h3-analyse` met tekentabel, stijgen en dalen, extrema en symmetrie; korte oefening `h3-analyse-k` | LPD 13 |
| 2, opdrachten | eigen versie: o9, o12, o13 (zonder tangens, $\sin^2$, $\lvert\cos\rvert$); weg: o4, o7, o11, o20, o24, o26, o27, o30; nieuw: `h3-o31` (volgorde van de transformaties met ICT) | tangens, formules, negatieve $a$ (wenk: $a, b > 0$ volstaat) |
| 2, Test jezelf | test 1 (cosinus en sinus) en 5 (periode) in eigen versie; nieuw: `h3-t8` (kenmerken) | idem |
| 3, cyclometrische functies | alleen de boogsinus, met een eigen inleiding; boogcosinus en boogtangens weg | K2 vraagt alleen de sinus |
| 3, elementaire vergelijkingen | alleen $\sin x = a$; $\cos x = a$ en $\tan x = a$ weg; Een veelvoud van $x$ met een eigen voorbeeld ($\sin 2x = -\frac12$, label `vb:h4-cos` behouden) en werkwijze | K2 |
| 3, Nulwaarden van een sinusfunctie (nieuw) | voorbeeld `vb:h4-nulwaarden`, korte oefening `h4-nulwaarden` | wenk K2: vergelijkingen die herleidbaar zijn tot $\sin(ax + b) = c$, nulwaarden van een algemene sinusfunctie |
| 3, Controleren met ICT (nieuw) | de nulwaarden uit het voorbeeld op de grafiek | ICT als controle |
| 3, herleidbare vergelijkingen | weg (substitutie, ontbinden, samenvoegen) | niet in Basis |
| 3, Terug naar het probleem | grafisch opgelost met ICT, met een werkwijze; het model met de cosinus blijft | wenk LPD 13: een vergelijking in een context los je met ICT grafisch op |
| 3, korte oefeningen | eigen versie: `h4-veelvoud`; weg: `h4-bg`, `h4-bgcos-k`, `h4-cos-k`, `h4-tan-k`, `h4-elementair`, `h4-kwadr`, `h4-ontbind`, `h4-samen`, `h4-herleidbaar` | idem |
| 3, opdrachten | eigen versie (alleen sinus of met ICT): o1, o2, o3, o7, o11, o13, o17, o18, o21; weg: o4, o5, o6, o8, o9, o10, o12, o14, o15, o16, o19, o20, o22, o24, o25, o26, o27; nieuw: `h4-o28` (vergelijkingen die alleen met ICT lukken), `h4-o29` (getij, algebraïsch en met ICT) | idem |
| 3, Test jezelf | test 1 (boogsinus) en 2 ($\sin x = a$) in eigen versie; 4, 6 en 7 weg; nieuw: `h4-t8` (nulwaarden) | idem |
| Start, leerkrachtentips, samenvattingen | eigen versie van `h3-start-1` en `h4-start-1` (zonder complementaire hoeken en verdubbelingsformules), van de leerkrachtentips en van de zelfstudiesamenvattingen | idem |

Aantallen in pakket 1 (pakket 4 tussen haakjes):

| Hoofdstuk | Voorbeelden | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|---|
| 1. De eenheidscirkel | 11 (15) | 9 (14) | 15 (26) | 2 (3) | 6 (8) |
| 2. Goniometrische functies | 11 (11) | 16 (14) | 20 (27) | 1 (3) | 8 (7) |
| 3. Goniometrische vergelijkingen | 5 (12) | 6 (14) | 12 (27) | 1 (3) | 5 (7) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken). Het handboek telt 46 pagina's (was 84 met vier hoofdstukken), de leerkrachtenversie 49 en de zelfstudieversie 53.

## Na te kijken

- **K2 is een keuzedoel.** Sectie 1 en 2 van hoofdstuk 3 (boogsinus, $\sin x = a$, veelvouden van $x$, nulwaarden) horen bij K2; sectie 3 (grafisch oplossen met ICT) bij LPD 13. Wie K2 niet kiest, slaat sectie 1 en 2 over; de test en de opdrachten zijn daar niet op ingedeeld. Eventueel een aparte variant zonder K2.
- **Cosinus.** De cosinus blijft als uitbreiding: als $x$-coördinaat op de eenheidscirkel, als verschoven sinus, en in modellen met een gekende top (daglengte, getij, London Eye). Wie alleen de sinus wil, moet vooral hoofdstuk 2 (sectie 2.1.4, de voorschriften met een cosinus) en de modellen herschrijven.
- **Voorschrift uit een grafiek of uit gegevens** is een extra bij LPD 12, maar blijft, omdat de contexten van LPD 13 een model nodig hebben (hoofdstuk 2, sectie 2.2.8 en 2.3).
- **Booglengte** blijft: ze staat niet letterlijk in LPD 11, maar maakt de radiaal begrijpelijk en is nodig voor het probleem van de windturbine.
- **Bijzondere waarden**: de tabel blijft, met een korte verklaring via de tekendriehoeken in plaats van het bewijs. Na te gaan of leerlingen uit de 2de graad Basis ze kennen.
- **Boogsinus**: de definitie als inverse blijft (de leerlingen kennen een inverse functie uit Exponentiële en logaritmische functies). Misschien volstaat de toets $\sin^{-1}$ van het rekentoestel.
- **GeoGebra en het rekentoestel**: de namen Schuifknop en Snijpunt (Nederlandstalige GeoGebra) en *intersect* (grafisch rekentoestel) zijn niet in de software nagekeken. De invoer `f(x) = a sin(b (x - c)) + d` maakt in GeoGebra Classic automatisch schuifknoppen; na te gaan in de versie die de school gebruikt.
- **Opgaven met "toon aan"** die blijven: `h1-o9` a (reuzenrad), `h3-o8` a (London Eye), `h4-o23` c (waterstraal). Misschien te formeel voor Basis.
- **Moeilijke opdrachten** die blijven: `h1-o8` (aardbol), `h3-o29` (model uit meetwaarden), `h3-o23` d (maan, cosinus als sinus schrijven). Misschien schrappen.
- **Koppel**: `h1-koppel-3` (rotatiematrix) veronderstelt het keuzedeel Matrices (K3, K4); `h3-koppel-1` ($\frac{\sin h}{h}$) Afgeleiden.
- **Getij in `h4-o29`**: een vereenvoudigde periode van 12 uur (echt ongeveer 12 uur 25 minuten).
- **Pagina's met veel wit**: pagina 23 (einde van sectie 2.1, de volgende sectie begint op een nieuwe pagina) en pagina 32 (zoals in pakket 4). De nieuwe stukken in hoofdstuk 1 (Met ICT) en 3 (Controleren met ICT) vullen ook pagina's die door het wegvallen van leerstof half leeg werden; ze blijven ook inhoudelijk nuttig, maar het is een keuze.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Goniometrische-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Goniometrische-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Goniometrische-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Goniometrische-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Goniometrische-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "1/Analyse/Goniometrische functies"
```

## Controle

De wiskunde van de gedeelde stukken is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). De nieuwe en herschreven opgaven voor pakket 1 zijn nagerekend met een kort script (de afgeronde waarden van de vergelijkingen, de snijpunten met ICT, de daglengte en de London Eye). Gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek en in de oplossingen. Niet getest: de afdruk op de schoolkopieerder, de instructies in GeoGebra en het gebruik in de klas. Geen prenten.
