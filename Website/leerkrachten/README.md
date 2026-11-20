# Axiomath voor leerkrachten

Een site waarop leerkrachten de handboeken lezen en feedback geven: **https://axiomath.be**. Accounts zijn voor leerkrachten, op uitnodiging. De site draait op de hosting van Vimexx (PHP en SQLite), dezelfde als Puntmuts.

## Zonder account

Iedereen ziet de boekenkast en kan van elk handboek de editie **Handboek** lezen in de lezer of als PDF downloaden. De andere edities (leerkrachtenversie, zelfstudie, oplossingen, uitgewerkte oplossingen) en alle feedback zijn alleen voor wie aangemeld is: de server weigert ze zonder account (`versie()` en `boeken()` in `lib.php`). Aanmelden staat op `#/aanmelden`; een uitnodigingslink (`#/?code=…`) opent meteen het formulier.

## Wat een leerkracht kan

- **Boekenkast**: alle handboeken per pakket (ook zonder account, zie hierboven), met de voorkant, de status uit `voortgang.yaml` en het aantal open opmerkingen.
- **Koepel, graad, finaliteit en richting**: je kiest de leerplannen van je school (KOV of GO!; bij "OVSG of POV?" staat wat je dan kiest), de graad, de finaliteit (doorstroom, dubbele finaliteit, arbeidsmarkt) en je richting. Het handboek van de arbeidsmarktfinaliteit is op aanvraag: de site vraagt wie interesse heeft (`interesse()` in `app.js`, bij een pakket met `op_aanvraag`). Dan zie je eerst de verplichte handboeken, gegroepeerd per voorgesteld leerjaar (een voorstel: de school kiest), en daarachter apart de keuzes en de uitbreidingen. De gegevens komen uit `Handboeken/koepels.yaml` (`maak.py` zet ze in `boeken.json`).
- **Voorkant van je koepel**: bij GO! toont de kast de GO!-voorkanten, en een PDF downloaden legt de GO!-laag over de eerste pagina (`downloadMetVoorkant` in `app.js`, met pdf-lib van cdnjs). Een kleine melding onderaan zegt dat het handboek wordt samengesteld. De lagen staan in `public_html/omslagen/go-laag-*.pdf` (zie `koepel_omslagen` in `maak.py`).
- **Lezer**: elke editie (handboek, leerkrachtenversie, zelfstudie, oplossingen, uitgewerkte oplossingen), getekend in de browser met PDF.js. Met de **markeerstift** (toets M) trek je een kader rond een stuk tekst, een oefening of een figuur, of klik je op één plek. De site bewaart de pagina, de plaats en de tekst onder het kader (het citaat, uit de tekstlaag van de PDF), en zoekt op in welk hoofdstuk en welke sectie dat staat.
- **Feedback op drie niveaus**: op een plek in het boek, over een heel handboek, of algemeen (de premisse van Axiomath, deze website).
- **Elke opmerking krijgt een soort** uit een vast menu (fout in de wiskunde, tikfout, oefening of oplossing, uitleg onduidelijk, figuur, leerplan, didactisch voorstel, pluim, vraag, andere) en een **ernst** (klein, belangrijk, dringend).
- Collega's zien elkaars opmerkingen en kunnen ze **steunen** ("Ik ook"). Zo komen er minder dubbele opmerkingen, en zie je wat veel leerkrachten storend vinden.
- **Als app**: op een gsm of tablet zet je axiomath.be op het beginscherm (Android: *App installeren*; iPhone: deelknop → *Zet op beginscherm*). Dan opent de site schermvullend, zoals een app.
- **Mijn lesopdracht** (`#/profiel`, ook via het accountmenu): koepel (KOV, GO!, OVSG, POV of andere), de leerjaren, de finaliteit en de richtingen waarin je lesgeeft, en een vrije opmerking. Geen schoolnaam, en collega's zien het niet. Een nieuw account komt na *Account maken* meteen op deze pagina. Een bestaand account zonder lesopdracht krijgt de vraag in een venster bij een nieuw bezoek; *Later* stelt ze een week uit (`profiel_stand()` in `lib.php`).
- **Mijn feedback**: alles wat je gaf, met de status en de antwoorden van het team. Zolang het team een opmerking nog niet oppakte, kan je ze bewerken of verwijderen.

## Wat het team kan (rol beheerder)

