# Analytische meetkunde: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplan II-WisS''-d (versie oktober 2024): LPD B2-B5 en B1, met het servicedocument voor 5 uur, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Paul Signac, *De haven van Saint-Tropez* (publiek domein), hetzelfde werk als Vectoren, met de som van twee vectoren als motief. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan in [cursussen/Analytische meetkunde/](<../../../cursussen/Analytische meetkunde/>). Dit handboek bestaat alleen in pakket 5, dus er zijn geen verschillen per pakket. Deze map kiest de hoofdstukken in `handboek.tex`. Wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Analytische meetkunde/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Vergelijkingen van een rechte | `hoofdstukken/01-rechten.tex` | LPD B3, B4 (zonder loodrechte stand), B1 | getoetst aan het leerplan, nog na te lezen |
| 2. Inproduct, afstand en hoek | `hoofdstukken/02-inproduct.tex` | LPD B2, B4 (loodrechte stand), B5, B1 | getoetst aan het leerplan, nog na te lezen |
| 3. De cirkel | `hoofdstukken/03-cirkel.tex` | servicedocument 5 uur (extra's bij B3-B5), B1 | nieuw, nog na te lezen |

Hoofdstuk 3 komt uit het servicedocument voor 5 uur (de cirkel met vergelijkingen, die het leerplan als extra bij B3-B5 geeft): volgt de school die leerlijn niet, dan laat ze het weg in `handboek.tex` (hoofdstuk 1 en 2 steunen er niet op). Sinds de toetsing aan het leerplan zijn de bissectrices leerstof in hoofdstuk 2 (verplicht in het servicedocument), met loodrechte rechten via normaalvectoren en de hoogtelijn erbij. Voorkennis: Vectoren (hoofdstuk 2), Functies, Stelsels, Driehoeksmeting, Goniometrie (cosinusregel) en Tweedegraadsfuncties (kwadraatafsplitsen, voor hoofdstuk 3).

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
