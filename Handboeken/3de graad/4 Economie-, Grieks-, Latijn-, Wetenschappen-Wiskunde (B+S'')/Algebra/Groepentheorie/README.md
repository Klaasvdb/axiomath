# Groepentheorie: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.4.2, LPD 31-32) voor richtingen met meer dan 6 uur wiskunde. Ze is het vervolg op [Algebra/Groepen](../Groepen/README.md), dat deelgroepen, Lagrange en morfismen bewust aan Complementair overlaat. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is het *Portret van Luca Pacioli* (1495), toegeschreven aan Jacopo de' Barbari (publiek domein): links hangt een glazen ruitkuboctaëder, rechts staat een regelmatig twaalfvlak, en hun draaiingen vormen groepen. De voorkant komt uit `Ontwerp/voorkanten/` (motief `groepentheorie`: de nevenklassen van {0, 4, 8} in Z₁₂, de stelling van Lagrange als 12 = 4 · 3).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Groepentheorie/](<../../../cursussen/Groepentheorie/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Cyclische groepen | `hoofdstukken/01-cyclische-groepen.tex` | na hoeveel keer perfect schudden ligt een stapel kaarten terug in de beginvolgorde? | LPD 31: orde van elementen, cyclische groep, orde van een groep, het vermoeden dat de orde van een element de orde van de groep deelt | eerste versie, leerkracht moet nalezen |
| 2. Deelgroepen en de stelling van Lagrange | `hoofdstukken/02-deelgroepen-en-lagrange.tex` | hoeveel draaiingen kan een kleinere groep van draaiingen van een tetraëder tellen: 5? 6? | LPD 32: deelgroepen, nagaan of iets een deelgroep is, Lagrange; bewijs van het vermoeden van LPD 31 | eerste versie, leerkracht moet nalezen |
| 3. Groepsmorfismen | `hoofdstukken/03-groepsmorfismen.tex` | waarom vermenigvuldigt een rekenlat, en kan een schaal ook negatieve getallen aan? | LPD 32: groepsmorfismen en isomorfismen, voorbeelden van isomorfe groepen | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Machten met een geheel exponent (additieve en multiplicatieve schrijfwijze), product van machten en macht van een macht (met bewijs), $(ab)^2 \neq a^2b^2$; elk element van een eindige groep heeft een orde, $a^k = e \iff \operatorname{ord}(a) \mid k$, gelijke machten (rekenen met exponenten modulo de orde); $\langle a \rangle$ is een commutatieve groep met $\operatorname{ord}(a)$ elementen; cyclische groep en voortbrenger, cyclisch is commutatief; de orde van $k$ in $\mathbb{Z}_n$ is $n / \operatorname{ggd}(k, n)$ en de voortbrengers (met $\varphi(n)$), de kwintencirkel; het vermoeden (orde van een element deelt de orde van de groep); cykels, ontbinding in disjuncte cykels, de orde van een permutatie als kgv, perfect schudden.
2. Deelgroep en het kenmerk (met bewijs), de kortere versie voor eindige deelverzamelingen, alle deelgroepen van $D_3$ en het deelgroepenschema; elke deelgroep van een cyclische groep is cyclisch, de deelgroepen van $\mathbb{Z}_{12}$; nevenklassen (even groot, overlappen niet), index, de stelling van Lagrange; gevolgen: orde van een element deelt $|G|$, $a^{|G|} = e$, groepen van priemorde; de groep van de eenheden $\mathbb{Z}_n^{\times}$ en de stelling van Euler; deelgroep met index 2 en de tetraëder zonder deelgroep van 6 draaiingen (het omgekeerde van Lagrange geldt niet).
3. Groepsmorfisme (logaritme, rest bij deling, $2^x$, determinant), beeld van het neutraal element, van een inverse en van een macht; kern, kern is een deelgroep, injectief als de kern triviaal is; isomorfisme, inverse van een isomorfisme, $\mathbb{Z}_4 \cong \{1, i, -1, -i\}$; een isomorfisme bewaart de orde en de commutativiteit, groepen die niet isomorf zijn; de rekenlat ($(\mathbb{R}_0, \cdot)$ heeft een element van orde 2, $(\mathbb{R}, +)$ niet); elke cyclische groep is isomorf met $\mathbb{Z}_n$ of $\mathbb{Z}$; product van groepen, de viergroep van Klein; overzicht van alle groepen tot 8 elementen.

## Afbakening

