# Gelijkvormigheid: bron

Bron van het handboek Meetkunde/Gelijkvormigheid van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Schaal | `hoofdstukken/01-schaal.tex` | 1-5 |
| 2. Gelijkvormige driehoeken | `hoofdstukken/02-gelijkvormige-driehoeken.tex` | 1-5 |
| 3. Constructies | `hoofdstukken/03-constructies.tex` | 4-5 |

Hoofdstuk 1 gaat over rekenen met een schaal (kaarten, plannen, modellen, de maatstok), vergroten vanuit een punt (de homothetie), gelijkvormige figuren, en het effect van een vergroting met factor $k$ op lengte ($k$), oppervlakte ($k^2$) en volume ($k^3$). Probleem: hoeveel chocolade kost een paashaas die drie keer zo hoog is? Hoofdstuk 2 gaat over gelijkvormige driehoeken: overeenkomstige hoekpunten, de kenmerken HH, ZZZ en ZHZ, de evenwijdige met een zijde, de zandloper, en hoogtes en afstanden. Probleem: hoe hoog is een kerktoren die je met een camera met een gaatje fotografeert? Hoofdstuk 3 (alleen pakket 4 en 5, voor GO!) gaat over constructies met passer en liniaal: de vier basisconstructies uit de 1ste graad met waarom ze werken, een lijnstuk verdelen in gelijke delen en in een gegeven verhouding (stelling: evenwijdigen op twee halfrechten, met de evenwijdige met een zijde als bewijs), de vierde evenredige, de middelevenredige en $\sqrt{n}$ (met de hoek in een halve cirkel en de hoogtelijn in een rechthoekige driehoek, allebei met bewijs), een figuur vergroten met passer en liniaal, en een probleem oplossen met een homothetie (een vierkant in een driehoek). Probleem: hoe verdeelt een schrijnwerker een plank van 23 cm breed in zeven even brede latten, zonder te rekenen?

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: `\lengte`, `\abs` en `\Abs` (met `\lvert` en `\rvert`), `\drieh`, `\hoek`, `\gv` en `\schaal` voor de notatie; `\ruitjes`, `\punt`, `\hoekboog`, `\rechtehoek`, `\maatstok`, `\blokje`, `\balk` (schuin aanzicht met de stijl `schuin`) en `\haas` voor de figuren; de stijlen `hulp`, `gegeven` en `resultaat`, `\boogdoor` (een passerboog door een punt) en `\streep` voor de constructies van hoofdstuk 3; en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Kegelsneden. De TikZ-bibliotheken `angles` en `quotes` worden in `notatie.tex` geladen.

## Verschillen per pakket

Alle pakketten hebben LPD 8-9 en de hoofdstukken 1 en 2. Hoofdstuk 3 staat alleen in pakket 4 en 5 (in `\cursushoofdstukken` van hun `handboek.tex`). De andere verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Homothetie met een negatieve factor (subsectie, voorbeeld, korte oefening, opdracht) | | | | x | x |
| De zandloper als homothetie met een negatieve factor (één zin) | | | | x | x |
| De hoogtelijn in een rechthoekige driehoek (voorbeeld en opdracht) | | | | x | x |
| Opdracht over het A-formaat (aantonen dat $l = \sqrt2\,b$, de afmetingen van A0) | | x | x | x | x |
| Bewijzen van de kenmerken ZZZ en ZHZ (in de andere pakketten zonder bewijs; HH heeft overal een bewijs) | | | | | x |
| Opdracht: zwaartelijnen in gelijkvormige driehoeken (bewijs met ZHZ) | | | | | x |
| Hoofdstuk 3, Constructies (voor GO!), met de middelevenredige en $\sqrt{n}$ | | | | x | x |

## Homothetie en constructies

