# Tweedegraadsfuncties: bron

Bron van het handboek Analyse/Tweedegraadsfuncties van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. De parabool $y = a(x - p)^2 + q$ (in pakket 1: De functie $f(x) = ax^2$) | `hoofdstukken/01-parabool.tex` | 1-5 |
| 2. De vorm $ax^2 + bx + c$ | `hoofdstukken/02-algemene-vorm.tex` | 2-5 |
| 3. Tweedegraadsvergelijkingen | `hoofdstukken/03-vergelijkingen.tex` | 2-5 |
| 4. Tweedegraadsongelijkheden | `hoofdstukken/04-ongelijkheden.tex` | 2 (keuzehoofdstuk, K2), 3-5 |

**Pakket 1.** Er is geen apart bronhoofdstuk: hoofdstuk 1 is met `\alleenvoor` aangepast. Secties 1 ($y = x^2$) en 2 ($y = ax^2$: teken en grootte van $a$, voorschrift uit één punt, kenmerken) zijn voor alle pakketten dezelfde. Pakket 1 krijgt daarna de sectie Toepassingen ($ax^2 = k$, problemen met een kwadratisch verband, de brug met de oorsprong in de top). Pakket 2-5 krijgen het verschuiven en het voorschrift aflezen (met de oorsprong op het water). Het probleem van de brug is voor iedereen hetzelfde. Zo staat de theorie over $y = ax^2$ maar één keer in de bron.

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`. Dat bestand is overgenomen uit Functies (2de graad), zodat beide handboeken dezelfde figuren hebben (`\rooster`, `\kromme`, `\rechte`, `\punt`, `\openpunt`, `\aflezen`, `\trapje`, `\asdeel`, `\waardetabel`, `\tekenschema`, de intervallen `\ivgg` enz., de getallenas, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`), met daarbij `\parabool{a}{p}{q}{xmin}{xmax}` voor $y = a(x - p)^2 + q$, `\symas` voor de symmetrieas en `\toppunt` voor de top met een label.

## Inhoud

1. **De parabool.** Probleem: de boog van een voetgangersbrug, $40$ m breed en $10$ m hoog (hoe hoog op $5$ m van een voet, hoe breed is de strook voor een boot van $8$ m hoog). De parabool $y = x^2$ (tabel, waarom geen gebroken lijn, top, symmetrieas, kenmerken, punten op een hoogte); $y = ax^2$ (een kader per eigenschap: teken van $a$, grootte van $\abs{a}$), tekenen, "twee keer zo ver, vier keer zo hoog" (de pizza), het voorschrift uit één punt, kenmerken. Pakket 1: de vergelijking $ax^2 = k$, problemen (vallende steen), Terug naar het probleem met de oorsprong in de top. Pakket 2-5: verticaal en horizontaal verschuiven (een kader per verschuiving), de topvorm met top $(p, q)$ en as $x = p$, tekenen vanuit de top ($1$ opzij $a$ omhoog, $2$ opzij $4a$), het voorschrift aflezen met de top en één punt, Terug naar het probleem met de oorsprong op het water.
2. **De vorm $ax^2 + bx + c$.** Probleem: een fontein, $h(x) = -0,8x^2 + 3,2x + 0,4$ (hoe hoog, waar, en waar weer op de hoogte van de spuitmond). Van topvorm naar algemene vorm, de definitie van tweedegraadsfunctie; de top via twee punten op hoogte $c$ ($x = 0$ en $x = -\tfrac ba$), de formule $x = -\tfrac{b}{2a}$; van algemene vorm naar topvorm; de grafiek tekenen met de top, $(0, c)$ en zijn spiegelbeeld; kenmerken (een kader voor extremum en bereik, een voor stijgen en dalen), het aantal nulwaarden afleiden uit de top; problemen met een maximum (de speelzone tegen een gevel), Terug naar het probleem.
3. **Tweedegraadsvergelijkingen.** Probleem: een grindpad rond een grasveld van $20$ m op $15$ m met $200$ m$^2$ grind. Definitie en verband met de nulwaarden; $ax^2 + c = 0$; de product-nulregel; $ax^2 + bx = 0$ (en waarom je niet door $x$ deelt); merkwaardige producten, de som-productmethode, eerst herleiden op nul; de discriminant, ingeleid met de topvorm van $x^2 - 4x + 1$, de formule met de drie gevallen en de betekenis op de grafiek; de keuze van de methode; grafisch oplossen (parabool en rechte); vraagstukken (waar de fontein in de vijver komt), Terug naar het probleem.
4. **Tweedegraadsongelijkheden.** Probleem: een vuurpijl, $h(t) = -5t^2 + 40t$ (wanneer hoger dan $60$ m, wanneer minstens $75$ m). Het tekenschema bij twee, één en geen nulwaarden (een kader per geval); ongelijkheden oplossen met het tekenschema, grenzen erbij of niet, de unie, de fout "wortel nemen" bij $x^2 < 9$; de bijzondere gevallen ($\R$, één getal, $\emptyset$); grafisch oplossen; problemen, Terug naar het probleem.

