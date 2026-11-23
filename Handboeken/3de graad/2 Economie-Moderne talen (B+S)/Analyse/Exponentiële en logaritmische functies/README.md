# Exponentiële en logaritmische functies: handboek (pakket 2)

Cursus voor pakket 2 (B+S), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Exponentiële en logaritmische functies/](<../../../cursussen/Exponentiële en logaritmische functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S, III-WisS-d (versie oktober 2024), rubriek Analyse, deelrubriek Exponentiële en logaritmische functies: LPD 7-12, met LPD 6 (vergelijkingen grafisch oplossen met ICT) en LPD 4 (extra: bewijzen). Het leerplan geeft geen lestijden per rubriek.

**Afgestemd op B+S** (24 nov 2026). De versie kwam via pakket 3 (PR #15) van pakket 4 (PR #8). Ze is nu afgestemd op het leerplan: wat buiten LPD 7-12 valt, staat in `\alleenvoor{4}`; wat B+S vraagt en pakket 4 niet had, komt uit de versie voor pakket 1 (die al op LPD 6-10 en het keuzedoel K1 afgestemd was; K1 van Basis is LPD 12 van dit leerplan). Pakket 1 en 4 zijn ongewijzigd.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Exponentiële functies | `hoofdstukken/01-exponentiele-functies.tex` | LPD 6-10 (sectie 1.4 buiten het leerplan, zie onder) | afgestemd, na te lezen |
| 2. Logaritmen | `hoofdstukken/02-logaritmen.tex` | LPD 7, 11 | afgestemd, na te lezen |
| 3. Logaritmische functies | `hoofdstukken/03-logaritmische-functies.tex` | LPD 12 | afgestemd, na te lezen |

### Verschil met pakket 4

| Hoofdstuk | Valt weg in pakket 2 | Herschreven of toegevoegd in pakket 2 |
|---|---|---|
| 1 | Horizontale verschuivingen (LPD 9 vraagt alleen $k \cdot f(x)$ en $f(x) + k$): voorbeeld $2^{x + 1} - 3$ | Nieuw onderdeel "Toenemend en afnemend" met gedrag op oneindig, nulwaarden en de invloed van het grondtal met ICT (LPD 8), twee korte oefeningen; "Uitrekken en verschuiven" met $b \cdot a^x + c$ (LPD 9), voorbeeld $2 \cdot 3^x - 6$ en werkwijze, de transformaties als voorkennis uit Algemene functies (geen theoriekader), en een alinea over verticale uitrekking als horizontale verschuiving (wenk LPD 9); vergelijkingen grafisch oplossen met ICT (LPD 6) met een voorbeeld, een korte oefening en testvraag t8; varianten zonder horizontale verschuiving van h1-k-grafiek, o4 en t3 (die van pakket 1) |
| 2 | niets | Alleen de leerplanverwijzing |
| 3 | Domein van samengestelde functies; transformaties van logaritmische grafieken; secties 3.2 (logaritmische vergelijkingen) en 3.3 (ongelijkheden): niet in LPD 7-12. Opdrachten weg: o1-o6, o12, o14, o15, o17, o18, o22, o23, o26; test t4-t6 | Afnemend stijgend en afnemend dalend, gedrag op oneindig en nulwaarde (LPD 12), met voorbeeld 2 over $\log_{\frac12} x$; "Terug naar het probleem" aan het einde van sectie 3.1, met $\log_2(N + 1)$ in plaats van een ongelijkheid, en een korte oefening over het raadspel; de versies van pakket 1 van de Start, h3-grafiek, o19, o20, o21, o8 (een vergelijking in plaats van een ongelijkheid) en test t1-t3, t7. De bewijzen en $\ln$ blijven, anders dan in pakket 1 |

Aantallen in pakket 2 (start, kort, opdrachten, koppel, test), voor en na: hoofdstuk 1: 2, 18, 27, 3, 7 werd 2, 21, 27, 3, 8; hoofdstuk 2: 2, 19, 28, 2, 8 werd 2, 19, 28, 2, 8; hoofdstuk 3: 2, 12, 27, 3, 7 werd 2, 3, 13, 3, 4. Het handboek telt 58 pagina's (was 66).

### Wat blijft, anders dan in pakket 1

- **Bewijzen** van de rekenregels voor machten en logaritmen en van stijgen en dalen: extra bij LPD 4, dat de rekenregels voor logaritmen uitdrukkelijk als voorbeeld noemt.
- **Rekenen met letters** (extra bij LPD 7) en **logaritmische schalen** (extra bij LPD 7, met de wet van Weber-Fechner).
- **Vergelijkingen met machten van een ander grondtal** ($4^{x + 1} = 8^x$, $2^{x + 1} = 3^x$): ze zijn met de rekenregels te herleiden tot $b \cdot a^x = c$ (LPD 11).

### Na te kijken

- **Het getal $\e$ en $\ln$.** Sectie 1.4 (het getal $\e$, continue groei) en de natuurlijke logaritme staan niet in LPD 7-12: het leerplan voert $\e$ in bij de afgeleiden (wenk bij LPD 20). Ze blijven, omdat de cursus Afgeleiden in dit pakket $\e$ (als limiet van $\bigl(1 + \frac1n\bigr)^n$) en $\ln$ als voorkennis gebruikt. Voert Afgeleiden ze zelf in, dan kunnen sectie 1.4, h1-e, h1-k-e, h1-o8, h1-o23, h1-o24, h1-t6 en het rekenen met $\ln$ in hoofdstuk 2 hier weg (voor $\ln$ zijn er al varianten met $\log$, die van pakket 1).
- **Vergelijkingen met een ander grondtal in beide leden** (voorbeeld 13 en h1-k-tweekanten, voorbeeld $2^{x + 1} = 3^x$, h1-t2 en h2-t6) blijven als herleidbaar tot $b \cdot a^x = c$. Het leerplan noemt alleen die vorm; te bekijken of ze weg moeten zoals in pakket 1.
- **Opdrachten van niveau 3** met substitutie ($4^x - 6 \cdot 2^x + 8 = 0$, h1-o26, h2-o8, h2-o27) gaan verder dan LPD 11. Ze bleven als uitdaging.
- **Hoofdstuk 3 is kort** (3 korte oefeningen, 13 opdrachten, 4 testvragen), zoals in pakket 1. De logaritmische vergelijkingen en ongelijkheden vallen weg; ongelijkheden lossen leerlingen grafisch op (LPD 6, opdracht o19).
- **ICT:** de tekst noemt de TI-84 (`intersect`), zoals in pakket 1.
- De wiskunde van de gedeelde en de overgenomen stukken is nagerekend (in de bronversie en voor pakket 1). Nog niet nagelezen door een leerkracht.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Exponentiele-en-logaritmische-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Exponentiele-en-logaritmische-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Exponentiele-en-logaritmische-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Exponentiele-en-logaritmische-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Exponentiele-en-logaritmische-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Analyse/Exponentiële en logaritmische functies"
```

## Controle

Gebouwd zonder ongedefinieerde verwijzingen of `??`; pakket 1 en 4 geven dezelfde `gen/`-bestanden als voor de aanpassing. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
