# Handboeken wiskunde doorstroomfinaliteit

De handboeken staan per graad in een eigen map, en daarin per **leerplanpakket**. Elke richting volgt precies één pakket, dus elk handboek staat maar één keer in de repo, ook als meerdere richtingen het gebruiken.

| Graad | Map | Pakketten | Voorkant | Stand |
|---|---|---|---|---|
| 2de graad | [2de graad/](<2de graad/README.md>) | 5: Basis, B+, B+S', B+S, B+S'' | bordeaux met goud | indeling klaar, nog geen cursus |
| 3de graad | [3de graad/](<3de graad/README.md>) | 4: Basis, B+S, B+S', B+S'' | petrol met cyaan | eerste versies van alle handboeken |

```
Handboeken/
  <graad>/         2de graad, 3de graad
    <pakket>/      bv. 4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')
      <rubriek>/   Analyse, Algebra, Meetkunde, Discrete wiskunde, Data en onzekerheid, Onderzoekscompetentie
        <cursus>/  een eigen map per cursus, opgebouwd zoals Integralen
```

Een cursus staat dus vijf mappen diep (`\hoofdmap` is `../../../../../`), Onderzoekscompetentie vier. Houd de namen kort: Windows beperkt de padlengte tot 260 tekens.

Bouwen vanuit de hoofdmap: `python Opmaak/maak-pdf.py 4/Analyse/Integralen` bouwt een cursus van de 3de graad, `python Opmaak/maak-pdf.py "2de graad/5/Algebra/Reële getallen"` een van de 2de graad.

Een nieuwe cursus begint met een kopie van de cursus [Integralen](<3de graad/4 Economie-, Grieks-, Latijn-, Wetenschappen-Wiskunde (B+S'')/Analyse/Integralen/README.md>) en volgt de [ontwerpregels](../Ontwerp/ontwerpregels.md).
