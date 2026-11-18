# Tweedegraadsfuncties: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, LPD 29-34, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van John Singer Sargent (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Tweedegraadsfuncties/](<../../../cursussen/Tweedegraadsfuncties/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 4, en daarbij de bewijzen waar ze kort zijn en iets uitleggen: de symmetrie van de topvorm, de formule voor de top, de formule met de discriminant (met kwadraatafsplitsen) en de som en het product van de oplossingen, met een paar bewijsopdrachten. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Tweedegraadsfuncties/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De parabool $y = a(x - p)^2 + q$ | `hoofdstukken/01-parabool.tex` | LPD 29-34 | eerste versie, nog na te lezen |
| 2. De vorm $ax^2 + bx + c$ | `hoofdstukken/02-algemene-vorm.tex` | LPD 29-34 | eerste versie, nog na te lezen |
| 3. Tweedegraadsvergelijkingen | `hoofdstukken/03-vergelijkingen.tex` | LPD 29-34 | eerste versie, nog na te lezen |
| 4. Tweedegraadsongelijkheden | `hoofdstukken/04-ongelijkheden.tex` | LPD 29-34 | eerste versie, nog na te lezen |

De verdeling van de leerplandoelen over de hoofdstukken is nog na te kijken in het leerplan.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Analyse/Tweedegraadsfuncties"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Analyse/Tweedegraadsfuncties" --hoofdstuk 1    snel: alleen hoofdstuk 1, in snel-h1.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met Python en SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
