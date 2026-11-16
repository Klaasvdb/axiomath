# Reële getallen: bron

Bron van het handboek Algebra/Reële getallen van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Van rationale naar reële getallen | `hoofdstukken/01-reele-getallen.tex` | 1-5 |
| 2. Machten met gehele exponenten | `hoofdstukken/02-machten.tex` | 1-5 |
| 3. Vierkantswortels | `hoofdstukken/03-vierkantswortels.tex` | 1-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: `\getallenas`, `\getallenasleeg`, `\aspunt` voor getallenassen in TikZ, `\abs` en `\Abs` voor de absolute waarde (zodat een minteken na de streep geen aftrekking wordt), `\N`, `\Z`, `\Q`, `\R`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Verschillen per pakket

Alle pakketten hebben LPD 5-7 en dezelfde drie hoofdstukken. De verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Gemengd repeterend decimaal getal omzetten naar een breuk (voorbeeld, korte oefening, opdracht, testvraag) | | x | x | x | x |
| Bewijs uit het ongerijmde dat $\sqrt2$ irrationaal is (in de andere pakketten: uitleg zonder bewijs) | | | | | x |
| Opdrachten: bewijs dat $\sqrt3$ en $1 + \sqrt2$ irrationaal zijn | | | | | x |
| Zwaardere drillbundel met de rekenregels voor machten | | x | x | x | x |
| Opdracht met letters in de exponent ($a^{n+2}$) | | | | | x |
| $\sqrt{a^2} = \lvert a\rvert$ | | | | x | x |
| De noemer wortelvrij maken (één wortel in de noemer) | | x | x | x | x |
| De noemer wortelvrij maken met de toegevoegde uitdrukking | | | | | x |
| Opdrachten met merkwaardige producten en wortels | | x | x | x | x |

Pakket 1 krijgt een andere testvraag 3 in hoofdstuk 1 (begrensd of repeterend) en 6 in hoofdstuk 3 (wortels vergelijken), met hetzelfde id; het schema Fout? Herhaal kiest het juiste voorbeeld met `\alleenvoor`.

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad en de kennis van het leerplan. Na te kijken in het leerplan: welke van de onderdelen hierboven echt in welk pakket horen (vooral gemengd repeterende getallen in pakket 1, de noemer wortelvrij maken, $\sqrt{a^2} = \lvert a\rvert$ en de toegevoegde uitdrukking).
- **LPD per hoofdstuk.** De leerkrachtenversie zegt bij elk hoofdstuk "LPD 5-7" met het deel van de doelen dat het hoofdstuk behandelt. Welk nummer bij welk hoofdstuk hoort, is niet nagekeken.
- **Bewust opgenomen, misschien buiten het leerplan:** de absolute waarde (afstand op de getallenas), de vergelijking $x^2 = a$, de eigenschap "begrensd als de noemer alleen de priemfactoren 2 en 5 heeft", en de grootteorde. Weggelaten: derdemachtswortels en $n$-de machtswortels, en intervallen (die staan in Eerstegraadsvergelijkingen).
- **Grootteorde.** Gedefinieerd als de macht van 10 in de wetenschappelijke notatie ($9,99 \cdot 10^2$ heeft grootteorde $10^2$). Sommige bronnen ronden af naar de dichtstbijzijnde macht van 10. Kies de afspraak van de school.
- **Pythagoras.** Die is nog niet gezien (Driehoeksmeting komt na Reële getallen). De diagonaal van het vierkant volgt daarom uit een oppervlakte: het vierkant op de diagonaal bestaat uit vier halve eenheidsvierkanten. Ook $\sqrt5$ en $\sqrt{10}$ met de passer (opdracht in hoofdstuk 1) gebruiken die redenering.
- **Getallen in contexten** zijn afgeronde waarden: een rode bloedcel van $7,5\ \mu$m en $2,5 \cdot 10^{13}$ bloedcellen, de maan op $384\,400$ km, de massa's van aarde en maan, de lichtsnelheid, de groei van een haar.
- Het bewijs dat $\sqrt2$ irrationaal is, staat in pakket 5 al in hoofdstuk 1, misschien vóór het hoofdstuk Bewijzen in Logica. De leerkrachtenversie zegt dan kort uit te leggen wat een bewijs uit het ongerijmde is.

## Controle

De uitkomsten zijn nagerekend: de decimale vormen en de afgeronde getallen met Python, de rekenregels voor machten en het rekenen met wortels met SymPy. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
