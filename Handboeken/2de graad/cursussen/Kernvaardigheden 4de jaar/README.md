# Kernvaardigheden 4de jaar: bron

Bron van de bundel kernvaardigheden voor het 4de jaar van de 2de graad, volgens de [ontwerpregels](../../../../Ontwerp/ontwerpregels.md) (de delen "2de graad" en "Kernvaardigheden"). Eerste bundel: pakket 5 (B+S'', KOV, 5 uur per week). Er is nog geen `\alleenvoor` en geen veld `pakketten:`; een ander pakket kan later aansluiten met dezelfde bron. Alle opgaven, teksten en figuren zijn eigen werk. Status: eerste versie, nog na te lezen.

Een bundel kernvaardigheden is vooral drill: per hoofdstuk één pagina *Wat je moet kennen* (theoriekader, klassieke fouten, een of twee korte voorbeelden), daarna grote *Oefenbundels* en *Test jezelf*.

| Hoofdstuk | Bestand | Herhaalt | Opgaven |
|---|---|---|---|
| 1. Machten en wortels | `hoofdstukken/01-machten-en-wortels.tex` | Reële getallen | 178 |
| 2. Merkwaardige producten | `hoofdstukken/02-merkwaardige-producten.tex` | 1ste graad, kwadraat afsplitsen | 163 |
| 3. Ontbinden in factoren | `hoofdstukken/03-ontbinden.tex` | Tweedegraadsfuncties, Veeltermen | 154 |
| 4. Breuken | `hoofdstukken/04-breuken.tex` | 1ste graad, rationale vormen | 147 |
| 5. Vergelijkingen | `hoofdstukken/05-vergelijkingen.tex` | Eerstegraadsvergelijkingen, Tweedegraadsfuncties | 168 |
| 6. Goniometrische getallen | `hoofdstukken/06-goniometrische-getallen.tex` | Driehoeksmeting, Goniometrie | 139 |
| 7. Stelsels | `hoofdstukken/07-stelsels.tex` | Stelsels | 74 |

Samen 1023 opgaven (deelvragen) in 101 oefeningen, waarvan 32 testvragen. Het handboek telt 35 pagina's.

De oefeningen staan in `oefeningen/*.yaml` (zie `Opmaak/oefeningenbank.py`), de macro's in `notatie.tex` (die van Goniometrie, met `\horner` uit Veeltermen en `\stelsel` uit Stelsels).

## Na te kijken

- **Keuze van de vaardigheden.** Zeven hoofdstukken, gekozen uit de TODO (ontbinden, dubbele producten, breuken, machten, wortels, goniometrische getallen) en aangevuld met vergelijkingen en stelsels. Niet opgenomen: rekenen met vectoren en coördinaten (afstand, midden, richtingscoëfficiënt).
- **Voorkennis per bundel.** Hoofdstuk 3, bundel 5 (groeperen) en 6 (Horner) en hoofdstuk 5, bundel 11 veronderstellen Veeltermen; hoofdstuk 6, bundel 5-8 veronderstellen Goniometrie. Stelsels met drie onbekenden (hoofdstuk 7, bundel 6) staan in Stelsels alleen als opdracht. Dat staat in de leerkrachtenversie.
- **Uitwerkingen.** De drillbundels hebben bij elke deelvraag een antwoord, maar alleen een uitwerking waar een stap niet vanzelf spreekt. De uitgewerkte oplossingen zijn dus vooral antwoorden.
- **Notatie.** Oplossingen van vergelijkingen als "$-4$ of $4$" en "$1 \pm \sqrt3$", ongelijkheden als "$x \geqslant -2$", bestaansvoorwaarden als "$x \neq 3$". Na te kijken of de school $V = \{\ldots\}$ verkiest.
- **Contexten met eigen gekozen getallen** (hoofdstuk 1, 4, 5, 6): de bloedcel, de fietser, de ladder, de toren, het vliegtuig.

## Controle

De antwoorden zijn met SymPy berekend en nagerekend; elk berekend antwoord is ook teruggelezen en vergeleken met de opgave. De afgeronde waarden in hoofdstuk 6 zijn met de rekenmachinewaarden berekend. Met de hand nagerekend: de denkopgaven (niveau 3), de bewijsvragen en twee ontbindingen met een tip ($x^4 + 4$ en de substitutie $y = x^2 + x$). Het handboek bouwt zonder fouten. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas.
