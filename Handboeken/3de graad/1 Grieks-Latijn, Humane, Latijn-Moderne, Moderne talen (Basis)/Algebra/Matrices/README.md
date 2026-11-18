# Matrices (pakket 1, Basis): handboek

Cursus voor pakket 1 (Grieks-Latijn, Humane wetenschappen, Latijn-Moderne talen, Moderne talen), keuzedoelen K3 en K4, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De voorkant (Mondriaan) komt uit `Ontwerp/voorkanten/`: pas ze daar aan. De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Matrices/](<../../../cursussen/Matrices/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan Basis** (III-Wis-d, oktober 2024; nagekeken op 18 nov 2026). Matrices is in Basis een keuzedeel met twee keuzedoelen: K3 (bewerkingen: optelling, scalaire vermenigvuldiging, matrixvermenigvuldiging, machtsverheffing en transpositie) en K4 (matrixmodellen voor evoluties). De wenken bij K3: matrices invoeren vanuit toepassingen als opslagplaats voor gegevens, en met voorbeelden tonen dat het product niet commutatief maar wel associatief is en dat er nuldelers zijn. Bij K4: verbindingsmatrices, migratie, Lesliematrices en Markovketens, eerst een graaf, ICT voor machten, en de evolutie op lange termijn (stabilisatie). Het leerplan noemt geen aantal lestijden. Daarom kiest `handboek.tex` de hoofdstukken 1 en 4 van de bron, als hoofdstuk 1 en 2: stelsels (Gauss-Jordan) en de inverse, determinant en rang vallen buiten Basis. Deze versie van pakket 1 is van Klaas; ze was al grotendeels afgestemd, en is nu nagekeken tegen de leerplantekst.

| Hoofdstuk | Bestand in de bron | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met matrices | `hoofdstukken/01-rekenen-met-matrices.tex` | K3 | afgestemd op Basis, nog na te lezen |
| 2. Matrixmodellen | `hoofdstukken/04-matrixmodellen.tex` | K4 | afgestemd op Basis, nog na te lezen |

## Verschillen met pakket 4

Alles staat in de gedeelde bron met `\alleenvoor` of `pakketten:` in de YAML; pakket 2, 3 en 4 zijn niet veranderd (hun `gen/` is na het bouwen identiek aan die van voor de aanpassing). Nieuw bij deze afstemming zijn de rijen met **(nieuw)**; de andere verschillen waren er al.

| Waar | In pakket 1 | Reden |
|---|---|---|
| Hoofdstuk 2 en 3 van de bron | weg (niet in `handboek.tex`); hoofdstuk 4 van de bron heet hier 2 (`\mychapter` en de verwijzingen naar hoofdstuknummers met `\alleenvoor`); de inleidingen verwijzen niet naar stelsels of de inverse | buiten Basis |
| 1, leerkrachtennota (**nieuw**) | geen bewijzen: een korte uitleg of een voorbeeld | Basis vraagt geen bewijzen; wenk K3 |
| 1, rekenregels voor de optelling | één kader met de vier eigenschappen in een tabel; weg: de vier stellingen, voorbeeld `vb:h1-optelregels`, korte oefening `h1-k-optel` | geen bewijzen, minder formalisme |
| 1, bewijs bij de optelling (**nieuw**) | weg; in de plaats een alinea *Waarom gelden die regels?* met een getallenvoorbeeld | idem |
| 1, product met een getal | de drie regels in het kader van de definitie, zonder bewijzen; weg: voorbeeld `vb:h1-vereenvoudig`, korte oefening `h1-k-scalair` | idem |
| 1, rekenregels voor het product | één kader (associatief, distributief, met een getal, en $AB \neq BA$); de niet-commutativiteit ontdekken leerlingen in korte oefening `h1-commutatief`; weg: voorbeelden `vb:h1-assoc`, `vb:h1-distr`, `vb:h1-getal`, korte oefening `h1-k-product` | wenk K3: met voorbeelden |
| 1, associativiteit (**nieuw**) | nagegaan op één voorbeeld, $(AB)C = A(BC)$ met een $2 \times 2$-, $2 \times 2$- en $2 \times 1$-matrix | wenk K3: met voorbeelden aangeven dat het product wel associatief is |
| 1, eenheidsmatrix (**nieuw**) | het bewijs (bij pakket 1 al voor $2 \times 2$) wordt *Waarom?* met een rekenvoorbeeld | geen bewijzen |
| 1, nuldelers | het voorbeeld blijft, het woord *nuldelers* en de eigen subsectie niet | wenk K3, zonder vakterm |
| 1, machten | weg: de stelling $A^m A^n = A^{m+n}$ met bewijs (blijft als zin), voorbeeld `vb:h1-merkwaardig`, korte oefening `h1-k-macht`; de formule voor $(A + B)^2$ blijft; korte oefening `h1-macht` na het rekentoestel | minder formalisme |
| 1, opdrachten | weg: `h1-o24` (fouten zoeken), `h1-o25` (staafdiagram ijskraam); eigen plaats: `h1-o8`, `h1-o14` (met een aangepaste verwijzing in de uitwerking), `h1-o18` | keuze van de versie van Klaas (zie Na te kijken) |
| 1, opdrachten (**nieuw**) | weg: `h1-o20` (alle $X$ met $AX = XA$, stelsel met vier onbekenden); eigen versie: `h1-o19` (zonder het algemene bewijs van $(AB)\tr = B\tr A\tr$ met letters), `h1-o21` (b met getallen: zoek $c$ zodat het kwadraat $I$ is, in plaats van een bewijs met letters) | te formeel voor Basis |
| 2, leerkrachtennota (**nieuw**) | ICT voor machten bij de wenk vermeld; geen bewijzen | wenk K4 |
| 2, aantal wegen en matrixmodel (**nieuw**) | de bewijzen worden *Waarom klopt dat?* en *Waarom?*: dezelfde redenering in woorden, zonder indices | geen bewijzen |
| 2, evenwicht | algebraïsch alleen bij twee toestanden; bij drie met een hoge macht op het rekentoestel (Terug naar het probleem met $F^{30}$ in plaats van Gauss-Jordan); weg: korte oefening `h4-evenwicht3`, testvraag `h4-t7` | Gauss-Jordan valt buiten Basis; wenk K4: ICT voor machten |
| 2, groei | korte oefening `h4-groei` in eigen versie | idem |
| 2, opdrachten | weg: `h4-o20` (drill evenwicht), `h4-o21` (fouten zoeken), `h4-o22` (supermarkten, grafiek), `h4-o23` (toernooi), `h4-o24` (Leslie terugrekenen), `h4-o25` (verzekering, Gauss-Jordan), `h4-o26` (algemeen bewijs met de rij $E$); eigen plaats: `h4-o7`, `h4-o15`, `h4-o19` | `h4-o25` en `h4-o26` buiten Basis; de andere: keuze van de versie van Klaas |
| 2, opdrachten (**nieuw**) | eigen versie van `h4-o17`: de betekenis van $p$ en $q$ blijft, het algemene bewijs $x = \frac{q}{p + q}$ wordt een evenwicht met getallen ($p = 0{,}1$, $q = 0{,}3$) en de controle dat er in het evenwicht evenveel in beide richtingen wisselen | te formeel voor Basis |

Aantallen in pakket 1 (pakket 4 tussen haakjes):

| Hoofdstuk | Voorbeelden | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|---|
| 1. Rekenen met matrices | 14 (20) | 10 (14) | 22 (25) | 3 (3) | 8 (8) |
| 2. Matrixmodellen | 8 (8) | 7 (8) | 19 (26) | 3 (3) | 6 (7) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken). Er staat geen enkel bewijskader meer in pakket 1 (pakket 4: 13 in hoofdstuk 1 en 2 in hoofdstuk 4). Het handboek telt 44 pagina's (zoals voor de afstemming; pakket 4: 101 met vier hoofdstukken), de leerkrachtenversie 47, de zelfstudieversie 50, de numerieke oplossingen 5 en de uitgewerkte oplossingen 17.

