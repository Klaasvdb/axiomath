# Rijen: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 44-46, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Monet (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`). De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rijen: begrippen | `hoofdstukken/01-rijen-begrippen.tex` | LPD 44 | eerste versie, nog na te lezen |
| 2. Rekenkundige en meetkundige rijen | `hoofdstukken/02-rekenkundige-en-meetkundige-rijen.tex` | LPD 44 | eerste versie, nog na te lezen |
| 3. Somformules | `hoofdstukken/03-somformules.tex` | LPD 44 | eerste versie, nog na te lezen |
| 4. Limiet van een rij | `hoofdstukken/04-limiet-van-een-rij.tex` | LPD 45 en 46 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rijen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rijen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rijen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rijen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rijen-zelfstudie.pdf)

## Maken

Vanuit de hoofdmap van de repo, in PowerShell:

```
py -3.13 -P Opmaak/maak-pdf.py "4/Discrete wiskunde/Rijen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
py -3.13 -P Opmaak/maak-pdf.py "4/Discrete wiskunde/Rijen" --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). LaTeX leest altijd `gen/`, dus draai dit script ook vóór een gewone `latexmk -pdf handboek.tex`. De PDF's staan niet in git.

## Oefeningen

De 262 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk: de bron voor de PDF's en voor de online versie. Een hoofdstuk bevat alleen `\oef{id}` op de plaats waar de oefening komt. Pas een opgave, antwoord of uitwerking dus aan in de YAML. De velden staan bovenaan `Opmaak/oefeningenbank.py`. Het `id` blijft altijd hetzelfde, ook als een oefening verhuist.

## Afbakening

- **Bewust opgenomen:** sparen met vaste stortingen (past vooral bij Economie-Wiskunde; het leerplan noemt enkel samengestelde intrest), discrete dynamische processen en de meetkundige reeks (suggesties in het leerplan, ze hebben de limiet nodig).
- **Zonder bewijs:** de stelling dat een stijgende, naar boven begrensde rij convergeert. Het bewijs steunt op de volledigheid van de reële getallen.

## Eigen macro's

Wat eigen is aan deze cursus staat in `notatie.tex`: `\minigrafiek` (kleine grafiek van een rij), `\naast`, `\figuren`, de omgeving `metgrafiek` en `stappenvrij`.

## Controle

De afgeronde getallen in de leerstof zijn nagerekend met een script. De oefeningen zijn zonder inhoudelijke wijziging uit de eerste versie overgezet naar de oefeningenbank. Nog te doen: nalezen door andere leerkrachten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
