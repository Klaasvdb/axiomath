# Goniometrie: handboek

Handboek voor pakket 4 (B+S) van de 2de graad, leerplandoelen 15-17, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Hilma af Klint, *Altaarstuk nr. 1* (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor pakket 4 en 5 in [cursussen/Goniometrie/](../../../cursussen/Goniometrie/). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](../../../../../Opmaak/pakketten.py)). Deze map kiest de hoofdstukken in `handboek.tex`. Pakket 4 ziet de goniometrische cirkel met de vier soorten verwante hoeken, en de sinusregel, de cosinusregel en het dubbelzinnige geval met een werkwijze. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](../../../cursussen/Goniometrie/README.md).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De goniometrische cirkel | `hoofdstukken/01-goniometrische-cirkel.tex` | LPD 15 | eerste versie, nog na te lezen |
| 2. De sinusregel en de cosinusregel | `hoofdstukken/02-sinusregel-en-cosinusregel.tex` | LPD 16-17 | eerste versie, nog na te lezen |

De verdeling van LPD 15-17 over de twee hoofdstukken is nog na te kijken in het leerplan.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/4/Meetkunde/Goniometrie"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/4/Meetkunde/Goniometrie" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De afgeronde uitkomsten zijn nagerekend met Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
