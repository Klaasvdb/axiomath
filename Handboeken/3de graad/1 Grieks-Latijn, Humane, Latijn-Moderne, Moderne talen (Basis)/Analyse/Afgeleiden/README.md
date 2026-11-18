# Afgeleiden: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 14-15, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Afgeleiden/](<../../../cursussen/Afgeleiden/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op Basis (november 2026).** De bron is dezelfde als voor pakket 2 en 3 (pakket 4 gebruikt de aparte cursus Limieten en afgeleiden). Pakket 1 krijgt twee van de vier hoofdstukken, en daarin is weggelaten of herschreven wat buiten LPD 14-15 valt. Het leerplan Basis vraagt een intuïtief limietbegrip, de afgeleide benaderen met een tabel (ICT), contexten en het grafische verband tussen $f$ en $f'$; algebraïsch afleiden komt alleen voor als uitbreiding bij LPD 15, voor eerste- en tweedegraadsfuncties. Het leerplan geeft geen lestijden per doel.

| Hoofdstuk in pakket 1 | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De afgeleide | `hoofdstukken/02-afgeleide.tex` | LPD 14, begin LPD 15 | afgestemd op Basis, na te lezen |
| 2. Toepassingen van afgeleiden | `hoofdstukken/04-toepassingen.tex` | LPD 15 (met LPD 2, 5, 6) | afgestemd op Basis, na te lezen |

Weggelaten in `handboek.tex`: `01-limieten` (formele limieten, rekenregels, asymptoten, continuïteit, tussenwaardestelling) en `03-kettingregel` (kettingregel, afgeleiden van sin, e^x, ln). Geen andere cursus van pakket 1 en `Handboeken/koepels.yaml` verwijzen naar die hoofdstukken.

### Verschil met pakket 2 en 3

| Hoofdstuk | Weg in pakket 1 | Herschreven of toegevoegd voor pakket 1 (reden) |
|---|---|---|
| De afgeleide | de verwijzingen naar hoofdstuk 1 en 3; $(\frac1x)'$ met de definitie; de regels voor constante, $x^n$ en $x^r$ (met binomium); de sectie Afleidbaar en continu; de sectie Rekenregels (veelvoud, som, product, quotiënt) met de oude Terug naar het probleem; Koppel met Integralen en Rationale functies | informele uitleg van $\lim_{h \to 0}$ en een tabel van differentiequotiënten met ICT (voorbeeld $2^x$, werkwijze TI-84/GeoGebra; wenk LPD 14); flitspaal tegenover trajectcontrole (wenk LPD 14); De afgeleide in een context: eenheid, debiet, marginale kost, helling (wenk LPD 14); Terug naar het probleem met een tabel en een controle uit de vorm van het glas; afgeleide van een eerste- en tweedegraadsfunctie met bewijs uit de definitie (uitbreiding LPD 15); De grafiek van $f'$ schetsen, met een hoogteprofiel zonder voorschrift en ICT (wenk LPD 15); Koppel met $2^x$ en $\sin x$ (ICT) |
| Toepassingen van afgeleiden | de bewijzen van Extremum en afgeleide en van Tekenwissel (steunen op limieten en continuïteit); functies met $\e^x$, $\ln x$; de sectie Holheid en buigpunten (tweede afgeleide); Koppel met Rationale functies en de logistische groei | de afgeleide komt uit de grafiek van $f'$ met ICT of exact bij tweedegraadsfuncties (voorbeelden $x^3 - 3x$, geen extremum, grootste waarde op een interval, blik, Terug naar het probleem); nieuw: Van de grafiek van $f'$ naar $f$ (wenk LPD 15); Koppel met de normale verdeling via ICT (steilste plaatsen in $\mu \pm \sigma$) |

Oefeningen met een eigen versie voor pakket 1 hebben hetzelfde `id` met `pakketten: [1]`, en de versie voor pakket 2 en 3 kreeg `pakketten: [2, 3]`. Wat in pakket 1 wegvalt, kreeg ook `pakketten: [2, 3]`. De gegenereerde bestanden van pakket 2 en 3 zijn ongewijzigd.

Aantallen in pakket 1:

| Hoofdstuk | Voorbeelden | Start | Korte oefeningen | Opdrachten (niv. 1/2/3) | Koppel | Test jezelf |
|---|---|---|---|---|---|---|
| 1. De afgeleide | 10 | 2 | 9 | 15 (6/7/2) | 2 | 7 |
| 2. Toepassingen van afgeleiden | 8 | 2 | 6 | 13 (5/6/2) | 1 | 6 |

Het handboek telt nu 29 pagina's (was 91), de leerkrachtenversie 34 (was 97), de zelfstudieversie 34 (was 101).

### Na te kijken

- **Uitbreiding of kern?** De afgeleide van $ax^2 + bx + c$ (uit de definitie) is een uitbreiding bij LPD 15, maar veel opgaven steunen erop (snelheid, marginale kost, raaklijnen aan een parabool, de weide, de tuin). Wie ze schrapt, houdt vooral de tabel, de grafiek en ICT over.
- **Optimaliseren** (sectie 2.2) en **grootste en kleinste waarde op een interval** staan niet letterlijk in LPD 14-15. Ze zijn gebleven als toepassing (LPD 2, 5 en 6) en omdat het probleem van de windturbine erop steunt. Ze kunnen weg als de tijd te krap is.
- **ICT-instructies**: `TBLSET` op `Ask`, `2nd CALC 6:dy/dx`, `nDeriv(Y1,X,X)` op de TI-84 en `f'(x)` in GeoGebra. Kijk na of ze passen bij het toestel en de versie van de school.
- **Exact of benaderd**: in Terug naar het probleem van hoofdstuk 2 geeft ICT de nulwaarde $0{,}3333$, en de tekst zegt "wellicht $\frac13$". Exact bewijzen kan pas met de rekenregels.
- Het kader **ogenblikkelijke verandering** (met de eenheid) is nieuw: is het theorie of uitleg?
- **Koppel** veronderstelt Exponentiële en logaritmische functies, Goniometrische functies (radialen) en Statistiek (normale verdeling); het pakket legt de volgorde niet vast.
- Buiten deze map: de regel over Afgeleiden in de README van pakket 1 noemt nog `4 hoofdstukken`.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Afgeleiden-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Afgeleiden-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Afgeleiden-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Afgeleiden-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Afgeleiden-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "1/Analyse/Afgeleiden"
```

## Controle

De wiskunde die pakket 1 met pakket 2 en 3 deelt, is in de bronversie nagerekend (SymPy, NumPy). De nieuwe tabellen van differentiequotiënten en de ICT-uitkomsten van pakket 1 (onder meer $2^x$, $3\sqrt[3]{t}$, $1{,}5^x$, $8t \cdot 0{,}7^t$, de doos, de vrachtwagen, het blik en de klokkromme) zijn met Python nagerekend. Gebouwd voor pakket 1, 2 en 3 zonder ongedefinieerde verwijzingen en zonder `??`; de bestanden in `gen/` van pakket 2 en 3 zijn byte voor byte dezelfde als vóór de aanpassing. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
