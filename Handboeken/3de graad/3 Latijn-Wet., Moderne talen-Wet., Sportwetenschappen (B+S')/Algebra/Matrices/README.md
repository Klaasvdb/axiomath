# Matrices: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 26-28, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Matrices/](<../../../cursussen/Matrices/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S', III-WisS'-d (versie oktober 2024), rubriek Algebra, deelrubriek Matrices, drie minimumdoelen (geen keuzedoelen):

- LPD 26: bewerkingen met matrices (optelling, scalaire vermenigvuldiging, matrixvermenigvuldiging, machtsverheffing en transpositie), met de wenken over matrices als opslagplaats van gegevens en over het product (met voorbeelden: niet commutatief, wel associatief, nuldelers);
- LPD 27: matrixmodellen voor evoluties, met de matrixvoorstelling van een graaf, met de wenken over de contexten (lesliematrices, migratie, verbindingsmatrices, Markovketens), eerst een graaf, ICT voor machten en de evolutie op lange termijn;
- LPD 28: stelsels oplossen met de methode van Gauss-Jordan, met de wenken: minstens één stelsel met drie onbekenden, bepaalde, onbepaalde en strijdige stelsels, beperkt rekenwerk met de hand en ICT bij minder eenvoudige stelsels.

De inverse, de determinant, de rang en stelsels met een parameter staan niet in dit leerplan. Bewijsvoering hoort bij LPD 4, met rekenregels als voorbeeld. Het leerplan geeft geen lestijden per rubriek.

**Afgestemd op B+S'** (24 nov 2026). De versie kwam van pakket 4. `handboek.tex` kiest nu de hoofdstukken 1, 2 en 4 van de bron, als hoofdstuk 1, 2 en 3; hoofdstuk 3 van de bron (Inverse, determinant en rang) valt weg. De andere verschillen staan in de bron met `\alleenvoor` of `pakketten:` in de YAML. Pakket 1 en 4 zijn ongewijzigd (hun `gen/` is na het bouwen identiek aan die van voor de aanpassing). Pakket 2 (B+S, LPD 25-27) heeft dezelfde doelen en dus dezelfde inhoud; alleen de leerkrachtennota's verschillen.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met matrices | `hoofdstukken/01-rekenen-met-matrices.tex` | LPD 26 (bewijzen: LPD 4) | afgestemd, nog na te lezen |
| 2. Stelsels en de methode van Gauss-Jordan | `hoofdstukken/02-stelsels.tex` | LPD 28 | afgestemd, nog na te lezen |
| 3. Matrixmodellen | `hoofdstukken/04-matrixmodellen.tex` | LPD 27 (evenwicht met Gauss-Jordan: LPD 28) | afgestemd, nog na te lezen |

## Verschillen met pakket 4

| Waar | In pakket 3 | Reden |
|---|---|---|
| Hoofdstuk 3 van de bron (inverse, determinant en rang) | weg (niet in `handboek.tex`); hoofdstuk 4 van de bron heet hier 3 (`\mychapter` en de verwijzing in hoofdstuk 1 met `\alleenvoor`) | niet in LPD 26-28 |
| 1, inleiding | zonder "zoek je het omgekeerde van een matrix" | geen inverse |
| 2, stelsels met een parameter | weg: de subsectie met voorbeeld `vb:h2-parameter`, de werkwijze en de korte oefeningen `h2-parameter` en `h2-parameter2`; de opdrachten `h2-o10`, `h2-o13` en `h2-o22`; testvraag `h2-t5` en zijn regel in het herhaalschema; de zin erover in *Maak je eigen samenvatting* | de wenken bij LPD 28 noemen geen parameters (die bij LPD 37 van pakket 4 wel) |
| 3, opdracht `h4-o24` b | eigen versie van de uitwerking: eliminatie (of Gauss-Jordan, `rref`) in plaats van de regel van Cramer | Cramer staat bij de determinant, die wegvalt |
| Leerkrachtennota's | LPD 26 (hoofdstuk 1), LPD 28 (hoofdstuk 2) en LPD 27 (hoofdstuk 3) in plaats van "LPD 26-28 (matrices)" bij elk hoofdstuk; geen verwijzing meer naar hoofdstuk 3 (de inverse) en naar Cramer; in hoofdstuk 1: de bewijzen horen bij LPD 4 (bewijsvoering) | III-WisS'-d |
| Koppel | ongewijzigd (Rijen, Statistiek, Kansrekenen, Exponentiële en logaritmische functies, en leerstof van de 2de graad) | die cursussen staan in dit pakket |

Aantallen in pakket 3 (pakket 4 tussen haakjes):

| Hoofdstuk | Voorbeelden | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|---|
| 1. Rekenen met matrices | 20 (20) | 14 (14) | 25 (25) | 3 (3) | 8 (8) |
| 2. Stelsels en de methode van Gauss-Jordan | 6 (7) | 7 (9) | 23 (26) | 2 (2) | 6 (7) |
| 3. Matrixmodellen | 8 (8) | 8 (8) | 26 (26) | 3 (3) | 7 (7) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken). Het handboek telt 73 pagina's (was 101, met vier hoofdstukken), de leerkrachtenversie 78 (was 108), de zelfstudieversie 82 (was 113), de numerieke oplossingen 7 (was 9) en de uitgewerkte oplossingen 30 (was 43).

