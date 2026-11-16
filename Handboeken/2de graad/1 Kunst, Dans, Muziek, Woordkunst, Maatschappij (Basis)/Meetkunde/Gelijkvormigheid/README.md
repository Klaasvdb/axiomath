# Gelijkvormigheid: handboek

Handboek voor pakket 1 (Basis) van de 2de graad, leerplandoelen 8-9, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Wassily Kandinsky (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Gelijkvormigheid/](<../../../cursussen/Gelijkvormigheid/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zonder de negatieve factor van de homothetie, de hoogtelijn in een rechthoekige driehoek, de opdracht over het A-formaat en de bewijzen van ZZZ en ZHZ. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Gelijkvormigheid/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Schaal | `hoofdstukken/01-schaal.tex` | LPD 8 | eerste versie, nog na te lezen |
| 2. Gelijkvormige driehoeken | `hoofdstukken/02-gelijkvormige-driehoeken.tex` | LPD 9 | eerste versie, nog na te lezen |

De verdeling van LPD 8-9 over de twee hoofdstukken is nog na te kijken in het leerplan.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/1/Meetkunde/Gelijkvormigheid"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/1/Meetkunde/Gelijkvormigheid" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De afgeronde getallen zijn nagerekend met Python, de rest met de hand. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
