# Functies: handboek

Handboek voor pakket 2 (B+) van de 2de graad, LPD 17-21 en keuzedoel K1, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Utagawa Hiroshige (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Functies/](<../../../cursussen/Functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Hoofdstuk 4 is een keuzehoofdstuk (K1): een school mag het weglaten. Verder zoals pakket 1. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Functies/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Wat is een functie? | `hoofdstukken/01-functies.tex` | LPD 17-21 | eerste versie, nog na te lezen |
| 2. Eerstegraadsfuncties | `hoofdstukken/02-eerstegraadsfuncties.tex` | LPD 17-21 | eerste versie, nog na te lezen |
| 3. Kenmerken en grafisch oplossen | `hoofdstukken/03-kenmerken.tex` | LPD 17-21 | eerste versie, nog na te lezen |
| 4. De functie $f(x) = \frac{c}{x}$ | `hoofdstukken/04-omgekeerd-evenredig.tex` | K1 (keuze) | eerste versie, nog na te lezen |

De verdeling van de leerplandoelen over de hoofdstukken is nog na te kijken in het leerplan.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/2/Analyse/Functies"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/2/Analyse/Functies" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met Python en SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
