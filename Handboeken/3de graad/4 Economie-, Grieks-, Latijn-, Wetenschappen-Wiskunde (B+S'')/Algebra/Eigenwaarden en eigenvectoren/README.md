# Eigenwaarden en eigenvectoren: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d), rubriek 4.4.1 Matrices (LPD 30), voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven, contexten en figuren zijn eigen werk. De omslag is *De spinsters* (*Las Hilanderas*, ca. 1655-1660) van Diego Velázquez (publiek domein): het spinnewiel draait, maar zijn as blijft op haar plaats, zoals een eigenvector met eigenwaarde 1 bij een draaiing in de ruimte. De voorkant komt uit `Ontwerp/voorkanten/` (motief `eigenwaarden`: de afbeelding van het probleem van hoofdstuk 1 met een eigenvector die verdubbelt en een vector die wegdraait).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer in [cursussen/Eigenwaarden en eigenvectoren/](<../../../cursussen/Eigenwaarden en eigenvectoren/>). Deze map kiest de hoofdstukken in `handboek.tex`.

**Voorkennis uit pakket 4:** Matrices (product, inverse, determinant van een $2 \times 2$- en $3 \times 3$-matrix, Gauss-Jordan, de stelling over rang, determinant en inverse, en vooral hoofdstuk 4: overgangsmatrices, lesliematrices en het evenwicht, met dezelfde afspraak *kolom is van, rij is naar*), Complexe getallen (tweedegraadsvergelijkingen met $D < 0$, de toegevoegde, De Moivre in een Koppel), Rijen (limiet van $q^n$). Vectorruimten (lineaire afbeelding, kern, basis) helpt maar is niet nodig: wat nodig is, staat kort in de tekst, met dezelfde notatie ($\vec v$, $\Ker$, $\vb{\ldots}$). Multivariate statistiek voert in hoofdstuk 3 zelf eigenwaarden in voor symmetrische $2 \times 2$-matrices, met dezelfde definitie, dezelfde karakteristieke vergelijking en dezelfde notatie $\det(A - \lambda I)$; beide boeken verwijzen naar elkaar in de Koppel. Voorgesteld in het 6de jaar, na Matrices.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Eigenwaarden en eigenvectoren | `hoofdstukken/01-eigenwaarden-en-eigenvectoren.tex` | een tekenprogramma vervormt een huisje met $f(x, y) = (3x - y, 2x)$: welke rechten door de oorsprong komen op zichzelf terecht, en wat gebeurt er met hun punten? | LPD 30 met de wenk over de karakteristieke veelterm | eerste versie, nog na te lezen |
| 2. Evenwicht en groei | `hoofdstukken/02-evenwicht-en-groei.tex` | de kerkuilen uit Matrices: bij welke overlevingskans van de jonge uilen blijft de populatie net stabiel, en hoe is ze dan verdeeld? | LPD 30 met de wenk over stabilisatie ($AX = X$ en de eigenwaarde 1) | eerste versie, nog na te lezen |
| 3. Diagonaliseren | `hoofdstukken/03-diagonaliseren.tex` | de konijnen van Fibonacci: hoeveel paren na 60 maanden, en waarom gaat het quotiënt naar $1{,}618$? | LPD 30 met de wenk over diagonaliseren, niet-diagonaliseerbare matrices en machten | eerste versie, nog na te lezen |

## Inhoud

1. Een matrix als lineaire afbeelding, de poging met $y = mx$ en haar gebreken, eigenvector en eigenwaarde (met hun meetkundige betekenis), de eigenruimte als deelruimte (met bewijs), eigenruimten meetkundig (spiegeling, projectie), de karakteristieke vergelijking $\det(A - \lambda I_n) = 0$ (met bewijs) en de karakteristieke veelterm, eigenvectoren berekenen (ook de snelle manier bij $2 \times 2$), matrices van orde 3 (ontwikkelen, Sarrus, delers van de constante term en Horner, een dubbele eigenwaarde met een vlak), complexe eigenwaarden en toegevoegde eigenvectoren (met bewijs), spoor en determinant (met bewijs voor $2 \times 2$), driehoeksmatrices (met bewijs), de eigenwaarde 0 en de inverse (met bewijs).
2. Een evenwicht is een eigenvector bij 1 (met bewijs), elke overgangsmatrix heeft de eigenwaarde 1 (met bewijs), de karakteristieke veelterm van een lesliematrix en de voorwaarde voor een stabiele populatie $v_1 + o_1v_2 + o_1o_2v_3 = 1$ (met bewijs), het netto reproductiegetal $R_0$, $A^n\vec v = \lambda^n\vec v$ (bewijs door inductie), de evolutie als combinatie van eigenvectoren (met bewijs), de dominante eigenwaarde en het gedrag op lange termijn (met bewijs voor twee eigenvectoren), de groeifactor en de stabiele leeftijdsverdeling van de uilen uit Matrices.
3. Machten van een diagonaalmatrix (met bewijs), diagonaliseerbaar $\iff$ basis van eigenvectoren (met bewijs), eigenvectoren bij verschillende eigenwaarden zijn onafhankelijk (met bewijs voor twee, drie in een opdracht), $n$ verschillende eigenwaarden volstaan, de afschuiving als niet-diagonaliseerbare matrix, algebraïsche en meetkundige multipliciteit, diagonaliseren over $\C$, $A^n = PD^nP^{-1}$ (met bewijs), de limiet van $M^n$ bij een overgangsmatrix (waarom de kolommen gelijk worden), de formule van Binet.

