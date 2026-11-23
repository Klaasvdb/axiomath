# Handboeken wiskunde 3de graad: doorstroom en dubbele finaliteit

Hier staan de handboeken van de 3de graad, geordend per **leerplanpakket**: pakket 1-4 voor de doorstroomfinaliteit, pakket 5-8 voor de dubbele finaliteit. Elke richting volgt precies één pakket, dus elk handboek staat maar één keer in de repo, ook als meerdere richtingen het gebruiken.

## Pakketten en richtingen

De pakketten volgen de graadleerplannen wiskunde 3de graad D. Ze zijn uitbreidingen van elkaar: B+S'' bevat alles van B+S' plus extra leerplandoelen, enzovoort. De afbakening verschilt soms (bijvoorbeeld alleen sinus in Basis, ook cosinus in B+S').

| Pakket | Richtingen | Lestijden per graad |
|---|---|---|
| 1 Basis | Grieks-Latijn, Humane wetenschappen, Latijn-Moderne talen, Moderne talen | 125 |
| 2 B+S | Economie-Moderne talen | 175 |
| 3 B+S' | Latijn-Wetenschappen, Moderne talen-Wetenschappen, Sportwetenschappen | 200 |
| 4 B+S'' | Economie-Wiskunde, Grieks-Wiskunde, Latijn-Wiskunde, Wetenschappen-Wiskunde | 300 (6 uur per week) |

