# Statistiek: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 18-21 en K5, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Afgeleide versie.** Afgeleid van de versie voor pakket 2 (PR #33), die via pakket 3 van pakket 4 (PR #5) komt: dezelfde vier hoofdstukken. LPD-nummers omgerekend (30-33 naar 18-21); hoofdstuk 3 (hypothesetoetsen) is voorlopig aan keuzedoel K5 gekoppeld en hoofdstuk 4 (betrouwbaarheidsintervallen) aan een keuzedoel van pakket 4: beide na te kijken. Voor het Basispakket (125 lestijden) is dit waarschijnlijk te veel: kies hoofdstukken en opdrachten na vergelijking met de leerplantekst. Aangepast: de leerplanverwijzingen in de leerkrachtennota's, de voorkant, en de Koppel-opdrachten (die naar cursussen buiten dit pakket zijn geschrapt). Nog te doen: de inhoud inkorten of aanvullen tot de doelen van dit pakket, na vergelijking met de leerplantekst; de verdeling over de afzonderlijke doelen is niet nagekeken.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Steekproeven en samenhang | `hoofdstukken/01-steekproeven.tex` | LPD 18-21 en K5 | eerste versie, nog na te lezen |
| 2. De normale verdeling | `hoofdstukken/02-normale-verdeling.tex` | LPD 18-21 en K5 | eerste versie, nog na te lezen |
| 3. Hypothesetoetsen | `hoofdstukken/03-hypothesetoetsen.tex` | LPD 18-21 en K5 | eerste versie, nog na te lezen |
| 4. Betrouwbaarheidsintervallen | `hoofdstukken/04-betrouwbaarheidsintervallen.tex` | LPD 18-21 en K5 | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Statistiek-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "1/Data en onzekerheid/Statistiek"
```

## Controle

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy). Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
