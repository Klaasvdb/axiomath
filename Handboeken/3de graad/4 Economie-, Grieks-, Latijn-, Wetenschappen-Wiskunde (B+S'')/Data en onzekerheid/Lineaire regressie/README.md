# Lineaire regressie: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d), rubriek 4.6.2 (LPD 51 en 52), voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Sterrenkundige in een venster* (1657) van Gerrit Dou (publiek domein): de kleinste-kwadratenmethode ontstond om banen van hemellichamen te berekenen uit onnauwkeurige waarnemingen. De voorkant komt uit `Ontwerp/voorkanten/` (motief `lineaire-regressie`: de zes klassieke planeten op dubbellogaritmisch papier, op de rechte van de derde wet van Kepler).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer in [cursussen/Lineaire regressie/](<../../../cursussen/Lineaire regressie/>). Deze map kiest de hoofdstukken in `handboek.tex`.

**Voorkennis uit pakket 4:** Statistiek (hoofdstuk 1: samenhang en causaliteit; de p-waarde en het betrouwbaarheidsinterval), Limieten en afgeleiden (extrema met de afgeleide, de kettingregel), Exponentiële en logaritmische functies (groeifactor, rekenregels van logaritmen, logaritmische schalen), Rijen (het sommatieteken). Uit de 2de graad (Spreidingsdiagrammen): het spreidingsdiagram, het residu, het idee van de kleinste kwadraten, de regressielijn en $r$ met ICT. De toets en het interval voor de helling (hoofdstuk 2) steunen op de t-verdeling uit Kansverdelingen (hoofdstuk 3), zelf een module van Complementair: wie die niet zag, krijgt een korte inleiding (zie de tip in hoofdstuk 2). Voorgesteld in het 6de jaar, na Statistiek. De rekentoestelcommando's zijn die van de TI-84.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. De kleinste-kwadratenmethode | `hoofdstukken/01-kleinste-kwadraten.tex` | een veer met gewichten: welke rechte is de beste, en hoe bereken je ze exact zonder ICT? | LPD 52: kleinste kwadraten, partiële afgeleiden, vergelijken met ICT | eerste versie, nog na te lezen |
| 2. Hoe goed is het model? | `hoofdstukken/02-kwaliteit-van-het-model.tex` | bladerdek en temperatuur in tien straten: hoeveel verklaart het model, is het toeval, hoe groot is het effect? | LPD 52 (determinatiecoëfficiënt), LPD 51 (de invloed van een variabele onderzoeken) | eerste versie, nog na te lezen |
| 3. Exponentiële en machtsverbanden | `hoofdstukken/03-exponentiele-en-machtsverbanden.tex` | de derde wet van Kepler uit de afstanden en omlooptijden van de planeten | LPD 51: met logaritmen lineair maken, enkel- en dubbellogaritmisch papier | eerste versie, nog na te lezen |

## Inhoud

1. De kwadratensom $K(a, b)$ (met de vierkanten van de residuen, Legendre en Gauss), de beste constante (het gemiddelde) en de rechte door de oorsprong met de afgeleide, partiële afgeleiden en de nodige voorwaarde voor een minimum (met de doorsneden), de normaalvergelijkingen, de formules $a = S_{xy}/S_{xx}$ en $b = \bar y - a\bar x$ met een bewijs door kwadraatafsplitsing (één minimum, $K_{\min} = S_{yy} - S_{xy}^2/S_{xx}$), het gemiddelde punt (nu bewezen), de rekenformules, $a = r\,s_y/s_x$, de regressie naar het gemiddelde (Galton) en de regressierechte van $x$ op $y$.
2. De totale, verklaarde en onverklaarde kwadratensom en hun splitsing (met bewijs), de determinatiecoëfficiënt $R^2$ (als verhouding van verklaarde tot totale variantie, met een tekening), $R^2 = r^2$ en daaruit $-1 \le r \le 1$, de residuplot (boog, trechter, uitschieter), het kwartet van Anscombe, het enkelvoudig lineair regressiemodel, de standaardfouten $s_e$ (met $n - 2$) en $s_a$, de t-toets voor de helling en het betrouwbaarheidsinterval voor de helling.
3. Exponentiële verbanden lineair maken met $\ln y$ (met bewijs), verval en halveringstijd, enkellogaritmisch papier, machtsverbanden met $\ln x$ en $\ln y$, dubbellogaritmisch papier, de keuze van het model (tabel met lineair, exponentieel, macht en logaritmisch, met ICT), en wat de transformatie met de residuen doet (relatieve fouten).

