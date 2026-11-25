# Telproblemen: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplan II-WisS''-d, versie oktober 2024, met het servicedocument voor 5 uur (dat bij dit doel niets toevoegt): LPD 35, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Pieter Bruegel de Oude, *De volkstelling te Bethlehem* (publiek domein), met als motief een boomdiagram $2 \cdot 2 \cdot 2 = 8$. De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Telproblemen/](<../../../cursussen/Telproblemen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Met het wegendiagram en de tabel (roosterdiagram), een wenk bij LPD 35; met de faculteit als notatie (uitleg, als voorbereiding op Telproblemen in de 3de graad met 6 uur) en, als verdieping die het leerplan niet vraagt, drie verzamelingen in een venndiagram (onderdeel, korte oefening, twee opdrachten, testvraag). De volledige tabel met verschillen, wat het leerplan besliste en wat open blijft, staat in de [README van de bron](<../../../cursussen/Telproblemen/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Boomdiagrammen en de productregel | `hoofdstukken/01-productregel.tex` | LPD 35 (sectie 3: wenk) | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 2. Venndiagrammen, som- en complementregel | `hoofdstukken/02-somregel.tex` | LPD 35 | eerste versie, getoetst aan het leerplan, nog na te lezen |

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Discrete wiskunde/Telproblemen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Discrete wiskunde/Telproblemen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

Alle aantallen zijn nagerekend met een Python-script, met brute force waar dat kan. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
