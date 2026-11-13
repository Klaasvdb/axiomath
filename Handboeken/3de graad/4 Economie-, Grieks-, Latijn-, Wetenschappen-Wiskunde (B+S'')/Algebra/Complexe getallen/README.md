# Complexe getallen: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 38-42, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk. De voorkant (Delaunay) komt uit `Ontwerp/voorkanten/`: pas ze daar aan.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Rekenen met complexe getallen | `hoofdstukken/01-rekenen-met-complexe-getallen.tex` | LPD 38, 39 | eerste versie, nog na te lezen |
| 2. Vierkantswortels en vergelijkingen | `hoofdstukken/02-vierkantswortels-en-vergelijkingen.tex` | LPD 40, wenk bij LPD 39 | eerste versie, nog na te lezen |
| 3. De goniometrische vorm | `hoofdstukken/03-goniometrische-vorm.tex` | LPD 41, 42 (product en quotiënt) | eerste versie, nog na te lezen |
| 4. Machten en wortels | `hoofdstukken/04-machten-en-wortels.tex` | LPD 42 (machten en machtswortels) | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Complexe-getallen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Complexe-getallen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Complexe-getallen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Complexe-getallen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Complexe-getallen-zelfstudie.pdf)

## Maken

Vanuit de hoofdmap van de repo:

```
python Opmaak/maak-pdf.py "4/Algebra/Complexe getallen"                  alles: handboek, oplossingen, leerkracht, zelfstudie
python Opmaak/maak-pdf.py "4/Algebra/Complexe getallen" --hoofdstuk 1    snel: alleen hoofdstuk 1, in snel-h1.pdf
```

Zoals bij Integralen: de grafieken worden bewaard in `figuren-cache/`, LaTeX leest `gen/`, en de oefeningen staan in `oefeningen/*.yaml`. Pas een opgave dus aan in de YAML.

## Afbakening

- **Hoofdstuk 1:** $i$ als oplossing van $x^2 = -1$, zonder wortelteken bij een negatief getal (zoals het leerplan vraagt). Geen ordening op $\mathbb{C}$: uitgelegd met $i > 0$ en $i < 0$, niet bewezen in het algemeen. De rekenregels voor de toegevoegde ($\overline{z + w}$, $\overline{zw}$) komen pas in hoofdstuk 2, waar ze nodig zijn voor de toegevoegde oplossingen.
- **Hoofdstuk 2:** vierkantswortels van een negatief reëel getal en van een complex getal in cartesische vorm (wenk bij LPD 39), tweedegraadsvergelijkingen met reële coëfficiënten, toegevoegde oplossingen (bewezen voor elke veeltermvergelijking met reële coëfficiënten, voor graad 3 uitgeschreven), som, product en ontbinding. Vergelijkingen van hogere graad alleen door af te zonderen, te groeperen of te delen door $z - r$. Eén opdracht (niveau 3) toont een vergelijking met een niet-reële coëfficiënt.
- **Hoofdstuk 3:** modulus en argument, omzetten in beide richtingen (bijzondere hoeken en met het rekentoestel), product en quotiënt met het bewijs via de somformules, vermenigvuldigen als draaiing en uitrekking, draaien om de oorsprong. Het argument staat in radialen, met de hoofdwaarde in $]-\pi, \pi]$ (beslissing van deze cursus, nog voor te leggen). De notatie $r \operatorname{cis} \theta$ en de exponentiële vorm $re^{i\theta}$ zijn niet opgenomen: het leerplan vraagt ze niet.
- **Hoofdstuk 4:** de formule van De Moivre (bewezen door de productregel te herhalen, zonder het woord inductie), machten op een spiraal, $n$-de machtswortels met bewijs, de regelmatige $n$-hoek en eenheidswortels. Negatieve exponenten en de som van de eenheidswortels staan als opdracht. Koppel naar de Mandelbrotverzameling (het leerplan noemt fractalen als uitbreiding).
- **Pakket 3** (B+S') heeft ook een cursus Complexe getallen. Kijk na welke doelen daar gelden voor je deze cursus ervoor kopieert.

## Eigen macro's

- `notatie.tex`: `\C`, `\R`, `\Re`, `\Im` (als Re en Im in plaats van de gotische letters), `\conj{z}` voor de toegevoegde, `\bgtan` zoals in Integralen;
- het vlak van Gauss: `\gauss{xmin}{xmax}{ymin}{ymax}` (rooster met de getallen $1, 2, \ldots$ en $i, 2i, \ldots$), `\gaussstap{stap}{...}` (een getal bij elke stap-de lijn) en `\gaussleeg{...}` (zonder getallen); `\cpunt[positie]{x}{y}{label}` voor een punt met label, en de TikZ-stijlen `vector` en `hulplijn`;
- zoals in Integralen: `\naast`, `\figuren`, `metgrafiek`, `stappenbreed` en `stappenvrij`.

## Controle

De uitkomsten van voorbeelden, oefeningen, Koppel en test van alle hoofdstukken zijn nagerekend met SymPy, de afgeronde getallen ook numeriek. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De enige prent (`veer.png`, hoofdstuk 2) is dezelfde als in Integralen; zie `afbeeldingen/prenten/README.md`.
