# Goniometrische functies: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 13-17 (met de somformules van LPD 33), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Goniometrische functies/](<../../../cursussen/Goniometrische functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan B+S'** (III-WisS'-d, versie oktober 2024). Het leerplan vraagt de grafiek van $\sin x$ vanuit de goniometrische cirkel, met radialen (LPD 13), de algemene sinusfunctie opgebouwd met transformaties, met ICT (LPD 14), haar kenmerken aan de hand van de grafiek, in contexten uit de natuurwetenschappen (LPD 15), vergelijkingen van de vorm $\sin(ax + b) = c$ en vergelijkingen die daartoe herleidbaar zijn (LPD 16), en de kenmerken van de cosinusfunctie (LPD 17). De tangensfunctie staat er niet in. De somformules horen bij Complexe getallen (LPD 33), maar volgens de wenk daar mag je ze bij de goniometrische functies aanbrengen; de verschilformules zijn er een extra. Bewijsvoering is een doel (LPD 4). Voorkennis uit de 2de graad zijn de goniometrische cirkel en de verwante hoeken (II-WisS-d). Het leerplan noemt geen aantal lestijden voor deze doelen. Pakket 3 houdt dus de vier hoofdstukken, met de bewijzen, maar zonder de tangensfunctie en zonder de formules die het leerplan niet vraagt; het krijgt de stukken die pakket 1 en 2 hebben voor LPD 13, 15 en 16 (de grafiek vanuit de cirkel, ICT, de kenmerken, de nulwaarden).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De eenheidscirkel | `hoofdstukken/01-eenheidscirkel.tex` | LPD 13 (voorkennis II-WisS-d) | afgestemd op B+S', nog na te lezen |
| 2. Goniometrische formules | `hoofdstukken/02-formules.tex` | LPD 33 (Complexe getallen), LPD 4 | afgestemd op B+S', nog na te lezen |
| 3. Goniometrische functies | `hoofdstukken/03-grafieken.tex` | LPD 13-15 en 17 | afgestemd op B+S', nog na te lezen |
| 4. Goniometrische vergelijkingen | `hoofdstukken/04-vergelijkingen.tex` | LPD 16, 17, 15 (en LPD 6) | afgestemd op B+S', nog na te lezen |

## Verschillen met pakket 4

Alles staat in de gedeelde bron met `\alleenvoor` of `pakketten:` in de YAML; pakket 1 en 4 zijn niet veranderd (hun `gen/` is na het bouwen identiek aan die van voor de aanpassing).

| Waar | In pakket 3 | Reden |
|---|---|---|
| 1, sectoroppervlakte | weg, met voorbeeld `vb:h1-sector`, korte oefening `h1-sector` en opdracht `h1-o25`; `h1-o7`, `h1-o11`, `h1-o18` en test 2 in de versie van pakket 1 en 2 (zonder sector) | niet in LPD 13 |
| 1, tangens, grondformule, alle verwante hoeken, bewijzen | blijven | voorkennis uit de 2de graad; Afgeleiden (LPD 21) en Complexe getallen gebruiken de tangens; LPD 4 |
| 2, som- en verschilformules voor sinus en cosinus, met bewijs | blijven | LPD 33 en zijn wenk (en extra), Afgeleiden; LPD 4 |
| 2, verdubbelingsformules voor sinus en cosinus | blijven, kort | niet gevraagd, maar de somformules met $\beta = \alpha$; Afgeleiden en Complexe getallen gebruiken ze |
| 2, tangens van een som en van de dubbele hoek, formules van Carnot, identiteiten bewijzen, sinus en cosinus samenvoegen (sectie 3) | weg, met hun voorbeelden en oefeningen | niet in B+S' |
| 2, korte oefeningen | eigen versie zonder tangens: `h2-exactk`, `h2-som`; weg: `h2-tan-k`, `h2-dubbel`, `h2-carnotk`, `h2-identk`, `h2-samenvoegen`, `h2-uitwerkk` | idem |
| 2, opdrachten | eigen versie zonder tangens: o1, o2, o10, o12, o13, o16; weg: o3, o5, o6, o7, o9, o11, o15, o17, o18, o20, o21, o22, o26, o27 | idem |
| 2, Koppel en Test jezelf | `h2-koppel-2` (Carnot in een integraal) weg; `h2-t6` (Carnot) in eigen versie ($1 - 2\sin^2\frac{\pi}{8}$ en $\sin\frac{\pi}{8}\cos\frac{\pi}{8}$); `h2-t4`, `h2-t5` en `h2-t7` weg | idem |
| 3, tangensfunctie | weg, met voorbeeld `vb:h3-tan` en korte oefening `h3-aantal`; `h3-periode`, o9, o12, o13, `h3-t1` en `h3-t5` in de versie van pakket 1 en 2; weg: o4, o7, o11, o27, o30 (samenvoegen) | niet in B+S' |
| 3, Van de cirkel naar de grafiek, tekenverloop en symmetrie, frequentie, Ontdekken met ICT, Kenmerken van een sinusfunctie, `h3-o31`, test `h3-t8` | toegevoegd (de stukken van pakket 1 en 2) | LPD 13 en wenk; wenk LPD 14; LPD 15 en zijn wenk |
| 3, negatieve $a$ (o20, o24), cosinusfunctie met bewijs | blijven | LPD 17; de wenk "positieve $a$ en $b$ volstaan" is een mogelijkheid |
| 4, boogtangens, $\tan x = a$, samenvoegen | weg, met voorbeelden, `h4-tan-k`, `h4-samen` en de opdrachten o8, o14, o20, o22, o24, o25, o26; `h4-koppel-3` (boogtangens als integraal) weg; `h4-t7` weg | niet in B+S' |
| 4, boogcosinus, $\cos x = a$, substitutie, ontbinden | blijven | LPD 17; wenk LPD 16 (herleidbare vergelijkingen) |
| 4, eigen versie zonder tangens | `h4-bg`, `h4-elementair`, `h4-veelvoud`, `h4-kwadr`, `h4-ontbind`, `h4-herleidbaar` (nieuw deel $\cos^2 x = \cos x$), o1, o2, o3, o10, o11, o13, o15, o16, o17, o18, `h4-t1` ($\bgsin$ en $\bgcos$) | idem |
| 4, Nulwaarden van een sinusfunctie, Controleren met ICT, `h4-o28`, `h4-o29`, test `h4-t8` | toegevoegd (de stukken van pakket 1 en 2) | wenk LPD 16; LPD 6 en wenk LPD 15 |
| Leerkrachtennota's, inleidingen, samenvattingen | eigen versie voor pakket 3 | III-WisS'-d |

