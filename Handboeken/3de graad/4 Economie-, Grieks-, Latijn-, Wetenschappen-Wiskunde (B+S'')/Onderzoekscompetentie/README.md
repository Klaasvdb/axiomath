# Onderzoekscompetentie: handboek

Cursus voor pakket 4 (B+S''), leerplandoel 55, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk; alle meetgegevens zijn voorbeeldgegevens.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Van vraag tot onderzoek | `hoofdstukken/01-onderzoeksvraag.tex` | LPD 55 | eerste versie, nog na te lezen |
| 2. Modelleren met data | `hoofdstukken/02-modelleren.tex` | LPD 55 | eerste versie, nog na te lezen |
| 3. Rapporteren | `hoofdstukken/03-rapporteren.tex` | LPD 55 | eerste versie, nog na te lezen |

Deze cursus staat niet in een rubriekmap (zoals in `maak-voorkanten.py`); `\hoofdmap` is daarom `../../../`. Wat de school precies verwacht van een onderzoeksopdracht (product, proces, evaluatie), staat niet in dit boek: kijk de leerplantekst en de schoolafspraken na.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Onderzoekscompetentie-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Onderzoekscompetentie-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Onderzoekscompetentie-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Onderzoekscompetentie-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Onderzoekscompetentie-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Onderzoekscompetentie"
```

## Afbakening

- **Hoofdstuk 1:** de onderzoekscyclus, eisen aan een onderzoeksvraag, deelvragen, experimenteren, vermoeden en bewijzen, en een vermoeden dat fout blijkt (de cirkel met 31 stukken).
- **Hoofdstuk 2:** spreidingsdiagram, kleinste-kwadratenrechte en correlatiecoëfficiënt, lineariseren (macht, exponentieel), de stappen van het modelleren, valkuilen (extrapoleren, correlatie en oorzaak, residuen).
- **Hoofdstuk 3:** opbouw van een verslag, wiskunde opschrijven (symbolen, eenheden, nauwkeurigheid), figuren en bijschriften, bronnen en eerlijkheid (ook AI-hulpmiddelen), presenteren en reflecteren.
- De cursus is bedoeld om een onderzoeksopdracht over meerdere weken te begeleiden, niet als één blok leerstof.

## Eigen macro's

Zoals in Algemene functies (`\R`, `\kromme`, `\rooster`, ...); daarnaast `\xbar`, `\ybar`, `\norm`, `\e`.

## Controle

Alle regressies, correlaties, tellingen en tegenvoorbeelden zijn nagerekend met Python (NumPy, SymPy). Open opdrachten hebben een voorbeeldantwoord in de uitwerking. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
