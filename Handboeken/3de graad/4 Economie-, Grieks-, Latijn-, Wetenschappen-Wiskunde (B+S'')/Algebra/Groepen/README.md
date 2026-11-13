# Groepen: handboek

Cursus voor pakket 4 (B+S''), leerplandoel 43 (verzamelingen met een bewerking analyseren aan de hand van een algebraïsche structuur), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). De cursus is volledig opnieuw geschreven vanuit het leerplan (III-WisS''-d, versie oktober 2024). Alle opgaven, contexten en figuren zijn eigen werk. De voorkant (Morris) komt uit `Ontwerp/voorkanten/`: pas ze daar aan.

| Hoofdstuk | Bestand | Leerplan | Status |
|---|---|---|---|
| 1. Bewerkingen | `hoofdstukken/01-bewerkingen.tex` | LPD 43 (eigenschappen van bewerkingen), LPD 4 | eerste versie, nog na te lezen |
| 2. Groepen | `hoofdstukken/02-groepen.tex` | LPD 43 (de groep, getallen, vectoren, matrices, modulo $n$) | eerste versie, nog na te lezen |
| 3. Symmetrieën en permutaties | `hoofdstukken/03-symmetrieen-en-permutaties.tex` | LPD 43 (symmetriegroepen, permutaties) | eerste versie, nog na te lezen |

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Groepen-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Groepen-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Groepen-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Groepen-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p4-Groepen-zelfstudie.pdf)

## Maken

Vanuit de hoofdmap van de repo:

```
python Opmaak/maak-pdf.py 4/Algebra/Groepen                  alles: handboek, oplossingen, leerkracht, zelfstudie
python Opmaak/maak-pdf.py 4/Algebra/Groepen --hoofdstuk 2    snel: alleen hoofdstuk 2, in snel-h2.pdf
```

Zoals bij Integralen: de grafieken worden bewaard in `figuren-cache/`, LaTeX leest `gen/`, en de oefeningen staan in `oefeningen/*.yaml`. Pas een opgave dus aan in de YAML.

## Afbakening

Het leerplan laat de keuze van de algebraïsche structuur vrij (groep of vectorruimte). Deze cursus kiest de groep, en neemt alle voorbeelden op die het leerplan bij groepen noemt: getallenverzamelingen met optelling of vermenigvuldiging, vectoren en matrices met optelling, de gehele getallen modulo $n$ (klokrekenen), symmetriegroepen (de gelijkzijdige driehoek) en permutaties.

- **Hoofdstuk 1:** bewerking (gesloten), bewerkingstabel, associatief, commutatief, neutraal element en invers element (ook symmetrisch element genoemd, genoteerd $a'$). De uniciteit van het neutraal element en van de inverse is bewezen. Het leerplan vraagt de structuur te definiëren vanuit de eigenschappen bij concrete voorbeelden: daarom staan de eigenschappen eerst los, en komt de groep pas in hoofdstuk 2.
- **Hoofdstuk 2:** de definitie van een (commutatieve) groep en de orde van een groep, met een overzicht van bekende groepen. Rekenregels met bewijs: vergelijkingen $a \ast x = b$, schrappen, $(a \ast b)' = b' \ast a'$, en de eigenschap van de groepstabel (elk element één keer in elke rij en kolom). Optellen modulo $n$, met bewijs dat $(\mathbb{Z}_n, \oplus)$ een groep is. Vermenigvuldigen modulo $n$ als kleine uitbreiding: dat het een groep is op $\mathbb{Z}_n \setminus \{0\}$ precies als $n$ priem is, staat alleen als uitleg en als opdracht van niveau 3. De notatie $\oplus$ en $\odot$ is een keuze van deze cursus, om verwarring met de gewone optelling te vermijden.
- **Hoofdstuk 3:** isometrie, symmetrie en samenstelling, de symmetriegroep (met bewijs), de gelijkzijdige driehoek met volledige tabel, de rechthoek en regelmatige veelhoeken. Permutaties in twee rijen, $S_n$ met $n!$ elementen (met bewijs), samenstellen en inverteren. Sectie 3 vergelijkt groepen met de orde van een element; *dezelfde structuur* en *isomorf* staan alleen in de uitleg, niet in een kader.
- **Niet opgenomen** (in het leerplan bij het complementair gedeelte): deelgroepen, de stelling van Lagrange en morfismen. Ze komen alleen voor in opdrachten van niveau 3 en in een Koppel-oefening (de logaritme tussen $(\mathbb{R}^+_0, \cdot)$ en $(\mathbb{R}, +)$). Ook de vectorruimte is niet opgenomen. De cyclusnotatie van permutaties is weggelaten.

## Eigen macro's

- `notatie.tex`: `\N`, `\Z`, `\Q`, `\R`, `\C`, `\Zn{n}`, `\plusn` en `\maaln` ($\oplus$ en $\odot$), `\perm{...}` voor een permutatie in twee rijen;
- de omgeving `bewtabel` voor een bewerkingstabel met raster: `\begin{bewtabel}[breedte]{aantal}{bewerking}{kopregel}`, alle vakjes in wiskundemodus;
- figuren (binnen een `tikzpicture`): `\driehoek`, `\driehoekassen`, `\vierkant`, `\rechthoek` met de nummers van de hoekpunten, `\klok{n}` voor $\mathbb{Z}_n$, `\pijlen{...}` voor het pijlendiagram van een permutatie, en `\draaipijl`;
- zoals in Integralen: `\naast`, `\figuren`, `metgrafiek`, `stappenbreed` en `stappenvrij`.

## Controle

Alle tabellen (driehoek, rechthoek, vierkant, modulo $n$), de samenstellingen en inversen van permutaties, de ordes, de weekdagen en de controlegetallen modulo 97 zijn nagerekend met een script. Bewijzen en uitlegvragen zijn niet nagerekend. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. De prenten staan in `afbeeldingen/prenten/README.md`.
