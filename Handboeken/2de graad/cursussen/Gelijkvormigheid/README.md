# Gelijkvormigheid: bron

Bron van het handboek Meetkunde/Gelijkvormigheid van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Schaal | `hoofdstukken/01-schaal.tex` | 1-5 |
| 2. Gelijkvormige driehoeken | `hoofdstukken/02-gelijkvormige-driehoeken.tex` | 1-5 |
| 3. Constructies | `hoofdstukken/03-constructies.tex` | 4-5 |

Hoofdstuk 1 gaat over rekenen met een schaal (kaarten, plannen, modellen, de maatstok), vergroten vanuit een punt (de homothetie), gelijkvormige figuren, en het effect van een vergroting met factor $k$ op lengte ($k$), oppervlakte ($k^2$) en volume ($k^3$). Probleem: hoeveel chocolade kost een paashaas die drie keer zo hoog is? Hoofdstuk 2 gaat over gelijkvormige driehoeken: overeenkomstige hoekpunten, de kenmerken HH, ZZZ en ZHZ, de evenwijdige met een zijde, de zandloper, en hoogtes en afstanden; in pakket 5 ook de stelling van Thales met de evenwijdige projectie, middenparallel en zwaartelijnen, en de metrische betrekkingen in een rechthoekige driehoek. Probleem: hoe hoog is een kerktoren die je met een camera met een gaatje fotografeert? Hoofdstuk 3 (alleen pakket 4 en 5, voor GO!) gaat over constructies met passer en liniaal: de vier basisconstructies uit de 1ste graad met waarom ze werken, een lijnstuk verdelen in gelijke delen en in een gegeven verhouding (stelling: evenwijdigen op twee halfrechten, met de evenwijdige met een zijde als bewijs), de vierde evenredige, de middelevenredige en $\sqrt{n}$ (met de hoek in een halve cirkel en de hoogtelijn in een rechthoekige driehoek, allebei met bewijs), een figuur vergroten met passer en liniaal, en een probleem oplossen met een homothetie (een vierkant in een driehoek). Probleem: hoe verdeelt een schrijnwerker een plank van 23 cm breed in zeven even brede latten, zonder te rekenen?

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: `\lengte`, `\abs` en `\Abs` (met `\lvert` en `\rvert`), `\drieh`, `\hoek`, `\gv` en `\schaal` voor de notatie; `\ruitjes`, `\punt`, `\hoekboog`, `\rechtehoek`, `\maatstok`, `\blokje`, `\balk` (schuin aanzicht met de stijl `schuin`) en `\haas` voor de figuren; de stijlen `hulp`, `gegeven` en `resultaat`, `\boogdoor` (een passerboog door een punt) en `\streep` voor de constructies van hoofdstuk 3; en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Kegelsneden. De TikZ-bibliotheken `angles` en `quotes` worden in `notatie.tex` geladen.

## Leerplan

Getoetst aan de geldende KOV-leerplannen van de 2de graad D (november 2026). Alle vijf nummeren de doelen van dit onderwerp gelijk, in de rubriek 4.3.1 Gelijkvormigheid: LPD 8 (het effect van een schaalverandering op vorm, lengte, oppervlakte en volume) en LPD 9 (gelijkvormigheidskenmerken van driehoeken toepassen).

| Pakket | Leerplan (versie) | H1 | H2 | H3 |
|---|---|---|---|---|
| 1 | II-Wis-d (oktober 2024, D/2024/13.758/063) | LPD 8 | LPD 9; LPD 4 (bewijs HH) | – |
| 2 | II-Wis'-d (oktober 2024, D/2024/13.758/064) | LPD 8 | LPD 9; LPD 4 (bewijs HH) | – |
| 3 | II-WisS'-d (juni 2024, D/2024/13.758/066) | LPD 8 | LPD 9; LPD 4 (bewijs HH) | – |
| 4 | II-WisS-d (oktober 2024, D/2024/13.758/350) | LPD 8 (homothetie: extra) | LPD 9; LPD 4 (bewijs HH) | geen eigen doel (uitbreiding, voor GO!) |
| 5 | II-WisS''-d (oktober 2024, D/2024/13.758/351), met het servicedocument voor 5 uur | LPD 8 (homothetie: extra, verplicht voor 5 uur) | LPD 9; LPD B1 (bewijzen) | geen eigen doel (uitbreiding) |

