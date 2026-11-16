# Eerstegraadsvergelijkingen: bron

Bron van het handboek Algebra/Eerstegraadsvergelijkingen van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Vergelijkingen en vraagstukken | `hoofdstukken/01-vergelijkingen.tex` | 1-5 |
| 2. Ongelijkheden en intervallen | `hoofdstukken/02-ongelijkheden.tex` | 1-5 |
| 3. Formules omvormen | `hoofdstukken/03-formules-omvormen.tex` | 1-5 |

De titels zijn korter dan in het voorstel ("Eerstegraadsvergelijkingen en vraagstukken" past niet op de hoofdstukband; de titel van het boek zegt al dat het over de eerste graad gaat).

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`:

- `\balans{zakjes links}{blokjes links}{zakjes rechts}{blokjes rechts}`: een balans in evenwicht, het beeld van de voorkant, voor de rekenregels in hoofdstuk 1;
- `\getallenas`, `\ivdeel`, `\haakl`, `\haakr`: een getallenas met een interval erop, met dezelfde haken als in de notatie;
- `\ivgg`, `\ivoo`, `\ivgo`, `\ivog`, `\pinf`, `\minf`: intervallen in de Vlaamse notatie ($]a, b]$ enz.), met de juiste spatiëring rond de haken en het minteken; `\R`;
- `\naast`, `\figuren`, `metgrafiek` en `stappenvrij` uit Integralen. De rest van `notatie.tex` van Integralen is weggelaten.

## Opbouw

- **Hoofdstuk 1.** Probleem: hoeveel kost de bus van de schoolreis (een vierde betaalt de school)? Vergelijking, oplossing en controle; de rekenregels één voor één met de balans (optellen, vermenigvuldigen met een getal verschillend van 0, en waarom niet 0); herleiden tot $ax = b$; haakjes; breuken met het kgv; strijdige en identieke vergelijkingen; vraagstukken (van tekst naar wiskundetaal, de werkwijze, rechthoek, korting, leeftijden).
- **Hoofdstuk 2.** Probleem: vanaf hoeveel bezoeken is een fitnessabonnement goedkoper? Ongelijkheid en oplossing; intervallen (begrensd en onbegrensd) met notatie en getallenas; de rekenregels één voor één (optellen, vermenigvuldigen met een positief getal, met een negatief getal: het teken keert om, met de spiegeling op de getallenas); herleiden; geen of alle oplossingen; vraagstukken (minstens, hoogstens, en afronden in de goede richting).
- **Hoofdstuk 3.** Probleem: vijf temperaturen in graden Fahrenheit omzetten. Omvormen als "dezelfde stappen met letters" (getallen en letters naast elkaar); twee stappen in de omgekeerde volgorde; breuken; de letter in de noemer; een kwadraat; formules gebruiken (winst, eenheden).

## Verschillen per pakket

Pakket 1, 2 en 3 hebben LPD 14-16, pakket 4 en 5 LPD 18-20. De verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`. Pakket 1, 2 en 3 zijn gelijk, net als pakket 4 en 5 op een paar opdrachten van niveau 3 na.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| H1: vergelijkingen met een parameter (subsectie, twee voorbeelden, korte oefening, opdracht, testvraag) | | | | x | x |
| H1: opdracht over het aantal oplossingen van $ax + b = cx + d$ (redeneren) | | | | | x |
| H2: dubbele ongelijkheden (subsectie, twee voorbeelden, korte oefening, twee opdrachten, testvraag) | | | | x | x |
| H2: opdracht: bewijs dat het gemiddelde van $a$ en $b$ ertussen ligt | | | | | x |
| H3: de letter staat twee keer, buiten haakjes brengen (subsectie, voorbeeld, korte oefening, opdracht, testvraag) | | | | x | x |
| H3: meer fysica: bewegingsenergie (voorbeeld), eenparig versnelde beweging en bewegingsenergie (opdrachten) | | | | x | x |
| H3: opdracht met de lenzenformule | | | | | x |

Het schema Fout? Herhaal kiest de testvraag van pakket 4 en 5 met `\alleenvoor`.

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad en de kennis van het leerplan. Na te kijken in het leerplan: of eerstegraadsongelijkheden en intervallen ook in pakket 1 (Basis) horen, of vergelijkingen met een parameter en dubbele ongelijkheden in pakket 4 en 5 passen (of net weg moeten), en of pakket 1 lichter moet dan pakket 2 en 3 (nu zijn ze gelijk). Pakket 3 (Bedrijfswetenschappen) zou eventueel nog wat meer economische formules kunnen krijgen.
- **LPD per hoofdstuk.** De leerkrachtenversie verwijst per hoofdstuk naar één doel: LPD 14 (18) voor hoofdstuk 1, 15 (19) voor hoofdstuk 2 en 16 (20) voor hoofdstuk 3. Die verdeling is een veronderstelling en niet nagekeken.
- **Notatie.** Intervallen in de Vlaamse notatie, met de haken naar buiten bij een open grens ($]a, b[$), en op de getallenas met dezelfde haken. Scholen die bolletjes (vol of open) gebruiken, kunnen dat in `\haakl` en `\haakr` aanpassen. De oplossingsverzameling heet $V$, met $V = \emptyset$ en $V = \R$.
- **Woorden.** "Strijdige vergelijking" en "identieke vergelijking" (andere boeken zeggen ook "onmogelijke vergelijking" of "identiteit"); "een term overbrengen"; "gelijkwaardige vergelijkingen"; "quitte spelen".
- **Bewust opgenomen, misschien buiten het leerplan:** de vierkantswortel bij het omvormen van $A = \pi r^2$ (de vierkantswortel is gekend uit de 1ste graad; Reële getallen valt in hetzelfde jaar), en in pakket 4-5 de parameter en de dubbele ongelijkheden.
- **Contexten met afgeronde of vereenvoudigde gegevens:** de schoenmaat $S = 1{,}5\,l + 2$ is een vuistregel; de temperatuur daalt gemiddeld ongeveer $6{,}5\,^\circ$C per km; de dichtheden van goud (19,3 g/cm$^3$) en ijzer (7,9 g/cm$^3$); alle prijzen zijn verzonnen. De formule $F = 1{,}8C + 32$ is exact.
- **Afronden in de context.** Bij de vaas (H3, opdracht met $V = \pi r^2 h$) staat "minstens", dus wordt 12,73 naar boven afgerond tot 12,8~cm. Bij de taxi (H2) staat "ongeveer 14,4 km".
- **Balans.** In de figuren staan de zakjes en blokjes op twee schaaltjes bovenop de arm (geen hangende schalen), zodat touwtjes en blokjes niet door elkaar lopen. Een strijdige vergelijking krijgt bewust geen balans: een balans in evenwicht zou daar misleiden.

## Controle

Alle vergelijkingen, ongelijkheden en omvormingen zijn nagerekend met SymPy, de afgeronde getallen met Python. Bewijzen, uitlegvragen en zelf te bedenken vergelijkingen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
