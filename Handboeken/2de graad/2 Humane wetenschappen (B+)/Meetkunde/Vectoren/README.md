# Vectoren: handboek

Handboek voor pakket 2 (B+) van de 2de graad, leerplan II-Wis'-d (KOV, versie oktober 2024): LPD 13, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Paul Signac, *De haven van Saint-Tropez* (publiek domein), met als motief de som van twee vectoren. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Vectoren/](../../../cursussen/Vectoren/). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](../../../../../Opmaak/pakketten.py)). Deze map kiest de hoofdstukken in `handboek.tex`. Dit pakket krijgt alleen hoofdstuk 1: vectoren tekenen, gelijke en tegengestelde vectoren, de nulvector, de som, het verschil en het veelvoud, en krachten (met het aangrijpingspunt) en snelheden samenstellen. LPD 13 vraagt alleen tekenen: hoofdstuk 2 (componenten, norm, ontbinden) hoort bij LPD 14 en staat alleen in pakket 4 en 5, en haakjes uitwerken en vereenvoudigen (rekenen met vectoren) staan hier niet in. Testvraag 6 gaat over snelheden. De volledige tabel met verschillen, de toetsing aan het leerplan en wat open blijft, staan in de [README van de bron](../../../cursussen/Vectoren/README.md).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Vectoren tekenen | `hoofdstukken/01-som-en-veelvoud.tex` | LPD 13 | getoetst aan het leerplan, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/2/Meetkunde/Vectoren"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/2/Meetkunde/Vectoren" --hoofdstuk 1    snel: alleen hoofdstuk 1, in snel-h1.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De afgeronde uitkomsten zijn nagerekend met Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
