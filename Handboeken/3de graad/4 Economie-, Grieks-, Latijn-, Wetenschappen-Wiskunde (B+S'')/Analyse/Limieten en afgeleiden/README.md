# Limieten en afgeleiden: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 26-30, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Limieten en continuïteit | `hoofdstukken/01-limieten.tex` | LPD 26-30 | eerste versie, nog na te lezen |
| 2. De afgeleide | `hoofdstukken/02-afgeleide.tex` | LPD 26-30 | eerste versie, nog na te lezen |
| 3. De kettingregel | `hoofdstukken/03-kettingregel.tex` | LPD 26-30 | eerste versie, nog na te lezen |
| 4. Toepassingen van afgeleiden | `hoofdstukken/04-toepassingen.tex` | LPD 26-30 | eerste versie, nog na te lezen |

De verdeling van de leerstof over de afzonderlijke doelen 26 tot 30 is nog na te kijken met de leerplantekst.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Limieten-en-afgeleiden-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Limieten-en-afgeleiden-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Limieten-en-afgeleiden-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Limieten-en-afgeleiden-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Limieten-en-afgeleiden-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Analyse/Limieten en afgeleiden"
```

## Afbakening

- **Hoofdstuk 1:** limietbegrip (informeel en met $\varepsilon$-$\delta$, met bewijzen van de rekenregels), linker- en rechterlimiet, rekenregels, onbepaalde vormen $\frac00$ en $\frac{\infty}{\infty}$, asymptoten als limieten, continuïteit en de tussenwaardestelling.
- **Hoofdstuk 2:** differentiequotiënt, afgeleide in een punt, raaklijn, ogenblikkelijke snelheid, afgeleide functie, machtregel (bewijs voor gehele exponenten en voor $\frac12$, voor elke reële exponent bij $x > 0$ in hoofdstuk 3), de vier rekenregels met bewijs, afleidbaar en continu.
- **Hoofdstuk 3:** kettingregel (aannemelijk gemaakt), afgeleiden van $\sin$, $\cos$, $\tan$ (met bewijs, behalve $(\e^x)' = \e^x$), $\e^x$, $a^x$, $\ln x$, $\log_a x$.
- **Hoofdstuk 4:** stijgen, dalen en extrema met de tekentabel van $f'$, holheid en buigpunten met $f''$, optimaliseren (weide, blik, doos, redder).
- **Hol en bol:** hol is $\cup$ (zoals een dalparabool), bol is $\cap$. Er bestaan andere afspraken; het boek koppelt de woorden telkens aan de figuur.
- Integralen staan in een aparte cursus.

## Eigen macro's

Zoals in Algemene functies (`\R`, `\dom`, `\tekentabel`, `\kromme`, `\rooster`, ...); daarnaast `\e`, `\Z`, en `\limr`, `\liml` zoals in Integralen.

## Controle

Alle limieten, afgeleiden, extrema en buigpunten zijn nagerekend met SymPy, de contexten (blik, doos, redder, afkoeling) ook numeriek. Bewijzen en uitlegvragen zijn nagelezen, niet machinaal gecontroleerd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
