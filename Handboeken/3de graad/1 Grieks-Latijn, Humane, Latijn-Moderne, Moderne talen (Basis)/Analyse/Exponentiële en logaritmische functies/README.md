# Exponentiële en logaritmische functies: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 6-10 en keuzedoel K1, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Exponentiële en logaritmische functies/](<../../../cursussen/Exponentiële en logaritmische functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgestemd op Basis** (18 nov 2026). De versie kwam via pakket 2 en 3 van pakket 4 (PR #8, #26). Ze is nu ingekort en herschreven naar het leerplan Basis (LPD 7-10 en keuzedoel K1, met LPD 6 voor het grafisch oplossen met ICT). Alles staat met `\alleenvoor` en `pakketten:` in de gedeelde bron; pakket 2, 3 en 4 zijn ongewijzigd.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Exponentiële functies | `hoofdstukken/01-exponentiele-functies.tex` | LPD 6-10 | afgestemd op Basis, na te lezen |
| 2. Logaritmen | `hoofdstukken/02-logaritmen.tex` | LPD 7, 10 | afgestemd op Basis, na te lezen |
| 3. Logaritmische functies | `hoofdstukken/03-logaritmische-functies.tex` | K1 (keuzedoel) | afgestemd op Basis, na te lezen |

### Verschil met pakket 4

| Hoofdstuk | Valt weg in pakket 1 | Herschreven of toegevoegd in pakket 1 |
|---|---|---|
| 1 | Bewijzen van de rekenregels voor machten, van stijgen en dalen, gelijke machten en het model met halveringstijd (extra bij LPD 4); rekenen met letters (extra bij LPD 7: voorbeelden en oefeningen met $x$); de constructie van $2^{\sqrt2}$ (wenk LPD 8); horizontale verschuivingen; vergelijkingen met een ander grondtal in beide leden ($4^{x+1} = 8^x$, $3^{x^2} = 9^{x+4}$); sectie 1.4 over $\e$ en continue groei. Opdrachten weg: o2, o8, o16, o23-o27; test t6 | Bij elke rekenregel een controle met een getallenvoorbeeld in plaats van een bewijs; voorbeelden 3 en 7 met getallen; nieuw onderdeel "Toenemend en afnemend" met gedrag op oneindig en nulwaarden (LPD 8) en twee korte oefeningen, ook over de invloed van het grondtal met ICT; nieuw onderdeel "Uitrekken en verschuiven" met $k \cdot f(x)$ en $f(x) + k$ (LPD 9, eerste keer), voorbeeld $2 \cdot 3^x - 6$ en werkwijze; vergelijkingen grafisch oplossen met ICT (LPD 6) met een voorbeeld, een korte oefening en testvraag t8; varianten zonder letters of horizontale verschuiving van zes korte oefeningen, o3, o4 en t1-t3 |
| 2 | Bewijzen van de eigenschappen en rekenregels (extra bij LPD 4; de uitleg vooraf blijft); rekenen met letters (uitsplitsen met $a$ en $b$, $\log_3 9^x$); vergelijkingen met machten van een verschillend grondtal (voorbeeld $2^{x+1} = 3^x$); rekenen met $\e$ en $\ln$. Opdrachten weg: o4, o8, o9, o10, o24, o26, o27; test t6 | $\e$ alleen als getal en $\ln$ alleen als toets bij de verandering van grondtal; overal $\frac{\log x}{\log a}$; een getallenvoorbeeld bij de verandering van grondtal; voorbeelden 3 en 9 met getallen; verschillend grondtal: grafisch met ICT; varianten zonder $\e$, $\ln$ of letters van veertien korte oefeningen, o1-o3, o15, o17, o18 en t8 |
| 3 | Domein van samengestelde functies; transformaties van logaritmische grafieken; secties 3.2 (logaritmische vergelijkingen) en 3.3 (ongelijkheden). Opdrachten weg: o1-o6, o10, o12, o14, o15, o17, o18, o22, o23, o25, o26; Koppel 1; test t4-t6 | Afnemend stijgend en afnemend dalend (K1); gedrag op oneindig en nulwaarde; voorbeeld 2 over de kenmerken van $\log_{\frac12} x$; "Terug naar het probleem" staat in pakket 1 aan het einde van sectie 3.1, met $\log_2(N+1)$ in plaats van een ongelijkheid, en een korte oefening over het raadspel; varianten van de Start, h3-grafiek, h3-k-teken, o13, o16 (met $\log$), o19 en de opdrachten met een ongelijkheid in de uitwerking (o8, o20, o21: nu een vergelijking en dan stijgen of dalen); test t1-t3 en t7 nieuw |

