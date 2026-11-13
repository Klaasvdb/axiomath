/* Axiomath voor leerkrachten. Eén pagina, routering via de hash:
     #/                 boekenkast          #/boek/<sleutel>     één handboek
     #/lees/<versie>?p=&f=   lezer          #/mijn               mijn feedback
     #/algemeen         algemene feedback   #/beheer/<tab>       voor het team
     #/aanmelden        aanmelden, uitnodiging, herstelcode     #/over   de visie, voor iedereen
   Zonder account (S.ik = null) zie je de boekenkast en lees je de editie 'handboek', zonder feedback.
   Alle tekst komt via textContent op de pagina (functie h), nooit via innerHTML, behalve de vaste iconen. */
"use strict";

const S = { ik: null, menu: null, boeken: null, opruimen: [] };
const $app = document.getElementById("app");
const GITHUB = "https://github.com/Klaasvdb/axiomath";

// --- hulpjes ----------------------------------------------------------------------------------
function h(tag, attrs, ...kinderen) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k === "html") el.innerHTML = v; // alleen voor ICONEN
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
    else if (v === true) el.setAttribute(k, "");
    else el.setAttribute(k, v);
  }
  for (const k of kinderen.flat(Infinity)) {
    if (k == null || k === false) continue;
    el.append(k instanceof Node ? k : document.createTextNode(String(k)));
  }
  return el;
}
const ICONEN = {
  terug: '<path d="M15 18l-6-6 6-6"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>', min: '<path d="M5 12h14"/>',
  paneel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  duim: '<path d="M7 11v9H4v-9h3zM7 11l4-7c1.5 0 2.5 1 2.5 2.5V10h5a2 2 0 012 2.3l-1.2 6A2 2 0 0117.3 20H7"/>',
  zon: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  maan: '<path d="M20 14.5A8 8 0 119.5 4a6.5 6.5 0 0010.5 10.5z"/>',
  ballon: '<path d="M4 5h16v11H9l-5 4V5z"/>',
  breed: '<path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4"/>',
  kopie: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V4h12"/>',
};
const icoon = (naam) => h("span", { "aria-hidden": "true", style: { display: "inline-grid" },
  html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONEN[naam]}</svg>` });

/* De server is api/index.php?r=<pad>. Wijzigen gaat altijd met POST; PATCH en DELETE reizen mee in de kop X-Methode. */
function apiUrl(pad) {
  const [p, q] = pad.split("?");
  return `/api/index.php?r=${encodeURIComponent(p)}${q ? "&" + q : ""}`;
}
async function api(methode, pad, body) {
  const opties = { method: methode === "GET" ? "GET" : "POST", headers: { "X-Axiomath": "1" }, credentials: "same-origin" };
  if (methode === "PATCH" || methode === "DELETE") opties.headers["X-Methode"] = methode;
  if (body !== undefined) { opties.headers["Content-Type"] = "application/json"; opties.body = JSON.stringify(body); }
  const r = await fetch(apiUrl(pad), opties);
  let d = null;
  try { d = await r.json(); } catch { /* geen JSON */ }
  if (r.status === 401 && pad !== "aanmelden") {
    S.ik = null; toonWelkom();
    throw Object.assign(new Error((d && d.fout) || "Meld je aan."), { welkom: true });
  }
  if (!r.ok) throw new Error((d && d.fout) || "Er liep iets mis.");
  return d;
}
let meldTimer;
function melding(tekst, fout = false) {
  const m = document.getElementById("melding");
  m.textContent = tekst; m.className = fout ? "fout" : ""; m.hidden = false;
  clearTimeout(meldTimer); meldTimer = setTimeout(() => (m.hidden = true), fout ? 5000 : 2600);
}
const poging = (f) => async (...a) => { try { return await f(...a); } catch (e) { melding(e.message, true); } };
const datum = (iso) => iso ? new Date(iso).toLocaleDateString("nl-BE", { day: "numeric", month: "short", year: "numeric" }) : "";
const wanneer = (iso) => {
  if (!iso) return "";
  const s = (Date.now() - new Date(iso)) / 1000;
  if (s < 3600) return `${Math.max(1, Math.round(s / 60))} min. geleden`;
  if (s < 86400) return `${Math.round(s / 3600)} u. geleden`;
  if (s < 7 * 86400) return `${Math.round(s / 86400)} d. geleden`;
  return datum(iso);
};
const sleutelUrl = (s) => encodeURIComponent(s);

/* PDF.js (Mozilla, Apache 2.0) tekent de pagina's in de browser. Pas geladen als iemand een boek opent. */
const PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
let pdfjsBelofte = null;
function laadPdfjs() {
  return pdfjsBelofte ??= new Promise((ok, nee) => {
    const s = document.createElement("script");
    s.src = PDFJS + "pdf.min.js";
    s.onload = () => { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.js"; ok(window.pdfjsLib); };
    s.onerror = () => { pdfjsBelofte = null; s.remove(); nee(new Error("De PDF-lezer kon niet laden. Controleer je internetverbinding.")); };
    document.head.append(s);
  });
}
const rubriekKlasse = (b) => "r-" + (b.rubriek || "andere").split(" ")[0];
const opslag = { lees(k) { try { return localStorage.getItem(k); } catch { return null; } }, zet(k, v) { try { localStorage.setItem(k, v); } catch { /* */ } } };

// --- thema -------------------------------------------------------------------------------------
function zetThema(t) {
  if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme;
}
zetThema(opslag.lees("thema"));
const isDonker = () => document.documentElement.dataset.theme === "dark" ||
  (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);

// --- formulierdelen ----------------------------------------------------------------------------
/* Het menu "wat voor feedback is het?", hoe belangrijk, en de tekst. Gedeeld door alle formulieren. */
function feedbackVelden(soorten, start = {}, plaatshouder = "Wat zie je, en wat stel je voor?") {
  let soort = start.soort || null, ernst = start.ernst || "klein";
  const chips = h("div", { class: "chips", role: "group", "aria-label": "Soort feedback" },
    Object.entries(soorten).map(([k, label]) => h("button", { type: "button", class: `chip s-${k}`, "aria-pressed": String(k === soort), "data-k": k,
      onclick: (e) => { soort = k; chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.k === k))); fout.textContent = ""; } }, label)));
  const seg = h("div", { class: "segment", role: "group", "aria-label": "Hoe belangrijk" },
    Object.entries(S.menu.ernst).map(([k, label]) => h("button", { type: "button", "aria-pressed": String(k === ernst), "data-k": k,
      onclick: () => { ernst = k; seg.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.k === k))); } }, label)));
  const tekst = h("textarea", { placeholder: plaatshouder, maxlength: 5000, required: true });
  tekst.value = start.tekst || "";
  const fout = h("p", { class: "fout-tekst" });
  const el = h("div", { class: "formulier" },
    h("div", { class: "veld" }, h("p", { style: { fontWeight: 600, fontSize: ".95rem", marginBottom: ".4em" } }, "Wat voor feedback is het?"), chips),
    h("label", { class: "veld" }, "Je opmerking", tekst),
    h("div", { class: "veld" }, h("p", { style: { fontWeight: 600, fontSize: ".95rem", marginBottom: ".4em" } }, "Hoe belangrijk?"), seg),
    fout);
  return {
    el, tekst,
    waarde() {
      if (!soort) { fout.textContent = "Kies eerst wat voor feedback het is."; return null; }
      if (!tekst.value.trim()) { fout.textContent = "Schrijf je opmerking."; tekst.focus(); return null; }
      return { soort, ernst, tekst: tekst.value.trim() };
    },
    leeg() { soort = null; ernst = "klein"; tekst.value = ""; chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
      seg.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.k === "klein"))); },
  };
}

function dialoog(titel, inhoud, knoppen) {
  const d = h("dialog", {}, h("form", { method: "dialog" }, h("h2", { style: { fontSize: "1.2rem" } }, titel), inhoud,
    h("div", { class: "formulier" }, h("div", { class: "knoppen" }, knoppen))));
  d.addEventListener("close", () => d.remove());
  document.body.append(d); d.showModal();
  return d;
}

// --- één stuk feedback -------------------------------------------------------------------------
function plaatsTekst(f) {
  if (f.niveau === "plek") return `${S.menu.edities[f.editie] || f.editie}, p. ${f.pagina}${f.sectie ? " · " + f.sectie : f.hoofdstuk ? " · " + f.hoofdstuk : ""}`;
  if (f.niveau === "handboek") return "Hele handboek";
  return f.sleutel ? "Algemeen, over dit handboek" : "Algemeen";
}
function boekTitel(sleutel) {
  const b = S.boeken && S.boeken.boeken.find((x) => x.sleutel === sleutel);
  return b ? `${b.titel} · pakket ${b.pakketnr}` : sleutel;
}

/* opties: { paneel, beheer, toonBoek, opKlik, bijWijziging(f|null) } */
function fbKaart(f, opties = {}) {
  const soorten = S.menu.soorten_algemeen;
  const kaart = h("article", { class: `fb s-${f.soort}${opties.paneel ? " in-paneel" : ""}`, "data-id": f.id });
  const vervang = (nieuw) => { const k = fbKaart(nieuw, opties); kaart.replaceWith(k); opties.bijWijziging && opties.bijWijziging(nieuw, k); };

  const steun = h("button", { class: "steun", type: "button", "aria-pressed": String(f.gesteund), disabled: f.van_mij,
    title: f.van_mij ? "Je eigen feedback" : "Dit vind ik ook", onclick: poging(async (e) => { e.stopPropagation(); vervang(await api("POST", `feedback/${f.id}/steun`)); }) },
    icoon("duim"), f.steun ? String(f.steun) : "Ik ook");

  const reacties = h("div", { class: "reacties", hidden: !f.reacties.length && !opties.beheer },
    f.reacties.map((r) => h("div", { class: "reactie" + (r.team ? " team" : "") }, h("b", {}, r.team ? `${r.naam} (team)` : r.naam, " · ", wanneer(r.op)), h("div", { class: "fb-tekst" }, r.tekst))));
  if (f.van_mij || opties.beheer || S.ik.rol === "beheerder") {
    const veld = h("textarea", { placeholder: opties.beheer ? "Antwoord aan de leerkracht …" : "Reageer …", maxlength: 3000 });
    reacties.append(h("div", { class: "reageer", onclick: (e) => e.stopPropagation() }, veld,
      h("button", { class: "knop klein", type: "button", onclick: poging(async () => {
        if (!veld.value.trim()) return;
        vervang(await api("POST", `feedback/${f.id}/reactie`, { tekst: veld.value }));
        melding("Reactie bewaard.");
      }) }, "Stuur")));
  }

  const knoppen = [];
  if (f.van_mij && f.status === "nieuw") {
    knoppen.push(h("button", { class: "knop-tekst klein", type: "button", onclick: (e) => { e.stopPropagation(); bewerk(f, vervang); } }, "Bewerk"));
  }
  if ((f.van_mij && f.status === "nieuw") || S.ik.rol === "beheerder") {
    knoppen.push(h("button", { class: "knop-tekst klein", type: "button", onclick: poging(async (e) => {
      e.stopPropagation();
      if (!confirm("Deze feedback verwijderen?")) return;
      await api("DELETE", `feedback/${f.id}`); kaart.remove(); opties.bijWijziging && opties.bijWijziging(null, null, f); melding("Verwijderd.");
    }) }, "Verwijder"));
  }
  if (!f.reacties.length && (f.van_mij || S.ik.rol === "beheerder") && !opties.beheer) {
    knoppen.push(h("button", { class: "knop-tekst klein", type: "button", onclick: (e) => { e.stopPropagation(); reacties.hidden = false; reacties.querySelector("textarea").focus(); } }, "Reageer"));
  } else if (f.reacties.length) {
    knoppen.push(h("span", { class: "klein" }, `${f.reacties.length} ${f.reacties.length === 1 ? "reactie" : "reacties"}`));
  }

  kaart.append(...[
    h("div", { class: "fb-kop" },
      h("span", { class: "soort" }, soorten[f.soort] || f.soort),
      f.ernst !== "klein" && h("span", { class: `pil er-${f.ernst}` }, S.menu.ernst[f.ernst]),
      h("span", { class: "ruimte" }),
      h("span", { class: `pil stip st-${f.status}` }, S.menu.statussen[f.status])),
    (opties.toonBoek && f.sleutel) && h("div", { class: "fb-kop" }, h("a", { href: `#/boek/${sleutelUrl(f.sleutel)}`, onclick: (e) => e.stopPropagation() }, boekTitel(f.sleutel))),
    h("div", { class: "fb-kop" }, h("span", { class: "waar" }, `#${f.id} · ${plaatsTekst(f)}`),
      f.niveau === "plek" && !opties.paneel && h("a", { href: `#/lees/${f.versie}?f=${f.id}`, onclick: (e) => e.stopPropagation() }, "Toon in het boek")),
    f.citaat && h("div", { class: "citaat" }, f.citaat),
    h("div", { class: "fb-tekst" }, f.tekst),
    h("div", { class: "fb-voet" }, h("span", {}, f.van_mij ? "Jij" : f.auteur, " · ", wanneer(f.aangemaakt)), h("span", { class: "ruimte" }), knoppen, steun),
    reacties].filter(Boolean));

  if (opties.beheer) {
    const status = h("select", { "aria-label": "Status", onchange: poging(async () => { vervang(await api("PATCH", `feedback/${f.id}`, { status: status.value })); melding("Status bijgewerkt."); }) },
      Object.entries(S.menu.statussen).map(([k, l]) => h("option", { value: k, selected: k === f.status }, l)));
    const notitie = h("input", { type: "text", placeholder: "Interne notitie (alleen voor het team)", value: f.notitie || "",
      onchange: poging(async () => { await api("PATCH", `feedback/${f.id}`, { notitie: notitie.value }); melding("Notitie bewaard."); }) });
    kaart.append(h("div", { class: "beheer-rij" }, status, notitie));
  }
  if (opties.opKlik) kaart.addEventListener("click", () => opties.opKlik(f, kaart));
  return kaart;
}

