# Vectoren: handboek

Handboek voor pakket 4 (B+S) van de 2de graad, leerplan II-WisS-d (KOV, versie oktober 2024): LPD 13-14, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Paul Signac, *De haven van Saint-Tropez* (publiek domein), met als motief de som van twee vectoren. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Vectoren/](../../../cursussen/Vectoren/). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](../../../../../Opmaak/pakketten.py)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 1-3, en ook haakjes uitwerken en vereenvoudigen, het bewijs van de middenparallel met vectoren (met twee bewijsopdrachten) en hoofdstuk 2 (LPD 14): componenten in een orthonormaal assenstelsel, de norm, het midden van een lijnstuk (een extra bij LPD 14) en ontbinden (grafisch, met een stelsel en met cosinus en sinus). Het zwaartepunt van een driehoek, de tweede extra, staat er niet in. De volledige tabel met verschillen, de toetsing aan het leerplan en wat open blijft, staan in de [README van de bron](../../../cursussen/Vectoren/README.md).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Vectoren tekenen | `hoofdstukken/01-som-en-veelvoud.tex` | LPD 13, haakjes en bewijzen LPD 14 | getoetst aan het leerplan, nog na te lezen |
| 2. Rekenen met vectoren | `hoofdstukken/02-componenten.tex` | LPD 14 | getoetst aan het leerplan, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/4/Meetkunde/Vectoren"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/4/Meetkunde/Vectoren" --hoofdstuk 1    snel: alleen hoofdstuk 1, in snel-h1.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De afgeronde uitkomsten zijn nagerekend met Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
