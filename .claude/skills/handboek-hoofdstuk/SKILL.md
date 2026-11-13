---
name: handboek-hoofdstuk
description: Schrijf of herwerk een hoofdstuk of cursus van de eigen wiskundehandboeken (3de graad doorstroom, Vlaanderen) in de vaste opmaak en opbouw, met handboek-, leerkrachten- en zelfstudieversie. Gebruik dit altijd als de gebruiker vraagt om een hoofdstuk, cursus of handboek te schrijven, om een bestaande cursus om te zetten, om opdrachten of Koppel-oefeningen toe te voegen aan een cursus, of om iets aan de opmaak van de handboeken te wijzigen, ook als het woord "skill" of "sjabloon" niet valt.
---

# Hoofdstuk van een eigen handboek schrijven

De ontwerpregels staan in `Ontwerp/ontwerpregels.md`: lees die eerst, ze hebben voorrang op alles hieronder. Het werkende voorbeeld is de cursus `Analyse/Integralen/` (in `Handboeken/3de graad/4 .../`), met de hoofdstukken in `hoofdstukken/` als model. De opmaak en de bouwscripts staan gedeeld in `Opmaak/` (zie `Opmaak/README.md`): pas ze daar aan en kopieer ze nooit naar een cursus. De eigen macro's van een cursus staan in `notatie.tex`. Die volgt alle huidige regels. Kijk daar hoe iets eruitziet in plaats van het opnieuw uit te vinden.

De gebruiker is wiskundeleerkracht en schrijft Nederlands. Schrijf de leerstof in helder Nederlands voor leerlingen van 16-18 jaar.

## Werkwijze

1. **Bepaal de leerstof.** Zoek de cursus, het pakket en de leerplandoelen op in de README van het pakket onder `Handboeken/` en in het leerplan van dat pakket (zie `Handboeken/README.md`; het leerplan zelf zit niet in de repo, lees het online). Een bestaande cursus toont wat erin hoort. Is de afbakening onduidelijk, leg dan kort voor wat je zou opnemen.
2. **Zet de cursus klaar** als die nog niet bestaat: kopieer `handboek.tex`, `leerkracht.tex`, `zelfstudie.tex` en `notatie.tex` uit `Analyse/Integralen/` naar `Handboeken/<graad>/<pakket>/<rubriek>/<cursus>/` (graad: `2de graad` of `3de graad`), en maak `hoofdstukken/` en `oefeningen/`. De opmaak, het documentskelet, de bouwscripts en de voorkant staan in `Opmaak/` en `Ontwerp/` en worden niet gekopieerd. Pas in `handboek.tex` `\cursustitel` en `\cursushoofdstukken` aan.
3. **Schrijf het hoofdstuk** volgens de opbouw hieronder.
4. **Bouw en kijk** (zie Controle).
5. **Meld** wat er staat, wat je zelf hebt beslist en wat de leerkracht moet nakijken.

## Voorkant

Elk handboek uit de README's van de pakketten heeft al een voorkant: zie het deel Voorkant in de ontwerpregels en `Ontwerp/voorkanten/README.md`.

**Bij een nieuwe cursus:** draai `py -3.13 -P maak-voorkanten.py` in `Ontwerp/voorkanten/` zodra de cursus een `handboek.tex` heeft. Dat zet `voorkant-gegevens.tex` in de cursus (de gegevens en de naam van het motief). De voorkant zelf, het motief, het schilderij en het logo leest de opmaak rechtstreeks uit `Ontwerp/`.

**Pas je iets aan,** doe het dan in `Ontwerp/voorkanten/`: alle cursussen lezen de voorkant daar rechtstreeks.

**Bij een nieuw onderwerp:**

