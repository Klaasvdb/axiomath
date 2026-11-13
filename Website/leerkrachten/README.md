# Axiomath voor leerkrachten

Een site waarop leerkrachten de handboeken lezen en feedback geven: **https://axiomath.be**. Accounts zijn voor leerkrachten, op uitnodiging. De site draait op de hosting van Vimexx (PHP en SQLite), dezelfde als Puntmuts.

## Zonder account

Iedereen ziet de boekenkast en kan van elk handboek de editie **Handboek** lezen in de lezer of als PDF downloaden. De andere edities (leerkrachtenversie, zelfstudie, oplossingen, uitgewerkte oplossingen) en alle feedback zijn alleen voor wie aangemeld is: de server weigert ze zonder account (`versie()` en `boeken()` in `lib.php`). Aanmelden staat op `#/aanmelden`; een uitnodigingslink (`#/?code=…`) opent meteen het formulier.

## Wat een leerkracht kan

- **Boekenkast**: alle handboeken per pakket (ook zonder account, zie hierboven), met de voorkant, de status uit `voortgang.yaml` en het aantal open opmerkingen.
- **Lezer**: elke editie (handboek, leerkrachtenversie, zelfstudie, oplossingen, uitgewerkte oplossingen), getekend in de browser met PDF.js. Met de **markeerstift** (toets M) trek je een kader rond een stuk tekst, een oefening of een figuur, of klik je op één plek. De site bewaart de pagina, de plaats en de tekst onder het kader (het citaat, uit de tekstlaag van de PDF), en zoekt op in welk hoofdstuk en welke sectie dat staat.
- **Feedback op drie niveaus**: op een plek in het boek, over een heel handboek, of algemeen (de premisse van Axiomath, deze website).
- **Elke opmerking krijgt een soort** uit een vast menu (fout in de wiskunde, tikfout, oefening of oplossing, uitleg onduidelijk, figuur, leerplan, didactisch voorstel, pluim, vraag, andere) en een **ernst** (klein, belangrijk, dringend).
- Collega's zien elkaars opmerkingen en kunnen ze **steunen** ("Ik ook"). Zo komen er minder dubbele opmerkingen, en zie je wat veel leerkrachten storend vinden.
- **Mijn feedback**: alles wat je gaf, met de status en de antwoorden van het team. Zolang het team een opmerking nog niet oppakte, kan je ze bewerken of verwijderen.

## Wat het team kan (rol beheerder)

- **Feedback**: filter op pakket, handboek, niveau, soort, ernst, status en tekst. Standaard staan ze in de volgorde om te verwerken: per handboek, per editie, op paginavolgorde. Geef elke opmerking een status (nieuw, in behandeling, verwerkt, niet weerhouden), een interne notitie, en antwoord de leerkracht.
- **Export**: de selectie als **Markdown zonder namen** (per handboek, hoofdstuk en pagina, met citaat en afvinkvakjes, klaar om naast de cursus te leggen of aan Claude te geven) of als **CSV** voor Excel (met namen).
- **Per handboek**: een tabel met de open feedback per handboek en per soort.
- **Leerkrachten**: uitnodigingscodes maken (met een uitnodigingstekst om door te sturen), accounts blokkeren, rollen wijzigen, een herstelcode maken als iemand het wachtwoord vergat.

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

`maak.py` bewaart elke PDF als een vaste **versie** (`server/app/versies/<h>.pdf`, met `<h>.json` ernaast: pagina's, paginamaten, inhoudstafel). Een opmerking hoort bij de versie waarop ze gemaakt is, dus het kader staat altijd op de juiste plek, ook nadat het boek opnieuw gebouwd is. Leerkrachten lezen altijd de jongste versie (`laatste.json`). Online wordt een versie nooit overschreven of gewist.

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
| `server/public_html/.htaccess` | altijd `https://axiomath.be` zonder www, geen mapoverzichten |
| `maak.py` | bouwt `boeken.json`, `laatste.json`, `versies/`, `omslagen/`, en kopieert lettertype, logo en schilderij |
| `uitrol.py` | zet alles online via de DirectAdmin-API |
| `test/test.py`, `test/browser.py` | de testreeks |

De lijst met handboeken komt uit `Ontwerp/voorkanten/maak-voorkanten.py`, de status uit `voortgang.yaml`, het lettertype uit `../assets/fonts/`, het schilderij op de aanmeldpagina uit `Ontwerp/omslagen/` (Rafaël, *De school van Athene*, publiek domein).
