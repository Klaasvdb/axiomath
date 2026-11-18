# Statistiek: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 18-21 en K5, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Statistiek/](<../../../cursussen/Statistiek/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgeleide versie, afgestemd op Basis (18 nov 2026).** Afgeleid van de versie voor pakket 2 (PR #33), die via pakket 3 van pakket 4 (PR #5) komt. Daarna afgestemd op het leerplan Basis (KOV III-Wis-d, oktober 2024): LPD 18 (steekproeven), LPD 19 (samenhang en causaliteit), LPD 20 (normale verdeling als model), LPD 21 (kansen bij een normale verdeling) en keuzedoel K5 (betekenis van nulhypothese, alternatieve hypothese, significantieniveau en p-waarde). Wat alleen voor pakket 1 geldt, staat in de bron in `\alleenvoor{1}`; wat in pakket 1 wegvalt in `\begin{alleenvoor}{2,3,4}` of met `pakketten: [2, 3, 4]` in de YAML. Pakket 2, 3 en 4 zijn daardoor niet veranderd.

| Hoofdstuk | Bestand | Leerplan Basis | Status |
|---|---|---|---|
| 1. Steekproeven en samenhang | `hoofdstukken/01-steekproeven.tex` | LPD 18, 19 | eerste versie, afgestemd op Basis, nog na te lezen |
| 2. De normale verdeling | `hoofdstukken/02-normale-verdeling.tex` | LPD 20, 21 | eerste versie, afgestemd op Basis, nog na te lezen |
| 3. Hypothesetoetsen | `hoofdstukken/03-hypothesetoetsen.tex` | keuzedoel K5 | eerste versie, afgestemd op Basis, nog na te lezen |
| 4. Betrouwbaarheidsintervallen | `hoofdstukken/04-betrouwbaarheidsintervallen.tex` | geen doel in Basis: uitbreiding | eerste versie, afgestemd op Basis, nog na te lezen |

## Leerplan en keuzedoelen

- **Hoofdstuk 3 (hypothesetoetsen) is een keuzehoofdstuk.** In Basis is dit keuzedoel K5; verplicht wordt het pas in B+S (en in het leerplan Statistiek van Humane wetenschappen). De wenken leggen de nadruk op de betekenis van de begrippen, het interpreteren van een toets en een simulatie van de steekproevenverdeling; zelf toetsen opstellen is een extra (met ICT). Het boek zegt het nu ook aan de leerling (in de inleiding van het hoofdstuk) en in de leerkrachtennota.
- **Hoofdstuk 4 (betrouwbaarheidsintervallen) is een uitbreidingshoofdstuk.** TODO.md noemde het een keuzedoel in Basis, maar dat klopt niet: het leerplan Basis heeft er geen doel voor, ook geen keuzedoel (de keuzedoelen van Basis zijn K1 tot K5, en geen ervan gaat over betrouwbaarheidsintervallen). Alleen een extra-wenk bij LPD 18 noemt de foutenmarge. Keuzedoel K1 over betrouwbaarheidsintervallen is van pakket 4 (B+S''). Toch blijft het hoofdstuk in pakket 1, omdat `Handboeken/koepels.yaml` het gebruikt: als extra voor Humane wetenschappen en Freinetpedagogie, die ook het vak Statistiek hebben (KOV III-Sta-d, POV), en als keuze bij KOV Basis, telkens samen met hoofdstuk 3. Tot 18 nov zag de leerling niets daarvan; de leerkrachtennota noemde een niet-bestaand "keuzedoel K1". Nu zegt de inleiding van het hoofdstuk dat het een uitbreiding is, en de leerkrachtennota noemt geen LPD-nummer meer.
- **Geen binomiale verdeling, verwachtingswaarde of toevalsvariabelen als voorkennis.** Kansrekenen in pakket 1 houdt alleen LPD 17 (hoofdstuk 1 en 2). Statistiek steunt daar in pakket 1 niet meer op.

## Wat er anders is dan in pakket 4

