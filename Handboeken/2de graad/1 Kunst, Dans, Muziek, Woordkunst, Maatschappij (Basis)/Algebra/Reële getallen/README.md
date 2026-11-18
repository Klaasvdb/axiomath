# Reële getallen: handboek

Handboek voor pakket 1 (Basis) van de 2de graad, leerplandoelen 5-7, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Theo van Doesburg (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Reële getallen/](<../../../cursussen/Reële getallen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Lichtste versie: geen gemengd repeterende getallen omzetten, geen noemer wortelvrij maken. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Reële getallen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Van rationale naar reële getallen | `hoofdstukken/01-reele-getallen.tex` | LPD 5-7 | eerste versie, nog na te lezen |
| 2. Machten met gehele exponenten | `hoofdstukken/02-machten.tex` | LPD 5-7 | eerste versie, nog na te lezen |
| 3. Vierkantswortels | `hoofdstukken/03-vierkantswortels.tex` | LPD 5-7 | eerste versie, nog na te lezen |

De verdeling van LPD 5-7 over de drie hoofdstukken is nog na te kijken in het leerplan.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/1/Algebra/Reële getallen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/1/Algebra/Reële getallen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met Python en SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