function bewerk(f, vervang) {
  const soorten = f.niveau === "algemeen" ? S.menu.soorten_algemeen : S.menu.soorten;
  const v = feedbackVelden(soorten, f);
  const d = dialoog("Feedback bewerken", v.el, [
    h("button", { class: "knop", type: "button", onclick: poging(async () => {
      const w = v.waarde(); if (!w) return;
      vervang(await api("PATCH", `feedback/${f.id}`, w)); d.close(); melding("Bewaard.");
    }) }, "Bewaar"),
    h("button", { class: "knop licht", value: "annuleer" }, "Annuleer")]);
}

// --- aanmelden ---------------------------------------------------------------------------------
function toonWelkom() {
  opruimen();
  document.body.classList.remove("lezend");
  const fout = h("p", { class: "fout-tekst", role: "alert" });
  const vormen = {
    aanmelden: () => {
      const email = h("input", { type: "email", autocomplete: "username", required: true });
      const ww = h("input", { type: "password", autocomplete: "current-password", required: true });
      return h("form", { onsubmit: poging(async (e) => {
        e.preventDefault(); fout.textContent = "";
        try { await api("POST", "aanmelden", { email: email.value, wachtwoord: ww.value }); await start(); } catch (x) { fout.textContent = x.message; }
      }) }, h("label", { class: "veld" }, "E-mailadres", email), h("label", { class: "veld" }, "Wachtwoord", ww), fout,
      h("div", {}, h("button", { class: "knop" }, "Aanmelden")));
    },
    uitnodiging: () => {
      const code = h("input", { type: "text", autocomplete: "off", placeholder: "abcd-efgh-jkmn", required: true });
      const naam = h("input", { type: "text", autocomplete: "name", required: true });
      const email = h("input", { type: "email", autocomplete: "email", required: true });
      const ww = h("input", { type: "password", autocomplete: "new-password", minlength: 10, required: true });
      const p = new URLSearchParams(location.hash.split("?")[1] || ""); if (p.get("code")) code.value = p.get("code");
      return h("form", { onsubmit: poging(async (e) => {
        e.preventDefault(); fout.textContent = "";
        try { await api("POST", "registreer", { code: code.value, naam: naam.value, email: email.value, wachtwoord: ww.value }); await start(); } catch (x) { fout.textContent = x.message; }
      }) }, h("label", { class: "veld" }, "Uitnodigingscode", h("span", { class: "hulp" }, "Je kreeg ze van het Axiomath-team."), code),
      h("label", { class: "veld" }, "Je naam", h("span", { class: "hulp" }, "Collega's zien je naam bij je feedback."), naam),
      h("label", { class: "veld" }, "E-mailadres", email),
      h("label", { class: "veld" }, "Kies een wachtwoord", h("span", { class: "hulp" }, "Minstens 10 tekens."), ww), fout,
      h("div", {}, h("button", { class: "knop" }, "Account maken")));
    },
    herstel: () => {
      const code = h("input", { type: "text", autocomplete: "off", required: true });
      const ww = h("input", { type: "password", autocomplete: "new-password", minlength: 10, required: true });
      return h("form", { onsubmit: poging(async (e) => {
        e.preventDefault(); fout.textContent = "";
        try { await api("POST", "herstel", { code: code.value, wachtwoord: ww.value }); await start(); } catch (x) { fout.textContent = x.message; }
      }) }, h("p", { class: "zacht" }, "Wachtwoord vergeten? Vraag het team om een herstelcode en kies hier een nieuw wachtwoord."),
      h("label", { class: "veld" }, "Herstelcode", code), h("label", { class: "veld" }, "Nieuw wachtwoord", ww), fout,
      h("div", {}, h("button", { class: "knop" }, "Wachtwoord instellen")));
    },
  };
  const plek = h("div");
  const tabs = h("div", { class: "tabs", role: "tablist" });
  const kies = (k) => {
    fout.textContent = "";
    tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.k === k)));
    plek.replaceChildren(vormen[k]()); plek.querySelector("input")?.focus();
  };
  [["aanmelden", "Aanmelden"], ["uitnodiging", "Uitnodiging"], ["herstel", "Herstelcode"]].forEach(([k, l]) =>
    tabs.append(h("button", { type: "button", role: "tab", "data-k": k, onclick: () => kies(k) }, l)));
  $app.replaceChildren(h("div", { class: "welkom" },
    h("figure", { class: "welkom-kunst", style: { margin: 0, backgroundImage: "url(/kunst.jpg)" } },
      h("figcaption", {}, "Rafaël, De school van Athene, 1509-1511 (publiek domein)")),
    h("div", { class: "welkom-paneel" },
      h("img", { class: "logo", src: "/logo.svg", alt: "Axiomath" }),
      h("h1", {}, "Voor leerkrachten"),
      h("p", { class: "intro" }, "Vrije handboeken wiskunde voor de 3de graad doorstroom. Lees mee, markeer wat beter kan en zeg het ons: op de pagina, over een heel handboek of over het hele idee. ",
        h("a", { href: "#/over" }, "Waar we naartoe willen")),
      tabs, plek,
      h("p", { class: "zacht klein", style: { marginTop: "22px" } }, "Geen account? De handboeken kan iedereen lezen. ",
        h("a", { href: "#/", onclick: (e) => { e.preventDefault(); history.replaceState(null, "", "#/"); route(); } }, "Naar de handboeken"),
        " · ", h("a", { href: GITHUB, target: "_blank", rel: "noopener" }, "Alles op GitHub")))));
  kies(location.hash.includes("code=") ? "uitnodiging" : "aanmelden");
}

