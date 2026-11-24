# Tweedegraadsfuncties: bron

Bron van het handboek Analyse/Tweedegraadsfuncties van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (24 november 2026), nog na te lezen. De verwerkte feedback van leerkrachten staat in `verwerkt.yaml` (op axiomath.be als kader *Verwerkt* in de lezer).

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. De parabool $y = a(x - p)^2 + q$ (in pakket 1: De functie $f(x) = ax^2$) | `hoofdstukken/01-parabool.tex` | 1-5 |
| 2. De vorm $ax^2 + bx + c$ | `hoofdstukken/02-algemene-vorm.tex` | 2-5 |
| 3. Tweedegraadsvergelijkingen | `hoofdstukken/03-vergelijkingen.tex` | 2-5 |
| 4. Tweedegraadsongelijkheden | `hoofdstukken/04-ongelijkheden.tex` | 2 (keuzehoofdstuk, K2), 3-5 |

**Pakket 1.** Er is geen apart bronhoofdstuk: hoofdstuk 1 is met `\alleenvoor` aangepast. Secties 1 ($y = x^2$) en 2 ($y = ax^2$: teken en grootte van $a$, voorschrift uit één punt, toenemende en afnemende stijging of daling, kenmerken) zijn voor alle pakketten dezelfde. Pakket 1 krijgt daarna de sectie Toepassingen ($ax^2 = k$, problemen met een kwadratisch verband, de brug met de oorsprong in de top). Pakket 2-5 krijgen het verschuiven en het voorschrift aflezen (met de oorsprong op het water). Het probleem van de brug is voor iedereen hetzelfde. Zo staat de theorie over $y = ax^2$ maar één keer in de bron.

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`. Dat bestand is overgenomen uit Functies (2de graad), zodat beide handboeken dezelfde figuren hebben (`\rooster`, `\kromme`, `\rechte`, `\punt`, `\openpunt`, `\aflezen`, `\trapje`, `\asdeel`, `\waardetabel`, `\tekenschema`, de intervallen `\ivgg` enz., de getallenas, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`), met daarbij `\parabool{a}{p}{q}{xmin}{xmax}` voor $y = a(x - p)^2 + q$, `\symas` voor de symmetrieas, `\toppunt` voor de top met een label en `\stelsel` (zoals in Stelsels).

## Inhoud

