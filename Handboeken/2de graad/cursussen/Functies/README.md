# Functies: bron

Bron van het handboek Analyse/Functies van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

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

1. **Wat is een functie?** Probleem: het tarief van een parking (wat kost 3 uur 10 minuten, en hoe lang parkeerde wie 7 euro betaalt?). Onafhankelijke en afhankelijke veranderlijke; een verband in woorden, tabel, grafiek en voorschrift (een vallende steen); het begrip functie (hoogstens één $y$ bij elke $x$), de notatie $f(x)$, de test met verticale rechten, functiewaarden berekenen en aflezen in twee richtingen; van voorschrift naar tabel en grafiek, van verwoording naar voorschrift, losse punten of een doorlopende lijn, van grafiek naar verwoording; Terug naar het probleem met de trapgrafiek.
2. **Eerstegraadsfuncties.** Probleem: twee opritten naar een podium. Rechte evenredigheid $f(x) = mx$; de richtingscoëfficiënt met het trapje (6 opzij, 1 omhoog, zoals op de voorkant), $m = \frac{y_2 - y_1}{x_2 - x_1}$, stijgen, dalen en steilheid; $f(x) = mx + q$, de grafiek tekenen met $q$ en een trapje, gelijke stappen in een tabel; het voorschrift opstellen uit een grafiek, door twee punten, met een punt en de rico (4-5), in een context, en evenwijdige rechten.
3. **Kenmerken en grafisch oplossen.** Probleem: de temperatuur op een winterdag. Korte herhaling van intervallen (zonder kader); domein en bereik; nulwaarden en tekenschema, de nulwaarde $-\frac{q}{m}$; stijgen en dalen, verlooptabel, maximum en minimum (4-5 ook absoluut tegenover relatief); vergelijkingen en ongelijkheden grafisch oplossen, de unie, $f(x) = g(x)$ en $f(x) < g(x)$ met twee tarieven.
4. **De functie $f(x) = \frac{c}{x}$.** Probleem: een bus van 720 euro, gedeeld door de leerlingen. Omgekeerd evenredige grootheden (het product blijft gelijk), herkennen in een tabel, een ontbrekende waarde berekenen; de hyperbool met twee takken, waarom niet $x = 0$, de invloed van $c$, symmetrie (4-5), het voorschrift uit één punt; kenmerken ($\mathbb{R}_0$, tekenschema, dalend op elke tak apart), $\frac{c}{x} = k$ grafisch en algebraïsch, ongelijkheden grafisch.

## Aantallen

Opdrachten (deelvragen) / korte oefeningen / testvragen, per hoofdstuk.

| Hoofdstuk | Pakket 1-3 | Pakket 4 | Pakket 5 |
|---|---|---|---|
| 1 | 23 (93) / 10 / 7 | 24 (95) / 10 / 7 | 25 (99) / 10 / 7 |
| 2 | 22 (85) / 9 / 7 | 23 (89) / 10 / 7 | 24 (92) / 10 / 7 |
| 3 | 22 (98) / 7 / 7 | 24 (104) / 8 / 7 | 25 (106) / 8 / 7 |
| 4 (niet in 1) | 23 (95) / 7 / 7 | 24 (98) / 8 / 7 | 25 (103) / 8 / 7 |

## Verschillen per pakket

