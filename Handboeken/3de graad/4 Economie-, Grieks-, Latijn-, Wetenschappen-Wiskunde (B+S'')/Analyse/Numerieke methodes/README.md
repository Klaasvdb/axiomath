# Numerieke methodes: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.3.4, LPD 26-29) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Newton* van William Blake (1795-ca. 1805, publiek domein): Isaac Newton buigt zich met een passer over een tekening, en de methode van Newton draagt zijn naam. De voorkant komt uit `Ontwerp/voorkanten/` (motief `numerieke-methodes`: de raaklijnen van de methode van Newton die naar de nulwaarde lopen).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Numerieke methodes/](<../../../cursussen/Numerieke methodes/>). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Een nulwaarde insluiten | `hoofdstukken/01-insluiten.tex` | hoe diep zinkt een houten bal met straal 10 cm en dichtheid 0,6 (Archimedes)? | LPD 26: methode van de intervalmiddens, regula falsi | eerste versie, leerkracht moet nalezen |
| 2. Dekpunten en de methode van Newton | `hoofdstukken/02-itereren.tex` | waar staat een satelliet in een elliptische baan na 3 uur (vergelijking van Kepler)? | LPD 26: methode van de dekpunten, methode van Newton, snelheid van convergentie | eerste versie, leerkracht moet nalezen |
| 3. Stelsels iteratief oplossen | `hoofdstukken/03-stelsels.tex` | hoe warm wordt een metalen plaat binnenin als de randen een vaste temperatuur hebben? | LPD 27: Gauss-Jordan en afronden, Jacobi, Gauss-Seidel | eerste versie, leerkracht moet nalezen |
| 4. Afleiden en integreren met getallen | `hoofdstukken/04-afleiden-en-integreren.tex` | versnelling en afgelegde weg van een auto uit een tabel met snelheden | LPD 28 en 29: differenties, middelpuntsregel, trapeziumregel, regel van Simpson | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Startinterval met de tussenwaardestelling en het teken van $f'$, de methode van de intervalmiddens, absolute fout en foutgrens, de foutgrens $\frac{b-a}{2^{n+1}}$ (bewijs met inductie) en het aantal stappen, wat er misloopt (dubbele nulwaarde, sprong, meerdere nulwaarden), de regula falsi (formule met bewijs), de insluiting als gewogen gemiddelde (bewijs), een eindpunt dat blijft staan, stopcriterium met controle van de tekenwissel, vergelijking van beide methodes.
2. Dekpunt, de methode van de dekpunten, de limiet is een dekpunt (bewijs), webgrafieken, aantrekken en afstoten, de middelwaardestelling van Lagrange (bewijs), de convergentiestelling met $|g'| \leqslant k < 1$ (bewijs), de foutschatting achteraf (bewijs), de methode van Newton (afleiding), Newton als dekpunt met $g'(c) = 0$ (bewijs), de fout bij de vierkantswortel (bewijs), wanneer Newton faalt (cyclus, divergentie, sprong, dubbele nulwaarde), lineaire en kwadratische convergentie, de snelheid van de dekpuntmethode is $|g'(L)|$ (bewijs), vergelijking van de vier methodes op de vergelijking van Kepler.
3. Rekenwerk van Gauss-Jordan, afronden en spilkeuze, slecht geconditioneerde stelsels, de methode van Jacobi, de methode van Gauss-Seidel (ook meetkundig bij $2 \times 2$), strikt diagonaal dominant, convergentie van Jacobi en van Gauss-Seidel (beide met bewijs).
4. Voorwaartse, achterwaartse en centrale differentie, de centrale differentie is exact bij een parabool (bewijs), fout evenredig met $h$ of $h^2$, afbreekfout en afrondingsfout, afgeleiden uit meetwaarden, middelpuntsregel, trapeziumregel, $I - T_1 = -2(I - M_1)$ bij een parabool (bewijs), de regel van Simpson als $\frac{2M + T}{3}$ en exact voor derdegraadsveeltermen (bewijs), integralen uit meetwaarden.

## Afbakening

- **Extra's buiten de wenken:** de middelwaardestelling van Lagrange met bewijs (hoofdstuk 2, nodig voor de convergentiestelling; de cursus Limieten en afgeleiden bewijst ze niet), de foutschatting achteraf, de definitie van lineaire en kwadratische convergentie, spilkeuze en conditie bij Gauss-Jordan (hoofdstuk 3), de convergentiestellingen voor Jacobi en Gauss-Seidel, afbreek- en afrondingsfout (hoofdstuk 4). In opdrachten: de secantmethode, overrelaxatie, Richardson-extrapolatie, de regel van Gauss met twee punten.
- **De methode van Euler** staat in de cursus Differentiaalvergelijkingen (hoofdstuk 2); hier staat alleen een verwijzing in de leerkrachtentip van hoofdstuk 4.
- **Zonder bewijs:** de convergentie van de regula falsi, de algemene foutformules $\frac h2 f''$, $\frac{h^2}{6}f'''$ en $x_{n+1} - c \approx \frac{f''(c)}{2f'(c)}(x_n - c)^2$ (die vragen Taylor, zie de cursus Reeksen), en de foutgrenzen van de trapeziumregel en van Simpson (in een opdracht gegeven).
- **Computer:** elk hoofdstuk heeft een kort Python-programma om thuis te gebruiken (omgeving `python` in `notatie.tex`), en een paar opdrachten vragen een rekenblad. Alle voorbeelden, korte oefeningen en de test lukken met een rekentoestel.

## Oefeningen

De 161 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (41, 40, 40 en 40), met Start (Opwarmer en Verken), 7 of 8 korte oefeningen, 21 opdrachten op drie niveaus (61 tot 71 deelvragen per hoofdstuk), 3 Koppel-oefeningen en 7 testvragen. Er zijn geen prenten. Zie `Opmaak/oefeningenbank.py` voor de velden.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen (`\rooster`, `\kromme`, `\gebied`, `\riemann`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`), en voor deze cursus `\trapezia` (de trapezia van de trapeziumregel), `\webgrafiek` (webgrafiek van een iteratie), `\newtonstappen` (raaklijnen van de methode van Newton), de omgeving `rastertabel` (tabel met raster) en de omgeving `python` (een programma, met `listings`).

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "4/Analyse/Numerieke methodes"
py -3.13 -P Opmaak/maak-pdf.py "4/Analyse/Numerieke methodes" --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd en steekproefsgewijs bekeken. De voorbeelden en de antwoorden van de oefeningen zijn nagerekend met Python/SymPy (iteraties, foutgrenzen, aantallen stappen, stelsels, differenties en integratieregels). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
