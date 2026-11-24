# Financiële algebra: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.4.6, LPD 40-43) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *De geldwisselaar en zijn vrouw* van Quinten Massys (1514, publiek domein): een Antwerpse geldwisselaar weegt munten, en geld wisselen en uitlenen tegen rente was zijn vak. De voorkant komt uit `Ontwerp/voorkanten/` (motief `financiele-algebra`: de aflossingstabel van een lening met vaste annuïteit, met kapitaaldelen die telkens met de factor $u$ groeien; de bovenrand van de band is de restschuld).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Financiële algebra/](<../../../cursussen/Financiële algebra/>). Deze map kiest de hoofdstukken in `handboek.tex`.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Rente en gelijkwaardige rentevoeten | `hoofdstukken/01-rentevoeten.tex` | een verkoper vraagt 0,5 % per maand, de bank 6,1 % per jaar: wie is goedkoper? | LPD 40 | eerste versie, leerkracht moet nalezen |
| 2. Sparen met vaste stortingen | `hoofdstukken/02-sparen.tex` | hoeveel moeten grootouders elke maand storten om op de 18de verjaardag € 15 000 te hebben? | LPD 41 (met de wenk van LPD 40) | eerste versie, leerkracht moet nalezen |
| 3. Leningen aflossen | `hoofdstukken/03-lenen.tex` | een hypothecaire lening van € 180 000 over 20 jaar: maandlast, totale rente, en wat er na 10 jaar nog openstaat | LPD 42 en 43 | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Rentevoet en rentefactor, samengestelde intrest (herhaling uit Rijen), roerende voorheffing en nettorentevoet, de beginwaarde en de waarde van een bedrag op een ander tijdstip (tijdlijn), looptijd en rentevoet berekenen, gelijkwaardige rentevoeten per maand, trimester, semester en jaar (met bewijs), welke rentevoet je kiest volgens de periode van de stortingen, niet-gehele looptijden, nominale, proportionele en effectieve rentevoet, *proportioneel kost meer* (bewijs met het binomium), het JKP.
2. Annuïteiten, prenumerando en postnumerando, de eindwaarde van een prenumerando annuïteit (bewijs), het verband met de postnumerando eindwaarde uit Rijen, de eindwaarde naar een later tijdstip brengen, het termijnbedrag (bewijs), de looptijd, de rentevoet numeriek insluiten (tabel, methode van de intervalmiddens), het saldo als recursie in een rekenblad.
3. De beginwaarde van een postnumerando annuïteit (bewijs) als leencapaciteit, het termijnbedrag (bewijs), de looptijd en de voorwaarde $a > B\,i$, de aflossingstabel (rentedeel, aflossingsdeel, restschuld), $A_{k+1} = u\,A_k$ (bewijs), twee formules voor de restschuld (bewijs), de tabel in een rekenblad, vast aflossingsdeel met de totale rente $i\,B\,\frac{n+1}{2}$ (bewijs), vervroegd terugbetalen met wederbeleggingsvergoeding.

## Afbakening

- **Extra's buiten de leerplandoelen:** de beginwaarde en het tijdlijnprincipe in hoofdstuk 1 (nodig voor hoofdstuk 3), de proportionele rentevoet met bewijs, het JKP, de looptijd en de rentevoet bij annuïteiten, de formules voor de restschuld, de totale rente bij een vast aflossingsdeel. In opdrachten: inflatie en reële rente, stijgende stortingen, herfinancieren, uitgestelde aflossing, aflossingsvrij krediet, het JKP met dossierkosten (Koppel, numeriek).
- **Lening als recursievergelijking:** staat in Differentiaalvergelijkingen, hoofdstuk 1; hier staat alleen een verwijzing.
- **ICT:** LPD 43 vraagt een aflossingstabel met ICT: hoofdstuk 3 toont de opbouw in een rekenblad (formules met vaste celverwijzingen), hoofdstuk 2 het saldo van een spaarplan. In de leerkrachtentips staat ook de TVM Solver van de TI-84.
- **Belgische context, niet nagekeken:** roerende voorheffing (30 %), de basisrente en getrouwheidspremie op een gereglementeerde spaarrekening, het JKP bij consumentenkrediet, de gelijkwaardige maandrente bij hypothecaire kredieten, de wederbeleggingsvergoeding (drie maanden rente bij een hypothecair krediet, 1 % of 0,5 % bij een consumentenkrediet). Ze staan er als realistische context; de leerkracht controleert de actuele regels. Het boek geeft geen financieel advies.

## Oefeningen

De 126 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (42, 41 en 43), met Start (Opwarmer en Verken), 8 korte oefeningen, 21 of 22 opdrachten op drie niveaus (62 tot 75 deelvragen per hoofdstuk), 3 Koppel-oefeningen en 7 of 8 testvragen. Er zijn geen prenten. Zie `Opmaak/oefeningenbank.py` voor de velden.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen (`\rooster`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenvrij`, `rastertabel`), en voor deze cursus `\im` en `\um` (maandrente en rentefactor per maand), `\tijdas` en `\betaling` (tijdlijn) en de omgeving `rekenblad` (een rekenblad met kolomletters en rijnummers).

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "4/Algebra/Financiële algebra"
py -3.13 -P Opmaak/maak-pdf.py "4/Algebra/Financiële algebra" --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd en steekproefsgewijs bekeken. Alle bedragen in de voorbeelden en de antwoorden van de oefeningen zijn nagerekend met Python (gelijkwaardige rentevoeten, eindwaarden, beginwaarden, termijnbedragen, looptijden, numerieke rentevoeten, aflossingstabellen). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven en de wettelijke details nog nalezen.