De doelen zelf zijn in de vijf leerplannen dezelfde. De verschillen zitten in de wenken en extra's:

- **Alle pakketten.** LPD 8, wenk: het verband tussen gelijkvormigheid en schaal, de gelijkvormigheidsfactor bij vlakke en ruimtelijke figuren. LPD 9, wenk: kenmerken eerst laten onderzoeken, dan formuleren, dan toepassen. LPD 4 (alle pakketten, in pakket 5 zonder dit extra): de bewijzen van de gelijkvormigheidskenmerken laten reconstrueren is een extra.
- **Pakket 1-4.** LPD 9, extra: de stelling van Thales als toepassing van de gelijkvormigheidskenmerken.
- **Pakket 4 en 5.** LPD 8, extra: gelijkvormigheid beschrijven met samenstellingen van transformaties, in het bijzonder homothetieën. Pakket 1-3 noemen de homothetie niet.
- **Pakket 5.** LPD 8, extra: ook de coördinaten van een beeldpunt onder een homothetie berekenen met vectoren. LPD 9, wenken: metrische betrekkingen in een rechthoekige driehoek verklaren met de kenmerken, en de stelling van Thales. LPD B1 noemt de gelijkvormigheidskenmerken en de stelling van Thales als voorbeelden van bewijzen. Het servicedocument voor 5 uur maakt de homothetieën, de metrische betrekkingen en de stelling van Thales verplicht, en voegt toe: met de kenmerken de eigenschappen van de middenparallel en de zwaartelijnen bewijzen, de stelling van Thales inleiden met projecties, en het beeld van een evenwijdige projectie op een rechte bepalen.
- **Constructies met passer en liniaal** staan in geen enkel KOV-leerplan bij gelijkvormigheid. Pakket 4 en 5 noemen ze alleen als wenk bij het keuzedoel K1 (De cirkel), voor raaklijnen.

## Verschillen per pakket

Alle pakketten hebben LPD 8-9 en de hoofdstukken 1 en 2. Hoofdstuk 3 staat alleen in pakket 4 en 5 (in `\cursushoofdstukken` van hun `handboek.tex`). De andere verschillen staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 | Reden |
|---|---|---|---|---|---|---|
| Homothetie met een positieve factor (H1, sectie 2) | x | x | x | x | x | werkwijze voor LPD 8 en basis van het bewijs van HH; in 4-5 een extra bij LPD 8 |
| Opdracht: centrum en factor van een homothetie zoeken (`h1-o10`) | | | | x | x | over de homothetie als transformatie: extra bij LPD 8 in 4-5 |
| Homothetie met een negatieve factor (subsectie, voorbeeld, korte oefening, opdracht) en de zandloper als homothetie (één zin) | | | | x | x | extra bij LPD 8 |
| Derdemachtswortel op de rekenmachine (`h1-o19` met 0,33 en 1,5 liter, `h1-o22` c) | | | | | x | derdemachtswortels: extra bij LPD 7 en verplicht voor 5 uur; in 1-4 een variant van `h1-o19` met mooie getallen, en `h1-o22` zonder c |
| Opdracht over het A-formaat (`h1-o21`) | | x | x | x | x | didactische keuze (niveau 3) |
| Bewijzen van de kenmerken ZZZ en ZHZ (HH heeft overal een bewijs) | | | | | x | LPD B1; in 1-4 bij LPD 4 een extra |
| Opdracht: zwaartelijnen in gelijkvormige driehoeken (`h2-o21`) | | | | | x | LPD B1 |
| De stelling van Thales met de evenwijdige projectie (subsectie met bewijs, voorbeeld, korte oefening `h2-thales`, opdrachten `h2-o27`, `h2-o28`, testvraag `h2-t8`) | | | | | x | wenk bij LPD 9, servicedocument 5 uur (projecties) |
| Middenparallel en zwaartelijnen (twee stellingen met bewijs, twee voorbeelden, korte oefening `h2-midden`, opdracht `h2-o29`) | | | | | x | servicedocument 5 uur, LPD B1 |
| De hoogtelijn in een rechthoekige driehoek (voorbeeld, opdracht `h2-o13`) | | | | x | x | in 4 een toepassing van HH die hoofdstuk 3 nodig heeft; in 5 de wenk metrische betrekkingen |
| Metrische betrekkingen: hoogte en rechthoekszijde (twee stellingen met bewijs, voorbeeld, korte oefening `h2-metrisch`, opdrachten `h2-o30`, `h2-o31` met het bewijs van Pythagoras, testvraag `h2-t9`) | | | | | x | wenk bij LPD 9, verplicht voor 5 uur; LPD B1 |
| Hoofdstuk 3, Constructies | | | | x | x | voor GO!; bij KOV een uitbreiding zonder eigen doel |
| In H3: de stelling over de hoogtelijn met bewijs | | | | x | | in 5 staat ze al in H2 als metrische betrekking; H3 verwijst ernaar |

