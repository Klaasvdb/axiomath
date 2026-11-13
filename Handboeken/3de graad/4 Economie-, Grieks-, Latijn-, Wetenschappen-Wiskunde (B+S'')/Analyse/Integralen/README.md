# Integralen: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 31-33, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is van Seurat (publiek domein). De voorkant komt uit `Ontwerp/voorkanten/`: pas ze daar aan (`voorkant-gegevens.tex` maakt `maak-voorkanten.py`). De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De bepaalde integraal | `hoofdstukken/01-bepaalde-integraal.tex` | LPD 31 | eerste versie, nog na te lezen |
| 2. Hoofdstelling en primitieve functies | `hoofdstukken/02-hoofdstelling.tex` | LPD 32 | eerste versie, nog na te lezen |
| 3. Integratiemethoden | `hoofdstukken/03-integratiemethoden.tex` | LPD 33 | eerste versie, nog na te lezen |
| 4. Toepassingen van integralen | `hoofdstukken/04-toepassingen.tex` | wenken bij LPD 31 en 33 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Integralen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Integralen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Integralen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Integralen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Integralen-zelfstudie.pdf)

## Maken

Vanuit de hoofdmap van de repo, in PowerShell:

```
py -3.13 -P Opmaak/maak-pdf.py 4/Analyse/Integralen                  alles: handboek, oplossingen, leerkracht, zelfstudie
py -3.13 -P Opmaak/maak-pdf.py 4/Analyse/Integralen --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md).

Het script bewaart de grafieken per hoofdstuk in `figuren-cache/`, en maakt ze alleen opnieuw als een figuur, `notatie.tex` of `Opmaak/opmaak.tex` verandert. In `gen/` komen kopieën van de hoofdstukken die naar die grafieken verwijzen: pas de hoofdstukken dus aan in `hoofdstukken/`. Beide mappen en de PDF's staan niet in git. LaTeX leest altijd `gen/`, dus draai dit script ook vóór een gewone `latexmk -pdf handboek.tex`.

## Oefeningen

De 178 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk: de bron voor de PDF's en voor de online versie. Een hoofdstuk bevat alleen `\oef{id}` op de plaats waar de oefening komt, en `maak-pdf.py` vult daar de LaTeX in. Pas een opgave, antwoord of uitwerking dus aan in de YAML. De velden staan bovenaan `oefeningenbank.py`. Het `id` blijft altijd hetzelfde, ook als een oefening verhuist: de online voortgang en het label `oef:id` hangen eraan.

## Afbakening

- **Weggelaten:** splitsen in partieelbreuken en differentiaalvergelijkingen (in het leerplan alleen bij het complementair gedeelte), manteloppervlakte (niet in het leerplan).
- **Bewust opgenomen:** oneigenlijke integralen (het leerplan zegt *je kan*) en booglengte met exacte voorbeelden (het leerplan vraagt enkel *aangeven*, eventueel met ICT).
- **Notatie:** `bgsin` en `bgtan`, de Vlaamse notatie voor de inverse goniometrische functies. Wijzigen kan op één plaats, in `notatie.tex`.

## Eigen macro's

De opmaak is gedeeld met alle cursussen: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Wat eigen is aan deze cursus staat in `notatie.tex`, in de preambule: de lijsten met oplossingen gebruiken die macro's ook, en die uitvoer leest de hoofdstukken niet.

- `\dx`, `\dt`, `\du`, `\e`, `\ig`, `\grens`, `\bgsin`, `\bgtan`;
- grafieken met `\rooster` (met getallen), `\roosterleeg`, `\assen`, `\kromme`, `\gebied`, `\gebiedtussen` en `\riemann`;
- `\naast{links}{figuur}` en `\figuren{...}` voor figuren in de tekst, en de omgeving `metgrafiek` voor een opgave met een grafiek rechts;
- `stappenbreed` en `stappenvrij`: zoals `stappen`, met andere kolombreedtes.

## Controle

De uitkomsten zijn nagerekend met SymPy: bepaalde integralen en limieten rechtstreeks, primitieven door af te leiden, en de afgeronde getallen numeriek. Oefeningen zonder eindantwoord, zoals bewijzen en uitlegvragen, zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
