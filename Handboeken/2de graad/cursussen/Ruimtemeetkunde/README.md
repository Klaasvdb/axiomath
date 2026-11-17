# Ruimtemeetkunde (2de graad): bron

Bron van het handboek Meetkunde/Ruimtemeetkunde van de 2de graad, voor alle vijf pakketten (LPD 12 in elk pakket), volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

Niet te verwarren met de cursus Ruimtemeetkunde van de 3de graad (`Handboeken/3de graad/cursussen/Ruimtemeetkunde/`), die met coördinaten en vectoren werkt. Deze cursus redeneert alleen met de figuur, zonder vectoren of coördinaten in de ruimte, en levert wat de 3de graad veronderstelt: de vier liggingen van twee rechten (ook kruisend), de liggingen van rechten en vlakken, en tekenen in schuine projectie met een kubus $ABCD.EFGH$ (dezelfde benoeming als in de 3de graad).

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Onderlinge ligging van twee rechten | `hoofdstukken/01-twee-rechten.tex` | 1-5 |
| 2. Onderlinge ligging van vlakken | `hoofdstukken/02-vlakken.tex` | 1-5 |

Hoofdstuk 1: ruimtefiguren tekenen in cavalièreperspectief (voorvlak in ware grootte, wijkende ribben onder $45^\circ$ en half zo lang, verborgen ribben gestippeld), punten, rechten en vlakken met hun notatie, collineair en coplanair, de grondeigenschap *rechte in een vlak*, snijdende, evenwijdige (strikt of samenvallend) en kruisende rechten (kruisend = niet in één vlak), de grondeigenschap *evenwijdige door een punt*, de eigenschap *evenwijdig met een derde rechte*, de ligging onderzoeken (ook als de tekening bedriegt: $BF$ en $CD$), en een vlak bepalen (drie punten, rechte en punt, twee snijdende of twee evenwijdige rechten). Probleem: bij welke paren buizen van een klimrek in de vorm van een kubus kun je een zeil vlak spannen ($AB$ en $HG$, $BF$ en $FG$, $AB$ en $CG$)?

Hoofdstuk 2: de drie liggingen van een rechte en een vlak, het kenmerk van een rechte evenwijdig met een vlak, het snijpunt van een rechte en een vlak tekenen (in een zijvlak of een diagonaalvlak), de grondeigenschap *snijlijn van twee vlakken*, de liggingen van twee vlakken, de snijlijn tekenen met twee gemeenschappelijke punten, het kenmerk van evenwijdige vlakken, snijlijnen met evenwijdige vlakken (met kort bewijs voor alle pakketten), en doorsneden van een kubus en een piramide met drie regels (twee punten in een zijvlak, evenwijdige zijvlakken, verlengen). Probleem: welke vorm heeft de snede door een kaaskubus door de middens van $[AB]$, $[BC]$ en $[GH]$? (een regelmatige zeshoek).

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`, vertrokken van die van Driehoeksmeting: `\lengte`, `\abs`, `\hoek`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`, `\stip`, `\punt`. Nieuw: de omgeving `redenering` (stappen in woorden met cursieve uitleg), `\pnt` (benoemd punt met label), de stijl `schuin` (cavalièreperspectief: $45^\circ$, factor $\tfrac12$) met de stijlen `ribbe`, `verborgen`, `nadruk`, `snede` en `vlakdeel`, `\balkpunten`, `\draadbalk` en `\draadkubus` (zetten ook de coördinaten $A$ tot $H$), `\balknamen`, `\rechte`, `\draadpiramide` met `\piramidenamen`, en `\vlakje` (een vlak als parallellogram).

## Verschillen per pakket

