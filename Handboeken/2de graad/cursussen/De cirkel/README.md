# De cirkel: bron

Bron van het keuzehandboek Meetkunde/De cirkel van de 2de graad, voor pakket 4 (B+S) en pakket 5 (B+S''), keuzedoel K1, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Hoeken in een cirkel | `hoofdstukken/01-hoeken-in-een-cirkel.tex` | 4-5 |
| 2. Koorden en raaklijnen | `hoofdstukken/02-koorden-en-raaklijnen.tex` | 4-5 |

Hoofdstuk 1 gaat over koorde en boog, de middelpuntshoek en de lengte van een boog, de omtrekshoek en de omtrekshoekstelling (eerst het geval met een been door het middelpunt, met de gelijkbenige driehoek, daarna het bewijs met een middellijn), omtrekshoeken op dezelfde boog, de hoek in een halve cirkel (cirkel van Thales) en de koordenvierhoek (overstaande hoeken samen $180^\circ$, met bewijs). Probleem: waar kan een fotograaf staan om een gevel van 12 m precies op de foto te krijgen met een beeldhoek van $60^\circ$? Het antwoord is een cirkelboog met middelpuntshoek $120^\circ$: het motief van de voorkant (Delaunay, middelpuntshoek $120^\circ$, omtrekshoek $60^\circ$).

Hoofdstuk 2 gaat over de middelloodlijn van een koorde (gaat door het middelpunt), het middelpunt van een cirkel terugvinden, de cirkel door drie punten (omgeschreven cirkel), de loodlijn uit het middelpunt op een koorde en het verband $d^2 + (k/2)^2 = r^2$, gelijke koorden en gelijke middelpuntshoeken, de onderlinge ligging van een rechte en een cirkel ($d$ tegenover $r$), de raaklijn loodrecht op de straal, de raaklijnen uit een punt construeren met de cirkel van Thales, en de raaklijnstukken (even lang, bewijs met Pythagoras). Probleem: hoe groot was een rond bord, als je alleen een scherf van de rand hebt (koorde van 16 cm, pijl van 4 cm)?

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`, vertrokken van die van Driehoeksmeting zonder de ruimtelijke figuren: `\lengte`, `\abs`, `\Abs`, `\drieh`, `\hoek`, `\gv`, `\punt`, `\hoekboog`, `\rechtehoek`, `\rechtehoekxy`, `\hoeklabel`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed` en `stappenvrij`. Nieuw zijn `\boog{AB}` (boog met een boogje erboven), `\cirkel` (cirkel met middelpunt in de oorsprong en straal `\straal`), `\cpunt{naam}{hoek}{label}` (een punt op de cirkel met het label naar buiten) en `\boogdeel{van}{tot}` (een boog in de felle kleur).

## Verschillen per pakket

Beide pakketten hebben K1 en dezelfde twee hoofdstukken. De verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 4 | 5 |
|---|---|---|
| Omtrekshoekstelling: geval 1 (uitleg) en geval 2 (bewijs) | x | x |
| Omtrekshoekstelling: geval 3 (middelpunt buiten de hoek) uitgewerkt; in pakket 4 één zin | | x |
| Hoek in een halve cirkel en koordenvierhoek, met bewijs | x | x |
| Omgekeerde stelling van de hoek in een halve cirkel (bewijs met een rechthoek), voorbeeld en korte oefening | | x |
| Kenmerk van een koordenvierhoek (zonder bewijs) | | x |
| Raaklijn en straal: de rechte loodrecht op de straal is een raaklijn (bewijs met Pythagoras) | x | x |
| Elke raaklijn staat loodrecht op de straal: bewijs uit het ongerijmde (in pakket 4 uitleg met het dichtste punt) | | x |
| Hoek tussen raaklijn en koorde (subsectie, bewijs, voorbeeld, korte oefening, opdracht) | | x |
| Bewijsopdrachten: binnen de cirkel is de hoek groter, bissectrice van een omtrekshoek, zwaartelijn op de schuine zijde, snijdende koorden ($\lengte{SA}\cdot\lengte{SC} = \lengte{SB}\cdot\lengte{SD}$), vierhoek met ingeschreven cirkel, concentrische cirkels, geen cirkel door drie punten op een rechte | | x |

