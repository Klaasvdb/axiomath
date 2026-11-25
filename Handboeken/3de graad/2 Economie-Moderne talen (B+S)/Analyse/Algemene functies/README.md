# Algemene functies: handboek (pakket 2)

Cursus voor pakket 2 (B+S), LPD 5 en 6 (met het domein en het tekenverloop uit LPD 17, de transformaties voor LPD 9 en 14, en de samenstelling en de inverse voor LPD 20 en 12), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Algemene functies/](<../../../cursussen/Algemene functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan B+S (24 nov 2026).** Afgeleid van de versie voor pakket 3 (PR #14), die van pakket 4 (PR #7) komt. Daarna afgestemd op het leerplan Wiskunde B+S (KOV III-WisS-d, versie oktober 2024), op dezelfde manier als pakket 1 op Basis: wat in pakket 2 wegvalt, staat in de bron in `\begin{alleenvoor}{3,4}` (of `pakketten: [3, 4]` in de YAML); wat pakket 2 met pakket 1 deelt, in `\alleenvoor{1,2}` of `{1,2,3}`. Pakket 1 en 4 zijn daardoor niet veranderd (de `gen/`-bestanden zijn identiek).

| Hoofdstuk | Bestand | Leerplan B+S | Status |
|---|---|---|---|
| 1. Functies en hun eigenschappen | `hoofdstukken/01-eigenschappen.tex` | LPD 5, 6 (en 4, 17) | eerste versie, afgestemd op B+S, nog na te lezen |
| 2. Transformaties van grafieken | `hoofdstukken/02-transformaties.tex` | voorbereiding op LPD 9 en 14 (en 17) | eerste versie, afgestemd op B+S, nog na te lezen |
| 3. Samenstellen en inverse functies | `hoofdstukken/03-samenstellen-inverse.tex` | voorbereiding op LPD 20 (kettingregel) en 12 (logaritmische functie) | eerste versie, afgestemd op B+S, nog na te lezen |

## Leerplan

- **Hoofdstuk 1 is de kern (LPD 5 en 6, "Grafisch onderzoek").** De doelen en wenken zijn dezelfde als in Basis: kenmerken op de grafiek lezen in een context (praktisch domein en bereik, nulwaarden, tekenverloop, stijgen, dalen en constant, extrema, toenemend en afnemend stijgen en dalen, symmetrie, snijpunt met de verticale as), en vergelijkingen en ongelijkheden grafisch oplossen met ICT, met de twee grafieken van $f$ en $g$ in plaats van de verschilfunctie. Het domein en de tekentabel van breuken en wortels blijven, omdat LPD 17 (veelterm-, rationale en irrationale functies: domein, nulwaarden, tekenverloop) ze vraagt; de cursus Rationale functies bouwt erop voort.
- **Hoofdstuk 2 (transformaties)** is geen eigen doel. LPD 9 (exponentiële functies: $f(x) + k$ en $k \cdot f(x)$) en LPD 14 (algemene sinusfunctie: $f(x) + k$, $f(x - k)$, $f(x/k)$, $k \cdot f(x)$) gebruiken de transformaties, met als wenk ICT, de grafische betekenis en de volgorde. De verschoven $\sqrt{x}$ en $\frac1x$ bereiden de elementaire irrationale en homografische functies van LPD 17 voor.
- **Hoofdstuk 3:** de samenstelling is nodig voor de kettingregel (LPD 20), de inverse voor de logaritmische functie als inverse van $a^x$, met de spiegeling om $y = x$ (wenk bij LPD 12).
- **LPD 4 (beargumenteren):** bewijsvoering is in B+S alleen een extra. Daarom zonder bewijzen: een verklarend argument in plaats van een bewijs, zoals in pakket 1.
- **Lestijden:** het leerplan noemt geen lestijden per doel of per rubriek.

## Wat er anders is dan in pakket 4

| Hoofdstuk | In pakket 2 weg | In pakket 2 herschreven of toegevoegd | Reden |
|---|---|---|---|
| 1 | Alle bewijzen (zeven); het bereik algebraïsch berekenen (uitleg, voorbeeld, werkwijze, korte oefening, opdracht "bereik berekenen"); stijgen en dalen aantonen met de definitie (voorbeeld, werkwijze, Nu jij, korte oefening); de uitleg na de stelling over het teken tussen twee nulwaarden; opdrachten met bewijzen (som en product, stijgend met de definitie, even plus oneven, symmetrie en verloop, som en product van stijgende functies); het Terug naar het probleem met kwadraat afsplitsen (vervangen); Koppel 2 (kwantoren, al weg); test 7 (symmetrie op een grafiek, ook getoetst in test 4 en de korte oefeningen) | Zoals in pakket 1: praktisch domein en praktisch bereik (tekst, Nu jij, korte oefening), een zin die naar het domein van breuken en wortels leidt; verklarend argument met de grafiek voor "één proefgetal per interval" (naast de stelling, zonder bewijs) en voor "oneven functie in 0"; constant op een interval; subsectie "Hoe snel stijgt of daalt ze?" (toenemend en afnemend); sectie 1.4 "Vergelijkingen grafisch oplossen" met ICT, met het Terug naar het probleem daar; opdrachten hartslag tijdens een training, glazen vullen, twee koppen thee (ICT), medicijn in het bloed (ICT); tests 8 (grafisch oplossen met ICT) en 9 (toenemend en afnemend stijgen); de drill nulwaarden staat in pakket 2 en 3 voor de hartslag. Test 7 viel weg en de drill werd verplaatst, zodat het schema Fout? Herhaal niet alleen op een pagina staat | LPD 5 en 6 met hun wenken (contexten zoals hartslag, praktisch domein en bereik, toenemend en afnemend stijgen, ICT, $f(x) = g(x)$ met twee grafieken, ongelijkheden); LPD 4 (bewijs alleen extra); LPD 17 (domein en tekenverloop van rationale en irrationale functies) |
| 2 | Alle bewijzen (zeven); opdrachten symmetrie na een transformatie, symmetrie na verschuiven, alle parabolen gelijkvormig, absolute waarde buiten en binnen | Uitleg met GeoGebra en schuifbalken in 2.4; opdracht met schuifbalken | Wenken bij LPD 9 en 14 (ICT, grafische betekenis, volgorde); LPD 4; $\lvert f(x) \rvert$ en $f(\lvert x \rvert)$ zijn geen transformaties uit LPD 9 of 14 |
| 3 | Alle bewijzen (vijf); het voorbeeld injectief met een bewijs (vervangen); opdrachten inverse van een homografische functie (met het algemene bewijs), inverse van een samenstelling, snijpunten van $f$ en $\inv{f}$, injectief bewijzen | Voorbeeld injectief met de top van de parabool; verklarend argument voor de spiegeling om $y = x$, met de link naar de logaritmische functie; opdracht een inverse met ICT ($x^3 + x$) | LPD 4; wenk bij LPD 12; LPD 6 (ICT). De samenstelling blijft voor de kettingregel (LPD 20) |

Aantallen in pakket 2 (korte oefeningen, opdrachten, Koppel, Test jezelf): hoofdstuk 1: 15, 24, 2, 8; hoofdstuk 2: 12, 21, 3, 7; hoofdstuk 3: 11, 21, 2, 7. Voorheen (zoals pakket 4, met de Koppel van pakket 2): 14, 26, 2, 7; 12, 24, 3, 7; 11, 24, 2, 7. Het handboek telt 58 pagina's (voorheen 60).

## Na te kijken

- **Domein, tekentabel en even of oneven met breuken en wortels** blijven in hoofdstuk 1 (LPD 17). Of ze hier of pas in Rationale functies horen, is een keuze van de school; de cursus Rationale functies van pakket 2 is niet mee nagekeken.
- **Hoofdstuk 3 blijft vrij algebraïsch** (domein van een samenstelling, inverse van $\sqrt{x - 1}$, $3 - \frac1x$, domein beperken). LPD 20 vraagt alleen de kettingregel, LPD 12 alleen de logaritme als inverse van $a^x$. De opdrachten "zijn eigen inverse" en "ontbinden op meer manieren" (met één abstracte deelvraag) blijven als uitdaging.
- **Koppel 1 (hoofdstuk 1) en Koppel 3 (hoofdstuk 2)** gebruiken het voorschrift van de Gausskromme; dat staat nu in Statistiek van pakket 2. Valt het daar weg, dan moeten die Koppel mee.
- **Bewijzen als extra:** een school die de extra bij LPD 4 (bewijsvoering) wil doen, vindt de bewijzen in pakket 3 en 4.
- **Bijna lege pagina's** aan het einde van sectie 2.2 en 2.3 (elke sectie begint op een nieuwe pagina): dezelfde als in pakket 1.
- **ICT:** de werkwijzen noemen de TI-84 en GeoGebra; niet getest op een toestel.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Algemene-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Algemene-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Algemene-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Algemene-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Algemene-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Analyse/Algemene functies"
```

## Controle

De wiskunde is dezelfde als in de bronversie (pakket 4) en in pakket 1, en daar nagerekend (SymPy, NumPy, Python); er zijn geen nieuwe opgaven bijgekomen. Na het aanpassen (24 nov 2026) gebouwd zonder ongedefinieerde verwijzingen en zonder `??` in de PDF's; de `gen/`-bestanden van pakket 1 en 4 zijn identiek aan die van voor de aanpassing. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
