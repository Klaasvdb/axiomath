# Telproblemen: handboek

Handboek voor pakket 2 (B+) van de 2de graad, leerplandoel 29, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Pieter Bruegel de Oude, *De volkstelling te Bethlehem* (publiek domein), met als motief een boomdiagram $2 \cdot 2 \cdot 2 = 8$. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Telproblemen/](<../../../cursussen/Telproblemen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zonder de faculteit als notatie en zonder drie verzamelingen. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Telproblemen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Boomdiagrammen en de productregel | `hoofdstukken/01-productregel.tex` | LPD 29 | eerste versie, nog na te lezen |
| 2. Venndiagrammen, som- en complementregel | `hoofdstukken/02-somregel.tex` | LPD 29 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/2/Discrete wiskunde/Telproblemen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/2/Discrete wiskunde/Telproblemen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

Alle aantallen zijn nagerekend met een Python-script, met brute force waar dat kan. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
