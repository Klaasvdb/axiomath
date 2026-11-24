# Reeksen: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d), rubriek 4.3.3 (LPD 24 en 25), voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Witte deuren, open deuren* (1905) van Vilhelm Hammershøi (publiek domein): deur na deur, elke opening kleiner, en toch blijft alles in één ruimte. De voorkant komt uit `Ontwerp/voorkanten/` (motief `reeksen`: een vierkant opgevuld met stukken van 1/2, 1/4, 1/8, ..., de meetkundige reeks met som 1).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer in [cursussen/Reeksen/](<../../../cursussen/Reeksen/>). Deze map kiest de hoofdstukken in `handboek.tex`.

**Voorkennis uit pakket 4:** Rijen (somteken, somformules, limiet van een rij, *stijgend en begrensd*, de meetkundige reeks als eerste kennismaking), Limieten en afgeleiden (afgeleiden van hogere orde), Integralen (hoofdstelling, oneigenlijke integralen), Telproblemen (faculteit, binomium). Voorgesteld in het 6de jaar, na Rijen en Integralen.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Oneindige sommen | `hoofdstukken/01-oneindige-sommen.tex` | hoe ver kan een stapel boeken over de rand van een tafel uitsteken? | LPD 24: reeks als rij van partieelsommen, rekenkundige, meetkundige en harmonische reeks, oneindige processen | eerste versie, nog na te lezen |
| 2. Convergentiekenmerken | `hoofdstukken/02-convergentiekenmerken.tex` | bestaat de som van Mengoli $1 + \frac14 + \frac19 + \cdots$, en hoeveel termen geven ze tot op 0,001? | LPD 24: hyperharmonische en alternerende reeksen, kenmerken van d'Alembert, Cauchy en Leibniz | eerste versie, nog na te lezen |
| 3. Taylorreeksen | `hoofdstukken/03-taylorreeksen.tex` | hoe bereken je $\sqrt{\mathrm e}$ tot op zes decimalen met alleen de vier hoofdbewerkingen? | LPD 25: Taylor- en Maclaurinveeltermen en -reeksen, convergentie-interval, restterm en Lagrange, benaderingen van e en π | eerste versie, nog na te lezen |

## Inhoud

1. Partieelsommen en de som van een reeks, de meetkundige reeks (ook met een letter in het quotiënt), telescoperende reeksen, de rekenregels (som, veelvoud, eerste termen weglaten), de termen van een convergente reeks gaan naar 0 (en het omgekeerde niet: $\sum \ln(1 + \frac1n)$), de harmonische reeks met het bewijs van Oresme, de boekenstapel, en oneindige processen (spiraal, Zeno, vierkanten, zigzag, sneeuwvlok van Koch).
2. Reeksen met positieve termen (begrensde partieelsommen), het vergelijkings- en het limietvergelijkingskenmerk, het integraalkenmerk met $\ln(n+1) \leqslant s_n \leqslant 1 + \ln n$ voor de harmonische reeks, de hyperharmonische reeksen, de rest afschatten met integralen, het quotiëntkenmerk van d'Alembert, het wortelkenmerk van Cauchy, alternerende reeksen met het kenmerk van Leibniz en zijn foutafschatting, absolute en voorwaardelijke convergentie, en een werkwijze om een kenmerk te kiezen.
3. De Maclaurinveelterm (uit $c_k = p^{(k)}(0)/k!$), de Taylorveelterm rond $a$, de afschatting van de restterm (bewezen door herhaald te integreren), de restterm en de stelling van Lagrange, de reeksen van $\mathrm e^x$, $\sin x$ en $\cos x$ op heel ℝ, substitueren in een reeks, het convergentie-interval bepalen, de reeksen van $\ln(1+x)$ (via de meetkundige reeks), de binomiaalreeks en $\operatorname{bgtan} x$, en benaderingen van e en π (Euler, Machin).

## Afbakening

- **Alle LPD:** LPD 24 en 25 met al hun wenken: reeks als rij van partieelsommen, de gekende reeksen, de kenmerken van d'Alembert, Leibniz en Cauchy, de contexten (lijnstukken in een driehoek of vierkant, kantige spiraal, een vierkant opvullen), Maclaurinreeksen van $\mathrm e^x$, $\sin x$, $\cos x$, $\ln(1+x)$ en binomiaalreeksen met hun convergentie-interval, grafieken van opeenvolgende benaderingen, e en π benaderen, de restterm en Lagrange.
- **Extra's buiten de wenken:** telescoperende reeksen en rekenregels (nodig om te rekenen), het vergelijkings-, limietvergelijkings- en integraalkenmerk (nodig voor de bewijzen en voor de hyperharmonische reeksen), de afschatting van de rest met integralen (lost het probleem van hoofdstuk 2 op), absolute convergentie en herschikken (opdracht), de Taylorveelterm rond $a$, de reeks van $\operatorname{bgtan} x$ (voor π), en als opdrachten: Koch, Zeno, Machin, limieten met reeksen, de relativistische kinetische energie.
- **Zonder bewijs, gemeld in de tekst:** de stelling *stijgend en begrensd* (uit Rijen), de restterm van Lagrange (de afschatting wordt wel bewezen), dat de binomiaalreeks naar $(1+x)^\alpha$ convergeert, en dat je een machtreeks term per term mag integreren (alleen in opdrachten en een Koppel).
- **Weggelaten:** het formele kenmerk van Cauchy met lim sup, convergentiestraal via de wortel, uniforme convergentie, afleiden van machtreeksen.

## Oefeningen

De 131 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (44, 44 en 43): telkens 2 Start, 8 of 9 korte oefeningen, 21 of 22 Opdrachten op drie niveaus (81, 76 en 72 deelvragen), 4 Koppel en 7 of 8 testvragen. Twee prenten (schildpad, dobbelstenen) zijn gekopieerd uit Rijen; de bron staat in `afbeeldingen/prenten/README.md`.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen (`\rooster`, `\kromme`, `\assen`, `\naast`, `\figuren`, `metgrafiek` ...), `\minigrafiek` uit Rijen (met een optioneel label voor de y-as en de titel onder de grafiek), `\sominf{n=1}` voor een som tot $+\infty$ (`\reeks` bestaat al als lijstomgeving), en `\bgtan`.

## Maken

```
python -P Opmaak/maak-pdf.py 4/Analyse/Reeksen
python -P Opmaak/maak-pdf.py 4/Analyse/Reeksen --hoofdstuk 2
```

## Controle

Eerste versie van 23 nov 2026. Alle antwoorden en uitwerkingen nagerekend met SymPy (sommen, limieten, Taylorveeltermen, integralen) en de afgeronde getallen met Python. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
