# TODO's

Alles wat nog moet gebeuren, op één plaats. **[Ingmar]**: dit mag Ingmar maken. Een nieuw handboek begint met de skill `handboek-hoofdstuk` en volgt de [ontwerpregels](Ontwerp/ontwerpregels.md); zet daarna de status in `voortgang.yaml` en draai `python maak-voortgang.py`.

## Handboeken maken

### 2de graad: alle 72 handboeken (18 onderwerpen) **[Ingmar]**

Nog geen enkele cursus geschreven. Indeling, leerplandoelen per pakket en voorkanten: [Handboeken/2de graad/README.md](<Handboeken/2de graad/README.md>). Het jaar is een voorstel. Schrijf een onderwerp het best één keer, met de verschillen per pakket erin (zie "Eén bron per cursus" hieronder), in plaats van vijf kopieën.

| Jaar | Handboek | Pakketten | |
|---|---|---|---|
| 3 | Algebra/Reële getallen | 1-5 | **[Ingmar]** |
| 3 | Algebra/Eerstegraadsvergelijkingen | 1-5 | **[Ingmar]** |
| 3 | Analyse/Functies | 1-5 | **[Ingmar]** |
| 3 | Algebra/Stelsels | 1-5 | **[Ingmar]** |
| 3 | Meetkunde/Gelijkvormigheid | 1-5 | **[Ingmar]** |
| 3 | Meetkunde/Driehoeksmeting | 1-5 | **[Ingmar]** |
| 3 | Discrete wiskunde/Logica | 1-5 (bewijzen B1 in pakket 5) | **[Ingmar]** |
| 3 | Data en onzekerheid/Statistiek | 1-5 | **[Ingmar]** |
| 3 | Data en onzekerheid/Spreidingsdiagrammen | 2-5 | **[Ingmar]** |
| 4 | Analyse/Tweedegraadsfuncties | 1-5 | **[Ingmar]** |
| 4 | Algebra/Veeltermen | 5 (ook GO!-optiepakket, POV-uitbreiding) | **[Ingmar]** |
| 4 | Meetkunde/Goniometrie | 4-5 | **[Ingmar]** |
| 4 | Meetkunde/Ruimtemeetkunde | 1-5 | **[Ingmar]** |
| 4 | Meetkunde/Vectoren | 1-5 | **[Ingmar]** |
| 4 | Meetkunde/Analytische meetkunde | 5 (ook GO!-optiepakket, POV-uitbreiding) | **[Ingmar]** |
| 4 | Meetkunde/De cirkel (keuze) | 4-5 | **[Ingmar]** |
| 4 | Discrete wiskunde/Telproblemen | 1-5 | **[Ingmar]** |
| 4 | Discrete wiskunde/Grafen (keuze) | 4-5 (ook GO!-optiepakket) | **[Ingmar]** |

- **Voor GO!:** homothetie en constructies met passer en liniaal. Kijk of ze in Gelijkvormigheid en Driehoeksmeting passen, of maak er een eigen hoofdstuk van. **[Ingmar]**

### 3de graad: wat nog ontbreekt

- **Kegelsneden**: eerste versie klaar sinds 16 nov 2026 (`4/Meetkunde/Kegelsneden`, vijf hoofdstukken). Nog na te lezen, en eventueel prenten bij de opdrachten. **[Ingmar]**
- **Vertrekken vanuit een probleem** (ontwerpregel van 16 nov 2026): de andere handboeken herwerken met een blok Probleem per hoofdstuk en een voorbeeld "Terug naar het probleem". Kegelsneden is het voorbeeld. **[Ingmar]**
- **Grote datasets met statistische software** (cluster 06.01: GO! en KOV Statistiek). Eerst samen bespreken wat en hoe (welke software, hoofdstuk of eigen cursus), daarna pas maken.
- **Telproblemen voor pakket 2 en 3**: GO! vraagt telproblemen met het binomium van Newton ook in de economische en wetenschapsrichtingen. Nu verwijst de site naar de cursus van pakket 4, die voor 6 uur wiskunde geschreven is. Maak een lichtere versie. **[Ingmar]**
- **Modules voor KOV Complementair** (uitbreiding voor wiskunderichtingen met meer dan 6 uur; een menu, niet alles is nodig): predicatenlogica, krommen en meetkundige plaatsen, oppervlakken in de ruimte, euclidische, affiene en projectieve meetkunde, extra integratiemethodes, differentiaalvergelijkingen, reeksen, numerieke methodes, vectorruimten, getaltheorie, lineair programmeren, financiële algebra, iteraties en fractalen, kansverdelingen, lineaire regressie, multivariate statistiek. **[Ingmar]**

## Handboeken afwerken (3de graad)

- **Alle 47 handboeken** staan op "eerste versie" (Integralen in pakket 4 op "tweede versie"). Ze moeten door de stadia van `voortgang.yaml`: tweede en derde versie, dan nalezen door leerkrachten. **[Ingmar]**
- **Pakket 1 afstemmen op Basis:** de leerstof is nu die van pakket 4 (de kopieën zijn voor 99-100 % gelijk). Schrap of herschrijf wat buiten het leerplan Basis valt. Hoofdstuk 4 van Statistiek (betrouwbaarheidsintervallen) is daar een keuzedoel. Hetzelfde geldt voor pakket 2 en 3 tegenover pakket 4. **[Ingmar]**
- **Rijen in pakket 1, 2 en 3:** inkorten of selecteren voor het aantal lestijden van het pakket (zie de README van die cursussen). Het motief op de voorkant toont limieten, die in die pakketten niet aan bod komen. **[Ingmar]**
- **Telproblemen (pakket 4):** de leerkrachtenversie kan LeWitt vermelden bij de kubussen op de voorkant.

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
  - Dubbele finaliteit (D/A) valt nog buiten het overzicht.

## Structuur

- **Eén bron per cursus:** één map per cursus, per pakket een `handboek.tex` dat de hoofdstukken kiest, verschillen binnen een hoofdstuk met een voorwaarde (bv. `\alleenvoor{4}{...}`), oefeningen met een veld `pakketten:`, en de leerplanverwijzing als gegevens (zie hierboven). Doe dit vóór de 2de graad groeit.

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

## Opruimen

- `Ontwerp/omslagen/omslag-impressie.jpg` en `omslag-waterlelies.jpg`: niet in git en door geen voorkant gebruikt. Ze staan wel in `SCHILDERIJEN` van `maak-omslagen.py`. Gebruiken of schrappen.
- De branch `pr-samenvoegen` samenvoegen met `main`.
