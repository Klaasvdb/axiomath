# Stelsels: handboek

Handboek voor pakket 2 (B+) van de 2de graad, leerplan II-Wis'-d (versie oktober 2024), leerplandoelen 2 en 22-23, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Pieter de Hooch, *De goudweegster* (publiek domein), hetzelfde werk als Eerstegraadsvergelijkingen. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Stelsels/](../../../cursussen/Stelsels/). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](../../../../../Opmaak/pakketten.py)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 3 en 4: de drie hoofdstukken met alle kernleerstof, zonder parameter. De volledige tabel met verschillen, wat het leerplan besliste en wat open blijft, staat in de [README van de bron](../../../cursussen/Stelsels/README.md).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Grafisch oplossen | `hoofdstukken/01-grafisch.tex` | LPD 22 | eerste versie, getoetst aan het leerplan |
| 2. Algebraïsch oplossen | `hoofdstukken/02-algebraisch.tex` | LPD 23 | eerste versie, getoetst aan het leerplan |
| 3. Vraagstukken | `hoofdstukken/03-vraagstukken.tex` | LPD 23, 22 (tarieven), 2 | eerste versie, getoetst aan het leerplan |

De LPD-nummers zijn die van het leerplan van dit pakket en staan ook in de kaders voor de leerkracht. LPD 2 is het algemene doel over vraagstukken. Nog na te lezen: de tekst en de oefeningen, en het gebruik in de klas.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/2/Algebra/Stelsels"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/2/Algebra/Stelsels" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
