# Integralen: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Integralen/](<../../../cursussen/Integralen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)) of in `pakketten:` in de YAML. Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S', III-WisS'-d (versie oktober 2024), rubriek Analyse, deelrubriek Integralen: LPD 23 (de bepaalde integraal als limiet van een som en als georiënteerde oppervlakte; contexten afstand, snelheid, arbeid en energie, samenhang met arbeid als omzetting van energie; extra: volume van een omwentelingslichaam en booglengte aangeven, eventueel met ICT), LPD 24 (verband met primitieve functies; wenk en extra met het trapezium bij een eerstegraadsfunctie) en LPD 25 (bepaalde en onbepaalde integralen van functies met onmiddellijke integratie, splitsing en eenvoudige substitutie; wenken: ICT, niet elke integraal heeft een primitieve, substitutie $ax + b$; extra: partiële integratie). Verder LPD 4 (bewijsvoering is een doel). De functies zijn die van Afgeleiden (LPD 21): veelterm-, rationale, exponentiële, logaritmische functies, sinus en cosinus; de tangensfunctie, de cyclometrische functies en de formules van Carnot staan niet in B+S'. Het leerplan geeft geen lestijden per rubriek.

**Afgestemd op B+S'** (24 nov 2026). De vier hoofdstukken blijven, met de bewijzen. Pakket 1 en 4 zijn ongewijzigd; de tekst van pakket 4 is niet veranderd.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. De bepaalde integraal | `hoofdstukken/01-bepaalde-integraal.tex` | LPD 23 | afgestemd op B+S', nog na te lezen |
| 2. Hoofdstelling en primitieve functies | `hoofdstukken/02-hoofdstelling.tex` | LPD 24, 25 | afgestemd op B+S', nog na te lezen |
| 3. Integratiemethoden | `hoofdstukken/03-integratiemethoden.tex` | LPD 25 en zijn extra | afgestemd op B+S', nog na te lezen |
| 4. Toepassingen van integralen | `hoofdstukken/04-toepassingen.tex` | wenken en extra bij LPD 23, LPD 25 | afgestemd op B+S', nog na te lezen |

## Verschillen met pakket 4

| Waar | In pakket 3 | Reden |
|---|---|---|
| 1, middelwaardestelling | bewijs blijft, maar zonder de tussenwaardestelling: een continue functie springt niet, zoals de boot | Limieten en continuïteit valt in Afgeleiden van pakket 3 weg |
| 1, insluitstelling en continuïteit | in woorden | idem |
| 2, basisprimitieven | zonder $\frac{1}{\cos^2 x}$, $\frac{1}{\sin^2 x}$, $\frac{1}{1 + x^2}$, $\frac{1}{\sqrt{1 - x^2}}$ en de uitleg over $\bgcos$; eigen versie van `vb:h2-basis` (met $\e^x$ in plaats van $\bgtan$) en `vb:h2-tabel` | geen tangensfunctie en geen cyclometrische functies |
| 2, "Wanneer mag het niet?" | zonder de verwijzing naar oneigenlijke integralen | niet in het leerplan |
| 2, oefeningen | eigen versie: `h2-start-1`, `h2-basis`, `h2-dp`, `h2-d2`, `h2-d3`; weg: `h2-o27` (stelling van Lagrange) | idem; Lagrange staat niet in B+S' |
| 3, splitsing | voorbeeld $\tan^2 x$ weg | geen tangensfunctie |
| 3, standaardvormen | zonder de vormen met $\bgtan$ en $\bgsin$; eigen versie van `vb:h3-vormen`, `vb:h3-vormenkort` en de korte oefening na `vb:h3-vormen` | idem |
| 3, eerst omvormen | $\sin^2 x$ en $\cos^2 x$ met de verdubbelingsformule voor de cosinus in plaats van de formules van Carnot | geen Carnot in B+S'; de verdubbelingsformules blijven in Goniometrische functies |
| 3, twee keer substitueren | weg, met `h3-dubbel` | LPD 25: eenvoudige substitutie |
| 3, partiële integratie | blijft, met het probleem (geneesmiddel) | extra bij LPD 25 |
| 3, oefeningen | eigen versie zonder $\tan$, $\bgtan$, $\bgsin$: `h3-vormen`, `h3-partieel`, `h3-keuze`, `h3-d1`, `h3-d2`, `h3-d4`, `h3-d5`, `h3-o14`, `h3-d6`, `h3-t3`; weg: `h3-weierstrass`, `h3-hyperbolisch` | idem |
| 3, Koppel Matrices (`h3-koppel-2`) | stelsel oplossen door rijherleiding in plaats van met de inverse matrix | Matrices van pakket 3 heeft geen inverse |
| 4, booglengte | bewijs weg (steunt op de stelling van Lagrange), het idee in woorden | Lagrange staat niet in B+S' |
| 4, oneigenlijke integralen | weg, met `h4-oneindig`, `h4-o7`, `h4-o19`, `h4-o21`, `h4-o23`, `h4-o24`, `h4-machten`, `h4-o26`, `h4-t8` | niet in het leerplan |
| 4, Start | limieten op oneindig vervangen door de lengte van een lijnstuk | idem |
| 4, Koppel | Statistiek met een veeltermdichtheid (versie voor pakket 2 en 3), Rijen (`h4-koppel-4`) blijft | de oefeningen van pakket 4 vragen oneigenlijke integralen |
| Leerkrachtennota's | eigen versie per hoofdstuk met de LPD-nummers van III-WisS'-d | |

