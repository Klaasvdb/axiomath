# Telproblemen: handboek (pakket 2)

Cursus voor pakket 2 (B+S), **alleen voor GO!**: de cluster 06.01 Statistiek, die GO! aan de economische richtingen toevoegt (en aan Grieks-Latijn en Humane wetenschappen, die bij GO! de wiskunde van pakket 2 volgen). KOV en POV hebben in dit pakket geen telproblemen (zie de [README van het pakket](../../README.md) en [Ontwerp/koepels.md](../../../../../Ontwerp/koepels.md)). Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Telproblemen/](<../../../cursussen/Telproblemen/README.md>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` en `pakketten:` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Lichtere versie** van [Telproblemen voor pakket 4](<../../../4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Discrete wiskunde/Telproblemen/README.md>), dat voor 6 uur wiskunde geschreven is: dezelfde drie hoofdstukken en dezelfde kern, met minder bewijzen, minder uitbreidingen en minder zware opdrachten. Wat wegvalt, staat in de tabel "Verschillen per pakket" in de [README van de bron](<../../../cursussen/Telproblemen/README.md>).

| Hoofdstuk | Bestand | Doel (GO!) | Status |
|---|---|---|---|
| 1. Tellen | `hoofdstukken/01-tellen.tex` | telproblemen (met volgorde) | eerste versie, nog na te lezen |
| 2. Combinaties | `hoofdstukken/02-combinaties.tex` | telproblemen (zonder volgorde), driehoek van Pascal | eerste versie, nog na te lezen |
| 3. Het binomium van Newton | `hoofdstukken/03-binomium.tex` | binomium van Newton | eerste versie, nog na te lezen |

## Maken

```
python Opmaak/maak-pdf.py "2/Discrete wiskunde/Telproblemen"
```

## Na te kijken

- De afbakening: er is geen leerplantekst van GO! in de repo. Zie "Na te kijken" in de README van de bron.
- De voorkant is die van KOV (richtingen en uren van pakket 2), zoals bij alle handboeken; de website zet er bij GO! de voorkant van GO! op.

## Controle

De wiskunde is dezelfde als in pakket 4 en daar nagerekend (Python, SymPy); het nieuwe voorbeeld met $(x^2 - 3)^5$ is nagerekend met SymPy. Gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
