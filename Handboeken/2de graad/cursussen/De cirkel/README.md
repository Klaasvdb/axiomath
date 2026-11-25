# De cirkel: bron

Bron van het keuzehandboek Meetkunde/De cirkel van de 2de graad, voor pakket 4 (B+S) en pakket 5 (B+S''), keuzedoel K1, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Hoeken in een cirkel | `hoofdstukken/01-hoeken-in-een-cirkel.tex` | 4-5 |
| 2. Koorden en raaklijnen | `hoofdstukken/02-koorden-en-raaklijnen.tex` | 4-5 |

Hoofdstuk 1 gaat over koorde en boog, de middelpuntshoek en de lengte van een boog, de omtrekshoek en de omtrekshoekstelling (eerst het geval met een been door het middelpunt, met de gelijkbenige driehoek, daarna het bewijs met een middellijn), omtrekshoeken op dezelfde boog, de hoek in een halve cirkel (cirkel van Thales) en de koordenvierhoek (overstaande hoeken samen $180^\circ$, met bewijs). Probleem: waar kan een fotograaf staan om een gevel van 12 m precies op de foto te krijgen met een beeldhoek van $60^\circ$? Het antwoord is een cirkelboog met middelpuntshoek $120^\circ$: het motief van de voorkant (Delaunay, middelpuntshoek $120^\circ$, omtrekshoek $60^\circ$).

Hoofdstuk 2 gaat over de middelloodlijn van een koorde (gaat door het middelpunt), het middelpunt van een cirkel terugvinden, de cirkel door drie punten (omgeschreven cirkel), het apothema van een koorde (de loodlijn uit het middelpunt valt in het midden) en het verband $d^2 + (k/2)^2 = r^2$, gelijke koorden en gelijke middelpuntshoeken, in pakket 5 de regelmatige veelhoeken, de onderlinge ligging van een rechte en een cirkel ($d$ tegenover $r$), de raaklijn loodrecht op de straal (met de constructie met passer en liniaal), de raaklijnen uit een punt construeren met de cirkel van Thales, en de raaklijnstukken (even lang, bewijs met Pythagoras). Probleem: hoe groot was een rond bord, als je alleen een scherf van de rand hebt (koorde van 16 cm, pijl van 4 cm)?

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`, vertrokken van die van Driehoeksmeting zonder de ruimtelijke figuren: `\lengte`, `\abs`, `\Abs`, `\drieh`, `\hoek`, `\gv`, `\punt`, `\hoekboog`, `\rechtehoek`, `\rechtehoekxy`, `\hoeklabel`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed` en `stappenvrij`. Nieuw zijn `\boog{AB}` (boog met een boogje erboven), `\cirkel` (cirkel met middelpunt in de oorsprong en straal `\straal`), `\cpunt{naam}{hoek}{label}` (een punt op de cirkel met het label naar buiten) en `\boogdeel{van}{tot}` (een boog in de felle kleur).

## Leerplan

Getoetst aan de KOV-leerplannen II-WisS-d (pakket 4, B+S, versie oktober 2024, D/2024/13.758/350) en II-WisS''-d (pakket 5, B+S'', versie oktober 2024, D/2024/13.758/351), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde (leerlijn "Wiskundeplan" 5u, aangepast aan B+S''). Beide leerplannen hebben het keuzedeel De cirkel met hetzelfde doel, LPD K1 (eigenschappen van de cirkel gebruiken om meetkundige problemen op te lossen): rubriek 4.3.6 in pakket 4, rubriek 4.3.7 in pakket 5. Pakket 1-3 hebben dit keuzedeel niet.

| Pakket | Leerplan (versie) | H1 | H2 |
|---|---|---|---|
| 4 | II-WisS-d (oktober 2024) | LPD K1; bewijsopdrachten LPD 4 | LPD K1; bewijsopdrachten LPD 4 |
| 5 | II-WisS''-d (oktober 2024), met het servicedocument voor 5 uur | LPD K1 (macht van een punt: extra); bewijzen LPD B1 | LPD K1 (regelmatige veelhoeken en de constructie van de omgeschreven cirkel: servicedocument); bewijzen LPD B1 |