## Aantallen

Opdrachten (deelvragen) / korte oefeningen / testvragen, per hoofdstuk.

| Hoofdstuk | Pakket 1 | Pakket 2-3 | Pakket 4 | Pakket 5 |
|---|---|---|---|---|
| 1 | 24 (96) / 7 / 7 | 22 (90) / 8 / 7 | 23 (94) / 8 / 7 | 24 (97) / 8 / 7 |
| 2 | | 21 (86) / 7 / 7 | 23 (92) / 8 / 7 | 24 (95) / 8 / 7 |
| 3 | | 21 (89) / 7 / 7 | 23 (95) / 8 / 8 | 25 (100) / 9 / 8 |
| 4 | | 21 (71) / 7 / 7 | 23 (74) / 8 / 8 | 24 (77) / 8 / 8 |

Pagina's (handboek): pakket 1: 19, pakket 2 en 3: 62, pakket 4: 65, pakket 5: 68.

## Verschillen per pakket

Pakket 1 heeft LPD 24 en één hoofdstuk; pakket 2 heeft LPD 24-28 en hoofdstuk 4 als keuzehoofdstuk (K2); pakket 3 heeft LPD 25-30; pakket 4 en 5 hebben LPD 29-34. De verschillen in diepgang zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| H1 sectie 1 en 2 ($y = x^2$, $y = ax^2$), met de korte oefeningen en opdrachten `h1-o1` tot `h1-o13` | x | x | x | x | x |
| H1 sectie Toepassingen ($ax^2 = k$, contexten), `h1-vglax`, `h1-context`, opdrachten `h1-o20` tot `h1-o30`, testvragen 5-7 in een eigen variant | x | | | | |
| H1 verschuiven, topvorm, voorschrift aflezen, `h1-verschuif`, `h1-tekentop`, `h1-aflezen`, opdrachten `h1-o40` tot `h1-o48` | | x | x | x | x |
| H1 opdracht spiegelen en verschuiven (`h1-o49`) | | | | x | x |
| H1 bewijs van de symmetrie van de topvorm (in 2-4 als uitleg in de tekst), bewijsopdracht `h1-o50` | | | | | x |
| Hoofdstuk 2 en 3 | | x | x | x | x |
| Hoofdstuk 4 (in pakket 2 als keuzehoofdstuk, vermeld in de leerkrachtenversie) | | x | x | x | x |
| H2 kwadraatafsplitsen: subsectie, twee voorbeelden, `h2-afsplitsen`, `h2-o21`, `h2-o22`, testvraag `h2-t7` (2-3: een variant met de symmetrieas) | | | | x | x |
| H2 bewijs van de formule voor de top (in 2-4 als uitleg), bewijsopdracht `h2-o23` (de topvorm met letters) | | | | | x |
| H3 ontbinden met de oplossingen $a(x - x_1)(x - x_2)$, `h3-ontbindwortels`, `h3-o21`, testvraag `h3-t8` | | | | x | x |
| H3 de gulden snede (`h3-o20`) | | | | x | x |
| H3 bewijs van de formule met de discriminant (kwadraatafsplitsen; in 2-4 alleen gezegd dat het dezelfde stappen met letters zijn) | | | | | x |
| H3 som en product van de oplossingen met bewijs, `h3-somproduct`, `h3-o22`, bewijsopdracht `h3-o23` | | | | | x |
| H4 ongelijkheden met een parameter, `h4-parameter`, `h4-o20`, `h4-o21`, testvraag `h4-t8` | | | | x | x |
| H4 bewijsopdracht ($x^2 - x + 1 > 0$, $a^2 + b^2 \geqslant 2ab$, $x + \tfrac1x \geqslant 2$) (`h4-o22`) | | | | | x |

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad, de LPD-tabel en de kennis van het leerplan. Na te kijken in het leerplan: of pakket 1 (LPD 24) ook de vergelijking $ax^2 = k$ en contexten bevat (hier opgenomen) en geen verschuivingen (hier weggelaten); of de som-productmethode in pakket 2-3 hoort (nu in 2-5; de discriminant volstaat ook); of kwadraatafsplitsen en ontbinden met de oplossingen terecht alleen in 4-5 staan; of ongelijkheden met een parameter in 4-5 horen.
- **Keuze voor pakket 1.** Geen apart bronhoofdstuk `00-ax2`, maar `\alleenvoor` in hoofdstuk 1 (zie boven). Een apart hoofdstuk zou de theorie over $y = x^2$ en $y = ax^2$ verdubbelen.
- **LPD per hoofdstuk.** De leerkrachtenversie zegt bij hoofdstuk 1-3 "LPD 24-28" (pakket 2), "LPD 25-30" (pakket 3) of "LPD 29-34" (pakket 4-5), en bij hoofdstuk 4 K2, LPD 25-30 of LPD 29-34. Welk nummer bij welk hoofdstuk hoort, is niet nagekeken.
- **Notatie en woorden.** Topvorm $y = a(x - p)^2 + q$ met top $(p, q)$; algemene vorm $ax^2 + bx + c$; "naar boven geopend" en "naar onder geopend" (met dal en berg als beeld; sommige scholen zeggen dalparabool en bergparabool); discriminant $D = b^2 - 4ac$, oplossingen $x_1$ en $x_2$; oplossingsverzameling $V = \{-2, 4\}$; "product-nulregel" en "som-productmethode". Een punt met een kommagetal krijgt een puntkomma: $(2;\ 3,6)$.
- **Bewijzen.** In pakket 5 staan de symmetrie van de topvorm, de formule voor de top, de discriminantformule en de som en het product. De formule voor de top wordt in alle pakketten verklaard met twee punten op hoogte $c$ (uitleg in de tekst), met de product-nulregel die pas in hoofdstuk 3 een kader krijgt; daar staat dat "een product is nul als een factor nul is", wat leerlingen uit de 1ste graad kennen.
- **Contexten met eigen gekozen getallen**, geen echte gegevens: de brug, de pizza's, de remweg $0,008v^2$ en de stopafstand $0,3v + 0,008v^2$ (als "stel dat"), de valweg $5t^2$ (afgerond), de hangbrug (een kabel onder een gelijkmatig verdeelde last heeft ongeveer de vorm van een parabool), de schotelantenne, de fontein, de vuurpijl (zonder luchtweerstand), de fietsverhuur, de brouwerij, de smoothies.
- **Galilei.** Opdracht `h1-o30` (pakket 1) zegt dat Galilei rond 1604 de regel van de oneven getallen ontdekte. Galilei vond de valwet rond 1604; de regel staat in zijn *Discorsi* van 1638. Na te kijken of die formulering goed genoeg is.
- **Moeilijke opdrachten.** `h3-o19` (kosten van een chalet delen) leidt tot een vergelijking met $x$ in de noemer; dat staat in alle pakketten 2-5 als niveau 3 en kan in pakket 2-3 te zwaar zijn. `h4-o18` (dubbele ongelijkheid) gebruikt de doorsnede van intervallen zonder dat woord.
- **Voorkennis.** De merkwaardige producten en het buiten haakjes brengen (1ste graad), de vergelijking $x^2 = a$ (Reële getallen), de intervallen, het tekenschema en de unie (Functies) en het omkeren van het ongelijkheidsteken bij delen door een negatief getal (Eerstegraadsvergelijkingen) worden kort herhaald waar ze nodig zijn, zonder kader.
- **Opmaak.** Door de regel "elke sectie op een nieuwe pagina" blijven er soms halflege pagina's over. De kaders "Top en symmetrieas" (H1, pakket 5) en "Oplossingen van een tweedegraadsvergelijking" (H3, pakket 5) breken tussen de stelling en het bewijs, zoals de opmaak toelaat.

## Controle

De uitkomsten zijn nagerekend met Python en SymPy: functiewaarden, toppen, topvormen, de oplossingen van alle vergelijkingen (ook numeriek) en ongelijkheden, en de afgeronde getallen. Afgelezen waarden liggen op knooppunten van de grafieken. Alle vijf pakketten bouwen zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
