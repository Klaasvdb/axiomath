# Statistiek: bron

Bron van het handboek Data en onzekerheid/Statistiek van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Alle gegevens zijn verzonnen (realistisch gekozen) en worden in de tekst ook zo voorgesteld. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Gegevens voorstellen | `hoofdstukken/01-gegevens-voorstellen.tex` | 1-5 |
| 2. Centrum- en spreidingsmaten | `hoofdstukken/02-centrum-en-spreiding.tex` | 1-5 |
| 3. Gegevens analyseren | `hoofdstukken/03-analyseren.tex` | 1-5 |

Inhoud: (1) soorten variabelen, frequentietabel met relatieve en cumulatieve frequentie, klassen, staafdiagram, cirkeldiagram, lijndiagram, histogram, stam-en-bladdiagram, mediaan, kwartielen, vijfgetallensamenvatting en boxplot; (2) gemiddelde (ook uit een frequentietabel en geschat bij klassen), mediaan en modus, gemiddelde of mediaan, variatiebreedte, interkwartielafstand, standaardafwijking (met een tabel en met het rekentoestel); (3) symmetrisch en scheef, gemiddelde tegenover mediaan, uitschieters, groepen vergelijken met boxplots, aantallen of percentages, de juiste maat kiezen, misleidende grafieken (as niet bij 0, oppervlakte en pictogrammen, ongelijke tijdas en gekozen periode, kritisch lezen).

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: `\xbar`, `\Me`, `\Mo`, `\IKA`, `\VB`, `\abs`; voor diagrammen in TikZ `\getalas`, `\frequentieas`, `\staaf`, `\balk` (histogram), `\boxplot`, `\uitschieter`, `\stip` (stippendiagram), `\sector` (cirkeldiagram) en `\turf`; verder `\gegevens` (een kleine tabel met gegevens), en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen.

## Afspraken

- **Kwartielen.** $Q_1$ en $Q_3$ zijn de mediaan van de onderste en de bovenste helft; bij een oneven aantal gegevens hoort de mediaan bij geen van beide helften. Dat is de afspraak van de TI-84 (`1-Var Stats`). De mediaan wordt gegeven als $\mathrm{Me}$, zoals op de voorkant.
- **Standaardafwijking.** $s$ deelt door $n$: de wortel uit het gemiddelde kwadraat van de afwijkingen. Op de TI-84 is dat $\sigma x$; de tekst zegt dat $Sx$ door $n - 1$ deelt en later bij steekproeven hoort, en noemt `STDEV.P` en `STDEV.S` van een rekenblad.
- **Klassen** zijn halfopen intervallen $[a, b[$; het gemiddelde bij klassen wordt geschat met de klassenmiddens.
- **Aansluiting bij de 3de graad.** De cursus Statistiek van de 3de graad begint bij populatie en steekproef, bias, en de normale verdeling, en veronderstelt het gemiddelde, de mediaan, de standaardafwijking $s$ van data, histogrammen en boxplots. Die staan hier; populatie, steekproef, bias, de normale verdeling en betrouwbaarheidsintervallen staan hier bewust niet.

## Verschillen per pakket

Alle pakketten hebben dezelfde drie hoofdstukken. De verschillen zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Standaardafwijking met de hand berekenen met een tabel (korte oefening, opdracht, testvraag); in pakket 1 met het rekentoestel, met hetzelfde id | | x | x | x | x |
| Histogram met ongelijke klassenbreedtes (opdracht h1-o22; pakket 1-3 krijgt in de plaats een opdracht over gegevens met dezelfde boxplot) | | | | x | x |
| Regel van $1,5 \cdot \mathrm{IKA}$ voor uitschieters en de aangepaste boxplot (theorie, voorbeeld, korte oefening, opdrachten, testvraag; pakket 1-3 herkent uitschieters op het zicht) | | | | x | x |
| Alle gegevens verschuiven en vermenigvuldigen ($a x + b$): effect op de maten, met een kort bewijs (subsectie, korte oefening, opdracht h2-o21) | | | | | x |

Het schema Fout? Herhaal kiest bij h2-t5 en h3-t3 het juiste voorbeeld met `\alleenvoor`.

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad, het voorstel van Klaas en de kennis van het leerplan. Na te kijken in het leerplan: of de standaardafwijking in pakket 1 (Basis) hoort (nu: alleen met het rekentoestel), of de regel van $1,5 \cdot \mathrm{IKA}$ in pakket 4-5 hoort of ook (of niet) elders, en of het stam-en-bladdiagram, het lijndiagram en de modale klasse gevraagd worden.
- **LPD per hoofdstuk.** De leerkrachtenversie zegt bij elk hoofdstuk het hele bereik (pakket 1: LPD 27-29, pakket 2: 31-33, pakket 3: 33-35, pakket 4 en 5: 37-39). Vermoedelijk hoort het eerste doel bij hoofdstuk 1, het tweede bij hoofdstuk 2 en het derde bij hoofdstuk 3, maar dat is niet nagekeken.
- **Kwartielen.** Rekentoestellen en programma's gebruiken verschillende afspraken: de TI-84 rekent zoals dit boek, Excel (`KWARTIEL`/`QUARTILE.INC`), GeoGebra en sommige Casio's kunnen bij weinig gegevens een iets ander $Q_1$ en $Q_3$ geven. Kies de afspraak van de vakgroep en zeg het aan de leerlingen.
- **Standaardafwijking met $n$ of $n - 1$.** Dit boek deelt door $n$ ($\sigma x$). Gebruikt de vakgroep $Sx$ (deling door $n - 1$), dan moeten de uitkomsten met $s$ in hoofdstuk 2 en 3 aangepast worden (en de definitie). De 3de graad gebruikt $s$ van de data zonder te zeggen welke.
- **Rekentoestel.** De uitleg gaat uit van de TI-84 (`STAT`, `CALC`, `1-Var Stats`). Werkt de school met een ander toestel, dan moet de subsectie "Met het rekentoestel" aangepast worden.
- **Bewust opgenomen, misschien buiten het leerplan:** het stam-en-bladdiagram en het rug-aan-rugdiagram (opdracht), procent en procentpunt, de paradox van Simpson (opdracht niveau 3), de gemiddelde snelheid (opdracht niveau 3), en in pakket 5 het effect van $a x + b$ op de maten.
- **Voorbeeld met de tandpasta** in hoofdstuk 3 raakt aan steekproefgrootte en vraagstelling; die komen in de 3de graad uitgebreid terug. Hier blijft het bij "weinig gegevens" en "wat was de vraag".
- **Getallen in contexten** (lonen, huizenprijzen, temperaturen, batterijduur, bezoekersaantallen) zijn verzonnen en niet aan echte bronnen getoetst.

## Controle

Alle centrum- en spreidingsmaten, kwartielen, frequenties, hoeken en percentages zijn nagerekend met een Python-script (mediaan en kwartielen volgens de afspraak hierboven, standaardafwijking met deling door $n$). Uitleg- en redeneervragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
