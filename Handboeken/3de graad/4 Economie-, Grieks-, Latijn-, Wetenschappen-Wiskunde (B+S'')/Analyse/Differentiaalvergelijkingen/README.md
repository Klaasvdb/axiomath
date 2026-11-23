# Differentiaalvergelijkingen: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.3.2, LPD 21-23) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Dame die thee drinkt* van Jean Siméon Chardin (1735, publiek domein): een dampende kop thee die afkoelt, zoals in het probleem van hoofdstuk 2. De voorkant komt uit `Ontwerp/voorkanten/` (motief `differentiaalvergelijkingen`: het richtingsveld van de afkoelingswet van Newton, met drie integraalkrommen naar de kamertemperatuur).

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan in [cursussen/Differentiaalvergelijkingen/](<../../../cursussen/Differentiaalvergelijkingen/>). Deze map kiest de hoofdstukken in `handboek.tex`.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. Discrete veranderingsprocessen | `hoofdstukken/01-discrete-processen.tex` | na hoeveel maanden is een lening afgelost, en waarom raakt wie te veel leent nooit van zijn schuld af? | LPD 21 | eerste versie, nog na te lezen |
| 2. Continue veranderingsprocessen | `hoofdstukken/02-continue-processen.tex` | wanneer is thee van 90 °C afgekoeld tot 55 °C? | LPD 22, begrippen van LPD 23 | eerste versie, nog na te lezen |
| 3. Vergelijkingen van de eerste orde | `hoofdstukken/03-eerste-orde.tex` | komt een kogel in een balk ooit tot stilstand, en hoe diep dringt hij in? | LPD 23 (en contexten van LPD 22) | eerste versie, nog na te lezen |
| 4. Vergelijkingen van de tweede orde | `hoofdstukken/04-tweede-orde.tex` | hoe sterk moet een schokdemper zijn opdat een auto niet nawipt? | LPD 23 (tweede orde) | eerste versie, nog na te lezen |

## Inhoud

1. Lineaire recursievergelijkingen $t_n = a\,t_{n-1} + b$ voor elke groeifactor, het evenwicht, het expliciete voorschrift $t_n = E + (t_0 - E)\,a^n$ (bewezen met de hulprij), stabiel en onstabiel (ook springend bij $a < 0$), het spinnenwebdiagram, de differentievergelijking $\Delta t_n = (a - 1)(t_{n-1} - E)$, en de overgang naar continue tijd.
2. Differentiaalvergelijking, orde, oplossing, integraalkromme, algemene en particuliere oplossing, beginvoorwaarde. $y' = ky$ (met bewijs dat er geen andere oplossingen zijn), halveringstijd, radioactief verval en de wet van Lambert. $y' = k(y - A)$: de afkoelingswet van Newton, een infuus en de parachutist. Richtingsveld en de methode van Euler.
3. Scheiden van veranderlijken (met bewijs), constante oplossingen, logistische groei (oplossing en buigpunt, met bewijs), singuliere oplossingen als omhullende, singulier punt, de kogel met $v' = -k\sqrt v$, de integrerende factor voor $y' + p(t)\,y = q(t)$ (met bewijs) en een mengvat.
4. De harmonische trilling (met een energiebewijs), superpositie, de karakteristieke vergelijking met de drie gevallen (elk bewezen: twee reële wortels door de vergelijking in twee vergelijkingen van de eerste orde te splitsen, een dubbele wortel op dezelfde manier, complexe wortels met $y = \e^{\alpha t} z$), onderkritische, kritische en overkritische demping, en niet-homogene vergelijkingen met een constante, een veelterm of een exponentiële functie rechts.

## Afbakening

- **Alle LPD:** 21 (hoofdstuk 1), 22 (hoofdstuk 2 en 3, met de contexten uit de wenk: radioactief verval, absorptie van licht, Newton, logistische groei, de kogel, de parachutist; het prooi-roofdiermodel als opdracht in hoofdstuk 4) en 23 (hoofdstuk 2 tot 4: soorten oplossingen, singuliere oplossingen en singulier punt, scheiden, integrerende factor, tweede orde met constante coëfficiënten, richtingsveld, Euler).
- **Extra's uit het leerplan opgenomen:** het spinnenwebdiagram, singuliere krommen als omhullende, gedempte trillingen, niet-homogene vergelijkingen van de tweede orde. Als opdracht van niveau 3: resonantie, de vergelijkingen van Bernoulli en Euler, kwadratische luchtweerstand, de linearisatie van het model van Lotka en Volterra.
- **Voorkennis uit pakket 4:** Rijen (het evenwicht van $u_n = a\,u_{n-1} + b$ met $|a| < 1$), Limieten en afgeleiden, Integralen (substitutie en partiële integratie), Exponentiële en logaritmische functies, Complexe getallen. Splitsen in partieelbreuken (Complementair LPD 17) is niet nodig: bij de logistische groei wordt de splitsing gecontroleerd door op gelijke noemer te zetten.
- **Weggelaten:** het bestaan en de eenduidigheid van oplossingen in het algemeen (alleen in de bewezen gevallen), variatie van constanten, stelsels (alleen als opdracht).

## Oefeningen

De 159 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (39, 40, 40 en 40): Start (2), 7 of 8 korte oefeningen, 21 opdrachten op drie niveaus (66 tot 73 deelvragen), 3 Koppel-oefeningen en 6 of 7 testvragen. Zes opdrachten hebben een kleine prent (bever, koffie, ton, trechter, veer, auto), gekopieerd uit Integralen, Kegelsneden en Matrices; de bron staat in `afbeeldingen/prenten/README.md` van de bron.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Kegelsneden (`\rooster`, `\kromme`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`), met de namen van de assen in `\asx` en `\asy`; `\afg` en `\afgg` voor de notatie van Leibniz; `\dt`, `\dy`, `\dv`; en `\richtingsveld` voor een richtingsveld waarvan de hellingen op het papier kloppen, ook als de eenheden op de assen verschillen.

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py 4/Analyse/Differentiaalvergelijkingen
py -3.13 -P Opmaak/maak-pdf.py 4/Analyse/Differentiaalvergelijkingen --hoofdstuk 3
```

## Controle

Op 23 nov 2026 nagerekend met een SymPy-script (ruim 200 controles: elke oplossing van een differentiaalvergelijking ingevuld in de vergelijking en de beginvoorwaarden, en de afgeronde getallen van de contexten). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen.