Bewijsopdrachten die in beide pakketten staan: hoek tussen snijdende koorden binnen en buiten de cirkel, buitenhoek van een koordenvierhoek, gelijke koorden liggen even ver van het middelpunt, de symmetrieas van twee raaklijnen.

Aantallen (pakket 4 / pakket 5): hoofdstuk 1 heeft 21/25 opdrachten (84/90 deelvragen), 8/9 korte oefeningen en 7 testvragen; hoofdstuk 2 heeft 21/25 opdrachten (67/77 deelvragen), 7/8 korte oefeningen en 7 testvragen.

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad ("middelpuntshoek, omtrekshoek, raaklijn") en het voorstel van Klaas. Na te kijken in het leerplan: of de koordenvierhoek, de lengte van een boog, de cirkel door drie punten en de onderlinge ligging van een rechte en een cirkel bij K1 horen, en of de hoek tussen raaklijn en koorde (nu alleen pakket 5) in pakket 4 hoort.
- **LPD per hoofdstuk.** De leerkrachtenversie zegt bij beide hoofdstukken "LPD K1". In beide pakketten heet het keuzedoel K1 (volgens de tabel in de README van de 2de graad); niet nagekeken in het leerplan.
- **Naam "Thales".** De hoek in een halve cirkel heet in het boek "Hoek in een halve cirkel", met de vermelding *cirkel van Thales*, en een waarschuwing dat de stelling van Thales in Gelijkvormigheid over evenwijdige rechten gaat. Kies de naam die de school gebruikt.
- **Notatie.** Boog als $\boog{AB}$ (boogje erboven), hoek als $\hoek{ACB}$, lengte als $\lengte{AB}$. "Een omtrekshoek *staat op* een boog", *inspringende hoek* voor een hoek groter dan $180^\circ$, *snijlijn*, *raaklijn*, *raakpunt*, *rechte buiten de cirkel*, *raaklijnstukken*, *omgeschreven cirkel*. Kijk of dat de afspraken van de school zijn.
- **Voorkennis.** De terug-naar-het-probleem van hoofdstuk 1 gebruikt $\tan 30^\circ$ en $\sin 30^\circ$ (exacte waarden, handboek Driehoeksmeting, in pakket 4 en 5). Opdracht h2-o12c gebruikt de sinus. Opdracht h1-o25 (pakket 5) gebruikt het kenmerk HH uit Gelijkvormigheid; h1-o23 en h2-o21 de congruentiekenmerken uit de 1ste graad.
- **Formule $d^2 + (k/2)^2 = r^2$** staat als uitleg (toepassing van Pythagoras) met een werkwijze, niet in een theoriekader. De lengte van een boog staat wel in een kader.
- **Bewijs van het kenmerk van een koordenvierhoek** is weggelaten (pakket 5 vermeldt waarom). De bewering dat een punt buiten de cirkel de koorde onder een kleinere hoek ziet, staat in pakket 4 als uitleg; pakket 5 bewijst het voor een punt binnen de cirkel (h1-o22).
- **Getallen in contexten** zijn verzonnen of afgerond: de gevel van 12 m, de torenklok van 1,2 m, de straal van de aarde (6371 km), de atletiekpiste (straal 36,5 m), het voetbaldoel (7,32 m, alleen in de figuur), de brug van 40 m bij 8 m.
- **Prenten.** Er staan geen prenten bij de opdrachten.

## Controle

De afgeronde getallen zijn nagerekend met Python (booglengtes, de afstanden in het probleem van de fotograaf, horizon, brug, riem, koorden, raaklijnstukken), de hoeken in de figuren zijn uit de opgave berekend en de figuren zijn met die hoeken getekend. Bewijzen en uitlegvragen zijn niet nagerekend. Beide pakketten bouwen zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
