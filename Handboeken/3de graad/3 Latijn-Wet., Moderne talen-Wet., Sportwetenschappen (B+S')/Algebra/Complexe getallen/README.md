# Complexe getallen: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 29-33, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Complexe getallen/](<../../../cursussen/Complexe getallen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan B+S'** (III-WisS'-d, versie oktober 2024). Het leerplan vraagt complexe getallen voorstellen in het vlak van Gauss, met $i$ als oplossing van $x^2 = -1$, zonder wortelteken bij een negatief getal en zonder bewijs dat er geen goede ordening is (LPD 29), de vier bewerkingen in cartesische vorm, met het verband met vectoren (LPD 30), tweedegraadsvergelijkingen met reële coëfficiënten oplossen in $\mathbb{C}$ (LPD 31), omzetten tussen cartesische en goniometrische vorm (LPD 32) en vermenigvuldigen in goniometrische vorm, met de somformules (LPD 33). Volgens de wenken bij LPD 33 ontdek je de productregel met een voorbeeld of bewijs je hem met de somformules, en mag je de somformules bij de goniometrische functies aanbrengen; delen in goniometrische vorm met de verschilformules is een extra. Machten en $n$-de machtswortels (De Moivre), de vierkantswortels van een niet-reëel getal en vergelijkingen van hogere graad staan er niet in; keuzedoel K1 (Analyse) vraagt eenvoudige veeltermvergelijkingen in $\mathbb{R}$. Het leerplan noemt geen contexten uit de natuurwetenschappen bij deze doelen, en geen aantal lestijden. Pakket 3 houdt dus hoofdstuk 1 tot 3, zonder de stukken die alleen pakket 4 vraagt, en laat hoofdstuk 4 weg.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met complexe getallen | `hoofdstukken/01-rekenen-met-complexe-getallen.tex` | LPD 29, 30 | afgestemd op B+S', nog na te lezen |
| 2. Vierkantswortels en vergelijkingen | `hoofdstukken/02-vierkantswortels-en-vergelijkingen.tex` | LPD 31 (sectie 3: verder dan LPD 31, zie K1) | afgestemd op B+S', nog na te lezen |
| 3. De goniometrische vorm | `hoofdstukken/03-goniometrische-vorm.tex` | LPD 32, 33 (delen: extra bij LPD 33) | afgestemd op B+S', nog na te lezen |

## Verschillen met pakket 4

Alles staat in de gedeelde bron met `\alleenvoor` of `pakketten:` in de YAML; pakket 4 is niet veranderd (zijn `gen/` is na het bouwen identiek aan die van voor de aanpassing).

| Waar | In pakket 3 | Reden |
|---|---|---|
| Hoofdstuk 4 (De Moivre, machten, $n$-de machtswortels, eenheidswortels) | weg, via `\cursushoofdstukken` | LPD 33 vraagt alleen het product (en de deling als extra) |
| 1, leerkrachtennota | wenk over het verband met vectoren (LPD 30); de opmerking over de rekenregels voor de toegevoegde in hoofdstuk 2 valt weg | III-WisS'-d |
| 1, `h1-o17` | eigen versie: de verklaring verwijst naar hoofdstuk 3 in plaats van 4 | hoofdstuk 4 valt weg |
| 2, rekenregels voor de toegevoegde, stelling over toegevoegde oplossingen van een veeltermvergelijking, met `vb:h2-conjproduct`, `vb:h2-conjmacht`, `vb:h2-toegevoegd1`, korte oefening `h2-conj` | weg; in de plaats een korte uitleg dat de oplossingen bij $D < 0$ volgens de formule elkaars toegevoegde zijn, met het voorbeeld met een niet-reële coëfficiënt | LPD 31 gaat alleen over tweedegraadsvergelijkingen |
| 2, `vb:h2-toegevoegd` (derde graad met een gegeven niet-reële oplossing) | weg | steunt op de algemene stelling |
| 2, sectie 4 (vierkantswortels van een complex getal), met `vb:h2-vw`, `vb:h2-vw2`, korte oefening `h2-vw` | weg | de wenk daarover staat alleen in het leerplan van pakket 4 |
| 2, Terug naar het probleem (`vb:h2-terug`) | eigen versie: $(1 + i)^2 = 2i$ en een product dat 0 is, in plaats van de vierkantswortels van $2i$ | sectie 4 valt weg |
| 2, korte oefening `h2-hoger3` | eigen versie: twee vierdegraadsvergelijkingen met $t = z^2$ | het tweede deel gebruikte de algemene stelling |
| 2, opdrachten | weg: o6 (vierkantswortels), o14 (stelling), o15 (niet-reële coëfficiënt, vierkantswortel van $D$), o18 ($z^4 = -1$), o25 en o26 (stelling, hoofdstelling); eigen versie: o7 (alleen tweedegraadsvergelijkingen), o12 (zonder verwijzing naar hoofdstuk 4), o23 (d zonder vierkantswortels van een complex getal) | idem |
| 2, Koppel `h2-koppel-2` | eigen versie: $(2 - i)^3$ uitgerekend in plaats van met de rekenregels voor de toegevoegde | idem |
| 2, Test jezelf | `h2-t7` (vierkantswortels van $15 - 8i$) en `h2-t8` (stelling) vervangen door som en product (`h2-t7`) en een vierdegraadsvergelijking met $t = z^2$ (`h2-t8`); het herhaalschema volgt | idem |
| 2, inleiding, leerkrachtennota, samenvatting | eigen versie | idem |
| 3, boogtangens | korte uitleg van de toets $\tan^{-1}$ en de notatie $\mathrm{bgtan}$ in sectie 2 | de boogtangens valt weg in Goniometrische functies van pakket 3, de tangens als goniometrisch getal blijft |
| 3, somformules | herhaald vóór de productregel, met verwijzing naar Goniometrische functies | LPD 33 noemt ze; de wenk laat toe ze daar aan te brengen, en Goniometrische functies van pakket 3 doet dat (hoofdstuk 2, met bewijs) |
| 3, quotiënt | blijft, met het bewijs via de productregel | extra bij LPD 33 |
| 3, leerkrachtennota, verwijzing naar hoofdstuk 4 | eigen versie, verwijzing weg | III-WisS'-d |

Aantallen in pakket 3 (pakket 4 tussen haakjes):

| Hoofdstuk | Voorbeelden | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|---|
| 1. Rekenen met complexe getallen | 17 (17) | 14 (14) | 28 (28) | 3 (3) | 8 (8) |
| 2. Vierkantswortels en vergelijkingen | 12 (18) | 9 (11) | 20 (26) | 2 (2) | 8 (8) |
| 3. De goniometrische vorm | 13 (13) | 9 (9) | 26 (26) | 2 (2) | 7 (7) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken). Het handboek telt 59 pagina's (was 80), de leerkrachtenversie 65 (was 85), de zelfstudieversie 70 (was 93) en de uitgewerkte oplossingen 28 (was 37).

## Na te kijken

- **Vergelijkingen van hogere graad** (hoofdstuk 2, sectie 3: groeperen, $t = z^2$, delen door $z - r$) gaan verder dan LPD 31. Ze blijven omdat ze alleen technieken uit de 2de graad en keuzedoel K1 gebruiken, en omdat het probleem $t = z^2$ nodig heeft. Wie ze schrapt, moet `vb:h2-hoger`, `vb:h2-horner`, `vb:h2-bikwadratisch`, `h2-hoger`, `h2-hoger2`, `h2-hoger3`, de opdrachten o4e, o8, o12, o13, o23, `h2-t6`, `h2-t8` en de Opwarmer (f) aanpassen.
- **Boogtangens.** Hoofdstuk 3 voert $\mathrm{bgtan}$ zelf in als de toets $\tan^{-1}$. Opdracht `h3-o25` (sommen van boogtangensen, niveau 3) blijft; ze gebruikt alleen die definitie. Wie de tangens helemaal wil vermijden, kan het argument ook vinden met de boogcosinus van $\frac{a}{r}$ en het teken van $b$ (staat in de leerkrachtennota); de voorbeelden en oefeningen gebruiken nu de tangens.
- **Somformules.** Ze staan in Goniometrische functies van pakket 3 (hoofdstuk 2), dat volgens de lkr in het 5de jaar komt. Wordt Complexe getallen eerder gegeven, dan moeten ze hier met bewijs bij.
- **Koepels.** GO! (WD 06.04) en POV (SV06) gebruiken voor de richtingen met wetenschappen ook pakket 3; de minimumdoelen 06.04.19-23 vragen evenmin De Moivre. Wie hoofdstuk 4 toch wil, vindt het in het handboek van pakket 4; in `Handboeken/koepels.yaml` zou het als uitbreiding kunnen ("4/Algebra/Complexe getallen, hoofdstuk 4").
- **Wetenschappelijke toepassingen.** Het leerplan vraagt bij deze doelen geen contexten. Er zijn de gedempte trilling (`h2-o9`), het windpark, de windmolen en de zeilboot; wisselstroom staat alleen in de inleiding van hoofdstuk 1.
- **Pagina's met veel wit**: de laatste theoriepagina van hoofdstuk 2 (na Terug naar het probleem, voor de Opdrachten op een nieuwe pagina) en, zoals in pakket 4, twee pagina's in hoofdstuk 3 en de laatste pagina van Test jezelf van hoofdstuk 2 (alleen de laatste testvraag en het herhaalschema).

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Complexe-getallen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Algebra/Complexe getallen"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy); de nieuwe delen voor pakket 3 (Terug naar het probleem van hoofdstuk 2, `h2-hoger3`, `h2-o7`, `h2-o23`, `h2-koppel-2`, `h2-t7`, `h2-t8`, `h1-o17`) zijn nagerekend met SymPy. Na het afstemmen gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek en in de oplossingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De enige prent (`veer.png`, hoofdstuk 2) is dezelfde als in pakket 4.
