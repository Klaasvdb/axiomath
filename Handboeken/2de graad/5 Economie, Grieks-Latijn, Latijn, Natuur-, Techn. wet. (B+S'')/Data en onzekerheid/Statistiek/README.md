# Statistiek: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplandoelen 37-39, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk, alle gegevens zijn verzonnen. De omslag is van Pierre-Auguste Renoir (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Statistiek/](../../../cursussen/Statistiek/). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](../../../../../Opmaak/pakketten.py)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 4, en ook het effect van een verschuiving en vermenigvuldiging van alle gegevens ($a x + b$) op de maten, met een kort bewijs. De volledige tabel met verschillen, de afspraken (kwartielen, standaardafwijking) en wat nog na te kijken is, staan in de [README van de bron](../../../cursussen/Statistiek/README.md).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Gegevens voorstellen | `hoofdstukken/01-gegevens-voorstellen.tex` | LPD 37-39 | eerste versie, nog na te lezen |
| 2. Centrum- en spreidingsmaten | `hoofdstukken/02-centrum-en-spreiding.tex` | LPD 37-39 | eerste versie, nog na te lezen |
| 3. Gegevens analyseren | `hoofdstukken/03-analyseren.tex` | LPD 37-39 | eerste versie, nog na te lezen |

De verdeling van LPD 37-39 over de drie hoofdstukken is nog na te kijken in het leerplan.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Data en onzekerheid/Statistiek"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Data en onzekerheid/Statistiek" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De centrum- en spreidingsmaten, kwartielen, frequenties, hoeken en percentages zijn nagerekend met Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
