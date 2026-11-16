# Exponentiële en logaritmische functies: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 12-17, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Exponentiële functies | `hoofdstukken/01-exponentiele-functies.tex` | LPD 12-17 | eerste versie, nog na te lezen |
| 2. Logaritmen | `hoofdstukken/02-logaritmen.tex` | LPD 12-17 | eerste versie, nog na te lezen |
| 3. Logaritmische functies | `hoofdstukken/03-logaritmische-functies.tex` | LPD 12-17 | eerste versie, nog na te lezen |

De verdeling van de leerstof over de afzonderlijke doelen 12 tot 17 is nog na te kijken met de leerplantekst.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Exponentiele-en-logaritmische-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Exponentiele-en-logaritmische-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Exponentiele-en-logaritmische-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Exponentiele-en-logaritmische-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Exponentiele-en-logaritmische-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Analyse/Exponentiële en logaritmische functies"
```

## Afbakening

- **Hoofdstuk 1:** machten met rationale exponenten en rekenregels, de exponentiële functie (grafiek, asymptoot, transformaties), vergelijkingen met hetzelfde grondtal, groei en verval met groeifactor, groeipercentage en halveringstijd, het getal $\e$ en continue groei.
- **Hoofdstuk 2:** definitie van de logaritme, $\log$ en $\ln$, rekenregels met bewijs, verandering van grondtal, exponentiële vergelijkingen, logaritmische schalen (pH, decibel, magnitude van sterren: het thema van de voorkant).
- **Hoofdstuk 3:** de logaritmische functie als inverse, domein en asymptoot, logaritmische vergelijkingen met bestaansvoorwaarden, ongelijkheden (teken omkeren bij grondtal kleiner dan 1), lineariseren met $\log N$.
- **Notatie:** $\log_a x$, zoals op de rekentoestellen. De Vlaamse ${}^a\!\log x$ staat alleen in een leerkrachtennota.
- Afgeleiden van $\e^x$ en $\ln x$ horen bij Limieten en afgeleiden.

## Eigen macro's

Zoals in Algemene functies: `\R`, `\dom`, `\ber`, `\inv{f}`, `\tekentabel`, `\vol`, `\open`, `\kromme`, `\rooster`; daarnaast `\e`.

## Controle

Alle getallen (groeimodellen, logaritmen, vergelijkingen, ongelijkheden) zijn nagerekend met Python. De figuren zijn uit de voorschriften getekend. Bewijzen en uitlegvragen zijn nagelezen, niet machinaal gecontroleerd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