// --- kop ---------------------------------------------------------------------------------------
function kop(actief) {
  const thema = h("button", { class: "knop-icoon", type: "button", "aria-label": "Licht of donker", onclick: () => {
    const t = isDonker() ? "light" : "dark"; zetThema(t); opslag.zet("thema", t); thema.replaceChildren(icoon(isDonker() ? "zon" : "maan"));
  } }, icoon(isDonker() ? "zon" : "maan"));
  if (!S.ik) {
    return h("header", { class: "kop" },
      h("a", { class: "merk", href: "#/" }, h("img", { class: "logo", src: "/logo.svg", alt: "Axiomath" })),
      h("nav", { "aria-label": "Hoofdmenu" }, [["#/", "Handboeken", "boeken"], ["#/over", "Over Axiomath", "over"]].map(([href, l, k]) =>
        h("a", { href, "aria-current": k === actief ? "page" : null }, l))),
      h("div", { class: "rechts" }, thema, h("a", { class: "knop klein", href: "#/aanmelden" }, "Aanmelden")));
  }
  const links = [["#/", "Handboeken", "boeken"], ["#/mijn", "Mijn feedback", "mijn"], ["#/algemeen", "Algemene feedback", "algemeen"]];
  if (S.ik.rol === "beheerder") links.push(["#/beheer", "Beheer", "beheer"]);
  links.push(["#/over", "Over", "over"]);
  const menu = h("div", { class: "menu", hidden: true },
    h("div", { class: "kopje" }, h("b", {}, S.ik.naam), h("div", { class: "zacht klein" }, S.ik.email)),
    h("div", { class: "menu-nav", style: { display: "none" } }, links.map(([href, l]) => h("a", { href }, l))),
    h("button", { type: "button", onclick: () => { menu.hidden = true; wachtwoordWijzigen(); } }, "Wachtwoord wijzigen"),
    h("button", { type: "button", onclick: poging(async () => { await api("POST", "afmelden"); S.ik = null; S.boeken = null; history.replaceState(null, "", "#/"); route(); }) }, "Afmelden"));
  const knop = h("button", { type: "button", "aria-haspopup": "true", "aria-label": "Account", onclick: (e) => { e.stopPropagation(); menu.hidden = !menu.hidden; } },
    h("span", { class: "avatar" }, S.ik.naam.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase()));
  const sluit = () => (menu.hidden = true);
  document.addEventListener("click", sluit); S.opruimen.push(() => document.removeEventListener("click", sluit));
  return h("header", { class: "kop" },
    h("a", { class: "merk", href: "#/" }, h("img", { class: "logo", src: "/logo.svg", alt: "Axiomath" }), h("span", {}, "Leerkrachten")),
    h("nav", { "aria-label": "Hoofdmenu" }, links.map(([href, l, k]) => h("a", { href, "aria-current": k === actief ? "page" : null }, l))),
    h("div", { class: "rechts" }, thema, h("div", { class: "gebruiker" }, knop, menu)));
}

function wachtwoordWijzigen() {
  const oud = h("input", { type: "password", autocomplete: "current-password" });
  const nieuw = h("input", { type: "password", autocomplete: "new-password", minlength: 10 });
  const d = dialoog("Wachtwoord wijzigen", [h("label", { class: "veld" }, "Huidig wachtwoord", oud), h("label", { class: "veld" }, "Nieuw wachtwoord (min. 10 tekens)", nieuw)], [
    h("button", { class: "knop", type: "button", onclick: poging(async () => { await api("POST", "wachtwoord", { oud: oud.value, nieuw: nieuw.value }); d.close(); melding("Wachtwoord gewijzigd."); }) }, "Bewaar"),
    h("button", { class: "knop licht", value: "x" }, "Annuleer")]);
}

function scherm(actief, ...inhoud) {
  document.body.classList.remove("lezend");
  $app.replaceChildren(kop(actief), h("main", { class: "pagina" }, inhoud));
  window.scrollTo(0, 0);
}
function opruimen() { S.opruimen.splice(0).forEach((f) => f()); }
async function boeken(opnieuw = false) {
  if (!S.boeken || opnieuw) S.boeken = await api("GET", "boeken");
  return S.boeken;
}

// --- boekenkast --------------------------------------------------------------------------------
async function toonKast() {
  const d = await boeken(true);
  let pakket = opslag.lees("pakket") || "alle", zoek = "";
  const kasten = h("div");
  const teken = () => {
    const z = zoek.toLowerCase();
    kasten.replaceChildren(...d.pakketten.filter((p) => pakket === "alle" || String(p.nr) === pakket).map((p) => {
      const lijst = d.boeken.filter((b) => b.pakketnr === p.nr && (!z || `${b.titel} ${b.rubriek}`.toLowerCase().includes(z)));
      if (!lijst.length) return null;
      const alle = d.boeken.filter((b) => b.pakketnr === p.nr);
      const pct = alle.reduce((s, b) => s + (d.voortgang[b.status]?.percentage || 0), 0) / alle.length;
      return h("section", { class: "pakket" },
        h("div", { class: "pakket-kop" }, h("h2", {}, h("span", { class: "nr" }, p.nr), " ", p.naam)),
        h("p", { class: "pakket-sub" }, p.richtingen, " · ", p.uren.replaceAll("\\&", "&")),
        h("div", { class: "voortgang", title: `${Math.round(pct)} % klaar` }, h("i", { style: { width: pct + "%" } })),
        h("div", { class: "kast" }, lijst.map(boekKaart)));
    }));
    if (!kasten.children.length) kasten.append(h("p", { class: "leeg" }, "Geen handboek gevonden."));
  };
  const keuzes = h("div", { class: "chips" }, [["alle", "Alle pakketten"], ...d.pakketten.map((p) => [String(p.nr), `${p.nr} · ${p.naam.match(/\(([^)]+)\)/)?.[1] || p.naam}`])]
    .map(([k, l]) => h("button", { type: "button", class: "chip zonder-stip", "aria-pressed": String(k === pakket), "data-k": k, onclick: () => {
      pakket = k; opslag.zet("pakket", k); keuzes.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.k === k))); teken();
    } }, l)));
  const metPdf = d.boeken.filter((b) => b.edities.length).length;
  scherm("boeken",
    h("div", { class: "paginakop" }, S.ik
      ? h("div", {}, h("h1", {}, `Dag ${S.ik.naam.split(" ")[0]}`),
        h("p", {}, `${metPdf} van de ${d.boeken.length} handboeken staan klaar om te lezen. Open er een, markeer een stuk van een pagina en zeg wat beter kan. Je collega's zien je opmerking ook: steun ze als je het eens bent.`))
      : h("div", {}, h("h1", {}, "Handboeken"),
        h("p", {}, `Vrije handboeken wiskunde voor de 3de graad doorstroom, opgesteld vanuit de leerplandoelen. ${metPdf} van de ${d.boeken.length} handboeken staan klaar om te lezen. Ben je leerkracht? `,
          h("a", { href: "#/aanmelden" }, "Meld je aan"), " voor de leerkrachtenversie, de oplossingen en om feedback te geven. ",
          h("a", { href: "#/over" }, "Waar we naartoe willen"), "."))),
    h("div", { class: "balk" }, keuzes, h("input", { type: "search", placeholder: "Zoek een handboek", "aria-label": "Zoek een handboek", oninput: (e) => { zoek = e.target.value; teken(); } })),
    kasten);
  teken();
}

function boekKaart(b) {
  const open = b.feedback?.open || 0;
  const omslag = b.edities.length
    ? h("div", { class: "omslag" }, h("img", { src: b.omslag, alt: "", loading: "lazy" }), open ? h("span", { class: "badge", title: `${open} open opmerkingen` }, open) : null)
    : h("div", { class: "omslag geen" }, h("b", {}, b.titel), h("span", {}, "Nog geen PDF"));
  return h("a", { class: `boek ${rubriekKlasse(b)}`, href: `#/boek/${sleutelUrl(b.sleutel)}` }, omslag,
    h("div", {}, b.rubriek && h("div", { class: "rubriek" }, b.rubriek), h("div", { class: "titel" }, b.titel)),
    h("div", { class: "meta" }, h("span", { class: `pil st-${b.status === "gepland" ? "afgewezen" : b.status === "klaar" ? "verwerkt" : "behandeling"}` }, b.status.replace("-", " ")),
      b.jaar && h("span", {}, b.jaar), b.feedback?.mijn ? h("span", {}, `${b.feedback.mijn} van jou`) : null));
}

