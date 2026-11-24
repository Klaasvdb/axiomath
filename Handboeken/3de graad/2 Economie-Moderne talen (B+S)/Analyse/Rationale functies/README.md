# Rationale functies: handboek (pakket 2)

Cursus voor pakket 2 (B+S), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Rationale functies/](<../../../cursussen/Rationale functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S, III-WisS-d (versie oktober 2024), rubriek Analyse, deelrubriek Veelterm-, rationale en irrationale functies: LPD 17 (het verband tussen de grafiek en de kenmerken van veeltermfuncties, (elementaire) rationale en (elementaire) irrationale functies) en het keuzedoel K1 (eenvoudige veeltermvergelijkingen algebraïsch oplossen), met LPD 6 (vergelijkingen en ongelijkheden grafisch oplossen met ICT) en de bewijzen als extra bij LPD 4 (in B+S is bewijsvoering alleen een extra). Het leerplan geeft geen lestijden per rubriek (het hele leerplan is gericht op 7 graaduren). Extrema berekenen met afgeleiden is LPD 21 (cursus Afgeleiden); hier worden ze met ICT afgelezen.

**Afgestemd op B+S** (24 nov 2026). De versie kwam van pakket 4 (PR #10, via pakket 3 (PR #17)). Rationale vergelijkingen en ongelijkheden algebraïsch oplossen staat niet in het leerplan: hoofdstuk 3 valt weg (`handboek.tex`). Wat B+S vraagt en pakket 4 niet had, is toegevoegd met `\alleenvoor{2,3}` en `pakketten: [2, 3]`: extrema en bereik met ICT, de kenmerken van homografische functies, de wortelfuncties (de wenk bij LPD 17 noemt homografische functies en $n$-de machtswortelfuncties) en grafisch oplossen met ICT. Pakket 4 is ongewijzigd.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Veeltermfuncties | `hoofdstukken/01-veeltermfuncties.tex` | LPD 17, K1 | afgestemd, na te lezen |
| 2. Rationale functies en wortelfuncties | `hoofdstukken/02-rationale-functies.tex` | LPD 17, LPD 6 | afgestemd, na te lezen |

### Verschil met pakket 4

| Hoofdstuk | Valt weg in pakket 2 | Herschreven of toegevoegd in pakket 2 |
|---|---|---|
| 1 | niets | Onderdeel 1.3.4 "Toppen en bereik aflezen met ICT" (LPD 17: extrema, stijgen en dalen, bereik) met voorbeeld 13, werkwijze en korte oefening h1-k-toppen; testvraag h1-t7; in "Terug naar het probleem" de top van de heuvel en het diepste punt van de tunnel met ICT; opdracht h1-o7 (doos) met een deelvraag over het grootste volume met ICT; de leerplanverwijzing |
| 2 | niets | Titel "Rationale functies en wortelfuncties". Kenmerken van een homografische functie (bereik, stijgen en dalen, met bewijs) en korte oefening h2-k-homo; sectie 2.4 Wortelfuncties ($\sqrt[n]{x}$ als inverse van $x^n$, kenmerken met bewijs, verschoven wortelfuncties, voorbeeld 14, werkwijze, h2-k-wortel); sectie 2.5 Grafisch oplossen met ICT (LPD 6) met de drone uit hoofdstuk 3 als voorbeeld 15, werkwijze en h2-k-ict; opdrachten h2-o28 (slinger), h2-o29 (tuinslangen), h2-o30 (gemiddelde kost), h2-o32 en h2-o33 (wortelfuncties); testvragen h2-t7 en h2-t8; de leerplanverwijzing |
| 3 | het hele hoofdstuk (rationale vergelijkingen en ongelijkheden, algebraïsch): niet in LPD 17 of K1 | De drone-context en het grafisch oplossen komen in sectie 2.5 |

Aantallen in pakket 2 (start, kort, opdrachten, koppel, test), voor en na: hoofdstuk 1: 2, 14, 27, 1, 6 werd 2, 15, 27, 1, 7; hoofdstuk 2: 2, 13, 26, 3, 6 werd 2, 16, 31, 3, 8; hoofdstuk 3: 2, 10, 25, 2, 6 viel weg. Het handboek telt 48 pagina's (was 55).

### Wat blijft, anders dan het leerplan strikt vraagt

- **Bewijzen** (euclidische deling, reststelling, factorstelling, aantal nulwaarden, asymptoten, homografische en wortelfuncties): extra bij LPD 4 (in B+S is bewijsvoering alleen een extra).
- **Euclidische deling en schuine asymptoten**, ook bij een noemer van graad 2: het leerplan spreekt van "(elementaire) rationale functies", met homografische functies als voorbeeld in de wenk.
- **Secties 1.1 en 1.2** (delen, Horner, rest- en factorstelling, gehele nulwaarden) dienen K1, een keuzedoel (zo staat de cursus ook in `koepels.yaml`: "Rationale functies (K1)").

### Na te kijken

- **Hoe ver "(elementaire) rationale functies" gaat.** De perforaties, de schuine asymptoot, het geval "teller van een veel hogere graad" en de zeven stappen voor een willekeurige rationale functie bleven. Volstaan homografische functies, dan kunnen 2.2 (schuine asymptoot, teller van veel hogere graad) en de bijhorende opdrachten weg.
- **Kiest de school K1 niet**, dan vallen in principe secties 1.1 en 1.2 weg, maar hoofdstuk 2 gebruikt het delen (Horner, euclidische deling) voor de asymptoten. Te bekijken of er dan een korte versie nodig is.
- **Hoofdstuk 3 weggelaten.** Rationale vergelijkingen algebraïsch oplossen is geen doel van III-WisS-d; de Toepassingen (contexten) lossen leerlingen nu grafisch op. Een school die ze toch wil, kan `\hoofdstuk{3}{03-vergelijkingen}` terugzetten; de leerplanverwijzing daar is dan nog die van vroeger ("LPD 17 en K1"). `koepels.yaml` hoeft niet te veranderen.
- **Wortelfuncties** zijn nieuw en kort (twee onderdelen, één voorbeeld). De cursus Algemene functies behandelt het domein en de tekentabel van wortels al; nagaan of het geheel niet overlapt.
- **ICT:** de tekst noemt de TI-84 (`maximum`, `minimum`, `intersect` in het menu CALC).
- In de leerkrachtenversie staat het herhaalschema van hoofdstuk 1 alleen op een pagina.
- Nog niet nagelezen door een leerkracht.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rationale-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rationale-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rationale-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rationale-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p2-Rationale-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "2/Analyse/Rationale functies"
```

## Controle

Gebouwd zonder ongedefinieerde verwijzingen of `??`; pakket 4 geeft dezelfde `gen/`-bestanden als voor de aanpassing (pakket 1 heeft deze cursus niet). De nieuwe antwoorden zijn nagerekend met SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
