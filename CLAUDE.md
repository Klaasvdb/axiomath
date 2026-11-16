# Axiomath

Vrije, niet-commerciële handboeken wiskunde voor de 3de graad doorstroomfinaliteit (Vlaanderen), met een oefeningenbank als bron voor PDF's, website en later testen. Taal: Nederlands. Zie `README.md` en `CONTRIBUTING.md`.

## Regels

- **De ontwerpregels staan in `Ontwerp/ontwerpregels.md`.** Pas ze daar aan, niet hier. Voor een nieuw hoofdstuk of een nieuwe cursus: gebruik de skill `handboek-hoofdstuk` (`.claude/skills/`).
- **Alleen eigen werk.** Neem nooit opgaven, teksten of figuren over uit bestaande handboeken, ook niet met andere getallen. Neem geen leerplantekst over: verwijs naar de nummers van de leerplandoelen.
- Alles is vrij en niet-commercieel (`LICENSE.md`): inhoud CC BY-NC-SA 4.0, code PolyForm Noncommercial. Afbeeldingen alleen publiek domein, met de bron erbij.
- Geen persoonsgegevens, schoolnamen of lokale paden in de repo.
- Commit en push alleen met toestemming van de gebruiker.

## Indeling

- `Handboeken/3de graad/<pakket>/<rubriek>/<cursus>/`: vier pakketten naar leerplan (Basis, B+S, B+S', B+S''). Zie `Handboeken/README.md`.
- `Handboeken/2de graad/<pakket>/<rubriek>/<cursus>/`: de 2de graad, vijf pakketten (Basis, B+, B+S', B+S, B+S''), bordeaux voorkant. De indeling per handboek staat in `Handboeken/2de graad/README.md`.
- `Opmaak/`: de opmaak (`opmaak.tex`), het documentskelet (`boek.tex`), `maak-pdf.py` en `oefeningenbank.py`, gedeeld door alle cursussen. **Pas ze alleen daar aan en kopieer ze nooit naar een cursus.**
- **Eén bron per cursus:** `Handboeken/<graad>/cursussen/<cursus>/` bevat de hoofdstukken (`hoofdstukken/`), de oefeningen (`oefeningen/*.yaml`), de eigen macro's (`notatie.tex`) en de afbeeldingen, voor alle pakketten. Wat per pakket verschilt, staat erin met `\alleenvoor{…}` en `pakketten:` (zie `Opmaak/pakketten.py`). **Maak nooit een kopie per pakket.** De map per pakket (`<pakket>/<rubriek>/<cursus>/`) heeft alleen `handboek.tex` (titel en keuze van de hoofdstukken), de voorkant, de README, Feedback en de PDF's. Het voorbeeld is Integralen: `cursussen/Integralen/` en `4 .../Analyse/Integralen/`.
- `Ontwerp/`: ontwerpregels, `logo/`, `voorkanten/` (gedeeld door alle handboeken) en `omslagen/` (schilderijen).
- `Website/`: voorbeeld van de online versie; `maak-site.py` leest de oefeningenbank van Integralen.
- `Website/leerkrachten/`: de leerkrachtensite op axiomath.be (PHP en SQLite op Vimexx, zoals Puntmuts): lezen en feedback geven. `maak.py`, `test/test.py`, `uitrol.py`; zie de README daar. Uitrollen alleen met toestemming van de gebruiker.

## Bouwen

- Python 3.13 met `pymupdf`, `pillow`, `pyyaml`; TeX Live 2024 of recenter. Vanuit de hoofdmap: `python Opmaak/maak-pdf.py 4/Analyse/Integralen` (of `--hoofdstuk 2` voor één hoofdstuk).
- LaTeX leest `gen/`, dus draai altijd eerst `Opmaak/maak-pdf.py`, ook vóór een gewone `latexmk`.
- Voorkanten: `python maak-voorkanten.py` in `Ontwerp/voorkanten/`. Pas ze daar aan: de cursussen lezen de voorkant rechtstreeks, en het script schrijft alleen `voorkant-gegevens.tex` in een cursus.
- Voortgang: zet de status van een handboek in `voortgang.yaml` en draai `python maak-voortgang.py`. Dat vult het overzicht in `README.md` tussen de markeringen: pas dat deel nooit met de hand aan.
- Bekijk na het bouwen de pagina's echt (render naar PNG): de meeste fouten zie je alleen op de pagina.