// --- één handboek -------------------------------------------------------------------------------
async function toonBoek(sleutel) {
  const d = await boeken();
  const b = d.boeken.find((x) => x.sleutel === sleutel);
  if (!b) return scherm("boeken", h("p", { class: "leeg" }, "Dit handboek bestaat niet."));
  const p = d.pakketten.find((x) => x.nr === b.pakketnr);
  const gast = !S.ik;
  const lijst = h("div", { class: "lijst" });
  let alle = gast ? [] : await api("GET", `feedback?sleutel=${sleutelUrl(sleutel)}`), filter = "alle", sorteer = "nieuw";
  const tel = h("span", { class: "zacht klein", style: { fontWeight: 400 } });
  const teken = () => {
    let rs = alle.filter((f) => filter === "alle" || (filter === "plek" ? f.niveau === "plek" : f.niveau !== "plek"));
    if (sorteer === "steun") rs = [...rs].sort((a, b) => b.steun - a.steun);
    if (sorteer === "pagina") rs = [...rs].sort((a, b) => (a.editie || "").localeCompare(b.editie || "") || (a.pagina || 0) - (b.pagina || 0));
    tel.textContent = `· ${alle.length}`;
    lijst.replaceChildren(...(rs.length ? rs.map((f) => fbKaart(f, { bijWijziging: (n, _, weg) => { alle = n ? alle.map((x) => x.id === n.id ? n : x) : alle.filter((x) => x.id !== weg.id); } }))
      : [h("p", { class: "leeg" }, "Nog geen feedback. Wees de eerste!")]));
  };
  const v = gast ? null : feedbackVelden(S.menu.soorten, {}, "Wat vind je van het handboek als geheel: opbouw, niveau, tempo, wat ontbreekt?");
  const form = h("form", { class: "formulier", onsubmit: poging(async (e) => {
    e.preventDefault(); const w = v.waarde(); if (!w) return;
    alle.unshift(await api("POST", "feedback", { niveau: "handboek", sleutel, ...w })); v.leeg(); teken(); melding("Bedankt! Je feedback is bewaard.");
  }) }, v?.el, h("div", { class: "knoppen" }, h("button", { class: "knop" }, "Verstuur")));
  const segment = (opties, start, bij) => { const s = h("div", { class: "segment" }, opties.map(([k, l]) => h("button", { type: "button", "aria-pressed": String(k === start), "data-k": k,
    onclick: () => { s.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.k === k))); bij(k); } }, l))); return s; };

  scherm("boeken",
    h("p", { style: { marginBottom: "18px" } }, h("a", { href: "#/", class: "knop-tekst", style: { paddingLeft: 0 } }, "← Alle handboeken")),
    h("div", { class: `boekkop ${rubriekKlasse(b)}` },
      b.edities.length ? h("div", { class: "omslag" }, h("img", { src: b.omslag, alt: `Voorkant van ${b.titel}` })) : h("div", { class: "boek" }, h("div", { class: "omslag geen" }, h("b", {}, b.titel), h("span", {}, "Nog geen PDF"))),
      h("div", {},
        b.rubriek && h("div", { class: "boek" }, h("span", { class: `rubriek` }, b.rubriek)),
        h("h1", {}, b.titel),
        h("dl", { class: "gegevens" },
          h("dt", {}, "Pakket"), h("dd", {}, `${p.nr} · ${p.naam}`),
          h("dt", {}, "Richtingen"), h("dd", {}, p.richtingen),
          h("dt", {}, "Uren"), h("dd", {}, p.uren.replaceAll("\\&", "&")),
          b.jaar && [h("dt", {}, "Leerjaar"), h("dd", {}, b.jaar)],
          h("dt", {}, "Status"), h("dd", {}, b.status.replace("-", " "), d.voortgang[b.status] ? h("span", { class: "zacht" }, ` · ${d.voortgang[b.status].uitleg}`) : "")),
        b.edities.length ? h("div", { class: "edities" }, b.edities.map((e) => h("div", { class: "editie" },
          h("b", {}, e.label), h("span", { class: "zacht" }, `${e.paginas} p. · ${datum(e.gebouwd)}`),
          h("a", { class: "knop licht klein", href: apiUrl(`pdf/${e.hash}`), target: "_blank", rel: "noopener", "aria-label": `${e.label} als PDF` }, icoon("download"), "PDF"),
          h("a", { class: "knop klein", href: `#/lees/${e.hash}` }, gast ? "Lees" : "Lees en geef feedback"))))
          : h("p", { class: "leeg" }, gast ? "Dit handboek is nog niet gebouwd." : "Dit handboek is nog niet gebouwd. Je kan wel al feedback geven op het plan."))),
    gast ? h("section", { class: "kaart" }, h("h2", {}, "Ben je leerkracht?"),
      h("p", { class: "zacht", style: { marginBottom: "14px" } }, "Met een account lees je ook de leerkrachtenversie, de zelfstudie en de (uitgewerkte) oplossingen, en geef je feedback op elke pagina. Accounts zijn op uitnodiging van het Axiomath-team."),
      h("a", { class: "knop", href: "#/aanmelden" }, "Aanmelden"))
    : h("div", { class: "twee" },
      h("section", { class: "kaart" }, h("h2", {}, "Feedback op het hele handboek"),
        h("p", { class: "zacht klein", style: { marginTop: "-6px", marginBottom: "14px" } }, "Over één plek in het boek? Open het boek, zet de markeerstift aan en trek een kader rond het stuk."), form),
      h("section", {}, h("div", { class: "balk", style: { justifyContent: "space-between", marginBottom: "12px" } }, h("h2", { class: "sectie-kop", style: { margin: 0 } }, "Alle feedback ", tel),
        h("div", { class: "balk", style: { margin: 0 } },
          segment([["alle", "Alles"], ["plek", "Op een pagina"], ["boek", "Hele boek"]], filter, (k) => { filter = k; teken(); }),
          h("select", { "aria-label": "Sorteer", onchange: (e) => { sorteer = e.target.value; teken(); } }, h("option", { value: "nieuw" }, "Nieuwste eerst"), h("option", { value: "steun" }, "Meeste steun"), h("option", { value: "pagina" }, "Op pagina")))),
        lijst)));
  teken();
}

