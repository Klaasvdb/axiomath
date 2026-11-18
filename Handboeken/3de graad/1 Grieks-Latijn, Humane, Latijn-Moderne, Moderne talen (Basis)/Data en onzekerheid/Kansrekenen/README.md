# Kansrekenen: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 17, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Kansrekenen/](<../../../cursussen/Kansrekenen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan Basis** (III-Wis-d, oktober 2024). Basis heeft voor kansrekenen één doel, LPD 17: kansen met kruistabellen, boomdiagrammen en de wet van Laplace, met het verband tussen relatieve frequentie en kans. De wenken vragen eenvoudige berekeningen (zonder combinaties of variaties), een simulatie met ICT voor de wet van de grote aantallen, en voorwaardelijke en marginale kansen uit kruistabellen en boomdiagrammen zonder de kanswetten (totale kans, Bayes) als theorie. Het leerplan noemt geen aantal lestijden voor dit doel. Daarom kiest `handboek.tex` alleen de hoofdstukken 1 en 2: toevalsvariabelen en de binomiale verdeling vallen buiten Basis (de binomiale verdeling staat alleen in het leerplan B+S''). De bron in [cursussen/Kansrekenen/](<../../../cursussen/Kansrekenen/>) houdt ze voor de andere pakketten.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Kans | `hoofdstukken/01-kans.tex` | LPD 17 | afgestemd op Basis, nog na te lezen |
| 2. Voorwaardelijke kans | `hoofdstukken/02-voorwaardelijke-kans.tex` | LPD 17 | afgestemd op Basis, nog na te lezen |

## Verschillen met pakket 4

Alles staat in de gedeelde bron met `\alleenvoor` of `pakketten:` in de YAML; pakket 2, 3 en 4 zijn niet veranderd.

| Waar | In pakket 1 | Reden |
|---|---|---|
| Hoofdstukken 3 en 4 | weg (niet in `handboek.tex`) | niet in LPD 17; binomiale verdeling alleen B+S'' |
| 1, Tellen met combinaties | weg, met korte oefening en voorbeeld | wenk LPD 17: geen combinaties of variaties |
| 1, Simuleren met een rekenblad | nieuw: werkwijze (ASELECTTUSSEN, AANTAL.ALS), korte oefening `h1-simulatie` | wenk LPD 17: wet van de grote aantallen met een simulatie (ICT) |
| 1, algemene somregel | zonder bewijs (het venndiagram verklaart de regel) | minder formalisme |
| 1, korte oefeningen | `h1-start-1` en `h1-minstens` zonder combinaties (eigen versie) | geen combinaties |
| 1, opdrachten | weg: o4, o5, o6, o9, o11, o18 (tellen met rangschikkingen of combinaties), o12, o25 (bewijzen). `h1-o23` c zonder combinaties. Nieuw: `h1-o28` (simulatie met twee dobbelstenen), `h1-o29` (sterftetafel) | geen combinaties; wenk: kans schatten met relatieve frequenties (kans op overlijden) |
| 1, Test jezelf | vraag 4 over de wet van de grote aantallen (roulette) in plaats van combinaties | geen combinaties |
| 2, voorwaardelijke kans | als deel van een rij of kolom van een kruistabel, niet als formule P(A en B) / P(B) met afleiding | wenk: zonder de kanswetten als theorie |
| 2, Rekenen met de definitie | vervangen door Een kruistabel opstellen (van percentages naar aantallen), korte oefening `h2-percentages` | idem; bereidt de medische test voor |
| 2, productregel | zonder bewijs, met een verklaring in woorden | minder formalisme |
| 2, onafhankelijkheid | definitie P(A | B) = P(A), zonder stelling en bewijs; voorbeeld met het rooster via P(B | A); Onafhankelijk of onverenigbaar? weg; extra korte oefening `h2-herhaling` (met ICT) | minder formalisme |
| 2, totale kans en Bayes | als werkwijze in het boomdiagram (kader in woorden), zonder formule met symbolen en zonder bewijs; de namen blijven | wenk: totale kans en Bayes niet als theorie |
| 2, oefeningen | eigen versie van `h2-onafhankelijk` (a met een kruistabel), `h2-product` (zonder verwijzing naar combinaties), `h2-o18` (zonder a); weg: `h2-formule`, `h2-onverenigbaar`, o7, o12, o15, o25 | formules zonder context, bewijzen |
| 2, Test jezelf | vraag 3 met een kruistabel; vraag 7 (onafhankelijk en onverenigbaar) weg | idem |

Aantallen in pakket 1 (pakket 4 tussen haakjes): hoofdstuk 1 heeft 11 (12) voorbeelden, 14 (14) korte oefeningen, 21 (27) opdrachten, 1 (2) Koppel en 7 (7) testvragen; hoofdstuk 2 heeft 10 (11) voorbeelden, 11 (11) korte oefeningen, 22 (26) opdrachten, 1 (2) Koppel en 6 (7) testvragen. Het handboek telt 38 pagina's (was 71 met vier hoofdstukken).

## Na te kijken

- **Statistiek (pakket 1)** verwijst naar wat hier wegvalt: Koppel-oefeningen met de binomiale verdeling en de verwachtingswaarde (Statistiek hoofdstuk 1, 2 en 4), en hoofdstuk 3 (hypothesetoetsen) rekent met $B(n, p)$. Af te stemmen met de aanpassing van Statistiek.
- **Rekenregels**: LPD 17 noemt ze niet, maar zonder complementregel en somregel kun je weinig kansen bepalen. Ze blijven, met het bewijs door tellen voor de grenzen, de somregel en de complementregel. Ook de opgaven met alleen $P(A)$, $P(B)$ en $P(A \cap B)$ (`h1-regels` a, `h1-o14`, `h1-o24`, `h1-t7`) blijven, met een venndiagram. Misschien te formeel voor Basis.
- **Onafhankelijkheid** staat niet in LPD 17, maar is nodig voor herhaalde experimenten in een boomdiagram. Ze blijft informeel, met opgaven in kruistabellen (`h2-o6`, `h2-o19`, `h2-o23`).
- **Totale kans en Bayes**: de namen en een kader in woorden blijven, omdat de uitwerkingen ernaar verwijzen. Na te kijken of dat al te theoretisch is voor de wenk.
- **Moeilijke opdrachten** die blijven: `h1-o10` (drie dobbelstenen, tellen met volgordes), `h2-o9` (drie deuren), `h2-o11`, `h2-o20` (eenheidsvierkant), `h2-o26` (valse munt). Misschien schrappen voor Basis.
- **Rekenblad**: de functienamen zijn die van een Nederlandstalige Excel (ASELECTTUSSEN, AANTAL.ALS, ALS, ASELECT, met puntkomma's). In andere programma's of talen verschillen ze.
- **Sterftetafel** (`h1-o29`): vereenvoudigde cijfers, niet uit een echte tafel. Eventueel vervangen door cijfers van Statbel.
- **Bestaand, ook in pakket 2-4**: in hoofdstuk 1 staat op pagina 7 alleen één korte oefening (de volgende kop springt naar de volgende pagina).

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

De wiskunde is dezelfde als in de bronversie en daar nagerekend (SymPy, NumPy); de nieuwe opgaven voor pakket 1 zijn met de hand en in Python nagerekend. Na het afstemmen op Basis gebouwd zonder ongedefinieerde verwijzingen en zonder ?? in de PDF's; de `gen/`-bestanden van pakket 2, 3 en 4 zijn ongewijzigd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