Alle pakketten hebben LPD 12 en dezelfde twee hoofdstukken. De verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Leerstof van beide hoofdstukken, met de drie regels voor doorsneden | x | x | x | x | x |
| Kort bewijs van *snijlijnen met evenwijdige vlakken* | x | x | x | x | x |
| Bewijzen van de manieren om een vlak te bepalen (in de andere pakketten: een uitleg in een paar zinnen) | | | | | x |
| Kenmerk van kruisende rechten, met bewijs uit het ongerijmde (subsectie) | | | | | x |
| Bewijzen van de kenmerken van een rechte evenwijdig met een vlak en van evenwijdige vlakken (in de andere pakketten: uitleg zonder bewijs) | | | | | x |
| Opdrachten met een bewijs (h1-o22, h2-o20, h2-o23; in pakket 1-4 een uitlegvraag met hetzelfde id) | | | | | x |
| Opdracht: vijfhoek als doorsnede met twee keer verlengen (h2-o22) | | x | x | x | x |
| Opdracht: snijpunt met een verticaal hulpvlak (h2-o25) | | | | x | x |

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad en de kennis van het leerplan. Na te kijken in het leerplan (LPD 12): of tekenen in cavalièreperspectief erbij hoort of al in de 1ste graad gezien is, of doorsneden van een kubus en een piramide bij LPD 12 horen (nu in alle pakketten, ook met de regel *verlengen*), en of loodrechte stand van rechten en vlakken erbij hoort (nu niet opgenomen).
- **Een vlak bepalen staat in hoofdstuk 1**, niet in hoofdstuk 2 zoals het voorstel vermeldde. Reden: het probleem van hoofdstuk 1 (een zeil vlak spannen tussen twee buizen) is net de vraag of twee rechten een vlak bepalen, en hoofdstuk 2 gebruikt die eigenschappen meteen. De grondeigenschap *vlak door drie punten* staat er ook.
- **Grondeigenschappen zonder bewijs:** rechte in een vlak, vlak door drie punten, evenwijdige door een punt, snijlijn van twee vlakken, en de eigenschap *evenwijdig met een derde rechte* (in de ruimte is het bewijs te lang voor de 2de graad). Kijk of de school dezelfde keuze maakt.
- **Definities.** Een rechte die in een vlak ligt, heet ook evenwijdig met dat vlak, en samenvallende rechten en vlakken heten evenwijdig (zoals in de meeste Vlaamse handboeken). Kruisend is gedefinieerd als *niet in één vlak*.
- **Notatie.** $a \parallel b$, $a \cap b = \{S\}$, $\alpha \cap \beta = s$, $P \in a$, $a \subset \alpha$, vlakken met Griekse letters of met drie of vier punten ($ABFE$), lijnstuk $[AB]$, lengte $\lengte{AB}$. Kubus $ABCD.EFGH$ met grondvlak $ABCD$ en $E$ boven $A$, zoals in de 3de graad.
- **Cavalièreperspectief met $45^\circ$ en factor $\tfrac12$.** Daardoor liggen bij een kubus $A$, $D$, $F$ en $G$ in de tekening op één lijn. De voorbeelden en de figuren vermijden daarom de diagonalen $[AF]$, $[DG]$ en $[AG]$ als iets dat je moet zien. Een school die met $30^\circ$ tekent, kan dat in de werkwijze aanpassen.
- **Middenparallel.** Hoofdstuk 2 gebruikt dat de rechte door de middens van twee zijden van een driehoek evenwijdig is met de derde zijde (en omgekeerd) als gekend uit de 1ste graad.
- **Bewust opgenomen, misschien buiten het leerplan:** de snijlijn van twee diagonaalvlakken met hulprechten, het snijpunt van een rechte met een vlak via een diagonaalvlak, de vijfhoek en de regelmatige zeshoek als doorsnede, de telopdrachten (66 paren ribben, 20 vlakken door hoekpunten van een kubus), en in pakket 4-5 de methode met een verticaal hulpvlak (opdracht van niveau 3).
- **Prenten.** Er staan geen prenten bij de opdrachten.

## Controle

Alle liggingen van rechten in de kubus, de piramide en het prisma, de coplanaire punten, de snijpunten en de doorsneden in voorbeelden, korte oefeningen, opdrachten en test zijn nagerekend met coördinaten in Python. Bewijzen en uitlegvragen zijn niet nagerekend. Alle vijf pakketten bouwen zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
