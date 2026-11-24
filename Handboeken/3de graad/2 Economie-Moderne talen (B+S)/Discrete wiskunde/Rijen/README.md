# Rijen: handboek (pakket 2)

Cursus voor pakket 2 (B+S), LPD 28, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Rijen/](<../../../cursussen/Rijen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S, III-WisS-d (versie oktober 2024), rubriek Discrete wiskunde: rijen, één doel, LPD 28 (rekenkundige en meetkundige rijen om patronen te beschrijven, met recursief en expliciet voorschrift en de formule voor de som van de eerste $n$ termen). Het doel en zijn twee wenken (enkelvoudige en samengestelde intrest als context; rijen als discrete functies, met de link naar eerstegraadsfuncties en exponentiële functies en de grafiek met losse punten) zijn woord voor woord die van LPD 16 uit het leerplan Basis. Er is geen keuzedoel over rijen, en het leerplan vraagt geen financiële toepassingen buiten de intrest (geen annuïteiten of leningen). Het bewijs van de somformules is in B+S een extra (LPD 4), zoals in Basis. Wel verwant: de wenk bij LPD 10 (meetkundige rijen als discreet model voor exponentiële groei), de wenk bij LPD 9 (het voorschrift van een exponentiële functie opstellen uit de grafiek) en LPD 22 (de bepaalde integraal als limiet van een som). Hoofdstuk 4 (limiet van een rij) staat niet in `handboek.tex`: limieten van rijen staan alleen in B+S''. Het leerplan geeft geen lestijden per rubriek (het hele leerplan is gericht op 7 graaduren).

**Afgestemd op B+S** (24 nov 2026). De versie kwam van pakket 4 en was op 18 nov (PR #48) al ingekort, toen zonder leerplantekst. Nu het doel dat van Basis blijkt te zijn, volgt pakket 2 voor de leerstof de versie van pakket 1, met drie uitzonderingen: de meetkundige rij uit twee termen (LPD 9), het somteken (Integralen) en sparen met vaste stortingen en de lening (context voor de economische richtingen) blijven. In de bron zijn de betrokken blokken `\alleenvoor{2,3,4}` beperkt tot `{4}` (of `{3,4}` voor de bewijzen). Pakket 1 en 4 zijn ongewijzigd.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rijen: begrippen | `hoofdstukken/01-rijen-begrippen.tex` | LPD 28 | afgestemd, nog na te lezen |
| 2. Rekenkundige en meetkundige rijen | `hoofdstukken/02-rekenkundige-en-meetkundige-rijen.tex` | LPD 28 | afgestemd, nog na te lezen |
| 3. Somformules | `hoofdstukken/03-somformules.tex` | LPD 28 | afgestemd, nog na te lezen |

## Verschillen met pakket 4

| Waar | In pakket 2 | Reden |
|---|---|---|
| Hoofdstuk 4 | weg (niet in `handboek.tex`) | limieten: alleen B+S'' |
| 1, Expliciet of recursief? | het omzetten van een expliciet naar een recursief voorschrift weg (voorbeeld, korte oefening `h1-k9`, opdracht `h1-omzet`, testvraag `h1-t7`), zoals in pakket 1 | LPD 28 vraagt beide voorschriften, niet het omrekenen met algebra |
| 1, opdrachten | 24 van 35. Weg sinds PR #48: `h1-o6`, `h1-o8`, `h1-o10`, `h1-o15`, `h1-o16`, `h1-o17`, `h1-o20`, `h1-o21`, `h1-o22`; nu ook `h1-omzet` en `h1-o18` (bewijs) | lestijden; bewijzen zijn een extra (LPD 4) |
| 1, Koppel | `h1-koppel-sin` (de sinus, de oefening van pakket 1) in plaats van `h1-koppel-2` (de cosinus) | de cosinus is in B+S alleen een extra (LPD 13-14), zoals in de cursus Goniometrische functies van dit pakket |
| 2, Rekenkundig midden, Meetkundig midden | weg, met `h2-k4`, `h2-k9`, `h2-o5`, `h2-o9`, `h2-o24`, `h2-o34` | niet in LPD 28 |
| 2, meetkundige rij uit twee termen | blijft (anders dan in pakket 1), met `h2-k8`, `h2-mtwee`, `h2-o21` en testvraag `h2-t5` | hoort bij het voorschrift opstellen; sluit aan bij de wenk bij LPD 9 (voorschrift van een exponentiële functie uit de grafiek) |
| 2, opdrachten | 35 van 64. Weg sinds PR #48: `h2-herken`, `h2-o4`, `h2-o7`, `h2-o11`-`h2-o14`, `h2-o16`, `h2-o17`, `h2-o20`, `h2-o22`, `h2-o32`, `h2-o33`, `h2-o36`, `h2-o37`, `h2-o39`, `h2-o43`-`h2-o46`, `h2-o50`, `h2-o51`, `h2-o53`; nu ook de vier over het midden en `h2-o52`, `h2-o54` (bewijzen) | lestijden; LPD 28; bewijzen zijn een extra |
| 3, Het somteken | Lezen en berekenen blijft (met `h3-k6`, `h3-sigma`, `h3-noteer`, `h3-somindex`, testvragen `h3-t4`, `h3-t5`); De som als rij ($u_n = s_n - s_{n-1}$) weg, met `h3-k7`, `h3-uitsom`, `h3-o18` en testvraag `h3-t7` | het somteken staat niet in LPD 28, maar Integralen schrijft de bepaalde integraal als limiet van een som met $\Sigma$ (LPD 22); de termen uit de sommen halen vraagt niets |
| 3, bewijzen van de somformules | blijven als uitleg; de nota voor de leerkracht zegt nu dat navertellen in B+S een extra is (zoals in pakket 1) | LPD 4 (extra) |
| 3, sparen en lening | blijven: Sparen met vaste stortingen, `h3-sparen`, testvraag `h3-t9` en de lening `h3-o21` (alleen pakket 2) | context voor de economische richtingen; het leerplan noemt alleen intrest |
| 3, opdrachten | 26 van 34. Weg sinds PR #48: `h3-o4`, `h3-o5`, `h3-o9`, `h3-o13`, `h3-o19` (de slak, een limiet), `h3-o23`; nu ook `h3-uitsom` en `h3-o18` | lestijden; De som als rij valt weg |
| Leerkrachtennota's | hoofdstuk 1-3: wat wegvalt en waarom, met LPD 28 | |
| Voorkant | eigen motief `rijen-trappen` (sinds PR #48) | geen limieten in dit pakket |

De LPD-nummers in de leerkrachtennota's (LPD 28) klopten al.

Aantallen in pakket 2 (voorbeelden, start, korte oefeningen, opdrachten, Koppel, testvragen), voor en na; bij start zijn de Verken-opgaven in de leerstof meegeteld: hoofdstuk 1: 11, 2, 10, 26, 3, 9 werd 10, 2, 9, 24, 3, 8; hoofdstuk 2: 13, 3, 11, 41, 5, 9 werd 11, 3, 9, 35, 5, 9; hoofdstuk 3: 10, 3, 8, 28, 3, 9 werd 9, 3, 7, 26, 3, 8. Het handboek telt 47 pagina's (was 52).

## Na te kijken

- **Lestijden.** Het leerplan geeft er geen. Pakket 2 houdt meer dan pakket 1 (de meetkundige rij uit twee termen, het somteken, meer opdrachten); B+S is gericht op 7 graaduren (ongeveer 175 lestijden per graad, tegenover 125 in Basis), maar heeft ook meer doelen. Wie minder tijd heeft, laat het somteken weg (dan moet Integralen het zelf invoeren) of volgt pakket 1.
- **Somteken en Integralen.** Volgens de README van het pakket komt Rijen na Analyse 3, dus na Integralen. Integralen hoofdstuk 1 gebruikt $\Sigma$ en de rekenregels zonder ze uit te leggen. Ofwel voert Integralen het somteken zelf in (dan kan het hier weg), ofwel komt dit deel van Rijen eerst. Af te stemmen met Integralen.
- **Meetkundige rij uit twee termen** blijft, anders dan in pakket 1. Met een even aantal sprongen geeft ze twee oplossingen; schrappen kan zoals in pakket 1 (`\alleenvoor` rond de subsectie en `h2-k8`, `h2-mtwee`, `h2-o21`, `h2-t5`).
- **Sparen met vaste stortingen en de lening** (`h3-o21`, niveau 3) gaan verder dan de wenk (alleen intrest). Ze blijven als context voor Economie-Moderne talen en de andere economische richtingen.
- **Bewijzen.** De bewijzen in de leerstof blijven als verklaring (zoals in pakket 1); de bewijsopdrachten `h1-o18`, `h2-o52`, `h2-o54` vallen weg. Wie ze als extra wil, vindt ze in pakket 3 of 4.
- **Halflege pagina's** door de opmaak (elke sectie op een nieuwe pagina): na Expliciet of recursief? (p. 10), na de meetkundige rijen (p. 26) en na Het somteken (p. 41).

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rijen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rijen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rijen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rijen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rijen-zelfstudie.pdf)

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "2/Discrete wiskunde/Rijen"
```

## Nog te doen

- Nalezen door andere leerkrachten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
