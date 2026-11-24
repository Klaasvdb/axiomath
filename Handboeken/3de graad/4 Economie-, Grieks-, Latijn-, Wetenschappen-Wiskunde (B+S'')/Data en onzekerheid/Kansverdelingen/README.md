# Kansverdelingen: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d), rubriek 4.6.1 (LPD 48, 49 en 50), voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Parijse straat, regenachtige dag* (1877) van Gustave Caillebotte (publiek domein): voorbijgangers die elk op hun eigen moment het plein oversteken, zodat het aantal per minuut een Poissonverdeling volgt. De voorkant komt uit `Ontwerp/voorkanten/` (motief `kansverdelingen`: het staafdiagram van de Poissonverdeling met λ = 3, met twee even hoge toppen bij 2 en 3).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer in [cursussen/Kansverdelingen/](<../../../cursussen/Kansverdelingen/>). Deze map kiest de hoofdstukken in `handboek.tex`.

**Voorkennis uit pakket 4:** Kansrekenen (toevalsvariabelen, verwachtingswaarde en variantie, de binomiale verdeling, de kapiteinsregel, kruistabellen en onafhankelijkheid), Statistiek (de normale verdeling, de steekproevenverdeling van het gemiddelde, hypothesetoetsen en betrouwbaarheidsintervallen met σ gekend), Rijen (de meetkundige reeks), Telproblemen (combinaties), Exponentiële en logaritmische functies (het getal e). De reeks van eˣ komt uit Reeksen, zelf een module van Complementair: wie die niet zag, aanvaardt ze (zie de tip in hoofdstuk 2). Voorgesteld in het 6de jaar, na Kansrekenen en Statistiek. De rekentoestelcommando's zijn die van de TI-84.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Wachten en trekken | `hoofdstukken/01-wachten-en-trekken.tex` | het probleem van de punten (Pascal en Fermat, 1654): hoe verdeel je de pot bij een onderbroken spel? | LPD 48: geometrische, negatief-binomiale en hypergeometrische verdeling | eerste versie, nog na te lezen |
| 2. De Poissonverdeling | `hoofdstukken/02-poissonverdeling.tex` | hoeveel bedden moet een spoedafdeling 's nachts vrijhouden? | LPD 48: Poissonverdeling | eerste versie, nog na te lezen |
| 3. De t-verdeling | `hoofdstukken/03-t-verdeling.tex` | een imker weegt 8 kasten en kent σ niet: interval en toets voor het gemiddelde | LPD 49: t-verdeling, betrouwbaarheidsinterval en t-toets met σ onbekend | eerste versie, nog na te lezen |
| 4. De chi-kwadraatverdeling | `hoofdstukken/04-chi-kwadraatverdeling.tex` | is een dobbelsteen met 31 zessen op 120 worpen vals? | LPD 50: chi-kwadraatverdeling, aanpassingstoets en onafhankelijkheidstoets | eerste versie, nog na te lezen |

## Inhoud

1. De geometrische verdeling (kansen samen 1 via de meetkundige reeks, staartkans, geheugenloosheid, E = 1/p met bewijs), de negatief-binomiale verdeling (het verband met de binomiale verdeling, E = r/p met bewijs, het probleem van de punten), de hypergeometrische verdeling (formule, E = nM/N met de kapiteinsregel, variantie met de correctiefactor, vergelijking met de binomiale verdeling) en een werkwijze om de juiste verdeling te kiezen.
2. Van binomiaal naar Poisson (de limiet van B(n, λ/n), met lim(1 + x/n)ⁿ = eˣ), de Poissonverdeling (kansen samen 1 via de reeks van eˣ), E = λ en Var = λ met bewijs, het Poissonproces, de Poissonbenadering van de binomiale verdeling, de paardentrappen van Bortkiewicz, de bedden van de spoedafdeling.
3. De steekproefstandaardafwijking met n − 1, de t-verdeling (definitie, symmetrie, de limiet naar de Gausskromme, t* tegenover 1,96, Gosset), het betrouwbaarheidsinterval met t (en het bewijs dat de methode 95 % betrouwbaar is), de t-toets eenzijdig en tweezijdig, interval en tweezijdige toets, de gepaarde t-toets, de voorwaarden en robuustheid.
4. De maat X² = Σ(O − E)²/E (met X² = z² bij twee categorieën), de chi-kwadraatverdeling als som van kwadraten (E = k, kritieke waarden), de aanpassingstoets (dobbelsteen, Mendel, de Poissonfit van Bortkiewicz met een vrijheidsgraad minder), de onafhankelijkheidstoets in een kruistabel (verwachte aantallen met bewijs, (r − 1)(c − 1) vrijheidsgraden).

