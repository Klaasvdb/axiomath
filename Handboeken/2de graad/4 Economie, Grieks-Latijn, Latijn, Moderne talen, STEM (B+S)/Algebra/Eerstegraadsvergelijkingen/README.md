# Eerstegraadsvergelijkingen: handboek

Handboek voor pakket 4 (B+S) van de 2de graad, leerplan II-WisS-d (versie oktober 2024, D/2024/13.758/350), LPD 18-20, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Pieter de Hooch (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Eerstegraadsvergelijkingen/](<../../../cursussen/Eerstegraadsvergelijkingen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Meer dan in pakket 1-3: vergelijkingen en ongelijkheden met een parameter (een extra bij LPD 18 en 19), dubbele ongelijkheden, formules waarin de letter twee keer staat, en een opdracht over de eenparig versnelde beweging. De volledige tabel met verschillen, wat het leerplan besliste en wat nog open is, staat in de [README van de bron](<../../../cursussen/Eerstegraadsvergelijkingen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Vergelijkingen en vraagstukken | `hoofdstukken/01-vergelijkingen.tex` | LPD 18 | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 2. Ongelijkheden en intervallen | `hoofdstukken/02-ongelijkheden.tex` | LPD 19 | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 3. Formules omvormen | `hoofdstukken/03-formules-omvormen.tex` | LPD 20 | eerste versie, getoetst aan het leerplan, nog na te lezen |

Elk hoofdstuk hoort bij één leerplandoel van de rubriek Eerstegraadsvergelijkingen, -ongelijkheden en omvormen van formules (getoetst op 24 november 2026).

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/4/Algebra/Eerstegraadsvergelijkingen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/4/Algebra/Eerstegraadsvergelijkingen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met SymPy en Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