// --- lezer -------------------------------------------------------------------------------------
async function toonLezer(hash, q) {
  const gast = !S.ik;  // zonder account: lezen, geen opmerkingen
  const [v, d, alle0, pdfjs] = await Promise.all([api("GET", `versie/${hash}`), boeken(), gast ? [] : api("GET", `feedback?versie=${hash}`), laadPdfjs()]);
  const docBelofte = pdfjs.getDocument({ url: apiUrl(`pdf/${hash}`), disableRange: true, disableStream: true, isEvalSupported: false }).promise;
  docBelofte.catch(() => melding("Deze PDF kon niet laden.", true));
  let alle = alle0;
  const b = d.boeken.find((x) => x.sleutel === v.sleutel);
  document.body.classList.add("lezend");

  let zoom = parseFloat(opslag.lees("zoom")) || 1;     // 1 = paginabreedte past in het venster (max. 900 px)
  let markeren = !gast && matchMedia("(pointer: fine)").matches && opslag.lees("markeren") !== "0";
  let filter = "alle", nieuw = null, actief = null, huidige = 1;
  const paneelOpen = () => !lezer.classList.contains("zonder-paneel");

  // balk
  const paginaInput = h("input", { type: "text", inputmode: "numeric", value: "1", "aria-label": "Pagina", onchange: () => naarPagina(parseInt(paginaInput.value) || 1) });
  const markeerKnop = h("button", { class: "markeer", type: "button", "aria-pressed": String(markeren), title: "Markeerstift (M): trek een kader of klik op een plek",
    onclick: () => zetMarkeren(!markeren) }, icoon("pen"), h("span", {}, "Markeer"));
  const editieKeuze = h("select", { "aria-label": "Editie", onchange: () => { location.hash = `#/lees/${editieKeuze.value}?p=${huidige}`; } },
    b.edities.map((e) => h("option", { value: e.hash, selected: e.hash === hash || (e.editie === v.editie && v.jongste !== hash && false) }, e.label)));
  if (!b.edities.some((e) => e.hash === hash)) editieKeuze.prepend(h("option", { value: hash, selected: true }, `${v.label} (oudere versie)`));
  const paneelKnop = h("button", { class: "knop-icoon", type: "button", "aria-label": gast ? "Paneel met de inhoud" : "Paneel met opmerkingen", "aria-pressed": "true", onclick: () => {
    lezer.classList.toggle("zonder-paneel"); paneelKnop.setAttribute("aria-pressed", String(paneelOpen())); requestAnimationFrame(() => schaal(true));
  } }, icoon("paneel"));
  const balk = h("div", { class: "lezer-balk" },
    h("a", { class: "knop-icoon", href: `#/boek/${sleutelUrl(v.sleutel)}`, "aria-label": "Terug naar het handboek" }, icoon("terug")),
    h("div", { class: "titel" }, h("b", {}, b.titel), editieKeuze),
    h("span", { class: "ruimte" }),
    h("div", { class: "paginanr" }, paginaInput, h("span", { class: "zacht" }, `/ ${v.paginas}`)),
    h("span", { class: "scheiding verberg-smal" }),
    h("button", { class: "knop-icoon verberg-smal", type: "button", "aria-label": "Kleiner", onclick: () => zetZoom(zoom / 1.2) }, icoon("min")),
    h("button", { class: "knop-icoon verberg-smal", type: "button", "aria-label": "Paginabreedte", onclick: () => zetZoom(1) }, icoon("breed")),
    h("button", { class: "knop-icoon verberg-smal", type: "button", "aria-label": "Groter", onclick: () => zetZoom(zoom * 1.2) }, icoon("plus")),
    h("span", { class: "scheiding" }),
    !gast && markeerKnop,
    h("a", { class: "knop-icoon verberg-smal", href: apiUrl(`pdf/${hash}`), target: "_blank", rel: "noopener", "aria-label": "Download de PDF" }, icoon("download")),
    paneelKnop);

  // bladen
  const bladen = h("div", { class: "bladen" });
  const vel = h("div", { class: "vel" + (markeren ? " markeren" : "") });
  if (v.jongste && v.jongste !== hash) {
    vel.append(h("div", { class: "oud-bericht" }, h("span", {}, "Je bekijkt een oudere versie van dit boek. De opmerkingen blijven bij deze versie."),
      h("a", { class: "knop klein", href: `#/lees/${v.jongste}` }, "Naar de nieuwste")));
  }
  vel.append(bladen);
  const blad = v.maten.map(([w, hh], i) => {
    const el = h("div", { class: "blad", "data-n": i + 1 }, h("span", { class: "nr" }, i + 1));
    el._ratio = hh / w;
    bladen.append(el);
    return el;
  });
  let breedte = 0;
  const pagina = (n) => (blad[n - 1]._pagina ??= docBelofte.then((doc) => doc.getPage(n)));
  /* Een pagina tekenen op een canvas, scherp voor dit scherm. Pagina's ver buiten beeld worden gewist: zo blijft
     het geheugen klein, ook in een boek van 80 pagina's. */
  async function laad(el) {
    const px = Math.round(breedte * Math.min(devicePixelRatio || 1, 2.5));
    if (el._px === px) return;
    el._px = px;
    let pg;
    try { pg = await pagina(+el.dataset.n); } catch { return; }
    if (el._px !== px) return;
    const vp = pg.getViewport({ scale: px / pg.getViewport({ scale: 1 }).width });
    const canvas = h("canvas", { width: Math.floor(vp.width), height: Math.floor(vp.height), "aria-label": `Pagina ${el.dataset.n}`, role: "img" });
    el._taak?.cancel();
    const taak = el._taak = pg.render({ canvasContext: canvas.getContext("2d", { alpha: false }), viewport: vp });
    try { await taak.promise; } catch { return; }  // geannuleerd
    if (el._px !== px) return;
    el.querySelector("canvas")?.remove();
    canvas.classList.add("geladen");
    el.prepend(canvas);
    el._links ??= linkLaag(el, pg);
  }
  /* De links van de PDF (inhoudstafel, verwijzingen naar oefeningen en oplossingen, webadressen) als vlakken
     boven het canvas, in procenten van de pagina: ze schalen mee met de zoom. */
  async function linkLaag(el, pg) {
    const [vx0, vy0, vx1, vy1] = pg.view, W = vx1 - vx0, H = vy1 - vy0;
    let ann = [];
    try { ann = await pg.getAnnotations({ intent: "display" }); } catch { return; }
    const laag = h("div", { class: "pdf-links" });
    for (const a of ann) {
      if (a.subtype !== "Link" || !a.rect || !(a.dest || a.url)) continue;
      const [x0, y0, x1, y1] = a.rect;
      const link = h("a", { class: "pdf-link", href: a.url || "#", title: a.url || null, ...(a.url ? { target: "_blank", rel: "noopener" } : {}),
        "data-url": a.url || "", draggable: "false", "aria-label": a.url ? null : "Ga naar de plek in het boek",
        style: { left: (Math.min(x0, x1) - vx0) / W * 100 + "%", top: (1 - (Math.max(y0, y1) - vy0) / H) * 100 + "%",
          width: Math.abs(x1 - x0) / W * 100 + "%", height: Math.abs(y1 - y0) / H * 100 + "%" },
        onclick: (e) => { if (markeren || !a.url) e.preventDefault(); if (!markeren && !a.url) volg(link); } });
      link._dest = a.dest;
      laag.append(link);
    }
    el.querySelector(".nr").after(laag);
    return laag;
  }
  async function volg(link) {
    paginaInput.blur();  // anders blijft het paginanummer staan
    if (link.dataset.url) { window.open(link.dataset.url, "_blank", "noopener"); return; }
    try {
      const doc = await docBelofte;
      const d = typeof link._dest === "string" ? await doc.getDestination(link._dest) : link._dest;
      if (!d) return;
      const n = (typeof d[0] === "object" ? await doc.getPageIndex(d[0]) : d[0]) + 1;
      let deel = 0;  // waar op de pagina het doel staat (bij /XYZ met een hoogte)
      if (d[1]?.name === "XYZ" && typeof d[3] === "number") {
        const [, by0, , by1] = (await pagina(n)).view;
        deel = Math.min(1, Math.max(0, 1 - (d[3] - by0) / (by1 - by0)));
      }
      naarPagina(n, "auto", deel);
    } catch { /* een kapotte link: niets doen */ }
  }
  function wis(el) { el._taak?.cancel(); el._px = 0; el.querySelector("canvas")?.remove(); }
  const inBeeld = new Set();
  const io = new IntersectionObserver((items) => items.forEach((it) => {
    if (it.isIntersecting) { inBeeld.add(it.target); laad(it.target); } else { inBeeld.delete(it.target); wis(it.target); }
  }), { root: vel, rootMargin: "1500px 0px" });
  blad.forEach((el) => io.observe(el));

  /* De tekst onder een kader, uit de tekstlaag van de PDF: zo vind je de plek terug, ook in een nieuwere versie.
     Bij een klik: de regel errond. */
  async function citaatVan(n, [x0, y0, x1, y1]) {
    const pg = await pagina(n);
    const [vx0, vy0, vx1, vy1] = pg.view, W = vx1 - vx0, H = vy1 - vy0;
    if ((x1 - x0) * (y1 - y0) < 0.0004) { x0 = 0; x1 = 1; y0 = Math.max(0, y0 - 0.012); y1 = Math.min(1, y1 + 0.012); }
    const tc = await pg.getTextContent();
    let uit = "", vorige = null;
    for (const it of tc.items) {
      if (!it.str || !it.transform) continue;
      const [a, b2, c, dd, e, f] = it.transform;
      const hoog = Math.hypot(c, dd) || Math.hypot(a, b2) || 10;
      const ix0 = (e - vx0) / W, ix1 = (e + it.width - vx0) / W, midden = 1 - (f + hoog / 2 - vy0) / H;
      if (ix1 < x0 || ix0 > x1 || midden < y0 || midden > y1) continue;
      if (vorige && (Math.abs(f - vorige.f) > hoog * 0.5 || e - vorige.eind > hoog * 0.15)) uit += " ";
      uit += it.str;
      vorige = { f, eind: e + it.width };
    }
    return uit.replace(/(?:\s*\.){3,}/g, " … ").replace(/\s+/g, " ").trim().slice(0, 600);
  }
  function schaal(behoud) {
    const anker = behoud ? huidige : null, binnen = anker ? (vel.scrollTop - blad[anker - 1].offsetTop) / blad[anker - 1].offsetHeight : 0;
    const beschikbaar = Math.max(240, vel.clientWidth - (innerWidth > 900 ? 100 : 16));
    breedte = Math.round(Math.min(beschikbaar, 900) * zoom);
    blad.forEach((el) => { el.style.width = breedte + "px"; el.style.height = Math.round(breedte * el._ratio) + "px"; });
    inBeeld.forEach((el) => laad(el));
    if (anker) vel.scrollTop = blad[anker - 1].offsetTop + binnen * blad[anker - 1].offsetHeight;
  }
  function zetZoom(z) { zoom = Math.min(4, Math.max(0.4, z)); opslag.zet("zoom", zoom); schaal(true); }
  function naarPagina(n, gedrag = "auto", deel = 0) {
    n = Math.min(v.paginas, Math.max(1, n));
    vel.scrollTo({ top: blad[n - 1].offsetTop + deel * blad[n - 1].offsetHeight - 12, behavior: gedrag });
  }
  vel.addEventListener("scroll", () => {
    const midden = vel.scrollTop + vel.clientHeight * 0.35;
    let n = 1;
    for (const el of blad) { if (el.offsetTop <= midden) n = +el.dataset.n; else break; }
    if (n !== huidige) { huidige = n; if (document.activeElement !== paginaInput) paginaInput.value = n; }
  }, { passive: true });

  // markeringen
  function tekenMarkeringen() {
    vel.querySelectorAll(".markering").forEach((m) => m.remove());
    for (const f of zichtbaar()) {
      const [x0, y0, x1, y1] = f.rect;
      const punt = (x1 - x0) < 0.012 && (y1 - y0) < 0.012;
      const m = h("div", { class: `markering s-${f.soort}${f.van_mij ? "" : " ander"}${actief === f.id ? " actief" : ""}`, "data-id": f.id, title: S.menu.soorten[f.soort] || "",
        style: punt ? { left: `calc(${x0 * 100}% - 10px)`, top: `calc(${y0 * 100}% - 10px)`, width: "20px", height: "20px", borderRadius: "50%" }
          : { left: x0 * 100 + "%", top: y0 * 100 + "%", width: (x1 - x0) * 100 + "%", height: (y1 - y0) * 100 + "%" },
        onclick: (e) => { e.stopPropagation(); kies(f.id, "kaart"); } }, h("span", { class: "speld" }, f.id));
      blad[f.pagina - 1]?.append(m);
    }
  }
  const zichtbaar = () => alle.filter((f) => f.rect && (filter === "alle" || f.van_mij));

  // tekenen met de markeerstift
  let trek = null;
  bladen.addEventListener("pointerdown", (e) => {
    if (!markeren || e.button !== 0) return;
    const el = e.target.closest(".blad"); if (!el) return;
    e.preventDefault();
    const r = el.getBoundingClientRect();
    trek = { el, r, link: e.target.closest(".pdf-link"), x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height, div: h("div", { class: "trek" }) };
    el.append(trek.div); el.setPointerCapture(e.pointerId);
    zetTrek(trek.x, trek.y);
  });
  const klem = (x) => Math.min(1, Math.max(0, x));
  function zetTrek(x, y) {
    const [a, b2, c, dd] = [Math.min(trek.x, x), Math.min(trek.y, y), Math.max(trek.x, x), Math.max(trek.y, y)];
    Object.assign(trek.div.style, { left: a * 100 + "%", top: b2 * 100 + "%", width: (c - a) * 100 + "%", height: (dd - b2) * 100 + "%" });
    trek.rect = [a, b2, c, dd];
  }
  bladen.addEventListener("pointermove", (e) => { if (trek) zetTrek(klem((e.clientX - trek.r.left) / trek.r.width), klem((e.clientY - trek.r.top) / trek.r.height)); });
  const stop = () => {
    if (!trek) return;
    const t = trek; trek = null;
    let [x0, y0, x1, y1] = t.rect;
    const klein = (x1 - x0) * t.r.width < 8 && (y1 - y0) * t.r.height < 8;
    if (klein && t.link) { t.div.remove(); volg(t.link); return; }  // een klik op een link volgt de link, ook met de markeerstift
    if (klein) { x0 = x1 = t.x; y0 = y1 = t.y; t.div.remove(); t.div = h("div", { class: "trek", style: { left: `calc(${x0 * 100}% - 10px)`, top: `calc(${y0 * 100}% - 10px)`, width: "20px", height: "20px", borderRadius: "50%" } }); t.el.append(t.div); }
    startNieuw(+t.el.dataset.n, [x0, y0, x1, y1], t.div);
  };
  bladen.addEventListener("pointerup", stop);
  bladen.addEventListener("pointercancel", () => { if (trek) { trek.div.remove(); trek = null; } });

  function zetMarkeren(aan) {
    if (gast) return;
    markeren = aan; opslag.zet("markeren", aan ? "1" : "0");
    markeerKnop.setAttribute("aria-pressed", String(aan)); vel.classList.toggle("markeren", aan);
    if (aan && !paneelOpen()) paneelKnop.click();
    tekenPaneel();
  }

  // paneel
  const tabs = h("div", { class: "tabs", role: "tablist" });
  const paneelInhoud = h("div", { class: "paneel-inhoud" });
  let tab = gast ? "inhoud" : "opm";
  (gast ? [["inhoud", "Inhoud"]] : [["opm", "Opmerkingen"], ["inhoud", "Inhoud"]]).forEach(([k, l]) => tabs.append(h("button", { type: "button", role: "tab", "data-k": k, "aria-selected": String(k === tab),
    onclick: () => { tab = k; tabs.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", String(x.dataset.k === k))); tekenPaneel(); } }, l)));
  const paneel = h("aside", { class: "paneel", "aria-label": gast ? "Inhoud" : "Opmerkingen" }, tabs, paneelInhoud);

  function startNieuw(n, rect, div) {
    if (nieuw) nieuw.div.remove();
    const velden = feedbackVelden(S.menu.soorten, {}, "Wat loopt hier mis of kan beter? Een voorstel is altijd welkom.");
    const citaat = h("div", { class: "citaat" }, "…");
    nieuw = { n, rect, div, velden, citaat, tekst: "" };
    const dit = nieuw;
    citaatVan(n, rect).then((tk) => { dit.tekst = tk; citaat.textContent = tk || "(geen tekst: een figuur of een lege plek)"; }).catch(() => (citaat.hidden = true));
    if (tab !== "opm") tabs.querySelector('[data-k="opm"]').click(); else tekenPaneel();
    if (!paneelOpen()) paneelKnop.click();
    velden.tekst.focus({ preventScroll: true });
  }
  function annuleerNieuw() { if (nieuw) { nieuw.div.remove(); nieuw = null; tekenPaneel(); } }

  function tekenPaneel() {
    const opmTab = tabs.querySelector('[data-k="opm"]');
    if (opmTab) opmTab.textContent = `Opmerkingen (${alle.length})`;
    if (tab === "inhoud") {
      paneelInhoud.replaceChildren(h("nav", { class: "inhoud-lijst", "aria-label": "Inhoud" }, v.inhoud.filter(([n]) => n <= 3).map(([n, t, p]) =>
        h("button", { type: "button", class: "n" + n, onclick: () => naarPagina(p, "smooth") }, h("span", {}, t), h("span", { class: "p" }, p)))));
      return;
    }
    const delen = [];
    if (nieuw) {
      const n = nieuw;
      delen.push(h("form", { class: "nieuw", onsubmit: poging(async (e) => {
        e.preventDefault(); const w = n.velden.waarde(); if (!w) return;
        const f = await api("POST", "feedback", { niveau: "plek", versie: hash, pagina: n.n, rect: n.rect, citaat: n.tekst, ...w });
        alle.push(f); n.div.remove(); nieuw = null; actief = f.id; tekenMarkeringen(); tekenPaneel(); melding("Bedankt! Je opmerking staat erbij.");
      }) }, h("h3", {}, `Nieuwe opmerking · p. ${n.n}`), n.citaat, n.velden.el,
        h("div", { class: "formulier" }, h("div", { class: "knoppen" }, h("button", { class: "knop" }, "Bewaar"), h("button", { class: "knop licht", type: "button", onclick: annuleerNieuw }, "Annuleer")))));
    } else {
      delen.push(h("div", { class: "uitleg-markeer" }, markeren
        ? [h("b", {}, "Markeerstift staat aan. "), "Trek een kader rond een stuk tekst, een oefening of een figuur, of klik op één plek. Druk op M om ze uit te zetten en gewoon te lezen."]
        : [h("b", {}, "Iets gezien? "), "Zet de markeerstift aan (", h("button", { class: "knop-tekst", type: "button", onclick: () => zetMarkeren(true) }, "Markeer"), ") en duid de plek aan. Over het hele boek: ",
          h("a", { href: `#/boek/${sleutelUrl(v.sleutel)}` }, "feedback op het handboek"), "."]));
    }
    const seg = h("div", { class: "segment" }, [["alle", "Iedereen"], ["mijn", "Van mij"]].map(([k, l]) => h("button", { type: "button", "aria-pressed": String(k === filter),
      onclick: () => { filter = k; tekenMarkeringen(); tekenPaneel(); } }, l)));
    delen.push(h("div", { class: "balk", style: { margin: "4px 0 0", justifyContent: "space-between" } }, h("b", {}, "Op deze versie"), seg));
    const rs = zichtbaar().sort((a, b2) => a.pagina - b2.pagina || a.rect[1] - b2.rect[1]);
    if (!rs.length) delen.push(h("p", { class: "leeg klein" }, filter === "mijn" ? "Je hebt hier nog niets gemarkeerd." : "Nog geen opmerkingen bij deze versie."));
    rs.forEach((f) => delen.push(fbKaart(f, { paneel: true, opKlik: (f2) => kies(f2.id, "blad"),
      bijWijziging: (nw, kaart, weg) => { alle = nw ? alle.map((x) => x.id === nw.id ? nw : x) : alle.filter((x) => x.id !== weg.id); tekenMarkeringen(); if (!nw) tekenPaneel(); } })));
    paneelInhoud.replaceChildren(...delen);
    if (actief) paneelInhoud.querySelector(`.fb[data-id="${actief}"]`)?.classList.add("actief");
  }

  function kies(id, naar) {
    actief = id;
    vel.querySelectorAll(".markering").forEach((m) => m.classList.toggle("actief", +m.dataset.id === id));
    paneelInhoud.querySelectorAll(".fb").forEach((k) => k.classList.toggle("actief", +k.dataset.id === id));
    if (naar === "kaart") {
      if (!paneelOpen()) paneelKnop.click();
      if (tab !== "opm") tabs.querySelector('[data-k="opm"]').click();
      paneelInhoud.querySelector(`.fb[data-id="${id}"]`)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    } else {
      const m = vel.querySelector(`.markering[data-id="${id}"]`);
      if (m) {
        const el = m.parentElement;
        vel.scrollTo({ top: el.offsetTop + m.offsetTop - vel.clientHeight / 3, behavior: "smooth" });
        m.classList.remove("flits"); void m.offsetWidth; m.classList.add("flits");
      }
    }
  }

  const lezer = h("div", { class: "lezer" }, balk, vel, paneel);
  if (innerWidth <= 900 && !markeren) lezer.classList.add("zonder-paneel"), paneelKnop.setAttribute("aria-pressed", "false");
  $app.replaceChildren(lezer);
  schaal(false);
  tekenMarkeringen(); tekenPaneel();

  const toets = (e) => {
    if (e.target.closest("input, textarea, select")) { if (e.key === "Escape") e.target.blur(); return; }
    if (e.key === "m" || e.key === "M") zetMarkeren(!markeren);
    else if (e.key === "Escape") annuleerNieuw();
    else if (e.key === "+" || e.key === "=") zetZoom(zoom * 1.2);
    else if (e.key === "-") zetZoom(zoom / 1.2);
    else if (e.key === "ArrowRight" || e.key === "PageDown" && e.altKey) naarPagina(huidige + 1);
    else if (e.key === "ArrowLeft") naarPagina(huidige - 1);
  };
  const herschaal = () => schaal(true);
  document.addEventListener("keydown", toets); addEventListener("resize", herschaal);
  S.opruimen.push(() => { document.removeEventListener("keydown", toets); removeEventListener("resize", herschaal); io.disconnect(); });

  const f = parseInt(q.get("f")); const p = parseInt(q.get("p"));
  if (f && alle.some((x) => x.id === f)) requestAnimationFrame(() => kies(f, "blad"));
  else if (p) requestAnimationFrame(() => naarPagina(p));
}

// --- mijn feedback -----------------------------------------------------------------------------
async function toonMijn() {
  await boeken();
  let alle = await api("GET", "feedback?van=ik"), filter = "alle";
  const lijst = h("div", { class: "lijst" });
  const teken = () => {
    const rs = alle.filter((f) => filter === "alle" || (filter === "open" ? ["nieuw", "behandeling"].includes(f.status) : !["nieuw", "behandeling"].includes(f.status)));
    lijst.replaceChildren(...(rs.length ? rs.map((f) => fbKaart(f, { toonBoek: true, bijWijziging: (n, _, weg) => { alle = n ? alle.map((x) => x.id === n.id ? n : x) : alle.filter((x) => x.id !== weg.id); } }))
      : [h("p", { class: "leeg" }, alle.length ? "Niets in deze lijst." : "Je hebt nog geen feedback gegeven. Open een handboek om te beginnen.")]));
  };
  const n = (s) => alle.filter((f) => s.includes(f.status)).length;
  const seg = h("div", { class: "segment" }, [["alle", `Alles (${alle.length})`], ["open", `Open (${n(["nieuw", "behandeling"])})`], ["af", `Afgehandeld (${n(["verwerkt", "afgewezen"])})`]]
    .map(([k, l]) => h("button", { type: "button", "aria-pressed": String(k === filter), onclick: (e) => { filter = k; seg.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === e.currentTarget))); teken(); } }, l)));
  scherm("mijn", h("div", { class: "paginakop" }, h("div", {}, h("h1", {}, "Mijn feedback"),
    h("p", {}, "Alles wat je gaf, met de stand van zaken. Zolang het team je feedback nog niet oppakte, kan je ze bewerken of verwijderen. Antwoorden van het team zie je hier."))),
    h("div", { class: "balk" }, seg), lijst);
  teken();
}

// --- over Axiomath: de visie, ook zonder account ----------------------------------------------------
function toonOver() {
  const extern = (href, tekst) => h("a", { href, target: "_blank", rel: "noopener" }, tekst);
  const stap = (titel, tekst) => h("li", {}, h("b", {}, titel), " ", tekst);
  scherm("over",
    h("article", { class: "over" },
      h("p", { class: "bovenkop" }, "Over Axiomath"),
      h("h1", {}, "Vrije handboeken wiskunde, door leerkrachten voor leerkrachten"),
      h("p", { class: "lead" }, "Axiomath maakt handboeken wiskunde voor de 3de graad doorstroomfinaliteit van het Vlaamse secundair onderwijs. Ze zijn vrij en niet-commercieel, en de oefeningen zitten in een oefeningenbank: de bron voor de PDF's, een online oefenplatform, testen en gedifferentieerde oefenreeksen."),
      h("p", { class: "naam" }, "De naam: ", h("i", {}, "axioma"), " + ", h("i", {}, "math"), ". Een axioma is wat je aanvaardt om te kunnen redeneren."),
      h("h2", {}, "Waar we naartoe willen"),
      h("p", {}, "Een geïntegreerd ecosysteem, volledig open:"),
      h("ol", { class: "stappen" },
        stap("Handboeken", "per leerplanpakket, als PDF in drie versies uit één bron: handboek, leerkrachtenversie en zelfstudie."),
        stap("Een oefeningenbank.", "Elke oefening heeft een vast nummer, een niveau, een antwoord en een uitwerking. Daarop steunen de PDF's, de website en later de testen."),
        stap("Een online leerplatform", "voor thuis, met automatisch nakijken."),
        stap("Testen en gedifferentieerde oefenreeksen", "uit dezelfde bank.")),
      h("h2", {}, "Vanuit de leerplandoelen"),
      h("p", {}, "Alle handboeken zijn opgesteld vanuit de leerplandoelen van de graadleerplannen wiskunde voor de 3de graad doorstroom. Er is een reeks handboeken per leerplanpakket: Basis, B+S, B+S' en B+S''. Zo vindt elke richting de leerstof van haar eigen pakket. Welke leerplandoelen elk handboek behandelt, staat per pakket ",
        extern(`${GITHUB}/blob/main/Handboeken/README.md`, "op GitHub"), "."),
      h("h2", {}, "Vrij en open"),
      h("p", {}, "Je mag alles gebruiken, aanpassen en delen, zolang het niet commercieel is en je de bron vermeldt. De inhoud valt onder ",
        extern("https://creativecommons.org/licenses/by-nc-sa/4.0/deed.nl", "CC BY-NC-SA 4.0"), ". Alle bronnen staan op GitHub: de LaTeX-bestanden van de handboeken, de oefeningenbank en de code van deze website."),
      h("div", { class: "knoppen" },
        h("a", { class: "knop", href: GITHUB, target: "_blank", rel: "noopener" }, "Axiomath op GitHub"),
        h("a", { class: "knop licht", href: `${GITHUB}/blob/main/CONTRIBUTING.md`, target: "_blank", rel: "noopener" }, "Meewerken")),
      h("h2", {}, "Lees mee"),
      h("p", {}, "Eerst maken we van elk handboek een eerste versie, daarna lezen leerkrachten ze na. Lees een handboek en zeg wat beter kan: op een plek in het boek, over een heel handboek of over het idee zelf. ",
        S.ik ? [h("a", { href: "#/algemeen" }, "Geef algemene feedback"), "."] : [h("a", { href: "#/aanmelden" }, "Meld je aan"), " als leerkracht, of bekijk ", h("a", { href: "#/" }, "de handboeken"), "."])));
}

// --- algemene feedback -------------------------------------------------------------------------
async function toonAlgemeen() {
  const d = await boeken();
  let alle = await api("GET", "feedback?niveau=algemeen");
  const lijst = h("div", { class: "lijst" });
  const teken = () => lijst.replaceChildren(...(alle.length ? alle.map((f) => fbKaart(f, { toonBoek: true, bijWijziging: (n, _, weg) => { alle = n ? alle.map((x) => x.id === n.id ? n : x) : alle.filter((x) => x.id !== weg.id); } }))
    : [h("p", { class: "leeg" }, "Nog geen algemene feedback.")]));
  const v = feedbackVelden(S.menu.soorten_algemeen, { soort: "premisse" }, "Wat vind je van het idee: vrije handboeken, de opbouw per pakket, de oefeningenbank, de zelfstudieversie, …?");
  const boek = h("select", {}, h("option", { value: "" }, "Over Axiomath in het algemeen"),
    d.pakketten.map((p) => h("optgroup", { label: `${p.nr} · ${p.naam}` }, d.boeken.filter((b) => b.pakketnr === p.nr).map((b) => h("option", { value: b.sleutel }, b.titel)))));
  const form = h("form", { class: "formulier", onsubmit: poging(async (e) => {
    e.preventDefault(); const w = v.waarde(); if (!w) return;
    alle.unshift(await api("POST", "feedback", { niveau: "algemeen", sleutel: boek.value || null, ...w })); v.leeg(); teken(); melding("Bedankt! Je feedback is bewaard.");
  }) }, v.el, h("label", { class: "veld" }, "Gaat het over één handboek?", h("span", { class: "hulp" }, "Niet verplicht."), boek), h("div", { class: "knoppen" }, h("button", { class: "knop" }, "Verstuur")));
  scherm("algemeen",
    h("div", { class: "paginakop" }, h("div", {}, h("h1", {}, "Algemene feedback"),
      h("p", {}, "Over de premisse van Axiomath, de keuzes die voor alle handboeken gelden, of deze website. Hoe kritischer, hoe liever."))),
    h("div", { class: "twee" }, h("section", { class: "kaart" }, h("h2", {}, "Zeg het ons"), form), h("section", {}, h("h2", {}, "Wat collega's zeiden"), lijst)));
  teken();
}

// --- beheer ------------------------------------------------------------------------------------
async function toonBeheer(tab) {
  const d = await boeken(true);
  tab = tab || "feedback";
  const tabs = h("div", { class: "tabs", role: "tablist", style: { maxWidth: "none" } },
    [["feedback", "Feedback"], ["overzicht", "Per handboek"], ["mensen", "Leerkrachten"], ["pdf", "PDF's"]].map(([k, l]) =>
      h("button", { type: "button", role: "tab", "aria-selected": String(k === tab), onclick: () => { location.hash = `#/beheer/${k}`; } }, l)));
  const plek = h("div", {}, h("p", { class: "laden" }, "Laden …"));
  scherm("beheer", h("div", { class: "paginakop" }, h("div", {}, h("h1", {}, "Beheer"),
    h("p", {}, "Alle feedback op één plek. Exporteer naar Markdown om ze per handboek, hoofdstuk en pagina te verwerken in de bron."))), tabs, plek);
  const inhoud = await ({ feedback: beheerFeedback, overzicht: beheerOverzicht, mensen: beheerMensen, pdf: beheerPdf }[tab] || beheerFeedback)(d);
  plek.replaceChildren(...[inhoud].flat());
}

async function beheerFeedback(d) {
  const q = new URLSearchParams(location.hash.split("?")[1] || "");
  const filters = { status: q.get("status") ?? "open", pakket: q.get("pakket") || "", sleutel: q.get("sleutel") || "", niveau: "", soort: "", ernst: "", zoek: "" };
  let sorteer = "verwerk", rijen = [];
  const sel = (naam, opties) => h("select", { "aria-label": naam, onchange: (e) => { filters[naam] = e.target.value; laad(); } },
    opties.map(([k, l]) => h("option", { value: k, selected: filters[naam] === k }, l)));
  const boekSel = sel("sleutel", [["", "Alle handboeken"], ...d.boeken.map((b) => [b.sleutel, `${b.pakketnr} · ${b.titel}`])]);
  const balk = h("div", { class: "balk" },
    sel("status", [["open", "Open (nieuw + in behandeling)"], ["", "Alle statussen"], ...Object.entries(S.menu.statussen)]),
    sel("pakket", [["", "Alle pakketten"], ...d.pakketten.map((p) => [String(p.nr), `Pakket ${p.nr}`])]),
    boekSel,
    sel("niveau", [["", "Elk niveau"], ["plek", "Op een pagina"], ["handboek", "Hele handboek"], ["algemeen", "Algemeen"]]),
    sel("soort", [["", "Elke soort"], ...Object.entries(S.menu.soorten_algemeen)]),
    sel("ernst", [["", "Elke ernst"], ...Object.entries(S.menu.ernst)]),
    h("input", { type: "search", placeholder: "Zoek in tekst of citaat", onchange: (e) => { filters.zoek = e.target.value; laad(); } }),
    h("select", { "aria-label": "Sorteer", onchange: (e) => { sorteer = e.target.value; teken(); } },
      h("option", { value: "verwerk" }, "Volgorde om te verwerken"), h("option", { value: "nieuw" }, "Nieuwste eerst"), h("option", { value: "steun" }, "Meeste steun"), h("option", { value: "ernst" }, "Dringendste eerst")));
  const tellers = h("div", { class: "tellers" });
  const lijst = h("div", { class: "lijst" });
  const exportLink = (formaat) => h("a", { class: "knop licht klein", href: "#", onclick: (e) => {
    e.preventDefault(); const p = new URLSearchParams({ formaat, ...Object.fromEntries(Object.entries(filters).filter(([, w]) => w)) });
    location.href = apiUrl(`beheer/export?${p}`);
  } }, icoon("download"), formaat === "md" ? "Markdown (zonder namen)" : "CSV voor Excel");
  const volgorde = d.boeken.map((b) => b.sleutel);
  const ernstOrde = { dringend: 0, belangrijk: 1, klein: 2 };
  function teken() {
    let rs = [...rijen];
    if (sorteer === "verwerk") rs.sort((a, b) => (volgorde.indexOf(a.sleutel) - volgorde.indexOf(b.sleutel)) || (a.niveau === "plek") - (b.niveau === "plek") ||
      (a.editie || "").localeCompare(b.editie || "") || (a.pagina || 0) - (b.pagina || 0) || (a.rect?.[1] || 0) - (b.rect?.[1] || 0));
    if (sorteer === "steun") rs.sort((a, b) => b.steun - a.steun);
    if (sorteer === "ernst") rs.sort((a, b) => ernstOrde[a.ernst] - ernstOrde[b.ernst] || b.steun - a.steun);
    const tel = (f) => rijen.filter(f).length;
    tellers.replaceChildren(
      h("div", { class: "teller" }, h("b", {}, rijen.length), h("span", {}, "in deze selectie")),
      h("div", { class: "teller" }, h("b", {}, tel((f) => f.status === "nieuw")), h("span", {}, "nieuw")),
      h("div", { class: "teller" }, h("b", {}, tel((f) => f.status === "behandeling")), h("span", {}, "in behandeling")),
      h("div", { class: "teller" }, h("b", { style: { color: "var(--fout)" } }, tel((f) => f.ernst === "dringend" && ["nieuw", "behandeling"].includes(f.status))), h("span", {}, "dringend en open")));
    let vorige = null;
    const delen = [];
    for (const f of rs) {
      if (sorteer === "verwerk" && f.sleutel !== vorige) { delen.push(h("h3", { class: "sectie-kop", style: { marginTop: delen.length ? "18px" : 0 } }, f.sleutel ? boekTitel(f.sleutel) : "Algemeen")); vorige = f.sleutel; }
      delen.push(fbKaart(f, { beheer: true, toonBoek: sorteer !== "verwerk", bijWijziging: (n, _, weg) => { rijen = n ? rijen.map((x) => x.id === n.id ? n : x) : rijen.filter((x) => x.id !== weg.id); } }));
    }
    lijst.replaceChildren(...(delen.length ? delen : [h("p", { class: "leeg" }, "Geen feedback in deze selectie.")]));
  }
  const laad = poging(async () => {
    const p = new URLSearchParams(Object.fromEntries(Object.entries(filters).filter(([, w]) => w)));
    rijen = await api("GET", `beheer/feedback?${p}`); teken();
  });
  await laad();
  return [balk, tellers, h("div", { class: "balk", style: { justifyContent: "flex-end" } }, h("span", { class: "zacht klein" }, "Exporteer deze selectie:"), exportLink("md"), exportLink("csv")), lijst];
}

async function beheerOverzicht(d) {
  const o = await api("GET", "beheer/overzicht");
  const soorten = Object.keys(S.menu.soorten_algemeen);
  const per = {};
  for (const r of o.telling) {
    const k = r.sleutel || "";
    per[k] ??= { open: 0, af: 0, dringend: 0, soort: {} };
    if (["nieuw", "behandeling"].includes(r.status)) {
      per[k].open += r.n; per[k].soort[r.soort] = (per[k].soort[r.soort] || 0) + r.n; if (r.ernst === "dringend") per[k].dringend += r.n;
    } else per[k].af += r.n;
  }
  const gebruikt = soorten.filter((s) => Object.values(per).some((p) => p.soort[s]));
  const max = Math.max(1, ...Object.values(per).flatMap((p) => Object.values(p.soort)));
  const cel = (n, s) => h("td", { class: "getal" }, n ? h("span", { class: `warm s-${s}`, style: { background: `color-mix(in srgb, var(--c) ${12 + 50 * n / max}%, transparent)` } }, n) : h("span", { class: "zacht" }, "·"));
  const rij = (k, titel) => {
    const p = per[k]; if (!p) return null;
    return h("tr", {}, h("td", {}, h("a", { href: `#/beheer/feedback?sleutel=${encodeURIComponent(k)}&status=open` }, titel)),
      h("td", { class: "getal" }, h("b", {}, p.open)), h("td", { class: "getal" }, p.dringend || ""), gebruikt.map((s) => cel(p.soort[s], s)), h("td", { class: "getal zacht" }, p.af));
  };
  const rijen = [rij("", "Algemeen"), ...d.boeken.map((b) => rij(b.sleutel, `${b.pakketnr} · ${b.titel}`))].filter(Boolean);
  if (!rijen.length) return h("p", { class: "leeg" }, "Nog geen feedback.");
  return [h("p", { class: "zacht", style: { marginBottom: "12px" } }, "Open feedback per handboek en per soort. Klik op een handboek om die feedback te zien."),
    h("div", { class: "tabel-houder" }, h("table", {}, h("thead", {}, h("tr", {}, h("th", {}, "Handboek"), h("th", { class: "getal" }, "Open"), h("th", { class: "getal" }, "Dringend"),
      gebruikt.map((s) => h("th", { class: "getal" }, S.menu.soorten_algemeen[s])), h("th", { class: "getal" }, "Afgehandeld"))), h("tbody", {}, rijen)))];
}

async function beheerMensen() {
  const plek = h("div");
  const kopieer = async (tekst) => { try { await navigator.clipboard.writeText(tekst); melding("Gekopieerd."); } catch { prompt("Kopieer:", tekst); } };
  const uitnodigTekst = (code) => `Je bent uitgenodigd om de handboeken van Axiomath te lezen en feedback te geven.\nGa naar ${location.origin}/#/?code=${code} en maak je account met deze code: ${code}\nDe code is 30 dagen geldig en werkt één keer.`;
  async function teken() {
    const d = await api("GET", "beheer/gebruikers");
    const aantal = h("input", { type: "number", min: 1, max: 50, value: 1, style: { width: "5em" } });
    const rol = h("select", { style: { width: "auto" } }, h("option", { value: "leerkracht" }, "leerkracht"), h("option", { value: "beheerder" }, "beheerder (team)"));
    const notitie = h("input", { type: "text", placeholder: "Notitie, bv. voor wie (alleen voor jou)", style: { maxWidth: "320px" } });
    plek.replaceChildren(
      h("section", { class: "kaart", style: { marginBottom: "24px" } }, h("h2", { class: "sectie-kop" }, "Leerkrachten uitnodigen"),
        h("p", { class: "zacht klein", style: { marginBottom: "12px" } }, "Een code werkt één keer en 30 dagen lang. Stuur de code of de uitnodigingstekst zelf door."),
        h("div", { class: "balk", style: { marginBottom: "14px" } }, aantal, rol, notitie,
          h("button", { class: "knop", type: "button", onclick: poging(async () => {
            const r = await api("POST", "beheer/uitnodiging", { aantal: aantal.value, rol: rol.value, notitie: notitie.value });
            if (r.codes.length === 1) kopieer(uitnodigTekst(r.codes[0]));
            teken();
          }) }, "Maak codes")),
        d.codes.length ? h("div", { class: "codes" }, d.codes.map((c) => h("div", { class: "code" }, h("code", {}, c.code),
          h("span", { class: "pil" }, c.soort === "herstel" ? "herstel" : c.rol), h("span", { class: "zacht klein" }, c.notitie || ""), h("span", { class: "ruimte" }),
          h("span", { class: "zacht klein" }, `tot ${datum(c.vervalt)}`),
          h("button", { class: "knop licht klein", type: "button", onclick: () => kopieer(c.soort === "herstel" ? c.code : uitnodigTekst(c.code)) }, icoon("kopie"), c.soort === "herstel" ? "Kopieer" : "Kopieer uitnodiging"),
          h("button", { class: "knop-tekst klein", type: "button", onclick: poging(async () => { await api("DELETE", `beheer/code/${c.code}`); teken(); }) }, "Intrekken"))))
          : h("p", { class: "zacht klein" }, "Geen openstaande codes.")),
      h("h2", { class: "sectie-kop" }, `Accounts (${d.gebruikers.length})`),
      h("div", { class: "tabel-houder" }, h("table", {},
        h("thead", {}, h("tr", {}, ["Naam", "E-mail", "Rol", "Feedback", "Laatst gezien", "Sinds", ""].map((t, i) => h("th", { class: i === 3 ? "getal" : null }, t)))),
        h("tbody", {}, d.gebruikers.map((g) => h("tr", { style: { opacity: g.actief ? 1 : .5 } },
          h("td", {}, h("b", {}, g.naam)), h("td", {}, g.email),
          h("td", {}, g.id === S.ik.id ? g.rol : h("select", { style: { width: "auto", padding: ".2em .4em" }, onchange: poging(async (e) => { await api("PATCH", `beheer/gebruiker/${g.id}`, { rol: e.target.value }); melding("Rol aangepast."); }) },
            ["leerkracht", "beheerder"].map((r) => h("option", { value: r, selected: r === g.rol }, r)))),
          h("td", { class: "getal" }, g.feedback), h("td", {}, wanneer(g.gezien)), h("td", {}, datum(g.aangemaakt)),
          h("td", {}, g.id !== S.ik.id && [
            h("button", { class: "knop-tekst klein", type: "button", onclick: poging(async () => {
              const r = await api("POST", `beheer/herstel/${g.id}`);
              dialoog(`Herstelcode voor ${g.naam}`, [h("p", {}, "Geef deze code door. De leerkracht kiest er een nieuw wachtwoord mee, onder 'Herstelcode' op de aanmeldpagina."), h("p", {}, h("code", { style: { fontSize: "1.3rem" } }, r.code))],
                [h("button", { class: "knop", type: "button", onclick: () => kopieer(r.code) }, "Kopieer"), h("button", { class: "knop licht", value: "x" }, "Sluit")]);
              teken();
            }) }, "Herstelcode"),
            h("button", { class: "knop-tekst klein", type: "button", onclick: poging(async () => { await api("PATCH", `beheer/gebruiker/${g.id}`, { actief: !g.actief }); teken(); }) }, g.actief ? "Blokkeer" : "Activeer")])))))));
  }
  await teken();
  return plek;
}

async function beheerPdf(d) {
  const rijen = d.boeken.filter((b) => b.edities.length);
  return [h("section", { class: "kaart", style: { marginBottom: "24px" } }, h("h2", { class: "sectie-kop" }, "Nieuwe PDF's online zetten"),
    h("p", { class: "zacht" }, "De site bewaart elke PDF als een vaste versie, zodat een opmerking bij haar pagina blijft. Bouw een handboek opnieuw met maak-pdf.py en draai daarna in Website/leerkrachten ",
      h("code", {}, "maak.py"), " en ", h("code", {}, "uitrol.py"), ". Leerkrachten lezen voortaan de nieuwste versie; opmerkingen op een oudere versie blijven daar zichtbaar.")),
    h("div", { class: "tabel-houder" }, h("table", {}, h("thead", {}, h("tr", {}, h("th", {}, "Handboek"), S.menu && Object.values(S.menu.edities).map((l) => h("th", {}, l)))),
      h("tbody", {}, rijen.map((b) => h("tr", {}, h("td", {}, `${b.pakketnr} · ${b.titel}`),
        Object.keys(S.menu.edities).map((e) => { const x = b.edities.find((y) => y.editie === e); return h("td", { class: "zacht" }, x ? `${datum(x.gebouwd)} · ${x.paginas} p.` : "–"); }))))))];
}

// --- router ------------------------------------------------------------------------------------
async function route() {
  if (!S.menu) return;  // start() is nog bezig
  opruimen();
  const [pad, query] = location.hash.replace(/^#/, "").split("?");
  const q = new URLSearchParams(query || "");
  const delen = pad.split("/").filter(Boolean);
  try {
    if (delen[0] === "aanmelden" || (!S.ik && ["mijn", "algemeen", "beheer"].includes(delen[0]))) toonWelkom();
    else if (delen[0] === "boek" && delen[1]) await toonBoek(decodeURIComponent(delen.slice(1).join("/")));
    else if (delen[0] === "lees" && delen[1]) await toonLezer(delen[1], q);
    else if (delen[0] === "mijn") await toonMijn();
    else if (delen[0] === "algemeen") await toonAlgemeen();
    else if (delen[0] === "over") toonOver();
    else if (delen[0] === "beheer" && S.ik.rol === "beheerder") await toonBeheer(delen[1]);
    else await toonKast();
  } catch (e) {
    if (!e.welkom) scherm("", h("p", { class: "leeg" }, e.message, " ", h("a", { href: "#/" }, "Naar de handboeken")));
  }
}

async function start() {
  S.menu ??= await api("GET", "menu");
  S.ik = await api("GET", "ik");
  S.boeken = null;  // met of zonder account: een andere lijst
  if (!S.ik && location.hash.includes("code=")) return toonWelkom();
  if (S.ik && (location.hash.includes("code=") || location.hash.startsWith("#/aanmelden"))) history.replaceState(null, "", "#/");
  await route();
}
addEventListener("hashchange", route);
$app.append(h("p", { class: "laden" }, "Laden …"));
start().catch((e) => melding(e.message, true));
