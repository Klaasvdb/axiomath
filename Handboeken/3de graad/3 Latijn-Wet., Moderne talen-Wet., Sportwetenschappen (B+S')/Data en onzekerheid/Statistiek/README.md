# Statistiek: handboek (pakket 3)

Cursus voor pakket 3 (B+S'), LPD 36-40, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Statistiek/](<../../../cursussen/Statistiek/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Leerplan:** Wiskunde B+S', III-WisS'-d (versie oktober 2024), rubriek Data en onzekerheid, deelrubriek Statistiek, vijf minimumdoelen (geen keuzedoelen):

- LPD 36: randomisatie en representativiteit bij steekproeven (steekproefvariabiliteit, aselecte steekproef), met de wenken over selectiebias, randomisatie in de praktijk en simulaties; extra: de steekproefgrootte (en de foutenmarge), gestratificeerde en getrapte steekproeven;
- LPD 37: samenhang tegenover causaliteit (verborgen variabele, omgekeerde richting, toeval; observationeel en experimenteel onderzoek), met spreidingsdiagrammen als voorkennis uit de 2de graad;
- LPD 38: de normale verdeling als continu model bij gegeven data (grafische beoordeling, $\bar x$ en $s$ als schatting, grafische betekenis van $\mu$ en $\sigma$ met top en buigpunten); extra: z-scores, de 68-95-99,7-regel of een QQ-plot bij de beoordeling;
- LPD 39: kansen bij een normaal verdeelde kansvariabele, met ICT of de vuistregels;
- LPD 40: de betekenis van nulhypothese, alternatieve hypothese, significantieniveau en p-waarde in betekenisvolle situaties, met de steekproevenverdeling (via simulatie); extra: zelf toetsen opstellen voor proporties of gemiddelden met ICT.

Het leerplan geeft geen lestijden per rubriek. Betrouwbaarheidsintervallen, de binomiale verdeling en de centrale limietstelling staan er niet in. Kansrekenen (LPD 35) is in dit leerplan beperkt tot kruistabellen, boomdiagrammen en de wet van Laplace, zonder combinaties: dus geen toevalsvariabelen, verwachtingswaarde of binomiale verdeling (Kansrekenen laat in dit pakket die hoofdstukken weg). Bewijsvoering is de bewijsvoering van LPD 4. De statistiekdoelen zijn woordelijk dezelfde als LPD 18-21 en keuzedoel K5 van Basis, met dit verschil: de hypothesetoetsen zijn hier verplicht, en spreidingsdiagrammen, afgeleiden (met de tweede afgeleide en het getal e) en integralen zijn wel voorkennis.

**Afgestemd op B+S'** (24 nov 2026). De versie kwam van pakket 4 (PR #5). De vier hoofdstukken blijven. Waar pakket 4 de binomiale verdeling of de verwachtingswaarde gebruikt, neemt dit pakket de versie van pakket 1 over (die al zonder die voorkennis werkt); waar pakket 1 iets wegliet omdat Basis geen spreidingsdiagrammen, afgeleiden of integralen heeft, houdt dit pakket de versie van pakket 4. Alles staat in de bron met `\alleenvoor` of `pakketten:` in de YAML. Pakket 1 en 4 zijn ongewijzigd (hun `gen/` is na het bouwen identiek aan die van voor de aanpassing). Pakket 2 (B+S, LPD 30-34) heeft dezelfde statistiekdoelen en dus dezelfde inhoud; alleen de LPD-nummers in de leerkrachtennota's verschillen.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Steekproeven en samenhang | `hoofdstukken/01-steekproeven.tex` | LPD 36, 37 | afgestemd, nog na te lezen |
| 2. De normale verdeling | `hoofdstukken/02-normale-verdeling.tex` | LPD 38, 39 (bewijzen: LPD 4) | afgestemd, nog na te lezen |
| 3. Hypothesetoetsen | `hoofdstukken/03-hypothesetoetsen.tex` | LPD 40 | afgestemd, nog na te lezen |
| 4. Betrouwbaarheidsintervallen | `hoofdstukken/04-betrouwbaarheidsintervallen.tex` | geen doel: uitbreiding | afgestemd, nog na te lezen |

## Verschillen met pakket 4

| Waar | In pakket 3 | Reden |
|---|---|---|
| 1, Opwarmer | vraag f zonder "verwachtingswaarde" (eigen versie van `h1-start-1` voor pakket 2 en 3) | geen verwachtingswaarde in LPD 35 |
| 1, opdracht `h1-o22` | versie van pakket 1: zonder binomiale verdeling in de uitwerking | idem |
| 1, Koppel | `h1-koppel-1` (binomiale verdeling, $\E(\hat p)$) weg; `h1-koppel-3` van pakket 1 (punaise: relatieve frequentie en kans) erbij; de regressierechte (`h1-koppel-2`) blijft | LPD 35; spreidingsdiagrammen zijn voorkennis uit de 2de graad |
| 1, leerkrachtennota | gestratificeerde en getrapte steekproeven en de steekproefgrootte zijn een extra bij LPD 36 | III-WisS'-d |
| 2, theorie | ongewijzigd: met het voorschrift van de Gausskromme en de bewijzen (kans op één waarde, symmetrie en top, buigpunten met de kettingregel en de tweede afgeleide, standaardiseren) | LPD 21 en 22 zijn voorkennis; wenk bij LPD 38 over top en buigpunten |
| 2, Koppel | `h2-koppel-2` (binomiaal en normaal) weg; `h2-koppel-3` van pakket 1 (twee vulmachines in een boomdiagram) erbij | LPD 35 |
| 2, leerkrachtennota | z-scores zijn een extra bij LPD 38, de vuistregels een wenk bij LPD 39; het voorschrift en de bewijzen horen bij de bewijsvoering van LPD 4 | III-WisS'-d |
| 3, heel het hoofdstuk | versie van pakket 1: steekproevenverdeling van $\hat p$ en $\overline X$ zonder verwachtingswaarde en zonder bewijs, met een simulatie (`h3-simulatie`); toetsen voor een proportie met de normale benadering van $\hat p$ in plaats van `binomcdf`; tweezijdig met 59 keer kop; de twee soorten fouten met zakken rijst; Paul met een boomdiagram; Koppel met een kruistabel in plaats van Bayes. Weg: de binomiale steekproevenverdeling met bewijs, de centrale limietstelling (subsectie, voorbeeld, `h3-clt`), `h3-dobbel`, het bewijs van de kans op een fout van de eerste soort (vervangen door een verklarend argument), de opdrachten `h3-o4`, `h3-o5`, `h3-o7`, `h3-o11`, `h3-o18` en `h3-o22` | LPD 40 en zijn wenken (betekenis, interpretatie, simulatie; toetsen opstellen is een extra met ICT); LPD 35 |
| 3, leerkrachtennota | LPD 40 met de nadruk op de betekenis; de normale benadering van $\hat p$ en waarom; Koppel zonder Bayes | III-WisS'-d |
| 4, opdrachten `h4-o7` en `h4-o17` | versies van pakket 1, zonder binomiale verdeling | LPD 35 |
| 4, Koppel | `h4-koppel-2` (binomiale verdeling) weg | LPD 35 |
| 4, inleiding en leerkrachtennota | uitbreidingshoofdstuk, geen keuzedoel (de nota zei "keuzedoel K1 van pakket 4, na te kijken") | geen doel in III-WisS'-d; alleen een extra bij LPD 36 noemt de foutenmarge |
| LPD-nummers | 36-40 klopten al per hoofdstuk; nu ook in de nota's bij Koppel en in hoofdstuk 3 en 4 | III-WisS'-d |

Aantallen in pakket 3 (pakket 4 tussen haakjes):

| Hoofdstuk | Korte oefeningen | Opdrachten | Koppel | Testvragen |
|---|---|---|---|---|
| 1. Steekproeven en samenhang | 10 (10) | 26 (26) | 2 (2) | 7 (7) |
| 2. De normale verdeling | 10 (10) | 26 (26) | 2 (2) | 8 (8) |
| 3. Hypothesetoetsen | 12 (13) | 20 (26) | 1 (2) | 7 (7) |
| 4. Betrouwbaarheidsintervallen | 8 (8) | 26 (26) | 1 (2) | 7 (7) |

Elk hoofdstuk heeft verder een Probleem, een Terug naar het probleem en een Start (Opwarmer en Verken); het herhaalschema van Test jezelf klopt in elk hoofdstuk. Het handboek telt 73 pagina's (was 74), de leerkrachtenversie 81 (81), de zelfstudieversie 81 (83), de numerieke oplossingen 7 (7) en de uitgewerkte oplossingen 32 (33).

## Na te kijken

- **Hoofdstuk 4 (betrouwbaarheidsintervallen)** hoort bij geen doel van III-WisS'-d, ook niet als keuzedoel (keuzedoel K1 van III-WisS'-d gaat over veeltermvergelijkingen (rationale functies)). Het blijft staan omdat `Handboeken/koepels.yaml` het voor GO! als extra gebruikt (betrouwbaarheidsintervallen staan in de GO!-doelen). In `koepels.yaml` staat het voor KOV pakket 3 onder `keuze:`; dat zou `extra:` (uitbreiding) moeten zijn, of weg. `Ontwerp/koepels.md` zegt ook dat B+S en B+S' een keuzedoel bij statistiek hebben: K1 is daar alleen een keuzedoel bij rationale functies.
- **De p-waarden in hoofdstuk 3** komen uit de normale benadering van $\hat p$ zonder continuïteitscorrectie, zoals in pakket 1. Ze zijn iets kleiner dan de exacte binomiale (0,007 tegenover 0,013 bij 30 zessen in 120 worpen); het besluit is telkens hetzelfde.
- **Hoeveel van hoofdstuk 3 blijft?** LPD 40 vraagt vooral de betekenis; zelf toetsen is een extra. Het hoofdstuk laat leerlingen toch toetsen uitvoeren met `normalcdf`, met eenzijdig/tweezijdig en de twee soorten fouten. Te bekijken of het bewijs van de kans op een fout van de eerste soort als extra bij LPD 4 terug moet (het staat er nu alleen voor pakket 4).
- **Bewijzen in hoofdstuk 2** blijven (de bewijsvoering van LPD 4). Een school met weinig tijd kan ze vervangen door de uitleg met de figuur, zoals in pakket 1.
- **Extra's die blijven:** gestratificeerde en getrapte steekproeven (het probleem van hoofdstuk 1 steunt erop) en z-scores (het probleem van hoofdstuk 2 zoekt een onbekend gemiddelde).
- **Wetenschappelijke toepassingen.** De statistiekdoelen van B+S' zijn woordelijk die van B+S; er is niets toegevoegd. De contexten (geneesmiddelen, experimenten met test- en controlegroep, metingen, vulmachines) zijn al wetenschappelijk.
- **Rekentoestel:** de tekst noemt de TI-84 (`normalcdf`, `invNorm`, `randInt`). Pas aan als de school een ander toestel gebruikt.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p3-Statistiek-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "3/Data en onzekerheid/Statistiek"
```

## Controle

Gebouwd zonder ongedefinieerde verwijzingen en zonder `??`, in het handboek, de leerkrachten- en zelfstudieversie en de oplossingen; geen overvolle regels van meer dan 2 pt. Pakket 1 en 4 geven dezelfde `gen/`-bestanden als voor de aanpassing (`diff -r`). Er zijn geen nieuwe getallen: de versies van pakket 1 zijn op 18 nov 2026 nagerekend, en de belangrijkste (de koppel met twee vulmachines, de toets voor een proportie, de tweezijdige toets en de fouten bij een gemiddelde) opnieuw op 24 nov 2026 met SymPy. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
