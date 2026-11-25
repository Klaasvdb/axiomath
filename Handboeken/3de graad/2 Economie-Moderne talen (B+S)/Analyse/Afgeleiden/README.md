# Afgeleiden: handboek (pakket 2)

Cursus voor pakket 2 (B+S), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor pakket 1, 2 en 3 in [cursussen/Afgeleiden/](<../../../cursussen/Afgeleiden/>) (pakket 4 gebruikt de aparte cursus Limieten en afgeleiden). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S, III-WisS-d (versie oktober 2024), rubriek Analyse, deelrubriek Afgeleiden: LPD 18-21, met LPD 3 (ICT), LPD 4 (bewijzen zijn een extra) en de wenk bij LPD 17 (toenemend en afnemend stijgen en dalen met afgeleiden). Het leerplan geeft geen lestijden per rubriek.

**Afgestemd op B+S** (24 nov 2026). De vorige versie had de vier hoofdstukken van Limieten en afgeleiden (pakket 4). Het leerplan vraagt een intuïtief limietbegrip (wenk bij LPD 18) en geen afgeleiden van goniometrische functies (LPD 20). Wat B+S met Basis deelt (de afgeleide met een tabel benaderen, flitspaal en trajectcontrole, contexten, de grafiek van $f'$ schetsen, van $f'$ naar $f$), komt uit de versie voor pakket 1. Pakket 1 en 4 zijn ongewijzigd.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De afgeleide | `hoofdstukken/02-afgeleide.tex` | LPD 18, 19, begin van LPD 20 | afgestemd, na te lezen |
| 2. De kettingregel | `hoofdstukken/03-kettingregel.tex` | LPD 20 | afgestemd, na te lezen |
| 3. Toepassingen van afgeleiden | `hoofdstukken/04-toepassingen.tex` | LPD 21, met LPD 19 en de wenk bij LPD 17 | afgestemd, na te lezen |

Weggelaten in `handboek.tex`: `01-limieten` (limieten met $\varepsilon$ en $\delta$, rekenregels voor limieten, asymptoten als limiet, continuïteit, tussenwaardestelling): een informeel limietbegrip volstaat (wenk bij LPD 18). Geen andere cursus van pakket 2 verwijst naar dat hoofdstuk, maar de leerkrachtennota van Rationale functies (hoofdstuk 2) zegt nog dat limieten in Afgeleiden komen. `Handboeken/koepels.yaml` hoeft niet te veranderen.

### Verschil met de vorige versie (de leerstof van pakket 4)

| Hoofdstuk | Valt weg in pakket 2 | Herschreven of toegevoegd in pakket 2 (reden) |
|---|---|---|
| 1. De afgeleide | de verwijzingen naar het hoofdstuk over limieten; de sectie Afleidbaar en continu (voorbeeld $\lvert x \rvert$, h2-knik, testvraag t8); h2-o28 (continu maar niet afleidbaar); de bewijzen van de regel voor $x^n$ (binomium), van $(\sqrt x)'$ met de definitie (voorbeeld en de toegevoegde in de werkwijze) en van de veelvoud-, som-, product- en quotiëntregel; h2-o27 (bewijzen); de delen met wortels in h2-o4 | een informele uitleg van $\lim_{h \to 0}$ met een tabel van differentiequotiënten (ICT, voorbeeld $2^x$, werkwijze, h2-tabel; wenk LPD 18); flitspaal tegenover trajectcontrole (wenk LPD 18); De afgeleide in een context: eenheid, debiet, marginale kost, helling (voorbeeld stuwmeer, h2-context; wenk LPD 18); nieuw: de elasticiteit van de vraag (theorie, voorbeeld concerttickets, h2-elasticiteit; wenk LPD 18 en samenhang met III-Eco-d); De grafiek van $f'$ schetsen, direct na de afgeleide functie (voorbeeld hoogteprofiel, werkwijze met ICT, h2-schets; LPD 19); de rekenregels met een verklarend argument of een controle in plaats van een bewijs (LPD 4: extra); $(\frac1x)'$ en $x^2$ met de definitie blijven (het voorbeeld van LPD 4); h2-o19 zonder continuïteit; h2-o9 zonder continuïteit; testvragen t9 (tabel) en t10 (schets) |
| 2. De kettingregel | de sectie Goniometrische functies (LPD 20 vraagt geen goniometrische functies) met h3-gonio, h3-gonio2, h3-cosbewijs, h3-sin, h3-sinlim, h3-o3, h3-o6, h3-o7, h3-o10, h3-o19, h3-o22, h3-koppel-3 en t2; de gonio-delen van h3-o1, o12, o13, o15, o16, o17, o25, o27, o28 en de Start (eigen versies met `pakketten: [2]`); Machten met een reële exponent (een bewijs); het bewijs van $(\e^x)' = \e^x$ (nu een zin uitleg); de deelvraag met de boogtangens in h3-o26 | het getal $\e$ wordt hier ingevoerd, zoals de wenk bij LPD 20 voorstelt: de hellingsgrafiek van $a^x$ is een veelvoud van $a^x$ (met ICT), een tabel van $\frac{a^h - 1}{h}$, en $\e$ als het grondtal waarvoor die factor $1$ is; $\ln x = \log_\e x$; in het probleem staat dat $\e$ in dit hoofdstuk komt; de Start rekent met $\log_2$ en $\log_3$ in plaats van $\ln$; de korte bewijzen van $(a^x)'$, $(\ln x)'$ en $(\log_a x)'$ blijven (toepassingen van de kettingregel) |
| 3. Toepassingen van afgeleiden | de bewijzen van Extremum en afgeleide, Tekenwissel, Teken van de tweede afgeleide en Buigpunt; continuïteit in de stelling over de tekenwissel en bij de grootste waarde op een interval; $\sin$ in h4-tweede, h4-o16, h4-o22 en h4-o23 (eigen versies) | een verklarend argument bij extremum en afgeleide (de zin van pakket 1) en bij hol en bol; nieuw: Van de grafiek van $f'$ naar $f$ (uit pakket 1, voorbeeld en h4-vanafgeleide; LPD 19), met testvraag t5 die nu naar dat voorbeeld verwijst |

