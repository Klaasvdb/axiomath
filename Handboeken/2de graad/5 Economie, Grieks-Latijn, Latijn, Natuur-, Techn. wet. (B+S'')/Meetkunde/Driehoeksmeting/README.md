# Driehoeksmeting: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplan II-WisS''-d (KOV, versie oktober 2024): LPD 10-11, met B1 (bewijzen) en het servicedocument voor 5 uur wiskunde, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Paul Cézanne (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Driehoeksmeting/](<../../../cursussen/Driehoeksmeting/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 4, met een tweede bewijs van Pythagoras (gelijkvormige driehoeken), het bewijs van de omgekeerde stelling, en bewijsopdrachten (drietallen van Pythagoras, ruit en hoogte op de schuine zijde, identiteiten met de grondformule), voor B1. De omgekeerde stelling is in het servicedocument verplicht. De volledige tabel met verschillen, de toetsing aan het leerplan en wat open blijft, staan in de [README van de bron](<../../../cursussen/Driehoeksmeting/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De stelling van Pythagoras | `hoofdstukken/01-pythagoras.tex` | LPD 10 (en B1) | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 2. Sinus, cosinus en tangens | `hoofdstukken/02-goniometrische-getallen.tex` | LPD 11 (en B1) | eerste versie, getoetst aan het leerplan, nog na te lezen |

De verdeling van de leerplandoelen over de hoofdstukken is getoetst aan het leerplan (24 november 2026).

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Meetkunde/Driehoeksmeting"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Meetkunde/Driehoeksmeting" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](<../../../../../Opmaak/README.md>). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De afgeronde getallen zijn nagerekend met Python en SymPy, de rest met de hand. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
