# Statistiek: bron

Bron van het handboek Data en onzekerheid/Statistiek van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Alle gegevens zijn verzonnen (realistisch gekozen) en worden in de tekst ook zo voorgesteld. Status: eerste versie, getoetst aan de leerplannen van 2024 (zie *Leerplan*), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Gegevens voorstellen | `hoofdstukken/01-gegevens-voorstellen.tex` | 1-5 |
| 2. Centrum- en spreidingsmaten | `hoofdstukken/02-centrum-en-spreiding.tex` | 1-5 |
| 3. Gegevens analyseren | `hoofdstukken/03-analyseren.tex` | 1-5 |

Inhoud: (1) soorten variabelen (in pakket 5 ook nominaal en ordinaal), frequentietabel met relatieve en cumulatieve frequentie, klassen, staafdiagram, cirkeldiagram, lijndiagram, histogram, stam-en-bladdiagram (pakket 2-5), mediaan, kwartielen, vijfgetallensamenvatting en boxplot; (2) gemiddelde (ook uit een frequentietabel en geschat bij klassen), mediaan en modus, gemiddelde of mediaan, variatiebreedte, interkwartielafstand, standaardafwijking (met een tabel en met het rekentoestel); (3) symmetrisch en scheef, gemiddelde tegenover mediaan, uitschieters, groepen vergelijken met boxplots, aantallen of percentages, de juiste maat kiezen, misleidende grafieken (as niet bij 0, oppervlakte en pictogrammen, ongelijke tijdas en gekozen periode, kritisch lezen).

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: `\xbar`, `\Me`, `\Mo`, `\IKA`, `\VB`, `\abs`; voor diagrammen in TikZ `\getalas`, `\frequentieas`, `\staaf`, `\balk` (histogram), `\boxplot`, `\uitschieter`, `\stip` (stippendiagram), `\sector` (cirkeldiagram) en `\turf`; verder `\gegevens` (een kleine tabel met gegevens), en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Afspraken