| Hoofdstuk | In pakket 1 weg | In pakket 1 herschreven of toegevoegd | Reden |
|---|---|---|---|
| 1 | Koppel 1 (binomiale verdeling, E(p̂)) en Koppel 2 (regressierechte uit de 2de graad) | Korte uitleg van spreidingsdiagram en correlatiecoëfficiënt in 1.4.1, met drie diagrammen; Opwarmer zonder vraag over $r$; nieuwe Koppel (punaise: relatieve frequentie en kans); opdracht 22 zonder binomiale verdeling in de uitwerking | Spreidingsdiagrammen zitten niet in het basisleerplan van de 2de graad, en de wenk bij LPD 19 zegt dat ze geen voorkennis zijn; LPD 17 |
| 2 | Bewijzen van de kans op één waarde, symmetrie en top, buigpunten en standaardiseren; het voorschrift van de Gausskromme; de zin over integralen; opdracht over $P(-k < Z < k)$ (bewijs); Koppel 1 (tweede afgeleide) en Koppel 2 (binomiale benadering) | Definitie van de normale verdeling zonder voorschrift; uitleg van een buigpunt (kom en heuvel); verklarend argument bij een kans op één waarde en bij standaardiseren; Opwarmer zonder buigpunt; nieuwe Koppel (twee vulmachines in een boomdiagram) | LPD 20 en 21: grafische betekenis van $\mu$ en $\sigma$, kansen met ICT; geen afgeleiden, integralen of e-macht in Basis; LPD 17 |
| 3 | Binomiale steekproevenverdeling met bewijs; centrale limietstelling (subsectie, voorbeeld, korte oefening en opdracht); de controle met twee dobbelstenen (E en Var); bewijs van de kans op een fout van de eerste soort; opdrachten met `binomcdf` (staafdiagram, bijwerking, kritieke waarde, exact en benaderd, Anna en Bert) | Steekproevenverdeling van $\hat p$ en $\overline X$ zonder verwachtingswaarde en zonder bewijs, met een controle aan de simulatie van hoofdstuk 1; Verken met een gesimuleerde reeks van 1000 x 60 worpen (staafdiagram); nieuwe korte oefening met gesimuleerde steekproefgemiddelden; toetsen voor een proportie met de normale benadering van $\hat p$ (voorbeelden 5 en 7, korte oefeningen, opdrachten en testvragen met andere getallen waar nodig); twee soorten fouten met een gemiddelde (zakken rijst, broden, suiker) in plaats van munten; Terug naar het probleem met een boomdiagram; Koppel met kruistabel in plaats van Bayes; keuzehoofdstuk vermeld | K5 en zijn wenken (betekenis, interpretatie, simulatie, extra: toetsen met ICT); LPD 17 (geen combinaties, geen Bayes); LPD 21 (normale kansen met ICT) |
| 4 | Koppel 2 (binomiale verdeling, verwachtingswaarde) | Vermelding als uitbreidingshoofdstuk (inleiding en leerkrachtennota); opdracht 17 en een opdracht over 30 intervallen zonder binomiale verdeling in de uitwerking. Het hoofdstuk steunt op wat 3.1 in pakket 1 heeft: $\sigma(\hat p)$ en $\sigma/\sqrt n$ zonder bewijs en de normale benadering, geen centrale limietstelling | geen doel in Basis; LPD 17 |

Aantallen in pakket 1 (korte oefeningen, opdrachten, Koppel, Test jezelf): hoofdstuk 1: 10, 26, 1, 7; hoofdstuk 2: 10, 25, 1, 8; hoofdstuk 3: 12, 20, 1, 7; hoofdstuk 4: 8, 26, 1, 7. In pakket 4: 10, 26, 2, 7; 10, 26, 2, 8; 13, 26, 2, 7; 8, 26, 2, 7.

## Na te kijken

- **De p-waarden in hoofdstuk 3** komen uit de normale benadering van $\hat p$ zonder continuïteitscorrectie. Die zijn iets kleiner dan de exacte binomiale (bv. 0,007 tegenover 0,013 bij 30 zessen in 120 worpen). De getallen zijn zo gekozen dat het besluit bij beide gelijk is (nagerekend), maar een leerkracht die met de binomiale verdeling narekent, vindt andere getallen. Alternatief: p-waarden alleen uit een simulatie, zonder formule voor $\sigma(\hat p)$.
- **Hoeveel van hoofdstuk 3 blijft?** K5 vraagt vooral de betekenis van de begrippen; zelf toetsen is een extra. Het hoofdstuk laat leerlingen nog steeds toetsen uitvoeren met `normalcdf`, en houdt eenzijdig/tweezijdig en de twee soorten fouten met hun kansen. Een school die K5 kiest met weinig tijd, kan 3.3 en 3.4.3 overslaan.
- **Extra-wenken die blijven staan:** gestratificeerde en getrapte steekproeven (extra bij LPD 18; het probleem van hoofdstuk 1 steunt erop) en z-scores (extra bij LPD 20; nodig om een onbekend gemiddelde te zoeken in het probleem van hoofdstuk 2). Ze zijn niet verplicht in Basis.
- **Omvang:** het leerplan geeft geen lestijden per doel. Het boek telt 73 pagina's (voorheen 74): wat in hoofdstuk 2 en 3 wegviel, is grotendeels vervangen door uitleg die Basis nodig heeft. Een school die hoofdstuk 3 en 4 niet kiest, gebruikt er 40. De opdrachten in hoofdstuk 1, 2 en 4 zijn bijna niet ingekort.
- Hoofdstuk 4 houdt zijn bewijzen (de betrouwbaarheid van de methode via standaardiseren, $p(1-p) \leqslant \frac14$ met kwadraatafsplitsing) en opdracht 20 (een bewijs): ze gebruiken niets wat in pakket 1 wegviel, maar zijn formeler dan de rest van Basis.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "1/Data en onzekerheid/Statistiek"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). De nieuwe getallen voor pakket 1 (normale benadering van p̂, fouten bij een gemiddelde, de simulaties en de correlatiecoëfficiënten van de drie spreidingsdiagrammen) zijn op 18 nov 2026 nagerekend in Python, met de exacte binomiale p-waarde ernaast om het besluit te vergelijken. Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
