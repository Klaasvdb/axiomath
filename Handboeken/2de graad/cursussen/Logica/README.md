# Logica: bron

Bron van het handboek Discrete wiskunde/Logica van de 2de graad, voor alle vijf pakketten, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (ook het deel "2de graad"). Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

| Hoofdstuk | Bestand | Pakketten |
|---|---|---|
| 1. Uitspraken en waarheidstabellen | `hoofdstukken/01-uitspraken.tex` | 1-5 |
| 2. Implicatie en equivalentie | `hoofdstukken/02-implicatie-en-equivalentie.tex` | 1-5 |
| 3. Bewijzen | `hoofdstukken/03-bewijzen.tex` | 5 |

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de eigen macro's in `notatie.tex`: de logische symbolen `\niet`, `\en`, `\of`, `\dan`, `\asa` (zoals in Logica en bewijzen van de 3de graad), de omgevingen `waarheidstabel` en `waarheidstabelbreed` (raster in de kleur van het hoofdstuk, getinte kop) met `\res{W}` voor de kolom die je zoekt, `\deelt`, `\N` tot `\R`, en `\naast`, `\figuren`, `metgrafiek`, `stappenbreed`, `stappenvrij` uit Integralen. De grafiekmacro's van Integralen zijn geschrapt.

## Verschillen per pakket

Alle pakketten hebben hetzelfde leerplandoel (LPD 26, 30, 32, 36, 36), met hoofdstuk 1 en 2. Pakket 5 heeft daarnaast B1 en hoofdstuk 3. De verschillen in de eerste twee hoofdstukken zijn bescheiden en staan in `\alleenvoor` en `pakketten:`.

| Onderdeel | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Waarheidstabellen met drie uitspraken (onderdeel, korte oefening, opdrachten, testvraag) | | x | x | x | x |
| Voldoende en nodige voorwaarde (onderdeel, korte oefening, opdracht, testvraag) | | x | x | x | x |
| Opdracht: alle waarheidstabellen met twee uitspraken (16 kolommen) | | | | | x |
| Opdracht: de contrapositie afleiden zonder waarheidstabel | | | | | x |
| Hoofdstuk 3: Bewijzen (tegenvoorbeeld, rechtstreeks, met de contrapositie, uit het ongerijmde) | | | | | x |

Waar de pakketten 2-5 drie uitspraken gebruiken, heeft pakket 1 een eigen variant met hetzelfde id en twee uitspraken: `h1-o15` (webwinkel), `h1-o20` (raadsel op het eiland) en `h1-t8` (testvraag; het schema Fout? Herhaal kiest het juiste voorbeeld met `\alleenvoor`).

## Na te kijken

- **Afbakening.** De leerplantekst was niet beschikbaar. De afbakening volgt "Inhoud per handboek" in de README van de 2de graad en de kennis van het leerplan. Na te kijken in het leerplan: of de equivalentie en de tautologie in alle pakketten horen, en of drie uitspraken en voldoende/nodige voorwaarde terecht pas vanaf pakket 2 staan.
- **Bewust opgenomen, misschien buiten het leerplan:** open zinnen; de ontkenning van *alle* en *er is* (in woorden, zonder de symbolen ∀ en ∃); de contrapositie (in alle pakketten, want ze verklaart het kaartenprobleem); geldige redeneringen als tautologie; schakelingen (serie en parallel) als uitleg bij *en* en *of*. In hoofdstuk 3: het bewijs met de contrapositie (nodig voor $\sqrt2$), een bewijs door gevallen en het bewijs van Euclides (alleen als opdracht van niveau 3).
- **W en O.** Het boek schrijft W (waar) en O (onwaar), zoals op de voorkant en in de wens van Klaas ("waar en onwaar"). Logica en bewijzen van de 3de graad schrijft W en V (vals). Kies één afspraak voor beide graden.
- **Volgorde van de rijen.** Altijd WW, WO, OW, OO (en bij drie uitspraken WWW tot OOO). Sommige handboeken beginnen met OO of schrijven 1 en 0.
- **Notatie gelijkwaardig.** In hoofdstuk 1 staat *is gelijkwaardig met* in woorden; pas in hoofdstuk 2 komt het teken $\Leftrightarrow$ voor een gelijkwaardigheid (als tautologie). Sommige handboeken gebruiken $\equiv$.
- **Bewijzen in de voorbeelden.** In hoofdstuk 3 staan de bewijzen in een `\voorbeeld` (het is een soort opgave die leerlingen moeten leren), met daarin de omgeving `bewijs` van de opmaak. Die zet het vierkantje op een eigen regel helemaal rechts, wat in een voorbeeld wat los oogt.
- **Overlap met Reële getallen.** Het bewijs dat $\sqrt2$ irrationaal is, staat in pakket 5 ook al in hoofdstuk 1 van Reële getallen, en $\sqrt3$ als opdracht. Hier staat het als voorbeeld van een bewijs uit het ongerijmde, met het lemma *als $n^2$ even is, dan is $n$ even* apart bewezen met de contrapositie. Kies of het in beide handboeken blijft.
- **Contexten.** De kaartproef in het probleem van hoofdstuk 2 is een eigen formulering van een bekend experiment (Wason, 1966); het raadsel met eerlijken en leugenaars is een bekend soort puzzel, met eigen namen en uitspraken. De jeugdhuisregel (bier vanaf 16 jaar) volgt de Belgische wet.
- **Pagina's die half leeg blijven.** Elke sectie begint op een nieuwe pagina (ontwerpregel). Daardoor blijven sommige pagina's half leeg, bijvoorbeeld na sectie 1.1 en 2.1.

## Controle

De waarheidstabellen in de oefeningen zijn met een script berekend, niet met de hand ingevuld; de tabellen in de hoofdstukken zijn met datzelfde script nagekeken. Het feit dat $n^2 + n + 41$ een priemgetal is voor $n = 0, \ldots, 39$, en dat $n^2 - n + 11$ voor het eerst faalt bij $n = 11$, is nagerekend met SymPy. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