- **Feedback**: filter op pakket, handboek, niveau, soort, ernst, status en tekst. Standaard staan ze in de volgorde om te verwerken: per handboek, per editie, op paginavolgorde. Elke opmerking heeft duidelijke knoppen: **✓ Goedkeuren** (komt in het handboek) en **✗ Afkeuren** (met een uitleg die de leerkracht als antwoord van het team ziet). Een goedgekeurde opmerking krijgt **Zet op verwerkt** als ze in de bron staat, en kan altijd terug naar nieuw. Statussen: nieuw → goedgekeurd of afgekeurd → verwerkt. Een antwoord geven verandert de status niet. Bij elke opmerking staat een interne notitie.
- **Botsingen**: staan er andere opmerkingen op dezelfde plek (zelfde hoofdstuk en sectie, of dezelfde pagina), dan toont de kaart ze in een oranje kader, en goedkeuren vraagt bevestiging als daar al iets goedgekeurd of verwerkt is. Zo maakt een tweede leerkracht niet ongemerkt ongedaan wat een eerste vroeg.
- **Logboek** (*Beheer → Logboek*): één lijst met elke stap van elke opmerking, nooit gewist (ook niet als de opmerking verwijderd wordt): ingediend, bewerkt, goed- of afgekeurd, verwerkt, antwoorden, notities, met wie, wanneer en waarom. Filter op handboek, soort stap en tekst; exporteer als Markdown. Per opmerking staat een inklapbaar *Logboek van deze opmerking*. Een leerkracht ziet het niet.
- **Export**: de selectie als **Markdown zonder namen** (per handboek, hoofdstuk en pagina, met citaat en afvinkvakjes, klaar om naast de cursus te leggen of aan Claude te geven) of als **CSV** voor Excel (met namen).
- **Per handboek**: een tabel met de open feedback per handboek en per soort.
- **Dekking**: wat leerkrachten bij *Mijn lesopdracht* invulden, zonder namen: hoeveel accounts het invulden, balken per koepel, finaliteit en leerjaar, en per graad en finaliteit een tabel met elke richting tegen de koepels. Ook de richtingen zonder leerkracht staan erin (filter *Alleen zonder leerkracht*): daar zoeken we nog collega's.
- **Leerkrachten**: uitnodigingscodes maken (met een uitnodigingstekst om door te sturen), accounts blokkeren, rollen wijzigen, een herstelcode maken als iemand het wachtwoord vergat. En een **sleutel voor Claude** geven (zie hieronder).

## Feedback verwerken met Claude Code

Wie feedback verwerkt, heeft geen account nodig. Een beheerder maakt bij *Beheer → Leerkrachten* een geheime **sleutel voor Claude**, met een naam (voor wie), en deelt die langs een veilige weg. Daarmee kan je de feedback en het logboek ophalen (zonder namen), een goedgekeurde opmerking op *verwerkt* zetten, een interne notitie zetten en de leerkracht antwoorden als team. **Goed- of afkeuren kan niet met een sleutel**: dat doet het team op de site. Accounts beheren, namen zien of feedback verwijderen kan er niet mee. Je ziet de sleutel één keer: bewaar hem in `~/.axiomath-sleutel`. Op de server staat alleen zijn hash. Antwoorden komen bij de leerkracht als antwoord van het team, met de naam van de sleutel. Intrekken kan in dezelfde tab.

```
py -3.13 -P feedback.py haal Integralen        # de goedgekeurde opmerkingen, naar feedback/open.md en open.json (in .gitignore)
py -3.13 -P feedback.py logboek Integralen     # wat er al beslist en verwerkt is, naar feedback/logboek.md
py -3.13 -P feedback.py zet 12 verwerkt --antwoord "Aangepast, dank je!" --notitie "PR #57"
```

In Claude Code doet de skill `feedback-verwerken` (`.claude/skills/`) dat voor je: `/feedback-verwerken Integralen`. Ze haalt de goedgekeurde feedback en het logboek op, zoekt elke opmerking in de bron, legt voor wat ze wil aanpassen en antwoorden, en zet pas daarna de status op de site (alleen *verwerkt*).

## Werkwijze

Vanuit deze map, in PowerShell:

```
py -3.13 -P maak.py          # bouwt server/: nieuwe PDF's als versie, voorkanten, lijst met handboeken
py -3.13 -P maak.py --graden 2,3   # idem, met de 2de graad erbij (lokaal kijken; online via GRADEN_OP_SITE in maak.py)
py -3.13 -P test/test.py     # de testreeks (PHP lokaal, lege databank); --browser voor een doorloop in Edge
py -3.13 -P uitrol.py        # draait de testreeks en zet alles online; faalt er iets, dan gaat er niets online
```

Een handboek opnieuw gebouwd met `Opmaak/maak-pdf.py`? Draai `maak.py` en `uitrol.py`: alleen de nieuwe versies gaan online.

Zelf kijken zonder uit te rollen: `py -3.13 -P test/test.py --open` start de echte server lokaal met een lege databank (de startcode staat in de uitvoer).

## Versies van de PDF's