1. **Kies een werk** dat iets met de leerstof te maken heeft en leg die link in één zin uit. Neem geen eerder gebruikte kunstenaar. Meld de keuze aan de gebruiker, zodat die ze kan aanpassen.
2. **Haal het op:** voeg een regel toe aan `SCHILDERIJEN` in `Ontwerp/omslagen/maak-omslagen.py` en draai dat script vanuit `Ontwerp/omslagen/` met de naam van het werk als argument. Het slaat een werk over als de licentie op Commons geen publiek domein is. De band bedekt onderaan een deel van de afbeelding: kijk of er niets belangrijks wegvalt, en of het schilderij geen eigen rand heeft (`RAND`).
3. **Teken een motief** in `Ontwerp/voorkanten/motieven/<naam>.tex`: `\omslagbestand` en `\omslagbron`, `\omslagrand` (de bovenrand als functie van `\x`) en `\omslagmotief` (de vormen). Laat het motief niet door de titel, de gegevens of het logo lopen, en houd `\omslagrand` boven 10,2 cm, want daar eindigen de titel van twee regels en de afbeelding.
4. **Zet het handboek in `HANDBOEKEN_LIJST`** van `maak-voorkanten.py`, en een lange titel in `TITELS`. Het leerjaar vul je alleen in als het vastligt.
5. **Vul de tabel met kunstwerken** in de ontwerpregels aan.

Een wijziging in `voorkant.tex` of in een motief maakt de grafieken niet opnieuw: die bestanden vallen buiten de hash in `maak-pdf.py`.

## Inhoud

Elk boek heeft na de voorkant een inhoudstafel: `\inhoudstafel` in `handboek.tex`. Ze vult zich vanzelf met `\mychapter`, `\section`, `\opdrachtenkop` en `\opdrachtsectie`. Kijk na het bouwen of alles nog op één pagina past. Een extra onderdeel zonder nummer zet je erin met `\phantomsection\addcontentsline{toc}{chapter}{Naam}`, zoals Zo werk je en Antwoorden.

## Opbouw in LaTeX

```latex
\mychapter{2}{Titel}                  % het nummer is ook de kleur: moet het echte hoofdstuknummer zijn
\begin{oefeningen}[Start]             % strook; Opwarmer en Verken met \blokkop{...}
\section{Groot deel}                  % genummerd
\subsection{Onderdeel}                % zonder nummer
\begin{theorie} ... \end{theorie}     % definitie, eigenschap, formule: volledig omkaderd, zonder titel
\begin{stelling}{Naam} ... \end{stelling}     % binnen theorie: wit kader, naam op de lijn
\begin{bewijs} ... \bewijsregel{formule} ... \end{bewijs}   % binnen theorie, onder de stelling
\begin{werkwijze} ... \end{werkwijze} % hoe je een soort opgave aanpakt: balk links, label komt vanzelf
Gewone tekst                          % uitleg: al de rest, zonder kader
\voorbeeld{}{opgave\label{vb:x}}{uitwerking met \begin{stappen}: berekening & reden \\ ... \end{stappen}}
\lkr{tip}  \thuis{uitleg}  \nujij{opgave}{antwoord}
\begin{oefeningen}                    % zonder titel
\oef{h2-afgeleide}                    % altijd op een eigen regel; de oefening staat in de bank
\end{oefeningen}
\opdrachtenkop                        % nieuwe pagina, felle band
\oef{h2-x}                            % niveau, thema en opgave staan in oefeningen/02-*.yaml
\opdrachtsectie{Koppel}
\oef{h2-koppel-1}                     % in de bank: koppel met rubriek en onderwerp
\opdrachtsectie{Test jezelf}
\herhaalschema{\fzv{oef:t1}{oef:y} \fv{oef:t2}{vb:x}{oef:z}}   % test, (voorbeeld,) oefening
```

Elke oefening heeft een kort antwoord en een uitwerking. Labels moeten uniek zijn binnen de cursus: begin ze met een afkorting van het hoofdstuk zodra er meerdere hoofdstukken zijn.

## Oefeningenbank

In Integralen staan de oefeningen niet in de hoofdstukken maar in `oefeningen/<hoofdstuk>.yaml`, de bron voor de PDF's en de online versie. `Opmaak/oefeningenbank.py` beschrijft alle velden.

