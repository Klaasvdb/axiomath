# Afgeleiden: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor pakket 1, 2 en 3 in [cursussen/Afgeleiden/](<../../../cursussen/Afgeleiden/>) (pakket 4 gebruikt de aparte cursus Limieten en afgeleiden). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S', III-WisS'-d (versie oktober 2024), rubriek Analyse, deelrubriek Afgeleiden: LPD 19-22, met LPD 3 (ICT), LPD 4 (bewijsvoering hoort bij het doel) en de wenk bij LPD 18 (toenemend en afnemend stijgen en dalen met afgeleiden). Samenhang met kinematica (snelheid, versnelling). Het leerplan geeft geen lestijden per rubriek.

**Afgestemd op B+S'** (24 nov 2026). De vorige versie had de vier hoofdstukken van Limieten en afgeleiden (pakket 4). Het leerplan vraagt een intuïtief limietbegrip (wenk bij LPD 19), de afgeleiden van sinus en cosinus met een grafische verantwoording (wenk bij LPD 21), en geen tangensfunctie (die staat niet in LPD 13-17). Wat B+S' met Basis deelt, komt uit de versie voor pakket 1. Anders dan in pakket 2 blijven de bewijzen; ze steunen niet meer op continuïteit. Pakket 1 en 4 zijn ongewijzigd.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De afgeleide | `hoofdstukken/02-afgeleide.tex` | LPD 19, 20, begin van LPD 21 | afgestemd, na te lezen |
| 2. De kettingregel | `hoofdstukken/03-kettingregel.tex` | LPD 21 | afgestemd, na te lezen |
| 3. Toepassingen van afgeleiden | `hoofdstukken/04-toepassingen.tex` | LPD 22, met LPD 20 en de wenk bij LPD 18 | afgestemd, na te lezen |

Weggelaten in `handboek.tex`: `01-limieten` (limieten met $\varepsilon$ en $\delta$, rekenregels voor limieten, asymptoten als limiet, continuïteit, tussenwaardestelling): een informeel limietbegrip volstaat (wenk bij LPD 19). Geen andere cursus van pakket 3 verwijst naar dat hoofdstuk, maar de leerkrachtennota van Rationale functies (hoofdstuk 2) zegt nog dat limieten in Afgeleiden komen. `Handboeken/koepels.yaml` hoeft niet te veranderen.

### Verschil met de vorige versie (de leerstof van pakket 4)

| Hoofdstuk | Valt weg in pakket 3 | Herschreven of toegevoegd in pakket 3 (reden) |
|---|---|---|
| 1. De afgeleide | de verwijzingen naar het hoofdstuk over limieten; de sectie Afleidbaar en continu (voorbeeld $\lvert x \rvert$, h2-knik, testvraag t8); h2-o28 (continu maar niet afleidbaar) | zoals in pakket 2: een informele uitleg van $\lim_{h \to 0}$ met een tabel van differentiequotiënten (ICT, voorbeeld $2^x$, h2-tabel; wenk LPD 19), flitspaal tegenover trajectcontrole, De afgeleide in een context (wenk LPD 19), De grafiek van $f'$ schetsen (LPD 20), h2-o19 en h2-o9 zonder continuïteit, testvragen t9 en t10. De bewijzen van de rekenregels blijven (LPD 4); in de product- en quotiëntregel volgt $g(x + h) \to g(x)$ nu uit het differentiequotiënt in plaats van uit continuïteit, en de somregel steunt niet meer op de rekenregels voor limieten |
| 2. De kettingregel | de tangensfunctie: de subsectie Afgeleide van de tangens (voorbeeld $\tan 2x$), h3-o7, de rij in het overzicht, de tan-delen van h3-gonio, h3-gonio2, h3-o10 (vervangen door $\cos$ en $\sin$), h3-o25 (deel c) en h3-o26 (boogtangens); het bewijs van $\lim_{h \to 0} \frac{\sin h}{h} = 1$ met de oppervlakte van een cirkelsector (die valt weg in Goniometrische functies) en het rekenen met die limiet (voorbeeld $\frac{\sin 3h}{h}$, h3-sinlim) | de limiet van $\frac{\sin h}{h}$ aannemelijk gemaakt met een tabel en een figuur (boog en verticale lijnstuk); een zin met ICT bij de afgeleide van de sinus: de hellingsgrafiek valt samen met de cosinus (wenk LPD 21); het bewijs met de somformule blijft (Goniometrische functies houdt die in pakket 3). Het getal $\e$ wordt hier ingevoerd zoals in pakket 2 (wenk LPD 21), met een kort bewijs van $(\e^x)' = \e^x$ uit die definitie; $\ln x = \log_\e x$; de Start rekent met $\log_2$ en $\log_3$ |
| 3. Toepassingen van afgeleiden | continuïteit in de stelling over de tekenwissel en bij de grootste waarde op een interval | de bewijzen van Tekenwissel en Buigpunt zonder continuïteit; nieuw: Van de grafiek van $f'$ naar $f$ (uit pakket 1; LPD 20), met testvraag t5 die naar dat voorbeeld verwijst; h4-o22 lost $\cos x = \sin x$ op zonder $\tan x = 1$ |