## Na te kijken

- **Bewijzen.** De versie van Klaas had bewust een paar eenvoudige bewijzen ($2 \times 2$, wegen tellen, matrixmodel). Ze staan er nu als uitleg in woorden, zonder bewijskader, zoals in de andere cursussen van Basis. Wil Klaas de kaders terug, dan volstaat het om in de bron de blokken `\begin{alleenvoor}{2,3,4}` rond die `bewijs`-omgevingen en de `\alleenvoor{1}`-alinea's *Waarom?* weer samen te voegen.
- **Matrixvergelijkingen** ($2X + A = B$, voorbeeld `vb:h1-vergelijking`, korte oefening `h1-vergelijking`, opdracht `h1-o9`, testvraag `h1-t4`) en **gelijke matrices met onbekenden** (`vb:h1-gelijk`, `h1-o10`) staan niet letterlijk in K3. Ze oefenen wel de bewerkingen en blijven daarom.
- **Notatie met indices** in opdracht `h1-o4` ($a_{ij} = i - j$, $b_{ij} = (-1)^{i+j} \cdot j$): misschien te formeel voor Basis; deel b kan eventueel weg.
- **Merkwaardig product** $(A + B)^2 = A^2 + AB + BA + B^2$ (tekst en opdracht `h1-o15`) staat niet in het leerplan, maar toont goed dat rekenregels van getallen niet altijd gelden (wenk K3).
- **Uitleg met de associativiteit** in `h1-o22` a (rijsommen van $M^2$) en de **Koppel-opdrachten** `h1-koppel-3` b (Fibonacci), `h4-koppel-2` (afstand tot het evenwicht als meetkundige rij, Rijen LPD 16): uitdagend voor Basis.
- **`h4-o16`** (lesliematrix met parameter $v$, wanneer groeit de populatie): blijft, maar is abstracter dan de rest.
- **Opdrachten die in pakket 4 bijkwamen** en die wel binnen K3 en K4 vallen: `h1-o24` en `h4-o21` (fouten zoeken), `h1-o25` en `h4-o22` (gegevens uit een grafiek), `h4-o20` (drill evenwicht), `h4-o23` (toernooi), `h4-o24` (Leslie terugrekenen). Ze staan niet in pakket 1 omdat de versie van Klaas ongewijzigd bleef bij de uitbreiding van de oefeningen. Met `pakketten: [1, 2, 3, 4]` (of zonder veld) en `\oef` buiten het blok `\alleenvoor{2,3,4}` komen ze erbij; dan stijgt het aantal opdrachten tot ongeveer dat van pakket 4.
- **Zo werk je met dit boek** (gedeeld, in `Opmaak/`) zegt dat het theoriekader de eigenschappen *met hun bewijs* geeft; in pakket 1 staan er geen bewijzen meer.
- **Rekentoestel:** de leerkrachtenversie noemt de toetsen van de TI-84. Pas aan als de school een ander toestel gebruikt.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Matrices-zelfstudie.pdf)

