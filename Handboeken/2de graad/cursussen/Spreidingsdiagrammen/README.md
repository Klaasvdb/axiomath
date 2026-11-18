# Spreidingsdiagrammen: bron

Bron van het handboek Data en onzekerheid/Spreidingsdiagrammen van de 2de graad, voor pakket 2-5 (niet in pakket 1), volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk; alle gegevens zijn verzonnen (en zo voorgesteld in de probleemblokken). Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Het spreidingsdiagram en de trendlijn | `hoofdstukken/01-spreidingsdiagram.tex` | 2-5 |
| 2. De correlatiecoëfficiënt | `hoofdstukken/02-correlatie.tex` | 2-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de prenten in `afbeeldingen/prenten/` (met hun herkomst), de eigen macro's in `notatie.tex`:

- spreidingsdiagrammen: `\diagram` (raster en assen die in de hoek beginnen, niet noodzakelijk in 0, met namen voor de assen), `\xas` en `\yas` (getallen met een komma; een getal in de hoek schuift opzij), `\punten` (de puntenwolk), `\gempunt` (het gemiddelde punt als vierkantje), `\gemlijnen` (de kwadranten rond het gemiddelde punt), `\residu`;
- uit Functies: `\rooster`, `\roosterleeg`, `\rechte`, `\kromme`, `\punt`, de stijlen `tweede` en `hulplijn`, `\waardetabel`, en een kleinere `\kleinetabel` voor tabellen met veel kolommen;
- `\xbar`, `\ybar` (zoals in Statistiek), `\abs`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Inhoud

1. **Het spreidingsdiagram en de trendlijn.** Probleem: een ijskraam met tien dagen temperatuur en verkoop; hoeveel ijsjes bij 27 °C, en wat bij 5 °C of 40 °C? Het spreidingsdiagram tekenen (onafhankelijke variabele op de $x$-as, assen die niet in 0 beginnen); een verband beschrijven: richting (positief, negatief), vorm (lineair of niet), sterkte (in woorden), uitschieters; de trendlijn op het oog door het gemiddelde punt $(\bar x, \bar y)$, haar vergelijking $y = mx + q$ met twee punten (aansluitend bij Functies); de betekenis van $m$ en $q$ in een context (en wanneer $q$ zinloos is); voorspellen in twee richtingen; de regressielijn met ICT (in algemene termen, zonder merkgebonden knoppen; ook het rekenblad), door het gemiddelde punt; afronden; interpoleren en extrapoleren; Terug naar het probleem met een figuur van het gebied van de gegevens. Pakket 4-5: residuen en het criterium van de kleinste kwadraten.
2. **De correlatiecoëfficiënt.** Probleem: schoenmaat en leesscore van twaalf kinderen van 6 tot 12 jaar; hoe sterk is het verband, en moet een slechte lezer grotere schoenen krijgen? Het teken van $r$ uitgelegd met de kwadranten rond het gemiddelde punt; $-1 \leqslant r \leqslant 1$ en de betekenis van het teken en van $\pm 1$; sterk, matig en zwak (afspraak $0,8$ en $0,5$); $r$ schatten uit een diagram; $r$ zegt niets over de steilheid; $r$ met ICT (geen eenheid, gelijk bij het wisselen van $x$ en $y$); wat $r$ niet meet: niet-lineaire verbanden ($r \approx 0$ bij een boog), uitschieters; correlatie is geen oorzakelijk verband: verborgen variabele, omgekeerde richting, toeval, en het experiment; Terug naar het probleem met de leeftijd als verborgen variabele. Pakket 5: de formule van $r$ als uitleg, met een voorbeeld en twee oefeningen.

## Aantallen

Opdrachten (deelvragen) / korte oefeningen / testvragen, per hoofdstuk.

| Hoofdstuk | Pakket 2-3 | Pakket 4 | Pakket 5 |
|---|---|---|---|
| 1 | 23 (87) / 7 / 7 | 24 (91) / 8 / 7 | 25 (94) / 8 / 7 |
| 2 | 22 (80) / 7 / 7 | 22 (80) / 7 / 7 | 23 (81) / 8 / 7 |

## Verschillen per pakket

