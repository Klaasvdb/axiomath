# Ruimtemeetkunde (2de graad): bron

Bron van het handboek Meetkunde/Ruimtemeetkunde van de 2de graad, voor alle vijf pakketten (LPD 12 in elk pakket), volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan de leerplannen van 2024 (24 november 2026), nog na te lezen.

Niet te verwarren met de cursus Ruimtemeetkunde van de 3de graad (`Handboeken/3de graad/cursussen/Ruimtemeetkunde/`), die met coördinaten en vectoren werkt. Deze cursus redeneert alleen met de figuur, zonder vectoren of coördinaten in de ruimte, en levert wat de 3de graad veronderstelt: de vier liggingen van twee rechten (ook kruisend), de liggingen van rechten en vlakken, de loodrechte stand (zonder vectoren; de 3de graad legt ze daarna vast met het scalair product en de normaalvector), en tekenen in schuine projectie met een kubus $ABCD.EFGH$ (dezelfde benoeming als in de 3de graad).

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Onderlinge ligging van twee rechten | `hoofdstukken/01-twee-rechten.tex` | 1-5 |
| 2. Onderlinge ligging van vlakken | `hoofdstukken/02-vlakken.tex` | 1-5 |

Hoofdstuk 1: ruimtefiguren tekenen in cavalièreperspectief (voorvlak in ware grootte, wijkende ribben onder $45^\circ$ en half zo lang, verborgen ribben gestippeld), punten, rechten en vlakken met hun notatie, collineair en coplanair, de grondeigenschap *rechte in een vlak*, snijdende, evenwijdige (strikt of samenvallend) en kruisende rechten (kruisend = niet in één vlak), de grondeigenschap *evenwijdige door een punt*, de eigenschap *evenwijdig met een derde rechte*, de ligging onderzoeken (ook als de tekening bedriegt: $BF$ en $CD$), loodrechte rechten (loodrecht snijdend en loodrecht kruisend, met een evenwijdige die de andere rechte snijdt), in pakket 5 de hoek tussen twee rechten (ook kruisende), en een vlak bepalen (drie punten, rechte en punt, twee snijdende of twee evenwijdige rechten). Probleem: bij welke paren buizen van een klimrek in de vorm van een kubus kun je een zeil vlak spannen ($AB$ en $HG$, $BF$ en $FG$, $AB$ en $CG$)?

Hoofdstuk 2: de drie liggingen van een rechte en een vlak, het kenmerk van een rechte evenwijdig met een vlak, het snijpunt van een rechte en een vlak tekenen (in een zijvlak of een diagonaalvlak), een rechte loodrecht op een vlak (definitie, voetpunt, kenmerk met twee snijdende rechten, zonder bewijs), de grondeigenschap *snijlijn van twee vlakken*, de liggingen van twee vlakken, de snijlijn tekenen met twee gemeenschappelijke punten, het kenmerk van evenwijdige vlakken, snijlijnen met evenwijdige vlakken (met kort bewijs voor alle pakketten), loodrechte vlakken, en in pakket 5 doorsneden van een kubus en een piramide met drie regels (twee punten in een zijvlak, evenwijdige zijvlakken, verlengen), met de regelmatige zeshoek in een kaaskubus. Probleem: waarom zet de vader van Noor een winkelhaak twee keer tegen een paal om te controleren of die loodrecht op de grond staat? (één rechte volstaat niet: $BG$ staat loodrecht op $AB$ maar niet op het grondvlak; twee snijdende rechten wel).

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`, vertrokken van die van Driehoeksmeting: `\lengte`, `\abs`, `\hoek`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`, `\stip`, `\punt`. Nieuw: de omgeving `redenering` (stappen in woorden met cursieve uitleg), `\pnt` (benoemd punt met label), `\rhoek` (teken voor een rechte hoek, ook in cavalièreperspectief), de stijl `schuin` (cavalièreperspectief: $45^\circ$, factor $\tfrac12$) met de stijlen `ribbe`, `verborgen`, `nadruk`, `snede` en `vlakdeel`, `\balkpunten`, `\draadbalk` en `\draadkubus` (zetten ook de coördinaten $A$ tot $H$), `\balknamen`, `\rechte`, `\draadpiramide` met `\piramidenamen`, en `\vlakje` (een vlak als parallellogram).