```yaml
- id: h3-sub            # vast en uniek, nooit wijzigen, ook niet als de oefening verhuist; het label wordt oef:h3-sub
  soort: kort           # start, kort, opdracht, koppel of test
  niveau: 2             # alleen bij opdracht, koppel en test
  thema: |-
    onderwerp
  opgave: |-
    Bereken.
  lijst: reeks          # of enumerate; kolommen alleen bij reeks
  kolommen: 3
  delen:
    - opgave: |-
        $\ig 2x(x^2 + 3)^4\dx$
      antwoord: |-
        $\tfrac15(x^2+3)^5+C$
      uitwerking: |-
        $u=x^2+3$, ...
```

- Schrijf tekst altijd als blok (`|-`): zo blijven backslashes en de accent in `f'(x)` onaangetast.
- Zet antwoord en uitwerking per deelvraag als het kan, dat is nodig voor de online versie. Alleen als een uitwerking meerdere deelvragen samen behandelt, staat ze als `uitwerking` bij de oefening zelf.
- Een figuur rechts komt in `figuur` (`code`, eventueel `opties`), een prent in `prent` (`naam`). De volgorde in het boek bepaalt het hoofdstuk: `\needspace` en andere opmaak blijven daar, vlak voor `\oef{id}`.
- Een oefening mag in de bank staan zonder `\oef`: dan is ze er alleen voor online. In het boek mag elke oefening maar één keer staan.
- LaTeX leest `gen/`: draai altijd eerst `Opmaak/maak-pdf.py`, ook vóór een `latexmk`.

## Theorie, werkwijze of uitleg

Kies voor elk stuk tekst bewust, en wees streng met het theoriekader: leerlingen zoeken daar wat ze moeten kennen. Een kader is niet de standaard. Niet alles onder een kop hoeft in een kader te staan.

- **`theorie`** bevat alleen definities, eigenschappen en formules. De test: zou het op een formuleblad of in een lijst met definities staan? Hoort er een opmerking of waarschuwing bij, zet die dan onder het kader. Een figuur staat alleen in het kader als ze de definitie of de formule zelf toont; een grafiek van een concreet voorbeeld hoort eronder.
- **Formules** in een `theorie` staan altijd in `$\formule{...}$`: vet en in de kleur van het hoofdstuk. Doe dat voor elke formule, niet voor een selectie, dus bij een rekenkundige rij voor het recursieve én het expliciete voorschrift. Gebruik geen `\boldsymbol`. Voorwaarden in de lopende tekst, zoals `$q \neq 1$`, blijven gewoon.
- **`werkwijze`** zegt wat je moet doen: de aanpak van een soort opgave, zoals "los `u_n = x` op" of "bereken eerst het aantal termen". Begin de tekst niet met het woord Werkwijze, want dat label komt er automatisch voor. Geef een `werkwijze` geen formule die leerlingen moeten kennen: die hoort in een `theorie` erboven.
- **Uitleg** is gewone tekst zonder kader, voor al de rest: toelichting, een bekend voorbeeld, een vergelijking tussen begrippen, een waarschuwing, wanneer iets handig is. De rij van Fibonacci is bijvoorbeeld uitleg: ze staat niet in een `theorie`, omdat ze een voorbeeld is en geen begrip dat de rest van de leerstof draagt. Ook "expliciet of recursief?" is uitleg, want die vergelijkt alleen wat al gedefinieerd is.
- **Bewijzen** horen in de `theorie`, in de omgeving `bewijs`, en niet in een `\voorbeeld`. Alleen een bewijs dat leerlingen zelf moeten leren maken, zoals een limiet bewijzen met de definitie, is wel een `\voorbeeld`: dat is een soort opgave en de test kan ernaar verwijzen.

## Bindtekst en grafieken

Zie de delen Bindtekst en Grafieken in de ontwerpregels. In de praktijk:

