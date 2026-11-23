# Algemene functies: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 5 en 6 (met bewijzen voor LPD 4, het domein en het tekenverloop uit LPD 18, de transformaties voor LPD 9 en 14, en de samenstelling en de inverse voor LPD 21 en 12), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Algemene functies/](<../../../cursussen/Algemene functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan B+S' (24 nov 2026).** Afgeleid van de versie voor pakket 4 (PR #7): dezelfde drie hoofdstukken. Daarna afgestemd op het leerplan Wiskunde B+S' (KOV III-WisS'-d, versie oktober 2024), op dezelfde manier als pakket 1 op Basis: wat pakket 3 met pakket 1 deelt (LPD 5 en 6 zijn in Basis, B+S en B+S' dezelfde), staat in de bron in `\alleenvoor{1,2,3}`; wat in pakket 3 wegvalt, in `pakketten: [4]` in de YAML. Pakket 1 en 4 zijn daardoor niet veranderd (de `gen/`-bestanden zijn identiek).

| Hoofdstuk | Bestand | Leerplan B+S' | Status |
|---|---|---|---|
| 1. Functies en hun eigenschappen | `hoofdstukken/01-eigenschappen.tex` | LPD 5, 6 (en 4, 18) | eerste versie, afgestemd op B+S', nog na te lezen |
| 2. Transformaties van grafieken | `hoofdstukken/02-transformaties.tex` | voorbereiding op LPD 9 en 14 (en 18) | eerste versie, afgestemd op B+S', nog na te lezen |
| 3. Samenstellen en inverse functies | `hoofdstukken/03-samenstellen-inverse.tex` | voorbereiding op LPD 21 (kettingregel) en 12 (logaritmische functie) | eerste versie, afgestemd op B+S', nog na te lezen |

## Leerplan

- **Hoofdstuk 1 is de kern (LPD 5 en 6, "Grafisch onderzoek").** De doelen en wenken zijn dezelfde als in Basis en B+S: kenmerken op de grafiek lezen in een context (praktisch domein en bereik, nulwaarden, tekenverloop, stijgen, dalen en constant, extrema, toenemend en afnemend stijgen en dalen, symmetrie, snijpunt met de verticale as), en vergelijkingen en ongelijkheden grafisch oplossen met ICT, met de twee grafieken van $f$ en $g$. Het domein, het bereik en de tekentabel van breuken en wortels blijven voor LPD 18 (veelterm-, rationale en irrationale functies).
- **LPD 4 vraagt in B+S' uitdrukkelijk bewijsvoering** (tussenstappen verantwoorden, een bewijs reproduceren). Daarom blijven alle bewijzen en de opdrachten met bewijzen van pakket 4.
- **Hoofdstuk 2 (transformaties)** is geen eigen doel: LPD 9 (exponentiële functies) en LPD 14 (algemene sinusfunctie) gebruiken de transformaties, met ICT als wenk. In B+S' komen daar de cosinusfunctie (LPD 17) en de toepassingen uit de natuurwetenschappen bij (trillingen, wisselspanning); die horen bij Goniometrische functies.
- **Hoofdstuk 3:** de samenstelling is nodig voor de kettingregel (LPD 21), de inverse voor de logaritmische functie als inverse van $a^x$, met de spiegeling om $y = x$ (wenk bij LPD 12).
- **Wetenschappelijke toepassingen:** LPD 5 en 6 noemen in B+S' geen eigen samenhang met de natuurwetenschappen. De nieuwe opdrachten gebruiken wel zulke contexten: de hartslag tijdens een training (sportwetenschappen), het afkoelen van thee en een medicijn in het bloed.
- **Lestijden:** het leerplan noemt geen lestijden per doel of per rubriek.

## Wat er anders is dan in pakket 4