## Homothetie en constructies

De TODO vroeg voor GO! om homothetie en constructies met passer en liniaal. De homothetie (centrische vermenigvuldiging) staat in hoofdstuk 1, in alle pakketten. Bij KOV is ze een extra in pakket 4 en 5 (in de leerlijn voor 5 uur verplicht), en noemen pakket 1-3 haar niet. Ze blijft daar toch, met alleen een positieve factor: sectie 2 is de werkwijze om een figuur te vergroten en te tonen wat er met lengtes en hoeken gebeurt (de kern van LPD 8), en het bewijs van HH in hoofdstuk 2 steunt erop. Wat over de homothetie als transformatie gaat (het centrum zoeken, de negatieve factor), staat alleen in pakket 4 en 5. De constructies met passer en liniaal staan in hoofdstuk 3, alleen in pakket 4 en 5: GO! volgt pakket 4, en pakket 5 bevat alles van pakket 4. KOV vraagt die constructies in geen enkel pakket, ook niet in pakket 4 of 5; het hoofdstuk past daar wel toe wat LPD 8 en 9 aanreiken (homothetie, Thales, en in pakket 5 de metrische betrekkingen). Een school van KOV kan het weglaten. De middelevenredige en $\sqrt{n}$ staan in beide pakketten; schrap ze in pakket 4 met `\alleenvoor` als GO! ze niet vraagt.

## Wat het leerplan besliste