## Leerplan

KOV, 2de graad D-finaliteit: II-Wis-d (pakket 1, versie oktober 2024), II-Wis'-d (pakket 2, oktober 2024), II-WisS'-d (pakket 3, juni 2024), II-WisS-d (pakket 4, oktober 2024) en II-WisS''-d (pakket 5, oktober 2024), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde. Rubriek 4.3.3 "Ruimtemeetkunde" is in alle vijf LPD 12, met dezelfde drie wenken (evenwijdig: strikt of samenvallend, een rechte in een vlak is evenwijdig met dat vlak; de loodrechte stand hoort bij de onderlinge ligging, loodrechte kruisende rechten in een kubus, zonder de hoek tussen kruisende rechten te definiëren; snijpunten en snijlijnen bepalen) en een extra (een ruimtelijke situatie tweedimensionaal voorstellen, de ligging visualiseren). Alleen in B+S'' voegt de extra toe: de doorsnede van een vlak met een balk of kubus bepalen. Het servicedocument voor 5 uur maakt de loodrechte stand verplicht en vult aan: eigenschappen van de onderlinge ligging behandelen, en de hoek tussen rechten in de ruimte definiëren en berekenen. Voorkennis uit de 1ste graad: ruimtefiguren (I-Wis-a LPD 26).

| Hoofdstuk | 1 Basis | 2 B+ | 3 B+S' | 4 B+S | 5 B+S'' |
|---|---|---|---|---|---|
| 1. Onderlinge ligging van twee rechten | LPD 12 | LPD 12 | LPD 12 | LPD 12 | LPD 12 (bewijzen: B1) |
| 2. Onderlinge ligging van vlakken | LPD 12 | LPD 12 | LPD 12 | LPD 12 | LPD 12 (bewijzen: B1) |

Overal ook LPD 1-4 (fenomenen beschrijven, vraagstukken, ICT, redeneren).

## Verschillen per pakket

Alle pakketten hebben LPD 12 en dezelfde twee hoofdstukken. De verschillen staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Liggingen, snijpunten en snijlijnen, een vlak bepalen, tekenen in cavalièreperspectief | x | x | x | x | x |
| Loodrechte stand: loodrechte rechten (ook kruisend), een rechte loodrecht op een vlak, loodrechte vlakken | x | x | x | x | x |
| Kort bewijs van *snijlijnen met evenwijdige vlakken* | x | x | x | x | x |
| De hoek tussen twee rechten (subsectie, voorbeeld, korte oefening `h1-hoek`, opdracht `h1-o28`, deelvraag in `h1-t8`) | | | | | x |
| Paragraaf Doorsneden (drie regels, zeshoek in een kaaskubus, piramide), met de korte oefeningen, negen opdrachten en testvraag `h2-t6` | | | | | x |
| Bewijzen van de manieren om een vlak te bepalen (in de andere pakketten: een uitleg in een paar zinnen) | | | | | x |
| Kenmerk van kruisende rechten, met bewijs uit het ongerijmde (subsectie) | | | | | x |
| Bewijzen van de kenmerken van een rechte evenwijdig met een vlak en van evenwijdige vlakken (in de andere pakketten: uitleg zonder bewijs) | | | | | x |
| Opdrachten met een bewijs (h1-o22, h2-o20, h2-o23; in pakket 1-4 een uitlegvraag met hetzelfde id) | | | | | x |
| Opdracht: snijpunt met een verticaal hulpvlak (h2-o25) | | | | x | x |

## Aantallen

| | Korte oefeningen (deelvragen) | Opdrachten (deelvragen) | Test (deelvragen) |
|---|---|---|---|
| Hoofdstuk 1, pakket 1-4 | 10 (49) | 27 (121) | 8 (22) |
| Hoofdstuk 1, pakket 5 | 11 (52) | 28 (124) | 8 (22) |
| Hoofdstuk 2, pakket 1-3 | 8 (36) | 20 (84) | 7 (16) |
| Hoofdstuk 2, pakket 4 | 8 (36) | 21 (86) | 7 (16) |
| Hoofdstuk 2, pakket 5 | 11 (41) | 30 (107) | 8 (17) |

