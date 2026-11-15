# TODO's

- Maak voor elke richting een zeer gedetailleerde studiewijzer. Dit houdt in dat les per les wordt gezegd welke theorie er wordt gezien en welke oefeninger er worden gemaakt. Hou hierbij rekening met het voorziene aantal lesuren per hoofdstuk.  Onderverdeel eerst per jaar (hierin ga jij een weloverwogen keuze moeten maken welk jaar het meest geschikte is voor welke leerstof. Hou daarbij ook rekening met welke leerstof voortbouwt op andere leerstof). Bekijk hoeveel jaaruren een richting gemiddeld heeft (rond eerder naar onder af voor snipperruimte en herhalingstoetsen). Je bezorgt dus per richting twee soorten documenten. Een graadsoverzicht met volgorde van de hoofdstukken ingepland in een visuele kalender met in totaal 4 semesters en per hoofdstuk een studiewijzer.

- Ook de 2de graad onder de loep nemen. Werk net zoals de 3de graad.

- Koepels (zie `Ontwerp/koepels.md` en `Handboeken/koepels.yaml`):
  - ~~Voorkant per koepel~~ en ~~website met koepel, richting en voorgesteld jaar~~: klaar op 15 nov 2026 (KOV en GO!).
  - **Leerplankoppeling per koepel in de handboeken:** de leerkrachtenversie verwijst nu in `\lkr{Leerplan …: LPD …}` naar de KOV-nummers. Maak dat modulair: per stuk (hoofdstuk, sectie, oefening) de doelen van de overheid (MD/SMD) als gegevens, en daaruit de nummers van KOV, GO! en POV. Stappen: (1) een concordantie KOV-LPD → MD/SMD uit de concordantietabellen van de KOV-leerplannen, en MD/SMD → GO!-code uit de koppeltabellen van GO! (`BV3_06.xx` = MD 06.xx); (2) een macro, bv. `\doelen{SMD 06.08.12, MD 06.13}`, die per koepel de juiste nummers zet; (3) per koepel een leerkrachtenversie, of de nummers als laag op de website.
  - **Eén bron per cursus:** de kopieën over de pakketten zijn nu voor 99-100 % gelijk. Eén map per cursus, per pakket een `handboek.tex` dat de hoofdstukken kiest, en de leerplanverwijzing als gegevens (zie hierboven).
  - **POV:** een eigen indeling en voorkant pas als iemand erom vraagt (de site legt het uit bij "OVSG of POV?").
  - **Pakket 1 afstemmen op Basis:** de leerstof is nu die van pakket 4.
  - **Nieuwe modules:** Kegelsneden (GO! 06.08, KOV Complementair), Grote datasets met software (06.01), Telproblemen ook voor pakket 2 en 3, en in de 2de graad homothetie en constructies (GO!).