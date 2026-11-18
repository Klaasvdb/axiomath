# Stelsels: bron

Bron van het handboek Algebra/Stelsels van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Grafisch oplossen | `hoofdstukken/01-grafisch.tex` | 1-5 |
| 2. Algebraïsch oplossen | `hoofdstukken/02-algebraisch.tex` | 1-5 |
| 3. Vraagstukken | `hoofdstukken/03-vraagstukken.tex` | 1-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`:

- stelsels: `\stelsel{2x + y &= 8}{x + 3y &= 9}` (met de gelijkheidstekens onder elkaar), `\stelseldrie` voor drie vergelijkingen, `\detm{a}{b}{c}{d}` voor een determinant (pakket 5);
- grafieken zoals in Functies: `\rooster`, `\roosterleeg`, `\xgetallen`, `\ygetallen`, `\xlabels`, `\ylabels`, `\oorsprong`, `\rechte` ($y = mx + q$), `\rechteabc` ($ax + by = c$), `\verticaal`, `\kromme`, `\punt`, `\openpunt`, `\aflezen`, `\trapje`, en de TikZ-stijlen `tweede` en `hulplijn`;
- de balans met twee soorten onbekenden, `\balansxy` (zakjes $x$, bollen $y$, blokjes van 1 kg), naar de balans van Eerstegraadsvergelijkingen;
- `\waardetabel`, `\R`, `\abs`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

De kleine prenten (`afbeeldingen/prenten/`, twee bij hoofdstuk 3) komen uit Rijen en Matrices; bron en licentie staan in de README daar.

## Inhoud

1. **Grafisch oplossen.** Probleem: twee balansen met zakjes en bollen (hoeveel weegt elk, en is er maar één mogelijkheid?). Een eerstegraadsvergelijking met twee onbekenden $ax + by = c$ en haar oplossingen (koppels); de oplossingen vormen een rechte, de vergelijking van een rechte; tekenen door $y$ vrij te maken of met de snijpunten met de assen; horizontale en verticale rechten; stelsel en oplossing van een stelsel; het snijpunt van twee rechten (met het motief van de voorkant, snijpunt $(2, 3)$); Terug naar het probleem; een snijpunt dat niet op het rooster ligt (grafisch is een benadering, ook met ICT); evenwijdige rechten (strijdig stelsel), samenvallende rechten (onbepaald stelsel), het aantal oplossingen met de rico's; in pakket 4-5 een stelsel met een parameter.
2. **Algebraïsch oplossen.** Probleem: twee kaarsen die op verschillende snelheid opbranden (wanneer zijn ze even lang, tot op de minuut?). Substitutie: eerst twee keer $y = \ldots$, dan een onbekende vrijmaken, met "gelijkwaardige stelsels" en de eigenschap Substitutie; combinatie: vergelijkingen optellen (met balansen), eerst vermenigvuldigen; welke methode kies je; strijdige en onbepaalde stelsels algebraïsch ($0 = 9$ en $0 = 0$); eerst herleiden (haakjes, breuken); in pakket 5 de regel van Cramer als uitbreiding.
3. **Vraagstukken.** Probleem: een kajakker met en tegen de stroom. Van vraagstuk naar stelsel (twee onbekenden, twee voorwaarden), één onbekende of twee (aansluiting bij Eerstegraadsvergelijkingen); prijzen en aantallen, mengsels, procenten; beweging (met en tegen de stroom, naar elkaar toe); meetkunde (omtrek, hoeken) en twee tarieven met de betekenis van het snijpunt.

## Aantallen

Opdrachten (deelvragen) / korte oefeningen / testvragen, per hoofdstuk.

| Hoofdstuk | Pakket 1 | Pakket 2-3 | Pakket 4 | Pakket 5 |
|---|---|---|---|---|
| 1 | 21 (76) / 9 / 7 | 22 (79) / 9 / 7 | 23 (82) / 10 / 8 | 24 (85) / 10 / 8 |
| 2 | 21 (73) / 8 / 7 | 22 (75) / 8 / 7 | 24 (78) / 8 / 7 | 26 (83) / 9 / 8 |
| 3 | 23 (60) / 8 / 7 | 24 (62) / 8 / 7 | 25 (64) / 8 / 7 | 26 (66) / 8 / 7 |

## Verschillen per pakket

Pakket 1-3 hebben LPD 22-23, pakket 4-5 LPD 26-27. Alle pakketten hebben dezelfde drie hoofdstukken. De verschillen in diepgang zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| H1: opdracht "kies $c$ zodat de oplossing op een as ligt" (`h1-o22`) | | x | x | x | x |
| H1: een stelsel met een parameter bespreken met de rico's: subsectie, voorbeeld, korte oefening `h1-parameter`, opdracht `h1-o23`, testvraag `h1-t8` | | | | x | x |
| H1: bewijsopdracht, dezelfde rico als en slechts als $ab' - a'b = 0$ (`h1-o24`, brug naar Cramer) | | | | | x |
| H2: opdracht met breuken met een som in de teller (`h2-o19`) | | x | x | x | x |
| H2: opdracht met een parameter, besproken met combinatie (`h2-o24`) | | | | x | x |
| H2: opdracht met drie onbekenden (`h2-o25`) | | | | x | x |
| H2: uitbreiding, de regel van Cramer: sectie 2.4, korte oefening `h2-cramer`, opdracht `h2-o20`, testvraag `h2-t8` | | | | | x |
| H2: stelsel in $\frac1x$ en $\frac1y$ (`h2-o26`) | | | | | x |
| H3: opdracht met de cijfers van een getal (`h3-o21`) | | x | x | x | x |
| H3: opdracht met drie onbekenden (`h3-o23`) | | | | x | x |
| H3: opdracht met kranen, het deel van een vat per minuut (`h3-o24`) | | | | | x |

Het schema Fout? Herhaal kiest de regel van een testvraag die maar in sommige pakketten staat met `\alleenvoor`.

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad, de LPD-tabel en de kennis van het leerplan. Na te kijken in het leerplan: of pakket 1 (Basis) beide algebraïsche methodes moet kennen of genoeg heeft aan één, en of strijdige en onbepaalde stelsels in alle pakketten horen (nu wel).
- **LPD per hoofdstuk.** De leerkrachtenversie zegt bij elk hoofdstuk "LPD 22-23" (pakket 1-3) of "LPD 26-27" (pakket 4-5), met wat het hoofdstuk behandelt. Welk nummer precies bij welk hoofdstuk hoort, is niet nagekeken.
- **Bewust opgenomen, misschien buiten het leerplan:** de parameter (pakket 4-5, zoals in Eerstegraadsvergelijkingen), drie onbekenden (opdrachten in pakket 4-5), en in pakket 5 de regel van Cramer (een bescheiden uitbreiding met de determinant: één sectie met een kort bewijs, één voorbeeld, een korte oefening, een opdracht en een testvraag; de leerkrachtenversie zegt dat het een uitbreiding is die kan wegvallen), het stelsel in $\frac1x$ en $\frac1y$ en de kranen. Kies of Cramer blijft; zonder Cramer valt ook `h1-o24` beter weg.
- **Woorden en notatie.** "Strijdig stelsel" ($V = \emptyset$) en "onbepaald stelsel" met $V = \{(x, y) \mid x + 2y = 4\}$ ("alle punten van de rechte"); sommige scholen zeggen "afhankelijk stelsel" of schrijven de oplossingen met een parameter. Verder "gelijkwaardige stelsels", "een onbekende vrijmaken", "substitueren", "elimineren" en "combinatie" (ook wel "optelmethode"). De rico heet $m$ en een rechte $y = mx + q$, zoals in Functies. Een koppel met een kommagetal krijgt een puntkomma: $(2{,}5;\ 3)$.
- **Voorkennis.** Functies en Eerstegraadsvergelijkingen worden niet verondersteld: de grafiek van $y = mx + q$ (met $q$ en een trapje), een vergelijking oplossen, haakjes en breuken wegwerken, en "afstand = snelheid · tijd" (hoofdstuk 3) worden kort herhaald waar ze nodig zijn.
- **Contexten met zelf gekozen getallen,** geen echte tarieven: de balansen, de kaarsen, de kajakker, tickets, sap en mengsels, rente van 2 en 3 %, taxi's, een zwembad, koffieprijzen. In hoofdstuk 3 heeft `h3-o26` een open deelvraag met meerdere goede antwoorden, en in hoofdstuk 1 hebben `h1-o15` (een tweede vergelijking kiezen) en `h1-verken` c meerdere goede antwoorden.
- **Opmaak.** Door de regel "elke sectie op een nieuwe pagina" blijven enkele pagina's half leeg (na 1.2, na de oefeningen van 2.1 en 2.2). Het schema Fout? Herhaal staat soms alleen op een pagina, door de gedeelde `\needspace` in de opmaak.

## Controle

Alle oplossingen zijn nagerekend met SymPy: de stelsels uit de voorbeelden en oefeningen (ook de strijdige en onbepaalde), de punten op de rechten, de parameters, de regel van Cramer, de drie onbekenden en de vraagstukken met hun controle in de tekst. Afgelezen snijpunten liggen op roosterpunten, of staan er met "ongeveer" bij, met de exacte waarde in de uitwerking. Alle vijf pakketten bouwen zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
