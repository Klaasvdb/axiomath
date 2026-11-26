/* Axiomath voor leerkrachten. Eén pagina, routering via de hash:
     #/                 boekenkast          #/boek/<sleutel>     één handboek
     #/lees/<versie>?p=&f=   lezer          #/mijn               mijn feedback
     #/algemeen         algemene feedback   #/beheer/<tab>       voor het team
     #/aanmelden        aanmelden, uitnodiging, herstelcode     #/over   de visie, voor iedereen
     #/voortgang        de voortgang per pakket en per handboek, voor iedereen
     #/privacy          de privacyverklaring, voor iedereen
     #/plannen          toekomstige plannen, met een voorproefje van elk (plannen.js), voor iedereen
   Zonder account (S.ik = null) zie je de boekenkast en lees je de editie 'handboek', zonder feedback.
   Alle tekst komt via textContent op de pagina (functie h), nooit via innerHTML, behalve de vaste iconen. */
"use strict";

const S = { ik: null, menu: null, boeken: null, opruimen: [] };
const $app = document.getElementById("app");
const GITHUB = "https://github.com/Klaasvdb/axiomath";
const KOFFIE = "https://ko-fi.com/axiomath"; // link naar de 'Koop mij een koffie'-pagina; leeg = geen knop op Over

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
  vink: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  breed: '<path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4"/>',
  kopie: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V4h12"/>',
  kruis: '<path d="M6 6l12 12M18 6L6 18"/>',
  greep: '<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>',
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
const PDFJS = "/lib/pdf.js-3.11.174/";  // zelf gehost (lib/README.md), niet meer via cdnjs
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
  // de kleur van de statusbalk in de app op een gsm volgt het thema (de kop: --papier)
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => { m.content = (t ? t === "dark" : m.media.includes("dark")) ? "#15202A" : "#FFFFFF"; });
}
zetThema(opslag.lees("thema"));
const isDonker = () => document.documentElement.dataset.theme === "dark" ||
  (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);

// --- als app op het beginscherm ----------------------------------------------------------------
/* manifest.webmanifest en sw.js maken de site installeerbaar. Android en Chrome/Edge geven een eigen vraag
   (beforeinstallprompt); op een iPhone of iPad kan het alleen met de deelknop, dus daar tonen we de stappen. */
const APP = { vraag: null };
const alsApp = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
const isIos = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const opGsm = () => matchMedia("(pointer: coarse)").matches;
if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => { /* zonder service worker werkt de site gewoon */ });
addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); APP.vraag = e; });
addEventListener("appinstalled", () => { APP.vraag = null; document.querySelectorAll(".app-tip").forEach((t) => t.remove()); melding("Axiomath staat op je beginscherm."); });

async function installeer() {
  if (APP.vraag) {
    const v = APP.vraag; APP.vraag = null;  // de vraag van de browser werkt maar één keer
    v.prompt();
    await v.userChoice.catch(() => {});
    return;
  }
  const stappen = (titel, ...s) => h("div", { class: "app-stappen" }, h("h3", {}, titel), h("ol", {}, s.map((x) => h("li", {}, x))));
  const iphone = stappen("iPhone of iPad", "Open axiomath.be in Safari.", ["Tik op de deelknop ", h("b", {}, "(het vierkant met de pijl omhoog)"), "."],
    ["Kies ", h("b", {}, "Zet op beginscherm"), " en tik op ", h("b", {}, "Voeg toe"), "."]);
  const android = stappen("Android", "Open axiomath.be in Chrome.", ["Tik op het menu ", h("b", {}, "⋮"), " rechtsboven."],
    ["Kies ", h("b", {}, "App installeren"), " of ", h("b", {}, "Toevoegen aan startscherm"), "."]);
  const computer = stappen("Computer", ["In Chrome of Edge: klik op het installatie-icoon rechts in de adresbalk, of kies in het menu ", h("b", {}, "App installeren"), "."]);
  dialoog("Axiomath als app", [h("p", { class: "zacht" }, "Je vindt Axiomath dan op je beginscherm, en het opent schermvullend, zoals een app. Je hebt geen appwinkel nodig."),
    isIos() ? [iphone, android] : opGsm() ? [android, iphone] : [computer, android, iphone]], [h("button", { class: "knop", value: "x" }, "Begrepen")]);
}

/* Een kaartje bovenaan de boekenkast, alleen op een gsm of tablet in de browser. Weggeklikt = weg (per toestel). */
function appTip() {
  if (alsApp() || !opGsm() || opslag.lees("app-tip") === "weg") return null;
  const tip = h("aside", { class: "app-tip", "aria-label": "Axiomath als app" },
    h("img", { src: "/icoon-192.png", alt: "", width: 44, height: 44 }),
    h("div", {}, h("b", {}, "Axiomath als app"), h("p", {}, "Zet de handboeken op het beginscherm van je gsm of tablet.")),
    h("button", { class: "knop klein", type: "button", onclick: installeer }, "Installeer"),
    h("button", { class: "knop-icoon", type: "button", "aria-label": "Niet meer tonen", onclick: () => { opslag.zet("app-tip", "weg"); tip.remove(); } }, icoon("kruis")));
  return tip;
}

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
  return b ? `${b.titel} · ${meerGraden() ? `${b.graad}de graad${finKort(b)}, ` : ""}pakket ${b.pakketnr}` : sleutel;
}
// Graden en pakketten. Een pakket heeft een id ("4" in de 3de graad, "2g5" in de 2de); een boek verwijst ernaar met pakketid.
// Met één graad op de site volstaat het pakketnummer, met twee komt de graad erbij.
const graden = () => [...new Set((S.boeken?.pakketten || []).map((p) => p.graad))];
const meerGraden = () => graden().length > 1;
const graadTekst = () => graden().slice().sort().map((g, i, a) => i === a.length - 1 ? `${g}de graad` : `${g}de`).join(" en ");
const pakketKort = (x) => { const nr = x.nr ?? x.pakketnr; return meerGraden() ? `${x.graad}de gr. ${nr}` : `${nr}`; };
const pakketVan = (d, b) => d.pakketten.find((p) => p.id === b.pakketid);
// Finaliteiten: D (doorstroom), DA (dubbele finaliteit), A (arbeidsmarkt). Een pakket en een boek hebben er één.
// De D/A-pakketten nummeren verder in hun graad (3de graad 5-8, 2de graad 6-7, A 8): zie maak-voorkanten.py.
const FINALITEITEN = { D: "doorstroom", DA: "dubbele finaliteit", A: "arbeidsmarktfinaliteit" };
const FINALITEIT_VOLUIT = { D: "doorstroomfinaliteit", DA: "dubbele finaliteit", A: "arbeidsmarktfinaliteit" };
const finaliteit = (x) => x?.finaliteit || "D";
const finKort = (x) => finaliteit(x) === "D" ? "" : ` ${FINALITEITEN[finaliteit(x)]}`;
const graadFin = (x) => `${x.graad}de graad ${FINALITEITEN[finaliteit(x)]}`;
const finaliteitenVan = (g) => [...new Set((S.boeken?.pakketten || []).filter((p) => g === "alle" || String(p.graad) === String(g)).map(finaliteit))];
/* Een pakket dat we maken als er vraag naar is (de arbeidsmarktfinaliteit): wie interesse heeft, laat het weten. */
const interesse = () => h("p", { class: "interesse" }, h("b", {}, "Op aanvraag. "),
  "Dit handboek maken we zodra er interesse is. Geef je les in de arbeidsmarktfinaliteit en wil je het gebruiken of mee maken? Laat het ons weten via ",
  S.ik ? h("a", { href: "#/algemeen" }, "algemene feedback") : [h("a", { href: "#/aanmelden" }, "een account"), " of ", h("a", { href: GITHUB + "/issues", target: "_blank", rel: "noopener" }, "GitHub")], ".");

/* opties: { paneel, beheer, toonBoek, opKlik, bijWijziging(f|null) } */
/* Een open opmerking verhuist mee naar de nieuwe versie van het boek (herplaats.py). Het bericht zegt dat, en of de
   plek bij benadering is (de tekst onder het kader stond er niet meer letterlijk). De uitsnede toont hoe het er toen stond. */
function verplaatstBericht(f) {
  const o = f.oorspronkelijk;
  const zin = f.benaderd
    ? `Meegenomen naar de nieuwe versie van het boek. De tekst is intussen veranderd: de plek is bij benadering (eerst p. ${o.pagina}).`
    : `Meegenomen naar de nieuwe versie van het boek (eerst p. ${o.pagina}).`;
  return h("div", { class: "verplaatst" + (f.benaderd ? " benaderd" : ""), onclick: (e) => e.stopPropagation() }, h("span", {}, zin),
    o.uitsnede && h("details", {}, h("summary", {}, "Zo stond het er toen"),
      h("img", { src: o.uitsnede, alt: `De plek zoals ze was in de vorige versie, p. ${o.pagina}`, loading: "lazy" })));
}

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
    f.oorspronkelijk && verplaatstBericht(f),
    h("div", { class: "fb-tekst" }, f.tekst),
    h("div", { class: "fb-voet" }, h("span", {}, f.van_mij ? "Jij" : f.auteur, " · ", wanneer(f.aangemaakt)), h("span", { class: "ruimte" }), knoppen, steun),
    reacties].filter(Boolean));

  if (opties.beheer) {
    // Botsingen: andere opmerkingen op dezelfde plek. Zo maakt de tweede leerkracht niet ongemerkt ongedaan wat de eerste vroeg.
    const bots = f.botsingen || [];
    if (bots.length) {
      kaart.append(h("div", { class: "botsing", onclick: (e) => e.stopPropagation() },
        h("b", {}, `Let op: ${bots.length === 1 ? "nog één opmerking" : `nog ${bots.length} opmerkingen`} op dezelfde plek`),
        bots.map((x) => h("div", { class: "botsing-rij" }, h("span", { class: `pil stip st-${x.status}` }, S.menu.statussen[x.status]),
          ` #${x.id} (p. ${x.pagina}): `, x.tekst))));
    }
    const zet = (status, reden) => poging(async () => { vervang(await api("PATCH", `feedback/${f.id}`, { status, ...(reden ? { reden } : {}) })); melding(`Gezet op ${S.menu.statussen[status].toLowerCase()}.`); });
    const knop = (klas, tekst, onclick, titel) => h("button", { class: `knop klein beslis ${klas}`, type: "button", title: titel || "", onclick: (e) => { e.stopPropagation(); onclick(); } }, tekst);
    const goedkeuren = () => {
      const anderen = bots.filter((x) => ["behandeling", "verwerkt"].includes(x.status));
      if (anderen.length && !confirm(`Op dezelfde plek is al ${anderen.map((x) => "#" + x.id + " (" + S.menu.statussen[x.status].toLowerCase() + ")").join(", ")} goedgekeurd of verwerkt.
Controleer dat deze opmerking niet tegenspreekt wat daar gevraagd werd. Toch goedkeuren?`)) return;
      zet("behandeling")();
    };
    const afkeuren = () => {
      const veld = h("textarea", { placeholder: "Waarom niet? De leerkracht ziet dit als antwoord van het team (mag leeg).", maxlength: 3000, rows: 4 });
      const d = dialoog(`Opmerking #${f.id} afkeuren`, h("div", {}, h("p", { class: "citaat" }, f.tekst), veld), [
        h("button", { class: "knop afkeur", type: "button", onclick: () => { d.close(); zet("afgewezen", veld.value.trim())(); } }, "Afkeuren"),
        h("button", { class: "knop licht", value: "annuleer" }, "Annuleer")]);
    };
    const knoppen = {
      nieuw: [knop("goed", "✓ Goedkeuren", goedkeuren, "Deze opmerking wordt verwerkt in het handboek"), knop("af", "✗ Afkeuren", afkeuren, "Niet verwerken; met uitleg aan de leerkracht")],
      behandeling: [knop("goed", "✓ Zet op verwerkt", zet("verwerkt"), "Het staat in de bron"), knop("af", "✗ Toch afkeuren", afkeuren), knop("terug", "↩ Terug naar nieuw", zet("nieuw"))],
      verwerkt: [knop("terug", "↩ Heropen", zet("behandeling"), "Terug naar goedgekeurd")],
      afgewezen: [knop("goed", "✓ Alsnog goedkeuren", goedkeuren), knop("terug", "↩ Terug naar nieuw", zet("nieuw"))],
    }[f.status] || [];
    const notitie = h("input", { type: "text", placeholder: "Interne notitie (alleen voor het team)", value: f.notitie || "",
      onchange: poging(async () => { await api("PATCH", `feedback/${f.id}`, { notitie: notitie.value }); melding("Notitie bewaard."); }) });
    const log = h("details", { class: "logje", ontoggle: poging(async (e) => {
      if (!log.open || log.dataset.geladen) return; log.dataset.geladen = "1";
      const r = await api("GET", `beheer/logboek?feedback=${f.id}`);
      log.append(h("div", {}, r.length ? r.map(logRegel) : h("span", { class: "zacht" }, "Nog niets.")));
    }) }, h("summary", {}, "Logboek van deze opmerking"));
    kaart.append(h("div", { class: "beslis-rij" }, knoppen), h("div", { class: "beheer-rij" }, notitie), log);
  }
  if (opties.opKlik) kaart.addEventListener("click", () => opties.opKlik(f, kaart));
  return kaart;
}

function logRegel(r) {
  const wat = r.actie === "status" ? `${S.menu.statussen[r.van] || r.van} → ${S.menu.statussen[r.naar] || r.naar}`
    : ({ ingediend: "ingediend", bewerkt: "bewerkt", reactie: "antwoord", notitie: "notitie", verwijderd: "verwijderd" }[r.actie] || r.actie);
  return h("div", { class: "logregel" }, h("span", { class: "zacht" }, wanneer(r.tijd)), " · ", h("b", {}, wat), " · ", r.wie,
    r.tekst && h("div", { class: "logtekst" }, r.tekst));
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
      h("div", {}, h("button", { class: "knop" }, "Aanmelden")),
      h("p", { class: "zacht klein", style: { marginTop: "14px" } },
        h("a", { href: "#/aanmelden", onclick: (e) => { e.preventDefault(); kies("vergeten", email.value); } }, "Wachtwoord vergeten?")));
    },
    // de server mailt een herstellink (#/aanmelden?herstel=…) en zegt nooit of het adres een account heeft
    vergeten: (adres) => {
      const email = h("input", { type: "email", autocomplete: "username", required: true, value: adres || "" });
      const knop = h("button", { class: "knop" }, "Stuur me een link");
      const klaar = h("p", { class: "melding-tekst", role: "status" });
      return h("form", { onsubmit: poging(async (e) => {
        e.preventDefault(); fout.textContent = ""; klaar.textContent = "";
        try { const r = await api("POST", "herstel/vraag", { email: email.value }); klaar.textContent = r.boodschap; knop.disabled = true; }
        catch (x) { fout.textContent = x.message; }
      }) }, h("p", { class: "zacht" }, "Geef het e-mailadres van je account. Je krijgt een mail met een link om een nieuw wachtwoord te kiezen."),
      h("label", { class: "veld" }, "E-mailadres", email), fout, klaar,
      h("div", {}, knop, " ", h("button", { class: "knop licht", type: "button", onclick: () => kies("aanmelden") }, "Terug")));
    },
    uitnodiging: () => {
      const code = h("input", { type: "text", autocomplete: "off", placeholder: "abcd-efgh-jkmn", required: true });
      const naam = h("input", { type: "text", autocomplete: "name", required: true });
      const email = h("input", { type: "email", autocomplete: "email", required: true });
      const ww = h("input", { type: "password", autocomplete: "new-password", minlength: 10, required: true });
      const p = new URLSearchParams(location.hash.split("?")[1] || ""); if (p.get("code")) code.value = p.get("code");
      return h("form", { onsubmit: poging(async (e) => {
        e.preventDefault(); fout.textContent = "";
        try {
          await api("POST", "registreer", { code: code.value, naam: naam.value, email: email.value, wachtwoord: ww.value });
          history.replaceState(null, "", "#/profiel?nieuw=1");  // een nieuw account gaat meteen naar de lesopdracht
          await start();
        } catch (x) { fout.textContent = x.message; }
      }) }, h("label", { class: "veld" }, "Uitnodigingscode", h("span", { class: "hulp" }, "Je kreeg ze van het Axiomath-team."), code),
      h("label", { class: "veld" }, "Je naam", h("span", { class: "hulp" }, "Collega's zien je naam bij je feedback."), naam),
      h("label", { class: "veld" }, "E-mailadres", email),
      h("label", { class: "veld" }, "Kies een wachtwoord", h("span", { class: "hulp" }, "Minstens 10 tekens."), ww), fout,
      h("p", { class: "zacht klein" }, "Wat we met je naam en e-mailadres doen, staat in de ", h("a", { href: "#/privacy" }, "privacyverklaring"), "."),
      h("div", {}, h("button", { class: "knop" }, "Account maken")),
      // het adres staat in config.php op de server ('contact'), niet in de repo
      S.menu?.contact && h("p", { class: "zacht klein", style: { marginTop: "18px" } }, "Nog geen uitnodigingscode? ",
        h("a", { class: "aanvraag", href: `mailto:${S.menu.contact}?subject=` + encodeURIComponent("Aanvraag uitnodiging Axiomath") + "&body=" + encodeURIComponent("Dag,\n\nIk ben leerkracht wiskunde en wil graag de handboeken van Axiomath lezen en feedback geven. Kan ik een uitnodiging krijgen?\n\nNaam:\nSchool of regio:\nE-mailadres:\n\nBedankt!") }, "Verstuur aanvraag om uitnodiging te krijgen")));
    },
    herstel: () => {
      const code = h("input", { type: "text", autocomplete: "off", required: true });
      const ww = h("input", { type: "password", autocomplete: "new-password", minlength: 10, required: true });
      const p = new URLSearchParams(location.hash.split("?")[1] || ""); if (p.get("herstel")) code.value = p.get("herstel");
      return h("form", { onsubmit: poging(async (e) => {
        e.preventDefault(); fout.textContent = "";
        try {
          await api("POST", "herstel", { code: code.value, wachtwoord: ww.value });
          history.replaceState(null, "", "#/"); await start();
        } catch (x) { fout.textContent = x.message; }
      }) }, h("p", { class: "zacht" }, "Kies een nieuw wachtwoord met de herstelcode uit de mail (of van het team). Geen code? ",
        h("a", { href: "#/aanmelden", onclick: (e) => { e.preventDefault(); kies("vergeten"); } }, "Vraag een link aan"), "."),
      h("label", { class: "veld" }, "Herstelcode", code), h("label", { class: "veld" }, "Nieuw wachtwoord", ww), fout,
      h("div", {}, h("button", { class: "knop" }, "Wachtwoord instellen")));
    },
  };
  const plek = h("div");
  const tabs = h("div", { class: "tabs", role: "tablist" });
  const kies = (k, ...arg) => {
    fout.textContent = "";
    const tab = k === "vergeten" ? "herstel" : k;  // Wachtwoord vergeten valt onder de tab Herstelcode
    tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.k === tab)));
    plek.replaceChildren(vormen[k](...arg)); plek.querySelector("input")?.focus();
  };
  [["aanmelden", "Aanmelden"], ["uitnodiging", "Uitnodiging"], ["herstel", "Herstelcode"]].forEach(([k, l]) =>
    tabs.append(h("button", { type: "button", role: "tab", "data-k": k, onclick: () => kies(k) }, l)));
  $app.replaceChildren(h("div", { class: "welkom" },
    h("figure", { class: "welkom-kunst", style: { margin: 0, backgroundImage: "url(/kunst.jpg)" } },
      h("figcaption", {}, "Rafaël, De school van Athene, 1509-1511 (publiek domein)")),
    h("div", { class: "welkom-paneel" },
      h("img", { class: "logo", src: "/logo.svg", alt: "Axiomath" }),
      h("h1", {}, "Voor leerkrachten"),
      h("p", { class: "intro" }, "Vrije handboeken wiskunde voor de 2de en 3de graad secundair. Lees mee, markeer wat beter kan en zeg het ons: op de pagina, over een heel handboek of over het hele idee. ",
        h("a", { href: "#/over" }, "Waar we naartoe willen")),
      tabs, plek,
      h("p", { class: "zacht klein", style: { marginTop: "22px" } }, "Geen account? De handboeken kan iedereen lezen. ",
        h("a", { href: "#/", onclick: (e) => { e.preventDefault(); history.replaceState(null, "", "#/"); route(); } }, "Naar de handboeken"),
        " · ", h("a", { href: GITHUB, target: "_blank", rel: "noopener" }, "Alles op GitHub"),
        " · ", h("a", { href: "#/privacy" }, "Privacy")))));
  kies(location.hash.includes("herstel=") ? "herstel" : location.hash.includes("code=") ? "uitnodiging" : "aanmelden");
}