Aantallen in pakket 3 (pakket 4 tussen haakjes):

| Hoofdstuk | Voorbeelden | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|---|
| 1. De eenheidscirkel | 14 (15) | 13 (14) | 25 (26) | 3 (3) | 8 (8) |
| 2. Goniometrische formules | 7 (14) | 8 (14) | 13 (27) | 2 (3) | 4 (7) |
| 3. Goniometrische functies | 11 (11) | 16 (14) | 23 (27) | 3 (3) | 8 (7) |
| 4. Goniometrische vergelijkingen | 10 (12) | 13 (14) | 22 (27) | 2 (3) | 7 (7) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken). Het handboek telt 71 pagina's (was 84), de leerkrachtenversie 76 (was 91) en de zelfstudieversie 79 (was 93).

## Na te kijken

- **Hoofdstuk 2 in dit pakket.** Het leerplan zet de somformules bij Complexe getallen; hier staan ze bij de goniometrische functies, zoals de wenk bij LPD 33 toelaat. De verdubbelingsformules blijven als kort gevolg, omdat Afgeleiden (`cursussen/Afgeleiden`, hoofdstuk 3) en Complexe getallen ze gebruiken; strikt genomen vraagt het leerplan ze niet. Wie ze schrapt, moet sectie 2.2, `h2-t3` en `h2-t6` en de opdrachten met een dubbele hoek (o2, o4, o8, o12, o13, o16, o19, o23, o24, o25) aanpassen.
- **Tangens.** De tangens blijft als goniometrisch getal (hoofdstuk 1), de tangensfunctie, de boogtangens en $\tan x = a$ vallen weg. Complexe getallen (hoofdstuk 3, het argument) gebruikt wel $\bgtan$ en legt daar zelf de toets $\tan^{-1}$ uit; Afgeleiden leidt $\tan x$ af. Daar na te kijken.
- **Integralen.** De cursus Integralen gebruikt de formules van Carnot ($\int\sin^2 x\,\mathrm{d}x$), die hier wegvallen: daar na te kijken voor pakket 3.
- **Afgeleiden.** De afgeleide van $\sin x$ steunt daar op de grenswaarde $\frac{\sin h}{h}$ met de sectoroppervlakte, die in hoofdstuk 1 wegvalt (de formule wordt daar ter plaatse gegeven). De wenk bij LPD 21 stelt een grafische verantwoording voor.
- **Wetenschappelijke contexten (LPD 15).** Veer, stemvork, wisselspanning, reuzenrad, getij, daglengte en bloeddruk staan erin. De twee opdrachten over interferentie van geluidsgolven (`h2-o22`, `h3-o30`) vallen weg, omdat ze het samenvoegen nodig hebben; misschien een versie met ICT maken. Ademhaling ontbreekt.
- **Cosinusfunctie (LPD 17).** De kenmerken (domein, bereik, nulwaarden, periode, stijgen en dalen) staan in sectie 3.1; een uitgewerkte analyse zoals in `vb:h3-analyse` is er alleen voor de sinus.
- **Pagina's met veel wit**: pagina 13 (zoals in pakket 4) en de laatste theoriepagina's voor de Opdrachten, en pagina 57 (alleen het herhaalschema van hoofdstuk 3, dat een testvraag meer heeft dan in pakket 4).
- **GeoGebra en het rekentoestel**: de instructies in de toegevoegde stukken zijn niet in de software nagekeken (zie de README van pakket 1).

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Goniometrische-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Analyse/Goniometrische functies"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy); de nieuwe delen voor pakket 3 (`h2-t6`, `h4-t1`, `h4-herleidbaar` en de ingekorte `h2-o12`) zijn nagerekend met SymPy. Na het afstemmen gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek en in de oplossingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
