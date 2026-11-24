# De cirkel: handboek

Keuzehandboek voor pakket 4 (B+S) van de 2de graad, keuzedoel K1 van het leerplan II-WisS-d (KOV, versie oktober 2024, rubriek 4.3.6), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Robert Delaunay, *Cirkelvormen, maan nr. 1* (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor pakket 4 en 5 in [cursussen/De cirkel/](<../../../cursussen/De cirkel/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](../../../../../Opmaak/pakketten.py)). Deze map kiest de hoofdstukken in `handboek.tex`. Pakket 4 ziet de omtrekshoekstelling met twee gevallen in het bewijs (het derde in één zin), de hoek in een halve cirkel, de koordenvierhoek, koorden en hun apothema, de raaklijn (ook met passer en liniaal) en de raaklijnstukken: de vijf eigenschappen en de constructies uit de wenken bij K1. Het bewijs uit het ongerijmde, de hoek tussen raaklijn en koorde, de regelmatige veelhoeken en de macht van een punt staan alleen in pakket 5. De volledige tabel met verschillen en wat nog na te kijken is, staat in de [README van de bron](<../../../cursussen/De cirkel/README.md>).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Hoeken in een cirkel | `hoofdstukken/01-hoeken-in-een-cirkel.tex` | LPD K1 (middelpuntshoeken en omtrekshoeken); bewijsopdrachten LPD 4 | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 2. Koorden en raaklijnen | `hoofdstukken/02-koorden-en-raaklijnen.tex` | LPD K1 (cirkel door drie punten, apothema, raaklijn, raaklijnen uit een punt, constructies); bewijsopdrachten LPD 4 | eerste versie, getoetst aan het leerplan, nog na te lezen |

Aantallen: hoofdstuk 1 heeft 21 opdrachten, 8 korte oefeningen en 7 testvragen; hoofdstuk 2 21 opdrachten, 7 korte oefeningen en 7 testvragen. De vergelijking van een cirkel (extra bij LPD 10) staat in Driehoeksmeting, niet hier.

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/4/Meetkunde/De cirkel"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/4/Meetkunde/De cirkel" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De afgeronde uitkomsten zijn nagerekend met Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
