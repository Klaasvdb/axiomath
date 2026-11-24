# Goniometrische functies: handboek (pakket 2)

Cursus voor pakket 2 (B+S), LPD 13-16, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Goniometrische functies/](<../../../cursussen/Goniometrische functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan B+S** (III-WisS-d, versie oktober 2024). De doelen voor goniometrische functies zijn dezelfde als die van Basis (pakket 1), alleen genummerd als LPD 13-16 en met de vergelijkingen als gewoon doel in plaats van keuzedoel: de grafiek van $\sin x$ vanuit de goniometrische cirkel, met radialen (LPD 13), de algemene sinusfunctie opgebouwd met transformaties, met ICT (LPD 14), haar kenmerken aan de hand van de grafiek, in contexten (LPD 15), en vergelijkingen van de vorm $\sin(ax + b) = c$ algebraïsch oplossen, waarvoor de sinus van supplementaire hoeken volstaat, ook voor de nulwaarden van een sinusfunctie (LPD 16). De cosinus staat alleen bij de extra's (LPD 13 en 14), de tangens nergens; goniometrische formules en de afgeleiden van goniometrische functies staan niet in dit leerplan, en bewijsvoering is een extra (LPD 4). Het leerplan noemt geen aantal lestijden voor deze doelen. Daarom volgt pakket 2 de versie van pakket 1: `handboek.tex` kiest de hoofdstukken 1, 3 en 4 van de bron, als hoofdstuk 1, 2 en 3, en laat Goniometrische formules weg. In de bron staat wat pakket 1 en 2 samen hebben in `\alleenvoor{1,2}`, en wat pakket 3 en 4 samen hebben in `\alleenvoor{3,4}`; alleen de leerkrachtennota's met de leerplannummers verschillen tussen pakket 1 en 2.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De eenheidscirkel | `hoofdstukken/01-eenheidscirkel.tex` | LPD 13 | afgestemd op B+S, nog na te lezen |
| 2. Goniometrische functies | `hoofdstukken/03-grafieken.tex` | LPD 13-15 | afgestemd op B+S, nog na te lezen |
| 3. Goniometrische vergelijkingen | `hoofdstukken/04-vergelijkingen.tex` | LPD 16, LPD 15 (en LPD 6) | afgestemd op B+S, nog na te lezen |

## Verschillen met pakket 4

Dezelfde als in [pakket 1](<../../../1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Analyse/Goniometrische functies/README.md>) (zie de tabel daar), met deze leerplanredenen:

| Waar | In pakket 2 | Reden |
|---|---|---|
| Hoofdstuk 2 van de bron (formules) | weg (niet in `handboek.tex`); hoofdstuk 3 en 4 van de bron heten hier 2 en 3 | geen formules in B+S |
| Bewijzen | weg; een verklaring in woorden of met de figuur | bewijsvoering is een extra bij LPD 4 |
| 1, tangens, grondformule, sectoroppervlakte, antisupplementaire en complementaire hoeken | weg (met hun voorbeelden en oefeningen); tegengestelde en supplementaire hoeken blijven | wenk LPD 16: supplementaire hoeken volstaan |
| 1, Met ICT | rekentoestel in radialen, draaiend punt in GeoGebra | LPD 13 |
| 2, tangensfunctie | weg | niet in B+S |
| 2, Van de cirkel naar de grafiek, tekenverloop en symmetrie, frequentie | toegevoegd | LPD 13; LPD 15 en zijn wenk |
| 2, Ontdekken met ICT, Kenmerken van een sinusfunctie | toegevoegd | wenk LPD 14; LPD 15 |
| 3, boogcosinus, boogtangens, $\cos x = a$, $\tan x = a$, herleidbare vergelijkingen | weg | LPD 16 vraagt alleen $\sin(ax + b) = c$ |
| 3, Nulwaarden van een sinusfunctie, Controleren met ICT, Terug naar het probleem met ICT | toegevoegd | wenk LPD 16; wenk LPD 15 (een vergelijking in een context grafisch met ICT), LPD 6 |
| Leerkrachtennota's | eigen leerplannummers (LPD 13-16 in plaats van LPD 11-13 en K2) | III-WisS-d |
| Koppel | dezelfde als pakket 1 (Algemene functies, Matrices, Afgeleiden) | |

Aantallen in pakket 2 (pakket 4 tussen haakjes):

| Hoofdstuk | Voorbeelden | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|---|
| 1. De eenheidscirkel | 11 (15) | 9 (14) | 15 (26) | 2 (3) | 6 (8) |
| 2. Goniometrische functies | 11 (11) | 16 (14) | 20 (27) | 1 (3) | 8 (7) |
| 3. Goniometrische vergelijkingen | 5 (12) | 6 (14) | 12 (27) | 1 (3) | 5 (7) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken). Het handboek telt 46 pagina's (was 84 met vier hoofdstukken), de leerkrachtenversie 49 en de zelfstudieversie 52.

## Na te kijken

- **Zelfde inhoud als pakket 1.** B+S heeft een uur per week meer dan Basis, maar voor goniometrische functies dezelfde doelen. Wie de extra tijd wil gebruiken, kan de bewijzen (extra bij LPD 4) of de cosinusfunctie als volwaardig doel toevoegen; in de bron staan ze al voor pakket 3 en 4.
- **Voorkennis.** Wie in de 2de graad Wiskunde B+S of B+S'' volgde, kent de goniometrische cirkel en de verwante hoeken al (in graden); de anderen niet. Hoofdstuk 1 gaat ervan uit dat alles nieuw is.
- **Afgeleiden.** De cursus Afgeleiden van pakket 2 leidt de sinus en de cosinus af met de somformule (`cursussen/Afgeleiden`, hoofdstuk 3), maar B+S vraagt geen afgeleiden van goniometrische functies (LPD 20) en Goniometrische formules valt hier weg: daar na te kijken.
- **Cosinus, voorschrift uit een grafiek, booglengte, bijzondere waarden, boogsinus, GeoGebra-instructies, opgaven met "toon aan", moeilijke opdrachten, getij in `h4-o29`, pagina's met veel wit**: zoals in pakket 1 (zie de README daar).
- **Contexten van de wenk bij LPD 15**: getijden, temperatuur, cirkelvormige bewegingen en trillingen staan erin; ademhaling niet.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Goniometrische-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Goniometrische-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Goniometrische-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Goniometrische-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Goniometrische-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Analyse/Goniometrische functies"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het afstemmen gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek en in de oplossingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
