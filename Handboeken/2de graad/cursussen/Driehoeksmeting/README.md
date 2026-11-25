# Driehoeksmeting: bron

Bron van het handboek Meetkunde/Driehoeksmeting van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan de leerplannen van 2024 (24 november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. De stelling van Pythagoras | `hoofdstukken/01-pythagoras.tex` | 1-5 |
| 2. Sinus, cosinus en tangens | `hoofdstukken/02-goniometrische-getallen.tex` | 1-5 |

Hoofdstuk 1 gaat over de stelling van Pythagoras: vierkanten op de zijden (op een rooster nageteld), de stelling met het bewijs met oppervlaktes (twee schikkingen van vier driehoeken in een vierkant met zijde $a + b$), de schuine zijde en een rechthoekszijde berekenen, de omgekeerde stelling, Pythagoras in vlakke figuren (diagonaal van een rechthoek en een vierkant, hoogte van een gelijkbenige en een gelijkzijdige driehoek, afstand tussen twee punten in een assenstelsel, eerst met een rechthoekige driehoek en daarna met de formule, met bewijs) en in de ruimte (ruimtediagonaal van een balk en een kubus, de hoogte van een zijvlak en van de piramide zelf, kegel). Probleem: past een koker van 90 cm in een doos van 70 bij 50 bij 30 cm, plat op de bodem of schuin door de doos?

Hoofdstuk 2 gaat over de goniometrische getallen van een scherpe hoek in een rechthoekige driehoek: waarom een verhouding van zijden alleen van de hoek afhangt (gelijkvormigheid, kenmerk HH, kort herhaald), overstaande en aanliggende rechthoekszijde, tangens, sinus en cosinus (elk een eigen kader), SOS-CAS-TOA, een zijde en een hoek berekenen (met de uitleg dat één goniometrisch getal een scherpe hoek bepaalt), graden, minuten en seconden, een rechthoekige driehoek oplossen, de grondformule en de tangens als quotiënt (met bewijs), hoogtehoek en dieptehoek, en het hellingspercentage. Probleem: hoe hoog ligt de top van een berg die een schilder onder $9^\circ$ ziet, 5,6 km verder? (een knipoog naar de voorkant, Cézanne en de Mont Sainte-Victoire). De driehoek 3-4-5 met $\tan\alpha = \tfrac34$ van het motief komt in de voorbeelden terug.

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`, vertrokken van die van Gelijkvormigheid: `\lengte`, `\abs`, `\Abs`, `\drieh`, `\hoek` en `\gv` voor de notatie; `\ruitjes`, `\stip`, `\punt`, `\hoekboog`, `\rechtehoek` en `\balk` (stijl `schuin`) uit Gelijkvormigheid; nieuw zijn `\rechtehoekxy` (rechte hoek met coördinaten in plaats van benoemde punten), `\draadbalk` (doorzichtige balk met gestippelde verborgen ribben) en `\hoeklabel` (hoekboogje met een label zoals $\alpha$ of $35^\circ$). Verder `\naast`, `\figuren`, `metgrafiek`, `stappenbreed` en `stappenvrij`. De TikZ-bibliotheken `angles` en `quotes` worden in `notatie.tex` geladen.

## Leerplan

KOV, 2de graad D-finaliteit: II-Wis-d (pakket 1, versie oktober 2024), II-Wis'-d (pakket 2, oktober 2024), II-WisS'-d (pakket 3, juni 2024), II-WisS-d (pakket 4, oktober 2024) en II-WisS''-d (pakket 5, oktober 2024), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde. Rubriek 4.3.2 "De stelling van Pythagoras en driehoeksmeting in rechthoekige driehoeken" heeft in alle vijf dezelfde nummers en bijna woordelijk dezelfde wenken. De verschillen: de omgekeerde stelling is een extra in pakket 1-3 en een wenk in pakket 4-5 (in het servicedocument voor 5 uur verplicht); pakket 4 heeft een extra (de vergelijking van een cirkel met de afstandsformule), die in pakket 5 bij B3 staat; pakket 5 heeft B1 (bewijzen), met de stelling van Pythagoras, de afstandsformule en de grondformule als voorbeelden (in het servicedocument verplicht).

| Hoofdstuk | 1 Basis | 2 B+ | 3 B+S' | 4 B+S | 5 B+S'' |
|---|---|---|---|---|---|
| 1. De stelling van Pythagoras | LPD 10 | LPD 10 | LPD 10 | LPD 10 | LPD 10 (bewijzen: B1) |
| 2. Sinus, cosinus en tangens | LPD 11 | LPD 11 | LPD 11 | LPD 11 | LPD 11 (bewijzen: B1) |

Overal ook LPD 1-4 (fenomenen beschrijven, vraagstukken, ICT, redeneren). Complementaire hoeken en de exacte waarden voor $30^\circ$, $45^\circ$ en $60^\circ$ (pakket 4-5) vraagt LPD 11 niet: ze bereiden Goniometrie voor (LPD 15-16 in pakket 4-5, die ze als voorkennis gebruikt).

## Verschillen per pakket

Alle pakketten hebben dezelfde twee hoofdstukken. De verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Bewijs van Pythagoras met oppervlaktes | x | x | x | x | x |
| Tweede bewijs van Pythagoras, met gelijkvormige driehoeken (hoogtelijn op de schuine zijde) | | | | | x |
| Bewijs van de omgekeerde stelling (met ZZZ) | | | | | x |
| Algemene formule $h = \tfrac{\sqrt3}{2}\,z$ voor de hoogte van een gelijkzijdige driehoek (één zin onder het voorbeeld) | | | | x | x |
| Opdracht met Pythagoras en wortels, exact zonder rekenmachine | | x | x | x | x |
| Opdracht drietallen van Pythagoras: nagaan (1-4) of bewijzen (5), hetzelfde id | x | x | x | x | x |
| Afstand tussen twee punten met de formule (kader met bewijs, voorbeeld met negatieve coördinaten, werkwijze) | x | x | x | x | x |
| Hoogte van een piramide uit de opstaande ribben (voorbeeld, korte oefening) | x | x | x | x | x |
| Opdracht: bewijzen met Pythagoras (ruit, hoogte op de schuine zijde) | | | | | x |
| Opdracht: de vergelijking van een cirkel met de afstandsformule (`h1-o27`) | | | | x | x |
| Bewijs van de grondformule en van $\tan\alpha = \tfrac{\sin\alpha}{\cos\alpha}$ | x | x | x | x | x |
| Graden, minuten en seconden (subsectie, twee voorbeelden, korte oefening `h2-dms`) | x | x | x | x | x |
| Complementaire hoeken (subsectie, voorbeeld, korte oefening, opdracht) | | | | x | x |
| Exacte waarden voor $30^\circ$, $45^\circ$ en $60^\circ$ (subsectie, voorbeeld, korte oefening, opdracht) | | | | x | x |
| Opdracht: identiteiten bewijzen met de grondformule | | | | | x |

Complementaire hoeken en de bijzondere hoeken staan in pakket 4 en 5 als voorbereiding op het handboek Goniometrie, dat alleen die pakketten hebben.

## Aantallen

| | Korte oefeningen (deelvragen) | Opdrachten (deelvragen) | Test (deelvragen) |
|---|---|---|---|
| Hoofdstuk 1, pakket 1 | 9 (27) | 24 (75) | 7 (8) |
| Hoofdstuk 1, pakket 2-3 | 9 (27) | 25 (80) | 7 (8) |
| Hoofdstuk 1, pakket 4 | 9 (27) | 26 (84) | 7 (8) |
| Hoofdstuk 1, pakket 5 | 9 (27) | 27 (86) | 7 (8) |
| Hoofdstuk 2, pakket 1-3 | 11 (30) | 23 (66) | 7 (8) |
| Hoofdstuk 2, pakket 4 | 13 (36) | 25 (73) | 7 (8) |
| Hoofdstuk 2, pakket 5 | 13 (36) | 26 (76) | 7 (8) |

Daarbij per hoofdstuk een Opwarmer en een Verken, en in de zelfstudieversie Nu jij.

## Toetsing aan het leerplan (24 november 2026)

Wat het leerplan besliste en wat er veranderde:

- **LPD per hoofdstuk.** Hoofdstuk 1 is LPD 10, hoofdstuk 2 is LPD 11, in alle vijf de leerplannen. De leerkrachtenversie zegt dat nu per hoofdstuk, met de wenken die het hoofdstuk volgt; de zin "is na te kijken" is weg.
- **Afstand tussen twee punten.** Een wenk bij LPD 10 in alle pakketten vraagt de analytische uitdrukking. Er staat nu een kader met de formule en een kort bewijs (met $\abs{x_B - x_A}$), een tweede voorbeeld met negatieve coördinaten en een werkwijze, in alle pakketten. Testvraag `h1-t5` verwijst nu naar dat voorbeeld. Voor pakket 5 noemt het servicedocument het bewijs van de afstandsformule bij B1.
- **Hoogte van een piramide.** De wenk bij LPD 10 vraagt de ruimtediagonaal van een balk of de hoogte van een piramide, waarbij leerlingen tweemaal een geschikt vlak kiezen. De ruimtediagonaal stond erin, de hoogte van een piramide niet (alleen de hoogte van een zijvlak uit de hoogte van de piramide). Nieuw: voorbeeld `vb:h1-piramide2` (grondvlak 8 bij 8, ribben 9, hoogte 7) en een deelvraag in `h1-ruimte`.
- **Irrationale lengtes construeren** ($\sqrt2$, $\sqrt5$, wenk bij LPD 10): de wortelspiraal stond erin; `h1-o13` vraagt nu ook om $\sqrt5$ en $\sqrt{10}$ rechtstreeks te tekenen.
- **De stelling in woorden** (wenk bij LPD 10: een formulering in woorden heeft de voorkeur). De tekst na het kader zegt nu uitdrukkelijk dat leerlingen de stelling in woorden onthouden, omdat $a^2 + b^2 = c^2$ alleen klopt als $c$ de schuine zijde is.
- **Omgekeerde stelling.** Extra in pakket 1-3, wenk in pakket 4-5, verplicht in het servicedocument voor 5 uur. Ze blijft in alle pakketten (kort, en ze verklaart het touw met dertien knopen); de leerkrachtenversie zegt in pakket 1-3 dat het een extra is. Het bewijs (met ZZZ) blijft in pakket 5.
- **Vergelijking van een cirkel.** Een extra bij LPD 10 in pakket 4 (bij B3 in pakket 5). Analytische meetkunde laat de cirkelvergelijking weg; hier staat ze nu als opdracht van niveau 3, `h1-o27`, in pakket 4-5.
- **Eén getal bepaalt de hoek** (wenk bij LPD 11): nieuwe alinea bij "Een hoek berekenen" (hoe groter de scherpe hoek, hoe groter sinus en tangens, hoe kleiner de cosinus). Cyclometrische functies zijn niet nodig: $\sin^{-1}$ blijft een toets van de rekenmachine, zoals het al stond.
- **Hoeken in decimale graden.** Het leerplan laat beide schrijfwijzen toe en noemt het voordeel van graden, minuten en seconden. Nieuwe subsectie "Graden, minuten en seconden" (kader, twee voorbeelden, korte oefening `h2-dms`) in alle pakketten. De rest van het boek blijft in decimale graden, afgerond op $0{,}01^\circ$; de tekst en de leerkrachtenversie zeggen dat je anders op een seconde afrondt.
- **Complementaire hoeken en exacte waarden voor $30^\circ$, $45^\circ$ en $60^\circ$.** LPD 11 vraagt ze in geen enkel pakket. Ze blijven in pakket 4-5, omdat Goniometrie (alleen pakket 4-5) ze als voorkennis gebruikt; het servicedocument voor 5 uur noemt de complementaire hoeken bij LPD 16. De leerkrachtenversie zegt dat. In pakket 1-3 staan ze niet, zoals voordien; de 3de graad (Goniometrische functies) leidt de exacte waarden zelf af.
- **Bewijzen.** Het bewijs van Pythagoras met oppervlaktes, de diagonaal van een balk, de afstandsformule, de grondformule en $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$ staan in alle pakketten (kort en verklarend, zoals de ontwerpregels voor de 2de graad vragen). Het tweede bewijs van Pythagoras, het bewijs van de omgekeerde stelling en de bewijsopdrachten blijven in pakket 5 (B1).
- **Pakket 1** heeft de omgekeerde stelling (extra, zie hoger) en Pythagoras in de ruimte (piramide en kegel) wel nodig: de ruimtelijke toepassing staat in LPD 10 zelf, met de piramide in de wenk.

Wat open blijft (het leerplan beslist het niet):

- **Bewust opgenomen, buiten de wenken:** het criterium scherp/stomp met $c^2$ en $a^2 + b^2$ (uitleg en een opdracht van niveau 3), het hellingspercentage (past bij LPD 11 als meetkundig probleem, en bij de tangens en de rico in Goniometrie, LPD 15), de kegel, en de opdracht over de horizon (met de raaklijn loodrecht op de straal, gegeven in de opgave). Laat staan als de tijd het toelaat.
- **Metrische betrekkingen.** Het servicedocument voor 5 uur maakt de metrische betrekkingen in een rechthoekige driehoek verplicht, bij de gelijkvormigheid (LPD 9). Het tweede bewijs van Pythagoras (pakket 5) gebruikt $b^2 = pc$ en $a^2 = qc$; de andere betrekkingen (zoals $h^2 = pq$) horen in Gelijkvormigheid.
- **Afstandsformule in pakket 4-5:** opgelost: Vectoren leidt ze niet meer opnieuw af, maar noemt ze de norm van $\vect{AB}$ en verwijst hierheen.
- **Notatie.** $\tan$ (niet $\mathrm{tg}$), $\sin^{-1}$, $\cos^{-1}$ en $\tan^{-1}$ voor de toetsen van de rekenmachine, $\sin^2\alpha$ voor $(\sin\alpha)^2$, hoeken als $\hoek{A}$, lengte als $|AB|$, minuten en seconden als $36^\circ 52' 12''$. De namen *hoogtehoek* en *dieptehoek*, *overstaande* en *aanliggende rechthoekszijde*. Kijk of dat de afspraken van de school zijn.
- **Volgorde.** Hoofdstuk 1 veronderstelt vierkantswortels (Reële getallen); het bewijs met oppervlaktes heeft geen andere voorkennis nodig dan de oppervlakte van een driehoek. Hoofdstuk 2 herhaalt kort het kenmerk HH uit Gelijkvormigheid (in het leerplan rubriek 4.3.1, vóór deze rubriek), zodat het ook werkt als die cursus later komt. Het tweede bewijs van Pythagoras (pakket 5) gebruikt ook HH. In de afstandsformule staat de absolute waarde (1ste graad).
- **Feiten in de tekst.** Pythagoras in de 6de eeuw voor Christus; kleitabletten uit Babylonië van bijna 4000 jaar oud met drietallen van Pythagoras; Cézanne schilderde de Mont Sainte-Victoire tientallen keren. De getallen in het probleem van hoofdstuk 2 (hoek $9^\circ$, 5,6 km) zijn verzonnen, niet de echte berg.
- **Getallen in contexten** zijn afgeronde of verzonnen waarden: het voetbalveld van 105 m bij 68 m, het A4-formaat (21 cm bij 29,7 cm), de straal van de aarde (6371 km), de trap met treden van 18 cm bij 26 cm, een rolstoelhelling van hoogstens 5 %.
- **Prenten.** Er staan geen prenten bij de opdrachten.
- **Opmaak.** In pakket 4 en 5 staat het schema Fout? Herhaal van hoofdstuk 1 alleen op een pagina, omdat de opdrachten en de test de pagina ervoor vullen.

## Controle

De afgeronde getallen zijn nagerekend met Python (alle lengtes, hoeken en goniometrische getallen in voorbeelden, korte oefeningen, opdrachten en test), de exacte wortels met de hand; de nieuwe getallen van de toetsing (afstand $\sqrt{34}$, piramides met hoogte 7 en $\sqrt7$, de cirkel met snijpunten $1 \pm \sqrt{21}$, de omzettingen naar minuten en seconden) met SymPy. Bewijzen en uitlegvragen zijn niet nagerekend. Alle vijf pakketten bouwen zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