De leerplanverwijzingen stonden als "LPD 19-22" bij elk hoofdstuk; ze noemen nu per hoofdstuk de doelen.

Aantallen in pakket 3 (voorbeelden, Start, korte oefeningen, opdrachten met niveau 1/2/3, Koppel, Test jezelf):

| Hoofdstuk | Voor | Na |
|---|---|---|
| Limieten en continuïteit | 18, 2, 19, 28 (9/13/6), 3, 8 | weggelaten |
| De afgeleide | 16, 2, 15, 27 (9/12/6), 2, 8 | 18, 2, 17, 26 (9/12/5), 2, 9 |
| De kettingregel | 16, 2, 15, 28 (10/12/6), 3, 8 | 14, 2, 14, 27 (10/12/5), 3, 8 |
| Toepassingen van afgeleiden | 11, 2, 11, 28 (9/13/6), 3, 7 | 12, 2, 12, 28 (9/13/6), 3, 7 |

Het handboek telt nu 63 pagina's (was 91), de leerkrachtenversie 69 (was 99), de zelfstudieversie 70 (was 101).

### Na te kijken

- **Het getal $\e$ en $\ln$.** Afgeleiden voert $\e$ nu zelf in (hoofdstuk 2, wenk bij LPD 21) en definieert $\ln$ als $\log_\e$; het steunt uit Exponentiële en logaritmische functies alleen nog op $a^x$, $\log_a x$, de rekenregels voor logaritmen en $a^{\log_a x} = x$. Daar kunnen sectie 1.4 (het getal $\e$) en $\ln$ in pakket 3 weg, en de leerkrachtennota's die zeggen dat Afgeleiden ze als voorkennis gebruikt, kloppen niet meer. Kijk dan na of Integralen en Statistiek $\e$ of $\ln$ gebruiken vóór Afgeleiden.
- **Goniometrische functies, buiten deze map:** de leerkrachtennota bij hoofdstuk 1 zegt in pakket 3 dat Afgeleiden de tangens gebruikt. Afgeleiden gebruikt nu alleen nog $\tan$ als getal (de hoek uit een richtingscoëfficiënt in h4-o18, en $-\tan x$ als antwoord in h3-o1), niet de tangensfunctie. De somformule voor $\sin(x + h)$ en de verdubbelingsformule ($\sin^2 x$) blijven nodig.
- **De limiet $\frac{\sin h}{h} \to 1$** wordt niet meer bewezen. Wil een school het bewijs toch, dan moet de sectoroppervlakte terug in Goniometrische functies.
- **Wortelfuncties.** LPD 21 noemt geen wortels; de regel $(x^r)' = r\,x^{r - 1}$ en de opgaven met $\sqrt x$ bleven, omdat het probleem van het glas ($h = 3\sqrt[3]{t}$) erop steunt.
- **Wetenschappelijke contexten** (B+S'): de afgeleide als snelheid en versnelling (vallende steen, lift, wagentje, slinger, bal) staat erin; een context met wisselstroom of een trilling ($x(t) = 5\cos 2t$, h3-o6) ook. Meer kan, als de klas er tijd voor heeft.
- **Opdrachten van niveau 3** zoals h3-o25 ($\cosh$ en $\sinh$) en h3-o26 (afgeleide van een inverse) bleven als uitdaging.
- **ICT-instructies** (TI-84 `nDeriv`, `TBLSET`, GeoGebra `f'(x)`) zoals in pakket 1.
- Buiten deze map: de leerkrachtennota in Rationale functies (hoofdstuk 2) zegt dat limieten in Afgeleiden komen; dat is in pakket 3 niet meer zo. Het bestand `cursussen/Afgeleiden/hoofdstukken/01-limieten.tex` (en zijn oefeningen) gebruikt nu geen enkel pakket meer.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Afgeleiden-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Afgeleiden-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Afgeleiden-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Afgeleiden-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Afgeleiden-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Analyse/Afgeleiden"
```

## Controle

De wiskunde die pakket 3 met de andere pakketten deelt, is in de bronversie nagerekend (SymPy, NumPy). De nieuwe en gewijzigde antwoorden (de opgaven zonder tangens, de tabellen van $\frac{\sin h}{h}$ en $\frac{a^h - 1}{h}$) zijn met SymPy en Python nagerekend. Gebouwd zonder ongedefinieerde verwijzingen, zonder `??` en zonder overvolle regels; pakket 1 en 4 geven dezelfde `gen/`-bestanden als voor de aanpassing. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
