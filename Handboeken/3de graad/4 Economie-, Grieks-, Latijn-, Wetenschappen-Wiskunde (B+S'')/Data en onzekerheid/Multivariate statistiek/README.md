# Multivariate statistiek: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d), rubriek 4.6.3 (LPD 53 en 54), voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is het rechterscherm van *Irissen* (ca. 1701-1705) van Ogata Kōrin (publiek domein): irissen in groepjes, als puntenwolken, en de bekendste multivariate gegevens zijn vier maten van 150 irissen (Anderson 1935, Fisher 1936). De voorkant komt uit `Ontwerp/voorkanten/` (motief `multivariate-statistiek`: een puntenwolk met haar hoofdassen en de ellipsen met afstand van Mahalanobis 1 en 2).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer in [cursussen/Multivariate statistiek/](<../../../cursussen/Multivariate statistiek/>). Deze map kiest de hoofdstukken in `handboek.tex`.

**Voorkennis uit pakket 4:** Statistiek (variantie met $n - 1$, steekproef en populatie, samenhang en causaliteit), Matrices (product, getransponeerde, symmetrische matrix, determinant, inverse, homogene stelsels), Ruimtemeetkunde (scalair product, norm, hoek tussen vectoren, loodrechte stand). Uit de 2de graad: het spreidingsdiagram en $r$ met ICT. De cursus verwijst naar Lineaire regressie ($\Sxx$, $\Sxy$, $R^2 = r^2$) en Kansverdelingen, maar steunt er niet op. Eigenwaarden en eigenvectoren (Complementair, Matrices, LPD 30) worden in hoofdstuk 3 ingevoerd voor symmetrische $2 \times 2$-matrices, met bewijzen; wie die module zag, kan dat deel snel doen. Voorgesteld in het 6de jaar, na Statistiek en Matrices. De rekentoestelcommando's zijn die van de TI-84; voor matrices en eigenwaarden wordt ICT (Python, GeoGebra, een rekenblad) gebruikt.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Covariantie en correlatie | `hoofdstukken/01-covariantie-en-correlatie.tex` | sporttijd en rusthartslag: Sara vindt een covariantie van $-17$, Bram (in minuten) $-1020$; wie heeft de sterkste samenhang, en hoe groot kan zo'n maat worden? | LPD 54 met beide wenken (formele definitie en verband met de covariantie, $0 \le r^2 \le 1$ met Cauchy-Schwarz, $R^2 = r^2$) | eerste versie, nog na te lezen |
| 2. De covariantiematrix | `hoofdstukken/02-de-covariantiematrix.tex` | drie proefexamens: de standaardafwijking van het totaal uit de samenvatting in het verslag | LPD 53: definitie, eigenschappen en beperkingen van de covariantiematrix, met ICT | eerste versie, nog na te lezen |
| 3. Afstand en hoofdassen | `hoofdstukken/03-afstand-en-hoofdassen.tex` | Lien (83, 80) of Ruben (74, 42): wie wijkt het meest af van de rest van het jaar? | LPD 53, de wenken over de afstand van Mahalanobis en over eigenwaarden, eigenvectoren en diagonaliseren | eerste versie, nog na te lezen |

## Inhoud

1. De covariantie (met de rechthoeken rond het gemiddelde punt), de rekenformule (met bewijs), covariantie en variantie, het effect van een lineaire transformatie (met bewijs), de correlatiecoëfficiënt $r = s_{xy}/(s_xs_y)$ en haar onafhankelijkheid van de eenheden (met bewijs), de vectoren van de afwijkingen, de ongelijkheid van Cauchy-Schwarz (met bewijs via de discriminant), $0 \le r^2 \le 1$ en het geval $r = \pm 1$ (met bewijs), $r$ als cosinus van een hoek, $r^2 = R^2$, en wat $r$ niet zegt: alleen lineaire samenhang, uitschieters, samengevoegde groepen en een beperkt bereik, geen oorzaak.
2. De gegevensmatrix, de gemiddeldevector en de gecentreerde matrix, de covariantiematrix en $S = \frac{1}{n-1}X_c^TX_c$ (met bewijs), de correlatiematrix, $(AB)^T = B^TA^T$ (met bewijs), de symmetrie, de variantie $\vec a^TS\vec a$ van een lineaire combinatie (met bewijs en de meetkundige betekenis als spreiding in een richting), positief semidefiniet (met bewijs), $ASA^T$ na een lineaire transformatie (met bewijs), de beperkingen (lineair, uitschieters, eenheden, steekproef) en de ontaarde covariantiematrix bij $n \le p$ of een lineaire combinatie (met bewijs).
3. De Euclidische, de gestandaardiseerde en de afstand van Mahalanobis, haar twee eigenschappen (ongecorreleerde variabelen, onafhankelijk van een inverteerbare lineaire transformatie, met bewijs), de ellipsen van gelijke afstand, de variantie in elke richting, eigenwaarden en eigenvectoren met de karakteristieke vergelijking (met bewijs), drie eigenschappen van symmetrische matrices (reële eigenwaarden, loodrechte eigenvectoren, eigenwaarden van een covariantiematrix niet negatief, met bewijs), diagonaliseren $S = PDP^T$ (met bewijs voor $2 \times 2$, de spectraalstelling zonder bewijs), de hoofdcomponenten zijn ongecorreleerd en de eerste hoofdas geeft de grootste spreiding (met bewijs), de afstand van Mahalanobis als Euclidische afstand in de herschaalde hoofdassen en de halve assen $k\sqrt{\lambda_j}$ van de ellips (met bewijs), en de beperkingen.

