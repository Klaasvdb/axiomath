# Handboeken wiskunde doorstroomfinaliteit

De handboeken staan per graad in een eigen map, en daarin per **leerplanpakket**. Elke richting volgt precies één pakket, dus elk handboek staat maar één keer in de repo, ook als meerdere richtingen het gebruiken. De inhoud van een cursus staat bovendien maar één keer, voor alle pakketten samen, in `<graad>/cursussen/<cursus>/`: zie "Eén bron per cursus" in [Opmaak/README.md](../Opmaak/README.md).

| Graad | Map | Pakketten | Voorkant | Stand |
|---|---|---|---|---|
| 2de graad | [2de graad/](<2de graad/README.md>) | 5: Basis, B+, B+S', B+S, B+S'' | bordeaux met goud | indeling klaar, nog geen cursus |
| 3de graad | [3de graad/](<3de graad/README.md>) | 4: Basis, B+S, B+S', B+S'' | petrol met cyaan | eerste versies van alle handboeken |

```
Handboeken/
  <graad>/         2de graad, 3de graad
    cursussen/
      <cursus>/    de bron: hoofdstukken, oefeningen, notatie.tex en afbeeldingen, voor alle pakketten
    <pakket>/      bv. 4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')
      <rubriek>/   Analyse, Algebra, Meetkunde, Discrete wiskunde, Data en onzekerheid, Onderzoekscompetentie
        <cursus>/  per pakket: handboek.tex (welke hoofdstukken), voorkant, README, Feedback en PDF's
```

De map van een pakket staat dus vijf mappen diep (`\hoofdmap` is `../../../../../`), Onderzoekscompetentie vier. Houd de namen kort: Windows beperkt de padlengte tot 260 tekens.

Bouwen vanuit de hoofdmap: `python Opmaak/maak-pdf.py 4/Analyse/Integralen` bouwt een cursus van de 3de graad, `python Opmaak/maak-pdf.py "2de graad/5/Algebra/Reële getallen"` een van de 2de graad.

Een nieuwe cursus volgt het model van [Integralen](<3de graad/4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Integralen/README.md>) (bron in [3de graad/cursussen/Integralen/](<3de graad/cursussen/Integralen/>)) en de [ontwerpregels](../Ontwerp/ontwerpregels.md). Krijgt een bestaande cursus een ander pakket, maak dan alleen de map van dat pakket en zet de verschillen met `\alleenvoor` in de bron, nooit een kopie.