Wenken en extra's bij K1, en waar ze staan:

- **Voorbeelden van eigenschappen (beide pakketten):** door drie niet-collineaire punten gaat juist één cirkel (H2, cirkel door drie punten); eigenschappen van apothema, straal en koorde (H2, apothema en $d^2 + (k/2)^2 = r^2$, gelijke koorden); eigenschap van de raaklijn (H2); eigenschappen van middelpuntshoeken en omtrekshoeken (H1); eigenschap van de raaklijnen uit een punt (H2, raaklijnstukken). Het servicedocument voor 5 uur maakt deze vijf verplicht.
- **Onderzoeken, formuleren, eventueel bewijzen, toepassen (beide):** de Verken van elk hoofdstuk, de kaders met een kort bewijs, de voorbeelden en opdrachten.
- **Constructies met passer en liniaal (beide):** de raaklijn in een punt (H2, tekst en `h2-raak` c) en de raaklijnen uit een punt (H2, voorbeeld en `h2-o6` b); ook het middelpunt terugvinden en de omgeschreven cirkel (`h2-ml`, `h2-drie`, `h2-o6` a).
- **Pakket 5, extra's:** de macht van een punt (nu `h1-o25` d, met het bewijs); de constructie van de gemeenschappelijke raaklijnen aan twee cirkels (niet opgenomen; `h2-o19` berekent wel een gemeenschappelijk raaklijnstuk).
- **Pakket 5, servicedocument 5 uur:** de constructie van de omgeschreven cirkel (stond er al) en de eigenschappen van regelmatige $n$-hoeken onderzoeken en gebruiken (nieuw, H2).
- **Bewijzen.** In pakket 4 noemt LPD 4 het reconstrueren van bewijzen van eigenschappen van de cirkel als extra, en tussenstappen van een bewijs laten verantwoorden als wenk. In pakket 5 noemt LPD B1 eigenschappen van de cirkel als voorbeeld van bewijzen, en het bewijs uit het ongerijmde als techniek.
- **Analytisch (niet in dit handboek).** In pakket 4 is de vergelijking van een cirkel met de afstandsformule een extra bij LPD 10 (opdracht `h1-o27` van Driehoeksmeting). In pakket 5 staan de vergelijking van een cirkel, de algemene vergelijking (middelpunt en straal bepalen), de raaklijn in een punt, de raaklijnen uit een punt en de onderlinge ligging van een cirkel en een rechte of twee cirkels als extra's bij LPD B3-B5 (Analytische meetkunde); het servicedocument maakt alles daarvan verplicht behalve de onderlinge ligging. Dat hoort bij Analytische meetkunde, dat in pakket 5 verplicht is, en niet bij dit keuzehandboek: een school kan ook Grafen kiezen.

## Verschillen per pakket

Beide pakketten hebben K1 en dezelfde twee hoofdstukken. De verschillen staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 4 | 5 | Reden |
|---|---|---|---|
| Omtrekshoekstelling: geval 1 (uitleg) en geval 2 (bewijs) | x | x | K1 |
| Omtrekshoekstelling: geval 3 (middelpunt buiten de hoek) uitgewerkt; in pakket 4 één zin | | x | B1 |
| Hoek in een halve cirkel en koordenvierhoek, met bewijs | x | x | K1 (omtrekshoeken) |
| Omgekeerde stelling van de hoek in een halve cirkel (bewijs met een rechthoek), voorbeeld en korte oefening | | x | B1 |
| Kenmerk van een koordenvierhoek (zonder bewijs) | | x | didactische keuze |
| Raaklijn en straal: de rechte loodrecht op de straal is een raaklijn (bewijs met Pythagoras), constructie met passer en liniaal | x | x | K1 (wenk constructies) |
| Elke raaklijn staat loodrecht op de straal: bewijs uit het ongerijmde (in pakket 4 uitleg met het dichtste punt) | | x | B1 (bewijs uit het ongerijmde) |
| Hoek tussen raaklijn en koorde (subsectie, bewijs, voorbeeld, korte oefening `h2-rk`, opdracht `h2-o23`) | | x | didactische keuze |
| Regelmatige veelhoeken (subsectie, voorbeeld `vb:h2-veelhoek`, korte oefening `h2-veelhoek`, opdrachten `h2-o26` en `h2-o27`, testvraag `h2-t8`) | | x | servicedocument 5 uur |
| Bewijsopdrachten: binnen de cirkel is de hoek groter, bissectrice van een omtrekshoek, zwaartelijn op de schuine zijde, snijdende koorden ($\lengte{SA}\cdot\lengte{SC} = \lengte{SB}\cdot\lengte{SD}$), vierhoek met ingeschreven cirkel, concentrische cirkels, geen cirkel door drie punten op een rechte | | x | B1 |
| Macht van een punt (`h1-o25` d) | | x | extra bij K1 |

