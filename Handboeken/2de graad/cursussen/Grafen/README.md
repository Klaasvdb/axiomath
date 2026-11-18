# Grafen: bron

Bron van het keuzehandboek Discrete wiskunde/Grafen van de 2de graad, voor pakket 4 (B+S) en pakket 5 (B+S''), keuzedoelen K2-K3, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Een graaf als model | `hoofdstukken/01-graaf-als-model.tex` | 4-5 |
| 2. Problemen oplossen met grafen | `hoofdstukken/02-problemen-oplossen.tex` | 4-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: `\knopen`, `\bogen`, `\pijlen`, `\gbogen`, `\gpijlen` en `\knoopgraad` om grafen te tekenen in TikZ (met de stijlen `knoop`, `punt`, `boog`, `pijl`, `gewicht`, `accentboog`), `\gr{A}` voor de graad, en `\naast`, `\figuren`, `metgrafiek`, `stappenvrij` uit Integralen.

## Inhoud

1. **Een graaf als model.** Probleem: kan in een klas van 25 leerlingen iedereen met precies drie klasgenoten bevriend zijn? Knopen, bogen en buren; een situatie modelleren; dezelfde graaf in een andere tekening; meervoudige bogen en lussen; de graad; de handdrukstelling (met bewijs); het aantal knopen met een oneven graad is even (met bewijs); de volledige graaf en zijn aantal bogen; gerichte grafen met ingraad en uitgraad; schema's (een volgorde van taken); gewogen grafen en de lengte van een route.
2. **Problemen oplossen met grafen.** Probleem: de bruggen van Königsberg. Wandeling, pad en kring; samenhangend; eulerpad en eulerkring met de stellingen van Euler (bewijs van de nodige voorwaarde, en het eulerpad via een extra boog); een eulerkring vinden door kringen in te lassen; het kortste pad met het algoritme van Dijkstra.

## Verschillen per pakket

LPD K2-K3 zijn in pakket 4 en 5 dezelfde. De verschillen zijn klein en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 4 | 5 |
|---|---|---|
| Bewijs dat even graden volstaan voor een eulerkring (kringen inlassen); in pakket 4 alleen gezegd, met de werkwijze als uitleg | | x |
| Opdracht: in een enkelvoudige graaf hebben twee knopen dezelfde graad (bewijs) | | x |
| Opdracht: met lussen volstaat een even aantal oneven graden (bewijs) | | x |
| Opdracht: een graaf met $2k$ oneven knopen teken je in $k$ halen (bewijs) | | x |
| Opdracht: waarom het algoritme van Dijkstra werkt (bewijs) | | x |

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. Wat K2 en K3 precies vragen, is niet nagekeken; de afbakening volgt "Inhoud per handboek" in de README van de 2de graad en het voorstel van Klaas.
- **Keuze in hoofdstuk 2.** Naast Euler is gekozen voor het kortste pad (algoritme van Dijkstra), omdat het voortbouwt op de gewogen grafen van hoofdstuk 1 en een tweede soort probleem toont. Kleuren staat alleen als opdracht van niveau 3 (een examenrooster). Als het leerplan kleuren vraagt, kan dat een derde sectie worden.
- **Woorden en notatie.** Een *pad* mag hier een knoop meer dan eens bevatten (geen boog twee keer); sommige bronnen noemen dat een *spoor* of *trail* en eisen bij een pad verschillende knopen. Zo kloppen *eulerpad* en *eulerkring*. De graad noteren we $\mathrm{gr}(A)$ (internationaal ook $\deg(A)$). Een graaf mag meervoudige bogen en lussen hebben, tenzij er *enkelvoudig* staat; een lus telt voor 2 in de graad.
- **Bewijzen.** De handdrukstelling, het even aantal oneven graden, het aantal bogen van een volledige graaf, de stelling voor in- en uitgraden en de nodige voorwaarde van Euler zijn kort en staan in beide pakketten. Of dat in pakket 4 niet te veel is, beslist de leerkracht.
- **Schema's.** De volgorde van taken (topologisch sorteren) en de opdracht met tijden (kritiek pad, niveau 3) zijn een eigen invulling van de "schema's" uit het voorstel.
- **Geschiedenis.** Euler loste het probleem op in 1736, Dijkstra publiceerde zijn algoritme in 1959 (bedacht in 1956; de tekst zegt 1956). De schets van Königsberg is schematisch en eigen werk, niet op schaal.
- **Contexten.** De buurlanden van België in testvraag 2 van hoofdstuk 1 zijn echt; de reistijden, afstanden, buslijnen en het museum zijn verzonnen. De alkanen ($C_nH_{2n+2}$) gebruiken alleen enkelvoudige bindingen.

## Controle

De antwoorden zijn nagerekend met een Python-script: graden, aantallen bogen, routes en volgordes in schema's, en met brute force alle eulerpaden (bestaan, begin en einde, de gegeven paden en kringen) en alle kortste paden (alle paden zonder herhaalde knoop vergeleken met het algoritme van Dijkstra). Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