// --- kop ---------------------------------------------------------------------------------------
function kop(actief) {
  const thema = h("button", { class: "knop-icoon", type: "button", "aria-label": "Licht of donker", onclick: () => {
    const t = isDonker() ? "light" : "dark"; zetThema(t); opslag.zet("thema", t); thema.replaceChildren(icoon(isDonker() ? "zon" : "maan"));
  } }, icoon(isDonker() ? "zon" : "maan"));
  if (!S.ik) {
    return h("header", { class: "kop" },
      h("a", { class: "merk", href: "#/" }, h("img", { class: "logo", src: "/logo.svg", alt: "Axiomath" })),
      h("nav", { "aria-label": "Hoofdmenu" }, [["#/", "Handboeken", "boeken"], ["#/voortgang", "Voortgang", "voortgang"], ["#/plannen", "Plannen", "plannen"], ["#/over", "Over Axiomath", "over"]].map(([href, l, k]) =>
        h("a", { href, "aria-current": k === actief ? "page" : null }, l))),
      h("div", { class: "rechts" }, thema, h("a", { class: "knop klein", href: "#/aanmelden" }, "Aanmelden")));
  }
  const links = [["#/", "Handboeken", "boeken"], ["#/voortgang", "Voortgang", "voortgang"], ["#/mijn", "Mijn feedback", "mijn"], ["#/algemeen", "Algemene feedback", "algemeen"]];
  if (S.ik.rol === "beheerder") links.push(["#/beheer", "Beheer", "beheer"]);
  links.push(["#/plannen", "Plannen", "plannen"], ["#/over", "Over", "over"]);
  const menu = h("div", { class: "menu", hidden: true },
    h("div", { class: "kopje" }, h("b", {}, S.ik.naam), h("div", { class: "zacht klein" }, S.ik.email)),
    h("div", { class: "menu-nav", style: { display: "none" } }, links.map(([href, l]) => h("a", { href }, l))),
    h("a", { href: "#/profiel", onclick: () => { menu.hidden = true; } }, "Mijn lesopdracht"),
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

// --- koepels -----------------------------------------------------------------------------------
/* De koepel bepaalt welke handboeken een richting volgt en welke voorkant een PDF krijgt (maak.py, koepels.yaml).
   KOV: de voorkant in de PDF zelf. Een andere koepel: bij het downloaden zet de browser de voorkant van die koepel
   op de eerste pagina (pdf-lib). De keuze blijft bewaard per bezoeker. */
const koepelLijst = () => S.boeken?.koepels?.lijst || [{ id: "KOV", naam: "Katholiek onderwijs (KOV)" }];
function koepel() {
  const k = S.koepel || opslag.lees("koepel") || "KOV";
  return koepelLijst().some((x) => x.id === k) ? k : "KOV";
}
const koepelNaam = (k = koepel()) => koepelLijst().find((x) => x.id === k)?.naam || k;
const koepelKort = (k = koepel()) => k === "KOV" ? "KOV" : koepelNaam(k);
function zetKoepel(k) { S.koepel = k; opslag.zet("koepel", k); }
/* {richting: gegevens} van een koepel in een graad; gegevens: leerplan, pakket, uren, verplicht, keuze, uitbreiding, nieuw */
const koepelRichtingen = (g, k = koepel()) => S.boeken?.koepels?.graden?.[String(g)]?.[k] || {};
const omslagVan = (b, k = koepel()) => (k !== "KOV" && b.koepelomslag?.[k]?.beeld) || b.omslag;

function ovsgPov() {
  dialoog("Volgt je school OVSG of POV?", [
    h("p", {}, h("b", {}, "OVSG"), " (stedelijk en gemeentelijk onderwijs) heeft geen eigen leerplannen meer voor de 2de en 3de graad. Je school volgt de leerplannen van het GO!, van het katholiek onderwijs of van POV: dat beslist de gemeenteraad. Kies hierboven dus de koepel van de leerplannen die je school volgt."),
    h("p", {}, h("b", {}, "POV"), " (provinciaal onderwijs) heeft eigen leerplannen. Ze volgen de doelen van de overheid zonder veel extra's, en vallen dus grotendeels samen met de pakketten hier. Een eigen indeling en voorkant voor POV maken we zodra iemand erom vraagt."),
    h("p", { class: "zacht" }, "Volg je POV, of mis je iets? Laat het ons weten via ", S.ik ? h("a", { href: "#/algemeen" }, "algemene feedback") : h("a", { href: "#/aanmelden" }, "een account"), ".")],
    [h("button", { class: "knop", value: "x" }, "Begrepen")]);
}

/* Download een editie met de voorkant van de gekozen koepel: de browser haalt de PDF en de laag van die koepel op en legt
   ze over de eerste pagina. Kleine melding onderaan zolang het duurt. */
const PDFLIB = "/lib/pdf-lib-1.17.1/pdf-lib.min.js";  // zelf gehost (lib/README.md)
let pdflibBelofte = null;
function laadPdflib() {
  return pdflibBelofte ??= new Promise((ok, nee) => {
    const s = document.createElement("script");
    s.src = PDFLIB;
    s.onload = () => ok(window.PDFLib);
    s.onerror = () => { pdflibBelofte = null; s.remove(); nee(new Error("Het handboek kon niet samengesteld worden. Controleer je internetverbinding.")); };
    document.head.append(s);
  });
}
async function downloadMetVoorkant(b, editie, label, k = koepel()) {
  const voorkant = b.koepelomslag?.[k]?.pdf?.[editie];
  const ed = (b.edities || []).find((e) => e.editie === editie);
  if (!ed) return;
  if (!voorkant) { window.open(apiUrl(`pdf/${ed.hash}`), "_blank", "noopener"); return; }
  const pop = h("div", { class: "samenstellen", role: "status" }, h("span", { class: "draaier", "aria-hidden": "true" }),
    `Je handboek wordt samengesteld, met de voorkant voor ${koepelNaam(k)} …`);
  document.body.append(pop);
  try {
    const haal = async (url) => { const r = await fetch(url, { credentials: "same-origin" }); if (!r.ok) throw new Error("De PDF kon niet geladen worden."); return r.arrayBuffer(); };
    const [lib, basis, vk] = await Promise.all([laadPdflib(), haal(apiUrl(`pdf/${ed.hash}`)), haal(voorkant)]);
    // de laag (band, titel en gegevens van de koepel, zonder kunstwerk) komt over de eerste pagina
    const doc = await lib.PDFDocument.load(basis);
    const [laag] = await doc.embedPdf(vk, [0]);
    const p0 = doc.getPage(0);
    p0.drawPage(laag, { x: 0, y: 0, width: p0.getWidth(), height: p0.getHeight() });
    const url = URL.createObjectURL(new Blob([await doc.save()], { type: "application/pdf" }));
    const a = h("a", { href: url, download: `Axiomath ${b.titel} - ${label} (${koepelKort(k)}).pdf` });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  } catch (e) {
    melding(e.message || "Het handboek kon niet samengesteld worden.", true);
  } finally {
    pop.remove();
  }
}
/* De knop of link "PDF" van een editie: rechtstreeks bij KOV, samengesteld bij een andere koepel. */
function pdfKnop(b, e, attrs, ...inhoud) {
  if (koepel() === "KOV" || !b.koepelomslag?.[koepel()]?.pdf?.[e.editie])
    return h("a", { ...attrs, href: apiUrl(`pdf/${e.hash}`), target: "_blank", rel: "noopener" }, ...inhoud);
  return h("button", { ...attrs, type: "button", title: `Met de voorkant voor ${koepelNaam()}`, onclick: () => downloadMetVoorkant(b, e.editie, e.label) }, ...inhoud);
}

// --- lesopdracht -------------------------------------------------------------------------------
/* Koepel, finaliteiten, leerjaren en richtingen van een leerkracht (lib.php, profiel_*). Het team ziet zo welke delen
   al meelezers hebben (Beheer → Dekking). Geen schoolnamen. */
const JAREN = { 3: "3de jaar", 4: "4de jaar", 5: "5de jaar", 6: "6de jaar" };
const graadVanJaar = (j) => (j <= 4 ? 2 : 3);
/* Alle richtingen als Map "<graad>|<naam>" -> finaliteit, voor een koepel (KOV, GO) of alle koepels samen. */
function alleRichtingen(k) {
  const uit = new Map();
  const per = S.boeken?.koepels?.graden || {};
  for (const [g, koepels] of Object.entries(per)) {
    const bronnen = koepels[k] ? [koepels[k]] : Object.values(koepels);
    for (const lijst of bronnen) for (const [naam, x] of Object.entries(lijst)) {
      const sleutel = `${g}|${naam}`;
      if (!uit.has(sleutel)) uit.set(sleutel, x.finaliteit || finaliteit(S.boeken.pakketten.find((p) => p.id === x.pakket)));
    }
  }
  return uit;
}

function vraagProfiel() {
  const d = dialoog("Waar geef je les?", [
    h("p", {}, "Vertel ons in een halve minuut voor welke koepel, finaliteit, jaren en richtingen je lesgeeft. Zo zien we welke handboeken al nagelezen worden door wie ermee lesgeeft, en waar we nog collega's zoeken."),
    h("p", { class: "zacht klein" }, "We vragen geen schoolnaam. Je kan het later altijd aanpassen via je account, bij Mijn lesopdracht.")], [
    h("button", { class: "knop", type: "button", onclick: () => { d.close(); location.hash = "#/profiel"; } }, "Nu invullen"),
    h("button", { class: "knop licht", type: "button", onclick: () => { d.close(); S.ik.profiel = "uitgesteld"; api("POST", "profiel/later").catch(() => {}); } }, "Later")]);
}

async function toonProfiel(q) {
  const [p] = await Promise.all([api("GET", "profiel"), boeken()]);
  const nieuw = q.get("nieuw") === "1";
  let k = p.koepel, fins = new Set(p.finaliteiten), jaren = new Set(p.jaren), gekozen = new Set(p.richtingen), zoek = "";
  const fout = h("p", { class: "fout-tekst", role: "alert" });
  const chip = (label, actief, opKlik) => h("button", { type: "button", class: "chip zonder-stip", "aria-pressed": String(actief), onclick: opKlik }, label);
  const wissel = (set, x) => { set.has(x) ? set.delete(x) : set.add(x); teken(); };
  const koepelRij = h("div", { class: "chips", role: "group", "aria-label": "Koepel" });
  const jaarRij = h("div", { class: "chips", role: "group", "aria-label": "Leerjaren" });
  const finRij = h("div", { class: "chips", role: "group", "aria-label": "Finaliteit" });
  const lijst = h("div", { class: "richting-lijst" });
  const opm = h("textarea", { maxlength: 500, rows: 3, placeholder: "Bv. een richting die er niet bij staat, of een optie als Wiskunde in de praktijk." });
  opm.value = p.opmerking || "";
  const zichtbaar = () => {
    const graden = new Set([...jaren].map(graadVanJaar));
    return [...alleRichtingen(k)].filter(([s, f]) => graden.has(Number(s.split("|")[0])) && fins.has(f));
  };
  function teken() {
    koepelRij.replaceChildren(...Object.entries(p.koepels).map(([id, naam]) => chip(naam, k === id, () => { k = id; teken(); })));
    jaarRij.replaceChildren(...Object.entries(JAREN).map(([j, l]) => chip(l, jaren.has(Number(j)), () => wissel(jaren, Number(j)))));
    finRij.replaceChildren(...Object.entries(FINALITEITEN).map(([f, l]) => chip(l[0].toUpperCase() + l.slice(1), fins.has(f), () => wissel(fins, f))));
    const rs = zichtbaar();
    if (!k || !jaren.size || !fins.size) {
      lijst.replaceChildren(h("p", { class: "zacht" }, "Kies eerst je koepel, je leerjaren en je finaliteit: dan verschijnen hier de richtingen."));
      return;
    }
    const groepen = new Map();
    for (const [s, f] of rs) {
      const g = s.split("|")[0], kop = graadFin({ graad: g, finaliteit: f });
      if (!groepen.has(kop)) groepen.set(kop, []);
      groepen.get(kop).push(s);
    }
    const past = (s) => !zoek || s.split("|")[1].toLowerCase().includes(zoek.toLowerCase());
    lijst.replaceChildren(...[...groepen].sort(([a], [b]) => a.localeCompare(b, "nl")).map(([kop, ss]) => {
      const tonen = ss.filter(past).sort((a, b) => a.localeCompare(b, "nl"));
      return tonen.length ? h("fieldset", { class: "richting-groep" }, h("legend", {}, kop[0].toUpperCase() + kop.slice(1)),
        tonen.map((s) => h("label", { class: "vinkje" }, h("input", { type: "checkbox", checked: gekozen.has(s), onchange: (e) => { e.target.checked ? gekozen.add(s) : gekozen.delete(s); } }), s.split("|")[1]))) : null;
    }).filter(Boolean));
    if (!lijst.childElementCount) lijst.append(h("p", { class: "zacht" }, zoek ? "Geen richting gevonden." : "Geen richtingen voor deze keuze."));
  }
  const bewaar = poging(async () => {
    fout.textContent = "";
    const zicht = new Set(zichtbaar().map(([s]) => s));
    try {
      await api("POST", "profiel", { koepel: k, finaliteiten: [...fins], jaren: [...jaren], richtingen: [...gekozen].filter((s) => zicht.has(s)), opmerking: opm.value });
    } catch (x) { fout.textContent = x.message; return; }
    S.ik.profiel = "ingevuld";
    melding("Bedankt! Je lesopdracht is bewaard.");
    location.hash = "#/";
  });
  scherm("", h("div", { class: "paginakop" }, h("div", {}, h("h1", {}, nieuw ? "Welkom! Waar geef je les?" : "Mijn lesopdracht"),
      h("p", {}, "Voor welke koepel, finaliteit, leerjaren en richtingen geef je les? Zo zien we welke handboeken al nagelezen worden door wie ermee lesgeeft, en waar we nog collega's zoeken. We vragen geen schoolnaam, en collega's zien dit niet."))),
    h("div", { class: "formulier kaart profiel" },
      h("div", { class: "veld" }, h("p", { class: "veld-kop" }, "Leerplannen van je school"), koepelRij,
        h("button", { type: "button", class: "knop-tekst klein", onclick: ovsgPov }, "OVSG of POV?")),
      h("div", { class: "veld" }, h("p", { class: "veld-kop" }, "Leerjaren waarin je wiskunde geeft"), jaarRij),
      h("div", { class: "veld" }, h("p", { class: "veld-kop" }, "Finaliteit"), finRij),
      h("div", { class: "veld" }, h("p", { class: "veld-kop" }, "Richtingen"),
        h("input", { type: "search", placeholder: "Zoek een richting", "aria-label": "Zoek een richting", oninput: (e) => { zoek = e.target.value; teken(); } }), lijst),
      h("label", { class: "veld" }, "Nog iets? (niet verplicht)", opm),
      fout,
      h("div", { class: "knoppen" }, h("button", { class: "knop", type: "button", onclick: bewaar }, "Bewaar"),
        nieuw ? h("a", { class: "knop licht", href: "#/", onclick: () => api("POST", "profiel/later").catch(() => {}) }, "Later") : h("a", { class: "knop licht", href: "#/" }, "Annuleer"))));
  teken();
}

// --- boekenkast --------------------------------------------------------------------------------
async function toonKast() {
  const d = await boeken(true);
  // De keuze: een koepel, een graad ("alle", "2", "3"), een pakket (id of "alle") of een studierichting ("<graad>|<naam>").
  // Ze blijft bewaard voor de volgende keer (per bezoeker, in de browser).
  const kortNaam = (p) => p.naam.match(/\(([^)]+)\)/)?.[1] || p.naam;
  const metKoepels = !!d.koepels;
  const richtingenVan = () => {  // "<graad>|<naam>" -> gegevens (met koepels) of pakketten (zonder)
    const r = new Map();
    if (metKoepels) for (const g of graden()) for (const [naam, x] of Object.entries(koepelRichtingen(g))) r.set(`${g}|${naam}`, x);
    else for (const p of d.pakketten) for (const naam of p.richtingenlijst || p.richtingen.split(", ")) r.set(`${p.graad}|${naam}`, { pakket: p.id });
    return r;
  };
  let richtingen = richtingenVan();
  let keuze = { graad: "alle", fin: "alle", pakket: "alle", richting: "" };
  try { keuze = { ...keuze, ...JSON.parse(opslag.lees("kast") || "{}") }; } catch { /* oude of lege keuze */ }
  if (!meerGraden()) keuze.graad = "alle";
  if (keuze.richting && !richtingen.has(keuze.richting)) keuze.richting = "";
  if (keuze.pakket !== "alle" && !d.pakketten.some((p) => p.id === keuze.pakket)) keuze.pakket = "alle";
  if (keuze.fin !== "alle" && !finaliteitenVan(keuze.graad).includes(keuze.fin)) keuze.fin = "alle";
  let zoek = "";
  const kies = (nieuw) => { keuze = { ...keuze, ...nieuw }; opslag.zet("kast", JSON.stringify(keuze)); tekenKeuzes(); teken(); };
  const zichtbaar = (p) => (keuze.graad === "alle" || String(p.graad) === keuze.graad) && (keuze.fin === "alle" || finaliteit(p) === keuze.fin)
    && (keuze.pakket === "alle" || p.id === keuze.pakket);
  const past = (b) => !zoek || `${b.titel} ${b.rubriek}`.toLowerCase().includes(zoek.toLowerCase());
  // de richtingen van een pakket volgens de gekozen koepel (KOV: zoals op de voorkant)
  const pakketRichtingen = (p) => koepel() === "KOV" || !metKoepels ? `${p.richtingen} · ${p.uren}`
    : Object.entries(koepelRichtingen(p.graad)).filter(([, x]) => x.pakket === p.id).map(([n]) => n).join(", ") || `Bij ${koepelNaam()} volgt geen richting dit pakket als geheel.`;

  const kasten = h("div");
  const teken = () => {
    if (keuze.richting) return tekenRichting();
    let vorige = null;  // een kop per graad en finaliteit
    kasten.replaceChildren(...d.pakketten.filter(zichtbaar).flatMap((p) => {
      const lijst = d.boeken.filter((b) => b.pakketid === p.id && past(b)).sort((a, b2) => (a.rubriek === "Extra") - (b2.rubriek === "Extra"));  // Extra achteraan
      if (!lijst.length) return [];
      const alle = d.boeken.filter((b) => b.pakketid === p.id);
      const groep = graadFin(p);
      const kop = groep !== vorige ? h("h2", { class: "graad-kop" }, groep[0].toUpperCase() + groep.slice(1)) : null;
      vorige = groep;
      const pct = alle.reduce((s, b) => s + (d.voortgang[b.status]?.percentage || 0), 0) / alle.length;
      return [kop, h("section", { class: "pakket" },
        h("div", { class: "pakket-kop" }, h("h2", {}, h("span", { class: "nr" }, p.nr), " ", p.naam)),
        h("p", { class: "pakket-sub" }, pakketRichtingen(p)),
        p.op_aanvraag ? interesse() : null,
        h("a", { class: "voortgang", href: "#/voortgang", title: `${Math.round(pct)} % klaar: bekijk de voortgang` }, h("i", { style: { width: pct + "%" } })),
        h("div", { class: "kast" }, lijst.flatMap((b, i) => [  // een lijntje vóór de eerste van Extra
          b.rubriek === "Extra" && i && lijst[i - 1].rubriek !== "Extra" ? h("hr", { class: "kast-scheiding", "aria-hidden": "true" }) : null,
          boekKaart(b)]).filter(Boolean)))].filter(Boolean);
    }));
    if (!kasten.querySelector(".pakket")) kasten.append(h("p", { class: "leeg" }, "Geen handboek gevonden."));
  };

  /* Eén richting: eerst de verplichte handboeken, per voorgesteld jaar; daarna de keuzes en de uitbreidingen. */
  const tekenRichting = () => {
    const [g, naam] = keuze.richting.split("|");
    const x = richtingen.get(keuze.richting);
    const boek = (s) => d.boeken.find((b) => b.sleutel === s);
    const kaart = (i) => { const b = boek(i.sleutel); return b && past(b) ? boekKaart(b, i.noot) : null; };
    const verplicht = (x.verplicht || []).filter((i) => i.sleutel && boek(i.sleutel));
    const jaren = [...new Set(verplicht.map((i) => boek(i.sleutel).jaar_voorstel || ""))].sort((a, b) => (a || "z").localeCompare(b || "z"));
    const lijstje = (items) => items.filter((i) => !i.sleutel || !boek(i.sleutel)).map((i) => h("li", {}, i.tekst || i.sleutel, i.noot ? ` (${i.noot})` : ""));
    const blok = (titel, uitleg, items) => {
      if (!items?.length) return null;
      const kaarten = items.filter((i) => i.sleutel && boek(i.sleutel)).map(kaart).filter(Boolean);
      const los = lijstje(items);
      return h("section", { class: "pakket" }, h("div", { class: "pakket-kop" }, h("h2", {}, titel)), h("p", { class: "pakket-sub" }, uitleg),
        kaarten.length ? h("div", { class: "kast" }, kaarten) : null, los.length ? h("ul", { class: "los" }, los) : null);
    };
    const eerst = (x.verplicht || []).map((i) => i.sleutel ? boek(i.sleutel) : null).find(Boolean);
    const pakket = d.pakketten.find((p) => p.id === x.pakket);
    kasten.replaceChildren(
      h("section", { class: "pakket" },
        h("div", { class: "pakket-kop" }, h("h2", {}, "Verplichte handboeken")),
        h("p", { class: "pakket-sub" }, `${naam}, ${graadFin({ graad: g, finaliteit: x.finaliteit || finaliteit(pakket) })} · ${koepelNaam()}`,
          x.leerplan ? ` · leerplan: ${x.leerplan}` : "", x.uren ? ` · ${x.uren}` : ""),
        x.opmerking ? h("p", { class: "zacht klein" }, x.opmerking) : null,
        pakket?.op_aanvraag ? interesse() : null,
        jaren.length ? jaren.map((j) => {
          const kaarten = verplicht.filter((i) => (boek(i.sleutel).jaar_voorstel || "") === j).map(kaart).filter(Boolean);
          return kaarten.length ? [h("h3", { class: "jaar-kop" }, j ? `Voorstel: ${j}` : "Zonder voorstel van leerjaar"), h("div", { class: "kast" }, kaarten)] : null;
        }) : h("p", { class: "leeg" }, x.opmerking ? "" : "Voor deze richting is er geen indeling."),
        jaren.length > 1 ? h("p", { class: "zacht klein" }, "Het leerjaar is een voorstel: de leerplannen zijn graadleerplannen, en je school kiest zelf in welk jaar ze wat ziet.") : null,
        x.nieuw?.length ? h("p", { class: "zacht klein" }, "Nog te maken: ", x.nieuw.join(", "), ".") : null,
        lijstje((x.verplicht || [])).length ? h("ul", { class: "los" }, lijstje(x.verplicht)) : null),
      ...[blok("Keuze", "Keuzedoelen of een optiepakket: je school beslist of ze aan bod komen.", x.keuze),
        blok("Uitbreiding", "Verder dan het leerplan, voor wie meer lesuren heeft of meer wil.", x.uitbreiding),
        blok("Extra", "Geen verplichte leerstof: handboeken met uitbreidende leerstof (bv. KOV Complementair, voor wie meer lesuren heeft) en oefenbundels met de rekenvaardigheden van het jaar.", x.extra)].filter(Boolean));  // replaceChildren maakt van null de tekst "null"
    if (!eerst && !x.opmerking) kasten.append(h("p", { class: "leeg" }, "Geen handboek gevonden."));
  };

  // rij 1: koepel; rij 2: graad, studierichting en zoeken; rij 3: de finaliteit en de pakketten van de gekozen graad
  const chip = (label, actief, opKlik) => h("button", { type: "button", class: "chip zonder-stip", "aria-pressed": String(actief), onclick: opKlik }, label);
  const koepelKeuze = h("div", { class: "chips koepel-rij" });
  const graadKeuze = h("div", { class: "chips" });
  const finKeuze = h("div", { class: "chips fin-rij" });
  const richtingKeuze = h("select", { class: "richting-keuze", "aria-label": "Kies je studierichting", onchange: (e) => kies(e.target.value
    ? { richting: e.target.value, graad: e.target.value.split("|")[0], pakket: "alle" } : { richting: "" }) });
  const pakketRij = h("div", { class: "chips pakket-rij" });
  const uitleg = h("p", { class: "keuze-uitleg" });
  const tekenKeuzes = () => {
    koepelKeuze.hidden = !metKoepels;
    koepelKeuze.replaceChildren(h("span", { class: "zacht klein" }, "Leerplannen van"),
      ...koepelLijst().map((k) => chip(k.naam, koepel() === k.id, () => { zetKoepel(k.id); richtingen = richtingenVan(); if (!richtingen.has(keuze.richting)) keuze.richting = ""; kies({}); })),
      h("button", { type: "button", class: "knop-tekst klein", onclick: ovsgPov }, "OVSG of POV?"));
    graadKeuze.replaceChildren(...(meerGraden()
      ? [chip("Alle graden", keuze.graad === "alle" && !keuze.richting, () => kies({ graad: "alle", pakket: "alle", richting: "" })),
         ...graden().map((g) => chip(`${g}de graad`, keuze.graad === String(g) && !keuze.richting, () => kies({ graad: String(g), pakket: "alle", richting: "" })))]
      : []));
    const fins = finaliteitenVan(keuze.graad);
    if (keuze.fin !== "alle" && !fins.includes(keuze.fin)) keuze.fin = "alle";
    finKeuze.hidden = keuze.richting !== "" || fins.length < 2;
    finKeuze.replaceChildren(chip("Alle finaliteiten", keuze.fin === "alle", () => kies({ fin: "alle", pakket: "alle", richting: "" })),
      ...fins.map((f) => chip(FINALITEITEN[f][0].toUpperCase() + FINALITEITEN[f].slice(1), keuze.fin === f, () => kies({ fin: f, pakket: "alle", richting: "" }))));
    // de richtingen per graad en finaliteit (een richting hoort bij één finaliteit: die van haar gegevens of haar pakket)
    const finVan = (k) => { const x = richtingen.get(k); return x?.finaliteit || finaliteit(d.pakketten.find((p) => p.id === x?.pakket)); };
    richtingKeuze.replaceChildren(h("option", { value: "" }, "Kies je studierichting"),
      ...graden().flatMap((g) => finaliteitenVan(g).map((f) => h("optgroup", { label: graadFin({ graad: g, finaliteit: f }) },
        [...richtingen.keys()].filter((k) => k.startsWith(`${g}|`) && finVan(k) === f).sort((a, b) => a.localeCompare(b, "nl"))
          .map((k) => h("option", { value: k, selected: k === keuze.richting }, k.split("|")[1]))))));
    const pakketten = d.pakketten.filter((p) => (!meerGraden() || String(p.graad) === keuze.graad) && (keuze.fin === "alle" || finaliteit(p) === keuze.fin));
    pakketRij.hidden = keuze.richting !== "" || !pakketten.length || (meerGraden() && keuze.graad === "alle");
    pakketRij.replaceChildren(chip("Alle pakketten", keuze.pakket === "alle", () => kies({ pakket: "alle", richting: "" })),
      ...pakketten.map((p) => chip(`${p.nr} · ${p.kort || kortNaam(p)}`, keuze.pakket === p.id && !keuze.richting, () => kies({ pakket: p.id, richting: "" }))));
    uitleg.hidden = !keuze.richting;
    uitleg.replaceChildren(...(keuze.richting ? [`Dit zijn de handboeken voor ${keuze.richting.split("|")[1]} volgens de leerplannen van ${koepelNaam()}${/[.!?]$/.test(koepelNaam()) ? "" : "."} `,
      h("button", { type: "button", class: "knop-tekst", onclick: () => kies({ richting: "" }) }, "Toon weer alles")] : []));
  };

  const metPdf = d.boeken.filter((b) => b.edities.length).length;
  scherm("boeken",
    h("div", { class: "paginakop" }, S.ik
      ? h("div", {}, h("h1", {}, `Dag ${S.ik.naam.split(" ")[0]}`),
        h("p", {}, `${metPdf} van de ${d.boeken.length} handboeken staan klaar om te lezen. Open er een, markeer een stuk van een pagina en zeg wat beter kan. Je collega's zien je opmerking ook: steun ze als je het eens bent.`))
      : h("div", {}, h("h1", {}, "Handboeken"),
        h("p", {}, `Vrije handboeken wiskunde voor de ${graadTekst()}: doorstroom en dubbele finaliteit, en op aanvraag de arbeidsmarktfinaliteit. Opgesteld vanuit de leerplandoelen. ${metPdf} van de ${d.boeken.length} handboeken staan klaar om te lezen. Kies de koepel en de richting: dan zie je welke handboeken je nodig hebt. Ben je leerkracht? `,
          h("a", { href: "#/aanmelden" }, "Meld je aan"), " voor de leerkrachtenversie, de oplossingen en om feedback te geven. ",
          h("a", { href: "#/over" }, "Waar we naartoe willen"), "."))),
    appTip(),
    h("div", { class: "keuze" },
      koepelKeuze,
      h("div", { class: "balk" }, graadKeuze, richtingKeuze,
        h("input", { type: "search", placeholder: "Zoek een handboek", "aria-label": "Zoek een handboek", oninput: (e) => { zoek = e.target.value; teken(); } })),
      finKeuze, pakketRij, uitleg),
    kasten);
  tekenKeuzes();
  teken();
}

function boekKaart(b, noot) {
  const open = b.feedback?.open || 0;
  const src = omslagVan(b);
  const omslag = src
    ? h("div", { class: "omslag" }, h("img", { src, alt: "", loading: "lazy" }),
      b.edities.length ? null : h("span", { class: "geen-pdf" }, "Nog geen PDF"))
    : h("div", { class: "omslag geen" }, h("b", {}, b.titel), h("span", {}, "Nog geen PDF"));
  return h("a", { class: `boek ${rubriekKlasse(b)}`, href: `#/boek/${sleutelUrl(b.sleutel)}` }, omslag,
    h("div", {}, b.rubriek && h("div", { class: "rubriek" }, b.rubriek), h("div", { class: "titel" }, b.titel.replace(/(graads)(?=[a-z])/, "$1\u00AD"))),  // zacht afbreekteken: Eerstegraads-vergelijkingen
    noot ? h("div", { class: "noot" }, noot) : null,
    // het aantal open opmerkingen staat onder de titel, niet op de voorkant: rechtsboven op de voorkant staat het kenmerk van het pakket
    h("div", { class: "meta" }, statusPil(b.status),
      open ? h("span", { class: "fb-tel", title: `${open} open ${open === 1 ? "opmerking" : "opmerkingen"}` }, icoon("ballon"), open) : null,
      b.jaar_voorstel && h("span", { title: "Voorstel: je school kiest het leerjaar" }, b.jaar_voorstel),
      b.feedback?.mijn ? h("span", {}, `${b.feedback.mijn} van jou`) : null));
}

/* Welke richtingen van de gekozen koepel dit handboek gebruiken: verplicht, als keuze of als uitbreiding. */
function richtingenVoorBoek(b) {
  const uit = { verplicht: [], keuze: [], uitbreiding: [], extra: [], uren: new Set() };
  for (const [naam, x] of Object.entries(koepelRichtingen(b.graad))) {
    for (const soort of ["verplicht", "keuze", "uitbreiding", "extra"]) {
      if ((x[soort] || []).some((i) => i.sleutel === b.sleutel)) { uit[soort].push(naam); if (soort === "verplicht" && x.uren) uit.uren.add(x.uren); }
    }
  }
  return uit;
}

// --- voortgang ---------------------------------------------------------------------------------
const statusNaam = (s) => s.replace("-", " ");
const statusPil = (s) => h("span", { class: `pil stip vg-${s}` }, statusNaam(s));

function voortgangBalk(pct, groot) {
  return h("div", { class: `vg-balk${groot ? " groot" : ""}`, role: "img", "aria-label": `${Math.round(pct)} %` },
    h("div", { class: "voortgang" }, h("i", { style: { width: pct + "%" } })), h("b", {}, `${Math.round(pct)} %`));
}

async function toonVoortgang() {
  const d = await boeken();
  const pct = (lijst) => lijst.length ? lijst.reduce((s, b) => s + (d.voortgang[b.status]?.percentage || 0), 0) / lijst.length : 0;
  const statussen = Object.keys(d.voortgang);
  const tel = (s) => d.boeken.filter((b) => b.status === s).length;
  scherm("voortgang",
    h("div", { class: "paginakop" }, h("div", {}, h("h1", {}, "Voortgang"),
      h("p", {}, "Elk handboek gaat door dezelfde stadia: een eerste, tweede en derde versie die we zelf herwerken, daarna lezen leerkrachten het na, en pas na een jaar in de klas is het klaar. Het percentage van een pakket is het gemiddelde van zijn handboeken."))),
    h("section", { class: "kaart vg-totaal" },
      h("h2", {}, "Alle handboeken"),
      voortgangBalk(pct(d.boeken), true),
      h("p", { class: "zacht" }, `${d.boeken.length} handboeken: `,
        statussen.filter(tel).map((s, i) => [i ? ", " : "", `${tel(s)} ${statusNaam(s)}`]), "."),
      h("dl", { class: "vg-stadia" }, statussen.map((s) => [
        h("dt", {}, statusPil(s), h("span", { class: "zacht" }, ` ${d.voortgang[s].percentage} %`)),
        h("dd", {}, d.voortgang[s].uitleg)]))),
    d.pakketten.map((p, i) => {
      const lijst = d.boeken.filter((b) => b.pakketid === p.id);
      // een kop per graad en finaliteit, met de voortgang van die groep
      const nieuweGroep = i === 0 || graadFin(d.pakketten[i - 1]) !== graadFin(p);
      const vanGroep = d.boeken.filter((b) => b.graad === p.graad && finaliteit(b) === finaliteit(p));
      const groep = graadFin(p);
      return [nieuweGroep && h("div", { class: "graad-kop" }, h("h2", {}, groep[0].toUpperCase() + groep.slice(1)), voortgangBalk(pct(vanGroep))), h("section", { class: "pakket" },
        h("div", { class: "pakket-kop" }, h("h2", {}, h("span", { class: "nr" }, p.nr), " ", p.naam)),
        h("p", { class: "pakket-sub" }, p.richtingen),
        voortgangBalk(pct(lijst)),
        h("table", { class: "vg-tabel" },
          h("thead", {}, h("tr", {}, h("th", {}, "Handboek"), h("th", {}, "Rubriek"), h("th", {}, "Status"), h("th", {}, "Voortgang"))),
          h("tbody", {}, lijst.map((b) => h("tr", {},
            h("td", {}, h("a", { href: `#/boek/${sleutelUrl(b.sleutel)}` }, b.titel)),
            h("td", { class: "zacht" }, b.rubriek || "–"),
            h("td", {}, statusPil(b.status)),
            h("td", {}, voortgangBalk(d.voortgang[b.status]?.percentage || 0)))))))];
    }));
}

// --- één handboek -------------------------------------------------------------------------------
async function toonBoek(sleutel) {
  const d = await boeken();
  const b = d.boeken.find((x) => x.sleutel === sleutel);
  if (!b) return scherm("boeken", h("p", { class: "leeg" }, "Dit handboek bestaat niet."));
  const p = pakketVan(d, b);
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
      // de voorkant opent altijd de editie 'handboek' in de lezer (zolang die er is)
      b.omslag ? (() => { const e = b.edities.find((x) => x.editie === "handboek");
        const img = h("img", { src: b.omslag, alt: `Voorkant van ${b.titel}` });
        return e ? h("a", { class: "omslag", href: `#/lees/${e.hash}`, title: "Lees het handboek" }, img) : h("div", { class: "omslag" }, img); })() : h("div", { class: "boek" }, h("div", { class: "omslag geen" }, h("b", {}, b.titel), h("span", {}, "Nog geen PDF"))),
      h("div", {},
        b.rubriek && h("div", { class: "boek" }, h("span", { class: `rubriek` }, b.rubriek)),
        h("h1", {}, b.titel),
        h("dl", { class: "gegevens" },
          h("dt", {}, "Graad"), h("dd", {}, `${p.graad}de graad ${FINALITEIT_VOLUIT[finaliteit(p)]}`),
          h("dt", {}, "Pakket"), h("dd", {}, `${p.nr} · ${p.naam}`),
          ...(() => {
            if (!S.boeken.koepels) return [h("dt", {}, "Richtingen"), h("dd", {}, p.richtingen), h("dt", {}, "Uren"), h("dd", {}, p.uren.replaceAll("\\&", "&"))];
            const r = richtingenVoorBoek(b);
            const lijst = (xs) => xs.length ? xs.join(", ") : "geen";
            return [h("dt", {}, "Koepel"), h("dd", {}, koepelNaam(), " · ", h("a", { href: "#/" }, "kies een andere")),
              h("dt", {}, "Richtingen"), h("dd", {}, lijst(r.verplicht.length ? r.verplicht : r.extra)),
              r.extra.length && !r.verplicht.length ? [h("dt", {}, "Soort"), h("dd", {}, b.sleutel.includes("Kernvaardigheden") ? "Extra: een oefenbundel bij het pakket, geen verplichte leerstof" : "Extra: uitbreidende leerstof bij het pakket, geen verplichte leerstof")] : null,
              r.keuze.length ? [h("dt", {}, "Als keuze"), h("dd", {}, lijst(r.keuze))] : null,
              r.uitbreiding.length ? [h("dt", {}, "Als uitbreiding"), h("dd", {}, lijst(r.uitbreiding))] : null,
              r.uren.size ? [h("dt", {}, "Uren"), h("dd", {}, [...r.uren].join("; "))] : null];
          })(),
          (b.jaar_voorstel || b.jaar) && [h("dt", {}, "Leerjaar"), h("dd", {}, `voorstel: ${b.jaar_voorstel || b.jaar}`, h("span", { class: "zacht" }, " · je school kiest"))],
          h("dt", {}, "Status"), h("dd", {}, h("a", { href: "#/voortgang" }, statusNaam(b.status)), d.voortgang[b.status] ? h("span", { class: "zacht" }, ` · ${d.voortgang[b.status].uitleg}`) : "")),
        p.op_aanvraag ? interesse() : null,
        b.edities.length ? h("div", { class: "edities" }, b.edities.map((e) => h("div", { class: "editie" },
          h("b", {}, e.label), h("span", { class: "zacht" }, `${e.paginas} p. · ${datum(e.gebouwd)}`),
          pdfKnop(b, e, { class: "knop licht klein", "aria-label": `${e.label} als PDF` }, icoon("download"), "PDF"),
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
  api("POST", "bezoek/lees", { versie: hash }).catch(() => {});  // bezoekersteller, zie lib.php
  document.body.classList.add("lezend");

  let zoom = parseFloat(opslag.lees("zoom")) || 1;     // 1 = paginabreedte past in het venster (max. 900 px)
  let markeren = !gast && matchMedia("(pointer: fine)").matches && opslag.lees("markeren") !== "0";
  let filter = "alle", nieuw = null, actief = null, huidige = 1;
  const paneelOpen = () => !lezer.classList.contains("zonder-paneel");

  const verwerkt = v.verwerkt || [];
  let toonVerwerkt = opslag.lees("verwerkt") !== "0";
  const verwerktKnop = verwerkt.length ? h("button", { class: "knop-icoon verwerkt-knop", type: "button", "aria-pressed": String(toonVerwerkt),
    title: `Wat uit de feedback verwerkt is (${verwerkt.length})`, onclick: () => {
      toonVerwerkt = !toonVerwerkt; opslag.zet("verwerkt", toonVerwerkt ? "1" : "0"); schaal(true);
      verwerktKnop.setAttribute("aria-pressed", String(toonVerwerkt)); tekenVerwerkt();
    } }, icoon("vink")) : null;
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
    verwerktKnop,
    (() => { const b = d.boeken.find((x) => x.sleutel === v.sleutel); const e = b?.edities.find((x) => x.hash === hash);
      return b && e ? pdfKnop(b, e, { class: "knop-icoon verberg-smal", "aria-label": "Download de PDF" }, icoon("download"))
        : h("a", { class: "knop-icoon verberg-smal", href: apiUrl(`pdf/${hash}`), target: "_blank", rel: "noopener", "aria-label": "Download de PDF" }, icoon("download")); })(),
    paneelKnop);

  // bladen
  const bladen = h("div", { class: "bladen" });
  const vel = h("div", { class: "vel" + (markeren ? " markeren" : "") });
  if (v.jongste && v.jongste !== hash) {
    vel.append(h("div", { class: "oud-bericht" }, h("span", {}, "Je bekijkt een oudere versie van dit boek. Open opmerkingen verhuizen mee naar de nieuwste versie; verwerkte en afgekeurde blijven hier."),
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
    // met kaders Verwerkt en een breed venster: de pagina iets smaller, zodat de kaders ernaast passen
    const max = toonVerwerkt && verwerkt.length && beschikbaar - 540 >= 680 ? Math.min(900, beschikbaar - 540) : 900;
    breedte = Math.round(Math.min(beschikbaar, max) * zoom);
    blad.forEach((el) => { el.style.width = breedte + "px"; el.style.height = Math.round(breedte * el._ratio) + "px"; });
    inBeeld.forEach((el) => laad(el));
    vel.classList.toggle("ruim", (vel.clientWidth - breedte) / 2 > 250);  // plaats voor de kaders Verwerkt naast de pagina
    if (verwerkt.length) tekenVerwerkt();
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
      const m = h("div", { class: `markering s-${f.soort}${f.van_mij ? "" : " ander"}${f.benaderd ? " benaderd" : ""}${actief === f.id ? " actief" : ""}`, "data-id": f.id, title: S.menu.soorten[f.soort] || "",
        style: punt ? { left: `calc(${x0 * 100}% - 10px)`, top: `calc(${y0 * 100}% - 10px)`, width: "20px", height: "20px", borderRadius: "50%" }
          : { left: x0 * 100 + "%", top: y0 * 100 + "%", width: (x1 - x0) * 100 + "%", height: (y1 - y0) * 100 + "%" },
        onclick: (e) => { e.stopPropagation(); kies(f.id, "kaart"); } }, h("span", { class: "speld" }, f.id));
      blad[f.pagina - 1]?.append(m);
    }
  }
  const zichtbaar = () => alle.filter((f) => f.rect && (filter === "alle" || f.van_mij));

  /* Wat uit de feedback verwerkt is (verwerkt.yaml van de cursus, via maak.py): een stippellijn van de plek naar
     rechts, met een kader "Verwerkt: ...". Is er naast de pagina plaats, dan staat het kader ernaast, anders op de
     rechterrand. Kaders op dezelfde pagina schuiven onder elkaar als ze elkaar zouden raken. */
  function tekenVerwerkt() {
    vel.querySelectorAll(".verwerkt-plek, .verwerkt-lijn, .verwerkt-kader").forEach((x) => x.remove());
    if (!toonVerwerkt) return;
    const perPagina = new Map();
    for (const w of verwerkt) {
      const el = blad[w.pagina - 1];
      if (!el) continue;
      const [x0, y0, x1, y1] = w.rect, midden = (y0 + y1) / 2;
      el.append(h("div", { class: "verwerkt-plek", style: { left: x0 * 100 + "%", top: y0 * 100 + "%", width: (x1 - x0) * 100 + "%", height: (y1 - y0) * 100 + "%" } }),
        h("div", { class: "verwerkt-lijn", style: { left: Math.max(x1, 0.885) * 100 + "%", top: midden * 100 + "%" } }));  // pas in de rechtermarge: niet door de tekst
      // zonder plaats naast de pagina: alleen het label "Verwerkt", de tekst bij aanwijzen of tikken (CSS)
      const kader = h("div", { class: "verwerkt-kader", role: "note", tabindex: "0", onclick: () => kader.classList.toggle("open") },
        h("b", {}, "Verwerkt"), h("span", { class: "inhoud" }, ": ", w.tekst,
          w.datum ? h("span", { class: "wanneer" }, ` · ${new Date(w.datum).toLocaleDateString("nl-BE", { day: "numeric", month: "short", year: "numeric" })}`) : null));
      kader._midden = midden;
      el.append(kader);
      (perPagina.get(el) || perPagina.set(el, []).get(el)).push(kader);
    }
    requestAnimationFrame(() => perPagina.forEach((kaders, el) => {
      let onder = -Infinity;
      for (const k of kaders.sort((a, b2) => a._midden - b2._midden)) {
        const hoogte = k.offsetHeight, top = Math.max(k._midden * el.offsetHeight - hoogte / 2, onder + 6, 0);
        k.style.top = top + "px";
        onder = top + hoogte;
      }
    }));
  }

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
/* Visueel: een grafiek die zichzelf tekent (met een raaklijn die over de kromme glijdt), cijfers die optellen, de
   oefeningenbank als bron van alles, en grafiekjes uit de lijst met handboeken: per pakket, per rubriek en de voortgang.
   Wat met .onthul gemerkt is, verschijnt bij het scrollen (.in). Met prefers-reduced-motion staat alles meteen op zijn plaats. */
const svg = (tag, attrs, ...kinderen) => {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs || {})) if (v != null) el.setAttribute(k, v);
  for (const k of kinderen.flat(Infinity)) if (k != null && k !== false) el.append(k instanceof Node ? k : document.createTextNode(String(k)));
  return el;
};
const rustig = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

function heldGrafiek() {
  const kromme = "M24 168 C 70 168, 92 52, 146 58 S 222 150, 262 120 S 300 44, 316 34";
  const raak = svg("g", { class: "raak" }, svg("line", { x1: -44, y1: 0, x2: 44, y2: 0 }), svg("circle", { r: 5.5 }));
  if (rustig()) raak.setAttribute("transform", "translate(146 58)");
  else raak.append(svg("animateMotion", { dur: "8s", begin: "1.4s", repeatCount: "indefinite", rotate: "auto", path: kromme,
    keyPoints: "0;1;0", keyTimes: "0;.5;1", calcMode: "spline", keySplines: ".45 0 .55 1;.45 0 .55 1" }));
  return svg("svg", { class: "held-grafiek", viewBox: "0 0 340 210", "aria-hidden": "true" },
    svg("g", { class: "rooster" }, [50, 90, 130].map((y) => svg("line", { x1: 24, x2: 326, y1: y, y2: y })),
      [84, 144, 204, 264].map((x) => svg("line", { x1: x, x2: x, y1: 18, y2: 186 }))),
    svg("path", { class: "oppervlak", d: `${kromme} L316 186 L24 186 Z` }),
    svg("g", { class: "assen" }, svg("path", { d: "M24 186 H330 M24 192 V12" }), svg("path", { d: "M325 181 L331 186 L325 191 M19 17 L24 11 L29 17" })),
    svg("path", { class: "kromme", d: kromme, pathLength: 1 }),
    raak,
    svg("text", { class: "integraal", x: 168, y: 166 }, "∫ f(x) dx"));
}

// een getal dat optelt zodra het in beeld komt (telOp, vanuit onthul)
const getal = (n) => Math.round(n).toLocaleString("nl-BE");  // 150.757
const teller = (n, achter = "") => h("b", { class: "getal", "data-n": n, "data-achter": achter }, `${getal(rustig() ? n : 0)}${achter}`);
function telOp(el) {
  const n = +el.dataset.n, achter = el.dataset.achter, t0 = performance.now(), duur = 1200;
  const stap = (t) => { const x = Math.min(1, (t - t0) / duur); el.textContent = `${getal(n * (1 - (1 - x) ** 3))}${achter}`; if (x < 1) requestAnimationFrame(stap); };
  requestAnimationFrame(stap);
}
function onthul(wortel) {
  const els = [...wortel.querySelectorAll(".onthul")];
  if (rustig() || !("IntersectionObserver" in window)) return els.forEach((el) => el.classList.add("in"));
  const io = new IntersectionObserver((xs) => xs.forEach((x) => {
    if (!x.isIntersecting) return;
    x.target.classList.add("in"); x.target.querySelectorAll(".getal[data-n]").forEach(telOp); io.unobserve(x.target);
  }), { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });
  els.forEach((el) => io.observe(el));
  S.opruimen.push(() => io.disconnect());
}

// de oefeningenbank voedt de handboeken, het leerplatform en de testen
function ecosysteem() {
  const versies = h("span", { class: "eco-versies", "aria-hidden": "true" }, ["Handboek", "Leerkracht", "Zelfstudie"].map((v, i) => h("i", { style: `--i:${i}` }, v[0])));
  const doelen = [
    ["Handboeken", "per leerplanpakket, als PDF in drie versies uit één bron: handboek, leerkrachtenversie en zelfstudie.", versies],
    ["Online leerplatform", "voor thuis, met automatisch nakijken."],
    ["Testen en oefenreeksen", "gedifferentieerd, uit dezelfde bank."]];
  return h("div", { class: "eco onthul" },
    h("div", { class: "eco-bron" },
      h("span", { class: "eco-stapel", "aria-hidden": "true" }, [0, 1, 2].map((i) => h("i", { style: `--i:${i}` }))),
      h("div", {}, h("b", {}, "Eén oefeningenbank"), h("span", {}, "Elke oefening heeft een vast nummer, een niveau, een antwoord en een uitwerking. Daarop steunt al de rest."))),
    svg("svg", { class: "eco-stromen", viewBox: "0 0 300 56", preserveAspectRatio: "none", "aria-hidden": "true" },
      ["M150 0 C150 30, 50 26, 50 56", "M150 0 L150 56", "M150 0 C150 30, 250 26, 250 56"].map((d) => svg("path", { d }))),
    h("ol", { class: "eco-doelen" }, doelen.map(([t, u, x], i) => h("li", { class: "eco-doel", style: `--i:${i}` },
      h("span", { class: "eco-nr" }, i + 1), h("b", {}, t), h("span", {}, u), x))));
}

// kolommen: het aantal handboeken per leerplanpakket, gegroepeerd per graad en finaliteit
function pakketGrafiek(d) {
  const groepen = [];
  for (const p of d.pakketten) {
    let g = groepen.at(-1);
    if (!g || g.naam !== graadFin(p)) groepen.push(g = { naam: graadFin(p), pakketten: [] });
    g.pakketten.push({ p, n: d.boeken.filter((b) => b.pakketid === p.id).length });
  }
  const max = Math.max(1, ...groepen.flatMap((g) => g.pakketten.map((x) => x.n)));
  let k = 0;
  return h("figure", { class: "grafiek onthul" },
    h("figcaption", {}, h("b", {}, "Handboeken per leerplanpakket"), h("span", { class: "zacht" }, "Elke richting vindt de leerstof van haar eigen pakket.")),
    h("div", { class: "kolommen" }, groepen.map((g) => h("div", { class: "kol-groep", style: `flex-grow:${Math.max(g.pakketten.length, 1.8)}`, title: g.naam },
      h("div", { class: "kol-rij" }, g.pakketten.map(({ p, n }) => h("div", {
        class: "kol", tabindex: "0", style: `--h:${(n / max) * 100};--i:${k++}`,
        "aria-label": `Pakket ${p.nr}, ${p.kort || p.naam}: ${n} handboeken`, "data-tip": `${p.nr} · ${p.kort || p.naam}: ${n} ${n === 1 ? "handboek" : "handboeken"}${p.op_aanvraag ? " (op aanvraag)" : ""}` },
        h("span", { class: "kol-staaf" }, h("span", { class: "kol-getal" }, n), h("i")), h("span", { class: "kol-nr" }, p.nr)))),
      h("span", { class: "kol-groep-naam" }, `${g.pakketten[0].p.graad}de graad`, h("br"), { D: "doorstroom", DA: "D/A", A: "A" }[finaliteit(g.pakketten[0].p)])))));
}

// een ring: de handboeken per rubriek, in de rubriekkleuren van de voorkanten
function rubriekGrafiek(d) {
  const RUBRIEKEN = [["Analyse", "analyse"], ["Algebra", "algebra"], ["Meetkunde", "meetkunde"], ["Discrete wiskunde", "discreet"], ["Data en onzekerheid", "data"]];
  const tel = RUBRIEKEN.map(([naam, kleur]) => ({ naam, kleur: `var(--r-${kleur})`, n: d.boeken.filter((b) => b.rubriek === naam).length }));
  tel.push({ naam: "Extra en andere", kleur: "var(--zacht)", n: d.boeken.length - tel.reduce((s, x) => s + x.n, 0) });
  const delen = tel.filter((x) => x.n);
  const totaal = d.boeken.length || 1;
  let start = 0;
  const ring = svg("svg", { class: "ring", viewBox: "0 0 120 120", role: "img", "aria-label": delen.map((x) => `${x.naam}: ${x.n}`).join(", ") },
    svg("circle", { class: "ring-spoor", cx: 60, cy: 60, r: 46, pathLength: 100 }),
    delen.map((x, i) => {
      const len = (x.n / totaal) * 100, c = svg("circle", { class: "ring-deel", cx: 60, cy: 60, r: 46, pathLength: 100,
        style: `--len:${Math.max(0, len - 0.9)};--start:${-start};--i:${i};stroke:${x.kleur}` }, svg("title", {}, `${x.naam}: ${x.n} handboeken`));
      start += len; return c;
    }),
    svg("text", { class: "ring-getal", x: 60, y: 60 }, d.boeken.length), svg("text", { class: "ring-sub", x: 60, y: 76 }, "handboeken"));
  return h("figure", { class: "grafiek onthul" },
    h("figcaption", {}, h("b", {}, "Per rubriek"), h("span", { class: "zacht" }, "Elk handboek hoort bij een rubriek van het leerplan.")),
    h("div", { class: "ring-houder" }, ring,
      h("ul", { class: "ring-legende" }, delen.map((x) => h("li", { style: `--c:${x.kleur}` }, h("i"), h("span", {}, x.naam), h("b", {}, x.n))))));
}

// gestapelde balken: hoeveel handboeken in welk stadium, per graad en finaliteit
function voortgangGrafiek(d) {
  const statussen = Object.keys(d.voortgang);
  const pct = (lijst) => lijst.length ? lijst.reduce((s, b) => s + (d.voortgang[b.status]?.percentage || 0), 0) / lijst.length : 0;
  const groepen = [...new Set(d.pakketten.map(graadFin))].map((naam) => ({ naam, boeken: d.boeken.filter((b) => graadFin(b) === naam) })).filter((g) => g.boeken.length);
  const aanwezig = statussen.filter((s) => d.boeken.some((b) => b.status === s));
  return h("figure", { class: "grafiek vg-grafiek onthul" },
    h("div", { class: "stapels" }, groepen.map((g, i) => h("div", { class: "stapel-rij", style: `--i:${i}` },
      h("span", { class: "stapel-naam" }, g.naam[0].toUpperCase() + g.naam.slice(1), h("span", { class: "zacht" }, ` · ${g.boeken.length}`)),
      h("span", { class: "stapel" }, statussen.map((s) => {
        const n = g.boeken.filter((b) => b.status === s).length;
        return n ? h("i", { class: `vg-${s}`, style: `flex-grow:${n}`, tabindex: "0", "data-tip": `${n} ${statusNaam(s)}`, "aria-label": `${n} ${statusNaam(s)}` }) : null;
      })),
      h("b", { class: "stapel-pct" }, teller(Math.round(pct(g.boeken)), " %"))))),
    h("div", { class: "stapel-legende" }, aanwezig.map(statusPil)));
}

/* Een boekenplank met echte voorkanten: om de paar seconden reikt een hand van linksboven, trekt een boek uit de plank,
   toont het even en zet het terug. Alleen als de plank in beeld is en de pagina zichtbaar; niet met
   prefers-reduced-motion. Een boek aanklikken opent het.
   De hand: "Hand Grab Down" van j4p4n, publiek domein (https://openclipart.org/detail/318760/hand-grab-down),
   met de binnenkant wit ingekleurd zodat ze ook op een donkere achtergrond leest (hand.webp). */
const HAND_GREEP = [0.79, 0.91];  // waar duim en vingers het boek vastnemen, als deel van breedte en hoogte van het beeld
function boekenplank(d) {
  const metOmslag = d.boeken.filter((b) => omslagVan(b));
  if (metOmslag.length < 6) return null;
  // een greep uit de kast, telkens anders, verspreid over de rubrieken
  const gekozen = [...metOmslag].sort(() => Math.random() - 0.5).slice(0, 16);
  const boekjes = gekozen.map((b, i) => h("a", { class: "plank-boek", href: `#/boek/${sleutelUrl(b.sleutel)}`, style: `--i:${i}`, "aria-label": `${b.titel} openen`, "data-titel": `${b.titel} · ${pakketKort(b)}` },
    h("img", { src: omslagVan(b), alt: "", loading: "lazy", draggable: "false" })));
  const hand = h("img", { class: "plank-hand", src: "/hand.webp", alt: "", "aria-hidden": "true", draggable: "false" });
  const label = h("p", { class: "plank-label", "aria-live": "off" }, "\u00A0");
  const rij = h("div", { class: "plank-rij" }, boekjes);
  const plank = h("div", { class: "plank onthul" }, h("div", { class: "plank-kast" }, rij, hand, h("div", { class: "plank-hout" })), label);
  if (rustig()) return plank;

  let zichtbaar = false, klok = null, vorige = -1, weg = false;
  const pak = () => {
    if (weg) return;
    if (!zichtbaar || document.hidden) { klok = setTimeout(pak, 800); return; }
    const kandidaten = boekjes.map((b, i) => i).filter((i) => i !== vorige && boekjes[i].offsetLeft + boekjes[i].offsetWidth <= rij.clientWidth);
    const i = kandidaten[Math.floor(Math.random() * kandidaten.length)] ?? 0;
    vorige = i;
    const boek = boekjes[i], hoog = boek.offsetHeight, op = Math.round(hoog * 0.45);
    hand.style.left = `${boek.offsetLeft + boek.offsetWidth / 2 - hand.offsetWidth * HAND_GREEP[0]}px`;
    hand.style.top = `${boek.offsetTop + Math.min(14, hoog * 0.1) - hand.offsetHeight * HAND_GREEP[1]}px`;
    const duur = 3600, gemak = "cubic-bezier(.45,0,.25,1)";
    const stappen = (xs) => xs.map((x) => ({ easing: gemak, ...x }));  // de vertraging per stap, niet over het geheel
    boek.classList.add("gepakt");
    boek.animate(stappen([
      { transform: "none" }, { transform: "none", offset: 0.2 },
      { transform: `translateY(${-op}px) rotate(-5deg) scale(1.14)`, offset: 0.45 }, { transform: `translateY(${-op}px) rotate(-5deg) scale(1.14)`, offset: 0.7 },
      { transform: "none", offset: 0.88 }, { transform: "none" }]), { duration: duur });
    hand.animate(stappen([
      { transform: "translate(-70px, -110px)", opacity: 0 }, { transform: "none", opacity: 1, offset: 0.2 },
      { transform: `translateY(${-op}px)`, opacity: 1, offset: 0.45 }, { transform: `translateY(${-op}px)`, opacity: 1, offset: 0.7 },
      { transform: "none", opacity: 1, offset: 0.88 }, { transform: "translate(-70px, -110px)", opacity: 0 }]), { duration: duur });
    setTimeout(() => { label.textContent = boek.dataset.titel; label.classList.add("aan"); }, duur * 0.42);
    setTimeout(() => label.classList.remove("aan"), duur * 0.8);
    setTimeout(() => boek.classList.remove("gepakt"), duur);
    klok = setTimeout(pak, duur + 900);
  };
  const io = new IntersectionObserver(([x]) => { zichtbaar = x.isIntersecting; }, { threshold: 0.4 });
  io.observe(plank);
  klok = setTimeout(pak, 1200);
  S.opruimen.push(() => { weg = true; clearTimeout(klok); io.disconnect(); });
  return plank;
}

async function toonOver() {
  const d = await boeken().catch(() => null);
  const meelezers = d ? await api("GET", "meelezers").then((x) => new Map(Object.entries(x.boeken || {}))).catch(() => null) : null;
  const b = await bereik();
  const extern = (href, tekst) => h("a", { href, target: "_blank", rel: "noopener" }, tekst);
  const sectie = (titel, ...inhoud) => h("section", { class: "over-sectie onthul" }, h("h2", {}, titel), inhoud);
  const gemiddeld = d?.boeken.length ? Math.round(d.boeken.reduce((s, b) => s + (d.voortgang[b.status]?.percentage || 0), 0) / d.boeken.length) : 0;
  const tegel = (getal, tekst) => h("div", { class: "tegel" }, getal, h("span", {}, tekst));
  const licentie = (code, titel, tekst) => h("div", { class: "licentie" }, h("span", { class: "licentie-code", "aria-hidden": "true" }, code), h("b", {}, titel), h("span", {}, tekst));

  scherm("over",
    h("article", { class: "over" },
      h("header", { class: "over-held onthul" },
        h("div", { class: "held-tekst" },
          h("p", { class: "bovenkop" }, "Over Axiomath"),
          h("h1", {}, "Vrije handboeken wiskunde, door leerkrachten voor leerkrachten"),
          h("p", { class: "lead" }, "Voor de 2de en 3de graad van het Vlaamse secundair onderwijs: de doorstroomfinaliteit en de dubbele finaliteit, en op aanvraag de arbeidsmarktfinaliteit. Vrij, niet-commercieel, en met een oefeningenbank als bron voor alles."),
          h("p", { class: "naam" }, h("span", { class: "woord", style: "--i:0" }, "axioma"), h("span", { class: "plus", style: "--i:1" }, "+"),
            h("span", { class: "woord", style: "--i:2" }, "math"), h("span", { class: "plus", style: "--i:3" }, "="), h("span", { class: "woord merk", style: "--i:4" }, "Axiomath")),
          h("p", { class: "zacht klein" }, "Een axioma is wat je aanvaardt om te kunnen redeneren.")),
        heldGrafiek()),

      d && h("div", { class: "tegels onthul" },
        tegel(teller(d.boeken.length), "handboeken in de maak"),
        tegel(teller(d.pakketten.length), "leerplanpakketten"),
        tegel(teller(3), "versies uit één bron"),
        tegel(h("b", { class: "getal" }, "0 €"), "voor iedereen, altijd")),

      d && sectie("Neem er een uit de kast",
        h("p", {}, "Elk handboek staat in de boekenkast, met de kleur van zijn rubriek op de voorkant. Lezen en downloaden kan zonder account."),
        boekenplank(d),
        h("p", { class: "knoppen" }, h("a", { class: "knop licht", href: "#/" }, "Naar de boekenkast"))),

      sectie("Waar we naartoe willen",
        h("p", {}, "Een geïntegreerd ecosysteem, volledig open. Alles vertrekt uit dezelfde bank met oefeningen:"),
        ecosysteem(),
        h("p", { class: "knoppen" }, h("a", { class: "knop licht", href: "#/plannen" }, "Bekijk de plannen, met een voorproefje"))),

      sectie("Vanuit de leerplandoelen",
        h("p", {}, "Alle handboeken zijn opgesteld vanuit de leerplandoelen van de graadleerplannen wiskunde voor de 2de en 3de graad. Er is een reeks handboeken per leerplanpakket: in de doorstroom van Basis tot B+S'', in de dubbele finaliteit van D/A Basis tot D/A B+S''. Voor de arbeidsmarktfinaliteit (2de graad) maken we één handboek zodra er vraag naar is. Welke leerplandoelen elk handboek behandelt, staat per pakket ",
          extern(`${GITHUB}/blob/main/Handboeken/README.md`, "op GitHub"), "."),
        d && h("div", { class: "grafieken" }, pakketGrafiek(d), rubriekGrafiek(d)),
        h("p", {}, "De koepels bouwen allemaal op dezelfde doelen van de overheid, maar delen de richtingen soms anders in. Daarom kies je op de site ook je koepel: de leerplannen van het katholiek onderwijs (KOV) of van het GO!. Dan zie je per richting welke handboeken verplicht zijn, en apart wat keuze of uitbreiding is. Een PDF krijgt de voorkant van je koepel; de inhoud is dezelfde. Hoe de koepels verschillen, staat ",
          extern(`${GITHUB}/blob/main/Ontwerp/koepels.md`, "op GitHub"), ". ",
          h("button", { type: "button", class: "knop-tekst", style: { padding: 0 }, onclick: ovsgPov }, "Volgt je school OVSG of POV?"))),

      d && sectie("Hoe ver we staan",
        h("p", {}, `Elk handboek gaat door dezelfde stadia: drie versies die we zelf herwerken, daarna lezen leerkrachten het na, en pas na een jaar in de klas is het klaar. Samen staan de handboeken op ${gemiddeld} %.`),
        voortgangGrafiek(d),
        h("p", { class: "knoppen" }, h("a", { class: "knop licht", href: "#/voortgang" }, "De voortgang per handboek"))),

      b && sectie("Voor hoeveel leerlingen",
        h("p", {}, `${getal(som(b.graden, (x) => x.cat === "voorzien"))} leerlingen van de 2de en 3de graad volgen een richting waarvoor er een volledige reeks handboeken is: ${procent(som(b.graden, (x) => x.cat === "voorzien"), som(b.graden))} %. Met de dubbele finaliteit erbij wordt dat ${procent(som(b.graden, (x) => x.cat === "voorzien" || x.cat === "da"), som(b.graden))} %. Cijfers van Onderwijs Vlaanderen, schooljaar ${b.schooljaar}.`),
        bereikStapels([2, 3].map((g) => ({ naam: `${g}de graad`, delen: delenVan(b.graden.filter((x) => x.graad === g)) }))),
        h("p", { class: "knoppen" }, h("a", { class: "knop licht", href: "#/bereik" }, "Het bereik per pakket, koepel en richting"))),

      meelezers && sectie("Wie leest mee?",
        h("p", {}, "Een bolletje per handboek. Het kleurt in zodra een leerkracht die het in de klas gebruikt meeleest: iemand met een richting en een leerjaar waarin het handboek gevolgd wordt. Zo zien we waar nog niemand meekijkt."),
        dekkingRaster(meelezers, { titel: null, klasse: "onthul over-dekking", uitleg: "Wijs een bolletje aan voor de titel, klik om het handboek te openen." }),
        h("p", {}, "Geef je les in een richting met veel grijze bolletjes? Dan is jouw blik extra welkom. ",
          S.ik ? h("a", { href: "#/profiel" }, "Vul je lesopdracht in") : h("a", { href: "#/aanmelden" }, "Meld je aan als leerkracht"), ".")),

      sectie("Vrij en open",
        h("p", {}, "Je mag alles gebruiken, aanpassen en delen. De inhoud valt onder ", extern("https://creativecommons.org/licenses/by-nc-sa/4.0/deed.nl", "CC BY-NC-SA 4.0"), ":"),
        h("div", { class: "licenties" },
          licentie("BY", "Vermeld de bron", "Zeg waar het vandaan komt."),
          licentie("NC", "Niet commercieel", "Verkopen mag niet, gebruiken in de klas wel."),
          licentie("SA", "Deel op dezelfde manier", "Wat je ervan maakt, is even vrij.")),
        h("p", {}, "Alle bronnen staan op GitHub: de LaTeX-bestanden van de handboeken, de oefeningenbank en de code van deze website. Wat we over je bewaren, staat in de ", h("a", { href: "#/privacy" }, "privacyverklaring"), "."),
        h("div", { class: "knoppen" },
          h("a", { class: "knop", href: GITHUB, target: "_blank", rel: "noopener" }, "Axiomath op GitHub"),
          h("a", { class: "knop licht", href: `${GITHUB}/blob/main/CONTRIBUTING.md`, target: "_blank", rel: "noopener" }, "Meewerken")),
        KOFFIE ? h("div", { class: "koffie" },
          h("span", { class: "koffie-kop", "aria-hidden": "true" }, h("i"), h("i"), h("i"), "☕"),
          h("div", {},
            h("p", {}, "Axiomath is gratis en blijft dat, voor iedereen. De handboeken ontstaan in vrije uren, en de website en het domein kosten een klein bedrag per jaar. Heb je iets aan Axiomath? Met een koffie help je de site in de lucht te houden en de handboeken verder te schrijven. Helemaal vrijblijvend: nalezen en feedback geven helpt evenveel."),
            h("div", { class: "knoppen" }, h("a", { class: "knop licht", href: KOFFIE, target: "_blank", rel: "noopener" }, "☕ Koop mij een koffie")))) : null),

      sectie("Als app op je gsm",
        alsApp()
          ? h("p", {}, "Je gebruikt Axiomath nu als app. Ze toont altijd de nieuwste versie van de handboeken.")
          : [h("p", {}, "Zet Axiomath op het beginscherm van je gsm of tablet. Dan open je de handboeken met één tik, schermvullend, zoals een app. Je hebt geen appwinkel nodig, en de app is altijd bijgewerkt."),
            h("div", { class: "knoppen" }, h("button", { class: "knop licht", type: "button", onclick: installeer }, "Zet op je beginscherm"))]),

      h("section", { class: "lees-mee onthul" },
        h("h2", {}, "Lees mee"),
        h("p", {}, "Eerst maken we van elk handboek een eerste versie, daarna lezen leerkrachten ze na. Lees een handboek en zeg wat beter kan: op een plek in het boek, over een heel handboek of over het idee zelf. Hoe kritischer, hoe liever."),
        h("div", { class: "knoppen" }, S.ik
          ? [h("a", { class: "knop", href: "#/algemeen" }, "Geef algemene feedback"), h("a", { class: "knop licht", href: "#/" }, "Naar de handboeken")]
          : [h("a", { class: "knop", href: "#/aanmelden" }, "Meld je aan als leerkracht"), h("a", { class: "knop licht", href: "#/" }, "Bekijk de handboeken")]))));
  onthul($app);
}

// --- privacy: de privacyverklaring (#/privacy), voor iedereen --------------------------------------
/* Wat hier staat, moet kloppen met lib.php: pas de tekst aan als de server iets anders gaat bewaren. De naam van de
   verantwoordelijke en het adres komen uit config.php op de server ('verantwoordelijke', 'contact'), niet uit de repo. */
const PRIVACY_VERSIE = "26 november 2026";
function toonPrivacy() {
  const wie = S.menu?.verantwoordelijke || "het Axiomath-team";
  const adres = S.menu?.contact;
  const mail = adres ? h("a", { href: `mailto:${adres}?subject=` + encodeURIComponent("Privacy bij Axiomath") }, adres) : "het Axiomath-team";
  const sectie = (titel, ...inhoud) => h("section", { class: "over-sectie" }, h("h2", {}, titel), inhoud);
  const md = (tekst) => mdBlokken(tekst.trim());
  scherm("over", h("article", { class: "over privacy" },
    h("p", { class: "bovenkop" }, "Privacy"),
    h("h1", {}, "Wat Axiomath over je bewaart"),
    h("p", { class: "lead" }, "Zo weinig mogelijk. Geen advertenties, geen trackers van anderen, geen verkoop van gegevens. Hier staat wat we wel bewaren, waarom, wie het ziet en hoe lang."),
    h("p", { class: "zacht klein" }, `Versie van ${PRIVACY_VERSIE}. De site is voor leerkrachten: we vragen geen gegevens van leerlingen.`),

    sectie("Wie is verantwoordelijk",
      h("p", {}, `Axiomath is een vrij, niet-commercieel project voor het wiskundeonderwijs. Verantwoordelijk voor je gegevens is ${wie}. Met een vraag of een verzoek over je gegevens kan je terecht bij `, mail, ".")),

    sectie("Zonder account", md(`
- Je leest de handboeken zonder dat we iets over jou bewaren.
- We tellen bezoekers per dag. Daarvoor maakt de server een onomkeerbare code van je IP-adres en je browser. Die code wissen we de volgende dag; we houden alleen het aantal bezoekers per dag en per handboek bij.
- Om te tellen gebruiken we geen koekjes. Je voorkeuren (thema, koepel, zoom en dergelijke) staan alleen in je eigen browser en komen niet bij ons.
- Zoals elke webserver houdt de hosting technische logbestanden bij, met IP-adressen, voor de beveiliging en bij storingen.
`)),

    sectie("Met een account", md(`
| Gegeven | Waarvoor | Wie ziet het |
| --- | --- | --- |
| Naam | bij je feedback, zodat collega's weten wie het zegt | aangemelde leerkrachten en het team |
| E-mailadres | aanmelden, en een link als je je wachtwoord vergat | het team |
| Wachtwoord | aanmelden | niemand: we bewaren alleen een onomkeerbare hash |
| Rol, datum van aanmaak en van je laatste bezoek | het beheer van de accounts | het team |
| Mijn lesopdracht: koepel, finaliteiten, leerjaren, richtingen, opmerking (vrijwillig) | zien voor welke richtingen we nog nalezers zoeken | het team; in het overzicht alleen als totalen, zonder namen |
| Je feedback, antwoorden en steun, met een logboek van wat ermee gebeurde | de handboeken beter maken | aangemelde leerkrachten (met je naam) en het team |
| Een aanmeldkoekje | aangemeld blijven, 30 dagen | alleen je browser en de server |
`)),

    sectie("Waarom we dit mogen", md(`
- **Je account, je feedback en de mail met een herstellink**: nodig voor de dienst waarvoor je een account maakte.
- **Mijn lesopdracht**: je toestemming. Je kan het leeg laten, en het later aanpassen of laten wissen.
- **De bezoekersteller, de logbestanden en de rem op aanmeldpogingen**: ons gerechtvaardigd belang om de site veilig en bruikbaar te houden.
`)),

    sectie("Wie er nog bij betrokken is", md(`
- **Vimexx** host de site, de databank en de mail, op servers in Nederland.
- **Claude van Anthropic** (Verenigde Staten): het team verwerkt feedback met deze AI-assistent. Claude krijgt de tekst en de plaats van een opmerking, nooit je naam of je e-mailadres.
- **GitHub**: de handboeken en de code staan daar openbaar. Als we een opmerking verwerken, kan de tekst ervan, zonder je naam, in een openbare beschrijving van die wijziging staan.
- Verder niemand: geen statistieken van Google of anderen, geen advertentienetwerken, en ook lettertypes en scripts komen van axiomath.be zelf. Een link naar GitHub of een andere site opent die site pas als je erop klikt.

Zet daarom geen persoonsgegevens van anderen, zoals namen van leerlingen, in je feedback.
`)),

    sectie("Hoe lang we het bewaren", md(`
| Gegeven | Hoe lang |
| --- | --- |
| Je account en je lesopdracht | tot je vraagt om ze te wissen |
| Je feedback | blijft bij de handboeken; wis je je account, dan halen we je naam eraf |
| De code van de bezoekersteller | tot de volgende dag |
| Mislukte aanmeldpogingen (IP-adres) | een kwartier |
| Een link om je wachtwoord te herstellen | werkt een uur |
| Reservekopieën van de databank | 30 dagen; wat gewist is, verdwijnt dus na 30 dagen ook uit de kopieën |
| Logbestanden van de hosting | volgens de termijnen van Vimexx |
`)),

    sectie("Beveiliging", md(`
- Alles verloopt over https, en de browser onthoudt dat (HSTS).
- Wachtwoorden bewaren we als hash (bcrypt), nooit leesbaar.
- De databank staat buiten het publieke deel van de server. Na te veel mislukte pogingen remt de server af.
- Elke nacht een reservekopie, en een strikt beleid voor wat de pagina mag laden (Content-Security-Policy).
- Lekken er toch gegevens uit, dan verwittigen we je, en waar het moet ook de Gegevensbeschermingsautoriteit, binnen 72 uur.
`)),

    sectie("Je rechten",
      md(`
Je mag je gegevens inkijken, laten verbeteren of wissen, de verwerking laten beperken, er bezwaar tegen maken, ze meekrijgen in een gangbaar formaat, en je toestemming intrekken. Je wachtwoord wijzig je zelf op de site. Voor de rest volstaat een mail: we antwoorden binnen een maand.

Ben je het niet eens met hoe we met je gegevens omgaan, dan kan je klacht indienen bij de [Gegevensbeschermingsautoriteit](https://www.gegevensbeschermingsautoriteit.be), Drukpersstraat 35, 1000 Brussel.
`), h("p", {}, "Contact: ", mail, ".")),

    sectie("Als dit verandert",
      h("p", {}, "Een nieuwe versie staat altijd hier, met de datum bovenaan. Gaan we iets nieuws bewaren, zoals gegevens van leerlingen in een klasomgeving, dan passen we deze verklaring eerst aan."))));
}

// --- bereik: hoeveel leerlingen een handboek hebben (bereik.json, uit bereik.py) ----------------------
/* De cijfers komen van Onderwijs Vlaanderen (inschrijvingen op 1 februari), per graad, leerjaar, pakket, koepel en
   richting. "Voorzien": doorstroom van de 2de en 3de graad met een pakket in koepels.yaml. bereik.py rekent het uit. */
const BEREIK_CAT = [
  ["voorzien", "Met een handboek", "doorstroom: alle handboeken in een eerste versie", "var(--acc)"],
  ["da", "In voorbereiding", "dubbele finaliteit: pakketten klaar, handboeken nog te schrijven", "color-mix(in srgb, var(--acc) 38%, var(--papier))"],
  ["a", "Arbeidsmarkt", "2de graad op aanvraag, 3de graad niet gepland", "var(--lijn)"],
  ["zonder", "Eigen leerplan", "doorstroom zonder pakket bij Axiomath (Steiner, Yeshiva)", "var(--zacht)"]];
let BEREIK = null;
const bereik = async () => BEREIK ??= await fetch("/bereik.json", { cache: "no-cache" }).then((r) => r.ok ? r.json() : null).catch(() => null);
const kort = (n) => n >= 10000 ? `${Math.round(n / 1000)}k` : n >= 1000 ? `${(n / 1000).toFixed(1).replace(".", ",")}k` : String(n);
const procent = (a, b) => b ? Math.round((100 * a) / b) : 0;
const som = (xs, f = () => true) => xs.filter(f).reduce((s, x) => s + x.n, 0);

// een rij gestapelde balken per groep, met de vier categorieën en het aandeel met een handboek rechts
function bereikStapels(rijen, { legende = true } = {}) {
  return h("figure", { class: "grafiek vg-grafiek onthul" },
    h("div", { class: "stapels" }, rijen.map((r, i) => {
      const totaal = r.delen.reduce((s, x) => s + x.n, 0);
      return h("div", { class: "stapel-rij", style: `--i:${i}` },
        h("span", { class: "stapel-naam" }, r.naam, h("span", { class: "zacht" }, ` · ${getal(totaal)}`)),
        h("span", { class: "stapel", role: "img", "aria-label": `${r.naam}: ${r.delen.map((x) => `${getal(x.n)} ${x.label.toLowerCase()}`).join(", ")}` },
          r.delen.map((x) => x.n ? h("i", { style: `flex-grow:${x.n};--c:${x.kleur}`, tabindex: "0", "data-tip": `${x.label}: ${getal(x.n)} (${procent(x.n, totaal)} %)` }) : null)),
        h("b", { class: "stapel-pct" }, teller(procent(r.delen[0].n, totaal), " %")));
    })),
    legende && h("ul", { class: "bereik-legende" }, BEREIK_CAT.map(([, label, uitleg, kleur]) =>
      h("li", { style: `--c:${kleur}` }, h("i"), h("span", {}, h("b", {}, label), " ", h("span", { class: "zacht" }, uitleg))))));
}
const delenVan = (lijst) => BEREIK_CAT.map(([cat, label, , kleur]) => ({ label, kleur, n: som(lijst, (x) => x.cat === cat) }));

// kolommen: leerlingen per leerplanpakket, met de namen uit de boekenkast; D/A lichter (nog geen handboeken)
function bereikPakketten(b, d) {
  const n = new Map(b.pakketten.map((x) => [x.pakket, x.n]));
  const pakketten = d.pakketten.filter((p) => n.has(p.id)).sort((a, c) => a.graad - c.graad);  // stabiel: binnen een graad de volgorde van de kast
  const max = Math.max(1, ...pakketten.map((p) => n.get(p.id)));
  const groepen = [];
  for (const p of pakketten) {
    let g = groepen.at(-1);
    if (!g || g.naam !== graadFin(p)) groepen.push(g = { naam: graadFin(p), p, lijst: [] });
    g.lijst.push(p);
  }
  let k = 0;
  return h("figure", { class: "grafiek onthul" },
    h("figcaption", {}, h("b", {}, "Leerlingen per leerplanpakket"), h("span", { class: "zacht" }, "Elke richting volgt de handboeken van haar pakket. Lichter: dubbele finaliteit, de handboeken komen nog.")),
    h("div", { class: "kolommen" }, groepen.map((g) => h("div", { class: "kol-groep", style: `flex-grow:${Math.max(g.lijst.length, 1.8)}`, title: g.naam },
      h("div", { class: "kol-rij" }, g.lijst.map((p) => {
        const x = n.get(p.id);
        return h("div", { class: `kol${finaliteit(p) === "D" ? "" : " kol-licht"}`, tabindex: "0", style: `--h:${(x / max) * 100};--i:${k++}`,
          "aria-label": `Pakket ${p.nr}, ${p.kort}: ${getal(x)} leerlingen`, "data-tip": `${p.nr} · ${p.kort}: ${getal(x)} leerlingen` },
          h("span", { class: "kol-staaf" }, h("span", { class: "kol-getal" }, kort(x)), h("i")), h("span", { class: "kol-nr" }, p.nr));
      })),
      h("span", { class: "kol-groep-naam" }, `${g.p.graad}de graad`, h("br"), { D: "doorstroom", DA: "D/A", A: "A" }[finaliteit(g.p)])))));
}

// horizontale balken: de richtingen met de meeste leerlingen die een handboek hebben
function bereikRichtingen(b, d, aantal = 12) {
  const per = new Map();
  for (const r of b.richtingen) {
    const k = `${r.graad}|${r.richting}`;
    const x = per.get(k) || { graad: r.graad, richting: r.richting, n: 0, pakketten: new Set() };
    x.n += r.n; x.pakketten.add(r.pakket); per.set(k, x);
  }
  const lijst = [...per.values()].sort((a, c) => c.n - a.n).slice(0, aantal);
  const max = lijst[0]?.n || 1;
  const pnaam = (id) => { const p = d.pakketten.find((x) => x.id === id); return p ? p.kort : id; };
  return h("figure", { class: "grafiek onthul" },
    h("figcaption", {}, h("b", {}, `De ${aantal} grootste richtingen met een handboek`), h("span", { class: "zacht" }, "Leerlingen in beide leerjaren van de graad samen.")),
    h("ol", { class: "bereik-balken" }, lijst.map((x, i) => h("li", { style: `--i:${i};--w:${(x.n / max) * 100}%` },
      h("span", { class: "bb-naam" }, x.richting, h("span", { class: "zacht" }, ` · ${x.graad}de graad · ${[...x.pakketten].map(pnaam).join(" of ")}`)),
      h("span", { class: "bb-balk" }, h("i", { tabindex: "0", "data-tip": `${getal(x.n)} leerlingen` })),
      h("b", { class: "bb-getal" }, getal(x.n))))));
}

async function toonBereik() {
  const [b, d] = await Promise.all([bereik(), boeken().catch(() => null)]);
  if (!b || !d) return scherm("over", h("p", { class: "leeg" }, "De cijfers over het bereik zijn er nog niet. ", h("a", { href: "#/over" }, "Naar Over Axiomath")));
  const extern = (href, tekst) => h("a", { href, target: "_blank", rel: "noopener" }, tekst);
  const sectie = (titel, ...inhoud) => h("section", { class: "over-sectie onthul" }, h("h2", {}, titel), inhoud);
  const voorzien = som(b.graden, (x) => x.cat === "voorzien"), totaal = som(b.graden);
  const da = som(b.graden, (x) => x.cat === "da");
  const scholen = Object.values(b.scholen).reduce((s, n) => s + n, 0);
  const JAAR = { "2|1": "3de jaar", "2|2": "4de jaar", "3|1": "5de jaar", "3|2": "6de jaar" };
  const leerjaren = Object.entries(JAAR).map(([k, naam]) => ({ naam, delen: delenVan(b.leerjaren.filter((x) => `${x.graad}|${x.leerjaar}` === k)) }));
  const koepels = ["KOV", "GO!", "OVSG", "POV", "andere"].filter((k) => b.koepels.some((x) => x.koepel === k)).map((k) => ({
    naam: { andere: "Andere scholen", KOV: "Katholiek (KOV)", "GO!": "GO!", OVSG: "Steden en gemeenten (OVSG)", POV: "Provincies (POV)" }[k],
    delen: delenVan(b.koepels.filter((x) => x.koepel === k)) }));
  const aandeel = (k) => procent(som(b.koepels, (x) => x.koepel === k && x.cat === "voorzien"), voorzien);

  scherm("over",
    h("article", { class: "over" },
      h("header", { class: "onthul" },
        h("p", { class: "bovenkop" }, `Bereik · schooljaar ${b.schooljaar}`),
        h("h1", {}, "Voor hoeveel leerlingen schrijven we?"),
        h("p", { class: "lead" }, `In de 2de en 3de graad zitten ${getal(totaal)} leerlingen. ${getal(voorzien)} van hen, bijna de helft, volgen een richting van de doorstroomfinaliteit waarvoor Axiomath een volledige reeks handboeken heeft. Voor ${getal(da)} leerlingen in de dubbele finaliteit liggen de pakketten klaar en schrijven we de handboeken nog.`)),

      h("div", { class: "tegels onthul" },
        tegelB(teller(voorzien), "leerlingen met een handboek"),
        tegelB(teller(procent(voorzien, totaal), " %"), "van de 2de en 3de graad"),
        tegelB(teller(scholen), "scholen met zo'n richting"),
        tegelB(teller(da), "leerlingen D/A: de volgende stap")),

      sectie("Per leerjaar",
        h("p", {}, "In elk leerjaar heeft ongeveer de helft van de leerlingen een handboek. De rest zit in de dubbele finaliteit, waar de handboeken nog komen, of in de arbeidsmarktfinaliteit."),
        bereikStapels(leerjaren)),

      sectie("Per leerplanpakket",
        h("p", {}, "Het grootste pakket is B+S in de 2de graad: Economische wetenschappen, Latijn, Moderne talen en de STEM-richtingen. In de 3de graad zijn Basis (Humane, Moderne talen, Welzijn) en B+S'' (de wiskunderichtingen) het grootst."),
        bereikPakketten(b, d)),

      sectie("Per koepel",
        h("p", {}, `De inhoud is voor elke koepel dezelfde; de voorkant verschilt. ${aandeel("KOV")} % van de leerlingen met een handboek zit in het katholiek onderwijs, ${aandeel("GO!")} % in het GO!. Het pakket volgt de leerplannen van de koepel van de school.`),
        bereikStapels(koepels, { legende: false })),

      sectie("Per richting",
        bereikRichtingen(b, d),
        h("p", { class: "knoppen" }, h("a", { class: "knop licht", href: "#/" }, "Zoek je richting in de boekenkast"))),

      h("section", { class: "over-sectie onthul" },
        h("details", { class: "bereik-bron" },
          h("summary", {}, "Waar de cijfers vandaan komen"),
          h("p", {}, `Bron: ${b.bron} (`, extern("https://onderwijs-api-portaal.vlaanderen.be", "onderwijs-api-portaal.vlaanderen.be"), `). Het zijn de inschrijvingen in het Nederlandstalig secundair onderwijs op ${b.teldatum}, voltijds en deeltijds, gewoon en buitengewoon (opleidingsvorm 4), per school en per studierichting. Onderwijs Vlaanderen publiceert ze onder de Modellicentie Gratis Hergebruik.`),
          h("p", {}, "Met een handboek: een leerling van de 2de of 3de graad in een richting van de doorstroomfinaliteit die bij Axiomath een leerplanpakket heeft. De richting bepaalt het pakket, volgens de leerplannen van de koepel van de school (KOV, GO! of POV; de andere scholen volgens KOV). Alle handboeken van de doorstroom zijn er in een eerste versie."),
          h("p", {}, `Niet meegeteld: de 1ste graad, het 7de jaar, Se-n-Se, HBO5 Verpleegkunde, de onthaalklas voor anderstalige nieuwkomers en de opleidingsvormen 1 tot 3 van het buitengewoon onderwijs. Van alle ${getal(b.secundair)} leerlingen in het secundair onderwijs telt deze pagina er ${getal(totaal)}.`),
          h("p", { class: "zacht" }, `Bijgewerkt op ${datum(b.gemaakt)}.`)))));
  onthul($app);
}
const tegelB = (getalEl, tekst) => h("div", { class: "tegel" }, getalEl, h("span", {}, tekst));

// --- algemene feedback -------------------------------------------------------------------------
async function toonAlgemeen() {
  const d = await boeken();
  let alle = await api("GET", "feedback?niveau=algemeen");
  const lijst = h("div", { class: "lijst" });
  const teken = () => lijst.replaceChildren(...(alle.length ? alle.map((f) => fbKaart(f, { toonBoek: true, bijWijziging: (n, _, weg) => { alle = n ? alle.map((x) => x.id === n.id ? n : x) : alle.filter((x) => x.id !== weg.id); } }))
    : [h("p", { class: "leeg" }, "Nog geen algemene feedback.")]));
  const v = feedbackVelden(S.menu.soorten_algemeen, { soort: "premisse" }, "Wat vind je van het idee: vrije handboeken, de opbouw per pakket, de oefeningenbank, de zelfstudieversie, …?");
  const boek = h("select", {}, h("option", { value: "" }, "Over Axiomath in het algemeen"),
    d.pakketten.map((p) => h("optgroup", { label: `${meerGraden() ? `${p.graad}de graad · ` : ""}${p.nr} · ${p.naam}` }, d.boeken.filter((b) => b.pakketid === p.id).map((b) => h("option", { value: b.sleutel }, b.titel)))));
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
    [["feedback", "Feedback"], ["werkplan", "Werkplan"], ["logboek", "Logboek"], ["overzicht", "Per handboek"], ["mensen", "Leerkrachten"], ["dekking", "Dekking"], ["bezoekers", "Bezoekers"], ["pdf", "PDF's"]].map(([k, l]) =>
      h("button", { type: "button", role: "tab", "aria-selected": String(k === tab), onclick: () => { location.hash = `#/beheer/${k}`; } }, l)));
  const plek = h("div", {}, h("p", { class: "laden" }, "Laden …"));
  scherm("beheer", h("div", { class: "paginakop" }, h("div", {}, h("h1", {}, "Beheer"),
    h("p", {}, "Alle feedback op één plek. Exporteer naar Markdown om ze per handboek, hoofdstuk en pagina te verwerken in de bron."))), tabs, plek);
  tabs.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest", inline: "nearest" });  // op een gsm schuift de rij
  const inhoud = await ({ feedback: beheerFeedback, werkplan: beheerWerkplan, logboek: beheerLogboek, overzicht: beheerOverzicht, mensen: beheerMensen, dekking: beheerDekking, bezoekers: beheerBezoekers, pdf: beheerPdf }[tab] || beheerFeedback)(d);
  plek.replaceChildren(...[inhoud].flat());
}

async function beheerFeedback(d) {
  const q = new URLSearchParams(location.hash.split("?")[1] || "");
  const filters = { status: q.get("status") ?? "open", pakket: q.get("pakket") || "", sleutel: q.get("sleutel") || "", niveau: "", soort: "", ernst: "", zoek: "" };
  let sorteer = "verwerk", rijen = [];
  const sel = (naam, opties) => h("select", { "aria-label": naam, onchange: (e) => { filters[naam] = e.target.value; laad(); } },
    opties.map(([k, l]) => h("option", { value: k, selected: filters[naam] === k }, l)));
  const boekSel = sel("sleutel", [["", "Alle handboeken"], ...d.boeken.map((b) => [b.sleutel, `${pakketKort(b)} · ${b.titel}`])]);
  const balk = h("div", { class: "balk" },
    sel("status", [["open", "Open (nieuw + goedgekeurd)"], ["", "Alle statussen"], ...Object.entries(S.menu.statussen)]),
    sel("pakket", [["", "Alle pakketten"], ...d.pakketten.map((p) => [p.id, `Pakket ${pakketKort(p)}`])]),
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
      h("div", { class: "teller" }, h("b", {}, tel((f) => f.status === "behandeling")), h("span", {}, "goedgekeurd, nog te verwerken")),
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

async function beheerLogboek(d) {
  const filters = { sleutel: "", actie: "", zoek: "", max: "300" };
  const lijst = h("div", { class: "lijst" });
  const tel = h("p", { class: "zacht klein" });
  const sel = (naam, opties) => h("select", { "aria-label": naam, onchange: (e) => { filters[naam] = e.target.value; laad(); } }, opties.map(([k, l]) => h("option", { value: k }, l)));
  const laad = poging(async () => {
    const r = await api("GET", `beheer/logboek?${new URLSearchParams(Object.fromEntries(Object.entries(filters).filter(([, w]) => w)))}`);
    tel.textContent = `${r.length} regels, nieuwste eerst.`;
    lijst.replaceChildren(...(r.length ? r.map((x) => h("div", { class: "kaart logkaart" },
      h("div", { class: "fb-kop" }, h("span", { class: "waar" }, `#${x.feedback}`), x.sleutel && h("span", { class: "zacht klein" }, boekTitel(x.sleutel)), h("span", { class: "ruimte" }), h("span", { class: "zacht klein" }, wanneer(x.tijd))),
      logRegel(x), h("div", { class: "zacht klein" }, x.samenvatting))) : [h("p", { class: "leeg" }, "Nog niets in het logboek.")]));
  });
  await laad();
  const exp = h("a", { class: "knop licht klein", href: "#", onclick: (e) => { e.preventDefault(); location.href = apiUrl(`beheer/logboek?formaat=md&max=5000`); } }, icoon("download"), "Hele logboek als Markdown");
  return [h("p", {}, "Elke stap van elke opmerking, nooit gewist: ingediend, goed- of afgekeurd, verwerkt, antwoorden en verwijderingen, met wie en wanneer. Zo zie je wat er beslist werd voor je iets aanpast."),
    h("div", { class: "balk" }, sel("sleutel", [["", "Alle handboeken"], ...d.boeken.map((b) => [b.sleutel, `${pakketKort(b)} · ${b.titel}`])]),
      sel("actie", [["", "Elke stap"], ["ingediend", "Ingediend"], ["status", "Goed-/afgekeurd/verwerkt"], ["reactie", "Antwoorden"], ["bewerkt", "Bewerkt"], ["notitie", "Notities"], ["verwijderd", "Verwijderd"], ["verplaatst", "Verplaatst naar een nieuwe versie"]]),
      h("input", { type: "search", placeholder: "Zoek", onchange: (e) => { filters.zoek = e.target.value; laad(); } }), exp), tel, lijst];
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
  const rijen = [rij("", "Algemeen"), ...d.boeken.map((b) => rij(b.sleutel, `${pakketKort(b)} · ${b.titel}`))].filter(Boolean);
  if (!rijen.length) return h("p", { class: "leeg" }, "Nog geen feedback.");
  return [h("p", { class: "zacht", style: { marginBottom: "12px" } }, "Open feedback per handboek en per soort. Klik op een handboek om die feedback te zien."),
    h("div", { class: "tabel-houder" }, h("table", {}, h("thead", {}, h("tr", {}, h("th", {}, "Handboek"), h("th", { class: "getal" }, "Open"), h("th", { class: "getal" }, "Dringend"),
      gebruikt.map((s) => h("th", { class: "getal" }, S.menu.soorten_algemeen[s])), h("th", { class: "getal" }, "Afgehandeld"))), h("tbody", {}, rijen)))];
}

async function beheerBezoekers(bk) {
  const NS = "http://www.w3.org/2000/svg";
  const sv = (tag, a = {}, ...kids) => { const e = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(a)) e.setAttribute(k, v); e.append(...kids); return e; };
  const bereik = h("select", { style: { width: "auto" } }, [[30, "Laatste 30 dagen"], [90, "Laatste 90 dagen"], [365, "Laatste jaar"]].map(([v, l]) => h("option", { value: v }, l)));
  const plek = h("div", {});
  const titelVan = (k) => { const b = bk.boeken.find((x) => x.sleutel === k); return b ? `${pakketKort(b)} · ${b.titel}` : k; };
  const dag = (s) => new Date(s + "T12:00:00").toLocaleDateString("nl-BE", { day: "numeric", month: "short" });
  async function laad() {
    const d = await api("GET", `beheer/bezoekers?dagen=${bereik.value}`);
    const som = (k) => d.dagen.reduce((a, x) => a + x[k], 0);
    const vandaag = d.dagen[d.dagen.length - 1];
    const W = 720, H = 220, L = 34, B = 24, T = 10, n = d.dagen.length;
    const top = Math.ceil(Math.max(4, ...d.dagen.map((x) => x.weergaven)) / 4) * 4, bw = (W - L) / n;
    const y = (v) => T + (H - T - B) * (1 - v / top);
    const g = sv("svg", { viewBox: `0 0 ${W} ${H}`, class: "bezoek-grafiek", role: "img", "aria-label": `Bezoekers per dag, laatste ${n} dagen` });
    for (let i = 0; i <= 4; i++) {
      const v = top * i / 4;
      g.append(sv("line", { x1: L, x2: W, y1: y(v), y2: y(v), class: "raster" }), sv("text", { x: L - 6, y: y(v) + 4, "text-anchor": "end", class: "as" }, Math.round(v)));
    }
    d.dagen.forEach((x, i) => {
      const bx = L + i * bw + bw * .12, w = bw * .76;
      g.append(sv("g", {}, sv("title", {}, `${dag(x.dag)}: ${x.bezoekers} bezoekers, ${x.weergaven} weergaven`),
        sv("rect", { x: bx, y: y(x.weergaven), width: w, height: Math.max(0, y(0) - y(x.weergaven)), class: "staaf-w" }),
        sv("rect", { x: bx, y: y(x.bezoekers), width: w, height: Math.max(0, y(0) - y(x.bezoekers)), class: "staaf-b" }),
        sv("rect", { x: L + i * bw, y: T, width: bw, height: H - T - B, fill: "transparent" })));
    });
    const stap = Math.ceil(n / 6);
    d.dagen.forEach((x, i) => { if ((n - 1 - i) % stap === 0) g.append(sv("text", { x: L + i * bw + bw / 2, y: H - 6, "text-anchor": "middle", class: "as" }, dag(x.dag))); });
    const boekTabel = (rs) => {
      const per = {};
      for (const r of rs) { const p = per[r.sleutel] ??= { lezers: 0, weergaven: 0, ed: {} }; p.lezers += r.lezers; p.weergaven += r.weergaven; p.ed[r.editie] = r.lezers; }
      const lijst = Object.entries(per).sort((a, b) => b[1].lezers - a[1].lezers || b[1].weergaven - a[1].weergaven);
      if (!lijst.length) return h("p", { class: "leeg" }, "Nog geen handboek geopend in deze periode.");
      return h("div", { class: "tabel-houder", style: { marginBottom: "12px" } }, h("table", {}, h("thead", {}, h("tr", {}, h("th", {}, "Geopende handboeken"), h("th", { class: "getal" }, "Lezers"), h("th", { class: "getal" }, "Weergaven"), h("th", {}, "Per editie"))),
        h("tbody", {}, lijst.map(([k, p]) => h("tr", {}, h("td", {}, titelVan(k)), h("td", { class: "getal" }, h("b", {}, p.lezers)), h("td", { class: "getal" }, p.weergaven),
          h("td", { class: "zacht klein" }, Object.entries(p.ed).map(([e, n]) => `${S.menu.edities[e] || e} ${n}`).join(" · ")))))));
    };
    const tegel = (t, w) => h("div", { class: "tegel" }, h("b", {}, w), h("span", { class: "zacht klein" }, t));
    plek.replaceChildren(
      h("div", { class: "tegels" }, tegel("bezoekers vandaag", vandaag.bezoekers), tegel(`bezoekers, ${n} dagen`, som("bezoekers")),
        tegel(`weergaven, ${n} dagen`, som("weergaven")), tegel("bezoekers sinds de start", d.totaal.bezoekers)),
      h("div", { class: "legende klein" }, h("span", { class: "sw sw-b" }), "bezoekers", h("span", { class: "sw sw-w" }), "weergaven (pagina's geladen)"),
      h("div", { class: "grafiek-houder" }, g),
      boekTabel(d.boeken),
      h("p", { class: "zacht klein" }, `Een bezoeker is een uniek toestel per dag. Er worden geen koekjes gebruikt en geen IP-adressen bewaard, enkel de aantallen per dag${d.totaal.sinds ? `, sinds ${dag(d.totaal.sinds)}` : ""}. Lezers worden per handboek en editie geteld. Beheerders en robots tellen niet mee.`));
  }
  bereik.addEventListener("change", () => laad().catch((e) => melding(e.message, true)));
  await laad();
  return [h("div", { class: "balk" }, bereik), plek];
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
    const sleutelNaam = h("input", { type: "text", placeholder: "Voor wie, bv. Ingmar", maxlength: 100, style: { maxWidth: "320px" } });
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
            h("button", { class: "knop-tekst klein", type: "button", onclick: poging(async () => { await api("PATCH", `beheer/gebruiker/${g.id}`, { actief: !g.actief }); teken(); }) }, g.actief ? "Blokkeer" : "Activeer")])))))),
      h("h2", { class: "sectie-kop", style: { marginTop: "28px" } }, "Sleutels voor Claude"),
      h("p", { class: "zacht klein", style: { marginBottom: "12px" } }, "Wie feedback verwerkt met Claude Code, heeft geen account nodig: geef die een geheime sleutel. Daarmee haalt Claude de feedback op (zonder namen), zet het een status en antwoordt het de leerkracht als team, onder de naam van de sleutel."),
      h("div", { class: "balk", style: { marginBottom: "14px" } }, sleutelNaam,
        h("button", { class: "knop", type: "button", onclick: poging(async () => {
          const naam = sleutelNaam.value.trim();
          if (!naam) { sleutelNaam.focus(); return melding("Geef de sleutel een naam: voor wie is hij?", true); }
          const r = await api("POST", "beheer/sleutel", { naam });
          dialoog(`Sleutel voor ${naam}`, [
            h("p", {}, "Je ziet de sleutel maar één keer. Stuur hem langs een veilige weg door (niet in een publiek kanaal of in de repo)."),
            h("p", {}, "Bewaar hem in ", h("code", {}, "~/.axiomath-sleutel"), " en gebruik ", h("code", {}, "Website/leerkrachten/feedback.py"), " of in Claude Code ", h("code", {}, "/feedback-verwerken"), "."),
            h("p", {}, h("code", { style: { fontSize: "1rem", wordBreak: "break-all" } }, r.sleutel))],
            [h("button", { class: "knop", type: "button", onclick: () => kopieer(r.sleutel) }, "Kopieer"), h("button", { class: "knop licht", value: "x" }, "Sluit")]);
          teken();
        }) }, "Maak sleutel")),
      d.sleutels.length ? h("div", { class: "codes" }, d.sleutels.map((s) => h("div", { class: "code" }, h("b", {}, s.naam),
        h("span", { class: "zacht klein" }, `sinds ${datum(s.aangemaakt)}`), h("span", { class: "ruimte" }),
        h("span", { class: "zacht klein" }, s.gebruikt ? `gebruikt ${wanneer(s.gebruikt)}` : "nog niet gebruikt"),
        h("button", { class: "knop-tekst klein", type: "button", onclick: poging(async () => { await api("DELETE", `beheer/sleutel/${s.id}`); teken(); }) }, "Intrekken"))))
        : h("p", { class: "zacht klein" }, "Nog geen sleutels."));
  }
  await teken();
  return plek;
}