Bewijsopdrachten die in beide pakketten staan: hoek tussen snijdende koorden binnen en buiten de cirkel, buitenhoek van een koordenvierhoek, gelijke koorden liggen even ver van het middelpunt, de symmetrieas van twee raaklijnen.

Aantallen (pakket 4 / pakket 5): hoofdstuk 1 heeft 21/25 opdrachten (84/91 deelvragen), 8/9 korte oefeningen en 7 testvragen; hoofdstuk 2 heeft 21/27 opdrachten (67/83 deelvragen), 7/9 korte oefeningen en 7/8 testvragen.

## Wat het leerplan besliste

- **Afbakening.** K1 geeft vijf eigenschappen als voorbeelden; ze staan alle vijf in het boek, in beide pakketten. De cirkel door drie punten staat er letterlijk in. De lengte van een boog, de koordenvierhoek en de onderlinge ligging van een rechte en een cirkel noemt K1 niet, maar het zijn toepassingen van de genoemde eigenschappen (middelpuntshoek, omtrekshoeken, de raaklijn als $d = r$); ze blijven in beide pakketten. In pakket 5 staat de onderlinge ligging bovendien analytisch als extra bij LPD B4.
- **LPD per hoofdstuk.** In beide pakketten heet het doel K1 (keuzedeel De cirkel), met dezelfde tekst. Hoofdstuk 1 dekt de wenk over middelpuntshoeken en omtrekshoeken, hoofdstuk 2 de andere vier eigenschappen en de constructies. De bewijzen horen bij LPD 4 (pakket 4) en B1 (pakket 5). De kaders voor de leerkracht zeggen dat nu per pakket, met de rubriek (4.3.6 of 4.3.7).
- **Apothema.** K1 gebruikt het woord *apothema*; het boek noemde het alleen de afstand van het middelpunt tot een koorde. Nu heet $[MH]$ in hoofdstuk 2 het apothema (subsectie "Apothema, straal en koorde"), in beide pakketten.
- **Constructies met passer en liniaal** (wenk bij K1, beide pakketten): de raaklijnen uit een punt stonden er al; de raaklijn in een punt werd met de geodriehoek getekend en heeft nu ook een constructie met passer en liniaal (tekst en `h2-raak` c).
- **Regelmatige veelhoeken** (servicedocument 5 uur): nieuw in pakket 5, in hoofdstuk 2 na gelijke koorden: waarom de deelpunten van $n$ gelijke bogen een regelmatige veelhoek vormen, middelpuntshoek, hoek, halve zijde en apothema met sinus en cosinus, oppervlakte; met voorbeeld (achthoek), korte oefening, twee opdrachten (een stopbord; de $n$-hoek die de cirkel benadert) en een testvraag. Pakket 4 houdt de regelmatige veelhoeken uit hoofdstuk 1 (middelpuntshoeken van een zeshoek, tienhoek, vijfhoek).
- **Macht van een punt** (extra in pakket 5): opdracht `h1-o25` (alleen pakket 5) bewees al $\lengte{SA}\cdot\lengte{SC} = \lengte{SB}\cdot\lengte{SD}$; deelvraag d geeft nu de naam en toont aan dat het product $r^2 - \lengte{MS}^2$ is.
- **De omgeschreven cirkel construeren** (servicedocument 5 uur) stond er al in beide pakketten (`h2-drie` a, `h2-o6` a).
- **Vergelijking van een cirkel.** Hoort niet bij K1. In pakket 4 is ze een extra bij LPD 10 (Driehoeksmeting, `h1-o27`); in pakket 5 hoort ze met de raaklijnen bij LPD B3-B5 (Analytische meetkunde, verplicht voor 5 uur). Dit keuzehandboek neemt ze niet op.

