# Logica: bron

Bron van het handboek Discrete wiskunde/Logica van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Uitspraken en waarheidstabellen | `hoofdstukken/01-uitspraken.tex` | 1-5 |
| 2. Implicatie en equivalentie | `hoofdstukken/02-implicatie-en-equivalentie.tex` | 1-5 |
| 3. Bewijzen | `hoofdstukken/03-bewijzen.tex` | 5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: de logische symbolen `\niet`, `\en`, `\of`, `\dan`, `\asa` (zoals in Logica en bewijzen van de 3de graad), de omgevingen `waarheidstabel` en `waarheidstabelbreed` (raster in de kleur van het hoofdstuk, getinte kop) met `\res{W}` voor de kolom die je zoekt, `\deelt`, `\N` tot `\R`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen. De grafiekmacro's van Integralen zijn geschrapt.

## Leerplan

Getoetst aan de geldende KOV-leerplannen van de 2de graad D (november 2026). Het onderwerp is in elk leerplan de deelrubriek *Waarheidstabellen*, met één doel. Doel, afbakening (tautologie, contradictie; voorkennis implicatie en equivalentie uit de 1ste graad) en de drie wenken zijn in de vijf leerplannen woordelijk dezelfde; alleen het nummer verschilt.

| Pakket | Leerplan (versie) | H1 | H2 | H3 |
|---|---|---|---|---|
| 1 | II-Wis-d (oktober 2024) | LPD 26 | LPD 26; LPD 4 (tegenvoorbeeld) | – |
| 2 | II-Wis'-d (oktober 2024) | LPD 30 | LPD 30; LPD 4 | – |
| 3 | II-WisS'-d (juni 2024) | LPD 32 | LPD 32; LPD 4 | – |
| 4 | II-WisS-d (oktober 2024) | LPD 36 | LPD 36; LPD 4 | – |
| 5 | II-WisS''-d (oktober 2024) en het servicedocument 5u | LPD 36 | LPD 36; LPD 4 | LPD B1; LPD 4 (tegenvoorbeeld) |

**B1-B6 (alleen pakket 5).** B1 is *wiskundige uitspraken bewijzen*, met als bewijstechnieken het rechtstreeks bewijs en het bewijs uit het ongerijmde, en met wenken: tussenstappen laten verantwoorden, een bewijs laten reconstrueren in een gewijzigde situatie, voorbeelden uit de hele leerstof (rekenregels, gelijkvormigheid, Thales, Pythagoras, afstandsformules, goniometrische formules, sinus- en cosinusregel, discriminant, reststelling, cirkel, grafen), en het bewijs uit het ongerijmde bij $\sqrt2$ of bij de uniciteit van quotiënt en rest bij de Euclidische deling van veeltermen. B2-B5 zijn analytische meetkunde in het vlak (handboek Analytische meetkunde), B6 is deelbaarheid bij veeltermen (handboek Veeltermen). B1 is een doel dat in pakket 5 overal terugkomt: hoofdstuk 3 van dit handboek leert de methodes, de andere handboeken van pakket 5 verwijzen naar B1 waar ze bewijzen (Reële getallen: $\sqrt2$; Driehoeksmeting, Gelijkvormigheid, Goniometrie, De cirkel, Veeltermen, Stelsels, Functies, Ruimtemeetkunde).

## Verschillen per pakket

Alle pakketten hebben hoofdstuk 1 en 2; pakket 5 heeft daarnaast hoofdstuk 3 (B1). De verschillen in de eerste twee hoofdstukken zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 | Reden |
|---|---|---|---|---|---|---|
| Waarheidstabellen met drie uitspraken (onderdeel, korte oefening, opdrachten, testvraag) | | x | x | x | x | didactische keuze (het leerplan is in alle pakketten hetzelfde) |
| Voldoende en nodige voorwaarde (onderdeel, korte oefening, opdracht, testvraag) | | x | x | x | x | didactische keuze |
| Opdracht: alle waarheidstabellen met twee uitspraken (16 kolommen) | | | | | x | meer diepgang in pakket 5 |
| Opdracht: de contrapositie afleiden zonder waarheidstabel | | | | | x | meer diepgang in pakket 5 |
| Hoofdstuk 3: Bewijzen (tegenvoorbeeld, rechtstreeks, met de contrapositie, uit het ongerijmde) | | | | | x | LPD B1 |

Waar de pakketten 2-5 drie uitspraken gebruiken, heeft pakket 1 een eigen variant met hetzelfde id en twee uitspraken: `h1-o15` (webwinkel), `h1-o20` (raadsel op het eiland) en `h1-t8` (testvraag; het schema Fout? Herhaal kiest het juiste voorbeeld met `\alleenvoor`).

## Wat het leerplan besliste

