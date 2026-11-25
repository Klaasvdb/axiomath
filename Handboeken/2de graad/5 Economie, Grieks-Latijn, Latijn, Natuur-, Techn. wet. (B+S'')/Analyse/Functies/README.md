# Functies: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplan II-WisS''-d (KOV, versie oktober 2024): LPD 21-25 en 28, met B1 (bewijzen) en het servicedocument voor 5 uur wiskunde, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Utagawa Hiroshige (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Functies/](<../../../cursussen/Functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 4, met meer diepgang: de pijlnotatie $f: x \mapsto \ldots$, relatief en absoluut extremum (het servicedocument vraagt de extrema van een willekeurige functie), een bewijs bij de stappen in een tabel van een eerstegraadsfunctie en bewijsopdrachten (B1), een functie in stukken, letters als argument, een opdracht met een parameter, het woord asymptoot, en de extra wenk bij LPD 28: de verschoven hyperbool $\frac{6}{x} + 2$ en hyperbolen opbouwen uit $\frac{1}{x}$. De volledige tabel met verschillen, de toetsing aan het leerplan en wat open blijft, staan in de [README van de bron](<../../../cursussen/Functies/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Wat is een functie? | `hoofdstukken/01-functies.tex` | LPD 21 | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 2. Eerstegraadsfuncties | `hoofdstukken/02-eerstegraadsfuncties.tex` | LPD 22, 23 (en B1) | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 3. Kenmerken en grafisch oplossen | `hoofdstukken/03-kenmerken.tex` | LPD 24, 25 (en B1) | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 4. De functie $f(x) = \frac{c}{x}$ | `hoofdstukken/04-omgekeerd-evenredig.tex` | LPD 28 | eerste versie, getoetst aan het leerplan, nog na te lezen |

De verdeling van de leerplandoelen over de hoofdstukken is getoetst aan het leerplan (24 november 2026).

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Analyse/Functies"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Analyse/Functies" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De uitkomsten zijn nagerekend met Python en SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
