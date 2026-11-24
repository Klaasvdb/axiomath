# Telproblemen: bron voor alle pakketten

De hoofdstukken (`hoofdstukken/`), de oefeningenbank (`oefeningen/`) en `notatie.tex` van de cursus Telproblemen, voor alle pakketten. Wat maar voor sommige pakketten geldt, staat in `\alleenvoor` en in het veld `pakketten:` van de oefeningen (zie "Eén bron per cursus" in [Opmaak/README.md](<../../../../Opmaak/README.md>)).

| Pakket | Map | Waarom |
|---|---|---|
| 4 (B+S'') | [4 .../Discrete wiskunde/Telproblemen](<../../4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Discrete wiskunde/Telproblemen/README.md>) | KOV: LPD 47, met het binomium van Newton en de driehoek van Pascal; GO! en POV: cluster 06.08 |
| 2 (B+S) | [2 .../Discrete wiskunde/Telproblemen](<../../2 Economie-Moderne talen (B+S)/Discrete wiskunde/Telproblemen/README.md>) | GO!: de cluster 06.01 Statistiek (telproblemen) bij de economische richtingen, ook Grieks-Latijn, Humane wetenschappen en Freinetpedagogie; hoofdstuk 1 en 2 ook voor combinaties bij de GO!-talenrichtingen en Welzijnswetenschappen (06.02). KOV en POV: alleen bij Statistiek in Humane wetenschappen en Freinetpedagogie (KOV III-Sta-d, POV 06.01). Het KOV-leerplan van het pakket zelf (III-WisS-d) heeft geen telproblemen. |
| 3 (B+S') | [3 .../Discrete wiskunde/Telproblemen](<../../3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Discrete wiskunde/Telproblemen/README.md>) | alleen GO!: een GO!-doel bij 06.04, telproblemen met het binomium van Newton. KOV (III-WisS'-d) en POV (06.04) hebben in dit pakket geen telproblemen. |

De boeken van pakket 2 en 3 zijn gelijk, op de leerkrachtentips en één Koppel-oefening na. Ze zijn lichter dan dat van pakket 4, dat voor 6 uur wiskunde geschreven is: dezelfde drie hoofdstukken en dezelfde kern (som- en productregel, het tegendeel, variaties, permutaties en combinaties met en zonder herhaling, de driehoek van Pascal en het binomium), maar minder bewijzen, minder uitbreidingen en minder zware opdrachten.

## Verschillen per pakket

| Hoofdstuk | Alleen in pakket 4 | Anders in pakket 2 en 3 |
|---|---|---|
| alle | `\lkr`: "Leerplan B+S'': LPD 47" | `\lkr`: dat III-WisS-d en III-WisS'-d geen telproblemen hebben (overzicht van de leerplannen, wenk bij Kansrekenen LPD 29 / 35), voor welke koepels en richtingen het boek dient, en de GO!-doelen (WD 06.01, 06.02 / 06.04). Combinaties en de binomiale verdeling in Kansrekenen: "van pakket 4", want Kansrekenen van pakket 2 en 3 volgt KOV en heeft ze niet. Koppel-nota's met "de oefening" waar er maar één is (hoofdstuk 2, en 3 in pakket 2) |
| 1. Tellen | het bewijs van de somregel met overlap (het voorbeeld 1 tot 10 en de tekst erna leggen het al uit); het bewijs van $\Var{n}{p} = \frac{n!}{(n - p)!}$ en het voorbeeld met een vergelijking in $n$ (`vb:h1-facvar`); oefeningen `h1-facvar`, `h1-o20` (vergelijkingen met faculteiten), `h1-o13`, `h1-o14`, `h1-o26`, `h1-o27`, `h1-o28` (niveau 3 of buiten de leerstof) | test `h1-t8` verwijst in Fout? Herhaal alleen naar de oefening |
| 2. Combinaties | de bewijzen van de symmetrie en van de permutaties met herhaling (de tekst ervoor legt ze al uit); oefeningen `h2-o12`, `h2-o13`, `h2-o14`, `h2-o26`, `h2-o27`, `h2-o28` (niveau 3), `h2-o21` (rooster met een verboden punt), Koppel `h2-koppel-2` (snijpunten van diagonalen, niveau 3) | blijft: combinaties met herhaling (het probleem van de ijssalon steunt erop), de regel van Pascal met zijn bewijs, wegen in een rooster |
| 3. Binomium | de term zonder $x$ met negatieve exponenten (`vb:h3-term2`, `vb:h3-geenterm`, oefeningen `h3-term`, `h3-geenterm`, `h3-o5`, `h3-o21`, test `h3-t3`); de som met afwisselende tekens (met `h3-somrij`, `h3-som`, `h3-o24`); oefeningen `h3-o11`, `h3-o12`, `h3-o23`, `h3-o25`, `h3-o26` (niveau 3), `h3-o20` (een som herkennen als binomium), `h3-o22` (binomium met $\sqrt2$) | een eenvoudiger voorbeeld met $x$ in een macht: de coëfficiënt van $x^4$ in $(x^2 - 3)^5$, en dat $x^5$ niet voorkomt (`vb:h3-term3`). Koppel `h3-koppel-1` (een macht van $1 + i$) alleen in pakket 3 en 4: pakket 2 heeft geen Complexe getallen |

Aantallen in het boek (Start, korte oefeningen, opdrachten, Koppel, test):

| Hoofdstuk | Pakket 4 | Pakket 2 | Pakket 3 |
|---|---|---|---|
| 1. Tellen | 2, 13, 28, 2, 8 | 2, 12, 22, 2, 8 | 2, 12, 22, 2, 8 |
| 2. Combinaties | 2, 10, 28, 2, 8 | 2, 10, 21, 1, 8 | 2, 10, 21, 1, 8 |
| 3. Binomium | 2, 10, 26, 2, 7 | 2, 6, 16, 1, 6 | 2, 6, 16, 2, 6 |

## Na te kijken

- **Afbakening voor pakket 2 en 3.** Er is geen leerplantekst van GO! in de repo. De afbakening volgt [Ontwerp/koepels.md](<../../../../Ontwerp/koepels.md>): "telproblemen met het binomium van Newton" (06.04) en "telproblemen" in de cluster 06.01 Statistiek (pakket 2). Of het sommatieteken, combinaties met herhaling, permutaties met herhaling en het benaderen met het binomium bij GO! horen, is niet nagekeken. Ze staan erin omdat ze kort zijn en het probleem van hoofdstuk 2 en 3 dragen.
- **Pakket 1.** De GO!-talenrichtingen en Welzijnswetenschappen ("combinaties") en KOV/POV Statistiek bij Humane wetenschappen verwijzen in `Handboeken/koepels.yaml` nu naar dit boek van pakket 2, het lichtste. Combinaties (hoofdstuk 2) steunen op hoofdstuk 1; de tekst van KOV III-Sta-d is niet nagekeken.
- **Binomiale verdeling bij GO!** Hoofdstuk 3 bereidt de binomiale verdeling voor (GO! WD 06.01 en een GO!-doel bij 06.04), maar Kansrekenen van pakket 2 en 3 heeft ze sinds de afstemming op KOV niet meer: zie "Na te kijken" in de README's van pakket 2 en 3.
- **Opdracht `h3-o10`** (machten van 11) vraagt bijna hetzelfde als het voorbeeld "Terug naar het probleem" van hoofdstuk 3, in alle pakketten.
