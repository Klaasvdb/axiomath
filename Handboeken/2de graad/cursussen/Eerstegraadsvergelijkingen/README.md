# Eerstegraadsvergelijkingen: bron

Bron van het handboek Algebra/Eerstegraadsvergelijkingen van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (24 november 2026), nog na te lezen.

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
- **Hoofdstuk 2.** Probleem: vanaf hoeveel bezoeken is een fitnessabonnement goedkoper? Ongelijkheid en oplossing; intervallen (begrensd en onbegrensd) met notatie en getallenas; de rekenregels één voor één (optellen, vermenigvuldigen met een positief getal, met een negatief getal: het teken keert om, met de spiegeling op de getallenas); herleiden; geen of alle oplossingen; in pakket 4-5 dubbele ongelijkheden en ongelijkheden met een parameter, in pakket 5 ook een stelsel van twee ongelijkheden; vraagstukken (minstens, hoogstens, en afronden in de goede richting).
- **Hoofdstuk 3.** Probleem: vijf temperaturen in graden Fahrenheit omzetten. Omvormen als "dezelfde stappen met letters" (getallen en letters naast elkaar); twee stappen in de omgekeerde volgorde; breuken; de letter in de noemer; een kwadraat (met de bewegingsenergie als voorbeeld uit de fysica); in pakket 5 een derde macht met de derdemachtswortel; formules gebruiken (winst, eenheden). Opdrachten met onder meer de wet van Ohm, dichtheid, druk en de stelling van Pythagoras.

## Leerplan

Getoetst op 24 november 2026 aan de geldende KOV-leerplannen 2de graad D (niet in de repo; alleen de nummers):

| Pakket | Leerplan (versie) | H1 vergelijkingen | H2 ongelijkheden | H3 formules omvormen |
|---|---|---|---|---|
| 1 Basis | II-Wis-d (oktober 2024, D/2024/13.758/063) | LPD 14 | LPD 15 | LPD 16 |
| 2 B+ | II-Wis'-d (oktober 2024, D/2024/13.758/064) | LPD 14 | LPD 15 | LPD 16 |
| 3 B+S' | II-WisS'-d (juni 2024, D/2024/13.758/066) | LPD 14 | LPD 15 | LPD 16 |
| 4 B+S | II-WisS-d (oktober 2024, D/2024/13.758/350) | LPD 18 | LPD 19 | LPD 20 |
| 5 B+S'' | II-WisS''-d (oktober 2024, D/2024/13.758/351), met het servicedocument voor 5 uur | LPD 18 | LPD 19 | LPD 20 |

Elk leerplan heeft drie doelen in de rubriek "Eerstegraadsvergelijkingen, -ongelijkheden en omvormen van formules", één per hoofdstuk. De doelen en de wenken zijn in de vijf leerplannen gelijk, op deze verschillen na:

- **Pakket 4:** bij LPD 18 en 19 een *extra* (verder dan het doel minimaal vraagt): vergelijkingen en ongelijkheden met één parameter bespreken.
- **Pakket 5:** bij LPD 18 en 19 als *wenk*: vergelijkingen en ongelijkheden met één parameter bespreken, en stelsels van eerstegraadsongelijkheden in één onbekende. Het servicedocument voor 5 uur maakt daar niets van verplicht, maar wel de derdemachtswortel (bij het rekenen met reële getallen), en vraagt vraagstukken die tot een vergelijking, ongelijkheid of stelsel leiden.
- **Samenhang met Natuurwetenschappen** bij LPD 16 / 20 (formules gebruiken bij fysische problemen), in alle pakketten.

Wenken in alle leerplannen: de balans om de rekenregels te duiden (H1); de oplossing van een ongelijkheid op de getallenas en als interval (H2); vergelijkingen en ongelijkheden eventueel samen met het grafisch oplossen bij eerstegraadsfuncties aanbrengen (didactische keuze: dit handboek werkt algebraïsch, het grafisch oplossen hoort bij Functies); bij het omvormen lineaire en zuiver kwadratische verbanden, met formules uit de 1ste en 2de graad, bv. oppervlakte, goniometrische getallen, Pythagoras (H3, behalve de goniometrische getallen: Driehoeksmeting komt later); omvormen ook later oefenen telkens als er een formule bijkomt (vermeld in de leerkrachtenversie). Geen keuzedoelen en geen B-doelen over dit onderwerp.

## Verschillen per pakket

Pakket 1, 2 en 3 hebben dezelfde inhoud.

