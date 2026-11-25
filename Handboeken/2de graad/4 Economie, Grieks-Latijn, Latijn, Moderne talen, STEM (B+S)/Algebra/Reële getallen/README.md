# Reële getallen: handboek

Handboek voor pakket 4 (B+S) van de 2de graad, leerplan II-WisS-d (versie oktober 2024), leerplandoelen 5-7, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Theo van Doesburg (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Reële getallen/](<../../../cursussen/Reële getallen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 3, en ook $\sqrt{a^2} = \lvert a\rvert$ (eigen keuze). Geen noemer van twee termen: het leerplan noemt alleen één term. De volledige tabel met verschillen, wat het leerplan besliste en wat open blijft, staat in de [README van de bron](<../../../cursussen/Reële getallen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Van rationale naar reële getallen | `hoofdstukken/01-reele-getallen.tex` | LPD 5, 6; LPD 4 (bewijs) | eerste versie, getoetst aan het leerplan |
| 2. Machten met gehele exponenten | `hoofdstukken/02-machten.tex` | LPD 7 | eerste versie, getoetst aan het leerplan |
| 3. Vierkantswortels | `hoofdstukken/03-vierkantswortels.tex` | LPD 7 | eerste versie, getoetst aan het leerplan |

De LPD-nummers zijn die van het leerplan van dit pakket en staan ook in de kaders voor de leerkracht. Nog na te lezen: de tekst en de oefeningen, en het gebruik in de klas.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/4/Algebra/Reële getallen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/4/Algebra/Reële getallen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met Python en SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