1. **De parabool.** Probleem: de boog van een voetgangersbrug, $40$ m breed en $10$ m hoog (hoe hoog op $5$ m van een voet, hoe breed is de strook voor een boot van $8$ m hoog). De parabool $y = x^2$ (tabel, waarom geen gebroken lijn, top, symmetrieas, kenmerken, punten op een hoogte); $y = ax^2$ (een kader per eigenschap: teken van $a$, grootte van $\abs{a}$), tekenen, "twee keer zo ver, vier keer zo hoog" (de pizza), het voorschrift uit één punt, kenmerken. Pakket 1: de vergelijking $ax^2 = k$, problemen (vallende steen), Terug naar het probleem met de oorsprong in de top. Pakket 2-5: verticaal en horizontaal verschuiven (een kader per verschuiving), de topvorm met top $(p, q)$ en as $x = p$, tekenen vanuit de top ($1$ opzij $a$ omhoog, $2$ opzij $4a$), het voorschrift aflezen met de top en één punt, Terug naar het probleem met de oorsprong op het water, twee punten op dezelfde hoogte (een stelling: de as ligt in het midden), het voorschrift zonder top (drie punten, of de nulwaarden en het snijpunt met de $y$-as).
2. **De vorm $ax^2 + bx + c$.** Probleem: een fontein, $h(x) = -0,8x^2 + 3,2x + 0,4$ (hoe hoog, waar, en waar weer op de hoogte van de spuitmond). Van topvorm naar algemene vorm, de definitie van tweedegraadsfunctie; de top: in pakket 2-3 via twee punten op hoogte $c$ ($x = 0$ en $x = -\tfrac ba$), in pakket 4-5 eerst kwadraatafsplitsen en daarmee de formule $x = -\tfrac{b}{2a}$; van algemene vorm naar topvorm; de grafiek tekenen met de top, $(0, c)$ en zijn spiegelbeeld; kenmerken (een kader voor extremum en bereik, een voor stijgen en dalen), het aantal nulwaarden afleiden uit de top; problemen met een maximum (de speelzone tegen een gevel), Terug naar het probleem.
3. **Tweedegraadsvergelijkingen.** Probleem: een grindpad rond een grasveld van $20$ m op $15$ m met $200$ m$^2$ grind. Definitie en verband met de nulwaarden; $ax^2 + c = 0$; de product-nulregel; $ax^2 + bx = 0$ (en waarom je niet door $x$ deelt); merkwaardige producten, de som-productmethode, eerst herleiden op nul; de discriminant, ingeleid met de topvorm van $x^2 - 4x + 1$, de formule met de drie gevallen en de betekenis op de grafiek; de keuze van de methode; grafisch oplossen (parabool en rechte); vraagstukken (waar de fontein in de vijver komt), de top uit de nulwaarden (de voetbal), Terug naar het probleem.
4. **Tweedegraadsongelijkheden.** Probleem: een vuurpijl, $h(t) = -5t^2 + 40t$ (wanneer hoger dan $60$ m, wanneer minstens $75$ m). Het tekenschema bij twee, één en geen nulwaarden (een kader per geval), afgelezen op een korte schets; ongelijkheden oplossen met het tekenschema, grenzen erbij of niet, de unie, de fout $x < 3$ uit $x^2 < 9$; de bijzondere gevallen ($\R$, één getal, $\emptyset$) en de fout "$D < 0$, dus geen oplossingen"; grafisch oplossen; wanneer de grafiek van $f$ boven die van $g$ ligt; problemen, Terug naar het probleem.

## Leerplan

KOV, 2de graad D-finaliteit: II-Wis-d (pakket 1, versie oktober 2024), II-Wis'-d (pakket 2, oktober 2024), II-WisS'-d (pakket 3, juni 2024), II-WisS-d (pakket 4, oktober 2024) en II-WisS''-d (pakket 5, oktober 2024), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde (leerlijn "Wiskundeplan", aangepast aan B+S''). Pakket 1 heeft één doel, over $f(x) = ax^2$. In pakket 2-5 zijn de doelen en wenken over tweedegraadsfuncties en -vergelijkingen gelijk, op de nummers na; pakket 2 heeft de ongelijkheden als keuzedoel, pakket 4 één extra (som en product), pakket 5 meer extra's en B1.

