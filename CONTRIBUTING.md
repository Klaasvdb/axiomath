# Meewerken aan Axiomath

Fijn dat je meewerkt. Alle leerkrachten en iedereen die wiskunde geeft of leert in het Vlaamse secundair onderwijs zijn welkom.

## Wat je kunt doen

- **Nalezen:** de cursussen zijn eerste versies. Fouten in uitleg, opgaven of antwoorden meld je als *issue*, met de plaats (cursus, hoofdstuk, nummer van de oefening).
- **Oefeningen schrijven:** in `oefeningen/*.yaml` van de cursus, in `Handboeken/<graad>/cursussen/<cursus>/` (één bron voor alle pakketten). De velden staan bovenaan `Opmaak/oefeningenbank.py`.
- **Een hoofdstuk of cursus maken:** begin met een issue, zodat we niet dubbel werk doen. Gebruik de [ontwerpregels](Ontwerp/ontwerpregels.md) en de cursus Integralen als model.
- **Het leerplan van een ander net koppelen** aan de cursussen.
- **De website of de tooling verbeteren.**

## Spelregels

1. **Alleen eigen werk.** Neem geen opgaven, teksten, figuren of voorbeelden over uit bestaande handboeken, ook niet met andere getallen. Dat geldt ook voor je eigen werk dat al ergens anders gepubliceerd is, tenzij je zelf de rechten hebt.
2. **Licentie.** Met je bijdrage ga je ermee akkoord dat ze onder dezelfde licentie komt als de rest: zie [LICENSE.md](LICENSE.md). Inhoud is CC BY-NC-SA 4.0, code is PolyForm Noncommercial.
3. **Afbeeldingen.** Alleen eigen tekeningen of publiek domein (zoals Wikimedia Commons, met de licentie per bestand nagekeken). Zet de bron en de licentie in `afbeeldingen/prenten/README.md`.
4. **Geen leerplantekst.** Verwijs naar leerplandoelen met hun nummer; kopieer de tekst niet.
5. **Antwoorden moeten kloppen.** Reken ze na, zeker afgeronde getallen. Meld in je pull request wat je hebt nagekeken.
6. **Eén pull request, één onderwerp.** Klein is beter om na te lezen.

## Bouwen en nakijken

Zie de [README](README.md). Bouw de PDF vóór je een pull request opent, en kijk de pagina's echt na: de meeste fouten zie je alleen op de pagina. De lijst met aandachtspunten staat in [de skill](.claude/skills/handboek-hoofdstuk/SKILL.md), onder *Controle*.

## Werken met Claude Code

In `.claude/skills/` staat een skill die Claude Code de opbouw en de regels van een hoofdstuk leert. Je mag ermee werken, maar jij blijft verantwoordelijk voor wat je indient: lees alles na.
