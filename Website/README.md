# Website: voorbeeld met Integralen, hoofdstuk 1

Open `index.html` met een dubbelklik: de site werkt zonder server en zonder internet. Ze gebruikt geen login, en de voortgang blijft alleen in de browser van de leerling staan.

## Wat waarvandaan komt

| Inhoud | Bron | Aanpassen |
|---|---|---|
| Oefeningen, antwoorden, uitwerkingen, figuren bij de opgaven, nummers, schema Fout? Herhaal | `oefeningen/01-*.yaml` en `hoofdstukken/01-*.tex` van de bron (`Handboeken/3de graad/cursussen/Integralen/`), `figuren-cache/` van de map van pakket 4 | In de cursus, daarna `py -3.13 -P maak-site.py` (na een nieuwe figuur eerst `maak-pdf.py` van de cursus) |
| Lopende tekst, theoriekaders, werkwijzen | Overgenomen uit `hoofdstukken/01-*.tex` | `assets/h1/inhoud.js`: **staat dubbel met het boek**, een wijziging in het boek loopt hier niet vanzelf door |
| Voorbeelden, stap per stap | Overgenomen uit het boek, met eigen figuren per stap | `assets/h1/voorbeelden.js`: **staat ook dubbel** |
| Nu jij | Overgenomen uit `\nujij` in het boek | `assets/h1/voorbeelden.js`: staat ook dubbel |
| Labs | Eigen aan de website | `assets/h1/labs.js` |

`maak-site.py` meldt welke antwoorden automatisch nagekeken worden. De rest kijkt de leerling zelf na: bewijzen, antwoorden die een integraal zijn en antwoorden in woorden.

## Bestanden

- `index.html`: de pagina. De navigatie loopt via de hash (`#h1-ondersom`, `#naar-h1-o3` voor oefening `h1-o3`, `#naar-vb-h1-limiet` voor een voorbeeld).
- `assets/stijl.css`: de opmaak. Alle kleuren zijn tokens; `data-h` zet het kleurenpaar van het hoofdstuk uit `Opmaak/opmaak.tex` (donker = uitleg, fel = opdrachten).
- `assets/kern.js`: formules, navigatie, voortgang en overgangen. De lijst met hoofdstukken staat bovenaan.
- `assets/graf.js`: de grafiekmotor (assen, krommen, gebieden, verende rechthoeken, versleepbare punten).
- `assets/geluid.js`: alle geluiden, opgewekt in de browser. Er zijn dus geen geluidsbestanden.
- `assets/oefen.js`: de speler voor voorbeelden, oefenkaarten, het nakijken en Fout? Herhaal.
- `assets/katex/` (MIT) en `assets/fonts/` (Source Sans, SIL Open Font License): lokale kopieën.

## Een volgend hoofdstuk toevoegen

Maak `assets/h2/` met `inhoud.js`, `voorbeelden.js` en `labs.js`, zet `online: true` in de lijst in `kern.js`, en laad de scripts in `index.html`. `maak-site.py` en `kern.js` gaan nu nog uit van één hoofdstuk (`NUMMER`, `registreer`): die moeten dan per hoofdstuk leren werken.

## Testen

Getest in Edge met Playwright: alle views en alle voorbeelden, elk automatisch nakijkbaar antwoord (juist en fout), de labs, licht en donker, en telefoonbreedte. Het geluid is niet beluisterd.
