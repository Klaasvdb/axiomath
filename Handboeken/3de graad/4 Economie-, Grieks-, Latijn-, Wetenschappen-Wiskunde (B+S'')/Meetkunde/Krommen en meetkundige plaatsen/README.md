# Krommen en meetkundige plaatsen: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.2.2, LPD 8-10) voor richtingen met meer dan 6 uur wiskunde. Ze bouwt verder op [Kegelsneden](../Kegelsneden/README.md), waar de meetkundige plaats, de vergelijkingen van de kegelsneden, de parametervergelijking van de ellips en de poolvergelijking van een kegelsnede al staan. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *De hooiwagen* van John Constable (1821, publiek domein): de wielen van de hooiwagen rollen door de beek, en een punt op de rand van een rollend wiel beschrijft een cycloïde, het probleem van hoofdstuk 1. De voorkant komt uit `Ontwerp/voorkanten/` (motief `krommen`: de bovenrand van de band is zelf een cycloïde, met het wiel dat ze tekent).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Krommen en meetkundige plaatsen/](<../../../cursussen/Krommen en meetkundige plaatsen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Parametervoorstellingen | `hoofdstukken/01-parametervoorstellingen.tex` | welke baan beschrijft een steentje in een fietsband, en staat het ooit stil? | LPD 8, met de wenken (parameter als tijd, cycloïde, Lissajousfiguren) | eerste versie, leerkracht moet nalezen |
| 2. Meetkundige plaatsen | `hoofdstukken/02-meetkundige-plaatsen.tex` | welke baan beschrijven een emmer en een kat op een ladder die wegglijdt? | LPD 9, met de wenken (keuze van het assenstelsel, applet, lemniscaat, cissoïde, strofoïde) | eerste versie, leerkracht moet nalezen |
| 3. Poolcoördinaten | `hoofdstukken/03-poolcoordinaten.tex` | welke kromme tekent een punt van een munt die rond een even grote munt rolt, en hoe vaak draait ze? | LPD 10, met de wenken (complexe getallen, omzetten, spiraal van Archimedes, cardioïde, conchoïde, rozen, kegelsneden); het trifolium van LPD 9 | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Parametervoorstelling van een kromme, de parameter als tijd, tekenen met een tabel (dubbelpunt), dezelfde baan met een andere beweging, de parametervoorstelling van een cirkel (stelling met bewijs), de parameter elimineren (twee manieren, met de valkuil van het bereik); Lissajousfiguren met de stelling over de frequenties (met bewijs); de cycloïde (stelling met bewijs, rollen zonder glijden); de snelheidsvector, de snelheid en de raaklijn (stelling met bewijs, $m = \tfrac{y'}{x'}$, horizontale en verticale raaklijnen, spitsen); de snelheid van het steentje, $10\,|\sin\tfrac{\omega\tau}{2}|$, als terug naar het probleem.
2. De werkwijze voor een meetkundige plaats (uit Kegelsneden), de cirkel van Apollonius (stelling met bewijs), het assenstelsel zelf kiezen; een punt dat meebeweegt (parameter of terugrekenen), de ellipsograaf (stelling met bewijs) en de ladder; de lemniscaat van Bernoulli (definitie en vergelijking met bewijs), een vergelijking lezen (symmetrie, snijpunten met de assen, ligging, asymptoten), de cissoïde van Diocles (definitie en vergelijking met bewijs) en de verdubbeling van de kubus.
3. Poolcoördinaten (pool, poolas, $[r, \theta]$), omzetten (stelling met bewijs), meer dan één naam en een negatieve $r$; poolvergelijkingen, tekenen met een poolrooster, omzetten in beide richtingen (de parabool uit Kegelsneden, de lemniscaat uit hoofdstuk 2); de spiraal van Archimedes (gelijke afstanden, met bewijs), rozen met het aantal bladen (met bewijs), het trifolium en zijn cartesische vergelijking via De Moivre; de conchoïde van Nicomedes (stelling met bewijs), de cardioïde als baan van een rollende munt (stelling met bewijs) en het antwoord op het probleem (twee toeren).

## Afbakening

- **Alle wenken van LPD 8, 9 en 10** staan erin. De applet uit de wenk bij LPD 9 staat in de leerkrachtentip (GeoGebra, thuis), want het handboek gaat uit van een les zonder laptop. De strofoïde staat in een opdracht van niveau 3 (afleiding in stappen), het trifolium in hoofdstuk 3, als roos en met zijn cartesische vergelijking.
- **Extra's buiten de wenken:** de snelheidsvector en de raaklijn aan een kromme met parameter (ze lossen het probleem van hoofdstuk 1 op), de cirkel van Apollonius en de ellipsograaf (hoofdstuk 2). In opdrachten: trochoïde, astroïde en hypocycloïde, de rationale parametervoorstelling van de cirkel, de ovalen van Cassini, de lemniscaat van Gerono, de logaritmische spiraal, de slakkenlijn, de trisectie met de conchoïde en het aantal toeren van rollende munten.
- **Weggelaten:** booglengte, oppervlakte en volume met parametervoorstellingen en poolvergelijkingen (LPD 19, Integralen in Complementair; alleen de oppervlakte onder een cycloïde en binnen een cardioïde staan in een Koppel-oefening), krommen in de ruimte zoals de schroeflijn (LPD 12, Oppervlakken), raaklijnen in poolcoördinaten en impliciet afleiden.
- **Notatie:** poolcoördinaten met vierkante haken, $[r, \theta]$, om ze niet te verwarren met $(x, y)$; een negatieve $r$ betekent de tegengestelde richting. De parameter heet $t$ (in hoofdstuk 1 ook de tijd $\tau$ met $t = \omega\tau$), de snelheidsvector $\vec v(t)$.

## Oefeningen

De 130 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (45, 42 en 43): Start (Opwarmer en Verken), 8 tot 10 korte oefeningen, 22 of 23 opdrachten op drie niveaus (89, 72 en 81 deelvragen), 3 Koppel-oefeningen (Goniometrische functies, Kegelsneden, Integralen, Complexe getallen, Matrices) en 7 testvragen. Er zijn geen prenten. Zie `Opmaak/oefeningenbank.py`.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's (`\rooster`, `\roosterleeg`, `\assen`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`), `\afst`, en voor deze cursus `\pkromme` (een kromme met parameter), `\poolkromme` (een poolvergelijking, met de hoek in graden), `\poolrooster` en `\poolroosterhoeken` (cirkels en halfrechten rond de pool), `\stip` en `\rechte`.

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "4/Meetkunde/Krommen en meetkundige plaatsen"
py -3.13 -P Opmaak/maak-pdf.py "4/Meetkunde/Krommen en meetkundige plaatsen" --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd (alle versies, zonder fouten, `??` of Overfull boven 2 pt) en steekproefsgewijs bekeken. De voorbeelden en de antwoorden van de oefeningen zijn nagerekend met Python/SymPy (119 controles: eliminaties, raaklijnen, snelheden, de cirkels van Apollonius, de lemniscaat, cissoïde, strofoïde en ovalen van Cassini, de verdubbeling van de kubus, omzettingen tussen pool- en cartesische coördinaten, de rozen, de cardioïde en de afgeronde getallen van de contexten). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