| Hoofdstuk | 1 Basis | 2 B+ | 3 B+S' | 4 B+S | 5 B+S'' |
|---|---|---|---|---|---|
| 1. De parabool | LPD 24 | LPD 24, 25, 26 | LPD 25, 26, 27 | LPD 29, 30, 31 | LPD 29, 30, 31 (bewijs: B1) |
| 2. De vorm $ax^2 + bx + c$ | – | LPD 24, 25, 26 | LPD 25, 26, 27 | LPD 29, 30, 31 | LPD 29, 30, 31 (bewijs: B1) |
| 3. Tweedegraadsvergelijkingen | – | LPD 27, 28 | LPD 28, 29 | LPD 32, 33 | LPD 32, 33 (bewijzen: B1) |
| 4. Tweedegraadsongelijkheden | – | K2 (keuze) | LPD 28, 30 | LPD 32, 34 | LPD 32, 34 (extra's bij LPD 31 en 33; bewijzen: B1) |

Overal ook LPD 1-4 (fenomenen beschrijven, vraagstukken, ICT, redeneren). In pakket 2-5 gaat het eerste nummer per hoofdstuk 1-2 over het tekenen vanuit het voorschrift, het tweede over het voorschrift bij een grafiek en het derde over de kenmerken; in hoofdstuk 3-4 gaat het eerste nummer over grafisch oplossen en het tweede over algebraïsch oplossen.

## Aantallen

Opdrachten (deelvragen) / korte oefeningen / testvragen, per hoofdstuk. Stand vóór de verwerking van de feedback op 20 november 2026: sindsdien zijn er opdrachten en korte oefeningen bij (zie `verwerkt.yaml`).

| Hoofdstuk | Pakket 1 | Pakket 2-3 | Pakket 4 | Pakket 5 |
|---|---|---|---|---|
| 1 | 24 (96) / 8 / 7 | 23 (94) / 9 / 7 | 23 (94) / 9 / 7 | 24 (97) / 9 / 7 |
| 2 | | 24 (98) / 9 / 8 | 24 (98) / 9 / 8 | 25 (101) / 9 / 8 |
| 3 | | 22 (94) / 8 / 8 | 23 (97) / 9 / 8 | 26 (103) / 10 / 9 |
| 4 | | 21 (71) / 7 / 7 | 21 (71) / 7 / 7 | 24 (77) / 8 / 8 |

Pagina's (handboek): pakket 1: 20, pakket 2 en 3: 68, pakket 4: 72, pakket 5: 75 (voor de toetsing aan het leerplan: 19, 62, 65 en 68).

## Verschillen per pakket

Pakket 1 heeft één hoofdstuk (LPD 24). De doelen en wenken zijn in pakket 2-5 gelijk, dus alle vier hebben hoofdstuk 1-4 (in pakket 2 is hoofdstuk 4 een keuzehoofdstuk, K2, vermeld in de leerkrachtenversie). Na de feedback van 20 november 2026 krijgt pakket 4-5 kwadraatafsplitsen vóór de formule voor de top, ontbinden met de oplossingen en de opdrachten met parameters. Pakket 5 werkt met meer diepgang (B+S'' en het servicedocument) en heeft B1 (bewijzen). De verschillen staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| H1 sectie 1 en 2 ($y = x^2$, $y = ax^2$, ook toenemende en afnemende stijging of daling en het tekenschema), met de korte oefeningen en opdrachten `h1-o1` tot `h1-o13` | x | x | x | x | x |
| H1 sectie Toepassingen ($ax^2 = k$, contexten), `h1-vglax`, `h1-context`, opdrachten `h1-o20` tot `h1-o30`, testvragen 5-7 in een eigen variant | x | | | | |
| H1 verschuiven, topvorm, voorschrift aflezen, `h1-verschuif`, `h1-tekentop`, `h1-aflezen`, opdrachten `h1-o40` tot `h1-o48` | | x | x | x | x |
| H1 opdracht spiegelen en verschuiven (`h1-o49`) | | | | x | x |
| H1 twee punten op dezelfde hoogte (stelling), het voorschrift zonder top, `h1-zondertop`, opdrachten `h1-o51`, `h1-o52` | | x | x | x | x |
| H1 bewijs van de symmetrie van de topvorm en van $p = \tfrac{x_1 + x_2}{2}$ (in 2-4 als uitleg in de tekst) | | | | | x |
| Hoofdstuk 2 en 3 | | x | x | x | x |
| Hoofdstuk 4 (in pakket 2 als keuzehoofdstuk, vermeld in de leerkrachtenversie) | | x | x | x | x |
| H2 de top met twee punten op hoogte $c$ | | x | x | | |
| H2 kwadraatafsplitsen vóór de formule voor de top: subsectie, twee voorbeelden, `h2-afsplitsen`, `h2-o21`, `h2-o22`, testvraag `h2-t7` (2-3: een variant met de symmetrieas) | | | | x | x |
| H2 bewijs van de formule voor de top met kwadraatafsplitsen (in 4 als uitleg), opdracht `h2-o25` (de toppen van een familie parabolen) | | | | | x |
| H3 ontbinden met de oplossingen $a(x - x_1)(x - x_2)$ (bewijs in 5, uitleg in 4), `h3-ontbindwortels`, `h3-o21`, testvraag `h3-t8` | | | | x | x |
| H3 de top uit de nulwaarden, `h3-symnul`; opdrachten `h3-o29`, `h3-o30`, `h3-o31` | | x | x | x | x |
| H3 opdrachten met parameters `h3-o26`, `h3-o27` | | | | x | x |
| H3 de gulden snede (`h3-o20`) | | | | x | x |
| H3 bewijs van de formule met de discriminant (kwadraatafsplitsen; in 2-4 alleen gezegd dat het dezelfde stappen met letters zijn) | | | | | x |
| H3 som en product van de oplossingen met bewijs (de som ook met de symmetrie), `h3-somproduct`, `h3-o22`, `h3-o28`, bewijsopdracht `h3-o23` | | | | | x |
| H3 bikwadratische vergelijkingen, `h3-bikwadratisch`, `h3-o32`, testvraag `h3-t9` | | | | | x |
| H3 de kosten van een chalet delen, met de onbekende in de noemer (`h3-o19`) | | | | | x |
| H4 $f$ boven $g$, `h4-boven`, `h4-o27` | | x | x | x | x |
| H4 ongelijkheden met een parameter, `h4-parameter`, `h4-o20`, `h4-o21`, `h4-o25`, `h4-o26`, testvraag `h4-t8` | | | | x | x |
| H4 bewijsopdracht ($x^2 - x + 1 > 0$, $a^2 + b^2 \geqslant 2ab$, $x + \tfrac1x \geqslant 2$) (`h4-o22`) | | | | | x |

## Toetsing aan het leerplan (24 november 2026)

Wat het leerplan besliste en wat er veranderde:

- **Toenemende en afnemende stijging of daling en het tekenverloop** staan in de kenmerken van alle vijf leerplannen (LPD 24 in pakket 1, LPD 26/27/31 in 2-5). Ze ontbraken. Nieuw in hoofdstuk 1, voor alle pakketten: de subsectie "Hoe snel stijgt of daalt de parabool?" (kader met de definities, de trapjes $1, 3, 5$ bij $y = x^2$, korte oefening `h1-verloop`), en in de kenmerken een rij voor het verloop en een voor het tekenschema, met de nulwaarde ook algebraïsch ($ax^2 = 0$) en het snijpunt met de $y$-as (wenken bij LPD 24). `h1-kenmerkenax` en testvraag `h1-t4` vragen het nu ook. In hoofdstuk 2 (pakket 2-5): het kader "Stijgen en dalen" met toenemend en afnemend, een subsectie "Het tekenschema" (in pakket 2 is hoofdstuk 4 een keuze, dus moet het tekenverloop hier staan), het voorbeeld met tekenschema, en een deelvraag in `h2-o16`.
- **Het voorschrift bij een grafiek** (LPD 25/26/30, pakket 2-5). De wenken noemen de top en één punt, $a$ als verandering bij één stap vanaf de top, drie punten met het snijpunt met de $y$-as, en de nulwaarden met één punt, via de symmetrie of de vorm $a(x - x_1)(x - x_2)$. Dat staat er sinds de feedback van 20 november 2026 (#48): "Het voorschrift zonder top" in hoofdstuk 1 (twee punten op dezelfde hoogte, of de nulwaarden en het snijpunt met de $y$-as), en de vorm $a(x - x_1)(x - x_2)$ in hoofdstuk 3 (pakket 4-5). Een eigen sectie in hoofdstuk 2 die bij de toetsing geschreven was, is daarom niet overgenomen.
- **Kwadraatafsplitsen** is een van de twee manieren die de wenk bij LPD 24/25/29 noemt om de algemene vorm in de topvorm te zetten, in pakket 2-5 met dezelfde woorden. Na feedback #50 staat het in pakket 4-5 vóór de formule voor de top; pakket 2-3 vindt de top met twee punten op hoogte $c$. Zo blijft het. Na te kijken: de wenk noemt kwadraatafsplitsen ook voor pakket 2-3 (de topvorm uitwerken en vergelijken met de algemene vorm).
- **Ontbinden met de oplossingen** $a(x - x_1)(x - x_2)$ staat in 4-5 (met bewijs in 5, feedback #53). De vorm hoort bij de wenk bij LPD 25/26/30 in 2-5; in pakket 2-3 komt ze voor in het voorschrift zonder top (hoofdstuk 1) en de top uit de nulwaarden (`h3-symnul`), zonder het kader. Na te kijken of 2-3 het kader ook moet krijgen.
- **Som en product van de oplossingen.** Een extra bij LPD 33 in pakket 4, een wenk bij LPD 33 in pakket 5 en verplicht in het servicedocument. Blijft in pakket 5 (`h3-somproduct`, `h3-o22`, `h3-o28`), nu met wat de wenk als nut noemt: $1$ of $-1$ als oplossing (nieuw voorbeeld, twee deelvragen in `h3-somproduct`). Als extra zou het ook in pakket 4 mogen.
- **Bikwadratische vergelijkingen.** Een extra bij LPD 33 in pakket 5, verplicht in het servicedocument. Ontbraken; nieuwe subsectie in hoofdstuk 3, alleen pakket 5, met korte oefening `h3-bikwadratisch`, opdracht `h3-o32` (ook andere substituties) en testvraag `h3-t9`.
- **Parameters.** Geen enkel doel van pakket 4 vraagt een parameter; pakket 5 heeft de extra's "kenmerken met één parameter" (LPD 31) en "het aantal oplossingen met één parameter bespreken" (LPD 33). Na feedback #34 en #40 staan de opdrachten met parameters in pakket 4-5 (`h3-o26`, `h3-o27`, `h4-parameter`, `h4-o20`, `h4-o21`, `h4-o25`, `h4-o26`, `h4-t8`). Zo blijft het: in pakket 4 zijn ze verrijking.
- **Spiegelen en verschuiven** (`h1-o49`) staat in 4-5. Het past ook bij de wenk om de grafiek op te bouwen vanuit $y = x^2$ in 2-3; niet veranderd.
- **Rationale vergelijkingen** komen in geen enkel leerplan van de 2de graad voor (het servicedocument voor 5 uur noemt rationale vormen). `h3-o19` (de kosten van een chalet delen) staat nu alleen in pakket 5.
- **Pakket 1** (LPD 24, alleen $f(x) = ax^2$): geen verschuivingen, geen algemene vorm, geen vergelijkingen of ongelijkheden; dat klopt met wat er stond. De vergelijking $ax^2 = k$ in de sectie Toepassingen blijft: het is $x^2 = k$ uit Reële getallen (vierkantswortels), en de wenk bij LPD 24 vraagt vragen te beantwoorden in een context, zoals de breedte van de brug op $8$ m hoogte. De leerkrachtenversie zegt dat.
- **LPD per hoofdstuk.** In de leerkrachtenversie staat nu per hoofdstuk het juiste nummer per pakket (zie de tabel Leerplan), met wat het hoofdstuk uit de wenken volgt; de zin "is na te kijken" is weg.
- **Bewijzen.** De extra bij LPD 4 in pakket 2-4 noemt het reconstrueren van de discriminantformule als mogelijkheid; B1 in pakket 5 noemt ze als voorbeeld, en het servicedocument maakt ze verplicht. De bewijzen blijven in pakket 5 (symmetrie, formule voor de top, discriminant, som en product); in 2-4 blijft de uitleg in de tekst.

Wat open blijft (het leerplan beslist het niet):

- **De som-productmethode** voor $x^2 + bx + c$ staat in 2-5. Het leerplan noemt ontbinden in factoren als leerinhoud, met als wenk een gemeenschappelijke factor en de merkwaardige producten; de som-productmethode is een didactische keuze. De leerkrachtenversie zegt dat ze mag wegvallen.
- **Pakket 5: ontbinden.** De wenk bij LPD 33 vraagt "verschillende technieken" voor veeltermen, het servicedocument ook termen samennemen. Hier staan de gemeenschappelijke factor, de merkwaardige producten, de som-productmethode en ontbinden met de oplossingen. Termen samennemen en de raaklijn aan een parabool (een extra bij LPD 33) staan er niet; ze passen beter bij de deelbaarheid van veeltermen (B6) en de analytische meetkunde.
- **Keuze voor pakket 1.** Geen apart bronhoofdstuk `00-ax2`, maar `\alleenvoor` in hoofdstuk 1 (zie boven). Een apart hoofdstuk zou de theorie over $y = x^2$ en $y = ax^2$ verdubbelen.
- **Notatie en woorden.** Topvorm $y = a(x - p)^2 + q$ met top $(p, q)$; algemene vorm $ax^2 + bx + c$; "naar boven geopend" en "naar onder geopend" (met dal en berg als beeld; sommige scholen zeggen dalparabool en bergparabool); discriminant $D = b^2 - 4ac$, oplossingen $x_1$ en $x_2$; oplossingsverzameling $V = \{-2, 4\}$; "product-nulregel" en "som-productmethode". Een punt met een kommagetal krijgt een puntkomma: $(2;\ 3,6)$.
- **Bewijzen.** In pakket 5 staan de symmetrie van de topvorm, de formule voor de top, de discriminantformule en de som en het product. De formule voor de top wordt in pakket 2-3 verklaard met twee punten op hoogte $c$ (uitleg in de tekst) en in pakket 4-5 met kwadraatafsplitsen (feedback #50), met de product-nulregel die pas in hoofdstuk 3 een kader krijgt; daar staat dat "een product is nul als een factor nul is", wat leerlingen uit de 1ste graad kennen.
- **Contexten met eigen gekozen getallen**, geen echte gegevens: de brug, de pizza's, de remweg $0,008v^2$ en de stopafstand $0,3v + 0,008v^2$ (als "stel dat"), de valweg $5t^2$ (afgerond), de hangbrug (een kabel onder een gelijkmatig verdeelde last heeft ongeveer de vorm van een parabool), de schotelantenne, de fontein, de vuurpijl (zonder luchtweerstand), de fietsverhuur, de brouwerij, de smoothies.
- **Galilei.** Opdracht `h1-o30` (pakket 1) zegt dat Galilei rond 1604 de regel van de oneven getallen ontdekte. Galilei vond de valwet rond 1604; de regel staat in zijn *Discorsi* van 1638. Na te kijken of die formulering goed genoeg is.
- **Moeilijke opdrachten.** `h4-o18` (dubbele ongelijkheid) gebruikt de doorsnede van intervallen zonder dat woord.
- **Voorkennis.** De merkwaardige producten en het buiten haakjes brengen (1ste graad), de vergelijking $x^2 = a$ (Reële getallen), de intervallen, het tekenschema en de unie (Functies), stelsels (Stelsels, voor drie punten) en het omkeren van het ongelijkheidsteken bij delen door een negatief getal (Eerstegraadsvergelijkingen) worden kort herhaald waar ze nodig zijn, zonder kader. De definitie van toenemende en afnemende stijging staat ook in Functies (hoofdstuk 4, dat niet in pakket 1 staat en in pakket 2 een keuze is); daarom staat ze hier opnieuw.
- **Opmaak.** Door de regel "elke sectie op een nieuwe pagina" blijven er soms halflege pagina's over. De kaders "Top en symmetrieas" (H1, pakket 5) en "Oplossingen van een tweedegraadsvergelijking" (H3, pakket 5) breken tussen de stelling en het bewijs, zoals de opmaak toelaat.

## Controle

De uitkomsten zijn nagerekend met Python en SymPy (ook de nieuwe voorbeelden en oefeningen van de toetsing aan het leerplan): functiewaarden, toppen, topvormen, de oplossingen van alle vergelijkingen (ook numeriek) en ongelijkheden, en de afgeronde getallen. Afgelezen waarden liggen op knooppunten van de grafieken. Alle vijf pakketten bouwen zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
