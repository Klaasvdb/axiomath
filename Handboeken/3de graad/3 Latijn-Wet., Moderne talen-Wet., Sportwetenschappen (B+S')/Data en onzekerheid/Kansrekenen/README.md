# Kansrekenen: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 35, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Kansrekenen/](<../../../cursussen/Kansrekenen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S', III-WisS'-d (versie oktober 2024), rubriek Data en onzekerheid, deelrubriek Kansrekenen: één doel, LPD 35 (kansen met kruistabellen, boomdiagrammen en de wet van Laplace, met het verband tussen relatieve frequentie en kans). Het doel en zijn wenken en extra's zijn woord voor woord die van LPD 17 uit het leerplan Basis: eenvoudige berekeningen zonder combinaties of variaties, een simulatie met ICT voor de wet van de grote aantallen, voorwaardelijke en marginale kansen uit kruistabellen en boomdiagrammen zonder de kanswetten (totale kans, Bayes) als theorie, en als extra venn- en roosterdiagrammen. Het overzicht van de leerplannen noemt de binomiale verdeling en telproblemen alleen bij B+S''. In B+S' hoort bewijsvoering bij het doel (LPD 4, met rekenregels als voorbeeld): pakket 3 houdt daarom de bewijzen van de rekenregels uit hoofdstuk 1, ook dat van de algemene somregel, en de twee bewijsopdrachten daarover. De kanswetten van hoofdstuk 2 (definitie met formule, onafhankelijkheid als stelling, totale kans, Bayes) volgen de wenk en dus pakket 1. Het leerplan geeft geen lestijden per rubriek (het hele leerplan is gericht op 8 graaduren).

**Afgestemd op B+S'** (24 nov 2026). De versie kwam van pakket 4 (PR #4). Pakket 3 volgt nu de versie van pakket 1 (PR #48) met de bewijzen van hoofdstuk 1 erbij: in de bron zijn de blokken `\alleenvoor{1}` uitgebreid tot `{1,2,3}` en de blokken `{2,3,4}` beperkt tot `{4}` (het bewijs van de algemene somregel en de opdrachten h1-o12 en h1-o25 tot `{3,4}`). `handboek.tex` kiest alleen de hoofdstukken 1 en 2. Pakket 1 en 4 zijn ongewijzigd.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Kans | `hoofdstukken/01-kans.tex` | LPD 35 | afgestemd, nog na te lezen |
| 2. Voorwaardelijke kans | `hoofdstukken/02-voorwaardelijke-kans.tex` | LPD 35 | afgestemd, nog na te lezen |

## Verschillen met pakket 4

| Waar | In pakket 3 | Reden |
|---|---|---|
| Hoofdstukken 3 en 4 | weg (niet in `handboek.tex`) | niet in LPD 35; toevalsvariabelen en de binomiale verdeling staan alleen in het leerplan B+S'' |
| 1, Tellen met combinaties | weg, met korte oefening `h1-combinaties` en voorbeeld | wenk bij LPD 35: geen combinaties of variaties |
| 1, Simuleren met een rekenblad | nieuw: werkwijze (ASELECTTUSSEN, AANTAL.ALS), korte oefening `h1-simulatie` | wenk bij LPD 35: wet van de grote aantallen met een simulatie (ICT) |
| 1, algemene somregel | blijft met bewijs, zoals in pakket 4; ook de opdrachten `h1-o12` (somregel voor drie gebeurtenissen) en `h1-o25` (grenzen voor P(A en B)) blijven | bewijsvoering hoort in B+S' bij het doel (LPD 4) |
| 1, korte oefeningen | `h1-start-1` en `h1-minstens` zonder combinaties (de versie van pakket 1) | geen combinaties |
| 1, opdrachten | weg: o4, o5, o6, o9, o11, o18 (tellen met rangschikkingen of combinaties). `h1-o23` c zonder combinaties. Nieuw: `h1-o28` (simulatie met twee dobbelstenen), `h1-o29` (sterftetafel) | geen combinaties; wenk: kans schatten met relatieve frequenties (kans op overlijden) |
| 1, Test jezelf | vraag 4 over de wet van de grote aantallen (roulette) in plaats van combinaties | geen combinaties |
| 2, voorwaardelijke kans | als deel van een rij of kolom van een kruistabel, niet als formule P(A en B) / P(B) met afleiding | wenk bij LPD 35: zonder theoretische insteek van kanswetten |
| 2, Rekenen met de definitie | vervangen door Een kruistabel opstellen (van percentages naar aantallen), korte oefening `h2-percentages` | idem; bereidt de medische test voor |
| 2, productregel | zonder bewijs, met een verklaring in woorden | volgt uit de vorige rij (er is geen formule om uit af te leiden) |
| 2, onafhankelijkheid | definitie P(A \| B) = P(A), zonder stelling en bewijs; voorbeeld met het rooster via P(B \| A); Onafhankelijk of onverenigbaar? weg; extra korte oefening `h2-herhaling` (met ICT) | wenk: zonder kanswetten als theorie |
| 2, totale kans en Bayes | als werkwijze in het boomdiagram (kader in woorden), zonder formule met symbolen en zonder bewijs; de namen blijven | wenk bij LPD 35: totale kans en Bayes uitdrukkelijk niet als theorie |
| 2, oefeningen | versie van pakket 1 van `h2-onafhankelijk` (a met een kruistabel), `h2-product` (zonder verwijzing naar combinaties), `h2-o18` (zonder a); weg: `h2-formule`, `h2-onverenigbaar`, o7, o12, o15, o25 | formules zonder context, bewijzen met de formules van de kanswetten |
| 2, Test jezelf | vraag 3 met een kruistabel; vraag 7 (onafhankelijk en onverenigbaar) weg | idem |
| Leerkrachtennota's | de nota's van pakket 1, met de naam en het LPD-nummer van dit pakket, en dat de rekenregels bewezen worden (LPD 4) | het leerplan; de oude nota "kijk na of het leerplan meer telwerk vraagt" is beantwoord (nee) |

Aantallen in pakket 3 (voorbeelden, start, korte oefeningen, opdrachten, Koppel, testvragen), voor en na: hoofdstuk 1: 12, 2, 14, 27, 1, 7 werd 11, 2, 14, 23, 1, 7; hoofdstuk 2: 11, 2, 11, 26, 1, 7 werd 10, 2, 11, 22, 1, 6; hoofdstuk 3 (9, 2, 9, 26, 2, 6) en hoofdstuk 4 (8, 2, 9, 25, 1, 6) vallen weg. Het handboek telt 38 pagina's (was 71).

## Wat Kansrekenen veronderstelt van Telproblemen

Niets meer. Vóór de afstemming gebruikten hoofdstuk 1 (Tellen met combinaties, `nCr` op het rekentoestel, en de opdrachten o4, o5, o6, o9, o11, o18 en testvraag 4) en hoofdstuk 4 (de formule van de binomiale verdeling met $\binom{n}{k}$, het binomium van Newton in een Koppel-oefening) combinaties; die vallen nu weg. De Koppel-oefeningen met combinaties en variaties (`h1-koppel-2`, `h2-koppel-1`) waren al alleen voor pakket 4. Telproblemen in pakket 3 is alleen voor GO! (zie `koepels.yaml`); KOV vraagt het niet.

## Na te kijken

- **Statistiek (pakket 3)** steunt op wat hier wegvalt: hoofdstuk 3 (hypothesetoetsen, LPD 40) rekent in pakket 2-4 met de binomiale verdeling ($B(n, p)$, `binomcdf`) en de verwachtingswaarde, en de Koppel-oefeningen `h1-koppel-1` (Statistiek hoofdstuk 1) en `h2-koppel-2` (hoofdstuk 2) gebruiken de binomiale verdeling. Af te stemmen met Statistiek, bv. zoals in pakket 1 (zonder kansrekenen buiten het leerplan, met simulaties voor de steekproevenverdeling).
- **Koepels.** GO! en POV gebruiken ook pakket 3. GO! noemt voor de richtingen met wetenschappen (WD 06.04) uitdrukkelijk Bayes en de binomiale verdeling. In `Handboeken/koepels.yaml` zou bij GO! (pakket 3) "4/Data en onzekerheid/Kansrekenen, hoofdstuk 3 en 4" als extra kunnen (en voor Bayes met formule hoofdstuk 2 van pakket 4). Een school die de hoofdstukken toch wil, kan ze ook terugzetten in `handboek.tex`; de leerplanverwijzing daar noemt LPD 35, maar de inhoud is die van pakket 4.
- **Rekenregels**: LPD 35 noemt ze niet, maar zonder complementregel en somregel kun je weinig kansen bepalen. Ze blijven, met een bewijs voor het geval van Laplace (pakket 3: met het bewijs van de algemene somregel).
- **Bewijzen in hoofdstuk 2.** Pakket 3 volgt in hoofdstuk 2 de wenk (geen kanswetten als theorie) en dus pakket 1: de afleiding van P(A | B) = P(A en B) / P(B), het bewijs van de productregel, de stelling over onafhankelijkheid en de bewijzen van de totale kans en Bayes vallen weg. Wie in B+S' meer bewijsvoering wil (LPD 4), kan ze uit pakket 4 nemen; dan zijn ook de opdrachten h2-o12 en h2-o25 (bewijzen) weer zinvol.
- **Onafhankelijkheid** staat niet in LPD 35, maar is nodig voor herhaalde experimenten in een boomdiagram. Ze blijft informeel, met opgaven in kruistabellen.
- **Moeilijke opdrachten** die blijven: `h1-o10` (drie dobbelstenen), `h2-o9` (drie deuren), `h2-o11`, `h2-o20` (eenheidsvierkant), `h2-o26` (valse munt).
- **Rekenblad**: de functienamen zijn die van een Nederlandstalige Excel (ASELECTTUSSEN, AANTAL.ALS, met puntkomma's).
- **Sterftetafel** (`h1-o29`): vereenvoudigde cijfers, niet uit een echte tafel.
- De bestanden `gen/03-*.tex` en `gen/04-*.tex` van vroegere bouwbeurten blijven in `gen/` staan; ze worden niet meer gebruikt.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Kansrekenen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Kansrekenen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Kansrekenen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Kansrekenen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Kansrekenen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Data en onzekerheid/Kansrekenen"
```

## Controle

De wiskunde is dezelfde als in pakket 1 en 4 en daar nagerekend (SymPy, NumPy); er zijn geen nieuwe opgaven. Na het afstemmen gebouwd zonder ongedefinieerde verwijzingen, zonder ?? in de PDF's en zonder overvolle regels; de `gen/`-bestanden van pakket 1 en 4 zijn ongewijzigd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