## Maken

Vanuit de hoofdmap van de repo, in PowerShell:

```
py -3.13 -P Opmaak/maak-pdf.py 1/Algebra/Matrices                  alles: handboek, oplossingen, leerkracht, zelfstudie
py -3.13 -P Opmaak/maak-pdf.py 1/Algebra/Matrices --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

Zoals bij Integralen: de grafieken worden bewaard in `figuren-cache/`, LaTeX leest `gen/`, en de oefeningen (82 in pakket 1) staan in `oefeningen/*.yaml` van de bron. Pas een opgave dus aan in de YAML.

## Afbakening

- **Niet opgenomen:** stelsels (Gauss-Jordan), inverse, rang en determinant. Die staan niet in het leerplan Basis.
- **Bewijzen:** geen. De eigenschappen krijgen een korte uitleg (*Waarom?*) of worden op een voorbeeld nagegaan. Associativiteit en distributiviteit worden aangenomen.
- **Evenwicht:** algebraïsch alleen bij twee toestanden (één vergelijking). Bij drie toestanden met een hoge macht op het rekentoestel, zoals de wenken toelaten.
- **Afspraak:** in elke matrix van hoofdstuk 2 is de kolom het vertrek (van) en de rij de aankomst (naar), ook bij grafen. Zo werkt $X_{n+1} = MX_n$ met een kolom. Het boek zegt dat andere boeken het soms omgekeerd doen.

## Eigen macro's

- `notatie.tex`: `\tr` (getransponeerde), `\km` (compacte matrix in tekst en antwoorden), `mat`, de TikZ-stijlen `knoop`, `boog`, `lus`, `kans` en `getallen` (matrix in TikZ, kolommen met `\&`), `\markeer` (rij of kolom kleuren) en `\staaf`. De integraalmacro's zijn weg.

## Controle

Alle uitkomsten van voorbeelden, oefeningen, Koppel en test zijn nagerekend met numpy (machten, evenwichten en groeifactoren ook numeriek). De nieuwe en herschreven stukken van pakket 1 (het voorbeeld bij de associativiteit en de eenheidsmatrix, `h1-o19`, `h1-o21` b met $c = -1$, `h4-o17` met evenwicht 0,75) zijn nagerekend met SymPy. Uitlegvragen zijn niet nagerekend. Gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek en in de oplossingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
