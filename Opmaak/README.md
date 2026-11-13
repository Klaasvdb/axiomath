# Opmaak en werkwijze

Alles wat alle cursussen gemeen hebben, staat hier, op één plaats. **Pas het alleen hier aan en kopieer het nooit naar een cursus.** Een wijziging geldt dan voor alle handboeken. De regels waarom het zo is, staan in de [ontwerpregels](../Ontwerp/ontwerpregels.md).

| Bestand | Inhoud |
|---|---|
| `opmaak.tex` | De opmaak: pagina, lettertypes, kleuren, kaders, voorbeelden, oefeningen, inhoudstafel, de drie versies |
| `boek.tex` | Het documentskelet: voorkant, inhoud, hoofdstukken, antwoorden |
| `zo-werk-je.tex` | De pagina "Zo werk je met dit boek", voor elk boek dezelfde |
| `maak-pdf.py` | Bouwt een cursus: figuren, oefeningen uit de bank, alle PDF's |
| `oefeningenbank.py` | Leest `oefeningen/*.yaml` en maakt er LaTeX van. De velden van een oefening staan bovenaan dit bestand |

De voorkant, de motieven, de schilderijen en het logo staan in [Ontwerp/](../Ontwerp/). De opmaak leest ze rechtstreeks.

## Wat een cursus zelf heeft

```
Handboeken/<graad>/<pakket>/<rubriek>/<cursus>/
  handboek.tex           titel en lijst met hoofdstukken, meer niet
  leerkracht.tex         twee regels: de leerkrachtenversie
  zelfstudie.tex         twee regels: de zelfstudieversie
  notatie.tex            eigen macro's en figuren van deze cursus
  voorkant-gegevens.tex  gemaakt door Ontwerp/voorkanten/maak-voorkanten.py
  hoofdstukken/          de hoofdstukken (NN-naam.tex)
  oefeningen/            de oefeningenbank (NN-naam.yaml), de bron voor PDF's en website
  afbeeldingen/prenten/  kleine prenten, met hun bron in een README
  README.md              leerplandoelen, afbakening en status
```

`handboek.tex` van een cursus ziet er zo uit:

```latex
\ifdefined\hoofdmap\else\def\hoofdmap{../../../../}\fi
\def\cursustitel{Integralen}
\def\cursushoofdstukken{%
  \hoofdstuk{1}{01-bepaalde-integraal}
  \hoofdstuk{2}{02-hoofdstelling}}
\input{\hoofdmap Opmaak/boek}
```

`\hoofdmap` is het pad van de map van de cursus naar de hoofdmap van de repo. Cursussen staan vijf mappen diep (`Handboeken/<graad>/<pakket>/<rubriek>/<cursus>`), Onderzoekscompetentie vier.

## Een PDF bouwen

Vanuit de hoofdmap van de repo:

```
python Opmaak/maak-pdf.py 4/Analyse/Integralen                   alles: handboek, oplossingen, leerkracht, zelfstudie
python Opmaak/maak-pdf.py 4/Analyse/Integralen --hoofdstuk 2     snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De cursus is `<pakketnummer>/<rubriek>/<cursus>`, of het pad naar de map. Zonder cursus bouwt het script de map waar je staat. De PDF's verschijnen in de map van de cursus.

Het script bewaart de grafieken per hoofdstuk in `figuren-cache/` en maakt ze alleen opnieuw als een figuur, `notatie.tex` of `Opmaak/opmaak.tex` verandert. In `gen/` komen kopieën van de hoofdstukken waarin de figuren vervangen zijn en de oefeningen uit de bank staan: pas de hoofdstukken dus aan in `hoofdstukken/`, nooit in `gen/`. LaTeX leest altijd `gen/`, dus draai het script ook vóór een gewone `latexmk`. Beide mappen en de PDF's staan niet in git.

## Een nieuwe cursus beginnen

1. Maak de map `Handboeken/<graad>/<pakket>/<rubriek>/<cursus>/` en kopieer `handboek.tex`, `leerkracht.tex`, `zelfstudie.tex` en `notatie.tex` van een bestaande cursus. Pas de titel en de hoofdstukken aan.
2. Schrijf de hoofdstukken in `hoofdstukken/` en de oefeningen in `oefeningen/`.
3. Zet de cursus in `voortgang.yaml` en draai `python maak-voortgang.py`.
4. Draai `python Ontwerp/voorkanten/maak-voorkanten.py`: dat maakt `voorkant-gegevens.tex`.
5. Bouw de PDF's en kijk de pagina's na.

Voor de inhoud en de opbouw van een hoofdstuk: zie de [ontwerpregels](../Ontwerp/ontwerpregels.md) en de skill in `.claude/skills/handboek-hoofdstuk/`.

## Bijzonderheden van de opmaak

- De uitlegkolom van `stappen` is cursief, en `\uitleg` zet de zin over de aanpak bovenaan een voorbeeld.
- `stelling` is een wit kader met de naam op de lijn. `bewijs` eindigt met een vierkantje in de kleur van het hoofdstuk en gebruikt `\bewijsregel` voor formules.
- `theorie` mag over twee pagina's breken, tussen een stelling en haar bewijs.
- `stappenbreed` en `stappenvrij` zijn zoals `stappen`, met andere kolombreedtes.
- De deelvragen van een uitwerking staan onder elkaar met `\par`, zodat een uitwerking op een figuur mag eindigen.
- Macro's die ook in de lijsten met oplossingen voorkomen, staan in de preambule en dus in `notatie.tex`, niet in een hoofdstuk: de oplossingen-PDF's lezen de hoofdstukken niet.