/* Dekking: welke koepels, finaliteiten, leerjaren en richtingen al leerkrachten hebben die meelezen (Mijn lesopdracht).
   Zonder namen. De tabel toont ook de richtingen zonder iemand, want daar zoeken we collega's. */
/* Welke handboeken een leerkracht in de klas heeft: een raster met per pakket een rij en per rubriek een kolom, een
   bolletje per handboek. Ingekleurd (in de kleur van de rubriek) als minstens één leerkracht een richting heeft die het
   handboek volgt (verplicht, keuze, uitbreiding of extra) in zijn koepel, en les geeft in het jaar van het handboek
   (zonder jaar: een jaar van zijn graad). Een koepel zonder eigen indeling (OVSG, POV, andere) telt met alle koepels.
   Beheer telt zelf uit de lesopdrachten (dekkingTellen); Over krijgt alleen de aantallen van de server (meelezers() in lib.php). */
const RUBRIEK_KLEUR = { Analyse: "analyse", Algebra: "algebra", Meetkunde: "meetkunde", "Discrete wiskunde": "discreet", "Data en onzekerheid": "data" };
function dekkingTellen(ps) {
  const d = S.boeken, per = d.koepels?.graden || {};
  const jarenVan = (b) => { const j = (String(b.jaar || b.jaar_voorstel || "").match(/[3-6]/g) || []).map(Number); return j.length ? j : String(b.graad) === "3" ? [5, 6] : [3, 4]; };
  const volgt = (x, sl) => x && ["verplicht", "keuze", "uitbreiding", "extra"].some((s) => (x[s] || []).some((i) => i.sleutel === sl));
  const lezers = (b) => {
    const koepels = per[b.graad] || {}, jaren = jarenVan(b);
    return ps.filter((p) => p.jaren.some((j) => jaren.includes(j)) && p.richtingen.some((s) => {
      const [g, naam] = s.split("|");
      if (String(g) !== String(b.graad)) return false;
      return (koepels[p.koepel] ? [koepels[p.koepel]] : Object.values(koepels)).some((l) => volgt(l[naam], b.sleutel));
    })).length;
  };
  return new Map(d.boeken.map((b) => [b.sleutel, lezers(b)]));
}
function dekkingRaster(n, { titel = "Handboeken met een leerkracht", uitleg, klasse = "" } = {}) {
  const d = S.boeken;
  const kolommen = [...Object.keys(RUBRIEK_KLEUR), "Andere"].filter((r) => d.boeken.some((b) => (RUBRIEK_KLEUR[b.rubriek] ? b.rubriek : "Andere") === r));
  const gedekt = d.boeken.filter((b) => n.get(b.sleutel)).length;
  let i = 0;
  const stip = (b) => {
    const k = n.get(b.sleutel) || 0;
    return h("a", { class: `dek-stip${k ? " aan" : ""}`, href: `#/boek/${sleutelUrl(b.sleutel)}`, style: `--r:var(--r-${RUBRIEK_KLEUR[b.rubriek] || "andere"});--i:${i++}`,
      "data-tip": `${b.titel}: ${k ? `${k} ${k === 1 ? "leerkracht" : "leerkrachten"}` : "nog niemand"}`, "aria-label": `${b.titel}: ${k || "geen"} leerkrachten` });
  };
  let vorige = null;
  return h("section", { class: `kaart dek-raster-kaart ${klasse}` },
    titel && h("h3", { class: "sectie-kop" }, titel, h("span", { class: "zacht klein", style: { fontWeight: 400 } }, ` · ${gedekt} van ${d.boeken.length}`)),
    h("p", { class: "zacht klein" }, uitleg || "Een bolletje per handboek. Ingekleurd als minstens één leerkracht een richting heeft die het handboek volgt, in zijn koepel en in het jaar van het handboek. Grijs: nog niemand. Wijs een bolletje aan voor de titel, klik om het handboek te openen."),
    h("div", { class: "dek-voortgang", role: "img", "aria-label": `${gedekt} van ${d.boeken.length} handboeken` }, h("i", { style: { width: `${100 * gedekt / Math.max(1, d.boeken.length)}%` } })),
    h("div", { class: "tabel-houder" }, h("table", { class: "dek-raster" },
      h("thead", {}, h("tr", {}, h("th", {}, "Pakket"), kolommen.map((r) => h("th", {}, h("span", { class: "dek-kolkop", style: `--r:var(--r-${RUBRIEK_KLEUR[r] || "andere"})` }, r))))),
      h("tbody", {}, d.pakketten.flatMap((p) => {
        const lijst = d.boeken.filter((b) => b.pakketid === p.id);
        if (!lijst.length) return [];
        const kop = graadFin(p), rijen = [];
        if (kop !== vorige) rijen.push(h("tr", { class: "dek-groep" }, h("th", { colspan: kolommen.length + 1 }, kop[0].toUpperCase() + kop.slice(1))));
        vorige = kop;
        const aan = lijst.filter((b) => n.get(b.sleutel)).length;
        rijen.push(h("tr", {}, h("th", { scope: "row" }, h("b", {}, p.nr), ` ${p.kort || ""}`, h("span", { class: "zacht klein" }, ` ${aan}/${lijst.length}`)),
          kolommen.map((r) => h("td", {}, h("div", { class: "dek-stippen" }, lijst.filter((b) => (RUBRIEK_KLEUR[b.rubriek] ? b.rubriek : "Andere") === r).map(stip))))));
        return rijen;
      })))),
    h("div", { class: "dek-legende zacht klein" }, h("span", {}, h("i", { class: "dek-stip aan", style: "--r:var(--acc)" }), "met een leerkracht (kleur van de rubriek)"), h("span", {}, h("i", { class: "dek-stip" }), "nog niemand")));
}
const dekkingBoeken = (ps) => dekkingRaster(dekkingTellen(ps));