De leerplanverwijzingen stonden als "LPD 18-21" bij elk hoofdstuk; ze noemen nu per hoofdstuk de doelen.

Aantallen in pakket 2 (voorbeelden, Start, korte oefeningen, opdrachten met niveau 1/2/3, Koppel, Test jezelf):

| Hoofdstuk | Voor | Na |
|---|---|---|
| Limieten en continuïteit | 18, 2, 19, 28 (9/13/6), 3, 8 | weggelaten |
| De afgeleide | 16, 2, 15, 27 (9/12/6), 2, 8 | 18, 2, 18, 25 (9/12/4), 2, 9 |
| De kettingregel | 16, 2, 15, 28 (10/12/6), 3, 8 | 11, 2, 10, 22 (8/9/5), 2, 7 |
| Toepassingen van afgeleiden | 11, 2, 11, 28 (9/13/6), 3, 7 | 12, 2, 12, 28 (9/13/6), 3, 7 |

Het handboek telt nu 60 pagina's (was 91), de leerkrachtenversie 65 (was 99), de zelfstudieversie 67 (was 101).

### Na te kijken

- **Het getal $\e$ en $\ln$.** Afgeleiden voert $\e$ nu zelf in (hoofdstuk 2, wenk bij LPD 20) en definieert $\ln$ als $\log_\e$; het steunt uit Exponentiële en logaritmische functies alleen nog op $a^x$, $\log_a x$, de rekenregels voor logaritmen en $a^{\log_a x} = x$. Exponentiële en logaritmische functies heeft in pakket 2 nog sectie 1.4 (het getal $\e$, continue groei) en de natuurlijke logaritme, met in de leerkrachtennota de opmerking dat Afgeleiden die als voorkennis gebruikt. Die opmerking klopt niet meer: daar kunnen sectie 1.4 en $\ln$ weg (zie de README van die cursus). Kijk dan wel na of Integralen en Statistiek $\e$ of $\ln$ gebruiken vóór Afgeleiden.
- **Wortelfuncties.** LPD 20 noemt veelterm-, rationale, exponentiële en logaritmische functies, geen wortels. De regel $(x^r)' = r\,x^{r - 1}$ en de opgaven met $\sqrt x$ bleven, omdat het probleem van het glas ($h = 3\sqrt[3]{t}$) erop steunt.
- **De korte bewijzen in hoofdstuk 2** ($(a^x)'$, $(\ln x)'$, $(\log_a x)'$) staan nog als bewijs in het theoriekader. Ze kunnen ook uitleg worden, zoals in hoofdstuk 1.
- **De elasticiteit** is nieuw en eigen werk: leerkrachten Economie gebruiken misschien een andere notatie of het teken anders (soms $\lvert E \rvert$).
- **Opdrachten van niveau 3** zoals h3-o25 ($\cosh$ en $\sinh$), h3-o26 (afgeleide van een inverse) en h2-o26 bleven als uitdaging.
- De oefening h2-o4 noemt $x^3$ met de definitie; de tekst bij de regel voor machten verwijst ernaar ("een opdracht verderop").
- **ICT-instructies** (TI-84 `nDeriv`, `TBLSET`, GeoGebra `f'(x)`) zoals in pakket 1.
- Buiten deze map: de leerkrachtennota in Rationale functies (hoofdstuk 2) zegt dat limieten in Afgeleiden komen; dat is in pakket 2 niet meer zo. Het bestand `cursussen/Afgeleiden/hoofdstukken/01-limieten.tex` (en zijn oefeningen) gebruikt nu geen enkel pakket meer.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Afgeleiden-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Afgeleiden-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Afgeleiden-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Afgeleiden-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Afgeleiden-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Analyse/Afgeleiden"
```

## Controle

De wiskunde die pakket 2 met de andere pakketten deelt, is in de bronversie nagerekend (SymPy, NumPy). De nieuwe en gewijzigde antwoorden (elasticiteit, de varianten zonder goniometrische functies, de tabel van $\frac{a^h - 1}{h}$) zijn met SymPy nagerekend. Gebouwd zonder ongedefinieerde verwijzingen, zonder `??` en zonder overvolle regels; pakket 1 en 4 geven dezelfde `gen/`-bestanden als voor de aanpassing. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
