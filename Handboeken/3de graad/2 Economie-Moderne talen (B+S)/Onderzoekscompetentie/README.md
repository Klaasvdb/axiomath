# Onderzoekscompetentie: handboek (pakket 2)

Cursus voor pakket 2 (B+S), LPD 35, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk; alle meetgegevens zijn voorbeeldgegevens.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Onderzoekscompetentie/](<../../cursussen/Onderzoekscompetentie/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S, III-WisS-d (versie oktober 2024), rubriek Onderzoekscompetentie, één minimumdoel: LPD 35 (een onderzoekscyclus doorlopen met inhouden uit dit leerplan). Het doel draagt een #: het kan ook via een ander vak van de studierichting gerealiseerd worden, en de school legt vast waar. De duiding somt de inhouden op waarmee het onderzoek kan (de uitgebreide functietypes, vergelijkingen, afgeleiden, integralen, matrices, spreidingsdiagrammen, hypothesetoetsen); de wenken noemen de fasen van de cyclus en de voorbereiding in het Gemeenschappelijk funderend leerplan. Het leerplan geeft geen lestijden. Spreidingsdiagrammen zijn voorkennis uit de 2de graad, waar een informeel begrip van de trendlijn volstaat en ICT het rekenwerk doet; dit leerplan voegt daar niets aan toe. Telproblemen (combinaties, $n!$), limieten en uitspraken bewijzen staan niet in dit leerplan. Bewijsvoering is in dit leerplan een extra bij LPD 4: de algemene bewijzen in 1.2.2 en 3.2.3 worden een verklarend argument; de tellende verklaringen bij een vermoeden (1.2.3, opdrachten) blijven, als het beargumenteren dat LPD 4 wel vraagt.

**Afgestemd op B+S** (24 nov 2026). De versie kwam van pakket 4 (PR #13) via pakket 3 (PR #23). De drie hoofdstukken blijven. Hoofdstuk 2 rekent de kleinste-kwadratenrechte en de correlatiecoëfficiënt met ICT in plaats van met de formules; hoofdstuk 1 en 3 verliezen de binomiaalcoëfficiënten en de bewijzen. Alles staat in de bron met `\alleenvoor` of `pakketten:` in de YAML. Pakket 4 is ongewijzigd (zijn `gen/` is na het bouwen identiek aan die van voor de aanpassing); pakket 1 heeft deze cursus niet. Pakket 3 (B+S', LPD 41) heeft dezelfde aanpak; daar blijven de bewijzen (LPD 4), en de nieuwe opdracht gaat over radioactief verval.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Van vraag tot onderzoek | `hoofdstukken/01-onderzoeksvraag.tex` | LPD 35 | afgestemd, nog na te lezen |
| 2. Modelleren met data | `hoofdstukken/02-modelleren.tex` | LPD 35 | afgestemd, nog na te lezen |
| 3. Rapporteren | `hoofdstukken/03-rapporteren.tex` | LPD 35 | afgestemd, nog na te lezen |

## Verschillen met pakket 4

| Waar | In pakket 2 | Reden |
|---|---|---|
| 1, leerkrachtennota | het # bij het doel, de duiding, geen lestijden, bewijzen als extra | III-WisS-d |
| 1, Opwarmer (`h1-start-1`) | $1 \cdot 2 \cdot 3 \cdot 4 \cdot 5$ in plaats van $5!$ | geen Telproblemen |
| 1, voorbeeld 3 (torens) | $n!$ wordt ter plaatse ingevoerd | idem |
| 1, 1.2.2 Verschillen in een tabel | zonder de twee bewijzen; een verklaring waarom er $\frac{c}{2}$ voor $n^2$ staat | LPD 4: bewijsvoering is een extra |
| 1, opdrachten `h1-o6`, `h1-o14`, `h1-o17`, test `h1-t2` | zonder binomiaalcoëfficiënten: in `h1-o14` c het rooster uitbreiden tot $n = 4$ ($70$), in `h1-o17` c een verklaring met $\frac{n(n - 1)(n - 2)}{6}$ | geen combinaties |
| 1, opdracht `h1-o19` (stukken van een cirkel: de formule) | weg | idem |
| 2, leerkrachtennota | ICT doet het rekenwerk; TI-84 en rekenblad | 2de graad (spreidingsdiagrammen); LPD 35 |
| 2, 2.2.2 tot 2.2.6 | vervangen door 2.2.2 De kleinste-kwadratenrechte met ICT (gemiddelde punt en som van de residuen als controle, verklaard, zonder formules) en 2.2.3 De correlatiecoëfficiënt (betekenis en eigenschappen, zonder definitie); 2.2.1 Residuen blijft | informele trendlijn met ICT, algoritme en definitie van $r$ niet nodig; LPD 4 |
| 2, korte oefeningen | `h2-besteb` en `h2-rgrenzen` weg; `h2-helling`, `h2-controle` en `h2-rechte` met ICT; `h2-negatief` is deel b van `h2-rechte` | idem |
| 2, het voorbeeld met kroos (2.3.2), `h2-kwadraat`, `h2-macht`, opdrachten `h2-o1`, `h2-o6`, `h2-o7`, `h2-o13`, `h2-o14`, `h2-o15`, `h2-o18`, test `h2-t1` | de rechte met ICT, met het gemiddelde punt als controle, in plaats van de sommen met de hand | idem |
| 2, opdracht `h2-o17` | andere klassieke fouten: $r$ als percentage, een invoerfout | idem |
| 2, opdrachten `h2-o5` (formule afleiden) en `h2-o21` (eigenschappen bewijzen) | weg | idem |
| 2, nieuwe opdracht `h2-o22` | prijselasticiteit: een machtsverband met $\ln q$ tegen $\ln p$, de exponent als elasticiteit, omzet en extrapolatie | samenhang met Economie (elasticiteit, ook in Afgeleiden van dit pakket) |
| 2, Koppel `h2-koppel-1` | concreet: de beste rechte $T^2 = aL$ door de oorsprong voor de slinger, als minimum van een tweedegraadsfunctie met een afgeleide | afgeleiden (extremum) staan in dit leerplan; geen formuleafleiding |
| 3, 3.2.3 Rekenen met afgeronde getallen | de bewijzen van de fout van een som en van een product vervangen door een verklaring (slechtste geval, $1{,}01 \cdot 1{,}01$) | LPD 4: bewijsvoering is een extra |
| 3, opdracht `h3-o13`, test `h3-t4` | de rechte met ICT; $36 \cdot 36$ zonder $\binom92$ | idem; geen combinaties |
| LPD-nummers | LPD 35 klopte al in de drie hoofdstukken | III-WisS-d |

Aantallen in pakket 2 (pakket 4 tussen haakjes):

| Hoofdstuk | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|
| 1. Van vraag tot onderzoek | 7 (7) | 19 (20) | 1 (3) | 5 (5) |
| 2. Modelleren met data | 13 (16) | 20 (21) | 2 (3) | 6 (6) |
| 3. Rapporteren | 11 (11) | 18 (18) | 1 (2) | 5 (5) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken); het herhaalschema van Test jezelf klopt in elk hoofdstuk. Het handboek telt 51 pagina's (was 56), de leerkrachtenversie 57 (59), de zelfstudieversie 57 (62), de numerieke oplossingen 5 (5) en de uitgewerkte oplossingen 20 (21).

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Onderzoekscompetentie-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Onderzoekscompetentie-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Onderzoekscompetentie-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Onderzoekscompetentie-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Onderzoekscompetentie-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Onderzoekscompetentie"
```

## Controle

Pakket 2 en 4 gebouwd zonder ongedefinieerde verwijzingen of `??`; `gen/` van pakket 4 is identiek aan die van voor de aanpassing. De resultaten van de ICT-opgaven (rechten, $r$, de nieuwe opdracht en de Koppel) zijn nagerekend met NumPy en SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.

## Na te kijken

- **Hoeveel regressie met de hand?** De 2de graad zegt dat het algoritme van de trendlijn en de definitie van $r$ niet nodig zijn, en dit leerplan vraagt niet meer. Daarom staan formules en bewijzen alleen in pakket 4. Een school die de formules toch wil tonen, kan de versie van pakket 4 als verrijking gebruiken.
- **Bewijzen in hoofdstuk 1.** In B+S is bewijsvoering een extra. De tellende verklaringen (diagonalen, pizza, opdrachten met "bewijs") blijven, omdat een wiskundig onderzoek pas af is met een verklaring; alleen de algemene bewijzen in 1.2.2 en 3.2.3 vallen weg. Na te kijken of de titel "Experimenteren, vermoeden, bewijzen" voor B+S goed is.
- **Half lege pagina's.** Het herhaalschema van hoofdstuk 2 staat alleen op een pagina, zoals in pakket 4.
- **Koepels.** `Handboeken/koepels.yaml` gebruikt `2/Onderzoekscompetentie` als extra voor richtingen met pakket 1 (KOV Humane wetenschappen, Welzijnswetenschappen). Met ICT in plaats van formules en zonder bewijzen past dit boek daar beter dan vroeger; de Koppel met een afgeleide (extremum) gaat verder dan de concepten van Basis. Geen wijziging nodig.
- **De verwachtingen van de school** (product, proces, evaluatie) en de keuze van het vak waarin het doel gerealiseerd wordt, staan niet in dit boek.