## Afbakening

- **Alle LPD:** LPD 51 met de wenk over machts- en exponentiële verbanden en logaritmisch papier; LPD 52 met de drie wenken: het idee en de afleiding met partiële afgeleiden, de vergelijking met ICT, en de determinatiecoëfficiënt met een tekening.
- **Extra's:** de rechte door de oorsprong en andere modellen met één parameter ($y = av^2$), de kwadraatafsplitsing als bewijs van het minimum, regressie naar het gemiddelde, de regressierechte van $x$ op $y$, het bewijs van $-1 \le r \le 1$ (de link met LPD 54), het kwartet van Anscombe, de t-toets en het interval voor de helling (de invulling van *de invloed onderzoeken*), het logaritmische model, en als opdrachten het strijdige stelsel van Legendre, de mediaan bij absolute afwijkingen, de wet van Moore, de wereldbevolking en $t = r\sqrt{n-2}/\sqrt{1-r^2}$.
- **Zonder bewijs, gemeld in de tekst:** dat $(a - \alpha)/s_a$ een t-verdeling met $n - 2$ vrijheidsgraden heeft (zoals in Kansverdelingen: sommen van toevalsvariabelen vallen buiten het leerplan).

## Oefeningen

De 131 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (47, 42 en 42): telkens 2 Start, 11, 8 en 8 korte oefeningen, 23, 22 en 22 Opdrachten op drie niveaus (77, 69 en 72 deelvragen), 4, 3 en 3 Koppel en 7 testvragen. Twee prenten (komeet, bij) zijn gekopieerd uit Kegelsneden en Rijen; de bron staat in `afbeeldingen/prenten/README.md`.

## Eigen macro's

In `notatie.tex`: de spreidingsdiagrammen van Spreidingsdiagrammen (2de graad: `\diagram`, `\xas`, `\yas`, `\punten`, `\gempunt`, `\residu`, `\rechte`), `\kwadraat` voor het vierkant van een residu, `\logy` en `\logx` voor logaritmisch papier, de dichtheden `gauss` en `tdich` uit Kansverdelingen, en de notatie `\Sxx`, `\Sxy`, `\Syy`, `\Qt`, `\Qv`, `\Qf`, `\yhat`, `\partafg`, `\som`.

## Maken

```
python -P Opmaak/maak-pdf.py "4/Data en onzekerheid/Lineaire regressie"
python -P Opmaak/maak-pdf.py "4/Data en onzekerheid/Lineaire regressie" --hoofdstuk 2
```

## Controle

Eerste versie van 23 nov 2026. Alle antwoorden en uitwerkingen nagerekend met Python, SymPy en mpmath (de t-verdeling via de onvolledige bètafunctie; scipy staat niet in de omgeving). Alle gegevens zijn verzonnen, behalve: het kwartet van Anscombe (1973), de banen van de planeten (afgeronde, algemeen bekende waarden), de transistors van Intel (wet van Moore) en de wereldbevolking volgens de VN. Die laatste twee en de VN-prognose van 9,7 miljard in 2050 zijn uit het hoofd genomen en moeten in een bron nagekeken worden; ook de historische opmerkingen (Legendre 1805, Gauss en Ceres 1801, Galton 1886, Kepler 1618 en Napier 1614) en de namen van de TI-84-commando's (`LinRegTTest` met $y = a + bx$, `LinRegTInt` vanaf OS 2.30). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
