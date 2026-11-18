# Veeltermen: bron

Bron van het handboek Algebra/Veeltermen van de 2de graad, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Het handboek staat alleen in pakket 5 (B+S'', LPD B6), dus er is geen `\alleenvoor` en geen veld `pakketten:` nodig; de bronstructuur is dezelfde als bij de andere cursussen, zodat een ander pakket later kan aansluiten. Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Rekenen met veeltermen en delen | `hoofdstukken/01-rekenen-en-delen.tex` | 5 |
| 2. De reststelling en ontbinden | `hoofdstukken/02-reststelling.tex` | 5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`. Dat bestand vertrekt van `notatie.tex` van Tweedegraadsfuncties (2de graad): dezelfde roosters en grafieken (`\rooster`, `\roosterleeg`, `\kromme`, `\punt`, `\aflezen`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`, `\waardetabel`), zonder de intervallen, het tekenschema en de parabolen. Nieuw:

- `\gr` voor de graad: `$\gr A(x) = 3$`.
- `\horner{m}{a}{coëfficiënten}{producten}{quotiënt}{rest}`: het schema van Horner als tabel met raster, $a$ links in de middelste rij, de rest achter een verticale streep, vet en in de kleur van het hoofdstuk. Bijvoorbeeld `\horner{3}{2}{2 & -3 & 0 & 5}{ & 4 & 2 & 4}{2 & 1 & 2}{9}` voor $(2x^3 - 3x^2 + 5) : (x - 2)$.
- De omgeving `staartdeling` (`\begin{staartdeling}{n}`): een kolom per term van het deeltal, de deler rechtsboven en het quotiënt eronder, strepen met `\cline`, de rest met `\strest{...}`.
- `\tegels[lengte]{a}{b}` binnen een `tikzpicture`: de algebrategels van de rechthoek $(x + a)(x + b)$, zoals op de voorkant.

## Inhoud

1. **Rekenen met veeltermen en delen.** Probleem: aquaria met bodem $(x + 1)(x + 2)$ en inhoud $x^3 + 7x^2 + 14x + 8$ liter (hoe hoog is model $x$?). Veeltermen (graad, coëfficiënten, hoogstegraadscoëfficiënt, constante term, nulveelterm, wat geen veelterm is); de getalwaarde (met de grafiek van de inhoud); optellen en aftrekken; vermenigvuldigen met algebrategels, de graad van een product (kader, uitleg zonder formeel bewijs); de merkwaardige producten herhaald (zonder kader, want voorkennis), met tegels voor $(x + 2)^2$. De Euclidische deling: delen met rest bij getallen, de staartdeling (het tegengestelde eronder schrijven en optellen), het kader Euclidische deling (bestaan en eenduidigheid, eenduidigheid niet bewezen), de graad van quotiënt en rest, delen door een veelterm van graad 2, deelbaarheid, Terug naar het probleem (hoogte $x + 4$). Het schema van Horner: afgeleid uit dezelfde staartdeling (waarom $a$ en niet $-a$, waarom optellen), de werkwijze, delen door $x + a$.
2. **De reststelling en ontbinden.** Probleem: een open doosje uit karton van $16$ cm op $10$ cm met inhoud $120$ cm$^3$ (is $3$ cm de enige mogelijkheid?). De reststelling, ontdekt in de Verken-opgave, met een kort bewijs (vul $x = a$ in); de rest bij een hoge macht; een onbekende coëfficiënt. Deelbaarheid door $x - a$: nulwaarde en factorstelling (met bewijs uit de reststelling), met een parameter. Ontbinden: de gehele nulwaarden zijn delers van de constante term (met bewijs), wanneer de methode niet werkt ($x^3 + x + 1$), graad $3$ met drie gehele nulwaarden, het quotiënt verder ontbinden met de discriminant ($1 \pm \sqrt5$), graad $4$ met twee keer Horner, een hoogstegraadscoëfficiënt verschillend van $1$ (de nulwaarde $\tfrac12$). Vergelijkingen van hogere graad: oplossen door te ontbinden, met de grafiek; hoogstens $n$ nulwaarden (kader, uitleg zonder formeel bewijs), drie grafieken met drie, twee en één nulwaarde; Terug naar het probleem (twee doosjes: $3$ cm en $5 - \sqrt{15} \approx 1,13$ cm).

## Aantallen

| Hoofdstuk | Opdrachten (deelvragen) | Korte oefeningen | Testvragen |
|---|---|---|---|
| 1 | 24 (101) | 10 | 8 |
| 2 | 24 (81) | 8 | 8 |

