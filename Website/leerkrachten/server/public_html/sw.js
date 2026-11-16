/* De service worker van Axiomath: maakt de site installeerbaar als app op een gsm of tablet.
   Altijd eerst het net, zodat iedereen meteen de nieuwste app.js en app.css heeft (zoals Cache-Control: no-cache in
   .htaccess). Alleen zonder verbinding komt de app uit de cache, met de melding dat ze offline is (start() in app.js).
   De API (accounts, feedback, PDF's) en andere sites gaan nooit door de cache. Wijzig je SCHIL, verhoog dan CACHE. */
"use strict";

const CACHE = "axiomath-1";
const SCHIL = ["/", "/app.css", "/app.js", "/plannen.js", "/logo.svg", "/icoon.svg", "/fonts/source-sans-3.woff2", "/manifest.webmanifest"];
const BEWAAR = /\.(css|js|svg|png|jpg|webp|woff2|webmanifest)$/;  // wat de cache mag bijhouden (voorkanten, lettertypes ...)

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SCHIL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const r = e.request;
  const url = new URL(r.url);
  if (r.method !== "GET" || url.origin !== location.origin || url.pathname.startsWith("/api/") || url.pathname.startsWith("/voorbeeld/")) return;
  const pagina = r.mode === "navigate" && (url.pathname === "/" || url.pathname === "/index.html");  // de app zelf
  if (!pagina && !BEWAAR.test(url.pathname)) return;
  e.respondWith(fetch(r).then((antwoord) => {
    if (antwoord.ok) {
      const kopie = antwoord.clone();
      caches.open(CACHE).then((c) => c.put(pagina ? "/" : r, kopie));
    }
    return antwoord;
  }).catch(() => caches.match(pagina ? "/" : r).then((x) => x || Response.error())));
});
