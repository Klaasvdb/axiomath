# Veeltermen: bron

Bron van het handboek Algebra/Veeltermen van de 2de graad, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Het handboek staat alleen in pakket 5 (B+S'', LPD B6), dus er is geen `\alleenvoor` en geen veld `pakketten:` nodig; de bronstructuur is dezelfde als bij de andere cursussen, zodat een ander pakket later kan aansluiten. Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, getoetst aan het leerplan (24 november 2026), nog na te lezen.

| Hoofdstuk | Bestand | Pakketten | Leerplan |
|---|---|---|---|
| 1. Rekenen met veeltermen en delen | `hoofdstukken/01-rekenen-en-delen.tex` | 5 | LPD B6, B1 |
| 2. De reststelling en ontbinden | `hoofdstukken/02-reststelling.tex` | 5 | LPD B6, B1 |
| 3. Rationale vormen | `hoofdstukken/03-rationale-vormen.tex` | 5 | servicedocument 5 uur bij LPD B6 |

**Leerplan.** II-WisS''-d, versie oktober 2024 (D/2024/13.758/351): LPD B6 (deelbaarheid bij veeltermen) met zijn wenken, en LPD B1 (bewijzen), waarvan de wenken de reststelling en de eenduidigheid van quotiënt en rest als voorbeelden noemen. Voor pakket 5 ook het servicedocument "Wiskunde 5u (2de graad D-finaliteit)", aangepast aan B+S'': dat maakt bij B6 de deling door $x - a$ met de regel van Horner en het ontbinden van $a^3 \pm b^3$ verplicht, en voegt toe: verder ontbinden met verschillende technieken, rationale vormen vereenvoudigen en de hoofdbewerkingen met rationale vormen. Hoofdstuk 3 komt alleen uit het servicedocument: een school die de leerlijn voor 5 uur niet volgt, laat het weg in `handboek.tex` (de andere hoofdstukken steunen er niet op). De andere leerplannen (pakket 1-4) hebben geen doel over deelbaarheid bij veeltermen; pakket 2-4 ontbinden alleen in factoren bij de tweedegraadsvergelijkingen (in Tweedegraadsfuncties), pakket 1 niet.

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`. Dat bestand vertrekt van `notatie.tex` van Tweedegraadsfuncties (2de graad): dezelfde roosters en grafieken (`\rooster`, `\roosterleeg`, `\kromme`, `\punt`, `\aflezen`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`, `\waardetabel`), zonder de intervallen, het tekenschema en de parabolen. Nieuw:

- `\gr` voor de graad: `$\gr A(x) = 3$`.
- `\horner{m}{a}{coëfficiënten}{producten}{quotiënt}{rest}`: het schema van Horner als tabel met raster, $a$ links in de middelste rij, de rest achter een verticale streep, vet en in de kleur van het hoofdstuk. Bijvoorbeeld `\horner{3}{2}{2 & -3 & 0 & 5}{ & 4 & 2 & 4}{2 & 1 & 2}{9}` voor $(2x^3 - 3x^2 + 5) : (x - 2)$.
- De omgeving `staartdeling` (`\begin{staartdeling}{n}`): een kolom per term van het deeltal, de deler rechtsboven en het quotiënt eronder, strepen met `\cline`, de rest met `\strest{...}`.
- `\tegels[lengte]{a}{b}` binnen een `tikzpicture`: de algebrategels van de rechthoek $(x + a)(x + b)$, zoals op de voorkant.

Hoofdstuk 3 gebruikt ook `\openpunt` (een gat in een grafiek).

## Inhoud

