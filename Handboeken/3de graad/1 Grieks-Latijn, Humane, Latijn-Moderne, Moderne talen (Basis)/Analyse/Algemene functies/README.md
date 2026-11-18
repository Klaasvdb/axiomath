# Algemene functies: handboek (pakket 1)

Cursus voor pakket 1 (Basis), LPD 5-6 (met de transformaties voor LPD 9 en 12, en de inverse voor keuzedoel K1), volgens de [ontwerpregels](../../../../../Ontwerp/ontwerpregels.md). De opmaak en de bouwscripts zijn gedeeld: zie [Opmaak/README.md](../../../../../Opmaak/README.md). Alle opgaven, contexten en figuren zijn eigen werk.

**Bron:** de hoofdstukken, oefeningen, `notatie.tex` en afbeeldingen staan één keer voor alle pakketten in [cursussen/Algemene functies/](<../../../cursussen/Algemene functies/>). Wat maar voor sommige pakketten geldt, staat daar in `\alleenvoor` (zie [Opmaak/pakketten.py](<../../../../../Opmaak/pakketten.py>)). Deze map kiest de hoofdstukken in `handboek.tex`.

**Afgeleide versie, afgestemd op Basis (18 nov 2026).** Afgeleid van de versie voor pakket 2 (PR #25), die via pakket 3 van pakket 4 (PR #7) komt. Daarna afgestemd op het leerplan Basis (KOV III-Wis-d, oktober 2024): LPD 5 (kenmerken van een functie op de grafiek, in een context), LPD 6 (vergelijkingen grafisch oplossen met ICT), de transformaties die LPD 9 en LPD 12 gebruiken, en de inverse functie als voorbereiding op keuzedoel K1. Wat alleen voor pakket 1 geldt, staat in de bron in `\alleenvoor{1}`; wat in pakket 1 wegvalt in `\begin{alleenvoor}{2,3,4}` of met `pakketten: [2, 3, 4]` in de YAML. Pakket 2, 3 en 4 zijn daardoor niet veranderd (de `gen/`-bestanden zijn identiek).

| Hoofdstuk | Bestand | Leerplan Basis | Status |
|---|---|---|---|
| 1. Functies en hun eigenschappen | `hoofdstukken/01-eigenschappen.tex` | LPD 5, 6 (en 4) | eerste versie, afgestemd op Basis, nog na te lezen |
| 2. Transformaties van grafieken | `hoofdstukken/02-transformaties.tex` | voorbereiding op LPD 9 en 12 | eerste versie, afgestemd op Basis, nog na te lezen |
| 3. Inverse functies | `hoofdstukken/03-samenstellen-inverse.tex` | voorbereiding op keuzedoel K1 | eerste versie, afgestemd op Basis, nog na te lezen |

## Leerplan

- **Hoofdstuk 1 is de kern (LPD 5 en 6).** Het leerplan vraagt kenmerken op de grafiek lezen in een context (praktisch domein en bereik, nulwaarden, tekenverloop, stijgen, dalen en constant, extrema, toenemend en afnemend stijgen en dalen, symmetrie, snijpunt met de verticale as) en vergelijkingen grafisch oplossen met ICT, met de twee grafieken van $f$ en $g$ in plaats van de verschilfunctie. Het leerplan noemt geen lestijden per doel.
- **Hoofdstuk 2 (transformaties)** staat niet als eigen doel in Basis: LPD 9 (exponentiële functies) en LPD 12 (algemene sinusfunctie) gebruiken de transformaties $f(x) + k$, $f(x - k)$, $k \cdot f(x)$, $f(x/k)$ en de spiegeling om de $x$-as. De cursussen Exponentiële en logaritmische functies en Goniometrische functies van pakket 1 verwijzen voor de transformaties naar dit hoofdstuk, daarom blijft het. Spiegelen om de $y$-as ($f(-x)$) vraagt het leerplan niet, maar het blijft: Exponentiële functies legt er de grafiek van $\bigl(\frac12\bigr)^x$ mee uit.
- **Hoofdstuk 3 heet in pakket 1 "Inverse functies".** Basis vraagt geen samengestelde functies (geen kettingregel). De inverse functie is alleen nodig voor keuzedoel K1 (de logaritmische functie als inverse van $a^x$, met de spiegeling om $y = x$); Exponentiële en logaritmische functies (hoofdstuk 3) en de Koppel over $\bgsin$ in Goniometrische functies verwijzen ernaar. Een school die K1 niet kiest, kan het hoofdstuk overslaan (zo staat het in de leerkrachtennota). `Handboeken/koepels.yaml` noemt Algemene functies niet apart.

## Wat er anders is dan in pakket 4

| Hoofdstuk | In pakket 1 weg | In pakket 1 herschreven of toegevoegd | Reden |
|---|---|---|---|
| 1 | Alle bewijzen (teken tussen nulwaarden, even of oneven exponent, van stijgen naar dalen, symmetrie van even en oneven functies, oneven functie in 0, even en oneven machten); het domein van breuken en wortels berekenen (voorbeelden 1-2, korte oefeningen, opdracht drill domein, test 1); het bereik berekenen met kwadraat afsplitsen; de subsecties "Een factor met een exponent" en "Een functie met een noemer"; stijgen en dalen aantonen met de definitie; opdrachten met bewijzen (som en product, even plus oneven, stijgend met de definitie, symmetrie en verloop, som en product van stijgende functies), tekentabellen van breuken, bereik berekenen, functie ontwerpen met wortels en breuken, even en oneven met breuken; test 6 (tekentabel met noemer); Koppel 2 en 3 | Praktisch domein en praktisch bereik (tekst, Nu jij, korte oefening, test 1); verklarend argument met de grafiek voor "één proefgetal per interval"; constant op een interval; nieuwe subsectie "Hoe snel stijgt of daalt ze?" (toenemend, afnemend en constant stijgen en dalen, met tabel van toenames, voorbeeld, werkwijze en korte oefening); nieuwe sectie 1.4 "Vergelijkingen grafisch oplossen" met ICT (theorie, werkwijze TI-84 en GeoGebra, voorbeeld met twee planten, korte oefening); Terug naar het probleem daar, met de top van de parabool en $W(p) = 1000$ grafisch; korte uitleg waarom een oneven functie door de oorsprong gaat; nieuwe opdrachten: hartslag tijdens een training, glazen vullen, twee koppen thee (ICT), medicijn in het bloed (ICT); opdracht drill nulwaarden zonder breuken, wortels en absolute waarden; opdracht "waar zit de fout?" zonder domein van breuken, met twee nieuwe uitspraken; Koppel over de normale verdeling zonder voorschrift; tests 8 (grafisch oplossen met ICT) en 9 (toenemend en afnemend stijgen) | LPD 5 (en de wenken: contexten, grafieken zonder voorschrift zoals hartslag, toenemende en afnemende stijging, praktisch domein en bereik, snijpunt met de verticale as; extra: situatie en grafiek verbinden), LPD 6 (ICT, $f(x) = g(x)$ met twee grafieken, extra: ongelijkheden), LPD 4 (beargumenteren in plaats van bewijzen); Statistiek van pakket 1 heeft geen voorschrift van de Gausskromme |
| 2 | Alle bewijzen (zeven); opdrachten over symmetrie na een transformatie, symmetrie na verschuiven, alle parabolen gelijkvormig, horizontaal of verticaal uitrekken, absolute waarde buiten en binnen; Koppel 3 (normale dichtheid); test 5 (basisfuncties) | Uitleg met GeoGebra en schuifbalken in 2.4; nieuwe opdracht met schuifbalken; leerkrachtennota | Wenken bij LPD 9 en 12 (ICT, grafische betekenis, volgorde); geen bewijzen; Statistiek van pakket 1 zonder dichtheidsfunctie. Test 5 viel ook weg zodat het schema Fout? Herhaal niet alleen op een pagina staat |
| 3 | Heel sectie 3.1 Samengestelde functies (functies na elkaar, domein van een samenstelling, ontbinden, met hun voorbeelden en korte oefeningen); alle bewijzen; de opmerking dat het omgekeerde van "stijgend of dalend is injectief" niet geldt; opdrachten met samenstellingen (tien, waaronder de olievlek en inverse controleren met samenstellen) en met bewijzen (homografische functie, eigen inverse, snijpunten van $f$ en $\inv{f}$, injectief bewijzen); tests 1, 2 en 5 (samenstellen, ontbinden) en test 3 | Titel "Inverse functies"; inleiding zonder samenstelling; voorbeeld injectief met de top van de parabool in plaats van een bewijs; verklarend argument voor de spiegeling om $y = x$, met de link naar de logaritmische functie; Terug naar het probleem zonder $r \circ s$ (eerst omrekenen, dan invullen); opdrachten "waar of niet waar" en "waar zit de fout?" zonder samenstelling; nieuwe opdracht: een inverse met ICT ($x^3 + x$); tests 8 (injectief) en 9 (een kaars: inverse in een context); leerkrachtennota | Keuzedoel K1 en zijn wenk; geen kettingregel in Basis; LPD 6 (ICT). Test 3 (inverse van $4 - 3x$) viel weg omdat test 9 hetzelfde toetst in een context, en zodat het schema Fout? Herhaal bij de test blijft |

Aantallen in pakket 1 (korte oefeningen, opdrachten, Koppel, Test jezelf): hoofdstuk 1: 11, 19, 1, 8; hoofdstuk 2: 12, 20, 2, 6; hoofdstuk 3: 6, 11, 2, 5. In pakket 4: 14, 26, 3, 7; 12, 24, 3, 7; 11, 24, 3, 7. Het handboek telt 49 pagina's (voorheen 60).

## Na te kijken

- **Algebra uit de 2de graad die blijft:** de tekentabel van een ontbonden veelterm van graad 3 (voorbeeld 2, korte oefening, test), de top van een parabool met $-\frac{b}{2a}$, kwadraat afsplitsen in hoofdstuk 2 (Opwarmer, opdracht 25) en even en oneven aantonen met $f(-x)$ (sectie 1.5, met de veeltermen, opdrachten en test). Het leerplan Basis vraagt die kenmerken vooral op de grafiek; of de voorkennis uit het basisleerplan van de 2de graad (II-Wis-d) volstaat, is niet nagekeken.
- **Basisfuncties $\sqrt{x}$, $|x|$ en $\frac1x$** (hoofdstuk 2 en 3) blijven als voorbeeld voor de transformaties en de inverse. Basis gebruikt de transformaties alleen bij $a^x$ en $\sin x$; een school kan zich daar ook tot parabolen beperken.
- **Hoofdstuk 3 blijft vrij algebraïsch** (inverse van $\sqrt{x - 1}$, $3 - \frac1x$, domein beperken). K1 vraagt alleen de logaritmische functie als inverse van $a^x$. Een kortere versie (alleen terugdraaien, de spiegeling om $y = x$ en de grafiek) is mogelijk.
- **ICT:** de werkwijzen noemen de TI-84 en GeoGebra; de schuifbalken bestaan alleen in GeoGebra (of een andere app). Niet getest op een toestel.
- **Pagina 7** (einde van sectie 1.1) bevat maar één korte oefening, omdat elke sectie op een nieuwe pagina begint; in pakket 4 komt zo'n bijna lege pagina ook voor.

## PDF's

De PDF's staan niet in git maar bij de [release](https://github.com/Klaasvdb/axiomath/releases/tag/v0.3-uitgebreide-theorie):

- [Handboek](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Algemene-functies-handboek.pdf)
- [Handboek, numerieke oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Algemene-functies-handboek-numerieke-oplossingen.pdf)
- [Handboek, uitgewerkte oplossingen](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Algemene-functies-handboek-uitgewerkte-oplossingen.pdf)
- [Leerkracht](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Algemene-functies-leerkracht.pdf)
- [Zelfstudie](https://github.com/Klaasvdb/axiomath/releases/download/v0.3-uitgebreide-theorie/p1-Algemene-functies-zelfstudie.pdf)

## Maken

```
python Opmaak/maak-pdf.py "1/Analyse/Algemene functies"
```

## Controle

De wiskunde van de bronversie is daar nagerekend (SymPy, NumPy). De nieuwe getallen voor pakket 1 (snijpunten en maxima bij de planten, de thee, het medicijn, de korte oefening en test met ICT, de temperatuur uit de Verken, de inverse van $x^3 + x$) zijn op 18 nov 2026 nagerekend in Python. Na het aanpassen gebouwd zonder ongedefinieerde verwijzingen en zonder `??` in de PDF's; de `gen/`-bestanden van pakket 2, 3 en 4 zijn identiek aan die van voor de aanpassing. Niet getest: de afdruk op de schoolkopieerder en het gebruik in de klas. Geen prenten.
