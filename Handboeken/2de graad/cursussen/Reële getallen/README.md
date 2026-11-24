# Reële getallen: bron

Bron van het handboek Algebra/Reële getallen van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Van rationale naar reële getallen | `hoofdstukken/01-reele-getallen.tex` | 1-5 |
| 2. Machten met gehele exponenten | `hoofdstukken/02-machten.tex` | 1-5 |
| 3. Vierkantswortels (pakket 1-4), Vierkants- en derdemachtswortels (pakket 5) | `hoofdstukken/03-vierkantswortels.tex` | 1-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: `\getallenas`, `\getallenasleeg`, `\aspunt` voor getallenassen in TikZ, `\abs` en `\Abs` voor de absolute waarde (zodat een minteken na de streep geen aftrekking wordt), `\N`, `\Z`, `\Q`, `\R`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Leerplan

Getoetst aan de geldende KOV-leerplannen van de 2de graad D (november 2026). Alle vijf nummeren de doelen van dit onderwerp gelijk:

| Pakket | Leerplan (versie) | H1 | H2 | H3 |
|---|---|---|---|---|
| 1 | II-Wis-d (oktober 2024) | LPD 5, 6; LPD 4 (bewijs) | LPD 7 | LPD 7 |
| 2 | II-Wis'-d (oktober 2024) | LPD 5, 6; LPD 4 (bewijs) | LPD 7 | LPD 7 |
| 3 | II-WisS'-d (juni 2024) | LPD 5, 6; LPD 4 (bewijs) | LPD 7 | LPD 7 |
| 4 | II-WisS-d (oktober 2024) | LPD 5, 6; LPD 4 (bewijs) | LPD 7 | LPD 7 |
| 5 | II-WisS''-d (oktober 2024) en het servicedocument 5u | LPD 5, 6; LPD B1 (bewijs) | LPD 7 | LPD 7 (derdemachtswortels: extra) |

Het onderwerp dekt dus LPD 5-7 in elk pakket. De doelen zijn in de vijf leerplannen dezelfde; de wenken verschillen alleen bij het wortelvrij maken van de noemer (zie hieronder), en pakket 5 heeft een extra (derdemachtswortels) en LPD B1 (bewijzen). De LPD staan per hoofdstuk en per pakket in de `\lkr`-kaders.

## Verschillen per pakket

Alle pakketten krijgen: gemengd repeterende getallen omzetten naar een breuk, het bewijs uit het ongerijmde dat $\sqrt2$ irrationaal is met de opdracht voor $\sqrt3$, een vierkantswortel schatten zonder ICT en benaderen met ICT, en de noemer wortelvrij maken als die uit één term bestaat. De verschillen staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 | Reden |
|---|---|---|---|---|---|---|
| Derdemachtswortels (sectie 3.4: definitie, schatten, benaderen; drie opdrachten, testvraag 8) | | | | | x | extra bij LPD 7 in pakket 5 |
| De noemer wortelvrij maken met de toegevoegde uitdrukking (voorbeeld, opdracht `h3-o25`) | | | | | x | pakket 5 beperkt het wortelvrij maken niet tot één term; 1-3 noemen twee termen uitdrukkelijk niet nodig, 4 noemt alleen één term |
| Opdracht: bewijs dat $1 + \sqrt2$ irrationaal is | | | | | x | bewijs uit het ongerijmde in een nieuwe situatie (LPD B1) |
| Zwaardere drillbundel met de rekenregels voor machten | | x | x | x | x | didactische keuze |
| Opdracht met letters in de exponent ($a^{n+2}$) | | | | | x | didactische keuze (meer diepgang in pakket 5) |
| $\sqrt{a^2} = \lvert a\rvert$ | | | | x | x | didactische keuze, het leerplan noemt het niet |
| Opdrachten met merkwaardige producten en wortels | | x | x | x | x | didactische keuze |

## Wat het leerplan besliste

