# Tweedegraadsfuncties: handboek

Handboek voor pakket 1 (Basis) van de 2de graad, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Leerplan: KOV II-Wis-d (Basis, versie oktober 2024), LPD 24. Alle opgaven zijn eigen werk. De omslag is van John Singer Sargent (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Tweedegraadsfuncties/](<../../../cursussen/Tweedegraadsfuncties/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Dit pakket heeft één hoofdstuk, over $f(x) = ax^2$ (LPD 24): de parabool $y = x^2$, de invloed van $a$, top en symmetrieas, het voorschrift uit één punt, toenemende en afnemende stijging of daling, de kenmerken met het tekenschema (de nulwaarde ook algebraïsch), en een sectie Toepassingen met de vergelijking $ax^2 = k$ (vierkantswortels uit Reële getallen, voor de vragen in een context) en problemen met een kwadratisch verband (zoals de brug uit het probleem). Het verschuiven, de algemene vorm, de vergelijkingen en de ongelijkheden horen niet bij dit leerplan. De volledige tabel met verschillen, de toetsing aan het leerplan en wat open blijft, staat in de [README van de bron](<../../../cursussen/Tweedegraadsfuncties/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De functie $f(x) = ax^2$ | `hoofdstukken/01-parabool.tex` | LPD 24 | eerste versie, getoetst aan het leerplan, nog na te lezen |

De verdeling van de leerplandoelen over de hoofdstukken is getoetst aan het leerplan (24 november 2026).

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/1/Analyse/Tweedegraadsfuncties"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/1/Analyse/Tweedegraadsfuncties" --hoofdstuk 1    snel: alleen hoofdstuk 1, in snel-h1.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met Python en SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
