# Analytische meetkunde: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplandoelen B2-B5, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Paul Signac, *De haven van Saint-Tropez* (publiek domein), hetzelfde werk als Vectoren, met de som van twee vectoren als motief. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan in [cursussen/Analytische meetkunde/](<../../../cursussen/Analytische meetkunde/>). Dit handboek bestaat alleen in pakket 5, dus er zijn geen verschillen per pakket. Deze map kiest de hoofdstukken in `handboek.tex`. Wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Analytische meetkunde/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Vergelijkingen van een rechte | `hoofdstukken/01-rechten.tex` | LPD B2-B3 | eerste versie, nog na te lezen |
| 2. Inproduct, afstand en hoek | `hoofdstukken/02-inproduct.tex` | LPD B4-B5 | eerste versie, nog na te lezen |

De verdeling van LPD B2-B5 over de twee hoofdstukken is nog na te kijken in het leerplan. Voorkennis: Vectoren (hoofdstuk 2), Functies, Stelsels, Driehoeksmeting en Goniometrie (cosinusregel).

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Meetkunde/Analytische meetkunde"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Meetkunde/Analytische meetkunde" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
