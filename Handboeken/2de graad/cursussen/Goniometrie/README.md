# Goniometrie: bron

Bron van het handboek Meetkunde/Goniometrie van de 2de graad, voor pakket 4 (B+S) en pakket 5 (B+S''), volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Pakket 1-3 hebben dit handboek niet. Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. De goniometrische cirkel | `hoofdstukken/01-goniometrische-cirkel.tex` | 4-5 |
| 2. De sinusregel en de cosinusregel | `hoofdstukken/02-sinusregel-en-cosinusregel.tex` | 4-5 |

Hoofdstuk 1 breidt sinus, cosinus en tangens uit van scherpe hoeken tot hoeken tussen $0^\circ$ en $360^\circ$, in graden: hoeken in een assenstelsel (beginbeen, eindbeen, draaizin, kwadranten, negatieve hoeken), de goniometrische cirkel met $\cos\alpha = x_P$ en $\sin\alpha = y_P$, het punt $(r\cos\alpha, r\sin\alpha)$ op een cirkel met straal $r$, de tangens als quotiënt (met de raaklijn $x = 1$ als uitleg bij de naam), het teken per kwadrant, de grondformule voor elke hoek (met bewijs), en de verwante hoeken: supplementair, antisupplementair, tegengesteld (ook als $360^\circ - \alpha$) en complementair, elk met een eigen kader, bewijs met een spiegeling, voorbeeld en korte oefening. Daarna herleiden naar het eerste kwadrant (met een cirkel met alle exacte coördinaten), alle hoeken tussen $0^\circ$ en $360^\circ$ bij een gegeven sinus, cosinus of tangens, en een hoek in een driehoek (cosinus eenduidig, sinus twee kandidaten) als brug naar hoofdstuk 2. Probleem: hoe hoog is de punt van een wiek van een windturbine na $140^\circ$, en bij welke draaihoeken is ze 100~m hoog? De hoek van $140^\circ$ is die van het motief op de voorkant.

