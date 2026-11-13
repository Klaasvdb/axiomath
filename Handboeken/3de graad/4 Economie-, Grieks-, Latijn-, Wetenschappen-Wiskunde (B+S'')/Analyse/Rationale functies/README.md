# Rationale functies: handboek

Cursus voor pakket 4 (B+S''), leerplandoelen 24-25, volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Veeltermfuncties | `hoofdstukken/01-veeltermfuncties.tex` | LPD 24-25 (voorbereiding) | eerste versie, nog na te lezen |
| 2. Rationale functies | `hoofdstukken/02-rationale-functies.tex` | LPD 24-25 | eerste versie, nog na te lezen |
| 3. Vergelijkingen en ongelijkheden | `hoofdstukken/03-vergelijkingen.tex` | LPD 24-25 | eerste versie, nog na te lezen |

Of de veeltermfuncties van hogere graad bij deze doelen horen of elders in het leerplan staan, is nog na te kijken met de leerplantekst.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rationale-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rationale-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rationale-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rationale-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Rationale-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "4/Analyse/Rationale functies"
```

## Afbakening

- **Hoofdstuk 1:** euclidische deling, schema van Horner, reststelling (met bewijs) en factorstelling, ontbinden, multipliciteit, de grafiek van een veeltermfunctie schetsen.
- **Hoofdstuk 2:** domein, nulwaarden en perforaties, verticale, horizontale en schuine asymptoten (informeel, met de deling), de grafiek schetsen in zeven stappen, homografische functies als getransformeerde $\frac1x$.
- **Hoofdstuk 3:** rationale vergelijkingen met bestaansvoorwaarden, ongelijkheden met één breuk en een tekentabel, toepassingen (gemiddelde kost, lenzen, weerstanden, concentratie, snelheid).
- Limieten en afgeleiden (toppen berekenen) horen bij Limieten en afgeleiden.

## Eigen macro's

Zoals in Algemene functies: `\R`, `\dom`, `\ber`, `\inv`, `\tekentabel`, `\vol`, `\open`, `\kromme`, `\rooster`.

## Controle

Alle delingen, ontbindingen, asymptoten, tekentabellen, vergelijkingen en ongelijkheden zijn nagerekend met SymPy. Bewijzen en uitlegvragen zijn nagelezen, niet machinaal gecontroleerd. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
