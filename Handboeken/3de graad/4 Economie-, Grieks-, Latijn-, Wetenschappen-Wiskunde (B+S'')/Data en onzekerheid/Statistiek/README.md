# Statistiek: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 50-54 en keuzedoel K1, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten, data en figuren zijn eigen werk; de simulaties zijn eigen computerruns, de data verzonnen (en zo gemarkeerd waar ze echt zouden kunnen lijken). De voorkant (Rembrandt) komt uit `Ontwerp/voorkanten/`.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Steekproeven en samenhang | `hoofdstukken/01-steekproeven.tex` | LPD 50, 51 | eerste versie, nog na te lezen |
| 2. De normale verdeling | `hoofdstukken/02-normale-verdeling.tex` | LPD 52, 53 | eerste versie, nog na te lezen |
| 3. Hypothesetoetsen | `hoofdstukken/03-hypothesetoetsen.tex` | LPD 54 | eerste versie, nog na te lezen |
| 4. Betrouwbaarheidsintervallen | `hoofdstukken/04-betrouwbaarheidsintervallen.tex` | K1 (keuzedoel) | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Statistiek-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Statistiek-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Statistiek-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Statistiek-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Statistiek-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Data en onzekerheid/Statistiek"
```

## Afbakening

- **Hoofdstuk 1:** populatie, steekproef, parameter, representatief en aselect, soorten bias, gestratificeerde en getrapte steekproeven, steekproefvariabiliteit (simulatie), samenhang en causaliteit (verborgen variabele, omgekeerde causaliteit, toeval), observationeel tegenover experimenteel onderzoek. Weinig rekenwerk, veel argumenteren.
- **Hoofdstuk 2:** van histogram naar dichtheid, de Gausskromme en de betekenis van $\mu$ en $\sigma$, de 68-95-99,7-regel, kansen en grenzen met `normalcdf` en `invNorm`, z-scores, het model beoordelen.
- **Hoofdstuk 3:** steekproevenverdeling van $\hat{p}$ en $\overline{X}$ (centrale limietstelling zonder bewijs), toets voor een proportie (exact, binomiaal) en voor een gemiddelde met gekende $\sigma$ (z-toets), eenzijdig en tweezijdig, fouten van de eerste en tweede soort. Geen t-toets (niet in het leerplan).
- **Hoofdstuk 4 (keuzedoel):** 95~\%-intervallen voor een proportie en voor een gemiddelde met gekende $\sigma$, interpretatie (met simulatie), invloed van niveau, $n$ en spreiding, benodigde steekproefgrootte.
- **Rekentoestel:** de leerkrachtenversie noemt de TI-84.

## Eigen macro's

Zoals in Kansrekenen (`\E`, `\Var`, `\gegeven`, `\compl`, `\staaf`, ...), plus de TikZ-functie `gauss(x, mu, sigma)` voor de Gausskromme en `\xbar`.

## Controle

Alle kansen, p-waarden en intervallen zijn nagerekend met Python (exacte binomiale kansen en de normale verdeling via `erf`). Bewijzen en argumentatievragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
