# Vectoren: bron

Bron van het handboek Meetkunde/Vectoren van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan de leerplannen van 2024 (zie hieronder), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Vectoren tekenen | `hoofdstukken/01-som-en-veelvoud.tex` | 1-5 |
| 2. Rekenen met vectoren | `hoofdstukken/02-componenten.tex` | 4-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`:

- `\vect{v}` en `\vect{AB}`: een vector, altijd met dezelfde pijl erboven (`\overrightarrow`); `\nulvec` voor de nulvector; `\norm{\vect{v}}` voor de norm; `\vc{4}{-3}` voor de componenten $(4, -3)$ (de accolades houden een minteken bij het getal, en de komma is geen decimale komma).
- TikZ-stijlen voor pijlen: `vector` (gegeven vector, kleur van het hoofdstuk), `vectorb` (tweede gegeven vector, donker), `som` (de uitkomst, dik), `hulpvector` (verschoven kopie, grijs gestreept) en `hulplijn`. Zo verschillen ze ook in zwart-wit.
- `\ruitjes` (rooster zonder assen, 5 mm-hokjes bij `scale=.5`), `\rooster` en `\roosterleeg` met `\xgetallen` en `\ygetallen` (rooster met assen, uit Functies), `\punt`, `\rechtehoek`, `\hoekboog`, `\hoeklabel` (zonder de bibliotheek `quotes`, die botst met de aanhalingstekens van babel), en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Driehoeksmeting.

## Opbouw

**Hoofdstuk 1** (probleem: waar komt een kajak aan die een stromende rivier oversteekt?) werkt alles met pijlen op een rooster of op schaal, zonder componenten: een pijl beschrijven we in woorden (*3 hokjes naar rechts en 1 omhoog*). Vector als verschuiving, richting, zin en grootte, gelijke vectoren en het parallellogram, tegengestelde vector en nulvector, de kop-staartregel, de betrekking van Chasles, de parallellogramregel, de som is commutatief, het verschil (ook vanuit één punt: $\vect{OB} - \vect{OA} = \vect{AB}$), het veelvoud, evenwijdige vectoren en het midden, haakjes uitwerken en vereenvoudigen (alleen pakket 4-5), en toepassingen: krachten samenstellen (resultante, evenwicht, met het aangrijpingspunt en de notatie in de fysica) en snelheden samenstellen (rolpad, kajak).

**Hoofdstuk 2** (probleem: welk deel van de trekkracht op een slee trekt ze vooruit?) maakt er getallen van: componenten in een assenstelsel, de vector tussen twee punten (*eindpunt min beginpunt*), som, veelvoud en vergelijkingen met componenten, het midden van een lijnstuk, het zwaartepunt van een driehoek (pakket 5), de norm en de afstand tussen twee punten (de formule komt uit Driehoeksmeting; hier is ze de norm van $\vect{AB}$), ontbinden volgens twee richtingen (grafisch en met een stelsel) en volgens de assen (met cosinus en sinus van een scherpe hoek), krachten ontbinden (slee, helling) en de resultante berekenen met componenten. Het legt de basis voor Analytische meetkunde in pakket 5, zonder het inproduct.

## Leerplan

KOV, 2de graad D-finaliteit: II-Wis-d (pakket 1, versie oktober 2024), II-Wis'-d (pakket 2, oktober 2024), II-WisS'-d (pakket 3, juni 2024), II-WisS-d (pakket 4, oktober 2024) en II-WisS''-d (pakket 5, oktober 2024), met voor pakket 5 ook het servicedocument voor 5 uur wiskunde. Rubriek 4.3.4 "Vectoren" heeft in alle vijf LPD 13 (de som en het veelvoud tekenen), met dezelfde wenken: de nulvector en de tegengestelde vector, en het vectormodel voor kracht, verplaatsing en snelheid (geen aparte studie van de fysica; andere vakken noteren soms anders, soms telt het aangrijpingspunt). Alleen pakket 4 en 5 hebben LPD 14 (rekenen met vectoren in het vlak: optelling en scalaire vermenigvuldiging, de norm, ontbinden in componenten), met de wenk coördinaten in een orthonormaal assenstelsel. Meetkundige objecten beschrijven met vectoren (het midden van een lijnstuk, het zwaartepunt van een driehoek) is in pakket 4 een extra en in pakket 5 een wenk. Het overzicht in rubriek 3.4.2 noemt "rekenen met vectoren" uitdrukkelijk als iets wat B+S meer heeft dan B+S'. Het servicedocument voor 5 uur maakt de nulvector, de tegengestelde vector en de coördinaten in een orthonormaal assenstelsel verplicht. Het inproduct en de vergelijkingen van rechten (B2-B5) horen bij Analytische meetkunde, de bewijzen bij B1.

| Hoofdstuk | 1 Basis | 2 B+ | 3 B+S' | 4 B+S | 5 B+S'' |
|---|---|---|---|---|---|
| 1. Vectoren tekenen | LPD 13 | LPD 13 | LPD 13 | LPD 13; haakjes en bewijzen: LPD 14 (en 4) | LPD 13; haakjes en bewijzen: LPD 14 (en B1) |
| 2. Rekenen met vectoren | | | | LPD 14 | LPD 14 (en voorbereiding op B3-B4) |

Overal ook LPD 1-4 (fenomenen beschrijven, vraagstukken, ICT, redeneren). De resultante sluit aan bij de natuurwetenschappen (samenhang in het leerplan).

## Verschillen per pakket

De verschillen staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Hoofdstuk 1: vectoren tekenen, som, verschil (ook vanuit één punt), Chasles, veelvoud, krachten (met aangrijpingspunt) en snelheden | x | x | x | x | x |
| Hoofdstuk 1: haakjes uitwerken en vereenvoudigen (kader, voorbeeld, korte oefening `h1-haakjes`, opdracht `h1-o6`, testvraag 6) | | | | x | x |
| Hoofdstuk 1: testvraag 6 over snelheden (een zwemster in een rivier), met hetzelfde id `h1-t6` | x | x | x | | |
| Hoofdstuk 1: een eigenschap bewijzen met vectoren (de middenparallel) en twee bewijsopdrachten (de middens van een vierhoek, de diagonalen van een parallellogram) | | | | x | x |
| Hoofdstuk 2: componenten, rekenen, midden, norm, afstand, ontbinden (LPD 14) | | | | x | x |
| Hoofdstuk 2: het zwaartepunt van een driehoek (subsectie met bewijs, voorbeeld, korte oefening `h2-zwaartepunt`) | | | | | x |
| Hoofdstuk 2: evenwijdige vectoren en collineaire punten met componenten (subsectie, korte oefening, twee opdrachten, testvraag 8) | | | | | x |

Pakket 4 krijgt in hoofdstuk 2 een andere testvraag 8 (het vierde hoekpunt van een parallellogram) met hetzelfde id, en pakket 1-3 in hoofdstuk 1 een andere testvraag 6. Het schema Fout? Herhaal kiest telkens het juiste voorbeeld met `\alleenvoor`.

## Aantallen

| | Korte oefeningen (deelvragen) | Opdrachten | Test (deelvragen) |
|---|---|---|---|
| Hoofdstuk 1, pakket 1-3 | 13 (49) | 21 | 7 (17) |
| Hoofdstuk 1, pakket 4-5 | 14 (53) | 24 | 7 (17) |
| Hoofdstuk 2, pakket 4 | 9 (39) | 22 | 8 |
| Hoofdstuk 2, pakket 5 | 11 (46) | 24 | 8 |

Daarbij per hoofdstuk een Opwarmer en een Verken. Hoofdstuk 1 heeft iets meer korte oefeningen dan de richtwaarde 7-10, omdat elk nieuw begrip (gelijk, tegengesteld, kop-staart, Chasles, parallellogram, verschil, veelvoud, krachten, snelheden) er een kreeg.

## Toetsing aan het leerplan (24 november 2026)

Wat het leerplan besliste en wat er veranderde:

- **Afbakening.** LPD 13 (alle pakketten) vraagt tekenen; componenten, de norm en ontbinden staan in LPD 14, dat alleen pakket 4-5 hebben. Pakket 1-3 krijgen dus terecht alleen hoofdstuk 1, en het ontbinden van krachten blijft in pakket 4-5. Geen verandering in `handboek.tex`.
- **Rekenen met vectoren in pakket 1-3.** Haakjes uitwerken ($k(\vect{u} + \vect{v}) = k\vect{u} + k\vect{v}$) en uitdrukkingen vereenvoudigen zijn rekenen met vectoren (LPD 14; rubriek 3.4.2 noemt het als verschil tussen B+S en B+S'). Ze staan nu alleen in pakket 4-5: het kader, het voorbeeld `vb:h1-vereenvoudig`, een nieuwe korte oefening `h1-haakjes` (de twee vereenvoudig-deelvragen die in `h1-combi` stonden, en twee nieuwe), opdracht `h1-o6` en testvraag `h1-t6`. Pakket 1-3 krijgen een andere testvraag 6 over snelheden (wenk bij LPD 13), met het schema naar het voorbeeld van de kajak. Het tekenen van $2\vect{u} - \vect{v}$ blijft voor iedereen (LPD 13).
- **Chasles en het verschil vanuit één punt** blijven in alle pakketten: het zijn de kop-staartregel en het verschil (wenk bij LPD 13) met letters, zonder te rekenen.
- **Aangrijpingspunt en notatie** (wenk bij LPD 13). Nieuwe alinea in "Krachten en snelheden": een kracht teken je vanuit haar aangrijpingspunt, en de fysica noteert soms anders ($\mathbf{F}$, en $F$ voor de grootte). Er komt geen aparte studie van de fysica bij.
- **LPD per hoofdstuk.** Hoofdstuk 2 is LPD 14: de bewerkingen met componenten horen bij LPD 14 zelf, niet bij LPD 13. De zin "de verdeling is na te kijken" is weg. In hoofdstuk 1 zegt de leerkrachtenversie van pakket 4-5 dat haakjes uitwerken en de bewijzen bij LPD 14 horen (met LPD 4, en B1 in pakket 5), en in pakket 1-3 dat rekenen met vectoren er niet in staat.
- **Orthonormaal assenstelsel** (wenk bij LPD 14, verplicht in het servicedocument). Hoofdstuk 2 zegt nu dat we altijd in een orthonormaal assenstelsel werken, en waarom (Pythagoras voor de norm).
- **Midden en zwaartepunt.** Het midden van een lijnstuk blijft in pakket 4-5 (extra in pakket 4, kort en gebruikt in de opdrachten; wenk in pakket 5). Het zwaartepunt van een driehoek is nieuw in pakket 5 (wenk bij LPD 14; B3 vraagt later de vergelijking van een zwaartelijn): kader, een kort bewijs met componenten dat het gemiddelde van de hoekpunten op elke zwaartelijn op twee derde ligt, een voorbeeld en een korte oefening. In pakket 4 is het een extra die we weglaten.
- **Afstand tussen twee punten.** De formule staat nu in Driehoeksmeting voor alle pakketten (wenk bij LPD 10). Hoofdstuk 2 leidt ze niet opnieuw af: de tekst zegt dat ze uit Driehoeksmeting komt, en dat de verschillen onder het wortelteken de componenten van $\vect{AB}$ zijn. Het kader blijft, als de norm van $\vect{AB}$.
- **Ontbinden.** Het leerplan zegt "ontbinding van een vector in zijn componenten", zonder de richtingen te beperken. Ontbinden volgens de assen (met cosinus en sinus) en volgens twee richtingen (grafisch en met een stelsel; de helling heeft het nodig) blijven in pakket 4-5.
- **Evenwijdige vectoren en collineaire punten** (pakket 5): LPD 14 vraagt ze niet uitdrukkelijk, maar B4 gebruikt richtingsvectoren voor evenwijdige rechten. Ze blijven als voorbereiding op Analytische meetkunde.
- **Inproduct.** Hoort bij B2 (Analytische meetkunde, pakket 5), zoals het al was.
- **Het bewijs van de middenparallel en de bewijsopdrachten** blijven in pakket 4-5: rekenen met vectoren (LPD 14) en redeneren (LPD 4), in pakket 5 ook B1.

Wat open blijft (het leerplan beslist het niet):

- **Bewust opgenomen:** de betrekking van Chasles met naam, het verschil vanuit één punt, ontbinden met een stelsel (voorkennis Stelsels), een kracht op een helling, de resultante berekenen met componenten, en als opdrachten de eenheidsvector en een vector een kwartslag draaien (een vierkant construeren).
- **Weggelaten:** de notatie met eenheidsvectoren $\vect{e}_x$, $\vect{e}_y$, kolomvectoren, en hoeken groter dan $90^\circ$: Driehoeksmeting kent alleen sinus en cosinus van een scherpe hoek, dus wijst een vector naar links of naar beneden, dan nemen we de scherpe hoek met de horizontale en het teken uit de figuur. Pakket 4-5 zien de goniometrische cirkel in Goniometrie (LPD 15); wie die eerst doet, kan $v_x = \norm{\vect{v}}\cos\alpha$ voor elke hoek gebruiken. Dat hangt af van de volgorde van de school.
- **Notatie.** Een pijl erboven voor elke vector, ook bij één letter (`\overrightarrow`, zoals `\vect{AB}`). De nulvector is $\vect{0}$, zoals in Ruimtemeetkunde van de 3de graad; sommige Vlaamse boeken schrijven $\vec{o}$ (aan te passen in `\nulvec`). Componenten als rij $(v_x, v_y)$. Het woord *componenten* staat zowel voor de getallen $v_x$ en $v_y$ als voor de twee vectoren bij het ontbinden; hoofdstuk 2 legt het verband uit.
- **Fysica.** De contexten (resultante, evenwicht, helling met $F_{\parallel}$ en $F_{\perp}$, kabelkrachten, wind op een zeil, snelheden op een rivier) zijn vereenvoudigd: geen wrijving, geen stroming die verandert. Na te kijken of de notatie aansluit bij de fysicalessen van de school.
- **Volgorde.** Hoofdstuk 2 veronderstelt de afstandsformule en sinus, cosinus en tangens (Driehoeksmeting) en stelsels (Stelsels); het zwaartepunt (pakket 5) de zwaartelijnen uit de 1ste graad.
- Tekenopgaven hebben als kort antwoord de beschrijving in hokjes (*4 rechts, 2 omlaag*); de uitgewerkte oplossingen tonen voor de meeste ook een kleine figuur.

## Controle

De uitkomsten zijn nagerekend: de afgeronde getallen (sinus, cosinus, tangens, normen, resultanten) met Python, de rest met de hand; de nieuwe getallen van de toetsing (de zwaartepunten, de zwemster met $\sqrt{1{,}69} = 1{,}3$) met SymPy. De figuren op een rooster zijn nageteld tegen de antwoorden. Bewijzen en uitlegvragen zijn niet nagerekend. Alle vijf pakketten bouwen zonder fouten (geen `undefined`, geen Overfull groter dan 2pt), en de PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
