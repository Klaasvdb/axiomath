# Driehoeksmeting: bron

Bron van het handboek Meetkunde/Driehoeksmeting van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. De stelling van Pythagoras | `hoofdstukken/01-pythagoras.tex` | 1-5 |
| 2. Sinus, cosinus en tangens | `hoofdstukken/02-goniometrische-getallen.tex` | 1-5 |

Hoofdstuk 1 gaat over de stelling van Pythagoras: vierkanten op de zijden (op een rooster nageteld), de stelling met het bewijs met oppervlaktes (twee schikkingen van vier driehoeken in een vierkant met zijde $a + b$), de schuine zijde en een rechthoekszijde berekenen, de omgekeerde stelling, Pythagoras in vlakke figuren (diagonaal van een rechthoek en een vierkant, hoogte van een gelijkbenige en een gelijkzijdige driehoek, afstand tussen twee punten in een assenstelsel) en in de ruimte (ruimtediagonaal van een balk en een kubus, piramide en kegel). Probleem: past een koker van 90 cm in een doos van 70 bij 50 bij 30 cm, plat op de bodem of schuin door de doos?

Hoofdstuk 2 gaat over de goniometrische getallen van een scherpe hoek in een rechthoekige driehoek: waarom een verhouding van zijden alleen van de hoek afhangt (gelijkvormigheid, kenmerk HH, kort herhaald), overstaande en aanliggende rechthoekszijde, tangens, sinus en cosinus (elk een eigen kader), SOS-CAS-TOA, een zijde en een hoek berekenen, een rechthoekige driehoek oplossen, de grondformule en de tangens als quotiënt (met bewijs), hoogtehoek en dieptehoek, en het hellingspercentage. Probleem: hoe hoog ligt de top van een berg die een schilder onder $9^\circ$ ziet, 5,6 km verder? (een knipoog naar de voorkant, Cézanne en de Mont Sainte-Victoire). De driehoek 3-4-5 met $\tan\alpha = \tfrac34$ van het motief komt in de voorbeelden terug.

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`, vertrokken van die van Gelijkvormigheid: `\lengte`, `\abs`, `\Abs`, `\drieh`, `\hoek` en `\gv` voor de notatie; `\ruitjes`, `\stip`, `\punt`, `\hoekboog`, `\rechtehoek` en `\balk` (stijl `schuin`) uit Gelijkvormigheid; nieuw zijn `\rechtehoekxy` (rechte hoek met coördinaten in plaats van benoemde punten), `\draadbalk` (doorzichtige balk met gestippelde verborgen ribben) en `\hoeklabel` (hoekboogje met een label zoals $\alpha$ of $35^\circ$). Verder `\naast`, `\figuren`, `metgrafiek`, `stappenbreed` en `stappenvrij`. De TikZ-bibliotheken `angles` en `quotes` worden in `notatie.tex` geladen.

## Verschillen per pakket

Alle pakketten hebben LPD 10-11 en dezelfde twee hoofdstukken. De verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Bewijs van Pythagoras met oppervlaktes | x | x | x | x | x |
| Tweede bewijs van Pythagoras, met gelijkvormige driehoeken (hoogtelijn op de schuine zijde) | | | | | x |
| Bewijs van de omgekeerde stelling (met ZZZ) | | | | | x |
| Algemene formule $h = \tfrac{\sqrt3}{2}\,z$ voor de hoogte van een gelijkzijdige driehoek (één zin onder het voorbeeld) | | | | x | x |
| Opdracht met Pythagoras en wortels, exact zonder rekenmachine | | x | x | x | x |
| Opdracht drietallen van Pythagoras: nagaan (1-4) of bewijzen (5), hetzelfde id | x | x | x | x | x |
| Opdracht: bewijzen met Pythagoras (ruit, hoogte op de schuine zijde) | | | | | x |
| Bewijs van de grondformule en van $\tan\alpha = \tfrac{\sin\alpha}{\cos\alpha}$ | x | x | x | x | x |
| Complementaire hoeken (subsectie, voorbeeld, korte oefening, opdracht) | | | | x | x |
| Exacte waarden voor $30^\circ$, $45^\circ$ en $60^\circ$ (subsectie, voorbeeld, korte oefening, opdracht) | | | | x | x |
| Opdracht: identiteiten bewijzen met de grondformule | | | | | x |

Complementaire hoeken en de bijzondere hoeken staan in pakket 4 en 5 als voorbereiding op het handboek Goniometrie, dat alleen die pakketten hebben.

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad en de kennis van het leerplan. Na te kijken: welke onderdelen in de tabel hierboven echt in welk pakket horen, vooral complementaire hoeken en de exacte waarden voor $30^\circ$, $45^\circ$ en $60^\circ$ (nu alleen 4-5), en of pakket 1 de omgekeerde stelling en Pythagoras in de ruimte (piramide, kegel) nodig heeft.
- **LPD per hoofdstuk.** De leerkrachtenversie koppelt hoofdstuk 1 aan LPD 10 en hoofdstuk 2 aan LPD 11. Die verdeling is niet nagekeken in het leerplan.
- **Bewust opgenomen, misschien buiten het leerplan:** de afstand tussen twee punten in een assenstelsel (zonder algemene formule; die hoort bij Analytische meetkunde in pakket 5), het criterium scherp/stomp met $c^2$ en $a^2 + b^2$ (uitleg en een opdracht van niveau 3), het hellingspercentage, de wortelspiraal, en de opdracht over de horizon (met de raaklijn loodrecht op de straal, gegeven in de opgave).
- **Hoeken in decimale graden.** Hoeken worden afgerond op $0{,}01^\circ$. Sommige scholen werken met graden, minuten en seconden: pas dan de afrondingen in de voorbeelden en de antwoorden aan.
- **Notatie.** $\tan$ (niet $\mathrm{tg}$), $\sin^{-1}$, $\cos^{-1}$ en $\tan^{-1}$ voor de toetsen van de rekenmachine, $\sin^2\alpha$ voor $(\sin\alpha)^2$, hoeken als $\hoek{A}$, lengte als $|AB|$. De namen *hoogtehoek* en *dieptehoek*, *overstaande* en *aanliggende rechthoekszijde*. Kijk of dat de afspraken van de school zijn.
- **Volgorde.** Hoofdstuk 1 veronderstelt vierkantswortels (Reële getallen); het bewijs met oppervlaktes heeft geen andere voorkennis nodig dan de oppervlakte van een driehoek. Hoofdstuk 2 herhaalt kort het kenmerk HH uit Gelijkvormigheid, zodat het ook werkt als die cursus later komt. Het tweede bewijs van Pythagoras (pakket 5) gebruikt ook HH.
- **Feiten in de tekst.** Pythagoras in de 6de eeuw voor Christus; kleitabletten uit Babylonië van bijna 4000 jaar oud met drietallen van Pythagoras; Cézanne schilderde de Mont Sainte-Victoire tientallen keren. De getallen in het probleem van hoofdstuk 2 (hoek $9^\circ$, 5,6 km) zijn verzonnen, niet de echte berg.
- **Getallen in contexten** zijn afgeronde of verzonnen waarden: het voetbalveld van 105 m bij 68 m, het A4-formaat (21 cm bij 29,7 cm), de straal van de aarde (6371 km), de trap met treden van 18 cm bij 26 cm, een rolstoelhelling van hoogstens 5 %.
- **Prenten.** Er staan geen prenten bij de opdrachten.

## Controle

De afgeronde getallen zijn nagerekend met Python (alle lengtes, hoeken en goniometrische getallen in voorbeelden, korte oefeningen, opdrachten en test), de exacte wortels met de hand. Bewijzen en uitlegvragen zijn niet nagerekend. Alle vijf pakketten bouwen zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