Daarbij per hoofdstuk een Opwarmer en een Verken, en in de zelfstudieversie Nu jij.

## Toetsing aan het leerplan (24 november 2026)

Wat het leerplan besliste en wat er veranderde:

- **LPD per hoofdstuk.** Beide hoofdstukken zijn LPD 12, in alle vijf de leerplannen; pakket 5 gebruikt ook B1 (bewijzen). De leerkrachtenversie zegt per hoofdstuk welke wenken het volgt.
- **Loodrechte stand** (wenk bij LPD 12 in alle pakketten, in het servicedocument voor 5 uur verplicht). Stond er niet in. Nieuw in alle pakketten: subsectie *Loodrechte rechten* in hoofdstuk 1 (loodrecht snijdend en loodrecht kruisend, gedefinieerd met een evenwijdige die de andere rechte loodrecht snijdt, zodat de hoek tussen kruisende rechten niet nodig is; voorbeeld met $AB$ en $CG$, $EG$ en $BD$, $AB$ en $CH$, korte oefening `h1-loodrecht`, opdrachten `h1-o25` tot `h1-o27`, testvraag `h1-t8`), en in hoofdstuk 2 de subsecties *Een rechte loodrecht op een vlak* (definitie, kenmerk met twee snijdende rechten zonder bewijs, voorbeeld, korte oefening `h2-loodrecht-vlak`) en *Loodrechte vlakken* (definitie, voorbeeld, korte oefening `h2-loodrechte-vlakken`), opdrachten `h2-o26` tot `h2-o30` en testvragen `h2-t8` en `h2-t9`.
- **Nieuw probleem voor hoofdstuk 2.** Het oude probleem (de kaaskubus) is een doorsnede, en die staat nu alleen in pakket 5. Het nieuwe probleem (de winkelhaak tegen een paal) gaat over het kenmerk van een rechte loodrecht op een vlak en geldt voor alle pakketten; het Terug naar het probleem staat na die subsectie. De kaaskubus is in pakket 5 een gewoon voorbeeld in de paragraaf Doorsneden (`vb:h2-zeshoek`).
- **Doorsneden.** Alleen het leerplan B+S'' noemt ze, als extra (een balk of kubus). De paragraaf Doorsneden, de korte oefeningen `h2-doorsnede1` tot `h2-doorsnede3`, de opdrachten `h2-o5`, `o10`, `o15`, `o16`, `o18`, `o19`, `o21`, `o22` en `o24` en testvraag `h2-t6` staan nu alleen in pakket 5. Testvraag `h2-t7` (doorsnede van een piramide) is weg, zodat de test niet te lang wordt; de piramide blijft in pakket 5 als voorbeeld en opdracht `h2-o15`, als uitbreiding van de extra.
- **De hoek tussen twee rechten.** Het servicedocument voor 5 uur vraagt die hoek te definiëren en te berekenen. Nieuw in pakket 5: subsectie in hoofdstuk 1 met definitie (ook voor kruisende rechten), voorbeeld (de hoek tussen $BG$ en $AC$ is $60^\circ$), werkwijze, korte oefening `h1-hoek`, opdracht `h1-o28` (in een balk, met de tangens) en een deelvraag in `h1-t8`. De andere pakketten definiëren de hoek niet, zoals de wenk zegt.
- **Tekenen in cavalièreperspectief.** Een extra bij LPD 12 in alle pakketten (een ruimtelijke situatie tweedimensionaal voorstellen). Het blijft in alle pakketten, omdat elke figuur en opdracht erop steunt; de leerkrachtenversie zegt dat het een extra is.
- **Definities van evenwijdig.** De wenk bij LPD 12 bevestigt de keuze: samenvallende rechten en vlakken zijn evenwijdig, en een rechte in een vlak is evenwijdig met dat vlak.
- **Eigenschappen en bewijzen.** Het servicedocument voor 5 uur noemt eigenschappen van de onderlinge ligging; de bewijzen in pakket 5 (B1) blijven. Het kenmerk van een rechte loodrecht op een vlak staat in alle pakketten zonder bewijs (te lang), en dat de definitie van loodrechte vlakken in beide richtingen werkt, wordt aanvaard.

