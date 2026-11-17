# Vectoren: bron

Bron van het handboek Meetkunde/Vectoren van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Vectoren tekenen | `hoofdstukken/01-som-en-veelvoud.tex` | 1-5 |
| 2. Rekenen met vectoren | `hoofdstukken/02-componenten.tex` | 4-5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`:

- `\vect{v}` en `\vect{AB}`: een vector, altijd met dezelfde pijl erboven (`\overrightarrow`); `\nulvec` voor de nulvector; `\norm{\vect{v}}` voor de norm; `\vc{4}{-3}` voor de componenten $(4, -3)$ (de accolades houden een minteken bij het getal, en de komma is geen decimale komma).
- TikZ-stijlen voor pijlen: `vector` (gegeven vector, kleur van het hoofdstuk), `vectorb` (tweede gegeven vector, donker), `som` (de uitkomst, dik), `hulpvector` (verschoven kopie, grijs gestreept) en `hulplijn`. Zo verschillen ze ook in zwart-wit.
- `\ruitjes` (rooster zonder assen, 5 mm-hokjes bij `scale=.5`), `\rooster` en `\roosterleeg` met `\xgetallen` en `\ygetallen` (rooster met assen, uit Functies), `\punt`, `\rechtehoek`, `\hoekboog`, `\hoeklabel` (zonder de bibliotheek `quotes`, die botst met de aanhalingstekens van babel), en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Driehoeksmeting.

## Opbouw

**Hoofdstuk 1** (probleem: waar komt een kajak aan die een stromende rivier oversteekt?) werkt alles met pijlen op een rooster of op schaal, zonder componenten: een pijl beschrijven we in woorden (*3 hokjes naar rechts en 1 omhoog*). Vector als verschuiving, richting, zin en grootte, gelijke vectoren en het parallellogram, tegengestelde vector en nulvector, de kop-staartregel, de betrekking van Chasles, de parallellogramregel, de som is commutatief, het verschil (ook vanuit één punt: $\vect{OB} - \vect{OA} = \vect{AB}$), het veelvoud, evenwijdige vectoren en het midden, haakjes uitwerken, en toepassingen: krachten samenstellen (resultante, evenwicht) en snelheden samenstellen (rolpad, kajak).

**Hoofdstuk 2** (probleem: welk deel van de trekkracht op een slee trekt ze vooruit?) maakt er getallen van: componenten in een assenstelsel, de vector tussen twee punten (*eindpunt min beginpunt*), som, veelvoud en vergelijkingen met componenten, het midden van een lijnstuk, de norm en de afstand tussen twee punten, ontbinden volgens twee richtingen (grafisch en met een stelsel) en volgens de assen (met cosinus en sinus van een scherpe hoek), krachten ontbinden (slee, helling) en de resultante berekenen met componenten. Het legt de basis voor Analytische meetkunde in pakket 5, zonder het inproduct.

## Verschillen per pakket

De verschillen staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Hoofdstuk 1: vectoren tekenen, som, verschil, veelvoud, krachten en snelheden | x | x | x | x | x |
| Hoofdstuk 1: een eigenschap bewijzen met vectoren (de middenparallel) en twee bewijsopdrachten (de middens van een vierhoek, de diagonalen van een parallellogram) | | | | x | x |
| Hoofdstuk 2: componenten, norm, ontbinden (LPD 14) | | | | x | x |
| Hoofdstuk 2: evenwijdige vectoren en collineaire punten met componenten (subsectie, korte oefening, twee opdrachten, testvraag 8) | | | | | x |

Pakket 4 krijgt in hoofdstuk 2 een andere testvraag 8 (het vierde hoekpunt van een parallellogram) met hetzelfde id; het schema Fout? Herhaal kiest het juiste voorbeeld met `\alleenvoor`.

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad (hoofdstuk 2 alleen in pakket 4-5) en de kennis van het leerplan. Gekozen: pakket 1-3 krijgen alleen hoofdstuk 1, een handboek van één hoofdstuk. Na te kijken in het leerplan: of LPD 13 in pakket 1-3 ook componenten in een assenstelsel of de norm vraagt (dan kan een korte versie van hoofdstuk 2 met `\alleenvoor` erbij), en of het ontbinden van krachten echt alleen in LPD 14 (pakket 4-5) staat.
- **LPD per hoofdstuk.** De leerkrachtenversie zegt "LPD 13" bij hoofdstuk 1 en "LPD 14, samen met het rekenen uit LPD 13" bij hoofdstuk 2. Welk doel precies de componenten en de norm dekt, is niet nagekeken.
- **Bewust opgenomen, misschien buiten het leerplan:** de betrekking van Chasles (met naam), het verschil vanuit één punt, haakjes uitwerken $k(\vect{u} + \vect{v}) = k\vect{u} + k\vect{v}$, het bewijs van de middenparallel (pakket 4-5), het midden van een lijnstuk met componenten (pakket 4-5; misschien hoort het bij Analytische meetkunde), ontbinden met een stelsel (pakket 4-5, voorkennis Stelsels), een kracht op een helling ontbinden, de resultante berekenen met componenten, en als opdrachten de eenheidsvector en een vector een kwartslag draaien (een vierkant construeren).
- **Weggelaten:** het inproduct (komt in Analytische meetkunde), de notatie met eenheidsvectoren $\vect{e}_x$, $\vect{e}_y$, kolomvectoren, en hoeken groter dan $90^\circ$: Driehoeksmeting kent alleen sinus en cosinus van een scherpe hoek, dus wijst een vector naar links of naar beneden, dan nemen we de scherpe hoek met de horizontale en het teken uit de figuur.
- **Notatie.** Een pijl erboven voor elke vector, ook bij één letter (`\overrightarrow`, zoals `\vect{AB}`). De nulvector is $\vect{0}$, zoals in Ruimtemeetkunde van de 3de graad; sommige Vlaamse boeken schrijven $\vec{o}$ (aan te passen in `\nulvec`). Componenten als rij $(v_x, v_y)$. Het woord *componenten* staat zowel voor de getallen $v_x$ en $v_y$ als voor de twee vectoren bij het ontbinden; hoofdstuk 2 legt het verband uit (ontbinden volgens de assen geeft $(v_x, 0)$ en $(0, v_y)$).
- **Fysica.** De contexten (resultante, evenwicht, helling met $F_{\parallel}$ en $F_{\perp}$, kabelkrachten, wind op een zeil, snelheden op een rivier) zijn vereenvoudigd: geen wrijving, geen stroming die verandert. Na te kijken of de notatie aansluit bij de fysicalessen van de school.
- **Aantallen.** Hoofdstuk 1 heeft 13 korte oefeningen, iets meer dan de richtwaarde 7-10, omdat elk nieuw begrip (gelijk, tegengesteld, kop-staart, Chasles, parallellogram, verschil, veelvoud, krachten, snelheden) er een kreeg.
- Tekenopgaven hebben als kort antwoord de beschrijving in hokjes (*4 rechts, 2 omlaag*); de uitgewerkte oplossingen tonen voor de meeste ook een kleine figuur.

## Controle

De uitkomsten zijn nagerekend: de afgeronde getallen (sinus, cosinus, tangens, normen, resultanten) met Python, de rest met de hand. De figuren op een rooster zijn nageteld tegen de antwoorden. Bewijzen en uitlegvragen zijn niet nagerekend. Alle vijf pakketten bouwen zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
