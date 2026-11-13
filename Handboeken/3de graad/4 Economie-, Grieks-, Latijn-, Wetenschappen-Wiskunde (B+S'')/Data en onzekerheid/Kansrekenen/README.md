# Kansrekenen: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 48 en 49, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk; de simulatie in hoofdstuk 1 is een eigen computerrun. De voorkant (Caravaggio) komt uit `Ontwerp/voorkanten/`.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Kans | `hoofdstukken/01-kans.tex` | LPD 48 (Laplace, relatieve frequentie) | eerste versie, nog na te lezen |
| 2. Voorwaardelijke kans | `hoofdstukken/02-voorwaardelijke-kans.tex` | LPD 48 (kruistabellen, boomdiagrammen, Bayes) | eerste versie, nog na te lezen |
| 3. Toevalsvariabelen | `hoofdstukken/03-toevalsvariabelen.tex` | wenken bij LPD 49 | eerste versie, nog na te lezen |
| 4. De binomiale verdeling | `hoofdstukken/04-binomiale-verdeling.tex` | LPD 49 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Kansrekenen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Kansrekenen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Kansrekenen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Kansrekenen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Kansrekenen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Data en onzekerheid/Kansrekenen"
```

## Afbakening

- **Hoofdstuk 1:** uitkomstenverzameling, gebeurtenissen, wet van Laplace (met rooster en telformules), relatieve frequentie en wet van de grote aantallen (met een simulatie), rekenregels met bewijs voor het Laplace-geval.
- **Hoofdstuk 2:** voorwaardelijke kans in kruistabellen, productregel en boomdiagrammen, onafhankelijkheid (en het verschil met onverenigbaar), totale kans en Bayes. Bayes wordt eerst met een tabel van 10\,000 personen uitgelegd, dan met de formule.
- **Hoofdstuk 3:** toevalsvariabele, kansverdeling, verwachtingswaarde, variantie en standaardafwijking (rekenformule met bewijs), cumulatieve verdelingsfunctie. Continue variabelen alleen vermeld; ze komen in Statistiek.
- **Hoofdstuk 4:** binomiale verdeling met bewijs van de formule, rekentoestel (`binompdf`, `binomcdf`), $\E(X) = np$ en $\sigma = \sqrt{np(1-p)}$ (met bewijs via $k\binom{n}{k} = n\binom{n-1}{k-1}$), grafisch verband met de normale verdeling, en beoordelen of een uitkomst verrassend is (voorbereiding op hypothesetoetsen in Statistiek).
- **Rekentoestel:** de leerkrachtenversie noemt de TI-84.

## Eigen macro's

`\compl{A}` (complement), `\gegeven` (de streep in $P(A \gegeven B)$), `\E`, `\Var`, `\R`, `\N`, `\Comb`, `\km`, `\staaf`; de TikZ-stijlen `tak`, `blad`, `kanslabel` (boomdiagram) en `verz` (venndiagram); zoals in Integralen `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`.

## Controle

Alle kansen zijn nagerekend met Python (breuken en binomiale kansen), waar het kon door alle uitkomsten op te sommen (twee en drie dobbelstenen, permutaties). Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
