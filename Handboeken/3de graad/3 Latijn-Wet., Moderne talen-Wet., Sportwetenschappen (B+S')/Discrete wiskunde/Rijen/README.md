# Rijen: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 34, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Rijen/](<../../../cursussen/Rijen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgeleide versie.** Afgeleid van [Rijen voor pakket 4](<../../../4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Discrete wiskunde/Rijen/README.md>): hoofdstuk 1-3, met dezelfde leerstof, voorbeelden en oefeningen (zelfde id's). LPD 34 vraagt hetzelfde als het rijen-deel van LPD 44 in B+S'': rekenkundige en meetkundige rijen om patronen te beschrijven, recursief en expliciet voorschrift, en de formule voor de som van de eerste $n$ termen, met enkelvoudige en samengestelde intrest als context. Hoofdstuk 4 (limiet van een rij) valt weg: dat is LPD 45-46 en bestaat alleen in B+S''.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rijen: begrippen | `hoofdstukken/01-rijen-begrippen.tex` | LPD 34 | eerste versie, nog na te lezen |
| 2. Rekenkundige en meetkundige rijen | `hoofdstukken/02-rekenkundige-en-meetkundige-rijen.tex` | LPD 34 | eerste versie, nog na te lezen |
| 3. Somformules | `hoofdstukken/03-somformules.tex` | LPD 34 | eerste versie, nog na te lezen |

## Aangepast ten opzichte van pakket 4

- De leerplanverwijzingen in de leerkrachtennota's en de voorkant.
- Koppel: geschrapt naar telproblemen en logica en bewijzen, die niet in dit pakket zitten.
- Waar de oefening met de formule voor $\sum i^2$ geschrapt is, staat die formule nu in de opgave van de Koppel-oefening over integralen (`h3-koppel-4`).
- Uitbreidingen die het leerplan niet uitdrukkelijk vraagt, met een nota voor de leerkracht: het somteken en sparen met vaste stortingen.
- **Ingekort** (18 nov 2026): dezelfde leerstof als pakket 4, maar minder opdrachten. Hoofdstuk 1 heeft 26 van de 35 opdrachten (weg: `h1-o6`, `h1-o8`, `h1-o10`, `h1-o15`, `h1-o16`, `h1-o17`, `h1-o20`, `h1-o21`, `h1-o22`), hoofdstuk 2 heeft 41 van de 64 (weg: herhalingen zoals `h2-herken`, `h2-o4`, `h2-o7`, `h2-o13`, `h2-o14`, `h2-o16`, `h2-o17`, `h2-o22`, `h2-o32`, `h2-o33`, `h2-o36`, `h2-o39`, `h2-o43`-`h2-o46`, en `h2-o11`, `h2-o12`, `h2-o20`, `h2-o37`, `h2-o50`, `h2-o51`, `h2-o53`), hoofdstuk 3 heeft 27 van de 34 (weg: `h3-o4`, `h3-o5`, `h3-o9`, `h3-o13`, `h3-o23`, en `h3-o19`, de slak, die naar de limiet van hoofdstuk 4 verwees; ook `h3-o21` (lening) valt weg). Wat wegvalt, zijn vooral herhalingen en een deel van niveau 3; elke opdracht uit het schema Fout? Herhaal blijft. Het handboek telt 52 pagina's (was 57).
- De voorkant heeft een eigen motief, `rijen-trappen`: de trappen uit hoofdstuk 1 in plaats van de termen die naar hun limiet gaan.

## Lestijden

Het leerplan noemt geen lestijden per doel (de leerplantekst B+S' hebben we niet; de keuzes steunen op LPD 34 zoals hierboven omschreven). Pakket 3 heeft 200 lestijden per graad voor twaalf cursussen (en Telproblemen, alleen voor GO!). Voor Rijen rekenen we op ongeveer 12 à 15 lestijden: genoeg voor alle leerstof van hoofdstuk 1-3, ook het rekenkundig en meetkundig midden, het somteken en sparen met vaste stortingen, maar niet voor alle opdrachten van pakket 4.

## Na te kijken

- **Lestijden:** een schatting. Per doel gerekend (LPD 5-41 over 200 lestijden) kom je lager uit, rond 6 lestijden; dan moeten ook het somteken en sparen met vaste stortingen weg, zoals in pakket 1.
- **De keuze van de opdrachten** is zonder de leerplantekst gemaakt. Wie meer tijd heeft, vindt de weggevallen opdrachten in pakket 4.
- **Bestaand, ook in pakket 4:** in hoofdstuk 3 staat de korte oefening bij De som als rij alleen op een pagina, en het schema Fout? Herhaal van hoofdstuk 2 staat op een nieuwe pagina.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Rijen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Rijen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Rijen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Rijen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Rijen-zelfstudie.pdf)

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "3/Discrete wiskunde/Rijen"
```

## Nog te doen

- Nalezen door andere leerkrachten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
