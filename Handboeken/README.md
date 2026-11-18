# Handboeken wiskunde 2de en 3de graad

De handboeken staan per graad in een eigen map, en daarin per **leerplanpakket**. De doorstroomfinaliteit heeft de eerste nummers, daarna volgen de dubbele finaliteit (D/A) en, in de 2de graad, de arbeidsmarktfinaliteit (A). Elke richting volgt precies één pakket, dus elk handboek staat maar één keer in de repo, ook als meerdere richtingen het gebruiken. De inhoud van een cursus staat bovendien maar één keer, voor alle pakketten samen, in `<graad>/cursussen/<cursus>/`: zie "Eén bron per cursus" in [Opmaak/README.md](../Opmaak/README.md).

| Graad | Map | Pakketten | Voorkant | Stand |
|---|---|---|---|---|
| 2de graad | [2de graad/](<2de graad/README.md>) | D: 1 Basis, 2 B+, 3 B+S', 4 B+S, 5 B+S''; D/A: 6 Basis, 7 B+S; A: 8 (op aanvraag) | bordeaux met goud | indeling klaar, nog geen cursus |
| 3de graad | [3de graad/](<3de graad/README.md>) | D: 1 Basis, 2 B+S, 3 B+S', 4 B+S''; D/A: 5 Basis, 6 B+S, 7 B+S', 8 B+S'' | petrol met cyaan | D: eerste versies van alle handboeken; D/A: indeling klaar |

De finaliteit staat op de voorkant ("3de graad dubbele finaliteit"); de kleur is die van de graad. Een D/A-pakket gebruikt dezelfde bron per cursus als de doorstroom waar de leerstof overeenkomt. De map van een D/A-pakket eindigt op `(D-A Basis)` en zo verder: een map kan geen `/` bevatten, `\pakketnaam` maakt er D/A van.

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