De dubbele finaliteit heeft vier eigen pakketten (5-8), zie [hieronder](#dubbele-finaliteit-da).

Deze tabel volgt KOV en noemt alleen de richtingen waarvoor de handboeken eerst gemaakt zijn. Bij andere koepels krijgt een richting soms een ander pakket (GO! geeft Grieks-Latijn bijvoorbeeld de wiskunde van pakket 2): zie [Ontwerp/koepels.md](../../Ontwerp/koepels.md) en [koepels.yaml](../koepels.yaml). Het aantal uren per week verschilt per school: de uren op de voorkant van de handboeken staan in `Ontwerp/voorkanten/maak-voorkanten.py` en zijn aan te passen.

## Dubbele finaliteit (D/A)

Stand op 16 november 2026: de indeling en de voorkanten zijn klaar, er is nog geen cursus geschreven. KOV heeft vier leerplannen wiskunde 3de graad D/A. Ze zijn kleiner dan in de doorstroom en vragen veel werken met contexten uit de richting. Ze vallen samen met de clusters van het decreet: 06.09 *Goniometrie en vectoren* en 06.10 *Uitgebreide analyse en algebra*. GO! heeft per richting een leerplan met dezelfde clusters.

| Pakket | Leerplan | Richtingen | Graaduren | Decreet |
|---|---|---|---|---|
| 5 D/A Basis | III-Wis-da | Agrotechnieken dier en plant, Architectuur en interieur, Bakkerijtechnieken, Bedrijfsorganisatie, Beeldende kunst, Commerciële organisatie, Defensie en veiligheid, Dierenverzorgingstechnieken, Fotografie, Gezondheidszorg, Horeca, Internationale handel en logistiek, Mode, Natuur- en groentechnieken, Opvoeding en begeleiding, Slagerij-Traiteurtechnieken, Sportbegeleiding, Taal en communicatie, Toerisme, Topsport, Tuinaanleg en -beheer, Wellness en schoonheid | 4 | basisvorming |
| 6 D/A B+S | III-WisS-da | Applicatie- en databeheer, Autotechnieken, Bouwtechnieken, Elektromechanische technieken, Elektrotechnieken, Houttechnieken, Industriële ICT, Koel- en warmtetechnieken, Mechanische vormgevingstechnieken, Podiumtechnieken, Vliegtuigtechnieken | 5 | 06.09, 06.10 |
| 7 D/A B+S' | III-WisS'-da | Crossmedia, Dentaaltechnieken, Grafimedia, Optiektechnieken, Orthopedietechnieken | 4 | 06.09 |
| 8 D/A B+S'' | III-WisS''-da | Biotechnologische en chemische technieken | 5 | 06.09, 06.10 + spreidingsdiagram |

**Handboeken.** Zeven kleine handboeken. De nummers zijn die van het leerplan van het pakket (elk leerplan nummert opnieuw).

| Jaar | Handboek | 5 D/A Basis | 6 D/A B+S | 7 D/A B+S' | 8 D/A B+S'' |
|---|---|---|---|---|---|
| 5 | Analyse/Functies en verandering | 5-6 | 6, 16-18 | 6-7 | 6, 16-18 |
| 5 | Analyse/Exponentiële en logaritmische functies | 7-9 | 7-10 | 8-10 | 7-10 |
| 5 | Analyse/Tweedegraadsfuncties | – | 13-15 | – | 13-15 |
| 5 | Meetkunde/Vectoren | – | 5 | 5 | 5 |
| 6 | Analyse/Goniometrische functies | K1-K2 (keuze) | 11-12 | 11-12 | 11-12 |
| 6 | Data en onzekerheid/Kansrekenen | 10 | 19 | 13 | 19 |
| 6 | Data en onzekerheid/Statistiek | 11-14 | 20-23 | 14-17 | 20-24 |
| | **Aantal handboeken** | 5 (+1 keuze) | 7 | 6 | 7 |

**Inhoud (voorstel).**

- **Functies en verandering.** 1 Een grafiek lezen in een situatie: stijgen en dalen, extrema, nulwaarden. 2 Gemiddelde verandering: het differentiequotiënt. 3 De afgeleide als limiet van het differentiequotiënt en als richting van de raaklijn, grafisch het verband tussen een functie en haar afgeleide (pakket 6 en 8).
- **Exponentiële en logaritmische functies.** 1 Rekenen met machten met rationale exponent, wortels en logaritmen. 2 De functie *f(x) = b · aˣ*: groeifactor en beginwaarde, exponentiële groei als model. 3 De logaritmische schaal (pakket 6-8).
- **Tweedegraadsfuncties** (pakket 6 en 8). De parabool *y = a(x − p)² + q*: voorschrift en grafiek, kenmerken, de vergelijking *a(x − p)² + q = 0*.
- **Vectoren** (pakket 6-8). Vectoren in het vlak: som, veelvoud, norm en componenten, in toepassingen (krachten, verplaatsingen).
- **Goniometrische functies.** De sinusfunctie vanuit de goniometrische cirkel (radialen, verwante hoeken), de algemene sinusfunctie *a · sin[b(x − c)]*: periode, amplitude, faseverschuiving. Keuze in pakket 5.
- **Kansrekenen.** Kansen met boomdiagrammen en de wet van Laplace, relatieve frequentie en kans.
- **Statistiek.** Steekproeven en representativiteit, samenhang en causaliteit, de normale verdeling als model, het spreidingsdiagram (pakket 8).

**Eén bron.** Waar de leerstof overeenkomt met de doorstroom (Exponentiële en logaritmische functies, Goniometrische functies, Kansrekenen, Statistiek), gebruikt een D/A-pakket dezelfde bron in `cursussen/` en kiest het met `\cursushoofdstukken` en `\alleenvoor{5,6,7,8}` wat erin komt. Functies en verandering, Tweedegraadsfuncties en Vectoren krijgen een eigen bron. De motieven op de voorkant komen van de verwante handboeken. Functies en verandering heeft een eigen motief: Monet, *Waterlelies*, met de koorde Δy/Δx.

## Mappenstructuur

```
Handboeken/3de graad/
  <pakket>/        1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)
                   2 Economie-Moderne talen (B+S)
                   3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')
                   4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')
    <rubriek>/     Analyse, Algebra, Meetkunde, Discrete wiskunde, Data en onzekerheid, Onderzoekscompetentie
      <cursus>/    een eigen map per cursus, opgebouwd zoals Integralen
```

Houd de namen kort: Windows beperkt de padlengte tot 260 tekens.

Een nieuwe cursus begint met een kopie van de cursus [Integralen](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Integralen/README.md>) en volgt de [ontwerpregels](../../Ontwerp/ontwerpregels.md).

## Status

| Cursus | Plaats | Status |
|---|---|---|
| Matrices | [Pakket 1 / Algebra](<1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Algebra/Matrices/README.md>) | eerste versie, nog na te lezen |
| Afgeleiden | [Pakket 1 / Analyse](<1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Analyse/Afgeleiden/README.md>) | eerste versie, nog na te lezen |
| Algemene functies | [Pakket 1 / Analyse](<1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Analyse/Algemene functies/README.md>) | eerste versie, nog na te lezen |
| Exponentiële en logaritmische functies | [Pakket 1 / Analyse](<1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Analyse/Exponentiële en logaritmische functies/README.md>) | eerste versie, nog na te lezen |
| Goniometrische functies | [Pakket 1 / Analyse](<1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Analyse/Goniometrische functies/README.md>) | eerste versie, nog na te lezen |
| Kansrekenen | [Pakket 1 / Data en onzekerheid](<1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Data en onzekerheid/Kansrekenen/README.md>) | eerste versie, nog na te lezen |
| Rijen | [Pakket 1 / Discrete wiskunde](<1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Discrete wiskunde/Rijen/README.md>) | eerste versie, nog na te lezen |
| Statistiek | [Pakket 1 / Data en onzekerheid](<1 Grieks-Latijn, Humane, Latijn-Moderne, Moderne talen (Basis)/Data en onzekerheid/Statistiek/README.md>) | eerste versie, nog na te lezen |
| Onderzoekscompetentie | [Pakket 2](<2 Economie-Moderne talen (B+S)/Onderzoekscompetentie/README.md>) | eerste versie, nog na te lezen |
| Matrices | [Pakket 2 / Algebra](<2 Economie-Moderne talen (B+S)/Algebra/Matrices/README.md>) | eerste versie, nog na te lezen |
| Afgeleiden | [Pakket 2 / Analyse](<2 Economie-Moderne talen (B+S)/Analyse/Afgeleiden/README.md>) | eerste versie, nog na te lezen |
| Algemene functies | [Pakket 2 / Analyse](<2 Economie-Moderne talen (B+S)/Analyse/Algemene functies/README.md>) | eerste versie, nog na te lezen |
| Exponentiële en logaritmische functies | [Pakket 2 / Analyse](<2 Economie-Moderne talen (B+S)/Analyse/Exponentiële en logaritmische functies/README.md>) | eerste versie, nog na te lezen |
| Goniometrische functies | [Pakket 2 / Analyse](<2 Economie-Moderne talen (B+S)/Analyse/Goniometrische functies/README.md>) | eerste versie, nog na te lezen |
| Integralen | [Pakket 2 / Analyse](<2 Economie-Moderne talen (B+S)/Analyse/Integralen/README.md>) | eerste versie, nog na te lezen |
| Rationale functies | [Pakket 2 / Analyse](<2 Economie-Moderne talen (B+S)/Analyse/Rationale functies/README.md>) | eerste versie, nog na te lezen |
| Kansrekenen | [Pakket 2 / Data en onzekerheid](<2 Economie-Moderne talen (B+S)/Data en onzekerheid/Kansrekenen/README.md>) | eerste versie, nog na te lezen |
| Rijen | [Pakket 2 / Discrete wiskunde](<2 Economie-Moderne talen (B+S)/Discrete wiskunde/Rijen/README.md>) | eerste versie, nog na te lezen |
| Telproblemen (alleen GO!) | [Pakket 2 / Discrete wiskunde](<2 Economie-Moderne talen (B+S)/Discrete wiskunde/Telproblemen/README.md>) | eerste versie, nog na te lezen |
| Statistiek | [Pakket 2 / Data en onzekerheid](<2 Economie-Moderne talen (B+S)/Data en onzekerheid/Statistiek/README.md>) | eerste versie, nog na te lezen |
| Onderzoekscompetentie | [Pakket 3](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Onderzoekscompetentie/README.md>) | eerste versie, nog na te lezen |
| Complexe getallen | [Pakket 3 / Algebra](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Algebra/Complexe getallen/README.md>) | eerste versie, nog na te lezen |
| Matrices | [Pakket 3 / Algebra](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Algebra/Matrices/README.md>) | eerste versie, nog na te lezen |
| Afgeleiden | [Pakket 3 / Analyse](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Analyse/Afgeleiden/README.md>) | eerste versie, nog na te lezen |
| Algemene functies | [Pakket 3 / Analyse](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Analyse/Algemene functies/README.md>) | eerste versie, nog na te lezen |
| Exponentiële en logaritmische functies | [Pakket 3 / Analyse](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Analyse/Exponentiële en logaritmische functies/README.md>) | eerste versie, nog na te lezen |
| Goniometrische functies | [Pakket 3 / Analyse](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Analyse/Goniometrische functies/README.md>) | eerste versie, nog na te lezen |
| Integralen | [Pakket 3 / Analyse](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Analyse/Integralen/README.md>) | eerste versie, nog na te lezen |
| Rationale functies | [Pakket 3 / Analyse](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Analyse/Rationale functies/README.md>) | eerste versie, nog na te lezen |
| Kansrekenen | [Pakket 3 / Data en onzekerheid](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Data en onzekerheid/Kansrekenen/README.md>) | eerste versie, nog na te lezen |
| Rijen | [Pakket 3 / Discrete wiskunde](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Discrete wiskunde/Rijen/README.md>) | eerste versie, nog na te lezen |
| Telproblemen (alleen GO!) | [Pakket 3 / Discrete wiskunde](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Discrete wiskunde/Telproblemen/README.md>) | eerste versie, nog na te lezen |
| Statistiek | [Pakket 3 / Data en onzekerheid](<3 Latijn-Wet., Moderne talen-Wet., Sportwetenschappen (B+S')/Data en onzekerheid/Statistiek/README.md>) | eerste versie, nog na te lezen |
| Onderzoekscompetentie | [Pakket 4](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Onderzoekscompetentie/README.md>) | eerste versie, nog na te lezen |
| Complexe getallen | [Pakket 4 / Algebra](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Algebra/Complexe getallen/README.md>) | eerste versie, nog na te lezen |
| Getaltheorie | [Pakket 4 / Algebra](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Algebra/Getaltheorie/README.md>) | eerste versie, nog na te lezen |
| Matrices | [Pakket 4 / Algebra](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Algebra/Matrices/README.md>) | eerste versie, nog na te lezen |
| Algemene functies | [Pakket 4 / Analyse](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Algemene functies/README.md>) | eerste versie, nog na te lezen |
| Differentiaalvergelijkingen | [Pakket 4 / Analyse](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Differentiaalvergelijkingen/README.md>) | eerste versie, nog na te lezen |
| Exponentiële en logaritmische functies | [Pakket 4 / Analyse](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Exponentiële en logaritmische functies/README.md>) | eerste versie, nog na te lezen |
| Goniometrische functies | [Pakket 4 / Analyse](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Goniometrische functies/README.md>) | eerste versie, nog na te lezen |
| Integralen | [Pakket 4 / Analyse](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Integralen/README.md>) | eerste versie, nog na te lezen |
| Limieten en afgeleiden | [Pakket 4 / Analyse](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Limieten en afgeleiden/README.md>) | eerste versie, nog na te lezen |
| Rationale functies | [Pakket 4 / Analyse](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Rationale functies/README.md>) | eerste versie, nog na te lezen |
| Reeksen | [Pakket 4 / Analyse](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Reeksen/README.md>) | eerste versie, nog na te lezen |
| Kansrekenen | [Pakket 4 / Data en onzekerheid](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Data en onzekerheid/Kansrekenen/README.md>) | eerste versie, nog na te lezen |
| Statistiek | [Pakket 4 / Data en onzekerheid](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Data en onzekerheid/Statistiek/README.md>) | eerste versie, nog na te lezen |
| Logica en bewijzen | [Pakket 4 / Discrete wiskunde](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Discrete wiskunde/Logica en bewijzen/README.md>) | eerste versie, nog na te lezen |
| Rijen | [Pakket 4 / Discrete wiskunde](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Discrete wiskunde/Rijen/README.md>) | eerste versie, nog na te lezen |
| Telproblemen | [Pakket 4 / Discrete wiskunde](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Discrete wiskunde/Telproblemen/README.md>) | eerste versie, nog na te lezen |
| Ruimtemeetkunde | [Pakket 4 / Meetkunde](<4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Meetkunde/Ruimtemeetkunde/README.md>) | eerste versie, nog na te lezen |
| alle overige | per pakket | nog te maken |