Wat open blijft (het leerplan beslist het niet):

- **Een vlak bepalen staat in hoofdstuk 1**, niet in hoofdstuk 2 zoals het voorstel vermeldde. Reden: het probleem van hoofdstuk 1 (een zeil vlak spannen tussen twee buizen) is net de vraag of twee rechten een vlak bepalen, en hoofdstuk 2 gebruikt die eigenschappen meteen. De grondeigenschap *vlak door drie punten* staat er ook.
- **Grondeigenschappen zonder bewijs:** rechte in een vlak, vlak door drie punten, evenwijdige door een punt, snijlijn van twee vlakken, de eigenschap *evenwijdig met een derde rechte* (in de ruimte is het bewijs te lang voor de 2de graad), het kenmerk van een rechte loodrecht op een vlak, en dat alle evenwijdigen met $a$ die $b$ snijden dezelfde hoek met $b$ maken (alleen kort uitgelegd). Kijk of de school dezelfde keuze maakt.
- **Definitie van loodrecht kruisend.** Met een evenwijdige die de andere rechte loodrecht snijdt, zodat de hoek tussen kruisende rechten in pakket 1-4 niet nodig is. Loodrechte vlakken: het ene vlak bevat een rechte loodrecht op het andere.
- **Notatie.** $a \parallel b$, $a \perp b$, $a \cap b = \{S\}$, $\alpha \cap \beta = s$, $P \in a$, $a \subset \alpha$, vlakken met Griekse letters of met drie of vier punten ($ABFE$), lijnstuk $[AB]$, lengte $\lengte{AB}$. Kubus $ABCD.EFGH$ met grondvlak $ABCD$ en $E$ boven $A$, zoals in de 3de graad.
- **Cavalièreperspectief met $45^\circ$ en factor $\tfrac12$.** Daardoor liggen bij een kubus $A$, $D$, $F$ en $G$ in de tekening op één lijn. De voorbeelden en de figuren vermijden daarom de diagonalen $[AF]$, $[DG]$ en $[AG]$ als iets dat je moet zien. Een school die met $30^\circ$ tekent, kan dat in de werkwijze aanpassen.
- **Middenparallel.** Hoofdstuk 2 gebruikt dat de rechte door de middens van twee zijden van een driehoek evenwijdig is met de derde zijde (en omgekeerd) als gekend uit de 1ste graad.
- **Bewust opgenomen, buiten de wenken:** de snijlijn van twee diagonaalvlakken met hulprechten, het snijpunt van een rechte met een vlak via een diagonaalvlak (beide passen bij de wenk over snijpunten en snijlijnen), de telopdrachten (66 paren ribben, 20 vlakken door hoekpunten van een kubus), in pakket 4-5 de methode met een verticaal hulpvlak (opdracht van niveau 3), en in pakket 5 de doorsnede van een piramide.
- **Volgorde.** De hoek tussen twee rechten (pakket 5) gebruikt de tangens en Pythagoras uit Driehoeksmeting (3de jaar in het voorstel); Ruimtemeetkunde staat in het 4de jaar.
- **Prenten.** Er staan geen prenten bij de opdrachten.

## Controle

Alle liggingen van rechten in de kubus, de piramide en het prisma, de coplanaire punten, de snijpunten en de doorsneden in voorbeelden, korte oefeningen, opdrachten en test zijn nagerekend met coördinaten in Python; de nieuwe loodrechte standen (rechten, rechte en vlak, twee vlakken) en de hoeken tussen rechten (pakket 5, ook in de balk van 4 bij 3 bij 2) met SymPy. Bewijzen en uitlegvragen zijn niet nagerekend. Alle vijf pakketten bouwen zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
