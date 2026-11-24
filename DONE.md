# Gedaan

Wat uit [TODO.md](TODO.md) af is, met de datum en waar het staat. Nieuwste bovenaan. Wat nog open is bij een afgewerkt punt (nalezen, na te kijken), blijft in `TODO.md`.

## 20 nov 2026

- **Volledige bouw met het kenmerk:** alle 123 handboeken opnieuw gebouwd en online. De hosting zat vol, dus per handboek uitgerold: nieuwe versies erop, de site omzetten, dan de oude versies zonder feedback wissen (956 MB vrij).
- **Feedback op Tweedegraadsfuncties verwerkt** (#32-#41, #48-#53, gegeven op pakket 5; de bron is gedeeld, dus alle pakketten 1-5 zijn opnieuw gebouwd). Hoofdstuk 1: twee punten op dezelfde hoogte als stelling, het voorschrift zonder top. Hoofdstuk 2: in pakket 4-5 eerst kwadraatafsplitsen en daarmee de formule voor de top. Hoofdstuk 3: het discriminantbewijs in puntjes, het bewijs van de ontbinding met de oplossingen, de som met de symmetrie, de top uit de nulwaarden, 25 nieuwe deelvragen (parameters en gevarieerde opdrachten). Hoofdstuk 4: tekenschema vanuit een schets, doorzichtige inkleuring, "vierkantswortels" in plaats van "de wortel nemen", een voorbeeld met de fout "D < 0, dus geen oplossingen", f boven g, 10 nieuwe deelvragen met parameters. Alle nieuwe antwoorden nagerekend met SymPy.
- **De 16 opmerkingen op de site afgerond:** goedgekeurd en op *Verwerkt* gezet, met een antwoord. Feedback van het team is voortaan meteen goedgekeurd.
- **"De vierkantswortel nemen" ook in Goniometrie** (2de graad, de werkwijze bij de grondformule): nu "dat kwadraat heeft twee vierkantswortels". Bij de kettingregel en het samenstellen blijft "neem je de wortel": daar gaat het over de bewerking.
- **Grafisch vóór de regel in Functies** (naar feedback #37): het tekenschema van een eerstegraadsfunctie vertrekt nu van een schets (stijgende of dalende rechte door de nulwaarde); het kader is een samenvatting. Pakket 1-5 opnieuw gebouwd en online.
- **Verwerkt in de lezer:** wat uit de feedback verwerkt is, staat op axiomath.be bij de plek, met een stippellijn naar een kader *Verwerkt: …* (bron: `verwerkt.yaml` per cursus; de skill `feedback-verwerken` houdt het bij).
- **Kernvaardigheden bij Extra** op axiomath.be: label *Extra* in de kast, en bij een richting een eigen blok *Extra* in plaats van bij de verplichte handboeken.
- **Feedbackteller op de site:** staat niet meer rechtsboven op de voorkant (daar staat nu het kenmerk), maar onder de titel, met een tekstballon.

## 19 nov 2026

- **Bevraging van de leerkrachten:** *Mijn lesopdracht* op axiomath.be (koepel, leerjaren, finaliteit, richtingen, geen schoolnaam). Een bestaand account krijgt de vraag in een venster, *Later* stelt ze een week uit; een nieuw account komt er meteen na de registratie. *Beheer → Dekking* toont zonder namen hoeveel leerkrachten het invulden, balken per koepel, finaliteit en leerjaar, en per graad en finaliteit elke richting tegen de koepels, ook de richtingen zonder leerkracht. Zie de README van `Website/leerkrachten/`. Online gezet.
- **Weber-Fechner** in Exponentiële en logaritmische functies (alle pakketten): in hoofdstuk 2 een subsectie *Waarom logaritmisch? De wet van Weber-Fechner* met een voorbeeld (merkbare stappen in gewicht), een korte oefening (`h2-k-weber`, lampen) en een opdracht over toonhoogte (`h2-o28`, de 88 toetsen van een piano); in hoofdstuk 3 een opdracht met grafiek over S(x) = k log x (`h3-o27`).
- **Prenten bij Kegelsneden:** een komeet (Halley, `h3-o9`) en een biljart (`h3-o20`), publiek domein, met de bron in `afbeeldingen/prenten/README.md`. De tunnel heeft al een figuur, het onweer staat alleen in het probleem en een korte oefening, en voor de koeltoren is er geen lijntekening in het publiek domein.
- **Marimo verkend** (https://docs.marimo.io/): reactieve Python-notebooks, bewaard als `.py`, online als HTML met WebAssembly. Niet geschikt voor de interactieve theorie (niet offline, traag laden op schoolcomputers); wel een kandidaat voor grote datasets met statistische software (zie dat punt in `TODO.md`).
- **Kenmerk op de voorkant:** een veelhoek per pakket rechtsboven (zie Voorkant in de ontwerpregels), met de lesuren per week van de koepel erin in plaats van het pakketnummer. Alle voorkanten (KOV en GO!) opnieuw gemaakt. De PDF's van de handboeken krijgen het kenmerk bij de volgende bouw: zie `TODO.md`.

## Eerder

- **3de graad, Goniometrische functies:** de leerkrachtentip over de voorkennis uit de 2de graad (goniometrische cirkel in graden voor pakket 4 en 5) aangepast in PR #47.
