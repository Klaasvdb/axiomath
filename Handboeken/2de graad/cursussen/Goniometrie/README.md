# Goniometrie: bron

Bron van het handboek Meetkunde/Goniometrie van de 2de graad, voor pakket 4 (B+S) en pakket 5 (B+S''), volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Pakket 1-3 hebben dit handboek niet (hun leerplannen vragen geen goniometrie buiten de rechthoekige driehoek). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan de leerplannen van 2024 (24 november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. De goniometrische cirkel | `hoofdstukken/01-goniometrische-cirkel.tex` | 4-5 |
| 2. De sinusregel en de cosinusregel | `hoofdstukken/02-sinusregel-en-cosinusregel.tex` | 4-5 |

Hoofdstuk 1 breidt sinus, cosinus en tangens uit van scherpe hoeken tot georiënteerde hoeken, in graden: hoeken in een assenstelsel (beginbeen, eindbeen, draaizin, kwadranten, negatieve hoeken), meer dan een volle toer (hoekwaarden $\alpha + k \cdot 360^\circ$, met de hoekwaarde tussen $0^\circ$ en $360^\circ$ als vaste keuze), de goniometrische cirkel met $\cos\alpha = x_P$ en $\sin\alpha = y_P$, het punt $(r\cos\alpha, r\sin\alpha)$ op een cirkel met straal $r$, de tangens als quotiënt (met de raaklijn $x = 1$ als uitleg bij de naam) en de cotangens, het teken per kwadrant, de grondformule voor elke hoek (met bewijs), en de verwante hoeken: supplementair, antisupplementair, tegengesteld (ook als $360^\circ - \alpha$) en complementair, elk met een eigen kader, bewijs met een spiegeling, voorbeeld en korte oefening. Daarna herleiden naar het eerste kwadrant (met een cirkel met alle exacte coördinaten), uitdrukkingen vereenvoudigen met verwante hoeken, alle hoeken tussen $0^\circ$ en $360^\circ$ bij een gegeven sinus, cosinus of tangens, de hellingshoek van een rechte ($m = \tan\theta$), en een hoek in een driehoek (cosinus eenduidig, sinus twee kandidaten) als brug naar hoofdstuk 2. Probleem: hoe hoog is de punt van een wiek van een windturbine na $140^\circ$, en bij welke draaihoeken is ze 100~m hoog? De hoek van $140^\circ$ is die van het motief op de voorkant.

Hoofdstuk 2 gaat over willekeurige driehoeken, met de afspraak $a = \lengte{BC}$, $b = \lengte{CA}$, $c = \lengte{AB}$ en $\alpha$, $\beta$, $\gamma$ in $A$, $B$, $C$: de oppervlakte $\tfrac12 ab\sin\gamma$ (bewijs met scherpe, stompe en rechte hoek), de sinusregel (bewezen met de oppervlakteformule), twee hoeken en een zijde, het dubbelzinnige geval (twee, één of geen driehoek, met de passercirkel als verklaring), de cosinusregel (bewezen met coördinaten $C(b\cos\alpha, b\sin\alpha)$, zodat scherpe en stompe hoeken in één keer behandeld zijn), twee zijden en de ingesloten hoek, drie zijden (eerst de grootste hoek), een tabel "welke regel?" met het verband met de congruentiekenmerken, en toepassingen (rivier, tunnel, toren met twee hoogtehoeken; in de opdrachten ook een driehoek in een balk). Probleem: een zeilboot vaart 12~km, draait $50^\circ$ en vaart nog 7~km; hoe ver en in welke richting ligt de haven?

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`, vertrokken van die van Driehoeksmeting (2de graad) zonder de ruimtefiguren (`\balk`, `\draadbalk`, stijl `schuin`) en zonder `\gv`. Nieuw: `\gonicirkel` (goniometrische cirkel met assen, met `[t]` ook de getallen 1 en $-1$) en `\gonipunt{hoek}{label}{positie}` (straal, draaipijl en punt). De notatie volgt Driehoeksmeting: $\lengte{AB}$, $\hoek{A}$, $\sin^{-1}$, $\tan$ (niet tg).

## Aantallen

| | Korte oefeningen | Opdrachten (deelvragen) | Test (deelvragen) |
|---|---|---|---|
| Hoofdstuk 1, pakket 4 | 15 | 23 (105) | 7 (11) |
| Hoofdstuk 1, pakket 5 | 16 | 24 (109) | 7 (11) |
| Hoofdstuk 2, pakket 4 | 8 | 25 (67) | 7 (10) |
| Hoofdstuk 2, pakket 5 | 10 | 28 (76) | 7 (10) |

Daarbij per hoofdstuk een Opwarmer en een Verken, en in de zelfstudieversie vier (hoofdstuk 1) en drie (hoofdstuk 2) keer Nu jij.

## Leerplan

KOV, 2de graad D-finaliteit: II-WisS-d (pakket 4, versie oktober 2024) en II-WisS''-d (pakket 5, oktober 2024), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde. Rubriek 4.3.5 "Goniometrie" heeft in beide dezelfde doelen en wenken: LPD 15 (goniometrische getallen van georiënteerde hoeken met de goniometrische cirkel, een doel met "+", dat verder gaat dan de cesuurdoelen), LPD 16 (uitdrukkingen vereenvoudigen met de verbanden tussen verwante hoeken) en LPD 17 (de sinus- en cosinusregel). Pakket 5 heeft daarbij een extra (de formule van Heron met de cosinusregel) en B1 (bewijzen, met de grondformule en de sinus- en cosinusregel als voorbeelden). Het servicedocument voor 5 uur maakt verplicht: de tangens en de cotangens, het verband tussen de rico en de tangens van de hellingshoek, de bewijzen van de grondformule en van de sinus- en cosinusregel, en de soorten verwante hoeken (tegengestelde, supplementaire en complementaire). De leerplannen van pakket 1-3 (II-Wis-d, II-Wis'-d, II-WisS'-d) hebben geen rubriek Goniometrie: hun samenvattende tabel noemt "goniometrie (sinus- en cosinusregel, verwante hoeken)" uitdrukkelijk als extra van B+S.

| Hoofdstuk | 4 B+S | 5 B+S'' |
|---|---|---|
| 1. De goniometrische cirkel | LPD 15-16 | LPD 15-16 (bewijzen: B1) |
| 2. De sinusregel en de cosinusregel | LPD 17 | LPD 17 (bewijzen: B1, Heron: extra) |

Overal ook LPD 1-4 (fenomenen beschrijven, vraagstukken, ICT, redeneren).

## Verschillen per pakket

Beide pakketten hebben dezelfde twee hoofdstukken. Pakket 5 werkt dezelfde doelen met meer diepgang uit (zoals het leerplan B+S'' vraagt) en bewijst meer (B1); de verschillen staan in `\alleenvoor{5}` en `pakketten: [5]`.

| Onderdeel | 4 | 5 |
|---|---|---|
| Goniometrische cirkel, verwante hoeken (vier soorten, met bewijs), herleiden, hoeken bij een gegeven getal | x | x |
| Hoekwaarden $\alpha + k \cdot 360^\circ$ (subsectie, voorbeeld, korte oefening `h1-toeren`) | x | x |
| Cotangens (kader, voorbeeld, deelvraag in `h1-tan` en `h1-o2`) | x | x |
| Uitdrukkingen vereenvoudigen (subsectie, voorbeeld, werkwijze, Nu jij, korte oefening `h1-vereenvoudig`) | x | x |
| De hellingshoek van een rechte, $m = \tan\theta$ (subsectie, voorbeeld, korte oefening `h1-helling`, opdracht `h1-o24`) | x | x |
| Hoeken die $90^\circ$ verschillen: $\sin(90^\circ + \alpha) = \cos\alpha$, $\cos(90^\circ + \alpha) = -\sin\alpha$ (subsectie, bewijs, voorbeeld, korte oefening) | | x |
| Opdracht: identiteiten met verwante hoeken bewijzen | | x |
| Oppervlakteformule, sinusregel, cosinusregel (met bewijs), het dubbelzinnige geval met de werkwijze | x | x |
| Het aantal driehoeken bij twee zijden en een niet-ingesloten hoek volledig (stelling met tabel en bewijs met de passercirkel, voorbeeld, korte oefening) | | x |
| Sinusregel met de omgeschreven cirkel, $\tfrac{a}{\sin\alpha} = 2R$ (bewijs voor een scherphoekige driehoek met gelijkbenige driehoeken, voorbeeld, korte oefening) | | x |
| Opdracht: het bewijs van $2R$ afwerken voor een rechte en een stompe hoek | | x |
| Opdracht: het dubbelzinnige geval met de cosinusregel (vierkantsvergelijking in $c$) | | x |
| Opdracht: een driehoek in een balk (ruimtelijk probleem, `h2-o27`) | x | x |
| Opdracht: de formule van Heron bewijzen met de cosinusregel (`h2-o28`) | | x |

## Toetsing aan het leerplan (24 november 2026)

Wat het leerplan besliste en wat er veranderde:

- **Afbakening per pakket.** Goniometrie staat alleen in de leerplannen van pakket 4 en 5, met dezelfde doelen en wenken; pakket 1-3 vragen niets buiten de rechthoekige driehoek (LPD 11, Driehoeksmeting). De twee hoofdstukken blijven in beide pakketten.
- **LPD per hoofdstuk.** Hoofdstuk 1 is LPD 15 en 16 (de verwante hoeken en het vereenvoudigen zijn LPD 16), hoofdstuk 2 is LPD 17. De leerkrachtenversie zei "LPD 15" en "LPD 16-17" met "na te kijken"; dat is verbeterd, met de wenken die het hoofdstuk volgt, en B1 in pakket 5.
- **Georiënteerde hoeken met hoekwaarden $\alpha + k \cdot 360^\circ$** (wenk bij LPD 15, met de keuze van een representant in $[0^\circ, 360^\circ[$ of $]{-180^\circ}, 180^\circ]$). Het hoofdstuk bleef tussen $0^\circ$ en $360^\circ$ en schoof hoeken groter dan $360^\circ$ door naar de 3de graad. Nieuw: de term *georiënteerde hoek* in het eerste kader, een subsectie "Meer dan een volle toer" (kader met $\alpha + k \cdot 360^\circ$, voorbeeld `vb:h1-toeren` met $1000^\circ$, werkwijze, korte oefening `h1-toeren`), een zin dat hoeken met hetzelfde eindbeen dezelfde goniometrische getallen hebben, en $\sin 500^\circ$ in `h1-o2`. De representant is $[0^\circ, 360^\circ[$; de leerkrachtenversie noemt de andere keuze.
- **Cotangens** (wenk bij LPD 15, verplicht in het servicedocument voor 5 uur). Nieuw in beide pakketten: kader met $\cot\alpha = \frac{\cos\alpha}{\sin\alpha}$, uitleg ($\frac{1}{\tan\alpha}$, geen toets op de rekenmachine), voorbeeld `vb:h1-cot`, het teken, $\tan(90^\circ - \alpha) = \cot\alpha$ bij de complementaire hoeken, en deelvragen in `h1-tan` en `h1-o2`.
- **Rico en tangens van de hellingshoek** (wenk bij LPD 15, verplicht voor 5 uur). Het boek noemde de tangens alleen als rico van de rechte $OP$. Nieuw: subsectie "De hellingshoek van een rechte" (kader met $0^\circ \leqslant \theta < 180^\circ$ en $m = \tan\theta$, voorbeeld `vb:h1-helling`, werkwijze, korte oefening `h1-helling`) en opdracht `h1-o24`, in beide pakketten. Ze staat na "Een hoek berekenen", omdat ze een hoek bij een gegeven tangens zoekt.
- **Uitdrukkingen vereenvoudigen** (LPD 16 zelf). Er waren een opdracht (`h1-o9`) en een testvraag (`h1-t5`), maar geen voorbeeld. Nieuw: subsectie "Uitdrukkingen vereenvoudigen" met voorbeeld `vb:h1-vereenvoudig`, werkwijze (met controle door een hoek in te vullen), Nu jij en korte oefening `h1-vereenvoudig`. Het herhaalschema van `h1-t5` verwijst nu daarnaar in plaats van naar `vb:h1-suppl` en `h1-o9`.
- **Niet van buiten leren** (wenk bij LPD 16): de inleiding van de verwante hoeken zegt nu dat de formules uit de kaders met een schets terug te vinden zijn. De kaders blijven, als formuleblad.
- **Formules die volgen uit de grondformule** (wenk bij LPD 16): uit één getal de andere berekenen stond er al (`vb:h1-grond`); `h1-o9` kreeg een deelvraag met $1 + \tan^2\alpha$.
- **Soorten verwante hoeken.** Het servicedocument voor 5 uur noemt tegengestelde, supplementaire en complementaire hoeken. Het boek heeft ze, plus antisupplementaire hoeken (beide pakketten) en hoeken die $90^\circ$ verschillen (pakket 5). Die blijven: ze zijn nodig voor het herleiden en voor de tangens.
- **Ruimtelijke problemen** (wenk bij LPD 17). Er stond geen ruimtelijk probleem in. Nieuw: opdracht `h2-o27` (de driehoek van drie diagonalen van zijvlakken in een balk van 6 bij 4 bij 3), in beide pakketten.
- **De formule van Heron** (extra bij LPD 17, alleen in II-WisS''-d; niet verplicht in het servicedocument). Nieuw: opdracht `h2-o28` van niveau 3 in pakket 5, een bewijs in stappen met de cosinusregel en de controle met de driehoek 13-14-15 uit `h2-o21`.
- **De cosinusregel als veralgemening van Pythagoras** en **de twee mogelijkheden bij de sinusregel** (tekening, congruentiekenmerken, supplementaire hoeken) stonden er al, zoals de wenken vragen.
- **Bewijzen.** De grondformule, de sinusregel en de cosinusregel worden in beide pakketten bewezen: het servicedocument maakt die bewijzen verplicht voor 5 uur (B1), en in pakket 4 noemt de extra bij LPD 4 ze als bewijzen die leerlingen kunnen reconstrueren. De bewijsopdrachten blijven in pakket 5.

Wat open blijft (het leerplan beslist het niet):

- **De sinusregel met de omgeschreven cirkel ($2R$)** (pakket 5, met bewijs, korte oefening en opdracht `h2-o24`) vraagt het leerplan niet. Ze blijft als verdieping (pakket 5 realiseert de doelen "met meer diepgang", en het bewijs past bij B1); de leerkrachtenversie zegt dat je ze kunt overslaan. De stelling van de omtrekshoek is niet gebruikt: die hoort bij het keuzedeel De cirkel (K1).
- **Het aantal driehoeken bij twee zijden en een niet-ingesloten hoek** (pakket 5, stelling met bewijs) werkt de wenk bij LPD 17 over de twee mogelijkheden verder uit. Pakket 4 houdt de werkwijze met het dubbelzinnige geval.
- **Bewust opgenomen, buiten de wenken:** de oppervlakteformule $\tfrac12 ab\sin\gamma$ (het kortste bewijs van de sinusregel, en nodig voor Heron), de tangens als snijpunt met de raaklijn $x = 1$ (uitleg, geen kader), het punt $(r\cos\alpha, r\sin\alpha)$ (eigen kader, nodig voor het probleem en voor het bewijs van de cosinusregel), de projectieformule $a = b\cos\gamma + c\cos\beta$ (opdracht van niveau 3, beide pakketten), de parallellogramregel (opdracht van niveau 3), en de resultante van twee krachten (de opgave legt het parallellogram van krachten uit, zodat Vectoren geen voorkennis is).
- **Aansluiting bij de 3de graad.** De leerplannen van de 3de graad (III-WisS-d, III-WisS'-d) noemen als voorkennis uit de 2de graad LPD 11, 15 en 16 van II-WisS-d: de goniometrische cirkel, georiënteerde hoeken en de verwante hoeken, en zeggen dat radialen in de 2de graad niet aan bod komen, en dat niet alle richtingen de cirkel en de verwante hoeken zagen. Dit boek blijft dus in graden. De 3de graad (`Goniometrische functies`, hoofdstuk 1) mag van leerlingen uit pakket 4-5 veronderstellen: de goniometrische cirkel in graden met sinus, cosinus, tangens en cotangens, het teken per kwadrant, de grondformule, de hoekwaarden $\alpha + k \cdot 360^\circ$, de verwante hoeken met vereenvoudigen, en de hellingshoek. De leerkrachtentip daar zegt nog dat "hoeken groter dan $360^\circ$" ook voor hen nieuw zijn: dat klopt niet meer (te melden aan wie de 3de graad onderhoudt). De cotangens komt in de 3de graad niet terug.
- **Voorkennis.** Hoofdstuk 1 veronderstelt uit Driehoeksmeting de exacte waarden voor $30^\circ$, $45^\circ$ en $60^\circ$ en de complementaire hoeken (in Driehoeksmeting alleen pakket 4-5) en de grondformule, en uit Functies de richtingscoëfficiënt. Hoofdstuk 2 gebruikt de afstand tussen twee punten en Pythagoras in de ruimte (Driehoeksmeting) en, in één uitleg, de congruentiekenmerken (1ste graad). Opdracht `h2-o25` (pakket 5) gebruikt de discriminant uit Tweedegraadsfuncties, en `h2-o28` het ontbinden van een verschil van twee kwadraten: beide vallen volgens de README van de 2de graad in hetzelfde 4de jaar. Komt Tweedegraadsfuncties later, laat `h2-o25` dan weg of geef de oplossingsformule.
- **Hoeken in decimale graden.** Hoeken worden afgerond op $0{,}01^\circ$, zijden op twee decimalen, zoals in Driehoeksmeting (die ook graden, minuten en seconden uitlegt). Leerlingen moeten verder rekenen met niet-afgeronde tussenwaarden.
- **Notatie en namen.** *Goniometrische cirkel* (niet eenheidscirkel), *georiënteerde hoek*, *hoekwaarde*, *beginbeen* en *eindbeen*, *verwante hoeken*, *antisupplementair*, *hellingshoek* $\theta$, $\cot$ voor de cotangens, *ingesloten hoek*, *het dubbelzinnige geval*. Kijk of dat de afspraken van de school zijn.
- **Getallen in contexten** zijn verzonnen: de windturbine (as 80~m, wiek 50~m), het reuzenrad, de zeilboot, de rivier, de tunnel, de toren, de zendmast, het dak, het meer, de schepen, het vliegtuig, de eilanden en de balk. Een voetbaldoel is wel echt 7,32~m breed.
- **Prenten.** Er staan geen prenten bij de opdrachten.
- **Opmaak.** In pakket 5 staat het schema Fout? Herhaal van hoofdstuk 2 alleen op de laatste pagina, omdat de opdrachten en de test de pagina ervoor vullen.

## Controle

Alle afgeronde getallen (hoeken, zijden, oppervlaktes, goniometrische getallen) in voorbeelden, korte oefeningen, Nu jij, opdrachten en test zijn nagerekend met Python; de exacte waarden met de hand. De nieuwe getallen van de toetsing (cotangens, hoekwaarden, hellingshoeken, de vereenvoudigingen, de balk, de stappen van het bewijs van Heron) met SymPy. Bewijzen en uitlegvragen zijn verder niet nagerekend. Beide pakketten bouwen zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
