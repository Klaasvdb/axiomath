# Iteraties en fractalen: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.5.1, LPD 44-47) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Siphonophorae* van Ernst Haeckel, uit *Kunstformen der Natur* (1904, publiek domein): een kolonie van steeds dezelfde bouwstenen, met tentakels die zich op elke schaal opnieuw vertakken. De voorkant komt uit `Ontwerp/voorkanten/` (motief `iteraties-en-fractalen`: de bovenrand van de band is de Koch-kromme na 0, 1, 2 en 3 iteraties).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan in [cursussen/Iteraties en fractalen/](<../../../cursussen/Iteraties en fractalen/>). Deze map kiest de hoofdstukken in `handboek.tex`.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Iteraties en dekpunten | `hoofdstukken/01-dekpunten.tex` | waarom komt herhaald op de toets cos drukken altijd bij 0,739085... uit, en waarom lukt dat niet met $x^2$? | LPD 44, 45 | eerste versie, nog na te lezen |
| 2. Periodiek gedrag en chaos | `hoofdstukken/02-periodiek-gedrag.tex` | waarom komt een keverpopulatie met $x_n = r\,x_{n-1}(1 - x_{n-1})$ tot rust, wisselt ze af tussen goede en slechte jaren, of springt ze grillig, naargelang $r$? | LPD 46 (en 44, 45 voor cycli) | eerste versie, nog na te lezen |
| 3. Meetkundige fractalen | `hoofdstukken/03-meetkundige-fractalen.tex` | hoe lang is de rand van de sneeuwvlok van Koch na tien stappen, en wat gebeurt er met omtrek en oppervlakte als je oneindig lang doorgaat? | LPD 47 (Koch, Sierpiński) | eerste versie, nog na te lezen |
| 4. Julia- en Mandelbrotverzamelingen | `hoofdstukken/04-julia-en-mandelbrot.tex` | hoe weet een computer na een eindig aantal stappen dat de baan van 0 ontsnapt, en waarom bestaat de Mandelbrotverzameling uit een hart met een cirkel ertegen? | LPD 47 (iteraties in $\mathbb{C}$), met 44-46 in het complexe vlak | eerste versie, nog na te lezen |

## Inhoud

1. Itereren, baan, de iteratie $f^{\circ n}$, het spinnenwebdiagram voor elke functie, de invloed van de startwaarde ($x^2$, $x^3$, $\sqrt x$). Dekpunten, met bewijs dat de limiet van een baan een dekpunt is (continuïteit). Aantrekkende en afstotende dekpunten, met het criterium $|f'(p)| < 1$ en $|f'(p)| > 1$ (twee stellingen, bewezen met alleen de definitie van de afgeleide), trap of spinnenweb naargelang het teken van $f'(p)$, het grensgeval $|f'(p)| = 1$ ($\sin x$, $x + x^3$, $x + x^2$), het aantrekkingsgebied met monotone banen. Terug naar het probleem met de stelling van Lagrange.
2. Periodieke punten, periode en cyclus ($-x$, $\tfrac{1}{1-x}$), punten met periode 2 berekenen (met bewijs dat $f(x) - x$ een deler is van $f(f(x)) - x$ bij een veelterm), uiteindelijk periodieke startwaarden door terug te rekenen, het criterium voor een cyclus met het product van de afgeleiden (bewezen met de kettingregel). De logistische afbeelding: dekpunten en hun stabiliteit, de 2-cyclus en het interval $3 < r < 1 + \sqrt6$ (bewezen met Vieta), periodeverdubbeling en het bifurcatiediagram, chaos bij $r = 4$ met $x_n = \sin^2(2^n\theta)$ (bewezen) en gevoelige afhankelijkheid van de startwaarde.
3. De Koch-kromme (lengte $(\tfrac43)^n L_0$), de sneeuwvlok van Koch (oppervlakte $\tfrac85 A_0$ met de meetkundige reeks), de driehoek van Sierpiński (oppervlakte $(\tfrac34)^n A_0$), de Cantorverzameling. Zelfgelijkvormigheid en de gelijkvormigheidsdimensie $D = \tfrac{\log N}{\log s}$, de lengte van een kust ($L(\varepsilon) = C\varepsilon^{1-D}$). Een fractaal als dekpunt van een iteratie op figuren ($S = T_1(S) \cup T_2(S) \cup T_3(S)$, vanuit een vierkant), het chaosspel en de varen van Barnsley.
4. Kwadrateren in $\mathbb{C}$ (modulus en argument), dekpunten van $z^2 + c$ met het criterium $|2p| < 1$ (rechtstreeks bewezen met $f(z) - p = (z + p)(z - p)$), de ontsnappingsstraal 2 (bewezen met de driehoeksongelijkheid), gevulde Julia-verzamelingen en Julia-verzamelingen (basiliek, konijn, dendriet, stof), de Mandelbrotverzameling met de stelling dat ze in de schijf met straal 2 ligt, de hoofdcardioïde en de schijf met periode 2 (bewezen).

## Afbakening

