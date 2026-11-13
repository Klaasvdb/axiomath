# Kansrekenen: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 17, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van de versie voor pakket 2 (PR #32), die via pakket 3 van pakket 4 (PR #4) komt: dezelfde vier hoofdstukken; alle doelverwijzingen naar LPD 17. Combinaties met het rekentoestel (nCr), want het pakket heeft geen cursus Telproblemen. Voor het Basispakket (125 lestijden) is dit waarschijnlijk te veel: kies hoofdstukken en opdrachten na vergelijking met de leerplantekst. Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Kans | `hoofdstukken/01-kans.tex` | LPD 17 | eerste versie, nog na te lezen |
| 2. Voorwaardelijke kans | `hoofdstukken/02-voorwaardelijke-kans.tex` | LPD 17 | eerste versie, nog na te lezen |
| 3. Toevalsvariabelen | `hoofdstukken/03-toevalsvariabelen.tex` | LPD 17 | eerste versie, nog na te lezen |
| 4. De binomiale verdeling | `hoofdstukken/04-binomiale-verdeling.tex` | LPD 17 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Kansrekenen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Kansrekenen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Kansrekenen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Kansrekenen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Kansrekenen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "1/Data en onzekerheid/Kansrekenen"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
