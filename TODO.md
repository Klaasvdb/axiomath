# TODO's

Alles wat nog moet gebeuren, op één plaats. Wat af is, gaat naar [DONE.md](DONE.md). **[Ingmar]**: dit mag Ingmar maken. Een nieuw handboek begint met de skill `handboek-hoofdstuk` en volgt de [ontwerpregels](Ontwerp/ontwerpregels.md); zet daarna de status in `voortgang.yaml` en draai `python maak-voortgang.py`.

## Handboeken maken

### 2de graad: alle 72 handboeken (18 onderwerpen) **[Ingmar]**

Alle 18 onderwerpen hebben een eerste versie sinds 17 nov 2026 (72 handboeken, PR #46), elk uit één bron met de verschillen per pakket in `\alleenvoor`. De leerplantekst was bij het schrijven niet beschikbaar: elke bron heeft in haar README een lijst "Na te kijken" met de keuzes over de afbakening per pakket en de verdeling van de LPD over de hoofdstukken. Die moeten getoetst worden aan het leerplan, daarna tweede en derde versie. Indeling, leerplandoelen per pakket en voorkanten: [Handboeken/2de graad/README.md](<Handboeken/2de graad/README.md>). Het jaar is een voorstel. Schrijf een onderwerp het best één keer, met de verschillen per pakket erin (zie "Eén bron per cursus" in [Opmaak/README.md](Opmaak/README.md)): één bron in `Handboeken/2de graad/cursussen/<cursus>/`, en per pakket alleen een `handboek.tex`.

| Jaar | Handboek | Pakketten | |
|---|---|---|---|
| 3 | Algebra/Reële getallen | 1-5 | eerste versie **[Ingmar]** |
| 3 | Algebra/Eerstegraadsvergelijkingen | 1-5 | eerste versie **[Ingmar]** |
| 3 | Analyse/Functies | 1-5 | eerste versie **[Ingmar]** |
| 3 | Algebra/Stelsels | 1-5 | eerste versie **[Ingmar]** |
| 3 | Meetkunde/Gelijkvormigheid | 1-5 | eerste versie **[Ingmar]** |
| 3 | Meetkunde/Driehoeksmeting | 1-5 | eerste versie **[Ingmar]** |
| 3 | Discrete wiskunde/Logica | 1-5 (bewijzen B1 in pakket 5) | eerste versie **[Ingmar]** |
| 3 | Data en onzekerheid/Statistiek | 1-5 | eerste versie **[Ingmar]** |
| 3 | Data en onzekerheid/Spreidingsdiagrammen | 2-5 | eerste versie **[Ingmar]** |
| 4 | Analyse/Tweedegraadsfuncties | 1-5 | eerste versie **[Ingmar]** |
| 4 | Algebra/Veeltermen | 5 (ook GO!-optiepakket, POV-uitbreiding) | eerste versie **[Ingmar]** |
| 4 | Meetkunde/Goniometrie | 4-5 | eerste versie **[Ingmar]** |
| 4 | Meetkunde/Ruimtemeetkunde | 1-5 | eerste versie **[Ingmar]** |
| 4 | Meetkunde/Vectoren | 1-5 | eerste versie **[Ingmar]** |
| 4 | Meetkunde/Analytische meetkunde | 5 (ook GO!-optiepakket, POV-uitbreiding) | eerste versie **[Ingmar]** |
| 4 | Meetkunde/De cirkel (keuze) | 4-5 | eerste versie **[Ingmar]** |
| 4 | Discrete wiskunde/Telproblemen | 1-5 | eerste versie **[Ingmar]** |
| 4 | Discrete wiskunde/Grafen (keuze) | 4-5 (ook GO!-optiepakket) | eerste versie **[Ingmar]** |

- **Voor GO!:** de homothetie staat in Gelijkvormigheid (hoofdstuk 1, alle pakketten), de constructies met passer en liniaal sinds 18 nov 2026 in hoofdstuk 3 (pakket 4 en 5). Na te kijken: welke constructies GO! precies vraagt, en of KOV ze in pakket 4 of 5 vraagt.
- **Afspraken tussen de handboeken van de 2de graad, na te kijken:** W/O (Logica, 2de graad) tegenover W/V (Logica en bewijzen, 3de graad); het bewijs dat √2 irrationaal is staat in pakket 5 zowel in Reële getallen als in Logica; kwartielen en standaardafwijking (Statistiek: mediaan van elke helft, delen door n); de rico heet m en een rechte ax + by = c (Functies, Stelsels, Analytische meetkunde).

### Dubbele finaliteit (D/A): 45 handboeken (14 onderwerpen) **[Ingmar]**

Indeling, leerplandoelen en voorkanten klaar sinds 16 nov 2026: zie de README's van [de 3de graad](<Handboeken/3de graad/README.md#dubbele-finaliteit-da>) en [de 2de graad](<Handboeken/2de graad/README.md#dubbele-finaliteit-da>). Nog geen cursus geschreven.

- **3de graad (pakket 5-8, 26 handboeken):** Functies en verandering, Exponentiële en logaritmische functies, Tweedegraadsfuncties, Vectoren, Goniometrische functies, Kansrekenen, Statistiek. Waar de leerstof overeenkomt met de doorstroom: dezelfde bron in `cursussen/`, met `\alleenvoor{5,6,7,8}`. **[Ingmar]**
- **2de graad (pakket 6-7, 19 handboeken):** dezelfde onderwerpen als de doorstroom; schrijf ze mee in de bron van de 2de graad, met `\alleenvoor{6,7}` voor de lichtere opbouw en de contexten. **[Ingmar]**
- Een ontwerpregel voor D/A: meer contexten uit de richting, minder formele opbouw. Eerst samen bespreken.
- GO! D/A per richting nagaan (eigen doelen, uren); nu alleen Bouwtechnieken nagekeken.

### Arbeidsmarktfinaliteit (A): één handboek, op aanvraag

`2g8/Wiskunde in de praktijk` (II-Wis-a), alleen 2de graad. Pas maken als er interesse is: de site vraagt het bij het handboek. Inhoud en voorkant: [Handboeken/2de graad/README.md](<Handboeken/2de graad/README.md#arbeidsmarktfinaliteit-a>).

### 3de graad: wat nog ontbreekt

- **Kegelsneden**: nagelezen en aangevuld op 18 nov 2026 (PR #49): fouten verbeterd, 7 korte oefeningen en 6 testvragen per hoofdstuk, prenten (zie DONE.md). Nog: nalezen door een leerkracht.
- **Vertrekken vanuit een probleem:** sinds 18 nov 2026 begint elk hoofdstuk van de 3de graad met een blok Probleem en komt erop terug (PR #47). Na te lezen: de keuze van de problemen en de schattingen (zie de PR).
- **Grote datasets met statistische software** (cluster 06.01: GO! en KOV Statistiek). Eerst samen bespreken wat en hoe (welke software, hoofdstuk of eigen cursus), daarna pas maken. Kandidaten: Marimo (Python in de browser, zonder installatie; zie DONE.md), een rekenblad, GeoGebra of JASP.
- **Telproblemen voor pakket 2 en 3** (voor GO!): lichtere versie sinds 18 nov 2026, uit dezelfde bron met `\alleenvoor`. Na te kijken: de afbakening tegenover de GO!-doelen (zie de README van `cursussen/Telproblemen/`).
- **Modules voor KOV Complementair** (uitbreiding voor wiskunderichtingen met meer dan 6 uur; een menu, niet alles is nodig): predicatenlogica, krommen en meetkundige plaatsen, oppervlakken in de ruimte, euclidische, affiene en projectieve meetkunde, extra integratiemethodes, differentiaalvergelijkingen, reeksen, numerieke methodes, vectorruimten, getaltheorie, lineair programmeren, financiële algebra, iteraties en fractalen, kansverdelingen, lineaire regressie, multivariate statistiek. **[Ingmar]**

## Handboeken afwerken (3de graad)

- **Alle 47 handboeken** staan op "eerste versie" (Integralen in pakket 4 op "tweede versie"). Ze moeten door de stadia van `voortgang.yaml`: tweede en derde versie, dan nalezen door leerkrachten. **[Ingmar]**
- **Pakket 1 afstemmen op Basis:** gedaan op 18 nov 2026 voor alle acht cursussen van pakket 1 (PR #48), met het leerplan III-Wis-d; wat twijfelachtig is, staat onder "Na te kijken" in de README van elke cursus van pakket 1. Nog te doen: hetzelfde voor pakket 2 en 3 tegenover pakket 4, met de leerplannen III-WisS-d en III-WisS'-d (online niet gevonden). **[Ingmar]**
- **Rijen in pakket 1, 2 en 3:** ingekort sinds 18 nov 2026 (PR #48), met een eigen motief zonder limiet. Na te kijken: de lestijden per pakket (schattingen).

## Koepels

Zie [Ontwerp/koepels.md](Ontwerp/koepels.md) en [Handboeken/koepels.yaml](Handboeken/koepels.yaml). De voorkant per koepel en de website met koepel, richting en voorgesteld jaar zijn klaar sinds 15 nov 2026 (KOV en GO!).

- **Leerplankoppeling per koepel in de handboeken:** de leerkrachtenversie verwijst nu in `\lkr{Leerplan …: LPD …}` naar de KOV-nummers. Maak dat modulair: per stuk (hoofdstuk, sectie, oefening) de doelen van de overheid (MD/SMD) als gegevens, en daaruit de nummers van KOV, GO! en POV. Stappen:
  1. een concordantie van KOV-LPD naar MD/SMD (uit de concordantietabellen van de KOV-leerplannen), en van MD/SMD naar de GO!-code (uit de koppeltabellen van GO!; `BV3_06.xx` = MD 06.xx);
  2. een macro, bv. `\doelen{SMD 06.08.12, MD 06.13}`, die per koepel de juiste nummers zet;
  3. per koepel een leerkrachtenversie, of de nummers als laag op de website.
- **POV:** een eigen indeling en voorkant pas als iemand erom vraagt. De site legt het uit bij "OVSG of POV?".
- **Na te gaan:**
  - Is er een nieuwere versie van de KOV-leerplannen? De gebruikte dragen "versie oktober 2024" (Complementair: september 2025).
  - Waar realiseert KOV de cluster 06.11 (Toegepaste ruimtemeetkunde)?
  - De POV-doelenpakketten voor Grieks-Latijn, Grieks-Wiskunde, Latijn-Wetenschappen, Moderne talen en Freinetpedagogie (2de graad).
  - GO! D/A per richting (zie hierboven).
- **Leerplanverwijzing per pakket:** sinds de omzetting naar één bron per cursus (16 nov 2026) staan de nummers in `\lkr` als `Leerplan \pakketnaam: LPD \alleenvoor{4}{31}\alleenvoor{3}{23}…`. De macro `\doelen{…}` hierboven kan die vervangen.

## Studiewijzers

- Maak voor elke richting een zeer gedetailleerde studiewijzer. Dit houdt in dat les per les wordt gezegd welke theorie er wordt gezien en welke oefeningen er worden gemaakt. Hou hierbij rekening met het voorziene aantal lesuren per hoofdstuk. Onderverdeel eerst per jaar (hierin ga jij een weloverwogen keuze moeten maken welk jaar het meest geschikte is voor welke leerstof. Hou daarbij ook rekening met welke leerstof voortbouwt op andere leerstof). Bekijk hoeveel jaaruren een richting gemiddeld heeft (rond eerder naar onder af voor snipperruimte en herhalingstoetsen). Je bezorgt dus per richting twee soorten documenten: een graadoverzicht met de volgorde van de hoofdstukken, ingepland in een visuele kalender met in totaal 4 semesters, en per hoofdstuk een studiewijzer. Per koepel: de richtingen, de handboeken en de uren staan nu in `Handboeken/koepels.yaml`.

## Ontwerp: nog open

- De zelfstudieversie bevat nu alle oefeningen. Voorstel: een dun katern dat verwijst naar de nummers in het handboek.
- Stijgt de moeilijkheid in de Opdrachten strikt, of mag die ook door elkaar?
- De afdruk op de schoolkopieerder en het gebruik in de klas zijn nog niet getest.

## Website en ecosysteem

De plannen staan op [axiomath.be/#/plannen](https://axiomath.be/#/plannen), elk met een voorproefje:

- interactieve theorie (voorbeeld: Integralen in `Website/`), voor elke cursus;
- automatisch nakijken, met "Fout? Herhaal";
- differentiërend oefenen;
- toetsen en oefenreeksen op maat;
- het handboek als webpagina;
- een open oefeningenbank.

## Kenmerk op de voorkant
- Alle handboeken opnieuw bouwen (dan pas staat het kenmerk in de PDF's) en uitrollen, na `uitrol.py --opruimen`.
- De afdruk in zwart-wit nakijken (de kleuren verschillen dan alleen in grijswaarde).

## Oefeningenbundels per handboek voorzien. 
Maak er irritant veel, gevarieerd in moeilijkheid en zet ze bij elkaar per hoofdstuk, maar zet ze door elkaar in elk hoofdstuk. Eindig elke bundel met een mengeling van alle hoofdstukken door elkaar.
- voorzie een keuze om ze gesorteerd en gelabeld te bekijken, of net door elkaar.

## Feedback verwerken met de eigen Claude van een medewerker
- Een MCP-server (of iets anders, bv. een skill met een API-sleutel per medewerker) zodat medewerkers met hun eigen Claude kunnen aanmelden op axiomath.be en de goedgekeurde feedback zelf verwerken, zoals de skill `feedback-verwerken` nu doet.
- Daarna bouwt die Claude altijd alle PDF's opnieuw en zet ze op de website.
- Eerst samen bespreken: wie mag dat (rollen op de site), hoe de rechten voor schrijven in de repo en uitrollen geregeld worden, en hoe twee medewerkers niet tegelijk dezelfde feedback verwerken.

## Bevraging van de leerkrachten
- Begin december 2026 *Beheer → Dekking* bekijken: hoeveel leerkrachten het invullen, en of er richtingen in "Nog iets?" opduiken die op de site ontbreken.

## Kernvaardigheden toevoegen per jaar.

- Voeg per jaar bundels toe van kernvaardigheden toe. Basisrekenvaardigheden die de leerlingen onder de knie moeten hebben. Voorbeelden: ontbinden, dubbele producten, vereenvoudigen van breuken, machten, wortels, goniometrische getallen, ....
- **4de jaar, pakket 5 (B+S''):** eerste versie sinds 20 nov 2026: `2g5/Kernvaardigheden 4de jaar`, zeven hoofdstukken (ook stelsels), 1023 drillopgaven. De regels staan in de ontwerpregels (deel Kernvaardigheden). Na te lezen door een leerkracht; wat na te kijken is, staat in de README van de bron.
- Nog te maken: de andere jaren (3de jaar, 5de en 6de jaar) en de andere pakketten (lichtere bundels met `\alleenvoor` en `pakketten:` uit dezelfde bron).
