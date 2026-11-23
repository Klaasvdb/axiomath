# Getaltheorie: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.4.4, LPD 35) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *De ambassadeurs* van Hans Holbein de Jonge (1533, publiek domein): op de onderste plank ligt een rekenboek voor kooplieden van Peter Apian, opengeslagen bij het delen. De voorkant komt uit `Ontwerp/voorkanten/` (motief `getaltheorie`: het algoritme van Euclides voor 91 en 35 als rechthoek vol vierkanten).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Getaltheorie/](<../../../cursussen/Getaltheorie/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Deelbaarheid | `hoofdstukken/01-deelbaarheid.tex` | met maatbekers van 91 ml en 35 ml: kun je 7 ml afmeten, en 10 ml? | LPD 35: Euclides, Bachet-Bézout | eerste versie, leerkracht moet nalezen |
| 2. Priemgetallen | `hoofdstukken/02-priemgetallen.tex` | waarom zou een cyclus van 17 jaar cicaden beschermen tegen roofdieren? | LPD 35: oneindig veel priemgetallen, unieke factorisatie | eerste versie, leerkracht moet nalezen |
| 3. Modulorekenen | `hoofdstukken/03-modulorekenen.tex` | klopt het controlegetal van een rekeningnummer, welke fouten ziet het, en vind je een onleesbaar cijfer terug? | LPD 35: modulorekenen, Chinese reststelling | eerste versie, leerkracht moet nalezen |
| 4. Fermat, Wilson en RSA | `hoofdstukken/04-fermat-wilson-rsa.tex` | hoe ontcijfert Tom een getal dat met een openbare sleutel versleuteld is, en waarom kan een ander dat niet? | LPD 35: kleine stelling van Fermat, Wilson, RSA | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Delers en de drie eigenschappen van *deelt* (transitiviteit, lineaire combinatie, grootte), deling met rest (bestaan en uniciteit), ggd, het algoritme van Euclides, de stelling van Bachet-Bézout met bewijs (kleinste positieve combinatie), oplosbaarheid van $ax + by = c$, relatief priem, het lemma van Gauss, product van delers, lineaire diophantische vergelijkingen.
2. Priemgetallen, de kleinste deler is priem, de priemtest met $\sqrt n$, de zeef van Eratosthenes, de stelling van Euclides, gaten tussen priemgetallen, de priemgetalstelling (uitleg), het lemma van Euclides (ook voor meer factoren), de hoofdstelling van de rekenkunde (bestaan en uniciteit), delers en hun aantal, ggd en kgv met de ontbinding, $\ggd \cdot \kgv = ab$.
3. Congruenties, congruent en rest, restklassen, rekenregels voor optellen, vermenigvuldigen en machten, kenmerken van 9 en 11, de omgekeerde modulo $n$, modulo een priemgetal, lineaire congruenties en schrappen, de Chinese reststelling (bewijs met Bachet-Bézout) en de methode van substitutie.
4. De kleine stelling van Fermat (bewijs met de permutatie van de resten) en de vorm $a^p \equiv a$, de Fermattest, de stelling van Wilson en haar omgekeerde, snel machtsverheffen, de stelling van Euler voor $n = pq$, het RSA-systeem met bewijs, en waarom het veilig is.

## Afbakening

- **Extra's buiten de wenken van LPD 35:** lineaire diophantische vergelijkingen (hoofdstuk 1), kgv en aantal delers (hoofdstuk 2), de Fermattest, het omgekeerde van Wilson en de stelling van Euler voor $pq$ (hoofdstuk 4). Ze maken de problemen af of zijn nodig voor RSA. De priemgetalstelling en de algemene stelling van Euler met $\varphi(n)$ staan alleen in de uitleg en in opdrachten.
- **Weggelaten:** kwadratische resten (alleen in opdrachten), de algemene stelling van Euler met bewijs, primitieve wortels, getaltheoretische functies buiten $\varphi$ en $\sigma$ in opdrachten.
- **Notatie:** $a \deelt b$, $\ggd(a, b)$, $\kgv(a, b)$, $a \equiv b \md{n}$ en $a \bmod n$ voor de rest. De omgekeerde modulo $n$ heet ook inverse.

## Oefeningen

De 163 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (41, 41, 41 en 40), met Start (Opwarmer en Verken), 7 korte oefeningen, 21 of 22 opdrachten op drie niveaus (67 tot 79 deelvragen per hoofdstuk), 3 Koppel-oefeningen en 7 testvragen. Er zijn geen prenten. Zie de README van Integralen en `Opmaak/oefeningenbank.py` voor de werkwijze.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen (`\rooster`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`), en voor deze cursus `\deelt`, `\ndeelt`, `\ggd`, `\kgv`, `\md{n}` (geeft "(mod $n$)"), `\Zn`, en voor de figuren `\getallenas`, `\sprong`, `\getalvak` (een vakje van de zeef of van een tafel modulo $n$) en `\klokmod`.

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py 4/Algebra/Getaltheorie
py -3.13 -P Opmaak/maak-pdf.py 4/Algebra/Getaltheorie --hoofdstuk 3
```

## Controle

Op 23 nov 2026 gebouwd (alle versies, zonder fouten, `??` of Overfull boven 2 pt) en steekproefsgewijs bekeken. De voorbeelden en de antwoorden van de oefeningen zijn nagerekend met Python/SymPy (resten, inversen, Chinese reststelling, RSA-sleutels en machten, ontbindingen, delers). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
