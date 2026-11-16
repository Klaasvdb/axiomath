# Eerstegraadsvergelijkingen: handboek

Handboek voor pakket 1 (Basis) van de 2de graad, leerplandoelen 14-16, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Pieter de Hooch (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Eerstegraadsvergelijkingen/](<../../../cursussen/Eerstegraadsvergelijkingen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Pakket 1, 2 en 3 hebben dezelfde inhoud. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Eerstegraadsvergelijkingen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Vergelijkingen en vraagstukken | `hoofdstukken/01-vergelijkingen.tex` | LPD 14 | eerste versie, nog na te lezen |
| 2. Ongelijkheden en intervallen | `hoofdstukken/02-ongelijkheden.tex` | LPD 15 | eerste versie, nog na te lezen |
| 3. Formules omvormen | `hoofdstukken/03-formules-omvormen.tex` | LPD 16 | eerste versie, nog na te lezen |

De verdeling van LPD 14-16 over de drie hoofdstukken is nog na te kijken in het leerplan.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/1/Algebra/Eerstegraadsvergelijkingen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/1/Algebra/Eerstegraadsvergelijkingen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met SymPy en Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
