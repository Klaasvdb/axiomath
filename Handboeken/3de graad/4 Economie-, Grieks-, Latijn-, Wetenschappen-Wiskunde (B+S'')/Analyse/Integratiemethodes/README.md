# Integratiemethodes: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.3.1 Integralen, LPD 17-20) voor richtingen met meer dan 6 uur wiskunde. Ze bouwt verder op de cursus [Integralen](../Integralen/README.md) van pakket 4 en herhaalt die niet. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Stilleven met vier vaten* van Francisco de Zurbarán (ca. 1650, publiek domein): vier vaten, elk een omwentelingslichaam, zoals in hoofdstuk 3. De voorkant komt uit `Ontwerp/voorkanten/` (motief `integratiemethodes`: een vaas als omwentelingslichaam met één band van de mantel in fel).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan in [cursussen/Integratiemethodes/](<../../../cursussen/Integratiemethodes/>). Deze map kiest de hoofdstukken in `handboek.tex`.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Rationale functies integreren | `hoofdstukken/01-rationale-functies.tex` | na hoeveel seconden valt een parachutist 45 m/s, als de luchtweerstand zijn versnelling afremt? | LPD 17 | eerste versie, nog na te lezen |
| 2. Goniometrische substituties | `hoofdstukken/02-goniometrische-substituties.tex` | hoeveel liter olie zit er in een liggende tank als de peilstok een kwart van de hoogte aanwijst? | LPD 18 | eerste versie, nog na te lezen |
| 3. Lengte, oppervlakte en volume | `hoofdstukken/03-lengte-oppervlakte-volume.tex` | welke weg legt een steentje in een fietsband af terwijl de fiets 1 km rijdt? | LPD 19 en 20 | eerste versie, nog na te lezen |

## Inhoud

1. Echte rationale functies en eerst delen (stelling met bewijs). Een noemer van de tweede graad: twee nulwaarden (splitsing met bewijs, bedekken en coëfficiënten vergelijken), een dubbele nulwaarde (met bewijs), geen nulwaarden (afgeleide in de teller en boogtangens). De hoofdstelling van de algebra (zonder bewijs, met de geschiedenis van d'Alembert), de ontbinding in $\mathbb{C}$ (inductie) en de stelling van d'Alembert over reële factoren (bewijs met toegevoegde nulwaarden); $x^4 + 1$ en de vergissing van Leibniz. De vorm van de splitsing in het algemeen (zonder bewijs), en welke methode je kiest.
2. De substitutie $x = g(u)$ (met bewijs). $x = a\sin u$ met de driehoek voor de terugweg, de primitieve van $\sqrt{a^2 - x^2}$ met haar betekenis (sector plus driehoek); $x = a\tan u$, de primitieve van $\tfrac{1}{\cos x}$ (met partieelbreuken, en Mercator), van $\tfrac{1}{\sqrt{x^2 + a^2}}$ en van $\sqrt{x^2 + a^2}$ (met partiële integratie), en zo de lengte van de parabool uit Integralen exact; $x = \tfrac{a}{\cos u}$; de t-formules (met bewijs en de figuur met de omtrekshoek) en wanneer ze niet de kortste weg zijn; een overzicht om te kiezen.
3. Booglengte met een parameter (opbouw en bewijs, met de stap die we aanvaarden) en in poolcoördinaten (bewijs), met de cirkel, de cycloïde, de cardioïde en de spiraal van Archimedes; oppervlakte met een parameter (bewijs met de substitutie uit hoofdstuk 2) en in poolcoördinaten (bewijs met in- en omgeschreven sectoren), met de lemniscaat en het trifolium; volume met een parameter; manteloppervlakte (opbouw uit afgeknotte kegels, met de klassieke fout zonder wortel), met de kegel en de bol van Archimedes.

## Afbakening

- **Alle LPD:** 17 (hoofdstuk 1, met beide wenken: de stelling van d'Alembert, en noemers van de tweede graad in secties 2 en 3), 18 (hoofdstuk 2), 19 (hoofdstuk 3, met de drie wenken: de opbouw van de formules, de lemniscaat, de cardioïde, het bifolium en het trifolium, het volume) en 20 (hoofdstuk 3, met krommen in cartesische vorm zoals de wenk voorstelt).
- **Extra's:** noemers van graad 3 en 4 (sectie 5 van hoofdstuk 1, over te slaan), de primitieven van $\tfrac{1}{\cos x}$ en $\sqrt{x^2 + a^2}$, de t-formules op de eenheidscirkel, de spiraal van Archimedes. Als opdracht van niveau 3: $\pi < \tfrac{22}{7}$ met één integraal, de breuk van Leibniz, de regel met $N'(a)$, $\int \tfrac{1}{(1 + x^2)^2}$ met partiële integratie, het gemiddelde van $\tfrac{1}{a + b\cos x}$, de hyperbolische hoek, de substitutie van Euler, de hoorn van Gabriël, de manteloppervlakte met een parameter (torus, cycloïde) en de sectorformule van Leibniz.
- **Voorkennis uit pakket 4:** Integralen (substitutie, partiële integratie, standaardvormen, oneigenlijke integralen, booglengte en omwentelingsvolume in cartesische vorm), Rationale functies (euclidische deling, factorstelling, Horner), Complexe getallen (toegevoegde oplossingen), Goniometrische functies. Uit de module Krommen en meetkundige plaatsen: parametervoorstellingen, de snelheidsvector, poolcoördinaten met de notatie $[r, \theta]$ en de klassieke krommen; hoofdstuk 3 herhaalt telkens kort wat nodig is.
- **Weggelaten:** het bewijs van de hoofdstelling van de algebra en van de algemene splitsing in partieelbreuken (te zwaar, in de tekst vermeld), hogere machten van een kwadratische factor (alleen als opdracht), hyperbolische functies (die staan in een opdracht van Integralen).

## Oefeningen

De 122 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (43, 39 en 40): Start (2), 8, 7 en 7 korte oefeningen, 21, 20 en 21 opdrachten op drie niveaus (81, 62 en 62 deelvragen), 4, 3 en 3 Koppel-oefeningen en 8, 7 en 7 testvragen. Vier opdrachten hebben een kleine prent (ton, hangbrug, vaas, fiets), gekopieerd uit Integralen en Kansverdelingen; de bron staat in `afbeeldingen/prenten/README.md` van de bron. De Koppel-oefeningen gaan naar Differentiaalvergelijkingen, Reeksen, Complexe getallen, Matrices, Goniometrische functies, Oppervlakken, Numerieke methodes en Kegelsneden.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen (`\rooster`, `\kromme`, `\gebied`, `\lichaam`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`) en de notatie van Integralen (`\dx`, `\du`, `\ig`, `\grens`, `\bgsin`, `\bgtan`); uit Krommen en meetkundige plaatsen `\pkromme`, `\poolkromme` (hoeken in graden) en `\poolrooster`; en `\dv`, `\dth`, `\conj`.

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py 4/Analyse/Integratiemethodes
py -3.13 -P Opmaak/maak-pdf.py 4/Analyse/Integratiemethodes --hoofdstuk 2
```

## Controle

Op 23 nov 2026 nagerekend met SymPy-scripts: elke primitieve in voorbeelden, korte oefeningen, opdrachten, Koppel en test door afleiden, elke bepaalde integraal en elk afgerond getal numeriek. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
