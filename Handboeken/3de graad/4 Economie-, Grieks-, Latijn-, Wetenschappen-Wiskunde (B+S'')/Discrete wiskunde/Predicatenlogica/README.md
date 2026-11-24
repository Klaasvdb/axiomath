# Predicatenlogica: handboek

Cursus voor pakket 4 (B+S''), als uitbreiding: bij KOV hoort ze bij het leerplan Complementair (III-WiCo-d, rubriek 4.1.1 Wiskundig redeneren, LPD 1-3) voor richtingen met meer dan 6 uur wiskunde. Volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). Alle opgaven zijn eigen werk. De omslag is *Het theekransje* van John Tenniel, uit *The Nursery Alice* (1890, publiek domein): aan die tafel zegt de Hoedenmaker dat *ik zie wat ik eet* niet hetzelfde is als *ik eet wat ik zie*, en de schrijver Lewis Carroll was zelf logicus. De voorkant komt uit `Ontwerp/voorkanten/` (motief `predicatenlogica`: een relatie op vier elementen als pijlen in een kring, waarin ∀x ∃y R(x, y) waar is en ∃y ∀x R(x, y) vals).

**Bron:** de hoofdstukken, oefeningen en `notatie.tex` staan één keer voor alle pakketten in [cursussen/Predicatenlogica/](<../../../cursussen/Predicatenlogica/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Voorkennis:** Logica en bewijzen (pakket 4), hoofdstuk 1: uitspraken, open zinnen, connectieven, De Morgan, implicatie en contrapositie, de kwantoren, hun volgorde en hun ontkenning. Uit de 2de graad: waarheidstabellen en tautologieën. Die leerstof wordt niet herhaald; de negatiestellingen komen in hoofdstuk 3 terug als logisch ware equivalenties, zonder eigen kader.

Elk hoofdstuk begint met een blok Probleem; de theorie ontstaat uit dat probleem, en een voorbeeld "Terug naar het probleem" lost het op.

| Hoofdstuk | Bestand | Probleem | Leerplan | Status |
|---|---|---|---|---|
| 1. De taal van de predicatenlogica | `hoofdstukken/01-de-taal.tex` | hoe schrijf je de regels van een lesrooster (*twee klassen*, *precies één leraar*) in symbolen voor een computer? | LPD 1 | eerste versie, leerkracht moet nalezen |
| 2. Interpretaties | `hoofdstukken/02-interpretaties.tex` | kun je N, Z, Q en R uit elkaar houden met zinnen die alleen < en = gebruiken? | LPD 2 | eerste versie, leerkracht moet nalezen |
| 3. Logisch ware uitspraken | `hoofdstukken/03-logisch-waar.tex` | het theekransje: zeggen *ik zie wat ik eet* en *ik eet wat ik zie* hetzelfde, en waarom zijn ze dat voor de Slaapmuis wel? | LPD 3 | eerste versie, leerkracht moet nalezen |

## Inhoud

1. Waarom de propositielogica de sluitrede over Socrates niet ziet; universum, predicaten met één of meer argumenten, constanten, functies, termen en atomaire formules; de opbouw van een formule (als boom); de vier basiszinnen (alle, sommige, geen, alleen) met venndiagrammen en de twee klassieke fouten; begrensde kwantoren ($\forall x \in A$); meer kwantoren; het gelijkheidsteken: minstens twee, hoogstens één, precies één ($\exists!$); vrije en gebonden variabelen, bereik, zinnen, hernoemen; een formule voorlezen.
2. Interpretaties (universum, constanten, functies, predicaten, vrije variabelen); de waarheidsregels voor de kwantoren; vrije variabelen invullen; kwantoren in een eindig universum als lange conjunctie en disjunctie (stelling met bewijs); relaties als pijlenfiguren; predicaten op R als gebieden in het vlak (verticale en horizontale rechten); model en vervulbaar; verzamelingen uit elkaar houden met zinnen (kleinste element, dichtheid; Q en R alleen als uitleg).
3. Logisch waar (met tautologieën invullen, stelling met bewijs), logisch gelijkwaardig, logisch gevolg en geldige redeneringen; de negatiestellingen en een kwantor uitdrukken met de andere; de verwisselstellingen (twee keer $\forall$, twee keer $\exists$, $\exists y\,\forall x \Rightarrow \forall x\,\exists y$, met bewijs) en verwisselen in een gegeven interpretatie; $\forall$ over $\wedge$ en $\exists$ over $\vee$ (beide richtingen), $\forall$ over $\vee$ en $\exists$ over $\wedge$ (één richting); een kwantor buiten een implicatie als een deel de variabele niet bevat.

## Afbakening

- **Extra's buiten de wenken van LPD 1-3:** de opbouw van formules als boom, model en vervulbaar, de stelling over eindige universums, zinnen die verzamelingen uit elkaar houden, logisch gevolg en geldige redeneringen, en de stelling over een kwantor buiten een implicatie. Ze maken de problemen af of geven de toepassingen die LPD 3 vraagt.
- **Alleen in opdrachten:** een zin met alleen oneindige modellen, de paradox van de drinker, kwantoren naar voren brengen (prenexvorm, zonder die naam), interpretaties tellen, het lege universum.
- **Alleen als uitleg, zonder bewijs:** de vervangingsregel voor logisch gelijkwaardige delen, en dat geen zin met alleen < en = de verzamelingen Q en R scheidt (Cantor).
- **Weggelaten:** formele afleidingssystemen (natuurlijke deductie), volledigheid en compactheid, normaalvormen met naam.
- **Notatie:** connectieven zoals in Logica en bewijzen ($\neg$, $\wedge$, $\vee$, $\Rightarrow$, $\Leftrightarrow$); kwantoren zonder dubbelpunt, $\forall x\, \varphi$, met de opmerking dat $\forall x\colon \varphi$ hetzelfde betekent; $\exists!$ voor *precies één*. *Logisch gelijkwaardig* betekent dat $\varphi \Leftrightarrow \psi$ logisch waar is; het teken $\models$ wordt niet gebruikt.

## Oefeningen

De 128 oefeningen staan in `oefeningen/*.yaml`, per hoofdstuk (42, 42 en 44): Start (Opwarmer en Verken), 8 korte oefeningen, 22, 22 en 24 opdrachten op drie niveaus (87, 80 en 73 deelvragen), 3 Koppel-oefeningen en 7 testvragen. Koppel: Getaltheorie, Algemene functies en Rijen (hoofdstuk 1), Complexe getallen, Matrices en Groepen (hoofdstuk 2), Reeksen, Kansrekenen en Groepen (hoofdstuk 3). Er zijn geen prenten. Zie de README van Integralen en `Opmaak/oefeningenbank.py` voor de werkwijze.

## Eigen macro's

In `notatie.tex`: de grafiekmacro's van Integralen (`\rooster`, `\roosterleeg`, `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij`), de connectieven van Logica en bewijzen (`\en`, `\of`, `\niet`, `\dan`, `\asa`), `\deelt`, `\pr` (een predicaat met een woord als naam), en voor de figuren de TikZ-stijlen `elt` en `eltfel` (een element), `pijl` en `pijlfel` (een pijl van een relatie), `lus`, `lusonder`, `lusrechts`, `luslinks`, en `verz` (een venndiagram).

## Maken

```
py -3.13 -P Opmaak/maak-pdf.py "4/Discrete wiskunde/Predicatenlogica"
py -3.13 -P Opmaak/maak-pdf.py "4/Discrete wiskunde/Predicatenlogica" --hoofdstuk 2
```

## Controle

Op 23 nov 2026 gebouwd (alle versies, zonder fouten, `??` of Overfull boven 2 pt) en steekproefsgewijs bekeken (voorkant, inhoud, alle hoofdstukken, figuren, test, uitgewerkte oplossingen). De beweringen over eindige relaties (pijlenfiguren, toernooi, ronde tafel, tellingen) en de geldigheid of ongeldigheid van de formules uit hoofdstuk 3 zijn nagegaan met een Python-script dat alle interpretaties met hoogstens drie elementen doorloopt. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De leerkracht moet de opgaven nog nalezen, en de vrije vertaling van de dialoog van Carroll.