## Afbakening

- **Alle LPD:** LPD 53 met de wenk over ICT, de afstand van Mahalanobis en het verschil met de Euclidische afstand, en de link met eigenwaarden, eigenvectoren en diagonaliseren (de covariantiematrix is diagonaliseerbaar; in het nieuwe assenstelsel zijn de variabelen ongecorreleerd en is de afstand van Mahalanobis een Euclidische afstand). LPD 54 met beide wenken.
- **Extra's:** $r$ als cosinus van een hoek, de correlatiematrix, de regel $(AB)^T = B^TA^T$, positief semidefiniet, de hoofdcomponenten en het deel van de variantie langs de eerste hoofdas, en als opdrachten de identiteit van Lagrange, de portefeuille met het kleinste risico, spreiden over veel fondsen, de afstand tussen groepen (het oorspronkelijke gebruik van Mahalanobis) en $P(d_M > k) = e^{-k^2/2}$ (gegeven, zonder bewijs).
- **Zonder bewijs, gemeld in de tekst:** de spectraalstelling voor $p > 2$ en de reële eigenwaarden van grotere symmetrische matrices; in een opdracht het criterium met de hoofdminoren voor een $3 \times 3$-matrix en de kansformule bij een normale verdeling (als gegeven).

## Oefeningen

De 125 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (42, 41 en 42): telkens 2 Start, 8 korte oefeningen, 21 Opdrachten op drie niveaus (69, 61 en 60 deelvragen), 4, 3 en 4 Koppel (de vierde van hoofdstuk 3 verwijst naar de module Eigenwaarden en eigenvectoren) en 7 testvragen. Er zijn geen prenten.

## Eigen macro's

In `notatie.tex`: de spreidingsdiagrammen en tabellen van Lineaire regressie (`\diagram`, `\xas`, `\yas`, `\punten`, `\gempunt`, `\gemlijnen`, `\kleinetabel`, plus `\drietabel` voor drie variabelen), de matrices van Matrices (`\km`, `\um`, `\tr`), `\ellips` en `\hoofdas` voor hoofdstuk 3, en de notatie `\Sxx`, `\Sxy`, `\Syy`, `\Qf`, `\som`, `\dM`, `\diag`.

## Maken

```
python -P Opmaak/maak-pdf.py "4/Data en onzekerheid/Multivariate statistiek"
python -P Opmaak/maak-pdf.py "4/Data en onzekerheid/Multivariate statistiek" --hoofdstuk 2
```

## Controle

Eerste versie van 23 nov 2026. Alle antwoorden en uitwerkingen nagerekend met Python, SymPy en NumPy. Alle gegevens zijn verzonnen; de puntenwolken in de figuren zijn met de computer getrokken (de wolk van hoofdstuk 3 heeft exact de covariantiematrix uit de tekst, op de afronding na). Na te kijken: de historische opmerkingen (Cauchy 1821, Schwarz 1888, Mahalanobis 1936, de irissen van Anderson en Fisher), de datering van het scherm van Kōrin, en de namen en het gedrag van de ICT-functies (`COVARIANCE.S`, `CORREL`, `numpy.cov`, `numpy.linalg.eigh`, en of GeoGebra `Covariance` door $n$ deelt). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
