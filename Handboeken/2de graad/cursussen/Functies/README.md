# Functies: bron

Bron van het handboek Analyse/Functies van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (24 november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Wat is een functie? | `hoofdstukken/01-functies.tex` | 1-5 |
| 2. Eerstegraadsfuncties | `hoofdstukken/02-eerstegraadsfuncties.tex` | 1-5 |
| 3. Kenmerken en grafisch oplossen | `hoofdstukken/03-kenmerken.tex` | 1-5 |
| 4. De functie $f(x) = \frac{c}{x}$ | `hoofdstukken/04-omgekeerd-evenredig.tex` | 2 (keuzehoofdstuk, K1), 3-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`:

- grafieken: `\rooster` en `\roosterleeg` (met namen voor de assen als optie), `\xgetallen`, `\ygetallen`, `\xlabels`, `\ylabels`, `\oorsprong`, `\kromme`, `\rechte`, `\doorpunten` (vloeiend door gegeven punten), `\gebroken`, `\punt`, `\openpunt`, `\aflezen`, `\trapje` (de richtingscoëfficiënt, zoals op de voorkant), `\asdeel`, en de TikZ-stijlen `tweede` en `hulplijn`;
- tabellen: `\waardetabel`, `\tekenschema` (ook als verlooptabel met `\stijgt`, `\daalt`, `\cst` en `\extr`);
- intervallen zoals in Eerstegraadsvergelijkingen: `\ivgg`, `\ivoo`, `\ivgo`, `\ivog`, `\pinf`, `\minf`, en de getallenas met haken (`\getallenas`, `\ivdeel`, `\haakl`, `\haakr`);
- `\dom`, `\ber`, `\R`, `\abs`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Inhoud

1. **Wat is een functie?** Probleem: het tarief van een parking (wat kost 3 uur 10 minuten, en hoe lang parkeerde wie 7 euro betaalt?). Onafhankelijke en afhankelijke veranderlijke; een verband in woorden, tabel, grafiek en voorschrift (een vallende steen), en verbanden zonder voorschrift; het begrip functie (hoogstens één $y$ bij elke $x$), de notatie $f(x)$ met het input-outputmodel, de test met verticale rechten, functiewaarden berekenen en aflezen in twee richtingen; van voorschrift naar tabel en grafiek, van verwoording naar voorschrift, losse punten of een doorlopende lijn, van grafiek naar verwoording; Terug naar het probleem met de trapgrafiek.
2. **Eerstegraadsfuncties.** Probleem: twee opritten naar een podium. Rechte evenredigheid $f(x) = mx$ met de evenredigheidsconstante; de richtingscoëfficiënt met het trapje (6 opzij, 1 omhoog, zoals op de voorkant), $m = \frac{y_2 - y_1}{x_2 - x_1}$, stijgen, dalen en steilheid; $f(x) = mx + q$, de grafiek tekenen met $q$ en een trapje, gelijke stappen in een tabel; het voorschrift opstellen uit een grafiek, door twee punten, met een punt en de rico ($y - y_1 = m(x - x_1)$), in een context, en evenwijdige rechten (met de verticale verschuiving).
3. **Kenmerken en grafisch oplossen.** Probleem: de temperatuur op een winterdag. Korte herhaling van intervallen (zonder kader); domein en bereik; nulwaarden en tekenschema, de nulwaarde $-\frac{q}{m}$; stijgen en dalen, verlooptabel, maximum en minimum (pakket 5 ook absoluut tegenover relatief); vergelijkingen en ongelijkheden grafisch oplossen, de unie, $f(x) = g(x)$ en $f(x) < g(x)$ met twee tarieven.
4. **De functie $f(x) = \frac{c}{x}$.** Probleem: een bus van 720 euro, gedeeld door de leerlingen. Omgekeerd evenredige grootheden (het product blijft gelijk), herkennen in een tabel, een ontbrekende waarde berekenen; de hyperbool met twee takken, waarom niet $x = 0$, de invloed van $c$, puntsymmetrie om de oorsprong, het voorschrift uit één punt; kenmerken ($\mathbb{R}_0$, tekenschema, dalend op elke tak apart, toenemende en afnemende daling of stijging), $\frac{c}{x} = k$ grafisch en algebraïsch, ongelijkheden grafisch. Pakket 5: het woord asymptoot, en hyperbolen opbouwen uit $\frac1x$.

## Leerplan

KOV, 2de graad D-finaliteit: II-Wis-d (pakket 1, versie oktober 2024), II-Wis'-d (pakket 2, oktober 2024), II-WisS'-d (pakket 3, juni 2024), II-WisS-d (pakket 4, oktober 2024) en II-WisS''-d (pakket 5, oktober 2024), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde (leerlijn "Wiskundeplan", aangepast aan B+S''). De doelen en wenken over functies zijn in de vijf leerplannen woordelijk gelijk; alleen de nummers verschillen. Pakket 5 krijgt bij LPD 28 twee extra's, en het servicedocument maakt enkele wenken verplicht of voegt er een toe.

| Hoofdstuk | 1 Basis | 2 B+ | 3 B+S' | 4 B+S | 5 B+S'' |
|---|---|---|---|---|---|
| 1. Wat is een functie? | LPD 17 | LPD 17 | LPD 17 | LPD 21 | LPD 21 |
| 2. Eerstegraadsfuncties | LPD 18, 19 | LPD 18, 19 | LPD 18, 19 | LPD 22, 23 | LPD 22, 23 (bewijzen: B1) |
| 3. Kenmerken en grafisch oplossen | LPD 20, 21 | LPD 20, 21 | LPD 20, 21 | LPD 24, 25 | LPD 24, 25 (bewijs: B1) |
| 4. De functie $\frac{c}{x}$ | – | K1 (keuze) | LPD 24 | LPD 28 | LPD 28 |

Overal ook LPD 1-4 (fenomenen beschrijven, vraagstukken, ICT, redeneren). Eerstegraadsvergelijkingen en -ongelijkheden algebraïsch (LPD 14-15 in pakket 1-3, 18-19 in 4-5) zijn voorkennis uit het handboek Eerstegraadsvergelijkingen; het leerplan stelt voor ze samen met het grafisch oplossen te brengen.

## Aantallen

Opdrachten (deelvragen) / korte oefeningen / testvragen, per hoofdstuk.

| Hoofdstuk | Pakket 1-4 | Pakket 5 |
|---|---|---|
| 1 | 23 (93) / 10 / 7 | 25 (99) / 10 / 7 |
| 2 | 23 (89) / 10 / 7 | 24 (92) / 10 / 7 |
| 3 | 22 (98) / 7 / 7 | 25 (106) / 8 / 7 |
| 4 (niet in 1) | 24 (99) / 9 / 7 | 27 (111) / 9 / 7 |

## Verschillen per pakket

Omdat de doelen en wenken in de vijf leerplannen gelijk zijn, zijn pakket 1-4 inhoudelijk gelijk (alleen de nummers in de leerkrachtenversie verschillen), op hoofdstuk 4 na: dat ontbreekt in pakket 1 (het leerplan Basis heeft geen $\frac{c}{x}$) en is in pakket 2 een keuzehoofdstuk (K1, vermeld in de leerkrachtenversie). Pakket 5 werkt met meer diepgang (B+S'' en het servicedocument) en heeft B1 (bewijzen).

| Onderdeel (alleen pakket 5) | Reden |
|---|---|
| H1: de pijlnotatie $f: x \mapsto 3x - 4$ (uitleg) | niet gevraagd; meer diepgang in 5 |
| H1: opdracht met letters als argument, $f(a + 1)$ (`h1-o23`), en met een functie in stukken (`h1-o25`) | niet gevraagd; meer diepgang in 5 |
| H2: bewijs bij de eigenschap "Stappen in een tabel" (in pakket 1-4 een uitleg in lopende tekst) en de bewijsopdracht $\frac{x}{a} + \frac{y}{b} = 1$ (`h2-o24`) | B1 |
| H3: relatief en absoluut extremum: kader, voorbeeld, korte oefening `h3-absoluut`, opdracht `h3-o23`, testvraag `h3-t4` met absolute extrema (pakket 1-4 een variant zonder, met hetzelfde id) | niet gevraagd; het servicedocument vraagt de extrema van een willekeurige functie, het absolute extremum is verdieping |
| H3: opdracht nulwaarde met een parameter (`h3-o24`) en het bewijs dat rechten met dezelfde rico elkaar niet snijden (`h3-o25`) | meer diepgang in 5; B1 |
| H4: het woord asymptoot in een kader (in 2-4 informeel: de grafiek komt steeds dichter bij de assen) | extra wenk bij LPD 28 (asymptoten) en "gedrag in de buurt van 0" |
| H4: opdracht symmetrie om $y = x$ en $y = -x$ (`h4-o23`) | niet gevraagd; meer diepgang in 5 |
| H4: de verschoven hyperbool $\frac{6}{x} + 2$ (`h4-o24`) en hyperbolen opbouwen uit $\frac1x$ met $k \cdot f(x)$ en $f(x - k)$ (`h4-o27`) | extra wenk bij LPD 28 |

## Toetsing aan het leerplan (24 november 2026)

Wat het leerplan besliste en wat er veranderde:

- **Puntrichtingsvorm.** Het voorschrift opstellen door een punt met gegeven rico staat in een wenk bij LPD 19 (pakket 1-3) en LPD 23 (pakket 4-5): eerst de rico uit twee punten, dan die techniek. In het servicedocument voor pakket 5 is ze verplicht. De subsectie "Met een punt en de rico" met $y - y_1 = m(x - x_1)$ (kader, voorbeeld, korte oefening `h2-puntrico`, opdracht `h2-o13`) staat nu in alle pakketten, niet meer alleen in 4-5.
- **Relatief en absoluut extremum.** Geen enkel leerplan vraagt het; pakket 4 heeft dezelfde doelen als pakket 3. Nu alleen in pakket 5 (het servicedocument vraagt daar de extrema van een willekeurige functie). Ook de pijlnotatie, $f(a + 1)$ (`h1-o23`), de opdracht met een parameter (`h3-o24`), het woord asymptoot en de symmetrieassen $y = \pm x$ (`h4-o23`) staan nu alleen in pakket 5, om dezelfde reden.
- **De functie $\frac{c}{x}$.** De wenk bij K1, LPD 24 en LPD 28 noemt als kenmerken ook de symmetrie ten opzichte van de oorsprong, het gedrag op oneindig en toenemende of afnemende stijging of daling. De puntsymmetrie (met het korte bewijs en `h4-symmetrie`) staat nu in pakket 2-5. Toenemende en afnemende daling en stijging waren er niet: nieuwe subsectie "Hoe snel stijgt of daalt de grafiek?" met kader, tabel, voorbeeld (fietstijd $\frac{720}{v}$), korte oefening `h4-verloopsnel` en opdracht `h4-o26` (hyperbool tegenover rechte), in pakket 2-5. Het gedrag op oneindig en bij 0 staat er informeel in, voor alle pakketten. Voor pakket 5 volgt de opdracht `h4-o27` de extra wenk ($k \cdot f(x)$, $f(x) + k$, $f(x - k)$ en de asymptoten).
- **LPD 17-wenken.** Het input-outputmodel en verbanden zonder voorschrift staan nu kort in hoofdstuk 1; de onafhankelijke en afhankelijke veranderlijke en de verwoording stonden er al.
- **LPD 18-wenken.** Het woord evenredigheidsconstante (naast evenredigheidsfactor) en de verticale verschuiving van $y = mx$ naar $y = mx + q$ bij de evenwijdige rechten zijn toegevoegd. De constante functie, de rico uit voorschrift, tabel, twee punten en grafiek, en gelijke stappen in een tabel stonden er al.
- **LPD per hoofdstuk.** In de leerkrachtenversie staat nu per hoofdstuk het juiste nummer (zie de tabel Leerplan), met de wenken die het hoofdstuk volgt; de zin "is na te kijken" is weg.
- **Bewust opgenomen.** Een functie met sprongen (parking, pakjes): past bij LPD 17 (verbanden zonder voorschrift). Het hellingspercentage, de constante functie, dat een verticale rechte geen rico heeft en evenwijdige rechten: wenken bij LPD 18 en (voor Stelsels) LPD 22. Contexten passen bij de aandachtspunten ("met en zonder context").

Wat open blijft (het leerplan beslist het niet):

- **Kenmerken van een willekeurige functie.** Pakket 1-4 vragen de kenmerken (domein, bereik, nulwaarde, tekenverloop, stijgen en dalen) voor eerstegraadsfuncties, en later per functietype (het extremum bij de tweedegraadsfuncties). Hoofdstuk 3 leest ze eerst af op willekeurige grafieken, met maximum en minimum, als voorbereiding. Dat is een didactische keuze; voor pakket 5 vraagt het servicedocument het wel. Zo ook de grafieken van niet-lineaire functies bij het grafisch oplossen (LPD 21/25 vraagt alleen eerstegraads); het voorbeeld met twee tarieven en de opdrachten met twee rechten dekken het doel zelf.
- **De unie van intervallen** (ook in pakket 1). Niet uitdrukkelijk gevraagd, maar nodig voor het probleem (wanneer vroor het) en aansluitend bij de bewerkingen met verzamelingen uit de 1ste graad. Laat staan.
- **Notatie.** Het leerplan schrijft $f(x) = ax + b$; dit boek $f(x) = mx + q$, zodat het past bij $m = \frac16$ op de voorkant (en bij Analytische meetkunde in pakket 5). De leerkrachtenversie zegt dat. Verder: $\operatorname{dom} f$, $\operatorname{ber} f$, $\mathbb{R}_0$, de oplossingsverzameling $V$, intervallen in de Vlaamse notatie (zoals in Eerstegraadsvergelijkingen), en een punt met een decimale coördinaat met een puntkomma, $(1,5;\ 68,75)$.
- **Definitie van functie.** "Bij elke waarde van $x$ hoort hoogstens één waarde van $y$", zonder domein (dat komt in hoofdstuk 3). Kies de definitie van de school als die "precies één" met een domein gebruikt.
- **Stijgen en dalen** staan met gesloten intervallen als de grenzen tot het domein behoren (sommige handboeken gebruiken open intervallen). Een extremum ligt in dit boek altijd waar stijgen overgaat in dalen of omgekeerd, niet in een eindpunt van het domein; alleen het absolute extremum (5) kan in een eindpunt liggen. Bij $\frac{c}{x}$: "dalend op $]-\infty, 0[$ en dalend op $]0, +\infty[$", met een streep bij 0 in het tekenschema. Toenemende en afnemende daling staan informeel, met gelijke stappen in een tabel.
- **Pakket 5: verband met de cartesische vergelijking.** Het servicedocument stelt voor het voorschrift al hier te verbinden met de cartesische vergelijking van een rechte; dat staat in Stelsels (LPD 26) en Analytische meetkunde. Hier alleen de bewijsopdracht $\frac{x}{a} + \frac{y}{b} = 1$.
- **Voorkennis uit Eerstegraadsvergelijkingen.** Dit boek veronderstelt het niet gezien. Eerstegraadsvergelijkingen oplossen wordt kort herhaald in hoofdstuk 2 en 3, de intervallen in hoofdstuk 3 (als uitleg, zonder kader), en de unie wordt in hoofdstuk 3 ingevoerd. $x^2 = 4$ in een opdracht van hoofdstuk 4 veronderstelt vierkantswortels uit Reële getallen.
- **Contexten met eigen gekozen getallen**, geen echte tarieven of regels: de parking, de vuistregel voor de remweg $\bigl(\frac{v}{10}\bigr)^2$, de oprit van "hoogstens 5 %" (als "stel dat"), taxi's, temperaturen, de bus van 720 euro, de wet van Boyle met afgeronde getallen.
- **Opmaak.** Door de regel "elke sectie op een nieuwe pagina" blijven er soms halflege pagina's over. In hoofdstuk 2 van pakket 5 breekt het kader met de eigenschap "Stappen in een tabel" tussen de eigenschap en het bewijs (zoals de opmaak toelaat).

## Controle

De uitkomsten zijn nagerekend met Python en SymPy (functiewaarden, nulwaarden, snijpunten, extrema, oplossingen van vergelijkingen en ongelijkheden, afgeronde getallen). Afgelezen waarden liggen op knooppunten van de grafieken, of staan er met "ongeveer" bij. Alle vijf pakketten bouwen zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