## Afbakening

- **Alle LPD:** LPD 48 met de vier verdelingen uit de wenk, LPD 49 met het verschil tussen t en normaal, het interval en de t-toets met ICT, LPD 50 met de aanpassingstoets (dobbelsteen) en de onafhankelijkheidstoets.
- **Extra's buiten de wenken:** geheugenloosheid, de vergelijking hypergeometrisch tegenover binomiaal, de Poissonbenadering en het Poissonproces, de som van twee Poissonvariabelen (opdracht), de exponentiële wachttijd (opdracht en Koppel), de gepaarde t-toets, het verband tussen interval en tweezijdige toets, X² = z², een vrijheidsgraad minder per geschatte parameter, en als opdrachten de vraag van De Méré, de theeproef van Fisher, vangst-hervangst, het verzamelaarsprobleem, Sint-Petersburg, Rutherford en Geiger, Fishers kritiek op Mendel en de wet van Benford.
- **Zonder bewijs, gemeld in de tekst:** de variantie van de negatief-binomiale verdeling, dat T een t-verdeling heeft, dat delen door n − 1 de onderschatting precies goedmaakt, dat X² bij benadering chi-kwadraatverdeeld is met k − 1 vrijheidsgraden, de variantie 2k van χ²ₖ, en de reeks van eˣ (uit Reeksen). Waar een bewijs de lineariteit van de verwachtingswaarde nodig heeft (E = k bij χ²ₖ, het verzamelaarsprobleem), staat die als aanname: sommen van toevalsvariabelen vallen buiten pakket 4.

## Oefeningen

De 183 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (46, 45, 46 en 46): telkens 2 Start, 9 of 10 korte oefeningen, 23 of 24 Opdrachten op drie niveaus (83, 87, 87 en 74 deelvragen), 4 Koppel en 7 testvragen. Vijf prenten (dobbelstenen, kever, bakker, fiets, koffie) zijn gekopieerd uit Rijen en Matrices; de bron staat in `afbeeldingen/prenten/README.md`.

## Eigen macro's

In `notatie.tex`: de basis van Statistiek en Kansrekenen (`stappenbreed`, `stappenvrij`, `\naast`, `\figuren`, `metgrafiek`, `\staaf`, `\E`, `\Var`, `\km`), `\staaffel` voor een gevraagde kans, `\kansassen`, de namen van de verdelingen (`\Geo`, `\NB`, `\Hyp`, `\Poi`, `\chik`), en voor de figuren de pgf-functies `gauss`, `tdich(x, ν)`, `chidich(x, k)` en `poisson(k, λ)` (via ln k!, zodat er niets overloopt).

## Maken

```
python -P Opmaak/maak-pdf.py "4/Data en onzekerheid/Kansverdelingen"
python -P Opmaak/maak-pdf.py "4/Data en onzekerheid/Kansverdelingen" --hoofdstuk 2
```

## Controle

Eerste versie van 23 nov 2026. Alle antwoorden en uitwerkingen nagerekend met SymPy en mpmath (scipy staat niet in de omgeving: tcdf, invT en χ²cdf zijn met de onvolledige bèta- en gammafunctie nagerekend). Na te kijken: de historische aantallen van Mendel (315, 108, 101, 32) en de waarde van Fishers X² bij Mendel zijn niet in een bron gecontroleerd; `χ²GOF-Test` bestaat pas vanaf TI-84 OS 2.30 (de leerkrachtentip geeft een alternatief). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