Pakket 1 heeft LPD 17-21 en drie hoofdstukken; pakket 2 heeft LPD 17-21 en hoofdstuk 4 als keuzehoofdstuk (K1); pakket 3 heeft LPD 17-21 en 24; pakket 4 en 5 hebben LPD 21-25 en 28. De verschillen in diepgang zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Hoofdstuk 4, de functie $\frac{c}{x}$ (in pakket 2 als keuzehoofdstuk, vermeld in de leerkrachtenversie) | | x | x | x | x |
| H1: de pijlnotatie $f: x \mapsto 3x - 4$ (uitleg) | | | | x | x |
| H1: opdracht met letters als argument, $f(a + 1)$ (`h1-o23`) | | | | x | x |
| H1: opdracht met een functie in stukken (`h1-o25`) | | | | | x |
| H2: de vorm $y - y_1 = m(x - x_1)$: subsectie, voorbeeld, korte oefening `h2-puntrico`, opdracht `h2-o13` | | | | x | x |
| H2: bewijs bij de eigenschap "Stappen in een tabel" (in pakket 1-4 een uitleg in lopende tekst) | | | | | x |
| H2: bewijsopdracht, de vergelijking $\frac{x}{a} + \frac{y}{b} = 1$ (`h2-o24`) | | | | | x |
| H3: relatief en absoluut extremum: kader, voorbeeld, korte oefening `h3-absoluut`, opdracht `h3-o23` | | | | x | x |
| H3: testvraag `h3-t4` met absolute extrema (pakket 1-3 een variant zonder, met hetzelfde id) | | | | x | x |
| H3: opdracht nulwaarde met een parameter (`h3-o24`) | | | | x | x |
| H3: bewijs dat twee rechten met dezelfde rico elkaar niet snijden (`h3-o25`) | | | | | x |
| H4: het woord asymptoot in een kader (in 2-3 informeel: de grafiek komt steeds dichter bij de assen) | | | | x | x |
| H4: puntsymmetrie om de oorsprong, met een kort bewijs en korte oefening `h4-symmetrie` | | | | x | x |
| H4: opdracht symmetrie om $y = x$ en $y = -x$ (`h4-o23`) | | | | x | x |
| H4: de verschoven hyperbool $\frac{6}{x} + 2$ (`h4-o24`) | | | | | x |

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad, de LPD-tabel en de kennis van het leerplan. Na te kijken in het leerplan: welke onderdelen hierboven echt in welk pakket horen, vooral de puntrichtingsvorm (nu alleen 4-5), relatief en absoluut extremum (nu alleen 4-5), de unie van intervallen in pakket 1, en het woord asymptoot (nu alleen in een kader in 4-5).
- **LPD per hoofdstuk.** De leerkrachtenversie zegt bij hoofdstuk 1-3 "LPD 17-21" (pakket 1-3) of "LPD 21-25" (pakket 4-5), met wat het hoofdstuk behandelt, en bij hoofdstuk 4 K1, LPD 24 of LPD 28. Welk nummer precies bij welk hoofdstuk hoort, is niet nagekeken.
- **Notatie.** De rico heet $m$ en het voorschrift $f(x) = mx + q$, zodat het boek past bij $m = \frac16$ op de voorkant (en bij Analytische meetkunde in pakket 5). Veel scholen schrijven $f(x) = ax + b$; de leerkrachtenversie zegt dat. Verder: $\operatorname{dom} f$, $\operatorname{ber} f$, $\mathbb{R}_0$, de oplossingsverzameling $V$, intervallen in de Vlaamse notatie (zoals in Eerstegraadsvergelijkingen), en een punt met een decimale coördinaat met een puntkomma, $(1,5;\ 68,75)$.
- **Definitie van functie.** "Bij elke waarde van $x$ hoort hoogstens één waarde van $y$", zonder domein (dat komt in hoofdstuk 3). Kies de definitie van de school als die "precies één" met een domein gebruikt.
- **Stijgen en dalen** staan met gesloten intervallen als de grenzen tot het domein behoren (sommige handboeken gebruiken open intervallen). Een extremum ligt in dit boek altijd waar stijgen overgaat in dalen of omgekeerd, niet in een eindpunt van het domein; alleen het absolute extremum (4-5) kan in een eindpunt liggen. Bij $\frac{c}{x}$: "dalend op $]-\infty, 0[$ en dalend op $]0, +\infty[$", met een streep bij 0 in het tekenschema.
- **Bewust opgenomen, misschien buiten het leerplan:** een functie met sprongen (parking, pakjes), letters als argument (4-5), een functie in stukken (5), het hellingspercentage, de constante functie en dat een verticale rechte geen rico heeft, evenwijdige rechten (alle pakketten), en $x^2 = 4$ in een opdracht van hoofdstuk 4 (veronderstelt vierkantswortels uit Reële getallen). Bewust weggelaten: loodrechte rechten (Analytische meetkunde).
- **Voorkennis uit Eerstegraadsvergelijkingen.** Dat handboek wordt parallel geschreven; dit boek veronderstelt het niet gezien. Eerstegraadsvergelijkingen oplossen wordt kort herhaald in hoofdstuk 2 en 3, de intervallen in hoofdstuk 3 (als uitleg, zonder kader), en de unie wordt in hoofdstuk 3 ingevoerd.
- **Contexten met eigen gekozen getallen**, geen echte tarieven of regels: de parking, de vuistregel voor de remweg $\bigl(\frac{v}{10}\bigr)^2$, de oprit van "hoogstens 5 %" (als "stel dat"), taxi's, temperaturen, de bus van 720 euro, de wet van Boyle met afgeronde getallen.
- **Opmaak.** Door de regel "elke sectie op een nieuwe pagina" blijven er soms halflege pagina's over. In hoofdstuk 2 van pakket 5 breekt het kader met de eigenschap "Stappen in een tabel" tussen de eigenschap en het bewijs (zoals de opmaak toelaat).

## Controle

De uitkomsten zijn nagerekend met Python en SymPy (functiewaarden, nulwaarden, snijpunten, extrema, oplossingen van vergelijkingen en ongelijkheden, afgeronde getallen). Afgelezen waarden liggen op knooppunten van de grafieken, of staan er met "ongeveer" bij. Alle vijf pakketten bouwen zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
