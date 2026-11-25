# Goniometrie: handboek

Handboek voor pakket 5 (B+S'') van de 2de graad, leerplan II-WisS''-d (KOV, versie oktober 2024, met het servicedocument voor 5 uur wiskunde): LPD 15-17, B1 en de extra bij LPD 17, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Hilma af Klint, *Altaarstuk nr. 1* (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor pakket 4 en 5 in [cursussen/Goniometrie/](../../../cursussen/Goniometrie/). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](../../../../../Opmaak/pakketten.py)). Deze map kiest de hoofdstukken in `handboek.tex`. Zoals pakket 4, en ook de hoeken die $90^\circ$ verschillen, het aantal driehoeken bij twee zijden en een niet-ingesloten hoek volledig (met bewijs), de sinusregel met de omgeschreven cirkel ($2R$, met bewijs), en opdrachten met bewijzen, het dubbelzinnige geval met de cosinusregel en de formule van Heron (extra bij LPD 17). De sinusregel met $2R$ vraagt het leerplan niet: het is verdieping. De volledige tabel met verschillen, de toetsing aan het leerplan en wat open blijft, staan in de [README van de bron](../../../cursussen/Goniometrie/README.md).

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De goniometrische cirkel | `hoofdstukken/01-goniometrische-cirkel.tex` | LPD 15-16 (B1) | eerste versie, getoetst aan het leerplan, nog na te lezen |
| 2. De sinusregel en de cosinusregel | `hoofdstukken/02-sinusregel-en-cosinusregel.tex` | LPD 17 (B1, extra) | eerste versie, getoetst aan het leerplan, nog na te lezen |

De verdeling van de leerplandoelen over de hoofdstukken is getoetst aan het leerplan (24 november 2026).

## PDF's

De PDF's staan niet in git, en nog niet bij een release.

## Maken

Vanuit de hoofdmap van de repo:

```
python -P Opmaak/maak-pdf.py "2de graad/5/Meetkunde/Goniometrie"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python -P Opmaak/maak-pdf.py "2de graad/5/Meetkunde/Goniometrie" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). LaTeX leest `gen/`, dus draai dit script ook vóór een gewone `latexmk`.

## Oefeningen

De oefeningen staan in `oefeningen/*.yaml` van de bron, per hoofdstuk. Een hoofdstuk bevat alleen `\oef{id}`, en `maak-pdf.py` vult daar de LaTeX in. Een oefening die maar in sommige pakketten staat, heeft een veld `pakketten:`. Het `id` blijft altijd hetzelfde.

## Controle

De afgeronde uitkomsten zijn nagerekend met Python en SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
