# Grafen: handboek

Keuzehandboek voor pakket 5 (B+S'') van de 2de graad, keuzedoelen K2-K3, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Paul Klee (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor pakket 4 en 5 in [cursussen/Grafen/](<../../../cursussen/Grafen/>). Wat maar voor één pakket geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 4, en ook het bewijs dat even graden volstaan voor een eulerkring, en vier extra bewijsopdrachten (twee per hoofdstuk). De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Grafen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Een graaf als model | `hoofdstukken/01-graaf-als-model.tex` | K2-K3 | eerste versie, nog na te lezen |
| 2. Problemen oplossen met grafen | `hoofdstukken/02-problemen-oplossen.tex` | K2-K3 | eerste versie, nog na te lezen |

Welk deel van K2-K3 bij welk hoofdstuk hoort, is nog na te kijken in het leerplan.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Discrete wiskunde/Grafen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Discrete wiskunde/Grafen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in één pakket staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De antwoorden zijn nagerekend met Python (eulerpaden en kortste paden met brute force). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
