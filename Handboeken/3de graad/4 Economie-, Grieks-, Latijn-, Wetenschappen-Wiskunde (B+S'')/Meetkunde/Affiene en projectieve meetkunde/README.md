# Affiene en projectieve meetkunde: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.2.4, LPD 14-16) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Het San Marcoplein in Venetië* van Canaletto (ca. 1723-1724, publiek domein): de evenwijdige gevels en voegen van het plein lopen op het doek samen in één verdwijnpunt op de horizon. De voorkant komt uit `Ontwerp/voorkanten/` (motief `projectief`: een berekende tegelvloer in perspectief, met verdwijnpunt en afstandspunt op de horizon).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Affiene en projectieve meetkunde/](<../../../cursussen/Affiene en projectieve meetkunde/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Affiene meetkunde | `hoofdstukken/01-affiene-meetkunde.tex` | verdeel elke zijde van een driehoek in drie: welk deel is de driehoek die de drie rechten in het midden insluiten, en hangt het af van de vorm? ($\tfrac17$, de driehoek van Routh) | LPD 14 | eerste versie, leerkracht moet nalezen |
| 2. Het projectieve vlak | `hoofdstukken/02-het-projectieve-vlak.tex` | waar lopen de voegen en de diagonalen van een tegelvloer op het doek van een schilder samen, en waarom op de horizon? | LPD 15 | eerste versie, leerkracht moet nalezen |
| 3. Kegelsneden in het projectieve vlak | `hoofdstukken/03-projectieve-kegelsneden.tex` | een tekenaar staat binnen een cirkel op een plein en tekent ze op een glasplaat: welke kromme, en kan een cirkel een parabool of hyperbool worden? | LPD 16 | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Affien assenstelsel en affiene coördinaten (verwijzing naar Vectorruimten, hoofdstuk 2), omrekenen met een matrix (stelling met bewijs); deelverhouding $(A, B; P)$ en het punt $\tfrac{A + \lambda B}{1 + \lambda}$; afstanden en hoeken gelden niet; vergelijking van een rechte; determinanttests voor drie punten op één rechte en drie rechten door één punt (met het geval *evenwijdig* als opstap naar hoofdstuk 2); coördinatentransformatie tussen twee affiene assenstelsels; affiene transformaties $AX + b$ (uitrekking, afschuiving, euclidisch); wat ze bewaren, één stelling per keer (rechten en evenwijdigheid, deelverhouding, oppervlakte maal $|\det A|$); elke driehoek op elke driehoek (de standaarddriehoek); Menelaos en Ceva met bewijs in affiene coördinaten; de driehoek van Routh ($\tfrac17$); Kleins indeling van de meetkunden in een alinea.
2. Perspectief (oog in de oorsprong, doek $z = 1$) en de stelling over het verdwijnpunt; het projectieve vlak met punten en rechte op oneindig, twee rechten hebben altijd één snijpunt; homogene coördinaten van punten en rechten; het vectorproduct (ingevoerd met een determinant) voor snijpunt en verbindingsrechte; determinanttests en het dualiteitsprincipe; Desargues (bewijs met $o = a - a' = b - b' = c - c'$); projectieve transformaties, rechten blijven rechten, elke rechte kan naar oneindig; Pappus (evenwijdige vorm met affiene coördinaten, dan de algemene door een rechte naar oneindig te sturen); het perspectief als projectieve transformatie, de horizon als beeld van de rechte op oneindig, het afstandspunt van Alberti.
3. Homogene vergelijking van een kegelsnede en haar punten op oneindig; de symmetrische matrix; het beeld onder een projectieve transformatie ($M' = (A^{-1})^{T} M A^{-1}$); ontaard als product van twee factoren, met de stelling *ontaard $\iff \det M = 0$* (bewijs in beide richtingen) en de top; het type uit het aantal punten op oneindig, en daaruit het bewijs van de regel met $B^2 - 4AC$ uit Kegelsneden; raaklijn $MP$ (ontdubbelen), een parabool raakt de rechte op oneindig, asymptoten als raaklijnen in de punten op oneindig; projectief is er maar één soort kegelsnede (cirkel, parabool en hyperbool als beelden van elkaar); het perspectief van een cirkel op de vloer: ellips, parabool of hyperbool naargelang de cirkel de rechte onder het oog mist, raakt of snijdt.

## Afbakening

- **Alle wenken van LPD 14, 15 en 16** staan erin: affiene coördinaten met een niet-orthonormale basis, affiene coördinatentransformaties en wat ze bewaren, Ceva en Menelaos; punten op oneindig, homogene coördinaten $(x : y : z)$ met de inbedding $(x : y : 1)$ en de punten $(x : y : 0)$, omzetten van punten en rechten, snijpunten, Pappus en Desargues; kegelsneden als homogene veeltermen van graad twee, omzetten, ontaard of niet, het type uit de snijpunten met de rechte op oneindig.
- **Extra's buiten de wenken:** het perspectief als model (de contexten van hoofdstuk 2 en 3), het vectorproduct als rekenregel, de dualiteit, projectieve transformaties (nodig voor het bewijs van Pappus en voor hoofdstuk 3), de matrix van een kegelsnede, de raaklijn $MP$ en de asymptoten, en de projectieve gelijkheid van alle kegelsneden. In opdrachten: Varignon, Gergonne, bissectrices met Ceva, de driehoek van Routh in het algemeen, de parallellogram met een vijfde, de omgekeerde stelling van Desargues door dualiteit, Desargues in de ruimte, het midden vinden met een lat, de poollijn, Pascal (met Pappus als ontaard geval), een kegelsnede door vijf punten, het vlak van Fano (Koppel) en de cirkelpunten $(1 : \pm\mathrm{i} : 0)$ (Koppel).
- **Aanvaard zonder bewijs:** dat een niet-ontaarde kegelsnede met een draaiing en een verschuiving in standaardvorm komt (Kegelsneden, hoofdstuk 5). Het bewijs van de stelling over het type en van *één soort* steunt daarop; dat staat er eerlijk bij.
- **Weggelaten:** de dubbelverhouding, projectieve coördinaten op een rechte, de classificatie van kwadratische vormen met de spectraalstelling (alleen een Koppel met eigenwaarden), kegelsneden over de complexe getallen (alleen in een Koppel).
- **Notatie:** $(A, B; P)$ voor de deelverhouding met $\vec{AP} = \lambda\,\vec{PB}$ (in de tekst staat dat sommige boeken $\tfrac{PA}{PB}$ gebruiken), $(x : y : z)$ voor een punt, $[a : b : c]$ voor een rechte, $l \times m$ voor het vectorproduct, $M$ voor de matrix van een kegelsnede.

## Oefeningen

De 128 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (44, 43 en 41): Start (Opwarmer en Verken), 10, 10 en 8 korte oefeningen, 22, 21 en 21 opdrachten op drie niveaus (73, 66 en 61 deelvragen), 3 Koppel-oefeningen per hoofdstuk (Groepen, Complexe getallen, Eigenwaarden en eigenvectoren; Ruimtemeetkunde, Getaltheorie, Groepen; Kegelsneden, Eigenwaarden en eigenvectoren, Complexe getallen) en 7 testvragen. Er zijn geen prenten. Zie `Opmaak/oefeningenbank.py`.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Kegelsneden (`\rooster`, `\roosterleeg`, `\assen`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`, `\ellips`, `\hyperbool`, `\parabool`, `\stip`, `\rechte`), uit Vectorruimten en Matrices `\vpijl`, `\scheefrooster`, `\kol`, `\um` en `\tr`, en voor deze cursus `\dv` (deelverhouding), `\hc` (homogene coördinaten van een punt), `\rc` (van een rechte), `\punt` en `\fpunt` (een punt met label).

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "4/Meetkunde/Affiene en projectieve meetkunde"
py -3.13 -P Opmaak/maak-pdf.py "4/Meetkunde/Affiene en projectieve meetkunde" --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd (alle versies, zonder fouten, `??` of Overfull boven 2 pt) en pagina per pagina bekeken. De voorbeelden en de antwoorden van de oefeningen zijn nagerekend met Python/SymPy: coördinaten en deelverhoudingen, alle determinanten en vectorproducten, de driehoek van Routh (ook in het algemeen), de parallellogram met een vijfde, de Desargues- en Pappusconfiguraties, de matrices, determinanten en punten op oneindig van alle kegelsneden, de raaklijnen en asymptoten, Pascal, de kegelsnede door vijf punten en het perspectief van de cirkel. De figuren van het probleem en het motief zijn met dezelfde formules berekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