- Schrijf een hoofdstuk niet als een reeks kaders. Begin met een korte alinea over het hoofdstuk, en laat elke sectie en elk onderdeel starten met tekst die het probleem en het idee uitlegt. Zeg in voorbeelden ook waarom je iets doet: begin de uitwerking met `\uitleg{...}` over de aanpak, en leg elke stap in volzinnen uit. Die uitleg staat cursief. `\uitleg` en de cursieve kolom van `stappen` staan in `Opmaak/opmaak.tex`.
- Leerstof per onderdeel: uitleg, `theorie`, `\voorbeeld`, `werkwijze`, korte oefening. De werkwijze komt dus na het voorbeeld. Geef bij alles wat je uitlegt een voorbeeld, ook per regel van een tabel. Werk voorbeelden uit: alleen een lijst met één opgave per regel van een tabel mag met de vermelding "(Niet uitgewerkt.)". Elk voorbeeld is één opgave, tenzij het net draait om het verschil tussen twee opgaven.
- Schrijf een bewijs als redenering: korte bindtekst ("stel", "neem", "dus", "waaruit", "zodat") met de belangrijke formules in `\bewijsregel`, niet als tabel met `stappen`. Houd het algebraïsch: "neem $x + h \in [a, b]$" in plaats van een hele zin. Volg de bewijzen van Integralen als model. De omgeving `bewijs` zet achteraan een vierkantje in de kleur van het hoofdstuk.
- Zet elke stelling en eigenschap in `\begin{stelling}{Naam}` binnen de `theorie`, altijd met een naam. Definities blijven erbuiten. `stelling` en `\bewijsregel` staan in `Opmaak/opmaak.tex`.
- Teken veel meer dan strikt nodig is. Vraag bij elk voorschrift, gebied of elke context: zou een grafiek hier helpen? Meestal is het antwoord ja. Zet ook grafieken in opgaven (aflezen, kiezen) en in uitgewerkte oplossingen als de opgave vraagt om te tekenen.
- Macro's die ook in de oplossingen voorkomen, staan in de preambule en niet in een hoofdstuk, want de oplossingen-PDF's lezen de hoofdstukken niet. Integralen heeft daarvoor `notatie.tex`, met `\rooster`, `\kromme`, `\gebied`, `\riemann`, `\lichaam`, `\limr`, `\liml`, `\naast`, `\figuren` en de omgeving `metgrafiek`: kopieer die als de nieuwe cursus grafieken gebruikt.
- Figuren in `\figuren` staan met hun onderkant op de lijn, ook een `baseline`-optie werkt niet door de bewaarde grafieken: zet een teken tussen twee figuren met `\raisebox{9mm}{$\leqslant$}`.

## Oefeningen schrijven

- Het grootste deel gaat naar de Opdrachten. Tussen de leerstof staat telkens een korte oefening die op het voorbeeld lijkt.
- **Bundel.** Herhaal niet telkens dezelfde vraag als losse opgave: zet "Bereken"-opgaven samen in één opgave met deelvragen (`reeks`), en zet daarvoor `\needspace` zodat ze niet breekt. Voorzie grote drillbundels waar rekenvaardigheid centraal staat.
- **Schrijf eerst, meng daarna.** Maak per onderwerp een reeks van makkelijk naar moeilijk, ken niveaus toe, en zet ze dan door elkaar: eerst niveau 1, dan 2, dan 3. Binnen een niveau wisselen de onderwerpen elkaar af en staan opgaven met dezelfde vraag niet naast elkaar. Het punt is dat leerlingen zelf de methode moeten herkennen, dus een zichtbare indeling per onderwerp doet dat teniet.
- Niveaus: 1 is rechtstreeks toepassen, 2 is een context of een extra stap, 3 is een bewijs of een echte denkopgave.
- Voeg opgaven toe die het onderscheid tussen gelijkaardige leerstof oefenen en de klassieke fouten aanpakken, zoals `n` in plaats van `n-1`.
- Schrijf alle opgaven zelf, want de cursussen worden publiek: neem nooit opgaven of teksten over uit bestaande handboeken, ook niet met andere getallen. De cursussen zijn publiek en niet-commercieel.

## Kleine prenten

Een prent mag bij een opdracht of Koppel-oefening over een concreet ding of dier, niet bij de leerstof, de korte oefeningen of de test. Houd het op een paar per hoofdstuk. Gebruik dezelfde prent niet twee keer.

