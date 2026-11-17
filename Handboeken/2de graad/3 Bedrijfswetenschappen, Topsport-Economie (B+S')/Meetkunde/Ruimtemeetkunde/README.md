# Ruimtemeetkunde: handboek

Handboek voor pakket 3 (B+S') van de 2de graad, leerplandoel 12, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Pieter Saenredam (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Ruimtemeetkunde/](<../../../cursussen/Ruimtemeetkunde/>) (de 2de graad; de cursus Ruimtemeetkunde van de 3de graad is een andere). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 2. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Ruimtemeetkunde/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Onderlinge ligging van twee rechten | `hoofdstukken/01-twee-rechten.tex` | LPD 12 | eerste versie, nog na te lezen |
| 2. Onderlinge ligging van vlakken | `hoofdstukken/02-vlakken.tex` | LPD 12 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/3/Meetkunde/Ruimtemeetkunde"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/3/Meetkunde/Ruimtemeetkunde" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De liggingen, snijpunten en doorsneden zijn nagerekend met coördinaten in Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