async function beheerDekking() {
  const o = await api("GET", "beheer/dekking");
  const ps = o.profielen;
  const telOp = (sleutels, waarden) => Object.fromEntries(sleutels.map((s) => [s, ps.filter((p) => waarden(p).includes(s)).length]));
  const balken = (titel, tel, labels) => {
    const max = Math.max(1, ...Object.values(tel));
    return h("section", { class: "kaart dekking-blok" }, h("h3", { class: "sectie-kop" }, titel),
      Object.entries(tel).map(([s, n]) => h("div", { class: "balk-rij" }, h("span", { class: "balk-label" }, labels[s] || s),
        h("span", { class: "balk-spoor" }, h("i", { style: { width: `${100 * n / max}%` } })), h("b", { class: "getal" }, n))));
  };
  const finLabels = Object.fromEntries(Object.entries(FINALITEITEN).map(([k, l]) => [k, l[0].toUpperCase() + l.slice(1)]));
  const koepels = Object.keys(o.koepels);
  const richtingen = alleRichtingen(null);  // alle koepels samen
  const per = new Map([...richtingen.keys()].map((s) => [s, Object.fromEntries(koepels.map((k) => [k, 0]))]));
  for (const p of ps) for (const s of p.richtingen) { if (!per.has(s)) per.set(s, Object.fromEntries(koepels.map((k) => [k, 0]))); per.get(s)[p.koepel]++; }
  let toon = "alle";
  const tabel = h("div");
  const max = Math.max(1, ...[...per.values()].flatMap((x) => Object.values(x)));
  const tekenTabel = () => {
    const groepen = new Map();
    for (const [s, x] of per) {
      const totaal = Object.values(x).reduce((a, b) => a + b, 0);
      if ((toon === "leeg" && totaal) || (toon === "gedekt" && !totaal)) continue;
      const kop = graadFin({ graad: s.split("|")[0], finaliteit: richtingen.get(s) || "D" });
      if (!groepen.has(kop)) groepen.set(kop, []);
      groepen.get(kop).push([s, x, totaal]);
    }
    const cel = (n) => h("td", { class: "getal" }, n ? h("span", { class: "warm", style: { background: `color-mix(in srgb, var(--acc) ${15 + 55 * n / max}%, transparent)` } }, n) : h("span", { class: "zacht" }, "·"));
    // per graad, dan doorstroom, dubbele finaliteit, arbeidsmarkt
    const orde = (kop) => kop.slice(0, 1) + ["doorstroom", "dubbele", "arbeidsmarkt"].findIndex((f) => kop.includes(f));
    tabel.replaceChildren(...[...groepen].sort(([a], [b]) => orde(a).localeCompare(orde(b))).map(([kop, rs]) => {
      const alleInGroep = [...per].filter(([s]) => graadFin({ graad: s.split("|")[0], finaliteit: richtingen.get(s) || "D" }) === kop);
      const gedekt = alleInGroep.filter(([, x]) => Object.values(x).some(Boolean)).length;
      return h("details", { class: "dekking-groep", open: true },
        h("summary", { class: "sectie-kop" }, kop[0].toUpperCase() + kop.slice(1), h("span", { class: "zacht klein" }, ` · ${gedekt} van ${alleInGroep.length} richtingen met een leerkracht`)),
        h("div", { class: "tabel-houder" }, h("table", {}, h("thead", {}, h("tr", {}, h("th", {}, "Richting"), koepels.map((k) => h("th", { class: "getal" }, k === "andere" ? "Andere" : o.koepels[k].replace(/ \(.*\)/, ""))), h("th", { class: "getal" }, "Samen"))),
          h("tbody", {}, rs.sort(([a], [b]) => a.localeCompare(b, "nl")).map(([s, x, totaal]) => h("tr", { class: totaal ? "" : "leeg-rij" },
            h("td", {}, s.split("|")[1]), koepels.map((k) => cel(x[k])), h("td", { class: "getal" }, h("b", {}, totaal || ""))))))));
    }));
    if (!tabel.childElementCount) tabel.append(h("p", { class: "leeg" }, "Geen richtingen in deze selectie."));
  };
  tekenTabel();
  const nog = Math.max(0, o.accounts - ps.length - o.uitgesteld);
  const opm = ps.filter((p) => p.opmerking);
  return [h("p", {}, "Wat leerkrachten invullen bij Mijn lesopdracht, zonder namen. Een leerkracht kan meer jaren, finaliteiten en richtingen kiezen, dus de aantallen tellen niet op tot het aantal leerkrachten."),
    h("div", { class: "tellers" },
      h("div", { class: "teller" }, h("b", {}, o.accounts), h("span", {}, "actieve accounts")),
      h("div", { class: "teller" }, h("b", {}, ps.length), h("span", {}, "lesopdracht ingevuld")),
      h("div", { class: "teller" }, h("b", {}, o.uitgesteld), h("span", {}, "later gekozen")),
      h("div", { class: "teller" }, h("b", {}, nog), h("span", {}, "nog niet gezien"))),
    h("div", { class: "dekking-rij" },
      balken("Koepel", telOp(koepels, (p) => [p.koepel]), Object.fromEntries(koepels.map((k) => [k, { KOV: "KOV", andere: "Andere" }[k] || o.koepels[k]]))),
      balken("Finaliteit", telOp(Object.keys(FINALITEITEN), (p) => p.finaliteiten), finLabels),
      balken("Leerjaar", telOp(Object.keys(JAREN).map(Number), (p) => p.jaren), JAREN)),
    dekkingBoeken(ps),
    h("div", { class: "balk" }, h("span", { class: "zacht klein" }, "Richtingen:"),
      h("select", { "aria-label": "Welke richtingen", onchange: (e) => { toon = e.target.value; tekenTabel(); } },
        h("option", { value: "alle" }, "Alle richtingen"), h("option", { value: "leeg" }, "Alleen zonder leerkracht"), h("option", { value: "gedekt" }, "Alleen met een leerkracht"))),
    tabel,
    opm.length ? h("section", { class: "kaart", style: { marginTop: "24px" } }, h("h3", { class: "sectie-kop" }, "Opmerkingen bij de lesopdracht"),
      h("ul", {}, opm.map((p) => h("li", {}, p.opmerking, h("span", { class: "zacht klein" }, ` (${o.koepels[p.koepel] || p.koepel}, ${datum(p.ingevuld)})`))))) : null].filter(Boolean);
}

