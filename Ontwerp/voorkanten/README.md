# Voorkanten van de handboeken

Alle voorkanten komen hier vandaan: 47 handboeken van de 3de graad (16 onderwerpen) en 72 van de 2de graad (18 onderwerpen). De regels en de lijst met kunstwerken staan in [de ontwerpregels](../ontwerpregels.md).

| Bestand | Inhoud |
|---|---|
| `voorkant.tex` | De indeling, voor alle handboeken dezelfde. De cursussen lezen dit bestand rechtstreeks |
| `motieven/<naam>.tex` | Per onderwerp: het kunstwerk, de bovenrand van de band en de vormen |
| `maak-voorkanten.py` | De lijst met handboeken en gegevens per pakket, en het bouwscript |
| `alle-voorkanten.pdf` | Het resultaat: een pagina per handboek, met bladwijzers. Niet in git |

## Bouwen

In PowerShell, vanuit deze map:

```
py -3.13 -P maak-voorkanten.py
```

Dat maakt `alle-voorkanten.pdf` en schrijft in elke cursus die al een `handboek.tex` heeft een `voorkant-gegevens.tex` (nu Integralen en Matrices): de gegevens en de naam van het motief. De voorkant, het motief, het schilderij en het logo kopieert het niet: de cursussen lezen ze hier rechtstreeks. Pas ze dus alleen hier aan. De PDF van de cursus zelf maak je daarna opnieuw met `Opmaak/maak-pdf.py`.

De schilderijen komen uit `Ontwerp/omslagen/` (gemaakt met `maak-omslagen.py`), het logo uit `Ontwerp/logo/`.

## Een voorkant per koepel

De inhoud van een handboek is voor elke koepel dezelfde, de voorkant niet: welke richtingen een handboek gebruiken en hoeveel uur wiskunde ze hebben, verschilt per koepel (zie [koepels.md](../koepels.md)). Beslissing van 15 nov 2026.

- **KOV** houdt de voorkant zoals hij was: de richtingen en uren per pakket uit `PAKKETTEN` en `PAKKETTEN_2`. Die voorkant staat in de PDF van de cursus.
- **GO!** krijgt een eigen voorkant met dezelfde indeling, maar met de richtingen die het handboek volgens GO! gebruiken en de uren uit de indicatieve lessentabel van GO! (`Handboeken/koepels.yaml`). `maak-voorkanten.py` maakt ze in `alle-voorkanten-go.pdf`.
- **Te veel richtingen?** Dan komt de korte naam van een groep in de plaats (`label` in `koepels.yaml`), of "Alle richtingen behalve …" als dat korter is (`richtingen_tekst`).
- **Op de website** kies je je koepel. Een PDF downloaden met de voorkant van GO! gaat zo: `Website/leerkrachten/maak.py` maakt per editie een *laag*, de voorkant zonder kunstwerk (`\omslagzonderkunst`), en de browser legt die laag over de eerste pagina van de PDF. Een laag is ongeveer 0,2 MB; met het kunstwerk erin zou het 1 à 2 MB per editie zijn.
- **POV en OVSG** krijgen voorlopig geen eigen voorkant. OVSG-scholen volgen de leerplannen van GO!, KOV of POV. Een voorkant voor POV maken we als iemand erom vraagt.

## 2de graad

De 2de graad staat in dezelfde bestanden: `PAKKETTEN_2` en `MODULES_2` in `maak-voorkanten.py`, met een eigen kleur (`KLEUR_2`: bordeaux en goud). De motieven heten `motieven/g2-*.tex`; een reeks verwante handboeken deelt een kunstwerk. De werken en de link met de leerstof staan in [Handboeken/2de graad/README.md](<../../Handboeken/2de graad/README.md>).

`voorstellen-2de-graad.png` toont de 18 voorkanten van pakket 5 naast elkaar. Maak het opnieuw na een wijziging, na `maak-voorkanten.py`: `py -3.13 -P maak-overzicht-2de-graad.py`.

## Nog na te kijken

- **Leerjaar in de pakketten 1, 2 en 3:** staat nog niet op de voorkant, omdat de verdeling over het 5de en 6de jaar niet vastligt. Zet het in `HANDBOEKEN_LIJST` zodra ze vastligt. Dan kan bij pakket 1 en 2 ook het juiste aantal uren voor dat jaar komen.
- **Cursussen die nog niet bestaan:** hun voorkant is klaar en komt vanzelf mee zodra de cursus een `handboek.tex` heeft.