Aantallen in pakket 1 (start, kort, opdrachten, koppel, test): hoofdstuk 1: 2, 18, 19, 2, 7; hoofdstuk 2: 2, 18, 20, 1, 7; hoofdstuk 3: 2, 3, 10, 1, 4. Het handboek telt 48 pagina's (was 64).

### Na te kijken

- **Bewijzen.** Alle bewijzen met letters vallen weg; korte verklaringen in woorden blijven (de groeifactor uit een percentage, de groeifactor over een periode, domein en bereik en de inverse in hoofdstuk 3). Is dat de goede grens, of moet ook daar het bewijskader weg?
- **$\ln$ als rekentoets.** Het getal $\e$ en $\ln$ staan niet in Basis. $\ln$ blijft als toets bij de verandering van grondtal, omdat veel uitwerkingen (van oefeningen die verder in Basis passen) $\frac{\ln x}{\ln a}$ gebruiken. Volledig schrappen vraagt varianten van nog een twintigtal uitwerkingen.
- **Transformaties en Algemene functies.** Pakket 1 voert $k \cdot f(x)$ en $f(x) + k$ hier zelf in (wenk LPD 9: waarschijnlijk de eerste keer). Kijk of dat strookt met wat hoofdstuk 2 (transformaties) van Algemene functies in pakket 1 houdt, en schrap zo nodig het dubbele werk daar of hier.
- **De inverse functie** wordt in hoofdstuk 3 ingevoerd met het spiegelen van punten, zonder voorkennis uit Algemene functies (hoofdstuk 3 daar is voor Basis niet nodig). De opwarmer vraagt niet meer naar de inverse.
- **Hoofdstuk 3 is een keuzedoel (K1).** De school beslist of het aan bod komt; het hoofdstuk is kort (10 opdrachten), en vijf daarvan oefenen exponentiële vergelijkingen uit hoofdstuk 2. Overweeg het als facultatief te markeren.
- **Vergelijkingen met hetzelfde grondtal** ($2^{x+1} = \frac18$, $4^x = 8$) blijven als rekenen met machten (LPD 7); het leerplan noemt alleen $b \cdot a^x = c$. Te bekijken of ook die weg kunnen.
- **ICT:** de tekst noemt de TI-84 (`intersect`). In de les is er geen laptop (ontwerpregels); een grafisch rekentoestel wel?
- De nieuwe opgaven en uitwerkingen (varianten en nieuwe oefeningen) zijn nagerekend met een script, maar nog niet nagelezen door een leerkracht.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Exponentiele-en-logaritmische-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Exponentiele-en-logaritmische-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Exponentiele-en-logaritmische-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Exponentiele-en-logaritmische-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Exponentiele-en-logaritmische-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "1/Analyse/Exponentiële en logaritmische functies"
```

## Controle

De wiskunde van de gedeelde stukken is in de bronversie nagerekend (SymPy, NumPy); de nieuwe getallen voor pakket 1 (varianten, ICT-oplossingen, raadspel) zijn nagerekend met Python. Gebouwd zonder ongedefinieerde verwijzingen of `??`; pakket 2, 3 en 4 geven dezelfde `gen/`-bestanden en dezelfde PDF-tekst als voor de aanpassing. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