/* Een beetje Markdown uit TODO.md: alinea's, opsommingen, tabellen, **vet**, `code` en links. Alles als tekstknopen,
   nooit als HTML. Een link naar een bestand in de repo wordt gewone tekst. */
function mdInline(s) {
  const uit = [];
  let i = 0;
  for (const m of s.matchAll(/\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(<?([^)>]+)>?\)/g)) {
    uit.push(s.slice(i, m.index));
    if (m[1] != null) uit.push(h("strong", {}, mdInline(m[1])));
    else if (m[2] != null) uit.push(h("code", {}, m[2]));
    else uit.push(/^https?:/.test(m[4]) ? h("a", { href: m[4], target: "_blank", rel: "noopener" }, m[3]) : m[3]);
    i = m.index + m[0].length;
  }
  uit.push(s.slice(i));
  return uit;
}
function mdBlokken(tekst) {
  const uit = [];
  let lijst = null, tabel = null;
  for (const lijn of tekst.split("\n")) {
    const li = lijn.match(/^\s*(?:[-*]|\d+\.)\s+(.*)$/);
    if (/^\s*\|/.test(lijn)) {
      lijst = null;
      const cellen = lijn.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      if (cellen.every((c) => /^:?-+:?$/.test(c) || c === "")) continue;
      if (!tabel) { tabel = h("tbody"); uit.push(h("div", { class: "tabel-houder" }, h("table", {}, h("thead", {}, h("tr", {}, cellen.map((c) => h("th", {}, mdInline(c))))), tabel))); }
      else tabel.append(h("tr", {}, cellen.map((c) => h("td", {}, mdInline(c)))));
    } else if (li) {
      tabel = null;
      if (!lijst) uit.push(lijst = h("ul"));
      lijst.append(h("li", {}, mdInline(li[1])));
    } else if (lijn.trim()) {
      tabel = null;
      if (lijst && /^\s/.test(lijn)) lijst.lastChild.append(" ", ...mdInline(lijn.trim()));
      else { lijst = null; uit.push(h("p", {}, mdInline(lijn.trim()))); }
    } else { lijst = null; tabel = null; }
  }
  return uit;
}