## Wat open blijft

- **Hoek tussen raaklijn en koorde.** K1 noemt hem niet; het leerplan beslist niet of hij in pakket 4 hoort. Hij blijft alleen in pakket 5 (didactische keuze: hij vraagt een extra bewijs).
- **Kenmerk van een koordenvierhoek** alleen in pakket 5, zonder bewijs: didactische keuze, het leerplan beslist het niet.
- **Gemeenschappelijke raaklijnen aan twee cirkels construeren** (extra in pakket 5): niet opgenomen. Kan als opdracht bij de riem over twee wielen (`h2-o19`).
- **Regelmatige veelhoeken: omgekeerde.** Dat elke regelmatige veelhoek een omgeschreven cirkel heeft, staat er zonder bewijs.
- **Naam "Thales".** De hoek in een halve cirkel heet in het boek "Hoek in een halve cirkel", met de vermelding *cirkel van Thales*, en een waarschuwing dat de stelling van Thales in Gelijkvormigheid over evenwijdige rechten gaat. Kies de naam die de school gebruikt.
- **Notatie.** Boog als $\boog{AB}$ (boogje erboven), hoek als $\hoek{ACB}$, lengte als $\lengte{AB}$. "Een omtrekshoek *staat op* een boog", *inspringende hoek* voor een hoek groter dan $180^\circ$, *snijlijn*, *raaklijn*, *raakpunt*, *rechte buiten de cirkel*, *raaklijnstukken*, *omgeschreven cirkel*, *apothema* (van een koorde en van een regelmatige veelhoek). Kijk of dat de afspraken van de school zijn.
- **Voorkennis.** De terug-naar-het-probleem van hoofdstuk 1 gebruikt $\tan 30^\circ$ en $\sin 30^\circ$ (exacte waarden, handboek Driehoeksmeting, in pakket 4 en 5). Opdracht h2-o12c en de regelmatige veelhoeken (pakket 5) gebruiken sinus en cosinus. Opdracht h1-o25 (pakket 5) gebruikt het kenmerk HH uit Gelijkvormigheid; h1-o23 en h2-o21 de congruentiekenmerken uit de 1ste graad.
- **Formule $d^2 + (k/2)^2 = r^2$** staat als uitleg (toepassing van Pythagoras) met een werkwijze, niet in een theoriekader. De lengte van een boog staat wel in een kader.
- **Bewijs van het kenmerk van een koordenvierhoek** is weggelaten (pakket 5 vermeldt waarom). De bewering dat een punt buiten de cirkel de koorde onder een kleinere hoek ziet, staat in pakket 4 als uitleg; pakket 5 bewijst het voor een punt binnen de cirkel (h1-o22).
- **Getallen in contexten** zijn verzonnen of afgerond: de gevel van 12 m, de torenklok van 1,2 m, de straal van de aarde (6371 km), de atletiekpiste (straal 36,5 m), het voetbaldoel (7,32 m, alleen in de figuur), de brug van 40 m bij 8 m, het stopbord van 60 cm tussen overstaande zijden ("neem aan").
- **Prenten.** Er staan geen prenten bij de opdrachten.

## Controle

De afgeronde getallen zijn nagerekend met Python (booglengtes, de afstanden in het probleem van de fotograaf, horizon, brug, riem, koorden, raaklijnstukken), de nieuwe getallen van de regelmatige veelhoeken (achthoek, vijfhoek, zeshoek, twaalfhoek, negenhoek, tienhoek, stopbord, $A_6$, $A_{12}$, $A_{96}$) met SymPy; de hoeken in de figuren zijn uit de opgave berekend en de figuren zijn met die hoeken getekend. Bewijzen en uitlegvragen zijn niet nagerekend. Beide pakketten bouwen zonder fouten (geen `undefined`, geen Overfull groter dan 2pt, geen "??" in de PDF's). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
