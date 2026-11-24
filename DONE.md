# Gedaan

Wat uit [TODO.md](TODO.md) af is, met de datum en waar het staat. Nieuwste bovenaan. Wat nog open is bij een afgewerkt punt (nalezen, na te kijken), blijft in `TODO.md`.

## 24 nov 2026

- **2de graad getoetst aan de leerplannen** (PR #52): de 18 onderwerpen (72 handboeken) zijn getoetst aan de geldende KOV-leerplannen van 2024 (II-Wis-d, II-Wis'-d, II-WisS'-d van juni 2024, II-WisS-d, II-WisS''-d met het servicedocument voor 5 uur). Let op: `pro.katholiekonderwijs.vlaanderen/ii-<code>/leerplan` geeft nog de versies van 2021-2022; de geldende staan op `ii--<code>/leerplan`. Per onderwerp: LPD per hoofdstuk en per pakket, wat te veel of te weinig was, en de README van de bron met wat het leerplan besliste. Grootste wijzigingen: nieuwe hoofdstukken in pakket 5 uit het servicedocument (Veeltermen: Rationale vormen; Analytische meetkunde: De cirkel), de loodrechte stand in Ruimtemeetkunde, Thales en metrische betrekkingen in Gelijkvormigheid (pakket 5), Cramer en drie onbekenden weg uit Stelsels.
- **Pakket 2 en 3 (3de graad) afgestemd op hun leerplan** (PR #51): de KOV-leerplannen III-WisS-d (B+S) en III-WisS'-d (B+S') bleken toch online te staan, op `pro.katholiekonderwijs.vlaanderen/<code>/leerplan`. Alle 13 cursussen van pakket 2 en 3 nagekeken en bijgestuurd in de gedeelde bron met `\alleenvoor`; pakket 1 en 4 ongewijzigd (telkens nagegaan met `diff -r` op `gen/`). Grootste verschuivingen: Afgeleiden zonder het hoofdstuk limieten (informeel limietbegrip, e ingevoerd bij de kettingregel), Kansrekenen in de versie van Basis (zonder binomiale verdeling), Matrices zonder inverse en determinant, Goniometrische functies in pakket 2 alleen de sinus, Integralen in pakket 2 alleen veeltermfuncties, Rationale functies zonder algebraïsch oplossen. Pakket 2 (B+S) heeft bewijzen alleen als extra, pakket 3 (B+S') houdt ze. `koepels.yaml` en `Ontwerp/koepels.md` bijgewerkt (Statistiek hoofdstuk 4 is een extra, geen keuzedoel; GO! krijgt Kansrekenen hoofdstuk 3 en 4 als extra).

## 23 nov 2026

- **KOV Complementair (III-WiCo-d):** 18 nieuwe handboeken in pakket 4, één per module van het menu, elk als uitbreiding zoals Kegelsneden en Groepen (PR #50, één commit per handboek). Predicatenlogica (LPD 1-3), Krommen en meetkundige plaatsen (8-10), Oppervlakken (11-13), Affiene en projectieve meetkunde (14-16), Integratiemethodes (17-20), Differentiaalvergelijkingen (21-23), Reeksen (24-25), Numerieke methodes (26-29), Eigenwaarden en eigenvectoren (30), Groepentheorie (31-32), Vectorruimten (33-34), Getaltheorie (35), Lineair programmeren (36-39), Financiële algebra (40-43), Iteraties en fractalen (44-47), Kansverdelingen (48-50), Lineaire regressie (51-52), Multivariate statistiek (53-54). Kegelsneden (LPD 4-7) bestond al. Elk handboek heeft 3 of 4 hoofdstukken met blok Probleem, een eigen voorkant (kunstwerk uit het publiek domein en motief) en staat in `voortgang.yaml`, `koepels.yaml` en de README's. Wat na te kijken is, staat in de README van elk handboek en in TODO.md.

## 20 nov 2026

- **Volledige bouw met het kenmerk:** alle 123 handboeken opnieuw gebouwd en online. De hosting zat vol, dus per handboek uitgerold: nieuwe versies erop, de site omzetten, dan de oude versies zonder feedback wissen (956 MB vrij).
- **Feedbackteller op de site:** staat niet meer rechtsboven op de voorkant (daar staat nu het kenmerk), maar onder de titel, met een tekstballon.

## 19 nov 2026

- **Bevraging van de leerkrachten:** *Mijn lesopdracht* op axiomath.be (koepel, leerjaren, finaliteit, richtingen, geen schoolnaam). Een bestaand account krijgt de vraag in een venster, *Later* stelt ze een week uit; een nieuw account komt er meteen na de registratie. *Beheer → Dekking* toont zonder namen hoeveel leerkrachten het invulden, balken per koepel, finaliteit en leerjaar, en per graad en finaliteit elke richting tegen de koepels, ook de richtingen zonder leerkracht. Zie de README van `Website/leerkrachten/`. Online gezet.
- **Weber-Fechner** in Exponentiële en logaritmische functies (alle pakketten): in hoofdstuk 2 een subsectie *Waarom logaritmisch? De wet van Weber-Fechner* met een voorbeeld (merkbare stappen in gewicht), een korte oefening (`h2-k-weber`, lampen) en een opdracht over toonhoogte (`h2-o28`, de 88 toetsen van een piano); in hoofdstuk 3 een opdracht met grafiek over S(x) = k log x (`h3-o27`).
- **Prenten bij Kegelsneden:** een komeet (Halley, `h3-o9`) en een biljart (`h3-o20`), publiek domein, met de bron in `afbeeldingen/prenten/README.md`. De tunnel heeft al een figuur, het onweer staat alleen in het probleem en een korte oefening, en voor de koeltoren is er geen lijntekening in het publiek domein.
- **Marimo verkend** (https://docs.marimo.io/): reactieve Python-notebooks, bewaard als `.py`, online als HTML met WebAssembly. Niet geschikt voor de interactieve theorie (niet offline, traag laden op schoolcomputers); wel een kandidaat voor grote datasets met statistische software (zie dat punt in `TODO.md`).
- **Kenmerk op de voorkant:** een veelhoek per pakket rechtsboven (zie Voorkant in de ontwerpregels), met de lesuren per week van de koepel erin in plaats van het pakketnummer. Alle voorkanten (KOV en GO!) opnieuw gemaakt. De PDF's van de handboeken krijgen het kenmerk bij de volgende bouw: zie `TODO.md`.

## Eerder

- **3de graad, Goniometrische functies:** de leerkrachtentip over de voorkennis uit de 2de graad (goniometrische cirkel in graden voor pakket 4 en 5) aangepast in PR #47.