- **Alle wenken van LPD 31 en 32** staan erin: de orde in $\mathbb{Z}_n$ en symmetriegroepen, cyclische groep en orde van een groep, laten ondervinden dat de orde van een element de orde van de groep deelt (hoofdstuk 1, sectie 2.4, en bewezen in hoofdstuk 2), nagaan of een deelverzameling een deelgroep is, de stelling van Lagrange, isomorfismen met voorbeelden van isomorfe groepen. Morfismen staan er ook in het algemeen in, niet alleen isomorfismen.
- **Extra's buiten de wenken:** de cykelnotatie en de orde van een permutatie (hoofdstuk 1, lost het probleem op), deelgroepen van cyclische groepen, nevenklassen (nodig voor het bewijs van Lagrange), de groep $\mathbb{Z}_n^{\times}$ met de stelling van Euler, de deelgroep met index 2, de kern, het product van groepen en het overzicht van de kleine groepen. Het teken van een permutatie (met de vijftienpuzzel), de classificatie van de groepen met 6 elementen en de isomorfismen van $\mathbb{Z}_n$ naar zichzelf staan alleen in opdrachten van niveau 3.
- **Weggelaten:** normaaldelers en factorgroepen (alleen een opdracht over index 2 en $a h a^{-1}$), de isomorfiestellingen (alleen het tellen $|G| = |\ker f| \cdot |f(G)|$ in een opdracht), de stellingen van Sylow (Cauchy alleen vermeld), het bewijs dat er vijf groepen met 8 elementen zijn.
- **Herhaalt niet** wat in Groepen staat (definitie van groep, $\mathbb{Z}_n$, symmetriegroepen, permutaties, de orde van een element en "dezelfde structuur"), maar vertrekt ervan, met dezelfde notatie: $\mathbb{Z}_n$ met $\oplus$ en $\odot$, $r$ en $s_1, s_2, s_3$ voor de driehoek, permutaties in twee rijen.
- **Notatie:** $\operatorname{ord}(a)$, $\langle a \rangle$, $\mathbb{Z}_n^{\times}$ voor de eenheden modulo $n$, $D_n$ voor de symmetriegroep van de regelmatige $n$-hoek (vanaf hoofdstuk 3), cykels als $(1\ 3\ 4)$, $a \ast H$ voor de nevenklasse, $[G : H]$, $\ker f$, $G \cong H$, $G \times H$.

## Oefeningen

De 124 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (42, 41 en 41): Start (Opwarmer en Verken), 8, 7 en 7 korte oefeningen, 22 opdrachten op drie niveaus (91, 78 en 75 deelvragen), 3 Koppel-oefeningen per hoofdstuk en 7 testvragen. Koppel: Complexe getallen, Getaltheorie en Telproblemen (hoofdstuk 1); Getaltheorie (Fermat met Lagrange, RSA met Euler) en Matrices (hoofdstuk 2); Exponentiële en logaritmische functies, Complexe getallen en Matrices (hoofdstuk 3). Eén opdracht heeft een kleine prent (dobbelstenen, uit Kansverdelingen; bron in `afbeeldingen/prenten/README.md`). Zie `Opmaak/oefeningenbank.py`.

## Eigen macro's

In `notatie.tex`: die van Groepen (`\Zn`, `\plusn`, `\maaln`, `\perm`, `bewtabel`, `\driehoek`, `\vierkant`, `\rechthoek`, `\klok`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`), en voor deze cursus `\ord`, `\vb{a}` (voortgebrachte groep), `\ggd`, `\kgv`, `\cyc{1 & 3 & 4}` (cykel), `\Zs{n}` (eenheden), `\isom`, en voor de figuren `\kring` en `\kpt` (punten van $\mathbb{Z}_n$ op een kring), `\sprongen` (sprongen van $m$ stappen op een kring), `\kaart`, `\tetraeder` en `\logschaal` (de schaal van een rekenlat).

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py 4/Algebra/Groepentheorie
py -3.13 -P Opmaak/maak-pdf.py 4/Algebra/Groepentheorie --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd (alle versies, zonder fouten, `??` of Overfull boven 2 pt) en pagina per pagina bekeken. De voorbeelden en de antwoorden van de oefeningen zijn nagerekend met Python/SymPy (machten en ordes modulo $n$, voortbrengers en $\varphi$, cykels en de ordes van de schudpermutaties, alle deelgroepen van $\mathbb{Z}_{12}$, $\mathbb{Z}_{15}^{\times}$ en de draaiingen van de tetraëder, de factorisatie van de orde van de groep van de Rubiks kubus, RSA met $n = 33$, de isomorfismen met voortbrengers, de afstanden op de rekenlat en de decibels). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