| Hoofdstuk | In pakket 3 weg | In pakket 3 herschreven of toegevoegd | Reden |
|---|---|---|---|
| 1 | Het Terug naar het probleem met kwadraat afsplitsen (vervangen); Koppel 2 (kwantoren, al weg); test 7 (symmetrie op een grafiek, ook getoetst in test 4 en de korte oefeningen) | Zoals in pakket 1: praktisch domein en praktisch bereik (tekst, Nu jij, korte oefening); constant op een interval; een inleidende zin bij stijgen aantonen met de definitie; subsectie "Hoe snel stijgt of daalt ze?" (toenemend en afnemend); sectie 1.4 "Vergelijkingen grafisch oplossen" met ICT, met het Terug naar het probleem daar; opdrachten hartslag tijdens een training, glazen vullen, twee koppen thee (ICT), medicijn in het bloed (ICT); tests 8 (grafisch oplossen met ICT) en 9 (toenemend en afnemend stijgen); de drill nulwaarden staat voor de hartslag. Test 7 viel weg en de drill werd verplaatst, zodat het schema Fout? Herhaal niet alleen op een pagina staat | LPD 5 en 6 met hun wenken (contexten zoals hartslag, praktisch domein en bereik, toenemend en afnemend stijgen, ICT, $f(x) = g(x)$ met twee grafieken, ongelijkheden) |
| 2 | Opdracht absolute waarde buiten en binnen | Uitleg met GeoGebra en schuifbalken in 2.4; opdracht met schuifbalken | Wenken bij LPD 9 en 14 (ICT, grafische betekenis, volgorde); $\lvert f(x) \rvert$ en $f(\lvert x \rvert)$ zijn geen transformaties uit LPD 9 of 14, en zo blijft het schema Fout? Herhaal bij de test |
| 3 | Koppel 3 (telproblemen, al weg) | Opdracht een inverse met ICT ($x^3 + x$) | LPD 6 (ICT) |

Aantallen in pakket 3 (korte oefeningen, opdrachten, Koppel, Test jezelf): hoofdstuk 1: 17, 30, 2, 8; hoofdstuk 2: 12, 24, 3, 7; hoofdstuk 3: 11, 25, 2, 7. Voorheen (zoals pakket 4, met de Koppel van pakket 3): 14, 26, 2, 7; 12, 24, 3, 7; 11, 24, 2, 7. Het handboek telt 64 pagina's (voorheen 60).

## Na te kijken

- **Hoofdstuk 1 is lang** (30 opdrachten, 8 testvragen): de leerstof van pakket 4 met de toevoegingen van LPD 5 en 6. Wie wil inkorten, kan het bereik algebraïsch berekenen of stijgen aantonen met de definitie weglaten, zoals in pakket 2.
- **Bewijzen:** B+S' vraagt bewijsvoering, maar noemt als voorbeelden vooral rekenregels (logaritmen, rijen, afgeleiden). Of alle zeven bewijzen per hoofdstuk nodig zijn, of een deel als uitbreiding kan, is niet nagekeken.
- **Koppel 1 (hoofdstuk 1) en Koppel 3 (hoofdstuk 2)** gebruiken het voorschrift van de Gausskromme; dat staat nu in Statistiek van pakket 3. Valt het daar weg, dan moeten die Koppel mee.
- **Wetenschappelijke contexten** zijn er nu vooral in de opdrachten. Een context uit de natuurwetenschappen bij het probleem of de voorbeelden (bv. een fysische grootheid in plaats van de fuif) is mogelijk, maar niet gedaan: dat zou ook pakket 4 veranderen.
- **ICT:** de werkwijzen noemen de TI-84 en GeoGebra; niet getest op een toestel.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Algemene-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Algemene-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Algemene-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Algemene-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Algemene-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Analyse/Algemene functies"
```

## Controle

De wiskunde is dezelfde als in de bronversie (pakket 4) en in pakket 1, en daar nagerekend (SymPy, NumPy, Python); er zijn geen nieuwe opgaven bijgekomen. Na het aanpassen (24 nov 2026) gebouwd zonder ongedefinieerde verwijzingen en zonder `??` in de PDF's; de `gen/`-bestanden van pakket 1 en 4 zijn identiek aan die van voor de aanpassing. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
