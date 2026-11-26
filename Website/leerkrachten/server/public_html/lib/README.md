# Bibliotheken van derden

Zelf gehost in plaats van via cdnjs: geen bezoekers naar een derde partij, en een strikte Content-Security-Policy (zie `.htaccess`). Ongewijzigd overgenomen van cdnjs en nagekeken met de SRI-hash (SHA-512) die cdnjs publiceert. Een nieuwe versie gaat in een nieuwe map; pas dan `PDFJS` of `PDFLIB` in `app.js` aan.

| Map | Bibliotheek | Licentie | Bron |
| --- | --- | --- | --- |
| `pdf.js-3.11.174/` | PDF.js 3.11.174 (Mozilla) | Apache-2.0 | https://github.com/mozilla/pdf.js |
| `pdf-lib-1.17.1/` | pdf-lib 1.17.1 | MIT | https://github.com/Hopding/pdf-lib |

De licentie van PDF.js staat bovenaan elk bestand; die van pdf-lib in `pdf-lib-1.17.1/LICENSE.md`.