## Na te kijken

- **Inverse, determinant en rang.** Hoofdstuk 3 van de bron valt weg omdat LPD 26-28 het niet vragen. Wil een school het toch geven, zet dan `\hoofdstuk{3}{03-inverse-determinant-rang}` terug in `handboek.tex`, met Matrixmodellen als hoofdstuk 4; dan moeten ook `\mychapter` van Matrixmodellen en de verwijzing in hoofdstuk 1 weer 4 zijn, en de leerkrachtennota bovenaan hoofdstuk 3 (die er nu alleen voor pakket 4 staat) een versie voor pakket 3 krijgen. `Handboeken/koepels.yaml` vermeldt Matrices voor pakket 3 niet apart (geen `niet:` of `keuze:`), dus daar hoeft niets te veranderen.
- **Integralen, opdracht `h3-koppel-2`** (Koppel naar Matrices: "Los op met de inverse matrix") staat ook in pakket 3, maar de inverse komt hier niet meer aan bod. Die cursus wordt apart afgestemd; daar is na te gaan of de opdracht in pakket 3 met een stelsel (Gauss-Jordan) moet.
- **Opdracht `h2-o25`** (voor welk rechterlid $p$, $q$, $r$ is een stelsel oplosbaar, niveau 3) rekent met letters in het rechterlid, dicht bij het bespreken van een stelsel met een parameter. Ze bleef als uitdaging.
- **Wetenschappelijke toepassingen.** LPD 26-28 zijn dezelfde als in B+S; de contexten (populaties met lesliematrices, migratie, Markovketens) zijn al wetenschappelijk. Er is niets toegevoegd.
- **Halve pagina:** zonder de parameters eindigt de leerstof van hoofdstuk 2 halfweg een pagina (de Opdrachten beginnen altijd op een nieuwe pagina).
- **Rekentoestel:** de tekst noemt de TI-84 (`rref(`, het matrixmenu). Pas aan als de school een ander toestel gebruikt.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Matrices-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Matrices-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Matrices-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Matrices-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Matrices-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Algebra/Matrices"
```

## Controle

Gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek, de leerkrachten- en zelfstudieversie en de oplossingen; geen overvolle regels van meer dan 2 pt. Pakket 1 en 4 geven dezelfde `gen/`-bestanden als voor de aanpassing (`diff -r`). De nieuwe uitwerking van `h4-o24` b ($v_1 = 0{,}2$, $v_2 = 2{,}2$) is nagerekend met SymPy; de rest van de wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