- **Kwartielen.** $Q_1$ en $Q_3$ zijn de mediaan van de onderste en de bovenste helft; bij een oneven aantal gegevens hoort de mediaan bij geen van beide helften. Dat is de afspraak van de TI-84 (`1-Var Stats`). De mediaan wordt gegeven als $\mathrm{Me}$, zoals op de voorkant. Het leerplan legt geen methode vast (de wenk zegt alleen dat de boxplot de mediaan en de kwartielen nodig heeft); deze is met de hand te doen en geeft dezelfde uitkomst als het rekentoestel.
- **Standaardafwijking.** $s$ deelt door $n$: de wortel uit het gemiddelde kwadraat van de afwijkingen. Zo vraagt het leerplan het: de wenk bij LPD 28/32/34/38 gaat uit van een volledige populatie, met de populatiegrootte als noemer van de variantie. Op de TI-84 is dat $\sigma x$; de tekst zegt dat $Sx$ door $n - 1$ deelt en later bij steekproeven hoort, en noemt `STDEV.P` en `STDEV.S` van een rekenblad.
- **Klassen** zijn halfopen intervallen $[a, b[$; het gemiddelde bij klassen wordt geschat met de klassenmiddens.
- **Aansluiting bij de 3de graad.** De cursus Statistiek van de 3de graad begint bij populatie en steekproef, bias, en de normale verdeling, en veronderstelt het gemiddelde, de mediaan, de standaardafwijking $s$ van data, histogrammen en boxplots. Die staan hier; populatie, steekproef, bias, de normale verdeling en betrouwbaarheidsintervallen staan hier bewust niet. De 3de graad gebruikt geen kwartielen; ze schat $\mu$ en $\sigma$ met $\xbar$ en $s$ van de data zonder te zeggen hoe $s$ deelt. Het leerplan van de 3de graad verwijst daarvoor naar de standaardafwijking van de 2de graad, dus de 3de graad volgt best deze afspraak ($s = \sigma x$, deling door $n$), en zegt dat $Sx$ bij grote $n$ bijna hetzelfde geeft (te melden aan wie de 3de graad onderhoudt).

## Verschillen per pakket

Alle pakketten hebben dezelfde drie hoofdstukken. Het statistiekdeel (rubriek Beschrijvende statistiek) is in de vijf leerplannen hetzelfde, op de nummers en één extra na; de verschillen zijn daarom klein en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 | Reden |
|---|---|---|---|---|---|---|
| Stam-en-bladdiagram (subsectie, h1-stamblad, h1-o9, h1-o18, rug-aan-rug h3-o12); pakket 1 krijgt een eigen h1-o18 zonder, en voorbeeld vb:h1-boxplot geeft er de scores gerangschikt | | x | x | x | x | niet in de lijst van LPD 27/31/33/37; pakket 2-5 hebben een extra of wenk voor andere voorstellingswijzen, Basis niet |
| Nominaal en ordinaal (theorie, voorbeeld, korte oefening h1-ordinaal) | | | | | x | servicedocument 5 uur, bij LPD 37 |
| Histogram met ongelijke klassenbreedtes (opdracht h1-o22; pakket 1-4 krijgt in de plaats een opdracht over gegevens met dezelfde boxplot) | | | | | x | niet gevraagd; meer diepgang in B+S'' |
| Regel van $1,5 \cdot \mathrm{IKA}$ voor uitschieters en de aangepaste boxplot (theorie, voorbeeld, varianten van h3-uitschieter, h3-o7, h3-o21, h3-t3; pakket 1-4 herkent uitschieters op het zicht) | | | | | x | de wenk vraagt alleen aandacht voor uitschieters; meer diepgang in B+S'' |
| Alle gegevens verschuiven en vermenigvuldigen ($a x + b$): effect op de maten, met een kort bewijs (subsectie, korte oefening, opdracht h2-o21) | | | | | x | meer diepgang in B+S'', LPD B1 (bewijzen) |

De standaardafwijking met een tabel (voorbeeld, h2-sd, h2-o9, h2-t5) staat sinds de toetsing in alle pakketten: de wenk bij LPD 28 van Basis vraagt, net als bij de andere pakketten, de maten eerst zonder ICT met weinig gegevens. De varianten met alleen het rekentoestel voor pakket 1 zijn weg.

Het schema Fout? Herhaal kiest bij h3-t3 het juiste voorbeeld met `\alleenvoor`.

## Leerplan

Getoetst aan de leerplannen van 2024: II-Wis-d (pakket 1, oktober 2024), II-Wis'-d (pakket 2, oktober 2024), II-WisS'-d (pakket 3, juni 2024), II-WisS-d (pakket 4, oktober 2024), II-WisS''-d (pakket 5, oktober 2024) en het servicedocument voor 5 uur.

| Hoofdstuk | Doel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| 1. Gegevens voorstellen | voorstellingswijzen; de mediaan en de kwartielen voor de boxplot uit het tweede doel | 27 (28) | 31 (32) | 33 (34) | 37 (38) | 37 (38) |
| 2. Centrum- en spreidingsmaten | centrum- en spreidingsmaten | 28 | 32 | 34 | 38 | 38 |
| 3. Gegevens analyseren | analyseren, misleidingen | 29 | 33 | 35 | 39 | 39 |

Spreidingsdiagrammen (LPD 34, 36, 40 in pakket 2-5) staan in een eigen handboek; Basis heeft ze niet. Geen keuzedoelen of B-doelen over statistiek. Het extra over de cumulatieve frequentietabel en het ogief staat bij pakket 2-4 als extra, bij pakket 5 als wenk, bij pakket 1 niet.

## Na te kijken

Beslist door het leerplan:

- **Afbakening.** De lijst van voorstellingswijzen en maten is in alle pakketten dezelfde. De standaardafwijking hoort ook in pakket 1, en met de hand: aangepast. De regel van $1,5 \cdot \mathrm{IKA}$ vraagt geen enkel leerplan; hij staat nu alleen in pakket 5 (was 4-5), net als het histogram met ongelijke klassen. Het lijndiagram wordt gevraagd. Het stam-en-bladdiagram wordt niet genoemd: weg in pakket 1, extra in 2-5. De modale klasse en het gemiddelde bij klassen worden niet genoemd, maar horen bij het histogram en de modus; ze blijven.
- **LPD per hoofdstuk.** Het eerste doel hoort bij hoofdstuk 1, het tweede bij hoofdstuk 2 (de mediaan en de kwartielen al in hoofdstuk 1, volgens de wenk over de boxplot), het derde bij hoofdstuk 3. De leerkrachtenversie zegt het nu per hoofdstuk.
- **Standaardafwijking met $n$ of $n - 1$.** De wenk zegt: een volledige populatie, met de populatiegrootte als noemer. Dit boek deelt dus terecht door $n$ ($\sigma x$).
- **Wenk over de klassenbreedte.** Opdracht h1-o8 heeft er een deel d bij: hetzelfde histogram met bredere klassen, en wat je dan niet meer ziet.

Open (het leerplan beslist het niet):

- **Kwartielen.** Het leerplan legt geen methode vast. Rekentoestellen en programma's gebruiken verschillende afspraken: de TI-84 rekent zoals dit boek, Excel (`KWARTIEL`/`QUARTILE.INC`), GeoGebra en sommige Casio's kunnen bij weinig gegevens een iets ander $Q_1$ en $Q_3$ geven. Kies de afspraak van de vakgroep en zeg het aan de leerlingen.
- **Rekentoestel.** De uitleg gaat uit van de TI-84 (`STAT`, `CALC`, `1-Var Stats`). Werkt de school met een ander toestel, dan moet de subsectie "Met het rekentoestel" aangepast worden.
- **Cumulatieve frequentie in pakket 1.** Niet in het leerplan Basis (wel als extra in 2-5), maar gebruikt om de mediaan in een frequentietabel te vinden; ze blijft. Wie ze weglaat, moet ook de werkwijze in 2.1.4 en enkele oplossingen aanpassen.
- **Ogief.** Een extra (pakket 2-4) of wenk (pakket 5); niet opgenomen.
- **Zelf gegevens verzamelen** (wenk bij LPD 27): geen aparte opdracht; een enquête in de klas kan elke opdracht met verzonnen gegevens vervangen.
- **Bewust opgenomen, niet in het leerplan:** procent en procentpunt, de paradox van Simpson (opdracht niveau 3) en de gemiddelde snelheid (opdracht niveau 3). Ze passen bij de misleidingen en het kiezen van een maat.
- **Voorbeeld met de tandpasta** in hoofdstuk 3 raakt aan steekproefgrootte en vraagstelling; die komen in de 3de graad uitgebreid terug. Hier blijft het bij "weinig gegevens" en "wat was de vraag".
- **Getallen in contexten** (lonen, huizenprijzen, temperaturen, batterijduur, bezoekersaantallen) zijn verzonnen en niet aan echte bronnen getoetst.

## Controle

Alle centrum- en spreidingsmaten, kwartielen, frequenties, hoeken en percentages zijn nagerekend met een Python-script (mediaan en kwartielen volgens de afspraak hierboven, standaardafwijking met deling door $n$). Uitleg- en redeneervragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