De TODO vroeg voor GO! om homothetie en constructies met passer en liniaal. De homothetie (centrische vermenigvuldiging) staat nu in hoofdstuk 1, in alle pakketten: vergroten vanuit een punt is de natuurlijke ingang voor schaal en gelijkvormigheid, en het bewijs van het kenmerk HH in hoofdstuk 2 steunt erop. De eigenschappen (lengtes $\times k$, evenwijdig beeld, hoeken blijven) staan elk in een eigen kader, zonder bewijs. De negatieve factor staat alleen in pakket 4 en 5 (het pakket dat GO! volgt). De constructies met passer en liniaal staan in hoofdstuk 3, alleen in pakket 4 en 5: GO! volgt pakket 4, en pakket 5 bevat alles van pakket 4. Het hoofdstuk steunt op de homothetie (hoofdstuk 1) en op de evenwijdige met een zijde en de hoogtelijn in een rechthoekige driehoek (hoofdstuk 2, die laatste staat ook alleen in pakket 4 en 5). De middelevenredige en $\sqrt{n}$ staan in beide pakketten, omdat de hoogtelijn er al staat; schrap ze in pakket 4 met `\alleenvoor` als GO! ze niet vraagt.

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad en de kennis van het leerplan. Na te kijken: of de homothetie bij KOV in alle pakketten past (voor pakket 1 kan ze als verdieping gelden), en welke onderdelen in de tabel hierboven echt in welk pakket horen (vooral de negatieve factor en de hoogtelijn in een rechthoekige driehoek).
- **LPD per hoofdstuk.** De leerkrachtenversie koppelt hoofdstuk 1 aan LPD 8 en hoofdstuk 2 aan LPD 9. Die verdeling is niet nagekeken in het leerplan.
- **Koepels.** In `Handboeken/koepels.yaml` verwijst GO! (2de graad, pakket 2g4) niet meer naar een nieuwe module "Homothetie en constructies", maar naar dit handboek, met de noot dat de GO!-doelen homothetie en constructies in hoofdstuk 1 en 3 staan.
- **GO!-doelen voor constructies.** Hoofdstuk 3 volgt de beschrijving "constructies met passer en liniaal" uit `Ontwerp/koepels.md`. De tekst en de nummers van die GO!-doelen (bij WD 06.04 en 06.08) zijn niet nagekeken: welke constructies GO! precies vraagt (verdelen, vierde en middelevenredige, $\sqrt{n}$, vergroten), en of KOV ze in pakket 4 of 5 vraagt.
- **Geodriehoek.** In de opdrachten van hoofdstuk 3 mag de geodriehoek voor een loodlijn of een evenwijdige, tenzij er "alleen met passer en liniaal" staat (zo staat het ook in de tip voor de leerkracht). Kies wat de school wil.
- **Stellingen in hoofdstuk 3.** De hoek in een halve cirkel krijgt een bewijs met gelijkbenige driehoeken, ook al hoort hij misschien bij het handboek De cirkel. De hoogtelijn in een rechthoekige driehoek, in hoofdstuk 2 een voorbeeld, is in hoofdstuk 3 een stelling met bewijs. De tekst zegt dat de hoek in een halve cirkel elders "stelling van Thales" heet.
- **Pythagoras** komt in hoofdstuk 3 alleen voor als controle tussen haakjes in twee uitwerkingen (een diagonaal) en in een opdracht van niveau 3 (de schuine zijde $x\sqrt2$ van een gelijkbenige rechthoekige driehoek), omdat Driehoeksmeting later kan komen.
- **Context van het probleem van hoofdstuk 3.** De duimstok schuin over de plank is een bekende vuistregel van schrijnwerkers, in eigen woorden en met eigen getallen.
- **Stelling van Thales.** De eigenschap van de evenwijdige met een zijde heet in de tekst ook "stelling van Thales", zoals vaak in Vlaanderen. Elders heet de stelling over de omtrekshoek op een middellijn zo. Kies de naam van de school.
- **Derdemachtswortel.** Reële getallen laat de derdemachtswortel weg. Hoofdstuk 1 gebruikt hem toch, informeel: met mooie getallen (8, 27, 64, 125, 1000) en in twee opdrachten met de rekenmachine ($\sqrt[3]{4{,}545}$ en $\sqrt[3]{2}$).
- **Volgorde.** Hoofdstuk 1 gebruikt $\sqrt2$ (A4 naar A3) en veronderstelt dus Reële getallen. Hoofdstuk 2 vermeldt dat Driehoeksmeting erop verder bouwt.
- **Notatie.** Hoeken als $\widehat{A}$, gelijkvormig als $\triangle ABC \sim \triangle DEF$, lengte als $|AB|$, lijnstuk $[AB]$, halfrechte $[OA$. Kijk of dat de afspraken van de school zijn.
- **Ware grootte.** Drie figuren moeten op ware grootte gedrukt worden, omdat leerlingen erop meten: de kaart met de maatstok (voorbeeld en korte oefening in hoofdstuk 1) en de plattegrond van het appartement (opdracht). Afdrukken met "aanpassen aan pagina" verandert de lengtes, maar bij de kaarten blijft de maatstok kloppen.
- **Getallen in contexten** zijn afgeronde waarden: de Eiffeltoren (330 m), het Atomium (102 m), de diameter van de aarde (12 742 km), Brussel-Rome (1170 km), de oppervlakte van België (30 700 km²), de maan (384 000 km ver, diameter ongeveer 3475 km), een tennisbal (6,7 cm) en een basketbal (24 cm), modeltreinen H0 ($1 : 87$), en de mier die 50 keer haar gewicht draagt (een gangbare schatting).
- **Probleem van hoofdstuk 2.** De oplossing neemt aan dat het gaatje van de camera even hoog staat als de voet van de toren.
- **Bewijzen.** Het kenmerk HH krijgt in alle pakketten een kort bewijs met de homothetie (het legt uit waarom twee hoeken volstaan). De eigenschappen van de homothetie zelf zijn niet bewezen: op een rooster worden ze nageteld.
- **Prenten.** Er staan geen prenten bij de opdrachten.

## Controle

De uitkomsten zijn nagerekend: de afgeronde getallen (wereldbol, ballen, flessen, A-formaat, maan, lantaarnpaal, $\sqrt{20}$, en in hoofdstuk 3 alle lengtes, verhoudingen, wortels en de vierkanten in een driehoek) met Python, de rest met de hand. De figuren van hoofdstuk 3 zijn met berekende coördinaten getekend, zodat de constructies ook in de figuur kloppen. Bewijzen en uitlegvragen zijn niet nagerekend. Alle vijf pakketten bouwen zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
