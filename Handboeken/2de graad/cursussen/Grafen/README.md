# Grafen: bron

Bron van het keuzehandboek Discrete wiskunde/Grafen van de 2de graad, voor pakket 4 (B+S) en pakket 5 (B+S''), keuzedoelen K2-K3, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Een graaf als model | `hoofdstukken/01-graaf-als-model.tex` | 4-5 |
| 2. Problemen oplossen met grafen | `hoofdstukken/02-problemen-oplossen.tex` | 4-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: `\knopen`, `\bogen`, `\pijlen`, `\gbogen`, `\gpijlen` en `\knoopgraad` om grafen te tekenen in TikZ (met de stijlen `knoop`, `punt`, `boog`, `pijl`, `gewicht`, `accentboog`), `\gr{A}` voor de graad, en `\naast`, `\figuren`, `metgrafiek`, `stappenvrij` uit Integralen.

## Inhoud

1. **Een graaf als model.** Probleem: kan in een klas van 25 leerlingen iedereen met precies drie klasgenoten bevriend zijn? Knopen, bogen en buren; een situatie modelleren; dezelfde graaf in een andere tekening; meervoudige bogen en lussen; de graad; de handdrukstelling (met bewijs); het aantal knopen met een oneven graad is even (met bewijs); de volledige graaf en zijn aantal bogen; gerichte grafen met ingraad en uitgraad; schema's (een volgorde van taken); gewogen grafen en de lengte van een route.
2. **Problemen oplossen met grafen.** Probleem: de bruggen van Königsberg. Wandeling, spoor, circuit, pad en cykel; samenhangend; eulerspoor, eulercircuit en eulergraaf met de stellingen van Euler (bewijs van de nodige voorwaarde, en het eulerspoor via een extra boog); een eulercircuit vinden door circuits in te lassen; het kortste pad met het algoritme van Dijkstra.

## Leerplan

Getoetst aan de geldende KOV-leerplannen (november 2026): II-WisS-d (pakket 4, versie oktober 2024) en II-WisS''-d (pakket 5, versie oktober 2024), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde. Het onderwerp is in beide leerplannen het keuzedeel *Grafen* (rubriek 4.5.3) met de keuzedoelen K2 (een graaf interpreteren als model van een concrete situatie) en K3 (grafen gebruiken om problemen op te lossen). Doelen en wenken zijn in de twee leerplannen woordelijk gelijk; beide leerplannen zeggen ook zelf dat de keuzedelen over de cirkel (K1) en over grafen (K2-K3) in beide staan. Pakket 1-3 (II-Wis-d, II-Wis'-d, II-WisS'-d) hebben geen grafen. Het servicedocument 5u noemt het keuzedeel Grafen als een mogelijke keuze naast de leerlijn van het "Wiskundeplan", en voegt er niets aan toe.

Een keuzedoel is niet verplicht: de school kiest of ze het keuzedeel geeft (KOV: in pakket 4 en 5 naast De cirkel, zie `Handboeken/koepels.yaml`). Bij GO! zijn grafen een van de zeven doelen van het optiepakket Gevorderde wiskunde (zie `Ontwerp/koepels.md`); daarvoor dient de versie van pakket 5. De doeltekst van GO! is hier niet nagekeken.

| Pakket | Leerplan (versie) | H1 | H2 |
|---|---|---|---|
| 4 | II-WisS-d (oktober 2024) | LPD K2, K3 (graden); bewijzen: LPD 4 met het extra | LPD K2 (wandeling, pad, samenhangend), K3 (Euler, Dijkstra); bewijzen: LPD 4 met het extra |
| 5 | II-WisS''-d (oktober 2024) en het servicedocument 5u | idem; bewijzen: LPD B1 | idem; bewijzen: LPD B1 |

**Wat de wenken vragen, en waar het staat.** Bij K2: grafen als model van sociale netwerken, transportnetwerken, stambomen, boom- en wegendiagrammen (H1: het sociale netwerk in het probleem, het busnet in opdracht `h1-o2`, de stamboom in opdracht `h1-o24`; boom- en wegendiagrammen staan in Telproblemen); de betekenis van knopen, bogen, buren, graad en samenhangend laten uitleggen (H1 en H2 sectie 1); wandeling en pad duiden via transportnetwerken (H2, voorbeeld met een busnet); de graaf bij een situatie laten opstellen (H1 sectie 1 en veel opdrachten). Bij K3: de woorden spoor, circuit, pad en cykel (H2 sectie 1), en een beperkt aantal probleemtypes uit een lijst van zeven. Gekozen zijn er drie: problemen over (het aantal) buren en het even aantal oneven graden (H1), de wandelingen over elke boog met Königsberg (eulerspoor, eulercircuit, eulergraaf; H2 sectie 2) en het kortste pad met Dijkstra (H2 sectie 3). Kleuren staat alleen als opdracht van niveau 3 (`h2-o19`); opspannende bomen (Kruskal, Prim), hamiltonpaden en bomen of tweedelingsgrafen staan er niet in.