Daarnaast per hoofdstuk een Opwarmer en een Verken-opgave. Het handboek telt 30 pagina's (leerkrachtenversie 34, zelfstudie 35).

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad, het voorstel van Klaas en de kennis van het leerplan. Opgenomen als leerstof: rekenen met veeltermen (herhaling), de Euclidische deling met de staartdeling (ook door een veelterm van graad $2$), deelbaarheid, het schema van Horner voor $x - a$, de reststelling met bewijs, de factorstelling, de delers van de constante term als kandidaat-nulwaarden (met bewijs), ontbinden van graad $3$ en $4$, vergelijkingen van hogere graad, en "hoogstens $n$ nulwaarden".
- **Alleen als opdracht van niveau 3** (misschien buiten het leerplan): $(A + B)^3$ (`h1-o20`), delen door $2x - 1$ met Horner (`h1-o22`), een staartdeling met letters (`h1-o23`), het patroon $x^n - 1$ (`h1-o24`), vergelijkingen met $x^4$ en $x^2$ met "stel $y = x^2$" (`h2-o20`), de som en het verschil van derdemachten (`h2-o21`), een stelsel voor twee coëfficiënten (`h2-o22`), $x^n \pm 1$ en $2^{15} + 1$ (`h2-o23`) en een nulwaarde die een breuk is (`h2-o24`).
- **Weggelaten:** de stelling over rationale nulwaarden ($\tfrac pq$) als leerstof, delen door $ax + b$ als leerstof, ongelijkheden van hogere graad met een tekenschema, en het verloop van veeltermfuncties in het algemeen.
- **Woorden en notatie.** "Nulwaarde" van een veelterm (zoals bij functies in Tweedegraadsfuncties; het voorstel sprak van "kandidaat-nulpunten"), "hoogstegraadscoëfficiënt", $\gr A(x)$, deeltal $A(x)$, deler $B(x)$, quotiënt $Q(x)$, rest $R(x)$, "factorstelling". Na te kijken welke woorden de school gebruikt.
- **De staartdeling.** Hier schrijf je het tegengestelde van het product eronder en tel je op (zo sluit het aan bij het schema van Horner). Sommige leerkrachten schrijven het product en trekken af. De deler staat rechts met het quotiënt eronder, zoals in Vlaanderen gebruikelijk.
- **Het schema van Horner.** Genoemd naar William George Horner (1786-1837); de methode is ouder (Ruffini, en eerder Chinese wiskundigen). Sommige scholen zeggen "regel van Horner".
- **Bewijzen.** De reststelling, de factorstelling en de stelling over gehele nulwaarden krijgen een kort bewijs (pakket 5 heeft B1). De graad van een product, de eenduidigheid van de Euclidische deling en "hoogstens $n$ nulwaarden" staan zonder formeel bewijs, met uitleg in de tekst.
- **Verwijzing tussen de hoofdstukken.** Hoofdstuk 2 verwijst naar voorbeeld 7 van hoofdstuk 1 (de deling met rest $9$). In een snelle bouw van alleen hoofdstuk 2 staat daar "??"; in de volledige bouw klopt het.
- **Contexten met eigen gekozen getallen,** geen echte gegevens: de aquaria, het kartonnen doosje ($16$ op $10$ cm, en in de test $12$ op $12$ cm), de tuin, de balken, de algebrategels.
- **Voorkennis.** De merkwaardige producten en het rekenen met letters (1ste graad) en uit Tweedegraadsfuncties de product-nulregel, de som-productmethode, de discriminant en het ontbinden met de oplossingen $a(x - x_1)(x - x_2)$ (pakket 4-5) worden kort herhaald waar ze nodig zijn, zonder kader. Het handboek veronderstelt dus dat Tweedegraadsfuncties eerst komt.
- **GO! en POV.** Volgens de README van de 2de graad is Veeltermen ook een GO!-optiepakket en een POV-uitbreiding; daar is niets voor gedaan.

## Controle

Alle delingen (quotiënt en rest), getalwaarden, ontbindingen en oplossingen van vergelijkingen zijn nagerekend met SymPy, ook de afgeronde getallen ($5 - \sqrt{15} \approx 1,13$, de bodem $13,75$ op $7,75$ cm, $\tfrac{3 \pm \sqrt5}{2}$, de oplossing van $x^3 + x + 1 = 0$ bij $-0,68$). Bewijzen en uitlegvragen zijn niet nagerekend. Het handboek bouwt zonder fouten (geen `!`, geen `undefined`, geen Overfull groter dan 2pt), en de oplossingen-PDF's bevatten geen "??". Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