| Onderdeel | 1 | 2 | 3 | 4 | 5 | Reden |
|---|---|---|---|---|---|---|
| H1: vergelijkingen met een parameter (subsectie, twee voorbeelden, korte oefening, opdracht, testvraag) | | | | x | x | extra bij LPD 18 (pakket 4), wenk bij LPD 18 (pakket 5) |
| H1: opdracht over het aantal oplossingen van $ax + b = cx + d$ (redeneren) | | | | | x | niveau 3 |
| H2: dubbele ongelijkheden (subsectie, twee voorbeelden, korte oefening, twee opdrachten, testvraag) | | | | x | x | pakket 5: wenk stelsels van ongelijkheden; pakket 4: uitbreiding (zie Open) |
| H2: stelsel van twee ongelijkheden (doorsnede; uitleg, voorbeeld, korte oefening, opdracht) | | | | | x | wenk bij LPD 19 |
| H2: ongelijkheden met een parameter (subsectie, voorbeeld, werkwijze, korte oefening, opdracht, testvraag) | | | | x | x | extra bij LPD 19 (pakket 4), wenk bij LPD 19 (pakket 5) |
| H2: opdracht: bewijs dat het gemiddelde van $a$ en $b$ ertussen ligt | | | | | x | niveau 3, bewijzen (B1) |
| H3: een derde macht (subsectie met de derdemachtswortel, voorbeeld, korte oefening, opdracht, testvraag) | | | | | x | de leerlijn voor 5 uur voert de derdemachtswortel in; dit is een toepassing |
| H3: de letter staat twee keer, buiten haakjes brengen (subsectie, voorbeeld, korte oefening, opdracht, testvraag) | | | | x | x | uitbreiding (zie Open) |
| H3: eenparig versnelde beweging (opdracht) | | | | x | x | uitbreiding, samenhang met de fysica |
| H3: opdracht met de lenzenformule | | | | | x | niveau 3 |

Voor alle pakketten (sinds de toetsing): in H3 het voorbeeld met de bewegingsenergie (bij "Een kwadraat"; vroeger alleen pakket 4-5), de opdracht over bewegingsenergie, en een opdracht met de stelling van Pythagoras (formule gegeven in de opgave). Reden: de samenhang met formules uit de fysica en de wenk over Pythagoras. Het schema Fout? Herhaal kiest de testvragen per pakket met `\alleenvoor`.

## Na te kijken

Beslist door het leerplan (24 november 2026):

- **Ongelijkheden en intervallen in pakket 1:** ja, LPD 15.
- **Pakket 1 lichter dan 2 en 3?** Nee: de drie doelen en wenken zijn in Basis, B+ en B+S' gelijk.
- **Parameter in pakket 4 en 5:** ja, als extra (4) en als wenk (5), voor vergelijkingen én ongelijkheden. De ongelijkheden met een parameter ontbraken en zijn toegevoegd.
- **Stelsels van ongelijkheden in pakket 5:** wenk; toegevoegd naast de dubbele ongelijkheden.
- **Vierkantswortel bij $A = \pi r^2$:** binnen het leerplan (zuiver kwadratisch).
- **Derde macht:** de leerplannen van 2024 noemen alleen lineaire en zuiver kwadratische verbanden; alleen pakket 5 krijgt een derde macht, omdat het servicedocument voor 5 uur de derdemachtswortel invoert. Het hoofdstuk legt die kort zelf uit, zodat het niet afhangt van de volgorde van de handboeken.
- **LPD per hoofdstuk:** 14, 15, 16 (pakket 1-3) en 18, 19, 20 (pakket 4-5), één doel per hoofdstuk: de nummers die er al stonden, klopten.

Open (het leerplan beslist het niet):

- **Uitbreidingen die geen leerplan vraagt of uitsluit:** dubbele ongelijkheden in pakket 4, de letter twee keer in een formule (pakket 4-5), de eenparig versnelde beweging (4-5) en de lenzenformule (5). Didactische keuze, behouden.
- **Economische formules in pakket 3:** het leerplan zegt er niets over; didactische keuze.
- **Notatie.** Intervallen in de Vlaamse notatie, met de haken naar buiten bij een open grens ($]a, b[$), en op de getallenas met dezelfde haken. Scholen die bolletjes (vol of open) gebruiken, kunnen dat in `\haakl` en `\haakr` aanpassen. De oplossingsverzameling heet $V$, met $V = \emptyset$ en $V = \R$. Het leerplan vraagt geen systematische dubbele pijl bij het oplossen; het boek gebruikt $\iff$ alleen in de kaders met de rekenregels.
- **Woorden.** "Strijdige vergelijking" en "identieke vergelijking" (andere boeken zeggen ook "onmogelijke vergelijking" of "identiteit"); "een term overbrengen"; "gelijkwaardige vergelijkingen"; "quitte spelen".
- **Contexten met afgeronde of vereenvoudigde gegevens:** de schoenmaat $S = 1{,}5\,l + 2$ is een vuistregel; de temperatuur daalt gemiddeld ongeveer $6{,}5\,^\circ$C per km; de dichtheden van goud (19,3 g/cm$^3$) en ijzer (7,9 g/cm$^3$); alle prijzen zijn verzonnen. De formule $F = 1{,}8C + 32$ is exact.
- **Afronden in de context.** Bij de vaas (H3, opdracht met $V = \pi r^2 h$) staat "minstens", dus wordt 12,73 naar boven afgerond tot 12,8~cm. Bij de taxi (H2) staat "ongeveer 14,4 km".
- **Balans.** In de figuren staan de zakjes en blokjes op twee schaaltjes bovenop de arm (geen hangende schalen), zodat touwtjes en blokjes niet door elkaar lopen. Een strijdige vergelijking krijgt bewust geen balans: een balans in evenwicht zou daar misleiden.

## Controle

Alle vergelijkingen, ongelijkheden en omvormingen zijn nagerekend met SymPy, de afgeronde getallen met Python. Bewijzen, uitlegvragen en zelf te bedenken vergelijkingen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