- **Alle LPD:** 44 (hoofdstuk 1 en 2: startwaarden, convergeren of divergeren, spinnenwebdiagram met $\cos x$ en $x^2 - 1$; in $\mathbb{C}$ in hoofdstuk 4), 45 (hoofdstuk 1: dekpunten met $f(x) = x$, aantrekkend en afstotend), 46 (hoofdstuk 2: periodiek gedrag, $f(x) = -x$, startwaarden die tot cyclisch gedrag leiden) en 47 (hoofdstuk 3: Koch-kromme en driehoek van Sierpiński; hoofdstuk 4: $z^2 + c$, Julia- en Mandelbrotverzameling).
- **Extra's (niet gevraagd door het leerplan):** het aantrekkingsgebied, het criterium voor cycli, de logistische afbeelding met periodeverdubbeling, het bifurcatiediagram en chaos, de Cantorverzameling, de gelijkvormigheidsdimensie en de kustlijn, het chaosspel en de varen van Barnsley, de hoofdcardioïde en de schijf met periode 2. Als opdracht van niveau 3: de dekpuntstelling op $[a, b]$, het aantal periodieke punten bij $r = 4$, de dimensie door hokjes te tellen, de vergelijking van Moran, $M \cap \mathbb{R} = [-2, \tfrac14]$, de $c$ van het konijn.
- **Voorkennis uit pakket 4:** Rijen (recursief voorschrift, limiet, een stijgende en begrensde rij convergeert, de meetkundige reeks), Limieten en afgeleiden (continuïteit, de definitie van de afgeleide, de kettingregel), Goniometrische functies, Exponentiële en logaritmische functies, Complexe getallen (vierkantswortels, modulus, goniometrische vorm, De Moivre). De stelling van Lagrange wordt alleen in het voorbeeld Terug naar het probleem van hoofdstuk 1 gebruikt (zoals in Integralen en Reeksen). Het spinnenwebdiagram van een lineair proces staat ook in Differentiaalvergelijkingen (hoofdstuk 1), maar deze cursus legt het zelf uit. De dekpuntmethode en de methode van Newton als numerieke methode staan in Numerieke methodes (hoofdstuk 2); hier komen ze alleen in een Koppel-oefening.
- **Zonder bewijs (als uitleg):** de stelling van Hutchinson (een iteratie op figuren gaat naar een unieke fractaal), de stellingen van Fatou en Julia (een aantrekkende cyclus trekt de baan van 0 aan; $K_c$ is uit één stuk of stof), de samenhang van $M$ (Douady en Hubbard), de constante van Feigenbaum.

## Oefeningen

De 160 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (40, 40, 40 en 40): Start (2), 7 korte oefeningen, 21 opdrachten op drie niveaus (81, 71, 61 en 71 deelvragen), 3 Koppel-oefeningen en 7 testvragen. Koppel: Numerieke methodes, Exponentiële functies, Rijen (H1); Differentiaalvergelijkingen, Getaltheorie, Matrices (H2); Telproblemen, Matrices, Ruimtemeetkunde (H3); Complexe getallen, Logica en bewijzen, Matrices (H4). Drie opdrachten hebben een kleine prent (bever, kever, slak), gekopieerd uit Differentiaalvergelijkingen, Matrices en Rijen; de bron staat in `afbeeldingen/prenten/README.md` van de bron.

## Afbeeldingen

De Mandelbrotverzameling, vier gevulde Julia-verzamelingen, het bifurcatiediagram, het chaosspel en de varen van Barnsley zijn PNG-bestanden in `afbeeldingen/` van de bron, berekend met `afbeeldingen/maak-afbeeldingen.py` (numpy en Pillow, eigen werk). De assen en labels erover tekent TikZ. De andere fractalen (Koch, Sierpiński, Cantor, de iteratie vanuit een vierkant) tekent TikZ zelf, met de macro's in `notatie.tex`.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Differentiaalvergelijkingen (`\rooster`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`); `\iter{f}{n}` voor $f^{\circ n}$ (niet $f^n$, dat op een macht lijkt); `\spinnenweb{f}{x0}{stappen}` voor een spinnenwebdiagram van een willekeurige functie; `\eerstebissectrice`; de L-systemen `Kochkromme` en `Kochvlok` (TikZ-bibliotheek `lindenmayersystems`); `\sierpinski[vorm]{orde}{x}{y}{zijde}` (recursief, met een driehoek of een vierkant als vorm) en `\cantor{orde}{x}{y}{lengte}`.

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "4/Discrete wiskunde/Iteraties en fractalen"
py -3.13 -P Opmaak/maak-pdf.py "4/Discrete wiskunde/Iteraties en fractalen" --hoofdstuk 2
python "Handboeken/3de graad/cursussen/Iteraties en fractalen/afbeeldingen/maak-afbeeldingen.py"   (vanuit die map; alleen als een afbeelding moet veranderen)
```

## Controle

Op 23 nov 2026 nagerekend met Python en SymPy: de banen, dekpunten, cycli en afgeleiden van elk voorbeeld en van de oefeningen, de 2-cycli met de ontbinding van $f(f(x)) - x$, de afgeronde getallen (populaties, kustlengtes, dimensies, aantal stappen) en de complexe banen van hoofdstuk 4. Niet getest: de afdruk op de schoolkopieerder (de PNG-figuren zijn grijs en zwart, met lichte grijze randen) en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
