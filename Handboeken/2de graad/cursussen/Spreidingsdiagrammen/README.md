# Spreidingsdiagrammen: bron

Bron van het handboek Data en onzekerheid/Spreidingsdiagrammen van de 2de graad, voor pakket 2-5 (niet in pakket 1), volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk; alle gegevens zijn verzonnen (en zo voorgesteld in de probleemblokken). Status: eerste versie, getoetst aan het leerplan (nov 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Het spreidingsdiagram en de trendlijn | `hoofdstukken/01-spreidingsdiagram.tex` | 2-5 |
| 2. De correlatiecoëfficiënt | `hoofdstukken/02-correlatie.tex` | 2-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de prenten in `afbeeldingen/prenten/` (met hun herkomst), de eigen macro's in `notatie.tex`:

- spreidingsdiagrammen: `\diagram` (raster en assen die in de hoek beginnen, niet noodzakelijk in 0, met namen voor de assen), `\xas` en `\yas` (getallen met een komma; een getal in de hoek schuift opzij), `\punten` (de puntenwolk), `\gempunt` (het gemiddelde punt als vierkantje), `\gemlijnen` (de kwadranten rond het gemiddelde punt), `\residu` (sinds de toetsing aan het leerplan niet meer gebruikt);
- uit Functies: `\rooster`, `\roosterleeg`, `\rechte`, `\kromme`, `\punt`, de stijlen `tweede` en `hulplijn`, `\waardetabel`, en een kleinere `\kleinetabel` voor tabellen met veel kolommen;
- `\xbar`, `\ybar` (zoals in Statistiek), `\abs`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Inhoud

1. **Het spreidingsdiagram en de trendlijn.** Probleem: een ijskraam met tien dagen temperatuur en verkoop; hoeveel ijsjes bij 27 °C, en wat bij 5 °C of 40 °C? Het spreidingsdiagram tekenen (onafhankelijke variabele op de $x$-as, assen die niet in 0 beginnen); een verband beschrijven: richting (positief, negatief), vorm (lineair of niet), sterkte (in woorden), uitschieters; de trendlijn op het oog door het gemiddelde punt $(\bar x, \bar y)$, haar vergelijking $y = mx + q$ met twee punten (aansluitend bij Functies); de betekenis van $m$ en $q$ in een context (en wanneer $q$ zinloos is); voorspellen in twee richtingen; de regressielijn met ICT (in algemene termen, zonder merkgebonden knoppen; ook het rekenblad), door het gemiddelde punt; afronden; interpoleren en extrapoleren; Terug naar het probleem met een figuur van het gebied van de gegevens. Geen residuen of kleinste kwadraten (zie Leerplan).
2. **De correlatiecoëfficiënt.** Probleem: schoenmaat en leesscore van twaalf kinderen van 6 tot 12 jaar; hoe sterk is het verband, en moet een slechte lezer grotere schoenen krijgen? Het teken van $r$ uitgelegd met de kwadranten rond het gemiddelde punt; $-1 \leqslant r \leqslant 1$ en de betekenis van het teken en van $\pm 1$; sterk, matig en zwak (afspraak $0,8$ en $0,5$); $r$ schatten uit een diagram; $r$ zegt niets over de steilheid; $r$ met ICT (geen eenheid, gelijk bij het wisselen van $x$ en $y$); wat $r$ niet meet: niet-lineaire verbanden ($r \approx 0$ bij een boog, en omgekeerd $r = 0,98$ bij de remweg), uitschieters; correlatie is geen oorzakelijk verband: verborgen variabele, omgekeerde richting, toeval, en het experiment; Terug naar het probleem met de leeftijd als verborgen variabele. Geen formule van $r$ (zie Leerplan). Pakket 3-5: een opdracht met een omgekeerd evenredig verband ($r = -0,96$, maar $t = 60/v$).

## Aantallen

Opdrachten (deelvragen) / korte oefeningen / testvragen, per hoofdstuk.

| Hoofdstuk | Pakket 2 | Pakket 3-5 |
|---|---|---|
| 1 | 23 (87) / 7 / 7 | 23 (87) / 7 / 7 |
| 2 | 22 (80) / 7 / 7 | 23 (84) / 7 / 7 |

## Leerplan

Getoetst aan de KOV-leerplannen van de 2de graad D-finaliteit (nov 2026): B+ (II-Wis'-d, oktober 2024), B+S' (II-WisS'-d, juni 2024), B+S (II-WisS-d, oktober 2024) en B+S'' (II-WisS''-d, oktober 2024, met het servicedocument voor 5 uur). Het onderwerp is deelrubriek 4.6.2 met één leerplandoel: **LPD 34** (B+), **LPD 36** (B+S'), **LPD 40** (B+S en B+S''), telkens hetzelfde cesuurdoel (06.01.01 in B+, 06.04.08 in B+S). Doel, afbakening (trendlijn, correlatiecoëfficiënt) en wenken zijn dezelfde in de vier leerplannen; er zijn geen keuzedoelen en geen verdiepende doelen (B1-B6 van B+S'') over dit onderwerp, en het servicedocument voor 5 uur voegt hier niets toe. Het basisleerplan (II-Wis-d, pakket 1) heeft geen spreidingsdiagrammen: het leerplan B+ noemt ze uitdrukkelijk als extra tegenover het basisleerplan. Dat pakket 1 dit boek niet heeft, klopt dus. Beide hoofdstukken horen bij hetzelfde doel; het leerplan splitst het niet op.

Wat dat betekent voor het boek:

- **Trendlijn:** een wenk vraagt een informeel begrip met ICT, zonder inzicht in het rekenvoorschrift. Residuen en het criterium van de kleinste kwadraten (vroeger pakket 4-5, met `h1-residu`, `h1-o17`) en de bewijsopdracht over de som van de residuen (vroeger pakket 5, `h1-o25`) zijn daarom weg, in alle pakketten. Alle pakketten krijgen de omschrijving in woorden ("de rechte waarbij de punten samen het minst afwijken") die pakket 2-3 al hadden. In `h1-o19` (alle pakketten) heten de residuen nu "afwijkingen". Residuen, de kleinste kwadraten en de formule van $r$ komen in de 3de graad terug in Onderzoekscompetentie (hoofdstuk 2, vanaf nul opgebouwd), dus daar ontbreekt geen voorkennis.
- **Correlatiecoëfficiënt:** een wenk zegt dat de definitie niet bestudeerd moet worden, wel de waarde bepalen met ICT en interpreteren, tussen $-1$ en $1$, met de betekenis bij $-1$, $0$ en $1$ (bij $0$ kan er een ander verband zijn). Dat stond er al in. De formule van $r$ (vroeger pakket 5: subsectie, voorbeeld, `h2-formule`, `h2-o19`) is weg. De uitleg van het teken met de kwadranten blijft, zonder formule.
- **Samenhang met functieleer** (wenk): het doel kan terugkeren bij eerstegraadsfuncties, $f(x) = c/x$ en tweedegraadsfuncties. Tweedegraads zat er al in voor alle pakketten (remweg `h1-verband`, `h1-o12`, opgegooide bal `h2-o8`). Nieuw: een alinea in H2 dat een $r$ dicht bij $\pm 1$ geen lineair verband bewijst (remweg, $r = 0,98$), en voor pakket 3-5 de opdracht `h2-o24` (fietstocht, $t = 60/v$, $r = -0,96$). In B+ is $c/x$ een keuzedeel, daarom niet in pakket 2 (een school die dat keuzedeel kiest, kan `h2-o24` ook geven). De leerkrachtenversie van H2 vermeldt de wenk.
- **Verschillen per pakket:** omdat de vier leerplannen dezelfde tekst hebben, zijn de vroegere verschillen in diepgang weg. Het enige verschil is `h2-o24` (pakket 3-5, `pakketten: [3, 4, 5]`), naast het LPD-nummer in `\lkr`.

## Na te kijken

Beslist door het leerplan (zie hierboven): de afbakening (residuen en de kleinste kwadraten weg in 4-5, de formule van $r$ weg in 5), pakket 2 en 3 met dezelfde diepgang (en ook 4 en 5: één doel met dezelfde tekst), en de LPD per hoofdstuk (één doel voor beide hoofdstukken: 34, 36, 40, 40).

Open, want het leerplan beslist het niet (didactische keuzes):

- **Grenzen voor de sterkte.** Sterk vanaf $\lvert r\rvert = 0,8$, matig vanaf $0,5$, zwak daaronder: een afspraak van dit boek (in een kader, met de vermelding dat andere bronnen andere grenzen gebruiken). Het leerplan geeft geen grenzen, alleen "dicht bij". Kies de afspraak van de school.
- **ICT.** De stappen zijn in algemene termen beschreven (statistiekmodus voor twee variabelen, lineaire regressie, $y = ax + b$ of $y = a + bx$, een optie om $r$ te tonen, in een rekenblad een lineaire trendlijn en de functie CORRELATIE / CORREL). Niet getest op een concreet toestel; de leerkrachtenversie vraagt de knoppen van het schooltoestel te tonen.
- **Afronden.** Regressielijnen staan met twee cijfers na de komma, $r$ met twee. Waar een kleine rico de voorspelling bederft, vraagt de opgave vier cijfers (`h1-o22`, `h2-o6`) of een andere eenheid (de temperatuur per km in `h1-ict`). Antwoorden die met afgeronde coëfficiënten zijn uitgerekend, kunnen een eenheid in het laatste cijfer verschillen van wat ICT met alle cijfers geeft (in `h2-o24` staan beide).
- **Trendlijn op het oog.** De antwoorden geven één mogelijke rechte en een marge voor de rico; de leerkracht beoordeelt.
- **Bewust opgenomen, binnen een informeel begrip:** het gemiddelde punt als houvast (en de eigenschap dat de regressielijn erdoor gaat, zonder bewijs), de regressielijn van $x$ in functie van $y$ (`h1-o22`), de tijd vanaf een beginjaar bij een tijdreeks (`h1-o16`), een kleiner bereik geeft een kleinere $r$ (`h2-o20`), twee groepen die samen een schijnverband geven (`h2-o21`), het experiment met loting, en de uitleg van het teken van $r$ met de kwadranten. Het leerplan vraagt die niet uitdrukkelijk, maar sluit ze niet uit. Bewust weggelaten: $r^2$, niet-lineaire regressie (exponentieel, kwadratisch), de formules van de regressielijn en van $r$.
- **Voorkennis.** De eerstegraadsfunctie $y = mx + q$ (Functies) en het gemiddelde (Statistiek) worden kort herhaald waar ze nodig zijn; het boek veronderstelt Statistiek niet gezien. Eerstegraadsvergelijkingen worden gebruikt bij voorspellen in de omgekeerde richting. `h2-o24` (pakket 3-5) veronderstelt het hoofdstuk over $c/x$ niet: de opgave laat het product $v \cdot t$ berekenen.
- **Contexten met verzonnen getallen**, geen echte metingen: ijsjes, remwegen (ongeveer realistisch), temperatuur op een berg (ongeveer $-6$ °C per km), groei van een kind en een puppy, prijzen van wagens, appartementen en pizza's, de stadsloop, het clubrecord, een fietstocht.
- **Prenten.** `fiets.png` en `auto.png` zijn overgenomen uit Stelsels en Integralen (licentie daar nagekeken), zie `afbeeldingen/prenten/README.md`.
- **Opmaak.** Door de regel "elke sectie op een nieuwe pagina" blijven er een paar halflege pagina's over. Sectie 1.3 (De regressielijn) heeft nu één subsectie.

## Controle

Alle regressielijnen, gemiddelde punten en correlatiecoëfficiënten (ook `h2-o24` en de remweg in H2) zijn nagerekend met Python (numpy: kleinste kwadraten en `corrcoef`); de puntenwolken voor de figuren zijn met Python gemaakt met een gekozen $r$, en de vermelde $r$ is die van de afgeronde punten. De tellingen per kwadrant zijn nagegaan. Uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder, het gebruik in de klas, en de stappen op een concreet rekentoestel.