/* Sleep een <li> aan zijn greep (.greep) naar een andere plaats; muis, pen en vinger (pointer events), of met de
   pijltjes op de greep. bijWissel() komt na elke nieuwe volgorde. */
function sleepbaar(lijst, bijWissel) {
  const kalm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const schuif = (el, voor) => {  // laat een buur naar zijn nieuwe plaats glijden in plaats van te springen
    const na = el.getBoundingClientRect().top;
    if (!kalm && voor !== na) el.animate([{ transform: `translateY(${voor - na}px)` }, { transform: "none" }], { duration: 160, easing: "cubic-bezier(0.23, 1, 0.32, 1)" });
  };
  // Verplaats de buur, niet het gesleepte item: een element dat de DOM verlaat, verliest zijn pointer capture.
  const wissel = (li, buur, ervoor) => {
    const voor = buur.getBoundingClientRect().top;
    if (buur === li.previousElementSibling) lijst.insertBefore(buur, li.nextElementSibling);
    else if (buur === li.nextElementSibling) lijst.insertBefore(buur, li);
    else lijst.insertBefore(li, ervoor ? buur : buur.nextElementSibling);  // Home en End, met het toetsenbord
    schuif(buur, voor);
  };
  lijst.addEventListener("pointerdown", (e) => {
    const greep = e.target.closest(".greep");
    if (!greep || e.button !== 0) return;
    const li = greep.closest("li");
    e.preventDefault();
    greep.setPointerCapture(e.pointerId);
    li.classList.add("sleept");
    const begin = [...lijst.children];
    let y0 = e.pageY;
    const plaats = () => li.offsetTop;
    const beweeg = (ev) => {
      for (;;) {
        const vorige = li.previousElementSibling, volgende = li.nextElementSibling;
        const midden = (el) => { const r = el.getBoundingClientRect(); return r.top + r.height / 2; };
        const p0 = plaats();
        if (vorige && ev.clientY < midden(vorige)) wissel(li, vorige, true);
        else if (volgende && ev.clientY > midden(volgende)) wissel(li, volgende, false);
        else break;
        y0 += plaats() - p0;
      }
      li.style.transform = `translateY(${ev.pageY - y0}px)`;
      if (ev.clientY < 70) scrollBy(0, -12); else if (ev.clientY > innerHeight - 70) scrollBy(0, 12);
    };
    const los = () => {
      greep.removeEventListener("pointermove", beweeg);
      li.classList.remove("sleept");
      const voor = li.getBoundingClientRect().top;
      li.style.transform = "";
      schuif(li, voor);
      if ([...lijst.children].some((x, i) => x !== begin[i])) bijWissel();
    };
    greep.addEventListener("pointermove", beweeg);
    greep.addEventListener("pointerup", los, { once: true });
    greep.addEventListener("pointercancel", los, { once: true });
  });
  lijst.addEventListener("keydown", (e) => {
    const greep = e.target.closest(".greep");
    if (!greep || !["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const li = greep.closest("li");
    const buur = { ArrowUp: li.previousElementSibling, ArrowDown: li.nextElementSibling, Home: lijst.firstElementChild, End: lijst.lastElementChild }[e.key];
    if (!buur || buur === li) return;
    wissel(li, buur, e.key === "ArrowUp" || e.key === "Home");
    greep.focus();
    bijWissel();
  });
}

async function beheerWerkplan() {
  let d = await api("GET", "beheer/werkplan");
  const lijst = h("ol", { class: "werkplan" });
  const stand = h("p", { class: "zacht klein", "aria-live": "polite" });
  const toonStand = () => { stand.textContent = d.bewaard ? `Volgorde bewaard door ${d.bewaard.naam}, ${wanneer(d.bewaard.tijd)}.` : "Nog geen volgorde gekozen: dit is de volgorde van TODO.md."; };

  // Na elke wijziging tekent de lijst opnieuw uit het antwoord van de server; wat open stond, blijft open.
  const teken = () => {
    const open = new Set([...lijst.querySelectorAll("details[open]")].map((x) => x.dataset.open));
    lijst.replaceChildren(...d.items.map((it) => kaart(it, open)));
    toonStand();
  };
  const doe = (methode, pad, body, tekst) => poging(async () => { d = await api(methode, `beheer/werkplan${pad}`, body); teken(); if (tekst) melding(tekst); })();

  let bezig = null, opnieuw = false;
  const bewaar = poging(async () => {
    if (bezig) { opnieuw = true; return; }  // na de lopende vraag nog één keer, met de jongste volgorde
    do {
      opnieuw = false;
      bezig = api("POST", "beheer/werkplan", { volgorde: [...lijst.children].map((li) => li.dataset.sleutel) });
      try { d = await bezig; } finally { bezig = null; }
    } while (opnieuw);
    for (const li of lijst.children) li.querySelector(".wp-nieuw")?.remove();
    toonStand();
  });
  sleepbaar(lijst, bewaar);

  // Een formulier voor een eigen TODO: nieuw (bovenaan) of een bestaande bewerken.
  function formulier(it, klaar) {
    const titel = h("input", { type: "text", maxlength: 200, value: it?.titel || "", placeholder: "Wat moet er gebeuren?", required: true });
    const tekst = h("textarea", { maxlength: 10000, placeholder: "Meer uitleg (mag Markdown: - opsomming, **vet**, `code`)" }, it?.tekst || "");
    const ingmar = h("input", { type: "checkbox", checked: it ? it.ingmar : false });
    return h("form", { class: "wp-form", onsubmit: (e) => {
      e.preventDefault();
      if (!titel.value.trim()) return titel.focus();
      if (it) doe("PATCH", `/eigen/${it.id}`, { titel: titel.value, tekst: tekst.value }, "TODO aangepast.");
      else doe("POST", "/nieuw", { titel: titel.value, tekst: tekst.value, ingmar: ingmar.checked }, "TODO bovenaan gezet.");
      klaar();
    } },
      h("label", { class: "veld" }, "Titel", titel),
      h("label", { class: "veld" }, "Uitleg", tekst),
      !it && h("label", { class: "chip-vink" }, ingmar, "Voor Ingmar"),
      h("div", { class: "wp-acties" }, h("button", { class: "knop klein", type: "submit" }, it ? "Bewaar" : "Zet bovenaan"),
        h("button", { class: "knop-tekst klein", type: "button", onclick: klaar }, "Annuleer")));
  }

  function kaart(it, open) {
    const inhoud = h("div", { class: "wp-inhoud" });
    const blok = (soort, label, ...kinderen) => h("details", { class: "wp-tekst", "data-open": `${soort}|${it.sleutel}`, open: open.has(`${soort}|${it.sleutel}`) }, h("summary", {}, label), kinderen);
    const ingmar = h("button", { type: "button", class: "wp-ingmar", "aria-pressed": String(it.ingmar), title: it.ingmar ? "Voor Ingmar: klik om dat af te zetten" : "Niet voor Ingmar: klik om hem aan Ingmar te geven",
      onclick: () => doe("POST", "/ingmar", { sleutel: it.sleutel, ingmar: !it.ingmar }) }, it.ingmar ? icoon("vink") : null, "Ingmar");
    const tekst = mdBlokken(it.tekst);

    const veld = h("textarea", { maxlength: 5000, placeholder: "Je feedback op deze TODO …" });
    const reacties = blok("feedback", it.reacties.length ? `Feedback (${it.reacties.length})` : "Feedback geven",
      h("div", { class: "reacties" },
        it.reacties.map((r) => h("div", { class: "reactie team" },
          h("b", {}, r.naam, " · ", wanneer(r.tijd)),
          r.van_mij && h("button", { class: "knop-tekst klein", type: "button", style: { float: "right" }, onclick: () => confirm("Deze feedback verwijderen?") && doe("DELETE", `/reactie/${r.id}`) }, "Verwijder"),
          h("div", { class: "fb-tekst" }, r.tekst))),
        h("div", { class: "reageer" }, veld, h("button", { class: "knop klein", type: "button", onclick: () => veld.value.trim() && doe("POST", "/reactie", { sleutel: it.sleutel, tekst: veld.value }, "Feedback bewaard.") }, "Plaats"))));

    const eigenKnoppen = it.eigen && h("div", { class: "wp-acties" },
      h("span", { class: "zacht klein" }, `Op de site geschreven door ${it.door}, ${datum(it.aangemaakt)}`),
      h("button", { class: "knop-tekst klein", type: "button", onclick: () => inhoud.replaceChildren(formulier(it, teken)) }, "Bewerk"),
      h("button", { class: "knop-tekst klein", type: "button", onclick: () => confirm(`"${it.titel}" verwijderen, met zijn feedback?`) && doe("DELETE", `/eigen/${it.id}`, undefined, "TODO verwijderd.") }, "Verwijder"));

    inhoud.append(...[
      h("div", { class: "wp-kop" }, h("span", { class: "wp-titel" }, it.titel),
        it.eigen && h("span", { class: "wp-label" }, "eigen"), it.nieuw && h("span", { class: "wp-label wp-nieuw" }, "nieuw"), h("span", { class: "ruimte" }), ingmar),
      it.groep && h("div", { class: "zacht klein" }, it.groep),
      tekst.length > 0 && blok("uitleg", "Wat er nog moet gebeuren", tekst),
      reacties, eigenKnoppen].filter(Boolean));
    return h("li", { "data-sleutel": it.sleutel },
      h("button", { type: "button", class: "greep", title: "Sleep, of gebruik de pijltjes", "aria-label": `Verplaats: ${it.titel} (pijltje omhoog of omlaag)` }, icoon("greep")),
      inhoud);
  }

  const nieuwPlek = h("div", {});
  const nieuwKnop = h("button", { class: "knop klein", type: "button", onclick: () => {
    nieuwKnop.hidden = true;
    nieuwPlek.replaceChildren(h("div", { class: "kaart wp-nieuwe" }, h("h2", { class: "sectie-kop" }, "Nieuwe TODO"),
      formulier(null, () => { nieuwPlek.replaceChildren(); nieuwKnop.hidden = false; })));
    nieuwPlek.querySelector("input").focus();
  } }, icoon("plus"), "Nieuwe TODO");
  teken();
  return [h("p", {}, "De grote TODO's uit ", h("code", {}, "TODO.md"), " en die je hier zelf schrijft, de belangrijkste bovenaan. Sleep ze aan de greep in de volgorde die je wil; de site bewaart alles meteen, voor het hele team. Een nieuwe TODO uit ", h("code", {}, "TODO.md"), " komt achteraan (na ", h("code", {}, "maak.py"), " en ", h("code", {}, "uitrol.py"), "). Met de sleutel voor Claude leest Claude dezelfde volgorde, de keuze voor Ingmar en de feedback."),
    h("div", { class: "balk" }, nieuwKnop, stand), nieuwPlek, lijst];
}

async function beheerPdf(d) {
  const rijen = d.boeken.filter((b) => b.edities.length);
  return [h("section", { class: "kaart", style: { marginBottom: "24px" } }, h("h2", { class: "sectie-kop" }, "Nieuwe PDF's online zetten"),
    h("p", { class: "zacht" }, "De site bewaart elke PDF als een vaste versie, zodat een opmerking bij haar pagina blijft. Bouw een handboek opnieuw met maak-pdf.py en draai daarna in Website/leerkrachten ",
      h("code", {}, "maak.py"), " en ", h("code", {}, "uitrol.py"), ". Leerkrachten lezen voortaan de nieuwste versie. Open opmerkingen verhuizen mee naar die versie (herplaats.py, na elke uitrol); verwerkte en afgekeurde blijven op de versie waar ze gemaakt zijn.")),
    h("div", { class: "tabel-houder" }, h("table", {}, h("thead", {}, h("tr", {}, h("th", {}, "Handboek"), S.menu && Object.values(S.menu.edities).map((l) => h("th", {}, l)))),
      h("tbody", {}, rijen.map((b) => h("tr", {}, h("td", {}, `${pakketKort(b)} · ${b.titel}`),
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
    else if (delen[0] === "over") await toonOver();
    else if (delen[0] === "bereik") await toonBereik();
    else if (delen[0] === "profiel" && S.ik) await toonProfiel(q);
    else if (delen[0] === "voortgang") await toonVoortgang();
    else if (delen[0] === "plannen") toonPlannen();
    else if (delen[0] === "privacy") toonPrivacy();
    else if (delen[0] === "beheer" && S.ik.rol === "beheerder") await toonBeheer(delen[1]);
    else await toonKast();
  } catch (e) {
    if (!e.welkom) scherm("", h("p", { class: "leeg" }, e.message, " ", h("a", { href: "#/" }, "Naar de handboeken")));
  }
}

async function start() {
  S.menu ??= await api("GET", "menu");
  S.ik = await api("GET", "ik");
  api("POST", "bezoek").catch(() => {});  // bezoekersteller, zie lib.php
  S.boeken = null;  // met of zonder account: een andere lijst
  if (!S.ik && location.hash.includes("code=")) return toonWelkom();
  if (S.ik && (location.hash.includes("code=") || location.hash.startsWith("#/aanmelden"))) history.replaceState(null, "", "#/");
  await route();
  // wie de lesopdracht nog niet invulde (en ze niet uitstelde), krijgt de vraag één keer per bezoek
  if (S.ik?.profiel === "nodig" && !location.hash.startsWith("#/profiel") && !S.profielGevraagd) { S.profielGevraagd = true; vraagProfiel(); }
}
addEventListener("hashchange", route);
$app.append(h("p", { class: "laden" }, "Laden …"));
start().catch((e) => {
  if (navigator.onLine) return melding(e.message, true);
  // offline, bv. in de app op een gsm: de app zelf komt uit de cache (sw.js), de handboeken niet
  $app.replaceChildren(h("p", { class: "leeg", style: { margin: "48px 16px" } }, "Je bent offline. Axiomath heeft internet nodig om de handboeken te tonen. ",
    h("span", { style: { display: "block", marginTop: "14px" } }, h("button", { class: "knop klein", type: "button", onclick: () => location.reload() }, "Probeer opnieuw"))));
});