Pakket 2 heeft LPD 34, pakket 3 LPD 36, pakket 4 en 5 LPD 40. De verschillen in diepgang zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| H1: residuen en de kleinste kwadraten: subsectie met kader, voorbeeld, korte oefening `h1-residu`, opdracht `h1-o17` (in 2-3: een alinea in woorden, en een kader "de trendlijn die ICT berekent") | | | x | x |
| H1: bewijsopdracht, de som van de residuen is 0 voor een rechte door het gemiddelde punt (`h1-o25`) | | | | x |
| H2: de formule van $r$ als uitleg (niet te kennen), met voorbeeld, korte oefening `h2-formule` en opdracht `h2-o19` | | | | x |

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad, de LPD-tabel en de kennis van het leerplan. Na te kijken in het leerplan: of residuen en de kleinste kwadraten (nu 4-5) en de formule van $r$ (nu alleen 5, als uitleg) erin horen, en of pakket 2 en 3 echt dezelfde diepgang hebben (nu identiek).
- **LPD per hoofdstuk.** De leerkrachtenversie zegt bij beide hoofdstukken LPD 34 (pakket 2), 36 (pakket 3) of 40 (pakket 4-5), met wat het hoofdstuk behandelt. Het is één doel voor het hele handboek; niet nagekeken of het leerplan het anders opsplitst.
- **Grenzen voor de sterkte.** Sterk vanaf $\lvert r\rvert = 0,8$, matig vanaf $0,5$, zwak daaronder: een afspraak van dit boek (in een kader, met de vermelding dat andere bronnen andere grenzen gebruiken). Kies de afspraak van de school.
- **ICT.** De stappen zijn in algemene termen beschreven (statistiekmodus voor twee variabelen, lineaire regressie, $y = ax + b$ of $y = a + bx$, een optie om $r$ te tonen, in een rekenblad een lineaire trendlijn en de functie CORRELATIE / CORREL). Niet getest op een concreet toestel; de leerkrachtenversie vraagt de knoppen van het schooltoestel te tonen.
- **Afronden.** Regressielijnen staan met twee cijfers na de komma, $r$ met twee. Waar een kleine rico de voorspelling bederft, vraagt de opgave vier cijfers (`h1-o22`, `h2-o6`) of een andere eenheid (de temperatuur per km in `h1-ict`). Antwoorden die met afgeronde coëfficiënten zijn uitgerekend, kunnen een eenheid in het laatste cijfer verschillen van wat ICT met alle cijfers geeft.
- **Trendlijn op het oog.** De antwoorden geven één mogelijke rechte en een marge voor de rico; de leerkracht beoordeelt.
- **Bewust opgenomen, misschien buiten het leerplan:** het gemiddelde punt als houvast (en de eigenschap dat de regressielijn erdoor gaat, zonder bewijs), de regressielijn van $x$ in functie van $y$ (`h1-o22`), de tijd vanaf een beginjaar bij een tijdreeks (`h1-o16`), een kleiner bereik geeft een kleinere $r$ (`h2-o20`), twee groepen die samen een schijnverband geven (`h2-o21`), het experiment met loting. Bewust weggelaten: $r^2$, niet-lineaire regressie (exponentieel, kwadratisch), de formule van de regressielijn.
- **Voorkennis.** De eerstegraadsfunctie $y = mx + q$ (Functies) en het gemiddelde (Statistiek) worden kort herhaald waar ze nodig zijn; het boek veronderstelt Statistiek niet gezien. Eerstegraadsvergelijkingen worden gebruikt bij voorspellen in de omgekeerde richting.
- **Contexten met verzonnen getallen**, geen echte metingen: ijsjes, remwegen (ongeveer realistisch), temperatuur op een berg (ongeveer $-6$ °C per km), groei van een kind en een puppy, prijzen van wagens, appartementen en pizza's, de stadsloop, het clubrecord.
- **Prenten.** `fiets.png` en `auto.png` zijn overgenomen uit Stelsels en Integralen (licentie daar nagekeken), zie `afbeeldingen/prenten/README.md`.
- **Opmaak.** Door de regel "elke sectie op een nieuwe pagina" blijven er een paar halflege pagina's over.

## Controle

Alle regressielijnen, gemiddelde punten en correlatiecoëfficiënten zijn nagerekend met Python (numpy: kleinste kwadraten en `corrcoef`); de puntenwolken voor de figuren zijn met Python gemaakt met een gekozen $r$, en de vermelde $r$ is die van de afgeronde punten. De tellingen per kwadrant zijn nagegaan. Uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder, het gebruik in de klas, en de stappen op een concreet rekentoestel.
