# Kegelsneden: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij GO! hoort ze bij de doelen van Gevorderde wiskunde (WD3\_06.08.11), bij KOV bij het leerplan Complementair (III-WiCo-d) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Een filosoof geeft uitleg bij het planetarium* van Joseph Wright of Derby (publiek domein): de ringen van het planetarium zijn ellipsen, de banen van de planeten. De voorkant komt uit `Ontwerp/voorkanten/` (motief `kegelsneden`).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Kegelsneden/](<../../../cursussen/Kegelsneden/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

Dit is de eerste cursus volgens de regel *Vertrekken vanuit een probleem* (16 nov 2026): elk hoofdstuk begint met een blok Probleem, de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Doorsneden van een kegel | `hoofdstukken/01-doorsneden-van-een-kegel.tex` | de lichtvlek van een zaklamp: welke vormen, en ellips of ei? | GO! WD3\_06.08.11 subdoel 1 en 2 | eerste versie, nog na te lezen |
| 2. De parabool | `hoofdstukken/02-parabool.tex` | waar staat de ontvanger van een schotelantenne? | subdoel 2 en 3 | eerste versie, nog na te lezen |
| 3. De ellips | `hoofdstukken/03-ellips.tex` | hoe plat is de aardbaan, en waar staat de zon? | subdoel 2 en 3 | eerste versie, nog na te lezen |
| 4. De hyperbool | `hoofdstukken/04-hyperbool.tex` | waar sloeg de bliksem in, als twee mensen de donder met 3 s verschil horen? | subdoel 2 en 3 | eerste versie, nog na te lezen |
| 5. Eén familie | `hoofdstukken/05-een-familie.tex` | welk getal beslist of een komeet terugkeert? | synthese; poolvergelijking (KOV) | eerste versie, nog na te lezen |

## Inhoud

1. De dubbelkegel en de vier soorten doorsneden (de hoek tussen vlak en as tegenover de halve tophoek), meetkundige plaatsen, de vergelijking van een cirkel, de bollen van Dandelin, de drie kegelsneden als meetkundige plaats.
2. De parabool met brandpunt en richtlijn, de vier standaardvergelijkingen, het brandpunt van $y = ax^2$, verschoven parabolen, de raaklijn (ontdubbelen) en de spiegeleigenschap.
3. De ellips: $a$, $b$, $c$, de vergelijking (twee wortels wegwerken, en het omgekeerde met de brandpuntsstralen), excentriciteit, de samengedrukte cirkel met parametervergelijking en oppervlakte $\pi ab$, verschoven ellipsen, de raaklijn (bewezen met "de ellips ligt aan één kant") en de spiegeleigenschap (met de spiegeling van Heron).
4. De hyperbool: vergelijking, asymptoten en hulprechthoek, de grafiek van $xy = k$ als gelijkzijdige hyperbool (met brandpunten), excentriciteit, verschoven hyperbolen en de raaklijn.
5. Eén definitie met brandpunt, richtlijn en excentriciteit, de richtlijnen van ellips en hyperbool, de soort herkennen aan $Ax^2 + Cy^2 + Dx + Ey + F = 0$ (ook ontaard), een woord over de term in $xy$, en de poolvergelijking $r = \frac{p}{1 + e\cos\theta}$.

## Afbakening

- **Opgenomen buiten het strikte GO!-doel:** raaklijnen en spiegeleigenschappen (ze lossen de problemen van hoofdstuk 2 en 3 op), parametervergelijkingen en de poolvergelijking (KOV Complementair noemt cartesische, parameter- en poolvergelijkingen).
- **Weggelaten:** het draaien van assen om een term in $xy$ weg te werken (alleen vermeld, met een opdracht en een Koppel met matrices), projectieve meetkunde, kegelsneden in homogene coördinaten.
- **Notatie:** de richtlijn heet $l$, de afstand $d(P, l)$ (macro `\afst`). De parameter $p$ van een parabool is de afstand van het brandpunt tot de richtlijn, met de standaardvorm $x^2 = 2py$; in de poolvergelijking is $p = ed$, wat voor de parabool samenvalt.

## Oefeningen

De 168 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (34, 34, 36, 35 en 29), met Start, korte oefeningen, Opdrachten op drie niveaus, Koppel en Test jezelf. Zie de README van Integralen en `Opmaak/oefeningenbank.py` voor de werkwijze.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen (`\rooster`, `\kromme`, `\naast`, `\figuren`, `metgrafiek` ...), en voor deze cursus `\ellips`, `\hyperbool`, `\hyperboolv`, `\parabool`, `\paraboolv`, `\brandpunt`, `\stip`, `\rechte`, `\afst`, en voor ruimtelijke figuren de stijl `kegel` met `\dubbelkegel`, `\snijvlak`, `\kegelsnede` en `\hyperboolsnede`.

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py 4/Meetkunde/Kegelsneden
py -3.13 -P Opmaak/maak-pdf.py 4/Meetkunde/Kegelsneden --hoofdstuk 3
```

## Controle

De raaklijnen, de meetkundige plaatsen en enkele vergelijkingen zijn nagerekend met SymPy, de afgeronde getallen (planeetbanen, komeet van Halley, tunnel, koeltoren, onweer, Ramanujan) met een script. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
