# Logica en bewijzen: handboek

Cursus voor pakket 4 (B+S''), leerplandoel 4 (bewijstechnieken), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Uitspraken | `hoofdstukken/01-uitspraken.tex` | LPD 4 (taal: connectieven, kwantoren) | eerste versie, nog na te lezen |
| 2. Bewijstechnieken | `hoofdstukken/02-bewijstechnieken.tex` | LPD 4 (rechtstreeks, contrapositie, ongerijmde, tegenvoorbeeld) | eerste versie, nog na te lezen |
| 3. Volledige inductie | `hoofdstukken/03-inductie.tex` | LPD 4 (volledige inductie) | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Logica-en-bewijzen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Logica-en-bewijzen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Logica-en-bewijzen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Logica-en-bewijzen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Logica-en-bewijzen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Discrete wiskunde/Logica en bewijzen"
```

## Afbakening

- **Hoofdstuk 1:** uitspraken en connectieven, De Morgan, implicatie met omgekeerde en contrapositie (met een eulerdiagram), equivalentie, kwantoren en hun ontkenning. Waarheidstabellen zijn een hulpmiddel, geen doel.
- **Hoofdstuk 2:** eerst bewijzen lezen met zelfuitleg (vier vaste vragen), dan zelf bewijzen: rechtstreeks, via de contrapositie, uit het ongerijmde ($\sqrt2$ irrationaal, oneindig veel priemgetallen) en ontkrachten met een tegenvoorbeeld. Alles over gehele getallen en deelbaarheid, zodat de algebra eenvoudig blijft.
- **Hoofdstuk 3:** het principe met dominostenen, somformules, deelbaarheid, ongelijkheden (ook Bernoulli). Een foute inductie (de paarden) als opdracht. Koppels naar Rijen, Complexe getallen en Telproblemen.

## Eigen macro's

`\N`, `\Z`, `\Q`, `\R`, de connectieven `\en`, `\of`, `\niet`, `\dan`, `\asa`, `\deelt`; de TikZ-stijl `verz` (eulerdiagram); zoals in Integralen `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`.

## Controle

De somformules, deelbaarheden en ongelijkheden zijn nagerekend met SymPy en door alle gevallen tot een grens te controleren; de waarheidstabellen door opsomming. De hoeken van de dominostenen zijn zo berekend dat elke steen op de volgende rust. Bewijzen en uitlegvragen zijn nagelezen, niet machinaal gecontroleerd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