- **LPD per hoofdstuk**: zie de tabel hierboven. In de vroegere eerste versie stond overal "LPD 5-7" zonder verdeling.
- **Gemengd repeterende getallen** horen in alle pakketten: LPD 5 is overal dezelfde. Pakket 1 krijgt nu ook het voorbeeld, de korte oefening, opdracht `h1-o9` en testvraag 3 (de vroegere testvraag 3 van pakket 1 over begrensd of repeterend is weg).
- **De noemer wortelvrij maken** (één term) is een wenk in alle vijf leerplannen, dus ook in pakket 1. Testvraag 6 van hoofdstuk 3 is nu overal dezelfde (de vroegere van pakket 1, wortels vergelijken, is weg; dat blijft geoefend in opdrachten).
- **De toegevoegde uitdrukking** blijft alleen in pakket 5: alleen dat leerplan beperkt het wortelvrij maken niet tot één term.
- **Derdemachtswortels** zijn een extra bij LPD 7, alleen in pakket 5. Ze staan daar als sectie 3.4, met de kubus als instap; het rekenen met wortelvormen blijft bij vierkantswortels. De andere leerplannen noemen ze niet.
- **Het bewijs dat $\sqrt2$ irrationaal is**: LPD B1 van pakket 5 noemt het uitdrukkelijk als voorbeeld van een bewijs uit het ongerijmde. In pakket 1-4 hoort het bij LPD 4 (een redenering beargumenteren, tussenstappen van een bewijs verantwoorden); het reconstrueren in een gewijzigde situatie (opdracht `h1-o21`, $\sqrt3$) is daar een extra. Het bewijs staat in alle pakketten, ook omdat de ontwerpregels het als voorbeeld van een kort, verklarend bewijs noemen; de uitleg met priemfactoren in pakket 1-4 is vervangen door het bewijs.
- **Schatten en benaderen**: de wenk bij LPD 7 (alle pakketten) vraagt de grootteorde van een vierkantswortel schatten zonder ICT en een rationale benadering met ICT. Er is een onderdeel "Een vierkantswortel schatten" bij gekomen (voorbeeld, werkwijze, korte oefening).
- **De wetenschappelijke notatie** is een wenk bij LPD 7 in alle pakketten. Een ingenieursnotatie vraagt geen enkel leerplan; ze staat er niet in.
- **Pythagoras**: de wenk bij LPD 5 noemt de oppervlakte van het ingeschreven vierkant als tweede manier om $\sqrt2$ te construeren. Het boek gebruikt die, zodat Pythagoras niet nodig is.
- **Intervallen** staan niet in de doelen van dit onderwerp; ze blijven in Eerstegraadsvergelijkingen.

## Wat open blijft

- **Niet in het leerplan, bewust opgenomen** (didactische keuzes): de absolute waarde (afstand op de getallenas; voorkennis uit de 1ste graad), de eigenschap "begrensd als de noemer alleen de priemfactoren 2 en 5 heeft", $\sqrt{a^2} = \lvert a\rvert$ in pakket 4-5, de zwaardere drill in pakket 2-5, letters in de exponent in pakket 5, en merkwaardige producten met wortels in pakket 2-5. Het leerplan beslist die niet: LPD 5-7 zijn in de vijf pakketten dezelfde, dus de verschillen tussen pakket 1 en de andere zijn hier geen leerplaneis.
- **Het bewijs van $\sqrt2$ in pakket 1-4** kan ook weg (terug naar de uitleg met priemfactoren) als een school het te zwaar vindt: het leerplan vraagt het daar niet uitdrukkelijk.
- **Grootteorde.** Gedefinieerd als de macht van 10 in de wetenschappelijke notatie ($9,99 \cdot 10^2$ heeft grootteorde $10^2$). Het leerplan gebruikt het woord voor schatten, zonder definitie. Sommige bronnen ronden af naar de dichtstbijzijnde macht van 10. Kies de afspraak van de school.
- **Volgorde met Logica.** Het bewijs uit het ongerijmde legt zichzelf uit, zodat het ook vóór het hoofdstuk Bewijzen (pakket 5) kan.
- **Getallen in contexten** zijn afgeronde waarden: een rode bloedcel van $7,5\ \mu$m en $2,5 \cdot 10^{13}$ bloedcellen, de maan op $384\,400$ km, de massa's van aarde en maan, de lichtsnelheid, de groei van een haar.

## Controle

De uitkomsten zijn nagerekend: de decimale vormen en de afgeronde getallen met Python, de rekenregels voor machten, het rekenen met wortels en de derdemachtswortels met SymPy. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
