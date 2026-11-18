# Rijen: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 16, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De herkomst van de prenten staat in `afbeeldingen/prenten/README.md`.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Rijen/](<../../../cursussen/Rijen/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op het leerplan Basis** (III-Wis-d, oktober 2024). Basis heeft voor rijen één doel, LPD 16: rekenkundige en meetkundige rijen gebruiken om patronen te beschrijven, met een recursief en een expliciet voorschrift en de formule voor de som van de eerste $n$ termen. De wenken noemen enkelvoudige en samengestelde intrest als context, en rijen als discrete functies, met de link naar eerstegraadsfuncties en exponentiële functies en de grafiek met losse punten. Het bewijs van de somformules is in Basis een extra (bij LPD 4). Hoofdstuk 4 (limiet van een rij) staat niet in `handboek.tex`: limieten zijn LPD 45-46 van B+S''.

**Lestijden.** Het leerplan noemt geen lestijden per doel. Pakket 1 heeft 125 lestijden per graad voor acht cursussen (LPD 5-21 en de keuzedoelen); voor Rijen rekenen we op ongeveer 10 à 12 lestijden, dus 3 à 4 per hoofdstuk. Daarom valt hieronder ook leerstof weg die LPD 16 niet vraagt, en staat er ongeveer de helft minder opdrachten dan in pakket 4.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rijen: begrippen | `hoofdstukken/01-rijen-begrippen.tex` | LPD 16 | afgestemd op Basis, nog na te lezen |
| 2. Rekenkundige en meetkundige rijen | `hoofdstukken/02-rekenkundige-en-meetkundige-rijen.tex` | LPD 16 | afgestemd op Basis, nog na te lezen |
| 3. Somformules | `hoofdstukken/03-somformules.tex` | LPD 16 | afgestemd op Basis, nog na te lezen |

## Verschillen met pakket 4

Alles staat in de gedeelde bron met `\alleenvoor` of `pakketten:` in de YAML; pakket 4 is niet veranderd. Pakket 2 en 3 zijn apart ingekort (zie hun README).

| Waar | In pakket 1 | Reden |
|---|---|---|
| Hoofdstuk 4 | weg (niet in `handboek.tex`) | limieten: LPD 45-46, alleen B+S'' |
| 1, Expliciet of recursief? | het omzetten van een expliciet naar een recursief voorschrift weg (voorbeeld, korte oefening `h1-k9`, opdracht `h1-omzet`, testvraag `h1-t7`); de vergelijking van de twee soorten voorschriften blijft | LPD 16 vraagt beide voorschriften, niet het omrekenen met algebra |
| 1, opdrachten | 24 van 35. Weg: `h1-subst`, `h1-o6`, `h1-o8`, `h1-o10`, `h1-o16` (rekenen met de index, lastige voorschriften, herhaling), `h1-o17`, `h1-o18`, `h1-o20`, `h1-o21`, `h1-o22` (niveau 3, bewijzen) | lestijden, minder formalisme |
| 2, Rekenkundig midden, Meetkundig midden | weg, met `h2-k4`, `h2-k9` en de opdrachten erover | niet in LPD 16 |
| 2, meetkundige rij uit twee termen | weg, met `h2-k8`, `h2-mtwee`, `h2-o21`, `h2-o37` en testvraag `h2-t5`; de rekenkundige rij uit twee termen blijft | lestijden; met een even aantal sprongen geeft het twee oplossingen |
| 2, opdrachten | 33 van 64. Naast de opdrachten bij wat wegviel ook herhalingen weg (`h2-herken`, `h2-o4`, `h2-o7`, `h2-o11`, `h2-o12`, `h2-o13`, `h2-o14`, `h2-o16`, `h2-o17`, `h2-o20`, `h2-o22`, `h2-o32`, `h2-o33`, `h2-o36`, `h2-o39`, `h2-o43`-`h2-o46`) en de bewijzen en puzzels op niveau 3 (`h2-o50`-`h2-o54`). De contexten (intrest, groei, lucifers, bal, medicijn, lonen) blijven | lestijden; meer context |
| 3, Het somteken (met De som als rij) | weg, met `h3-k6`, `h3-k7`, de opdrachten erover en testvragen `h3-t4`, `h3-t5`, `h3-t7` | uitbreiding, niet in LPD 16 |
| 3, bewijzen van de somformules | blijven als uitleg; de nota voor de leerkracht zegt dat navertellen in Basis een extra is | LPD 4 (extra) |
| 3, opdrachten | 21 van 34. Weg: wat over het somteken of de som als rij ging (`h3-sigma`, `h3-noteer`, `h3-o4`, `h3-o5`, `h3-somindex`, `h3-uitsom`, `h3-o13`), `h3-o7`, `h3-o9` (onbekende uit de som), `h3-o18`, `h3-o23` (bewijzen), `h3-o19` (de slak: een limiet), `h3-o21` (lening) | lestijden, geen limieten |
| Koppel | sinus (`h1-koppel-sin`, nieuw voor dit pakket), matrices (keuzedoel), exponentiële functie en logaritmen, vlakke meetkunde, kansrekenen. Niet: rationale functies, cosinus, telproblemen, logica, complexe getallen, integralen | wat in Basis bestaat |
| Voorkant | eigen motief `rijen-trappen` (de trappen uit hoofdstuk 1) in plaats van de termen die naar hun limiet gaan | geen limieten in dit pakket |

