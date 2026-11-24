# Spreidingsdiagrammen: handboek

Handboek voor pakket 2 (B+) van de 2de graad, leerplan Wiskunde B+ (II-Wis'-d, versie oktober 2024), LPD 34, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk, alle gegevens zijn verzonnen. De omslag is van Pierre-Auguste Renoir (publiek domein), dezelfde als bij Statistiek, met een spreidingsdiagram en trendlijn als motief. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor pakket 2-5 in [cursussen/Spreidingsdiagrammen/](<../../../cursussen/Spreidingsdiagrammen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Alle pakketten hebben op één opdracht na dezelfde inhoud (het leerplandoel heeft in B+, B+S', B+S en B+S'' dezelfde tekst): een informeel begrip van de trendlijn met ICT, zonder residuen of kleinste kwadraten, en de correlatiecoëfficiënt met ICT, zonder formule. Pakket 2 mist alleen de opdracht over een omgekeerd evenredig verband (`h2-o24`), omdat *c/x* in B+ een keuzedeel is. De toetsing aan het leerplan en wat nog na te kijken is, staan in de [README van de bron](<../../../cursussen/Spreidingsdiagrammen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Het spreidingsdiagram en de trendlijn | `hoofdstukken/01-spreidingsdiagram.tex` | LPD 34 | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 2. De correlatiecoëfficiënt | `hoofdstukken/02-correlatie.tex` | LPD 34 | eerste versie, getoetst aan het leerplan, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/2/Data en onzekerheid/Spreidingsdiagrammen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/2/Data en onzekerheid/Spreidingsdiagrammen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De regressielijnen en correlatiecoëfficiënten zijn nagerekend met Python. Niet getest: de afdruk op de schoolkopieerder, het gebruik in de klas en de stappen op een concreet rekentoestel.
