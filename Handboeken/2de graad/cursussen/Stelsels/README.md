# Stelsels: bron

Bron van het handboek Algebra/Stelsels van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Grafisch oplossen | `hoofdstukken/01-grafisch.tex` | 1-5 |
| 2. Algebraïsch oplossen | `hoofdstukken/02-algebraisch.tex` | 1-5 |
| 3. Vraagstukken | `hoofdstukken/03-vraagstukken.tex` | 1-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`:

- stelsels: `\stelsel{2x + y &= 8}{x + 3y &= 9}` (met de gelijkheidstekens onder elkaar);
- grafieken zoals in Functies: `\rooster`, `\roosterleeg`, `\xgetallen`, `\ygetallen`, `\xlabels`, `\ylabels`, `\oorsprong`, `\rechte` ($y = mx + q$), `\rechteabc` ($ax + by = c$), `\verticaal`, `\kromme`, `\punt`, `\openpunt`, `\aflezen`, `\trapje`, en de TikZ-stijlen `tweede` en `hulplijn`;
- de balans met twee soorten onbekenden, `\balansxy` (zakjes $x$, bollen $y$, blokjes van 1 kg), naar de balans van Eerstegraadsvergelijkingen;
- `\waardetabel`, `\R`, `\abs`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

De kleine prenten (`afbeeldingen/prenten/`, twee bij hoofdstuk 3) komen uit Rijen en Matrices; bron en licentie staan in de README daar.

## Inhoud

1. **Grafisch oplossen.** Probleem: twee balansen met zakjes en bollen (hoeveel weegt elk, en is er maar één mogelijkheid?). Een eerstegraadsvergelijking met twee onbekenden $ax + by = c$ en haar oplossingen (koppels); de oplossingen vormen een rechte, de vergelijking van een rechte; tekenen door $y$ vrij te maken of met de snijpunten met de assen; horizontale en verticale rechten; stelsel en oplossing van een stelsel; het snijpunt van twee rechten (met het motief van de voorkant, snijpunt $(2, 3)$); Terug naar het probleem; een snijpunt dat niet op het rooster ligt (grafisch is een benadering, ook met ICT); evenwijdige rechten (strijdig stelsel), samenvallende rechten (onbepaald stelsel), het aantal oplossingen met de rico's; in pakket 5 een stelsel met een parameter.
2. **Algebraïsch oplossen.** Probleem: twee kaarsen die op verschillende snelheid opbranden (wanneer zijn ze even lang, tot op de minuut?). Substitutie: eerst twee keer $y = \ldots$ (de gelijkstellingsmethode, als bijzonder geval van substitutie), dan een onbekende vrijmaken, met "gelijkwaardige stelsels" en de eigenschap Substitutie; combinatie: vergelijkingen optellen (met balansen), grafisch: de rechten veranderen maar het snijpunt blijft, eerst vermenigvuldigen; welke methode kies je; strijdige en onbepaalde stelsels algebraïsch ($0 = 9$ en $0 = 0$); eerst herleiden (haakjes, breuken).
3. **Vraagstukken.** Probleem: een kajakker met en tegen de stroom. Van vraagstuk naar stelsel (twee onbekenden, twee voorwaarden), één onbekende of twee (aansluiting bij Eerstegraadsvergelijkingen); prijzen en aantallen, mengsels, procenten; beweging (met en tegen de stroom, naar elkaar toe); meetkunde (omtrek, hoeken) en twee tarieven met de betekenis van het snijpunt.

## Aantallen

Opdrachten (deelvragen) / korte oefeningen / testvragen, per hoofdstuk.

| Hoofdstuk | Pakket 1 | Pakket 2-4 | Pakket 5 |
|---|---|---|---|
| 1 | 21 (76) / 9 / 7 | 22 (79) / 9 / 7 | 24 (85) / 10 / 8 |
| 2 | 22 (77) / 8 / 7 | 23 (79) / 8 / 7 | 25 (82) / 8 / 7 |
| 3 | 23 (60) / 8 / 7 | 24 (62) / 8 / 7 | 25 (64) / 8 / 7 |

## Leerplan

Getoetst aan de geldende KOV-leerplannen van de 2de graad D (november 2026). De doelen van dit onderwerp en hun wenken zijn in de vijf leerplannen woord voor woord dezelfde; alleen de nummers verschillen (22-23 in pakket 1-3, 26-27 in pakket 4-5). Geen enkel leerplan heeft hier een extra, en het servicedocument 5u herhaalt bij stelsels de tekst van het leerplan zonder aanvulling.

| Pakket | Leerplan (versie) | H1 | H2 | H3 |
|---|---|---|---|---|
| 1 | II-Wis-d (oktober 2024) | LPD 22 | LPD 23 | LPD 23, 22 (tarieven), 2 |
| 2 | II-Wis'-d (oktober 2024) | LPD 22 | LPD 23 | LPD 23, 22 (tarieven), 2 |
| 3 | II-WisS'-d (juni 2024) | LPD 22 | LPD 23 | LPD 23, 22 (tarieven), 2 |
| 4 | II-WisS-d (oktober 2024) | LPD 26 | LPD 27 | LPD 27, 26 (tarieven), 2 |
| 5 | II-WisS''-d (oktober 2024) en het servicedocument 5u | LPD 26; LPD B1 (bewijsopdracht) | LPD 27 | LPD 27, 26 (tarieven), 2 |

LPD 2 (alle pakketten) is het algemene doel "vraagstukken en problemen oplossen"; het servicedocument 5u noemt stelsels daar uitdrukkelijk. De LPD staan per hoofdstuk en per pakket in de `\lkr`-kaders.

## Verschillen per pakket

Alle pakketten hebben dezelfde drie hoofdstukken en dezelfde leerstof, op het stelsel met een parameter in pakket 5 na; pakket 2, 3 en 4 zijn voor dit onderwerp gelijk. De verschillen staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 | Reden |
|---|---|---|---|---|---|---|
| H1: opdracht "kies $c$ zodat de oplossing op een as ligt" (`h1-o22`) | | x | x | x | x | didactische keuze (zwaarder) |
| H1: een stelsel met een parameter bespreken met de rico's: subsectie, voorbeeld, korte oefening `h1-parameter`, opdracht `h1-o23`, testvraag `h1-t8` | | | | | x | verdieping in pakket 5, in de lijn van de wenk over parameters bij LPD 18; geen leerplaneis |
| H1: bewijsopdracht, dezelfde rico als en slechts als $ab' - a'b = 0$ (`h1-o24`) | | | | | x | LPD B1 (bewijzen), sluit aan bij LPD B4 (onderlinge ligging van rechten) |
| H2: opdracht met breuken met een som in de teller (`h2-o19`) | | x | x | x | x | didactische keuze (zwaarder) |
| H2: opdracht met een parameter, besproken met combinatie (`h2-o24`) | | | | | x | zoals de parameter in H1 |
| H2: stelsel in $\frac1x$ en $\frac1y$ (`h2-o26`) | | | | | x | didactische keuze (meer diepgang in pakket 5); nog altijd twee onbekenden |
| H3: opdracht met de cijfers van een getal (`h3-o21`) | | x | x | x | x | didactische keuze (zwaarder) |
| H3: opdracht met kranen, het deel van een vat per minuut (`h3-o24`) | | | | | x | didactische keuze (meer diepgang in pakket 5) |

Het schema Fout? Herhaal kiest de regel van een testvraag die maar in sommige pakketten staat met `\alleenvoor`.

## Wat het leerplan besliste

- **LPD per hoofdstuk**: zie de tabel hierboven. H1 is het grafisch oplossen (LPD 22/26), H2 het algebraïsch oplossen (LPD 23/27), H3 de vraagstukken (LPD 2, met het algebraïsch oplossen en grafisch bij de tarieven). In de vroegere eerste versie stond overal "LPD 22-23" of "26-27" zonder verdeling.
- **Afbakening: twee vergelijkingen met twee onbekenden** in alle pakketten. Weggelaten: de opdrachten met drie onbekenden (vroeger `h2-o25` en `h3-o23`, pakket 4-5) en de regel van Cramer met de determinant (vroeger sectie 2.4 met `h2-cramer`, `h2-o20` en testvraag `h2-t8`, pakket 5). Stelsels met drie onbekenden (met Gauss-Jordan) en determinanten horen bij de 3de graad (III-WisS-d LPD 27; matrices en determinanten in III-WisS''-d); geen leerplan van de 2de graad noemt ze, ook het servicedocument 5u niet. Ze staan nog in de geschiedenis van git als een 3de-graadsboek ze wil gebruiken. De macro's `\stelseldrie` en `\detm` zijn weg.
- **De parameter** staat niet bij de doelen over stelsels. Pakket 4 had hem: dat leerplan noemt parameters alleen als extra bij vergelijkingen (LPD 18), dus een stelsel met een parameter gaat daar verder dan het leerplan. Hij blijft in pakket 5, waar het leerplan parameters bij vergelijkingen en ongelijkheden als wenk noemt (LPD 18-19) en meer diepgang vraagt.
- **Pakket 1 en de twee methodes**: het doel (algebraïsch oplossen) en de wenk (substitutie-, gelijkstellings- of combinatiemethode, de meest efficiënte methode) zijn in pakket 1 dezelfde als in de andere. Het leerplan legt geen methode op ("je kan"); het boek houdt beide methodes in alle pakketten.
- **Nieuw voor alle pakketten**, uit de wenken: de gelijkstellingsmethode krijgt haar naam (2.1, als bijzonder geval van substitutie); bij combinatie een figuur die toont dat de rechten veranderen maar het snijpunt blijft (2.2), met de nieuwe opdracht `h2-o27`; in 1.1 dat een verticale rechte geen grafiek van een functie is (naast de horizontale rechte als constante functie).
- **ICT** (wenk bij LPD 22/26 en LPD 3): staat in 1.2, bij het snijpunt dat niet op het rooster ligt.

## Wat open blijft

- **Strijdige en onbepaalde stelsels** noemt het leerplan van de 2de graad niet uitdrukkelijk. Ze blijven in alle pakketten: ze volgen vanzelf uit de ligging van twee rechten, en het leerplan van de 3de graad (III-WisS-d LPD 27) gaat ervan uit dat de leerlingen bepaalde, onbepaalde en strijdige stelsels kennen. In pakket 5 sluiten ze aan bij LPD B4 (onderlinge ligging van rechten).
- **De verschillen tussen pakket 1 en 2-5** (de drie zwaardere opdrachten) en de extra opdrachten van pakket 5 (parameter, $\frac1x$ en $\frac1y$, kranen, de bewijsopdracht) zijn didactische keuzes: de doelen zijn in de vijf pakketten dezelfde.
- **Volgorde met Functies en Eerstegraadsvergelijkingen.** De wenk bij LPD 22/26 gebruikt het voorschrift van de eerstegraadsfunctie; het leerplan legt de volgorde van de handboeken niet vast. Het boek herhaalt kort wat het nodig heeft (zie Voorkennis).
- **Woorden en notatie.** "Strijdig stelsel" ($V = \emptyset$) en "onbepaald stelsel" met $V = \{(x, y) \mid x + 2y = 4\}$ ("alle punten van de rechte"); sommige scholen zeggen "afhankelijk stelsel" of schrijven de oplossingen met een parameter. Verder "gelijkwaardige stelsels", "een onbekende vrijmaken", "substitueren", "elimineren", "combinatie" (het leerplan zegt "combinatiemethode", ook wel "optelmethode") en "gelijkstellingsmethode". De rico heet $m$ en een rechte $y = mx + q$, zoals in Functies. Een koppel met een kommagetal krijgt een puntkomma: $(2{,}5;\ 3)$.
- **Voorkennis.** Functies en Eerstegraadsvergelijkingen worden niet verondersteld: de grafiek van $y = mx + q$ (met $q$ en een trapje), een vergelijking oplossen, haakjes en breuken wegwerken, en "afstand = snelheid · tijd" (hoofdstuk 3) worden kort herhaald waar ze nodig zijn.
- **Contexten met zelf gekozen getallen,** geen echte tarieven: de balansen, de kaarsen, de kajakker, tickets, sap en mengsels, rente van 2 en 3 %, taxi's, een zwembad, koffieprijzen. In hoofdstuk 3 heeft `h3-o26` een open deelvraag met meerdere goede antwoorden, en in hoofdstuk 1 hebben `h1-o15` (een tweede vergelijking kiezen) en `h1-verken` c meerdere goede antwoorden.
- **Opmaak.** Door de regel "elke sectie op een nieuwe pagina" blijven enkele pagina's half leeg (na 1.2, na de oefeningen van 2.1 en 2.2). Het schema Fout? Herhaal staat soms alleen op een pagina, door de gedeelde `\needspace` in de opmaak.

## Controle

Alle oplossingen zijn nagerekend met SymPy: de stelsels uit de voorbeelden en oefeningen (ook de strijdige en onbepaalde), de punten op de rechten, de parameters, de vraagstukken met hun controle in de tekst, en de nieuwe opdracht `h2-o27` met de figuur in 2.2. Afgelezen snijpunten liggen op roosterpunten, of staan er met "ongeveer" bij, met de exacte waarde in de uitwerking. Alle vijf pakketten bouwen zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