1. **Rekenen met veeltermen en delen.** Probleem: aquaria met bodem $(x + 1)(x + 2)$ en inhoud $x^3 + 7x^2 + 14x + 8$ liter (hoe hoog is model $x$?). Veeltermen (graad, coëfficiënten, hoogstegraadscoëfficiënt, constante term, nulveelterm, wat geen veelterm is); de getalwaarde (met de grafiek van de inhoud); optellen en aftrekken; vermenigvuldigen met algebrategels, de graad van een product (kader, uitleg zonder formeel bewijs); de merkwaardige producten herhaald (zonder kader, want voorkennis), met tegels voor $(x + 2)^2$. De Euclidische deling: delen met rest bij getallen, de staartdeling (het tegengestelde eronder schrijven en optellen), het kader Euclidische deling (bestaan uit de staartdeling, eenduidigheid met een bewijs uit het ongerijmde), de graad van quotiënt en rest, delen door een veelterm van graad 2, deelbaarheid, Terug naar het probleem (hoogte $x + 4$). Het schema (of de regel) van Horner: afgeleid uit dezelfde staartdeling (waarom $a$ en niet $-a$, waarom optellen), de werkwijze, delen door $x + a$.
2. **De reststelling en ontbinden.** Probleem: een open doosje uit karton van $16$ cm op $10$ cm met inhoud $120$ cm$^3$ (is $3$ cm de enige mogelijkheid?). De reststelling, ontdekt in de Verken-opgave, met een kort bewijs (vul $x = a$ in); de rest bij een hoge macht; een onbekende coëfficiënt; de rest bij deling door $(x - 1)(x + 1)$ uit $A(1)$ en $A(-1)$, met een stelsel. Deelbaarheid door $x - a$: nulwaarde en factorstelling (met bewijs uit de reststelling), met een parameter. Ontbinden: de gehele nulwaarden zijn delers van de constante term (met bewijs), wanneer de methode niet werkt ($x^3 + x + 1$), graad $3$ met drie gehele nulwaarden, het quotiënt verder ontbinden met de discriminant ($1 \pm \sqrt5$), graad $4$ met twee keer Horner, een hoogstegraadscoëfficiënt verschillend van $1$ (de nulwaarde $\tfrac12$); de som en het verschil van derdemachten (afgeleid met het schema van Horner, kader met bewijs door uitwerken); termen groeperen, ook met twee letters; een werkwijze met de volgorde van de technieken. Vergelijkingen van hogere graad: oplossen door te ontbinden, met de grafiek; hoogstens $n$ nulwaarden (kader, uitleg zonder formeel bewijs), drie grafieken met drie, twee en één nulwaarde; Terug naar het probleem (twee doosjes: $3$ cm en $5 - \sqrt{15} \approx 1,13$ cm).
3. **Rationale vormen.** Probleem: een zwembad vullen met twee tuinslangen die er $x$ en $x + 2$ uur over doen (hoe lang samen?). Rationale vorm en bestaansvoorwaarden; vereenvoudigen (kader, de grafiek van $\tfrac{x^2 + x - 6}{x - 2}$ met een gat, alleen factoren schrappen, tegengestelde factoren, ook met het schema van Horner); vermenigvuldigen, delen (met de extra bestaansvoorwaarde voor de teller van de deler), optellen en aftrekken (kleinste gemeenschappelijke noemer, haakjes na een minteken); Terug naar het probleem ($T = \tfrac{x(x + 2)}{2(x + 1)}$, met grafiek).

## Aantallen

| Hoofdstuk | Opdrachten (deelvragen) | Korte oefeningen | Testvragen |
|---|---|---|---|
| 1 | 24 (101) | 10 | 8 |
| 2 | 28 (102) | 11 | 11 |
| 3 | 15 (51) | 5 | 7 |

Daarnaast per hoofdstuk een Opwarmer en een Verken-opgave. Het handboek telt 44 pagina's (leerkrachtenversie 49, zelfstudie 52; voor de toetsing aan het leerplan 30, 34 en 35). Zonder hoofdstuk 3 zijn het er ongeveer 35.

## Getoetst aan het leerplan (24 november 2026)

Wat het leerplan II-WisS''-d (oktober 2024) en het servicedocument voor 5 uur beslisten:

- **Afbakening.** Het handboek dekt LPD B6 (Euclidische deling, reststelling) met alle wenken: de analogie met de deling van gehele getallen, het bestaan via de staartdeling, de reststelling als toepassing van de deling door $x - a$, deelbaar door $x - a$ als en slechts als $a$ een oplossing is, de staartdeling en de regel van Horner, de rest bij deling door $(x - a)(x - b)$ uit $D(a)$ en $D(b)$ (nieuw: subsectie in hoofdstuk 2, met korte oefening, opdracht en testvraag), en het ontbinden van $a^3 - b^3$ en $a^3 + b^3$. Het rekenen met veeltermen in hoofdstuk 1 is herhaling van de 1ste graad (I-Wis-a LPD 32), zoals de samenhang bij B6 zegt.
- **Som en verschil van derdemachten.** Was een opdracht van niveau 3; het servicedocument maakt het verplicht. Nu leerstof in hoofdstuk 2 (kader met bewijs, twee voorbeelden, korte oefening, opdracht `h2-o25`, testvraag). `h2-o21` is daarom vervangen door $x^6 - 1$ op twee manieren (niveau 3).
- **Verschillende technieken om te ontbinden** (servicedocument, ook "termen samen nemen" bij LPD 33): termen groeperen is nieuw in hoofdstuk 2, met een werkwijze over de volgorde van de technieken, opdrachten `h2-o26` en `h2-o28` en een testvraag. Kernvaardigheden 4de jaar (hoofdstuk 3, bundel 5) veronderstelde dat al.
- **Rationale vormen** (servicedocument: vereenvoudigen en de hoofdbewerkingen): nieuw hoofdstuk 3. Het leerplan zelf vraagt dit niet, dus het hoofdstuk is weg te laten.
- **Bewijzen (B1).** De wenk bij B1 noemt de reststelling en, uit het ongerijmde, de eenduidigheid van quotiënt en rest. De eenduidigheid krijgt nu een bewijs uit het ongerijmde (hoofdstuk 1). Bewezen zijn ook de factorstelling, de stelling over gehele nulwaarden en de formules voor derdemachten. Zonder formeel bewijs blijven de graad van een product en "hoogstens $n$ nulwaarden": het leerplan vraagt die niet.
- **Alleen als opdracht van niveau 3** (het leerplan vraagt ze niet, maar ze passen bij B6): $(A + B)^3$ (`h1-o20`), delen door $2x - 1$ met Horner (`h1-o22`), een staartdeling met letters (`h1-o23`), het patroon $x^n - 1$ (`h1-o24`), een stelsel voor twee coëfficiënten (`h2-o22`), $x^n \pm 1$ en $2^{15} + 1$ (`h2-o23`), een nulwaarde die een breuk is (`h2-o24`), en in hoofdstuk 3 een telescopische som, breuksplitsing en een kettingbreuk (`h3-o13` tot `h3-o15`). Vergelijkingen met $x^4$ en $x^2$ via $y = x^2$ (`h2-o20`) zijn een "Extra" bij LPD 33 van B+S''.
- **Weggelaten, bevestigd:** de stelling over rationale nulwaarden ($\tfrac pq$) als leerstof, delen door $ax + b$ als leerstof, ongelijkheden van hogere graad en het verloop van veeltermfuncties. Geen enkel leerplan van de 2de graad vraagt ze.
- **Woorden.** Het leerplan zegt "Euclidische deling", "reststelling", "regel van Horner" (nu vermeld naast "schema van Horner") en "graad van een veelterm", en spreekt van een oplossing van de veeltermvergelijking; "nulwaarde" sluit aan bij de functies.
- **Voorkennis.** B6 steunt op het rekenen met algebraïsche uitdrukkingen uit de 1ste graad; het gebruik van de discriminant en de som-productmethode uit Tweedegraadsfuncties blijft een keuze van dit handboek (Tweedegraadsfuncties eerst).

## Na te kijken

Wat het leerplan niet beslist:

- **De staartdeling.** Hier schrijf je het tegengestelde van het product eronder en tel je op (zo sluit het aan bij het schema van Horner). Sommige leerkrachten schrijven het product en trekken af. De deler staat rechts met het quotiënt eronder, zoals in Vlaanderen gebruikelijk.
- **Woorden en notatie** die de school gebruikt: "nulwaarde" of "nulpunt", $\gr A(x)$, "schema" of "regel" van Horner (William George Horner, 1786-1837; de methode is ouder: Ruffini, en eerder Chinese wiskundigen).
- **Hoofdstuk 3 en de jaarplanning.** Volgt de school de leerlijn voor 5 uur, dan staat hoofdstuk 3 erin; anders weglaten. Kernvaardigheden 4de jaar (hoofdstuk 4, Breuken) drilt hetzelfde verder.
- **Verwijzing tussen de hoofdstukken.** Hoofdstuk 2 verwijst naar voorbeeld 7 van hoofdstuk 1, hoofdstuk 3 naar voorbeeld 6 van hoofdstuk 2. In een snelle bouw van één hoofdstuk staat daar "??"; in de volledige bouw klopt het.
- **Contexten met eigen gekozen getallen,** geen echte gegevens: de aquaria, het kartonnen doosje ($16$ op $10$ cm, en in de test $12$ op $12$ cm), de tuin, de balken, de algebrategels, de tuinslangen, de fietser, de printers, de pompen.
- **GO! en POV.** Volgens de README van de 2de graad is Veeltermen ook een GO!-optiepakket en een POV-uitbreiding; daar is niets voor gedaan (andere leerplannen).

## Controle

Alle delingen (quotiënt en rest), getalwaarden, ontbindingen, vereenvoudigingen en bewerkingen met rationale vormen en oplossingen van vergelijkingen zijn nagerekend met SymPy, ook de afgeronde getallen ($5 - \sqrt{15} \approx 1,13$, de bodem $13,75$ op $7,75$ cm, $\tfrac{3 \pm \sqrt5}{2}$, de oplossing van $x^3 + x + 1 = 0$ bij $-0,68$, $\tfrac{160}{9} \approx 17,8$ en $\tfrac{12}{7} \approx 1,71$). Bewijzen en uitlegvragen zijn niet nagerekend. Het handboek bouwt zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
