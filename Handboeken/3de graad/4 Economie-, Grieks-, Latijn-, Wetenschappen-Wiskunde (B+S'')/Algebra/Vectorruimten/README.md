# Vectorruimten: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.4.3, LPD 33-34) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Melencolia I* van Albrecht Dürer (1514, gravure, publiek domein; foto National Gallery of Art, CC0): rechtsboven hangt een magisch vierkant van 4 bij 4, en de magische vierkanten vormen een vectorruimte. De voorkant komt uit `Ontwerp/voorkanten/` (motief `vectorruimten`: coördinaten ten opzichte van een basis, met een scheef rooster).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Vectorruimten/](<../../../cursussen/Vectorruimten/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Vectorruimten | `hoofdstukken/01-vectorruimten.tex` | is er een formule voor de $n$-de term van de rij van Fibonacci? | LPD 34: lineaire deelruimtes; voorbereiding van LPD 33 (lineaire combinatie, voortbrengend) | eerste versie, leerkracht moet nalezen |
| 2. Basis en dimensie | `hoofdstukken/02-basis-en-dimensie.tex` | hoeveel magische vierkanten van 3 bij 3 heb je nodig om ze allemaal te maken, en hoeveel vakjes leggen er een vast? | LPD 33: onafhankelijk, voortbrengend, basis, dimensie, oneindigdimensionaal, coördinaten | eerste versie, leerkracht moet nalezen |
| 3. Lineaire afbeeldingen | `hoofdstukken/03-lineaire-afbeeldingen.tex` | waar valt de schaduw van een punt bij zonlicht, en kan dat met één matrix? | LPD 34: lineaire afbeeldingen en hun matrix | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Optellen en vermenigvuldigen met een getal in $\R^n$, matrices, veeltermen, functies en rijen; de definitie (een commutatieve groep plus vier regels, met verwijzing naar Groepen); vier rekenregels met bewijs ($0\vec v = \vec 0$, $r\vec 0 = \vec 0$, $(-1)\vec v = -\vec v$, product nul) en vergelijkingen met vectoren; deelruimte met het kenmerk (drie voorwaarden, met bewijs); de oplossingen van $AX = O$; lineaire combinatie; de voortgebrachte deelruimte $\langle \ldots \rangle$ (stelling met bewijs) en haar vergelijking; voortbrengend; de formule van Binet als terug naar het probleem.
2. Lineair (on)afhankelijk en overbodige vectoren (stelling met bewijs); onafhankelijk en voortbrengend met de rang (twee stellingen met bewijs); onafhankelijke functies; basis en coördinaten (uniek, met bewijs), standaardbases; de determinant als test voor een basis van $\R^n$; de stelling over te veel vectoren (bewijs met een homogeen stelsel), even grote bases en de dimensie; $\R[x]$ is oneindigdimensionaal; uitdunnen (spilkolommen) en aanvullen; $n$ onafhankelijke of $n$ voortbrengende vectoren vormen een basis; dimensie van een deelruimte en de deelruimten van $\R^3$; dimensie van de oplossingen van $AX = O$; de magische vierkanten van 3 bij 3 met dimensie 3.
3. Definitie van een lineaire afbeelding, $f(\vec 0) = \vec 0$, beeld van een lineaire combinatie, vastgelegd door een basis; de matrix van een lineaire afbeelding $\R^n \to \R^m$ (stelling met bewijs), draaiingen, beelden van een andere basis; samenstelling als matrixproduct, met de somformules als voorbeeld; kern en beeld als deelruimten, injectief, beeld en rang (spilkolommen), de dimensiestelling, de oplossingen van $AX = B$; de schaduw als lineaire afbeelding.

## Afbakening

- **Alle wenken van LPD 33 en 34** staan erin: nagaan of een deelverzameling onafhankelijk, voortbrengend of een basis is, de dimensie onafhankelijk van de basis (met bewijs), een oneindigdimensionale vectorruimte ($\R[x]$, functies, rijen), coördinaten, nagaan of iets een deelruimte is, en het verband tussen lineaire afbeeldingen en matrices.
- **Extra's buiten de wenken:** de rekenregels uit de axioma's (hoofdstuk 1), de criteria met rang en determinant (hoofdstuk 2), en in hoofdstuk 3 kern, beeld, injectief, de dimensiestelling, de samenstelling als matrixproduct en de structuur van de oplossingen van $AX = B$. Ze dragen de problemen en leggen de band met Matrices. Isomorfisme, de inverse afbeelding, projecties ($P^2 = P$) en de matrix van afleiden staan alleen in opdrachten van niveau 3.
- **Weggelaten:** vectorruimten over andere velden dan $\R$ (alleen $\C$ over $\C$ in een Koppel-oefening), som en directe som van deelruimten, de matrix van een afbeelding ten opzichte van willekeurige bases (alleen bij afleiden, in een opdracht), basisverandering, eigenwaarden (die horen bij LPD 30, Matrices).
- **Notatie:** $\vec v$ voor een vector in algemene uitspraken, $\vec 0$ voor de nulvector, $\langle \vec v_1, \ldots, \vec v_k \rangle$ voor de voortgebrachte deelruimte (span vermeld), $\R_n[x]$ en $\R^{m \times n}$, $[\vec v]_B$ voor de coördinaten, $\operatorname{Ker} f$ en $\operatorname{Im} f$.

## Oefeningen

De 130 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (43, 43 en 44): Start (Opwarmer en Verken), 9 of 10 korte oefeningen, 22 opdrachten op drie niveaus (85, 75 en 72 deelvragen), 3 Koppel-oefeningen (Differentiaalvergelijkingen, Complexe getallen, Ruimtemeetkunde, Groepen) en 7 testvragen. Er zijn geen prenten. Zie `Opmaak/oefeningenbank.py`.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's (`\rooster`, `\roosterleeg`, `\assen`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`, de stijl `ruimte` met `\assendrie`), uit Matrices `\km`, `\um`, `\rb` en `\tr`, en voor deze cursus `\vb{...}` (voortgebrachte deelruimte), `\Rx{n}`, `\Rmn{m}{n}`, `\coord{v}{B}`, `\kol`, `\rang`, `\Ker`, `\Img`, `\nulv`, en voor de figuren `\vpijl` (een vector als pijl), `\scheefrooster` (het rooster van een basis) en `\vierkantdrie` (een vierkant van 3 bij 3).

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py 4/Algebra/Vectorruimten
py -3.13 -P Opmaak/maak-pdf.py 4/Algebra/Vectorruimten --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd (alle versies, zonder fouten, `??` of Overfull boven 2 pt) en steekproefsgewijs bekeken. De voorbeelden en de antwoorden van de oefeningen zijn nagerekend met Python/SymPy (stelsels, rangen, determinanten, coördinaten, de dimensie van de magische vierkanten van 3 bij 3 en 4 bij 4, de formules van de recursies, matrices en kernen). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