**Aansluiting met de 3de graad.** Matrices van de 3de graad (hoofdstuk 4, matrixmodellen; KOV III-WisS'-d noemt de matrixvoorstelling van een graaf) gebruikt grafen, gerichte grafen en *wegen van lengte $n$* zonder dit keuzedeel te veronderstellen. De gerichte grafen van H1 sluiten daarop aan.

## Verschillen per pakket

LPD K2-K3 zijn in pakket 4 en 5 dezelfde. De verschillen volgen uit de bewijzen: in pakket 5 vraagt LPD B1 bewijzen, en de wenk noemt eigenschappen van grafen als voorbeeld; in pakket 4 is het reconstrueren van zulke bewijzen een extra bij LPD 4. Ze staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 4 | 5 | Reden |
|---|---|---|---|
| Bewijs dat even graden volstaan voor een eulercircuit (circuits inlassen); in pakket 4 alleen gezegd, met de werkwijze als uitleg | | x | LPD B1 (pakket 5) |
| Opdracht `h1-o22`: in een enkelvoudige graaf hebben twee knopen dezelfde graad (bewijs) | | x | LPD B1 |
| Opdracht `h1-o23`: met lussen volstaat een even aantal oneven graden (bewijs) | | x | LPD B1 |
| Opdracht `h2-o22`: een graaf met $2k$ oneven knopen teken je in $k$ halen (bewijs) | | x | LPD B1 |
| Opdracht `h2-o23`: waarom het algoritme van Dijkstra werkt (bewijs) | | x | LPD B1 |

## Aantallen

| | Start | korte oefeningen | opdrachten (deelvragen) | testvragen |
|---|---|---|---|---|
| Hoofdstuk 1, pakket 4 | 2 | 9 | 22 (76) | 8 |
| Hoofdstuk 1, pakket 5 | 2 | 9 | 24 (78) | 8 |
| Hoofdstuk 2, pakket 4 | 2 | 8 | 22 (62) | 7 |
| Hoofdstuk 2, pakket 5 | 2 | 8 | 24 (64) | 7 |

## Wat het leerplan besliste

- **Afbakening.** K2-K3 in pakket 4 en 5, met dezelfde tekst; de afbakening uit "Inhoud per handboek" in de README van de 2de graad klopt. Het leerplan laat de keuze van de probleemtypes vrij ("je beperkt best het aantal types"); de drie gekozen types staan alle drie in de lijst van de wenk.
- **Keuze in hoofdstuk 2.** Dijkstra staat letterlijk in de lijst; Euler met Königsberg ook. Kleuren is een van de andere mogelijkheden en mag als uitdaging blijven; een derde sectie is niet nodig.
- **Woorden.** De wenk bij K3 geeft de woorden: bij *sporen* en *circuits* wordt elke boog hoogstens één keer doorlopen, bij *paden* en *cykels* elke knoop. Wat hier eerst een *pad* heette (geen boog twee keer), heet nu een *spoor*, een *kring* heet een *circuit*, en *eulerpad* en *eulerkring* werden *eulerspoor* en *eulercircuit*; *eulergraaf* is nieuw. *Pad* en *cykel* zijn toegevoegd (definitie, voorbeeld met zes gevallen, korte oefening, opdracht en testvraag met alle soorten). Het *kortste pad* blijft een pad in de zin van het leerplan: met positieve gewichten komt in een kortste route geen knoop twee keer voor (dat staat nu in de tekst). De opdracht met het park zegt nu *wandelpad*, om verwarring met het woord pad te vermijden. De labels en `id`'s bleven ongewijzigd (`h2-kring`, `h2-pad`, `vb:h2-kring`, `vb:h2-pad`).
- **Bewijzen.** In pakket 5 vraagt LPD B1 bewijzen, met eigenschappen van grafen als voorbeeld: de extra bewijzen en bewijsopdrachten horen daar. In pakket 4 noemt het extra bij LPD 4 het reconstrueren van bewijzen van eigenschappen van grafen: de korte bewijzen (handdrukstelling, oneven graden, volledige graaf, in- en uitgraden, nodige voorwaarde van Euler) mogen er blijven; ze zijn niet te veel.
- **Contexten.** De wenk bij K2 noemt stambomen: opdracht `h1-o24` (niveau 1, pakket 4 en 5) maakt van een stamboom een graaf en vraagt naar de betekenis van graad, ingraad en uitgraad.
- **LPD per hoofdstuk.** De `\lkr`-kaders zeiden "K2-K3, na te kijken"; ze noemen nu per hoofdstuk wat uit K2 en wat uit K3 komt, de rubriek (4.5.3) en het doel van de bewijzen (LPD 4 in pakket 4, LPD B1 in pakket 5).

## Wat open blijft (het leerplan beslist het niet)

- **Notatie.** $\mathrm{gr}(A)$ voor de graad (het leerplan noemt het woord graad, geen notatie). Een graaf mag meervoudige bogen en lussen hebben, tenzij er *enkelvoudig* staat; een lus telt voor 2 in de graad. *Eulerspoor* en *eulercircuit* met een kleine letter, zoals *eulerpad* eerder; het leerplan schrijft *Eulerspoor*.
- **Gerichte grafen en schema's.** Het leerplan noemt ze niet; ze staan er als model bij K2 (en de gerichte grafen sluiten aan bij Matrices van de 3de graad). De volgorde van taken (topologisch sorteren) en de opdracht met tijden (kritiek pad, niveau 3) zijn een eigen invulling.
- **Geschiedenis.** Euler loste het probleem op in 1736, Dijkstra publiceerde zijn algoritme in 1959 (bedacht in 1956; de tekst zegt 1956). De schets van Königsberg is schematisch en eigen werk, niet op schaal.
- **Contexten.** De buurlanden van België in testvraag 2 van hoofdstuk 1 zijn echt; de reistijden, afstanden, buslijnen, de stamboom en het museum zijn verzonnen. De alkanen ($C_nH_{2n+2}$) gebruiken alleen enkelvoudige bindingen.

## Controle

De antwoorden zijn nagerekend met een Python-script: graden, aantallen bogen, routes en volgordes in schema's, de soort van elke rij knopen (wandeling, spoor, circuit, pad, cykel), en met brute force alle eulersporen (bestaan, begin en einde, de gegeven sporen en circuits) en alle kortste paden (alle paden zonder herhaalde knoop vergeleken met het algoritme van Dijkstra). Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