- **LPD per hoofdstuk**: hoofdstuk 1 hoort bij LPD 8 en hoofdstuk 2 bij LPD 9, in alle pakketten (dat klopte al). Het bewijs van HH hoort bij LPD 4 (pakket 1-4) of B1 (pakket 5). Hoofdstuk 3 heeft geen eigen KOV-doel. De kaders voor de leerkracht zeggen dat nu per pakket.
- **De homothetie in pakket 1-3**: niet gevraagd. Ze blijft als werkwijze met een positieve factor (zie hierboven); de opdracht om het centrum en de factor te zoeken (`h1-o10`) staat nu alleen in pakket 4 en 5. Het kader voor de leerkracht zegt dat ze buiten het leerplan van die pakketten valt.
- **De negatieve factor** past in pakket 4 en 5 (extra bij LPD 8) en blijft daar.
- **De hoogtelijn in een rechthoekige driehoek**: alleen pakket 5 vraagt metrische betrekkingen (wenk, verplicht voor 5 uur). Pakket 5 krijgt nu beide betrekkingen (hoogte en rechthoekszijde) als stelling met bewijs, met voorbeeld, korte oefening, twee opdrachten (een met het bewijs van Pythagoras, LPD B1) en een testvraag. Pakket 4 houdt het voorbeeld en de opdracht, omdat hoofdstuk 3 (de middelevenredige) erop steunt; het leerplan van pakket 4 noemt ze niet.
- **De stelling van Thales**: in pakket 1-4 een extra, als toepassing van de kenmerken; dat is de evenwijdige met een zijde, die zo heet. Pakket 5 krijgt de stelling in het algemeen, ingeleid met een evenwijdige projectie zoals het servicedocument vraagt, met bewijs (LPD B1 noemt haar als voorbeeld); de evenwijdige met een zijde heet daar een bijzonder geval.
- **Middenparallel en zwaartelijnen** (servicedocument 5 uur): nieuw in pakket 5, met bewijs met ZHZ en met de zandloper.
- **De bewijzen van ZZZ en ZHZ** blijven in pakket 5 (B1 noemt de kenmerken); in pakket 1-4 zijn ze een extra bij LPD 4 en staan ze er niet.
- **De derdemachtswortel**: alleen pakket 5 kent hem (extra bij LPD 7, verplicht voor 5 uur; zie Reële getallen). In pakket 1-4 komt hij alleen voor met mooie getallen, zonder rekenmachine: `h1-o19` heeft daar een variant (0,25 en 2 liter), en `h1-o22` mist deelvraag c.
- **Constructies (GO!)**: KOV vraagt ze in pakket 4 noch 5 (zie hierboven). Welke constructies GO! precies vraagt, beslist het KOV-leerplan niet.

## Wat open blijft

