# Spreidingsdiagrammen: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplandoel 40, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk, alle gegevens zijn verzonnen. De omslag is van Pierre-Auguste Renoir (publiek domein), dezelfde als bij Statistiek, met een spreidingsdiagram en trendlijn als motief. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor pakket 2-5 in [cursussen/Spreidingsdiagrammen/](<../../../cursussen/Spreidingsdiagrammen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 4, en ook een bewijsopdracht over de som van de residuen (hoofdstuk 1) en de formule van de correlatiecoëfficiënt als uitleg, met een voorbeeld en twee oefeningen (hoofdstuk 2). De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Spreidingsdiagrammen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Het spreidingsdiagram en de trendlijn | `hoofdstukken/01-spreidingsdiagram.tex` | LPD 40 | eerste versie, nog na te lezen |
| 2. De correlatiecoëfficiënt | `hoofdstukken/02-correlatie.tex` | LPD 40 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Data en onzekerheid/Spreidingsdiagrammen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Data en onzekerheid/Spreidingsdiagrammen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De regressielijnen en correlatiecoëfficiënten zijn nagerekend met Python. Niet getest: de afdruk op de schoolkopieerder, het gebruik in de klas en de stappen op een concreet rekentoestel.