Aantallen in pakket 3 (pakket 4 tussen haakjes):

| Hoofdstuk | Voorbeelden | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|---|
| 1. De bepaalde integraal | 17 (17) | 8 (8) | 31 (31) | 3 (3) | 8 (8) |
| 2. Hoofdstelling en primitieve functies | 12 (12) | 7 (7) | 25 (26) | 4 (4) | 6 (6) |
| 3. Integratiemethoden | 18 (21) | 10 (11) | 17 (19) | 4 (4) | 7 (7) |
| 4. Toepassingen van integralen | 12 (17) | 7 (8) | 19 (26) | 2 (4) | 7 (8) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken). Het handboek telt 81 pagina's (was 86), de leerkrachtenversie 86 (was 94) en de zelfstudieversie 93 (was 98).

## Na te kijken

- **Substitutie.** Het leerplan zegt *eenvoudige substitutie* en noemt in de wenk $u = ax + b$. Dit pakket houdt de substitutieregel met de afgeleide van de binnenste functie als factor ($x\cos(x^2)$, $\frac{g'}{g}$); alleen twee keer na elkaar substitueren valt weg. Te bekijken of het nog eenvoudiger moet.
- **Partiële integratie** is een extra, maar blijft volledig (met "rond in een cirkel" en het probleem van het geneesmiddel). Ze kan weg als er geen tijd is; dan moet het probleem van hoofdstuk 3 een ander worden.
- **Bewijzen zonder continuïteit.** De middelwaardestelling en de hoofdstelling worden bewezen, maar steunen op het bestaan van een minimum en maximum en op "een continue functie springt niet": in dit pakket informeel.
- **$\sin^2 x$ zonder Carnot.** De formule $\sin^2 x = \frac{1 - \cos 2x}{2}$ wordt in de tekst afgeleid uit de verdubbelingsformule; de opgaven met even machten van sinus en cosinus blijven.
- **Volume en booglengte** zijn een extra (aangeven); ze worden exact uitgerekend zoals in pakket 4.
- **`h3-koppel-3`** (substitutie $x = r\sin t$, n3) en **`h3-o20`** (infuus "heel lang", een limiet zonder het woord oneigenlijk) blijven als uitdaging.
- **Hoofdstuk 4 heeft maar twee Koppel-oefeningen.**
- Nog niet nagelezen door een leerkracht.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Integralen-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Analyse/Integralen"
```

## Controle

De gedeelde wiskunde is nagerekend in de bronversie (SymPy, NumPy); de nieuwe en gewijzigde opgaven, voorbeelden en antwoorden voor dit pakket zijn nagerekend met SymPy (primitieven door af te leiden, booglengtes numeriek). Na het afstemmen gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek en in de oplossingen; pakket 1 en 4 geven dezelfde `gen/`-bestanden als voor de aanpassing (Integralen staat niet in pakket 1). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