## Afbakening

- **Alle wenken van LPD 30:** de karakteristieke veelterm (hoofdstuk 1), stabilisatie bij matrixmodellen voor evolutie als $AX = X$ met de eigenwaarde 1 (hoofdstuk 2), en diagonaliseren met een basis van eigenvectoren, een matrix zonder zo'n basis, en machten van diagonaliseerbare matrices (hoofdstuk 3).
- **Extra's:** complexe eigenwaarden, spoor en determinant, $R_0$, de dominante eigenwaarde als groeifactor (zonder Perron-Frobenius), algebraïsche en meetkundige multipliciteit, diagonaliseren over $\C$, recursies en de formule van Binet. In de opdrachten: projecties ($P^2 = P$), nilpotente matrices, de as van een draaiing in de ruimte (Euler), PageRank, Cayley-Hamilton voor $2 \times 2$, gelijkvormige matrices, de vierkantswortel van een matrix, de getallen van Lucas.
- **Zonder bewijs, gemeld in de tekst:** dat de som van de eigenwaarden het spoor is voor $n \geqslant 3$, het criterium met de multipliciteiten en de ongelijkheid $\dim \Eig{\lambda} \leqslant$ algebraïsche multipliciteit, en dat bij een overgangsmatrix met positieve elementen 1 dominant is met een positief evenwicht (Perron-Frobenius).
- **ICT:** voor de reële nulwaarde van een derdegraadsveelterm bij lesliematrices van orde 3 (uilen, opdrachten).

## Oefeningen

De 124 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (44, 40 en 40): telkens 2 Start, 9, 7 en 7 korte oefeningen, 22, 21 en 21 Opdrachten op drie niveaus (75, 67 en 63 deelvragen), 4, 3 en 3 Koppel en 7 testvragen. Er zijn 11, 7 en 6 uitgewerkte voorbeelden. Er zijn geen prenten.

Koppel: Complexe getallen (vermenigvuldigen met $a + bi$; De Moivre en de draaimatrix), Vectorruimten (eigenfuncties van de afgeleide), Multivariate statistiek (symmetrische matrices; orthogonaal diagonaliseren), Ruimtemeetkunde (spiegeling om een vlak), Rijen, Iteraties en fractalen (dekpunt en tweede eigenwaarde), Exponentiële en logaritmische functies (verdubbelingstijd), Differentiaalvergelijkingen (dezelfde karakteristieke vergelijking). Multivariate statistiek kreeg een vierde Koppel-oefening in hoofdstuk 3 die naar deze module verwijst.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Vectorruimten (`\rooster`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`, `\scheefrooster`, `\vpijl`), de matrices van Matrices (`\km`, `\um`, `\rb`, `\kol`, `\tr`), de grafen van Matrices hoofdstuk 4 (`knoop`, `boog`, `lus`, `kans`), en `\Eig{\lambda}` (eigenruimte), `\spoor`, `\diag`, `\Ker`, `\vb`, `\abs`, `\bpijl` (het beeld van een vector, fel) en `\richting` (een gestippelde rechte door de oorsprong).

## Maken

```
python -P Opmaak/maak-pdf.py "4/Algebra/Eigenwaarden en eigenvectoren"
python -P Opmaak/maak-pdf.py "4/Algebra/Eigenwaarden en eigenvectoren" --hoofdstuk 2
```

## Controle

Eerste versie van 23 nov 2026. Alle eigenwaarden, eigenvectoren, diagonalisaties, machten, evenwichten en numerieke waarden (uilen: 1,0320 en $s = \tfrac{10}{27}$; Fibonacci $u_{60} = 2\,504\,730\,781\,961$) zijn nagerekend met SymPy. Na te kijken: de historische opmerkingen (Fibonacci 1202, Binet 1843 en De Moivre, Euler 1775, PageRank 1998), de datering van *De spinsters*, en of de leerlingen Horner en de delers van de constante term vlot kennen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
