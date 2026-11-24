# Veeltermen: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Kazimir Malevitsj (publiek domein), met als motief de algebrategels van $(x + 1)(x + 2) = x^2 + 3x + 2$. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Leerplan:** Wiskunde B+S'', II-WisS''-d (Katholiek Onderwijs Vlaanderen, versie oktober 2024): LPD B6 (deelbaarheid bij veeltermen) en B1 (bewijzen). Hoofdstuk 3 komt uit het servicedocument voor 5 uur (bijkomende leerinhoud bij B6) en staat niet in het leerplan zelf: een school die die leerlijn niet volgt, haalt `\hoofdstuk{3}{03-rationale-vormen}` weg uit `handboek.tex`. Geen ander pakket vraagt deelbaarheid bij veeltermen.

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan in [cursussen/Veeltermen/](<../../../cursussen/Veeltermen/>). Dit handboek bestaat alleen in pakket 5; deze map kiest de hoofdstukken in `handboek.tex`. Wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/Veeltermen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met veeltermen en delen | `hoofdstukken/01-rekenen-en-delen.tex` | LPD B6, B1 | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 2. De reststelling en ontbinden | `hoofdstukken/02-reststelling.tex` | LPD B6, B1 | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 3. Rationale vormen | `hoofdstukken/03-rationale-vormen.tex` | servicedocument 5 uur (B6) | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Algebra/Veeltermen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Algebra/Veeltermen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
