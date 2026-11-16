# Telproblemen: handboek

Cursus voor pakket 4 (B+S''), leerplandoel 47, met het binomium van Newton en de driehoek van Pascal uit de leerplantabel, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De voorkant (Bruegel) komt uit `Ontwerp/voorkanten/`.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Tellen | `hoofdstukken/01-tellen.tex` | LPD 47 (met volgorde) | eerste versie, nog na te lezen |
| 2. Combinaties | `hoofdstukken/02-combinaties.tex` | LPD 47 (zonder volgorde), driehoek van Pascal | eerste versie, nog na te lezen |
| 3. Het binomium van Newton | `hoofdstukken/03-binomium.tex` | binomium, sommatieteken | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Telproblemen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Telproblemen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Telproblemen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Telproblemen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Telproblemen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Discrete wiskunde/Telproblemen"
```

## Afbakening

- **Hoofdstuk 1:** som- en productregel, boom- en venndiagram (uit de 2de graad), het tegendeel tellen, herhalingsvariaties, variaties, permutaties en faculteiten. De somregel voor drie verzamelingen staat als opdracht.
- **Hoofdstuk 2:** combinaties, eigenschappen met combinatorisch bewijs, driehoek van Pascal, permutaties met herhaling (ook roosterwegen), combinaties met herhaling (sterretjes en streepjes), en een keuzeschema met de vier gevallen. De Opdrachten mengen bewust met hoofdstuk 1.
- **Hoofdstuk 3:** sommatieteken, binomium met combinatorisch bewijs (geen inductie), algemene term, som van een rij, benaderen.
- **Notatie:** de Vlaamse $V_n^p$, $\overline{V}{}_n^p$, $P_n$, $C_n^p$ en $\overline{C}{}_n^p$, met daarnaast $\binom{n}{p}$ zoals op het rekentoestel. Wijzigen kan in `notatie.tex`.

## Eigen macro's

`\Var`, `\HVar`, `\Perm`, `\Comb`, `\HComb`, `\N`; de TikZ-stijlen `tak`, `blad` (boomdiagram) en `verz` (venndiagram); zoals in Integralen `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`.

## Controle

Alle aantallen zijn nagerekend met Python (`math.comb`, `math.perm`), waar het kon ook door alle gevallen op te sommen (zoals de even getallen met vier verschillende cijfers en de getallen deelbaar door 2, 3 of 5); de binomiale uitwerkingen met SymPy. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