`maak.py` bewaart elke PDF als een vaste **versie** (`server/app/versies/<h>.pdf`, met `<h>.json` ernaast: pagina's, paginamaten, inhoudstafel). Een opmerking hoort bij de versie waarop ze gemaakt is, dus het kader staat altijd op de juiste plek, ook nadat het boek opnieuw gebouwd is. Leerkrachten lezen altijd de jongste versie (`laatste.json`). Online wordt een versie nooit overschreven. De hosting heeft maar 2000 MB en een nieuwe bouw van alle handboeken is zo'n 1 GB: wis daarom af en toe de oudere versies met `py -3.13 -P uitrol.py --opruimen --alleen` (eerst `--opruimen --droog` om te zien wat weg zou gaan). Dat wist online elke versie die niet de jongste van een editie is en geen feedback heeft; een versie met feedback blijft staan, want daar hangt het kader van de leerkracht aan. Het controleert dat met de sleutel voor Claude (`~/.axiomath-sleutel`) en wist niets zonder. Doe dit vóór een grote uitrol.

## Eerste keer online

1. Voeg `axiomath.be` toe als domein in DirectAdmin (Vimexx) en zet er een certificaat op (Let's Encrypt). Laat de DNS van axiomath.be naar die hosting wijzen.
2. `py -3.13 -P maak.py` en `py -3.13 -P uitrol.py`. De eerste keer maakt `uitrol.py` `server/app/config.php` met een **startcode** en toont die.
3. Ga naar https://axiomath.be, kies *Uitnodiging* en maak met de startcode je beheerdersaccount. Daarna werkt de startcode niet meer.
4. Maak bij *Beheer → Leerkrachten* codes voor collega's en stuur de uitnodigingstekst door.

De inloggegevens van DirectAdmin komen uit `~/.netrc_vimmex`, zoals bij Puntmuts. De eerste uitrol zet ongeveer 370 MB aan PDF's online.

## Moet de repo privé?

Nee. De handboeken zijn vrij (CC BY-NC-SA). Wat privé moet blijven, staat niet in de repo: accounts, namen, e-mailadressen en feedback zitten in de databank op de server, en `config.php` staat in `.gitignore`. De Markdown-export bevat geen namen, dus die mag je wel in een issue of naast een cursus zetten.

## Bestanden

| Bestand | Wat |
|---|---|
| `server/app/lib.php` | de hele server: accounts (wachtwoorden met `password_hash`, sessies in een HttpOnly-koekje, snelheidsrem), feedback, beheer, export. Het menu met soorten staat bovenaan (`SOORTEN`). |
| `server/public_html/api/index.php` | de enige ingang: `api/index.php?r=<pad>`. Wijzigen gaat met POST en de kop `X-Axiomath` (tegen CSRF); PATCH en DELETE reizen mee als `X-Methode`. |
| `server/public_html/index.html`, `app.css`, `app.js` | de app in één pagina, routering via de hash (`#/boek/<sleutel>`, `#/lees/<versie>?p=12&f=34`, `#/mijn`, `#/algemeen`, `#/beheer/<tab>`). PDF.js 3.11.174 komt van cdnjs. |
| `server/public_html/manifest.webmanifest`, `sw.js` | de site als **app op het beginscherm** van een gsm of tablet. Het manifest geeft naam, kleuren en iconen (`icoon-*.png`, die maakt `maak.py`); de service worker haalt altijd eerst het net en valt zonder verbinding terug op de app in de cache, met de melding dat ze offline is. De API en de PDF's gaan nooit door de cache. Wijzig je de lijst `SCHIL` in `sw.js`, verhoog dan `CACHE`. Op een gsm toont de boekenkast een kaartje *Axiomath als app* (wegklikbaar), en *Over* legt uit hoe het werkt: Android en Chrome/Edge vragen het zelf, op een iPhone gaat het met de deelknop van Safari. |
| `server/public_html/plannen.js` | de pagina **Plannen** (`#/plannen`, ook zonder account): toekomstige plannen met van elk een werkend voorproefje (differentiërend oefenen, interactieve theorie, automatisch nakijken met Fout? Herhaal, toetsen in versie A en B, het handboek als webpagina, de open oefeningenbank). De opgaven zijn eigen voorbeelden met willekeurige getallen. Laadt vóór `app.js` en gebruikt er `h()` en `scherm()` uit. |
| `server/public_html/voorbeeld/integralen/` | een kopie van de voorbeeldcursus in `Website/` (niet in git; `maak.py` kopieert ze, `uitrol.py` zet ze telkens helemaal online). Pas ze aan in `Website/`. |
| `server/public_html/.htaccess` | altijd `https://axiomath.be` zonder www, geen mapoverzichten |
| `maak.py` | bouwt `boeken.json`, `laatste.json`, `versies/`, `omslagen/`, en kopieert lettertype, logo en schilderij |
| `uitrol.py` | zet alles online via de DirectAdmin-API |
| `feedback.py` | de feedback ophalen en verwerken met een sleutel voor Claude (alleen lokaal, niet online) |
| `test/test.py`, `test/browser.py` | de testreeks |

De lijst met handboeken komt uit `Ontwerp/voorkanten/maak-voorkanten.py`, de status uit `voortgang.yaml`, het lettertype uit `../assets/fonts/`, het schilderij op de aanmeldpagina uit `Ontwerp/omslagen/` (Rafaël, *De school van Athene*, publiek domein).