In de oefeningenbank is dat het veld `prent` met `naam: slak`, voor `afbeeldingen/prenten/slak.png`.

Neem alleen publiek domein van Wikimedia Commons en kijk de licentie per bestand na via de API (`extmetadata`, veld `LicenseShortName`). De lijntekeningen van Pearson Scott Foresman (titel met `PSF`) zijn de eerste keuze: ze zijn scherp en geven één stijl. Stuur een `User-Agent` zonder persoonsgegevens mee en werk traag, want Commons antwoordt anders met HTTP 429. Maak de prent grijs en hoogstens 560 pixels breed, en vul `afbeeldingen/prenten/README.md` aan met de bron, de maker en de licentie.

## Koppel kiezen

In de 2de graad is er geen Koppel (zie het deel 2de graad in de ontwerpregels): daar werken de handboeken als modules, en daar begint elk begrip met een concreet voorbeeld en komt een bewijs alleen waar het logisch is.


Zoek verbanden die een leerling echt iets leren, bijvoorbeeld dat een meetkundige rij een exponentiële functie op natuurlijke getallen is. Sla leerstof over die vanzelf uit elkaar volgt (limieten, afgeleiden, integralen). Liever vier sterke oefeningen dan acht gezochte. Controleer of de leerstof al gezien kan zijn volgens de volgorde in de README van het pakket, en meld het als dat onzeker is.

## Controle

Vanuit de hoofdmap van de repo, in PowerShell (TeX Live staat in het PATH; gebruik `py -3.13 -P`):

```powershell
py -3.13 -P Opmaak/maak-pdf.py 4/Analyse/Integralen                  # alle versies, met bewaarde grafieken
py -3.13 -P Opmaak/maak-pdf.py 4/Analyse/Integralen --hoofdstuk 2    # tijdens het schrijven: alleen dat hoofdstuk, in snel-h2.pdf
```

De cursus is `<pakketnummer>/<rubriek>/<cursus>`. Het script bewaart de grafieken, want TikZ rekent ze anders bij elke ronde opnieuw uit.

Zoek in de `.log`-bestanden naar regels die beginnen met `!` en naar `undefined`. Render daarna de pagina's met PyMuPDF naar PNG in de scratchpad en **bekijk ze echt**, want de meeste fouten zie je alleen op de pagina. Let op:

- een strook of titel alleen onderaan een pagina;
- een opgave die loskomt van haar deelvragen, of twee gelijke opgaven naast elkaar;
- een `Nu jij` met het antwoord op een andere pagina;
- een figuur die buiten het kader loopt, of formules die regels uit elkaar duwen (gebruik `\tfrac` in lopende tekst);
- een formule die over twee regels breekt in een kader: zet ze op een eigen regel met `\qquad`;
- een pagina die half leeg blijft: `theorie` breekt alleen tussen stelling en bewijs (een bewijs is één blok, en een stelling blijft bij de definitie erboven), dus een lang bewijs kan naar de volgende pagina schuiven;
- een formule die uit een tabel of kader loopt: kijk in de `.log` naar `Overfull \hbox`;
- een schema `Fout? Herhaal` met een 0, wat wijst op een verkeerd label.

Reken afgeronde getallen na met een kort script in de scratchpad; daar zaten eerder de fouten. De rest mag met de hand. Meld altijd dat de leerkracht de opgaven moet nalezen, en meld eerlijk wat niet getest is, zoals de afdruk op de schoolkopieerder.

Ruim bouwbestanden op met `latexmk -c <bestand>.tex`. Commit niet zonder toestemming.

## Valkuilen in LaTeX

- Gebruik `{-3}` bij een minteken in een rijtje (`$-3,\ {-3}$`), anders behandelt `icomma` het als aftrekking.
- `reeks` is alleen voor korte rijtjes; volzinnen gaan in `enumerate`.
- Een nieuw commando dat TikZ gebruikt in een sectiekop moet robuust zijn (`\DeclareRobustCommand`).
- Noem een nieuwe omgeving niet naar een bestaand TeX-commando zoals `kern`.
