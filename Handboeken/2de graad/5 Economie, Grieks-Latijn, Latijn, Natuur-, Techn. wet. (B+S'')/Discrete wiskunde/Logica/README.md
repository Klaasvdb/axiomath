# Logica: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplandoelen 36 en B1, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Sophie Taeuber-Arp (publiek domein in de EU). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Logica/](<../../../cursussen/Logica/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 4, met twee extra opdrachten van niveau 3, en hoofdstuk 3 over bewijzen (leerplandoel B1). De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Logica/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Uitspraken en waarheidstabellen | `hoofdstukken/01-uitspraken.tex` | LPD 36 | eerste versie, nog na te lezen |
| 2. Implicatie en equivalentie | `hoofdstukken/02-implicatie-en-equivalentie.tex` | LPD 36 | eerste versie, nog na te lezen |
| 3. Bewijzen | `hoofdstukken/03-bewijzen.tex` | LPD B1 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Discrete wiskunde/Logica"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Discrete wiskunde/Logica" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De waarheidstabellen zijn met een script berekend en nagekeken. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
