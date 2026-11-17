# Analytische meetkunde: bron

Bron van het handboek Meetkunde/Analytische meetkunde van de 2de graad, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Het handboek staat alleen in pakket 5 (B+S''), leerplandoelen B2-B5; er is dus geen `\alleenvoor` nodig. Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Vergelijkingen van een rechte | `hoofdstukken/01-rechten.tex` | 5 |
| 2. Inproduct, afstand en hoek | `hoofdstukken/02-inproduct.tex` | 5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`. Vertrekpunt is `notatie.tex` van Vectoren (2de graad), zodat de notatie gelijk blijft:

- `\vect{u}`, `\vect{AB}`, `\nulvec`, `\norm{\vect{v}}`, `\vc{4}{-3}` en de TikZ-stijlen `vector`, `vectorb`, `som`, `hulpvector`, `hulplijn`, uit Vectoren;
- `\rooster`, `\roosterleeg`, `\xgetallen`, `\ygetallen`, `\ruitjes`, `\punt`, `\rechtehoekxy`, `\naast`, `\figuren`, `metgrafiek`, `stappenvrij`, uit Vectoren;
- nieuw of uit Stelsels: `\R`, `\stelsel{..}{..}` (twee vergelijkingen met accolade), `\pv{1 + 2r}{3 - r}` (een parametervoorstelling), `\rechte` ($y = mx + q$), `\rechteabc` ($ax + by = c$), `\verticaal`, `\rechtepv` (een rechte met punt en richtingsvector, van $r_{\min}$ tot $r_{\max}$), `\knip` (rechten afknippen aan de rand van het rooster), de stijl `tweede` en `\trapje`.

## Inhoud

1. **Vergelijkingen van een rechte.** Probleem: een veerboot en een zeilboot vertrekken tegelijk; kruisen hun koersen, en botsen ze? Richtingsvector; vectorvergelijking $\vect{OP} = \vect{OA} + r\,\vect{u}$ (met een kort bewijs uit de evenwijdige vectoren van Vectoren); parametervoorstelling, een punt op de rechte, één rechte met veel parametervoorstellingen, een lijnstuk ($0 \leqslant r \leqslant 1$); de cartesiaanse vergelijking $ax + by = c$ (herhaling uit Stelsels), van parametervoorstelling naar cartesiaanse vergelijking, richtingsvector en rico ($m = \frac{u_y}{u_x}$, richtingsvector $(1, m)$), richtingsvector $(b, -a)$ uit $ax + by = c$ (met bewijs), een overzicht van de vier vormen; onderlinge ligging met richtingsvectoren (ook met een verticale rechte), het snijpunt in drie gevallen, met de waarschuwing voor dezelfde letter; Terug naar het probleem (de koersen kruisen in $(6, 4)$, maar de boten zijn daar 10 minuten na elkaar).
2. **Inproduct, afstand en hoek.** Probleem: een schipper wil vanaf zijn zeilboot zo snel mogelijk naar de kade roeien. Loodrechte vectoren met Pythagoras, het inproduct met componenten, de stelling over loodrechte vectoren (bewijs met Pythagoras en de omgekeerde stelling), een kwartslag $(-b, a)$; $\vect{u} \cdot \vect{u} = \norm{\vect{u}}^2$; de hoek tussen twee vectoren en $\vect{u} \cdot \vect{v} = \norm{\vect{u}}\,\norm{\vect{v}}\cos\theta$ (bewijs met de cosinusregel); loodrechte rechten met richtingsvectoren en met de rico ($m_1 m_2 = -1$, met bewijs); de normaalvector $(a, b)$ en de vergelijking $a(x - x_0) + b(y - y_0) = 0$ (met bewijs), de middelloodlijn; het voetpunt van de loodlijn en Terug naar het probleem; de afstand van een punt tot een rechte (waarom de loodlijn de kortste weg is, de formule met bewijs), de afstand tussen evenwijdige rechten; de hoek tussen twee rechten (de scherpe hoek, met de absolute waarde, bewijs met supplementaire hoeken), ook met normaalvectoren.

## Aantallen

| Hoofdstuk | Opdrachten (deelvragen) | Niveau 1/2/3 | Korte oefeningen | Testvragen |
|---|---|---|---|---|
| 1 | 24 (102) | 8/11/5 | 9 | 8 |
| 2 | 25 (89) | 8/13/4 | 8 | 8 |

Het handboek telt 44 pagina's (leerkrachtenversie 47, zelfstudie 48, numerieke oplossingen 4, uitgewerkte oplossingen 14).

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad en de kennis van het leerplan. De verdeling over de doelen is een gok: hoofdstuk 1 zegt "LPD B2-B3", hoofdstuk 2 "LPD B4-B5". Na te kijken in het leerplan.
- **Voorkennis Goniometrie.** Hoofdstuk 2 gebruikt de cosinus van een stompe hoek, supplementaire hoeken en de cosinusregel uit het handboek Goniometrie (ook 4de jaar). Komt Goniometrie later, dan moet het bewijs van $\vect{u} \cdot \vect{v} = \norm{\vect{u}}\,\norm{\vect{v}}\cos\theta$ weg en blijven de hoeken scherp; de leerkrachtenversie zegt dat. De hoek tussen twee rechten heeft alleen de scherpe hoek nodig, maar het bewijs gebruikt supplementaire hoeken.
- **Namen.** *Parametervoorstelling* (zoals in het voorstel van Klaas); de 3de graad (Ruimtemeetkunde) zegt *parametervergelijkingen*. *Inproduct*; de 3de graad zegt *scalair product* (de tekst vermeldt beide). De vectorvergelijking staat als $\vect{OP} = \vect{OA} + r\,\vect{u}$ (plaatsvectoren, zoals in Vectoren); de tekst vermeldt dat de 3de graad $P = A + r\,\vect{u}$ schrijft. De parameter heet $r$, een tweede rechte krijgt $s$ (en $t$ voor de tijd). *Strikt evenwijdig* tegenover *samenvallend*. Notatie voor de afstand: $d(P, l)$.
- **Cartesiaanse vergelijking als $ax + by = c$** (zoals in Stelsels en in de 3de graad met $ax + by + cz = d$), dus de afstandsformule is $\frac{\lvert ax_0 + by_0 - c\rvert}{\sqrt{a^2 + b^2}}$ en niet de vaak geziene vorm met $ax + by + c = 0$.
- **Bewust opgenomen, misschien buiten het leerplan:** het lijnstuk en de halfrechte met de parameter (en een opdracht met twee lijnstukken), de tijd als parameter (botsen of niet), de normaalvector, het voetpunt, de middelloodlijn, de afstand tussen evenwijdige rechten, en als opdrachten de zwaartelijnen, het spiegelbeeld, de hellingshoek ($\tan\alpha = m$), de bissectrices, de stelling van Thales en de diagonalen van een ruit met het inproduct, en een biljartbal via de band. Weggelaten: rekenregels van het inproduct als stellingen (alleen $\vect{u} \cdot \vect{v} = \vect{v} \cdot \vect{u}$ in de tekst en een paar berekeningen in een korte oefening), de vectoriële vergelijking met eenheidsvectoren, en de cirkelvergelijking (die zit in het keuzehandboek De cirkel of in de 3de graad; opdracht h2-o23 gebruikt alleen $\lvert OP\rvert = a$).
- **Overlap met de 3de graad.** Ruimtemeetkunde voert het scalair product in de ruimte opnieuw in, met hetzelfde bewijs via de cosinusregel. Dat is bewust: de 2de graad legt de basis in het vlak; normaalvector van een vlak, afstand tot een vlak en kruisende rechten blijven voor de 3de graad.
- **Overlap met Stelsels.** De onderlinge ligging en het snijpunt van twee cartesiaanse vergelijkingen worden alleen kort herhaald; het nieuwe is de richtingsvector (ook voor verticale rechten) en het snijden met parametervoorstellingen.
- **Contexten** zijn vereenvoudigd: boten varen met een vaste snelheid in een rechte lijn, zonder stroming.
- **Aantallen.** Hoofdstuk 1 heeft 102 deelvragen bij de opdrachten, aan de bovenkant van de richtwaarde.

## Controle

Alle uitkomsten zijn nagerekend met SymPy (86 controles in hoofdstuk 1, 58 in hoofdstuk 2), de afgeronde hoeken en afstanden ook numeriek. Bewijzen en uitlegvragen zijn niet nagerekend. Het handboek bouwt zonder fouten (geen `!`, geen `undefined`, geen Overfull boven 2pt; de oplossingen zonder "??"). Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
