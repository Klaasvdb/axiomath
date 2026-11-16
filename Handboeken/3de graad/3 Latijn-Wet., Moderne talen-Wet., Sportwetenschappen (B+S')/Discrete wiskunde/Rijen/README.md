# Rijen: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 34, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

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

- Inkorten of selecteren voor 200 lestijden per graad: kies na vergelijking met de jaarplanning welke opdrachten en uitbreidingen blijven.
- Nalezen door andere leerkrachten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
- De voorkant gebruikt het gedeelde motief van Rijen, met de termen die naar hun limiet gaan, hoewel limieten in dit pakket niet aan bod komen.
