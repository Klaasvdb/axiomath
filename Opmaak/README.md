# Opmaak en werkwijze

Alles wat alle cursussen gemeen hebben, staat hier, op één plaats. **Pas het alleen hier aan en kopieer het nooit naar een cursus.** Een wijziging geldt dan voor alle handboeken. De regels waarom het zo is, staan in de [ontwerpregels](../Ontwerp/ontwerpregels.md).

| Bestand | Inhoud |
|---|---|
| `opmaak.tex` | De opmaak: pagina, lettertypes, kleuren, kaders, voorbeelden, oefeningen, inhoudstafel, de drie versies |
| `boek.tex` | Het documentskelet: voorkant, inhoud, hoofdstukken, antwoorden |
| `zo-werk-je.tex` | De pagina "Zo werk je met dit boek", voor elk boek dezelfde |
| `maak-pdf.py` | Bouwt een cursus: figuren, oefeningen uit de bank, alle PDF's |
| `oefeningenbank.py` | Leest `oefeningen/*.yaml` en maakt er LaTeX van. De velden van een oefening staan bovenaan dit bestand |
| `pakketten.py` | Eén bron voor alle pakketten: houdt van een hoofdstuk alleen wat voor één pakket is (`\alleenvoor`, `\pakketnaam`) |

De voorkant, de motieven, de schilderijen en het logo staan in [Ontwerp/](../Ontwerp/). De opmaak leest ze rechtstreeks.

## Eén bron per cursus

Een cursus staat één keer op schijf, voor alle pakketten. Elk pakket heeft een dunne map die kiest welke hoofdstukken het krijgt:

```
Handboeken/<graad>/cursussen/<cursus>/        de bron, voor alle pakketten
  notatie.tex            eigen macro's en figuren van deze cursus
  hoofdstukken/          de hoofdstukken (NN-naam.tex)
  oefeningen/            de oefeningenbank (NN-naam.yaml), de bron voor PDF's en website
  afbeeldingen/prenten/  kleine prenten, met hun bron in een README

Handboeken/<graad>/<pakket>/<rubriek>/<cursus>/   per pakket
  handboek.tex           titel en lijst met hoofdstukken, meer niet
  leerkracht.tex         twee regels: de leerkrachtenversie
  zelfstudie.tex         twee regels: de zelfstudieversie
  voorkant-gegevens.tex  gemaakt door Ontwerp/voorkanten/maak-voorkanten.py
  README.md              leerplandoelen, afbakening en status voor dit pakket
  Feedback/              opmerkingen van nalezers
```

Het pakket is het nummer vooraan de map van het pakket, de naam van het pakket staat er tussen haakjes. Wat maar voor sommige pakketten geldt, krijgt in de bron een voorwaarde (zie `pakketten.py`):

```latex
\lkr{Leerplan \pakketnaam: LPD \alleenvoor{4}{31}\alleenvoor{2,3}{22}, ...}   % binnen een regel

\begin{alleenvoor}{4}                                                         % een blok regels
\subsection{Oneigenlijke integralen}
...
\end{alleenvoor}
```

Een oefening die niet in alle pakketten staat, krijgt in de YAML een veld `pakketten: [3, 4]`; in een ander pakket valt `\oef{id}` vanzelf weg. Twee oefeningen mogen hetzelfde `id` hebben als hun pakketten niet overlappen. Een pakket mag een hoofdstuk ook anders nummeren: Matrices van pakket 1 heeft `\hoofdstuk{2}{04-matrixmodellen}`.

`handboek.tex` van een pakket ziet er zo uit:

```latex
\ifdefined\hoofdmap\else\def\hoofdmap{../../../../}\fi
\def\cursustitel{Integralen}
\def\cursushoofdstukken{%
  \hoofdstuk{1}{01-bepaalde-integraal}
  \hoofdstuk{2}{02-hoofdstelling}}
\input{\hoofdmap Opmaak/boek}
```

`\hoofdmap` is het pad van de map van het pakket naar de hoofdmap van de repo. Cursussen staan vijf mappen diep (`Handboeken/<graad>/<pakket>/<rubriek>/<cursus>`), Onderzoekscompetentie vier. Heeft een cursus (nog) geen map in `cursussen/`, dan leest `maak-pdf.py` `hoofdstukken/`, `oefeningen/` en `notatie.tex` uit de map van het pakket zelf.

## Een PDF bouwen

Vanuit de hoofdmap van de repo:

```
python Opmaak/maak-pdf.py 4/Analyse/Integralen                   alles: handboek, oplossingen, leerkracht, zelfstudie
python Opmaak/maak-pdf.py 4/Analyse/Integralen --hoofdstuk 2     snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De cursus is `<pakketnummer>/<rubriek>/<cursus>`, of het pad naar de map. Zonder cursus bouwt het script de map waar je staat. De PDF's verschijnen in de map van de cursus.

Het script bewaart de grafieken per hoofdstuk in `figuren-cache/` en maakt ze alleen opnieuw als een figuur, `notatie.tex` of `Opmaak/opmaak.tex` verandert. In `gen/` komen kopieën van de hoofdstukken zoals het pakket ze ziet, met de figuren vervangen en de oefeningen uit de bank, samen met `notatie.tex` en `afbeeldingen/`: pas de hoofdstukken dus aan in de bron, nooit in `gen/`. LaTeX leest altijd `gen/`, dus draai het script ook vóór een gewone `latexmk`. Beide mappen en de PDF's staan niet in git.

## Een nieuwe cursus beginnen

1. Maak de bron `Handboeken/<graad>/cursussen/<cursus>/` met `notatie.tex` (kopieer die van een bestaande cursus), `hoofdstukken/` en `oefeningen/`.
2. Maak per pakket de map `Handboeken/<graad>/<pakket>/<rubriek>/<cursus>/` en kopieer `handboek.tex`, `leerkracht.tex` en `zelfstudie.tex` van een bestaande cursus. Pas de titel en de hoofdstukken aan.
3. Schrijf de hoofdstukken en de oefeningen in de bron. Verschilt iets per pakket: `\alleenvoor` en `pakketten:` (zie hierboven), geen kopie.
4. Zet de cursus in `voortgang.yaml` en draai `python maak-voortgang.py`.
5. Draai `python Ontwerp/voorkanten/maak-voorkanten.py`: dat maakt `voorkant-gegevens.tex`.
6. Bouw de PDF's en kijk de pagina's na.

Voor de inhoud en de opbouw van een hoofdstuk: zie de [ontwerpregels](../Ontwerp/ontwerpregels.md) en de skill in `.claude/skills/handboek-hoofdstuk/`.

## Bijzonderheden van de opmaak

- `probleem` is het blok waarmee een hoofdstuk begint: een lijn boven en onder, met het label Probleem (ontwerpregel van 16 nov 2026).
- De uitlegkolom van `stappen` is cursief, en `\uitleg` zet de zin over de aanpak bovenaan een voorbeeld.
- `stelling` is een wit kader met de naam op de lijn. `bewijs` eindigt met een vierkantje in de kleur van het hoofdstuk en gebruikt `\bewijsregel` voor formules.
- `theorie` mag over twee pagina's breken, tussen een stelling en haar bewijs.
- `stappenbreed` en `stappenvrij` zijn zoals `stappen`, met andere kolombreedtes.
- De deelvragen van een uitwerking staan onder elkaar met `\par`, zodat een uitwerking op een figuur mag eindigen.
- Macro's die ook in de lijsten met oplossingen voorkomen, staan in de preambule en dus in `notatie.tex`, niet in een hoofdstuk: de oplossingen-PDF's lezen de hoofdstukken niet.