- **LPD per hoofdstuk**: zie de tabel hierboven. De nummers 26, 30, 32, 36, 36 en B1 klopten al; de `\lkr`-kaders noemen nu ook LPD 4 bij het tegenvoorbeeld, en de wenken die in het hoofdstuk zitten.
- **Equivalentie, tautologie en contradictie in alle pakketten**: ja. Tautologie en contradictie zijn de afbakening van het doel in alle vijf leerplannen; implicatie en equivalentie zijn voorkennis uit de 1ste graad.
- **De contrapositie in alle pakketten**: ja. De wenk vraagt in alle pakketten met waarheidstabellen te tonen dat $A \dan B$ gelijkwaardig is met $\niet B \dan \niet A$ en met $\niet A \of B$, en niet met $\niet A \dan \niet B$. Dat staat er al in (secties 2.1 en 2.3).
- **Schakelingen** bij *en* en *of*: een wenk in alle pakketten (logische poorten of schakelingen). Ze blijven.
- **De exclusieve of** in gewone taal: een wenk in alle pakketten; staat er al in (sectie 1.2, Verken-oefening).
- **Als \ldots{} dan in gewone taal** wordt vaak begrepen als *als en slechts als*: een wenk in alle pakketten, die ontbrak. Toegevoegd in sectie 2.2 (een alinea met de vader en het ijsje uit de Verken-oefening) en opdracht `h2-o24` (niveau 2, alle pakketten).
- **Beoordelen of een zin een uitspraak is**: een wenk in het servicedocument 5u; staat in alle pakketten (sectie 1.1).
- **Hoofdstuk 3 en B1.** B1 noemt alleen het rechtstreeks bewijs en het bewijs uit het ongerijmde. Twee wenken ontbraken als oefening en zijn toegevoegd: tussenstappen van een bewijs verantwoorden (opdracht `h3-o21`, niveau 1) en een bewijs reconstrueren in een gewijzigde situatie (korte oefening `h3-ongerijmd2` b, opdracht `h3-o13`: $\sqrt[3]{2}$). Het weerleggen met een tegenvoorbeeld (sectie 3.1) hoort bij LPD 4.
- **Overlap met Reële getallen.** Het bewijs dat $\sqrt2$ irrationaal is, staat in Reële getallen hoofdstuk 1, in alle pakketten (LPD 4, in pakket 5 LPD B1, dat het uitdrukkelijk als voorbeeld noemt). Hoofdstuk 3 bewijst het niet opnieuw. In de plaats: een nieuw voorbeeld van een bewijs uit het ongerijmde (geen gehele $a$, $b$ met $4a + 6b = 15$, met korte oefening `h3-ongerijmd2`), en een korte subsectie *Het bewijs voor $\sqrt2$* die verwijst naar Reële getallen en toont welke methodes erin samenwerken (uit het ongerijmde, met de contrapositie, rechtstreeks), zonder het bewijs te herhalen. De vroegere opdracht `h3-o13` ($\sqrt3$ irrationaal) deed hetzelfde als `h1-o21` van Reële getallen; ze is vervangen door $\sqrt[3]{2}$, met een eigen stappenplan, zodat ze ook werkt als Reële getallen nog niet gezien is.

## Wat open blijft

- **Didactische keuzes die het leerplan niet beslist**: drie uitspraken en voldoende en nodige voorwaarde pas vanaf pakket 2 (het leerplan is in alle pakketten hetzelfde, dus dit kan ook naar pakket 1); open zinnen; de ontkenning van *alle* en *er is* (in woorden, zonder $\forall$ en $\exists$; het bereidt het tegenvoorbeeld van LPD 4 voor); geldige redeneringen als tautologie; in hoofdstuk 3 het bewijs met de contrapositie (niet in B1, wel gesteund door de wenk over $\niet B \dan \niet A$ en nodig voor de stap *$p^2$ even, dus $p$ even*), een bewijs door gevallen en het bewijs van Euclides (alleen als opdracht van niveau 3).
- **W en O.** Het boek schrijft W (waar) en O (onwaar), zoals op de voorkant en in de wens van Klaas ("waar en onwaar"). Logica en bewijzen van de 3de graad schrijft W en V (vals). Het leerplan van de 2de graad legt geen notatie op; het gebruikt *vals* één keer in een wenk bij LPD 4. Kies één afspraak voor beide graden.
- **Volgorde van de rijen.** Altijd WW, WO, OW, OO (en bij drie uitspraken WWW tot OOO). Sommige handboeken beginnen met OO of schrijven 1 en 0. Het leerplan zegt er niets over.
- **Notatie gelijkwaardig.** In hoofdstuk 1 staat *is gelijkwaardig met* in woorden; pas in hoofdstuk 2 komt het teken $\Leftrightarrow$ voor een gelijkwaardigheid (als tautologie). Het leerplan schrijft *equivalent*, zonder teken. Sommige handboeken gebruiken $\equiv$.
- **Bewijzen in de voorbeelden.** In hoofdstuk 3 staan de bewijzen in een `\voorbeeld` (het is een soort opgave die leerlingen moeten leren), met daarin de omgeving `bewijs` van de opmaak. Die zet het vierkantje op een eigen regel helemaal rechts, wat in een voorbeeld wat los oogt.
- **Volgorde met Reële getallen.** Beide handboeken vallen in het 3de jaar, in een volgorde die de school kiest. De subsectie over $\sqrt2$ werkt in beide volgordes (ze zegt dat, en beschrijft alleen de structuur); opdracht `h3-o13` heeft een eigen stappenplan.
- **Contexten.** De kaartproef in het probleem van hoofdstuk 2 is een eigen formulering van een bekend experiment (Wason, 1966); het raadsel met eerlijken en leugenaars is een bekend soort puzzel, met eigen namen en uitspraken. De jeugdhuisregel (bier vanaf 16 jaar) volgt de Belgische wet.
- **Pagina's die half leeg blijven.** Elke sectie begint op een nieuwe pagina (ontwerpregel). Daardoor blijven sommige pagina's half leeg, bijvoorbeeld na sectie 1.1 en 2.1.

## Controle

De waarheidstabellen in de oefeningen zijn met een script berekend, niet met de hand ingevuld; de tabellen in de hoofdstukken zijn met datzelfde script nagekeken. Het feit dat $n^2 + n + 41$ een priemgetal is voor $n = 0, \ldots, 39$, en dat $n^2 - n + 11$ voor het eerst faalt bij $n = 11$, is nagerekend met SymPy, net als de uitwerkingen van $(2k + 1)^3$ en $(2k + 1)^2 + 3$ in `h3-o13` en `h3-o21`. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