Hoofdstuk 2 gaat over willekeurige driehoeken, met de afspraak $a = \lengte{BC}$, $b = \lengte{CA}$, $c = \lengte{AB}$ en $\alpha$, $\beta$, $\gamma$ in $A$, $B$, $C$: de oppervlakte $\tfrac12 ab\sin\gamma$ (bewijs met scherpe, stompe en rechte hoek), de sinusregel (bewezen met de oppervlakteformule), twee hoeken en een zijde, het dubbelzinnige geval (twee, één of geen driehoek, met de passercirkel als verklaring), de cosinusregel (bewezen met coördinaten $C(b\cos\alpha, b\sin\alpha)$, zodat scherpe en stompe hoeken in één keer behandeld zijn), twee zijden en de ingesloten hoek, drie zijden (eerst de grootste hoek), een tabel "welke regel?" met het verband met de congruentiekenmerken, en toepassingen (rivier, tunnel, toren met twee hoogtehoeken). Probleem: een zeilboot vaart 12~km, draait $50^\circ$ en vaart nog 7~km; hoe ver en in welke richting ligt de haven?

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`, vertrokken van die van Driehoeksmeting (2de graad) zonder de ruimtefiguren (`\balk`, `\draadbalk`, stijl `schuin`) en zonder `\gv`. Nieuw: `\gonicirkel` (goniometrische cirkel met assen, met `[t]` ook de getallen 1 en $-1$) en `\gonipunt{hoek}{label}{positie}` (straal, draaipijl en punt). De notatie volgt Driehoeksmeting: $\lengte{AB}$, $\hoek{A}$, $\sin^{-1}$, $\tan$ (niet tg).

## Aantallen

| | Korte oefeningen | Opdrachten (deelvragen) | Test (deelvragen) |
|---|---|---|---|
| Hoofdstuk 1, pakket 4 | 12 | 22 (99) | 7 (11) |
| Hoofdstuk 1, pakket 5 | 13 | 23 (103) | 7 (11) |
| Hoofdstuk 2, pakket 4 | 8 | 24 (64) | 7 (10) |
| Hoofdstuk 2, pakket 5 | 10 | 26 (70) | 7 (10) |

Daarbij per hoofdstuk een Opwarmer en een Verken, en in de zelfstudieversie drie keer Nu jij.

## Verschillen per pakket

Beide pakketten hebben LPD 15-17 en dezelfde twee hoofdstukken. Pakket 5 werkt dezelfde doelen met meer diepgang uit; de verschillen staan in `\alleenvoor{5}` en `pakketten: [5]`.

| Onderdeel | 4 | 5 |
|---|---|---|
| Goniometrische cirkel, verwante hoeken (vier soorten, met bewijs), herleiden, hoeken bij een gegeven getal | x | x |
| Hoeken die $90^\circ$ verschillen: $\sin(90^\circ + \alpha) = \cos\alpha$, $\cos(90^\circ + \alpha) = -\sin\alpha$ (subsectie, bewijs, voorbeeld, korte oefening) | | x |
| Opdracht: identiteiten met verwante hoeken bewijzen | | x |
| Oppervlakteformule, sinusregel, cosinusregel (met bewijs), het dubbelzinnige geval met de werkwijze | x | x |
| Het aantal driehoeken bij twee zijden en een niet-ingesloten hoek volledig (stelling met tabel en bewijs met de passercirkel, voorbeeld, korte oefening) | | x |
| Sinusregel met de omgeschreven cirkel, $\tfrac{a}{\sin\alpha} = 2R$ (bewijs voor een scherphoekige driehoek met gelijkbenige driehoeken, voorbeeld, korte oefening) | | x |
| Opdracht: het bewijs van $2R$ afwerken voor een rechte en een stompe hoek | | x |
| Opdracht: het dubbelzinnige geval met de cosinusregel (vierkantsvergelijking in $c$) | | x |

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad, het voorstel van Klaas en de kennis van het leerplan. Na te kijken in het leerplan: of de verdeling over pakket 4 en 5 klopt (vooral de stelling over het aantal driehoeken en $2R$, nu alleen pakket 5), en of de oppervlakteformule $\tfrac12 ab\sin\gamma$ en de tangens op de raaklijn $x = 1$ in het leerplan staan.
- **LPD per hoofdstuk.** De leerkrachtenversie koppelt hoofdstuk 1 aan LPD 15 en hoofdstuk 2 aan LPD 16-17. Die verdeling is niet nagekeken in het leerplan.
- **Aansluiting bij de 3de graad.** Hoofdstuk 1 blijft in graden en tussen $0^\circ$ en $360^\circ$, met negatieve hoeken alleen bij de tegengestelde hoeken. Radialen, georiënteerde hoeken groter dan $360^\circ$ ($\theta + k \cdot 360^\circ$), grafieken en goniometrische vergelijkingen staan er niet in. De 3de graad (`Goniometrische functies`, hoofdstuk 1) bouwt de eenheidscirkel en de verwante hoeken opnieuw op in radialen, en zegt in de leerkrachtenversie dat leerlingen uit de 2de graad alleen de rechthoekige driehoek kennen. Dat klopt voor de pakketten zonder Goniometrie; voor leerlingen uit pakket 4-5 is dat deel van de 3de graad een herhaling in radialen. Misschien kan de leerkrachtentip daar dat vermelden.
- **Bewust opgenomen, misschien buiten het leerplan:** de tangens als snijpunt met de raaklijn $x = 1$ (uitleg, geen kader), het punt $(r\cos\alpha, r\sin\alpha)$ (eigen kader, nodig voor het probleem en voor het bewijs van de cosinusregel), het verband met de congruentiekenmerken, de projectieformule $a = b\cos\gamma + c\cos\beta$ (opdracht van niveau 3, beide pakketten), de parallellogramregel (opdracht van niveau 3), de driehoek 13-14-15 met oppervlakte 84, en de resultante van twee krachten (de opgave legt het parallellogram van krachten uit, zodat Vectoren geen voorkennis is).
- **Bewijzen.** Bewezen worden: de grondformule voor elke hoek, de vier soorten verwante hoeken (met een spiegeling), de oppervlakteformule, de sinusregel en de cosinusregel; in pakket 5 ook het aantal driehoeken en $2R$. Het bewijs van $2R$ in de tekst behandelt alleen een scherphoekige driehoek; het geval met een rechte of stompe hoek is opdracht (pakket 5), en steunt op het feit dat het midden van de schuine zijde even ver van de drie hoekpunten ligt (1ste graad). De stelling van de omtrekshoek is niet gebruikt: die hoort bij het keuzehandboek De cirkel.
- **Voorkennis.** Hoofdstuk 1 veronderstelt uit Driehoeksmeting de exacte waarden voor $30^\circ$, $45^\circ$ en $60^\circ$ en de complementaire hoeken (in Driehoeksmeting alleen pakket 4-5) en de grondformule. Hoofdstuk 2 gebruikt de afstand tussen twee punten met Pythagoras (Driehoeksmeting) en, in één uitleg, de congruentiekenmerken (1ste graad). Opdracht h2-o25 (pakket 5) gebruikt de discriminant uit Tweedegraadsfuncties: als die later komt, laat de opdracht dan weg of geef de oplossingsformule.
- **Hoeken in decimale graden.** Hoeken worden afgerond op $0{,}01^\circ$, zijden op twee decimalen, zoals in Driehoeksmeting. Leerlingen moeten verder rekenen met niet-afgeronde tussenwaarden.
- **Notatie en namen.** *Goniometrische cirkel* (niet eenheidscirkel), *beginbeen* en *eindbeen*, *verwante hoeken*, *antisupplementair*, *ingesloten hoek*, *het dubbelzinnige geval*. Kijk of dat de afspraken van de school zijn.
- **Getallen in contexten** zijn verzonnen: de windturbine (as 80~m, wiek 50~m), het reuzenrad, de zeilboot, de rivier, de tunnel, de toren, de zendmast, het dak, het meer, de schepen, het vliegtuig en de eilanden. Een voetbaldoel is wel echt 7,32~m breed.
- **Prenten.** Er staan geen prenten bij de opdrachten.

## Controle

Alle afgeronde getallen (hoeken, zijden, oppervlaktes, goniometrische getallen) in voorbeelden, korte oefeningen, Nu jij, opdrachten en test zijn nagerekend met Python; de exacte waarden met de hand. Bewijzen en uitlegvragen zijn niet nagerekend. Beide pakketten bouwen zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