- **GO!-doelen voor constructies en homothetie.** Hoofdstuk 3 volgt de beschrijving "constructies met passer en liniaal" uit `Ontwerp/koepels.md`. De tekst en de nummers van die GO!-doelen (bij WD 06.04 en WD 06.08) zijn niet nagekeken: de GO!-tekst was niet beschikbaar. Na te kijken: welke constructies GO! vraagt (verdelen, vierde en middelevenredige, $\sqrt{n}$, vergroten), of GO! de negatieve factor vraagt, en of GO! de stelling van Thales algemeen (met projecties) vraagt.
- **Koepels.** In `Handboeken/koepels.yaml` verwijst GO! (pakket 2g4) naar dit handboek, met de noot dat de GO!-doelen homothetie en constructies in hoofdstuk 1 en 3 staan. Dat blijft kloppen.
- **Homothetie in pakket 1-3.** Een didactische keuze; wie haar daar niet wil, moet sectie 2 van hoofdstuk 1 en het bewijs van HH herschrijven als "vergroten vanuit een punt" zonder de naam. Het leerplan sluit haar niet uit.
- **Coördinaten van een beeldpunt met vectoren** (extra in pakket 5): niet opgenomen. Vectoren komt later (4de jaar); op een rooster met het centrum in de oorsprong vermenigvuldigen leerlingen wel al de coördinaten met $k$.
- **Didactische keuzes die het leerplan niet beslist:** de opdracht over het A-formaat in pakket 2-5 en niet in 1, het bewijs van HH in alle pakketten, de hoogtelijn in pakket 4.
- **Geodriehoek.** In de opdrachten van hoofdstuk 3 mag de geodriehoek voor een loodlijn of een evenwijdige, tenzij er "alleen met passer en liniaal" staat (zo staat het ook in de tip voor de leerkracht). Kies wat de school wil.
- **Stellingen in hoofdstuk 3.** De hoek in een halve cirkel krijgt een bewijs met gelijkbenige driehoeken; bij KOV hoort hij bij de omtrekshoeken van het keuzedoel K1 (De cirkel). De hoogtelijn in een rechthoekige driehoek, in hoofdstuk 2 een voorbeeld, is in pakket 4 in hoofdstuk 3 een stelling met bewijs; in pakket 5 verwijst hoofdstuk 3 naar de metrische betrekking uit hoofdstuk 2. De tekst zegt dat de hoek in een halve cirkel elders "stelling van Thales" heet.
- **Pythagoras** komt in hoofdstuk 3 alleen voor als controle tussen haakjes in twee uitwerkingen (een diagonaal) en in een opdracht van niveau 3 (de schuine zijde $x\sqrt2$ van een gelijkbenige rechthoekige driehoek), omdat Driehoeksmeting later kan komen. In pakket 5 bewijst opdracht `h2-o31` de stelling met de metrische betrekkingen.
- **Context van het probleem van hoofdstuk 3.** De duimstok schuin over de plank is een bekende vuistregel van schrijnwerkers, in eigen woorden en met eigen getallen.
- **Naam "stelling van Thales".** In pakket 1-4 heet de evenwijdige met een zijde zo, in pakket 5 de stelling over een evenwijdige projectie. Elders heet de stelling over de omtrekshoek op een middellijn zo. Kies de naam van de school.
- **Volgorde.** Hoofdstuk 1 gebruikt $\sqrt2$ (A4 naar A3) en veronderstelt dus Reële getallen. Hoofdstuk 2 vermeldt dat Driehoeksmeting erop verder bouwt.
- **Notatie.** Hoeken als $\widehat{A}$, gelijkvormig als $\triangle ABC \sim \triangle DEF$, lengte als $|AB|$, lijnstuk $[AB]$, halfrechte $[OA$. Kijk of dat de afspraken van de school zijn.
- **Ware grootte.** Drie figuren moeten op ware grootte gedrukt worden, omdat leerlingen erop meten: de kaart met de maatstok (voorbeeld en korte oefening in hoofdstuk 1) en de plattegrond van het appartement (opdracht). Afdrukken met "aanpassen aan pagina" verandert de lengtes, maar bij de kaarten blijft de maatstok kloppen.
- **Getallen in contexten** zijn afgeronde waarden: de Eiffeltoren (330 m), het Atomium (102 m), de diameter van de aarde (12 742 km), Brussel-Rome (1170 km), de oppervlakte van België (30 700 km²), de maan (384 000 km ver, diameter ongeveer 3475 km), een tennisbal (6,7 cm) en een basketbal (24 cm), modeltreinen H0 ($1 : 87$), en de mier die 50 keer haar gewicht draagt (een gangbare schatting).
- **Probleem van hoofdstuk 2.** De oplossing neemt aan dat het gaatje van de camera even hoog staat als de voet van de toren.
- **Bewijzen.** De eigenschappen van de homothetie zelf zijn niet bewezen: op een rooster worden ze nageteld. Het bewijs van de stelling van Thales (pakket 5) behandelt het geval met $B$ tussen $A$ en $C$; de andere gevallen gaan net zo.
- **Opmaak.** In pakket 5 staat het schema Fout? Herhaal van hoofdstuk 2 alleen op een pagina, na de negen testvragen.
- **Prenten.** Er staan geen prenten bij de opdrachten.

## Controle

De uitkomsten zijn nagerekend: de afgeronde getallen (wereldbol, ballen, flessen, A-formaat, maan, lantaarnpaal, $\sqrt{20}$, en in hoofdstuk 3 alle lengtes, verhoudingen, wortels en de vierkanten in een driehoek) met Python, de nieuwe opgaven van pakket 5 (Thales, middenparallel, zwaartelijnen, metrische betrekkingen) en de variant van `h1-o19` met SymPy, de rest met de hand. De figuren bij de stelling van Thales zijn met berekende coördinaten getekend. De figuren van hoofdstuk 3 zijn met berekende coördinaten getekend, zodat de constructies ook in de figuur kloppen. Bewijzen en uitlegvragen zijn niet nagerekend. Alle vijf pakketten bouwen zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