Aantallen in pakket 1 (pakket 4 tussen haakjes), met het voorbeeld Terug naar het probleem en de Verken bij de meetkundige rij meegeteld: hoofdstuk 1 heeft 10 (11) voorbeelden, 9 (10) korte oefeningen, 24 (35) opdrachten, 2 (5) Koppel en 8 (9) testvragen; hoofdstuk 2 heeft 10 (13) voorbeelden, 9 (12) korte oefeningen, 33 (64) opdrachten, 5 (6) Koppel en 8 (9) testvragen; hoofdstuk 3 heeft 7 (10) voorbeelden, 7 (9) korte oefeningen, 21 (34) opdrachten, 2 (5) Koppel en 6 (9) testvragen. Het handboek telt 43 pagina's (was 55).

## Na te kijken

- **Lestijden:** de 10 à 12 lestijden zijn een schatting. Wie meer tijd heeft, vindt de weggevallen opdrachten in pakket 4.
- **Sparen met vaste stortingen** blijft, als de enige toepassing van de somformule met samengestelde intrest (de wenk bij LPD 16). Het is wel een uitbreiding: de nota voor de leerkracht zegt dat je het kunt overslaan, met `h3-k8`, `h3-sparen` en testvraag `h3-t9`.
- **Bewijzen:** de somformules worden bewezen (de som twee keer schrijven, $q \cdot s_n - s_n$), ook de voorschriften met sprongen. Ze blijven als verklaring, omdat de Verken-opgaven ernaar toewerken. Misschien te formeel voor Basis.
- **Voorschrift opstellen** in hoofdstuk 1 gebruikt een wisselend teken en breuken ($(-1)^{n+1} \cdot \tfrac{n}{2n+1}$, testvraag `h1-t3`). Abstracter dan LPD 16 vraagt; misschien eenvoudiger maken.
- **Twee begintermen** (de rij van Fibonacci) blijft, als patroon uit de natuur; LPD 16 vraagt het niet.
- **Vierkantsvergelijkingen en logaritmen:** Term of geen term (hoofdstuk 1), het aantal termen uit de som en het probleem van het theater vragen een vierkantsvergelijking (2de graad); de meetkundige rij een logaritme (cursus Exponentiële en logaritmische functies). Komt Rijen eerst in de jaarplanning, dan kan het ook met ICT of door proberen.
- **Bestaand, ook in pakket 2-4:** het schema Fout? Herhaal van hoofdstuk 3 staat alleen op de laatste pagina.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Rijen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Rijen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Rijen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Rijen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Rijen-zelfstudie.pdf)

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "1/Discrete wiskunde/Rijen"
```

## Nog te doen

- Nalezen door andere leerkrachten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
