/* Axiomath voor leerkrachten: de pagina #/plannen. Wat we nog willen bouwen, met van elk plan een klein voorproefje
   dat echt werkt. De opgaven zijn eigen voorbeelden die hier met willekeurige getallen gemaakt worden; ze komen niet uit
   de handboeken. Dit bestand laadt vóór app.js en gebruikt er h(), scherm(), melding() en icoon() uit.
   Zoals in app.js komt alle tekst via textContent op de pagina, nooit via innerHTML. */
"use strict";

// --- wiskunde schrijven zonder KaTeX ----------------------------------------------------------------
const W = {
  getal(n) {  // decimale komma en een echt minteken
    const r = Math.round(n * 1000) / 1000;
    return (r < 0 ? "−" : "") + String(Math.abs(r)).replace(".", ",");
  },
  inv(n) { return n < 0 ? "(" + W.getal(n) + ")" : W.getal(n); },  // getal dat je invult: negatief tussen haakjes
  v(t) { return h("i", { class: "wv" }, t); },                    // een veranderlijke, cursief
  macht(grond, exp) { return [grond, h("sup", {}, exp)]; },
  /* Een veelterm uit [coëfficiënt, exponent]-paren, zonder nulterm, zonder 1x en met + of − ertussen. */
  veelterm(termen, x = "x") {
    const t = termen.filter(([c]) => c !== 0);
    if (!t.length) return ["0"];
    return t.map(([c, e], i) => {
      const teken = i === 0 ? (c < 0 ? "−" : "") : (c < 0 ? " − " : " + ");
      const a = Math.abs(c);
      const coef = e === 0 ? W.getal(a) : (a === 1 ? "" : W.getal(a));
      const deel = e === 0 ? [] : e === 1 ? [W.v(x)] : [W.v(x), h("sup", {}, String(e))];
      return [teken, coef, deel];
    });
  },
  /* Een veelterm als tekst om voor te lezen of als aria-label. */
  veeltermTekst(termen, x = "x") {
    const t = termen.filter(([c]) => c !== 0);
    if (!t.length) return "0";
    return t.map(([c, e], i) => {
      const a = Math.abs(c);
      const teken = i === 0 ? (c < 0 ? "min " : "") : (c < 0 ? " min " : " plus ");
      const coef = e === 0 ? String(a).replace(".", ",") : (a === 1 ? "" : String(a).replace(".", ",") + " ");
      const deel = e === 0 ? "" : e === 1 ? x : e === 2 ? x + " kwadraat" : `${x} tot de ${e}de`;
      return teken + coef + deel;
    }).join("");
  },
  /* De bepaalde integraal van a tot b, met de grenzen boven elkaar. */
  integraal(a, b, ...integrand) {
    return h("span", { class: "integraal" }, h("span", { class: "int-teken" }, "∫"),
      h("span", { class: "int-grenzen" }, h("span", {}, b), h("span", {}, a)), h("span", {}, integrand, " d", W.v("x")));
  },
  f(naam, x = "x") { return [W.v(naam), "(", W.v(x), ")"]; },
  wis(...k) { return h("span", { class: "wis" }, k); },
};

/* replaceChildren, maar lijsten worden platgemaakt en null of false valt weg (zoals in h()). */
function vul(el, ...k) { el.replaceChildren(...k.flat(Infinity).filter((x) => x != null && x !== false)); }

/* Een getal of een eenvoudige uitdrukking zoals 3/4, −2 of 2,5 lezen. Geeft null als het niet lukt. */
function leesGetal(tekst) {
  try { const f = leesFormule(tekst, false); const w = f(0, 0); return Number.isFinite(w) ? w : null; } catch { return null; }
}

/* Een formule in x lezen: + − * / ^, haakjes, decimale komma, 2x, x² en een constante C (of c, k).
   Geeft een functie (x, C) => waarde, of gooit een fout met een leesbare uitleg. */
function leesFormule(tekst, metX = true) {
  let s = String(tekst).trim()
    .replace(/^[A-Za-z]\s*\(\s*x\s*\)\s*=/, "").replace(/^y\s*=/i, "")
    .replace(/[−–]/g, "-").replace(/[·×⋅]/g, "*").replace(/:/g, "/")
    .replace(/²/g, "^2").replace(/³/g, "^3").replace(/(\d),(\d)/g, "$1.$2");
  if (!s) throw new Error("Vul eerst iets in.");
  const tok = [];
  for (let i = 0; i < s.length;) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    const g = /^\d+(\.\d+)?|^\.\d+/.exec(s.slice(i));
    if (g) { tok.push({ t: "n", w: parseFloat(g[0]) }); i += g[0].length; continue; }
    if (/[a-zA-Z]/.test(c)) {
      if (c === "x" || c === "X") { if (!metX) throw new Error("Hier hoort een getal, zonder x."); tok.push({ t: "x" }); }
      else if ("Cck".includes(c)) tok.push({ t: "C" });
      else throw new Error(`Ik ken '${c}' niet. Gebruik x, getallen en + − * / ^.`);
      i++; continue;
    }
    if ("+-*/^()".includes(c)) { tok.push({ t: c }); i++; continue; }
    throw new Error(`Ik ken het teken '${c}' niet.`);
  }
  let p = 0;
  const kijk = () => tok[p] && tok[p].t, neem = () => tok[p++];
  function som() {
    let n = product();
    while (kijk() === "+" || kijk() === "-") { const op = neem().t, r = product(), l = n; n = op === "+" ? (x, C) => l(x, C) + r(x, C) : (x, C) => l(x, C) - r(x, C); }
    return n;
  }
  function product() {
    let n = teken();
    for (;;) {
      const k = kijk();
      if (k === "*" || k === "/") { neem(); const r = teken(), l = n; n = k === "*" ? (x, C) => l(x, C) * r(x, C) : (x, C) => l(x, C) / r(x, C); }
      else if (k === "x" || k === "C" || k === "(" || k === "n") { const r = macht(), l = n; n = (x, C) => l(x, C) * r(x, C); }  // 2x, 3(x+1)
      else return n;
    }
  }
  function teken() {
    if (kijk() === "-") { neem(); const r = teken(); return (x, C) => -r(x, C); }
    if (kijk() === "+") { neem(); return teken(); }
    return macht();
  }
  function macht() {
    const g = atoom();
    if (kijk() === "^") { neem(); const e = teken(); return (x, C) => Math.pow(g(x, C), e(x, C)); }
    return g;
  }
  function atoom() {
    const t = neem();
    if (!t) throw new Error("Je formule stopt te vroeg.");
    if (t.t === "n") return () => t.w;
    if (t.t === "x") return (x) => x;
    if (t.t === "C") return (x, C) => C;
    if (t.t === "(") { const n = som(); if (neem()?.t !== ")") throw new Error("Er ontbreekt een haakje."); return n; }
    throw new Error("Ik kan deze formule niet lezen. Schrijf bijvoorbeeld 2x^3 - 5x + C.");
  }
  const f = som();
  if (p < tok.length) throw new Error("Ik kan deze formule niet lezen. Schrijf bijvoorbeeld 2x^3 - 5x + C.");
  return f;
}

// --- toeval: willekeurig, of vast uit een zaadje (voor versie A en B van een toets) ---------------------
function zaadje(n) {  // mulberry32
  return () => { n |= 0; n = (n + 0x6D2B79F5) | 0; let t = Math.imul(n ^ (n >>> 15), 1 | n); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const tussen = (rnd, a, b, zonder = []) => { for (;;) { const k = a + Math.floor(rnd() * (b - a + 1)); if (!zonder.includes(k)) return k; } };

// --- bouwstenen van de pagina ---------------------------------------------------------------------------
const STATUS = { ontwerp: "In ontwerp", voorbeeld: "Eerste voorbeeld bestaat", idee: "Idee", bank: "De bank bestaat al" };
function niveauBalkjes(n, label = true) {  // zoals in het boek: drie oplopende balkjes
  return h("span", { class: "balkjes", "aria-label": label ? `niveau ${n} van 3` : null, title: ["", "basis", "gevorderd", "uitdagend"][n] },
    [1, 2, 3].map((i) => h("i", { class: i <= n ? "aan" : "" })));
}
function segmentKnoppen(keuzes, start, bijKeuze, label) {
  const seg = h("div", { class: "segment", role: "group", "aria-label": label });
  const zet = (w) => seg.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.w === String(w))));
  keuzes.forEach(([w, t]) => seg.append(h("button", { type: "button", "data-w": w, onclick: () => { zet(w); bijKeuze(w); } }, t)));
  zet(start);
  seg.zet = zet;
  return seg;
}
function invulVeld(breed = 4, label = "") {
  return h("input", { type: "text", inputmode: "decimal", autocomplete: "off", spellcheck: "false", class: "invul", style: { width: breed + "em" }, "aria-label": label });
}
function proefKaart(...inhoud) {
  return h("div", { class: "proef" }, h("p", { class: "proef-etiket" }, "Voorproefje"), inhoud);
}

// --- 1. differentiërend oefenen --------------------------------------------------------------------------
/* De structuur komt van stappenopgaven met hulpvragen die afbouwen: een beginner krijgt alle stappen, gevorderd
   de stappen die de aanpak voorzeggen niet meer, een expert alleen de vraag van de toets. Wat wegvalt, staat in de
   uitwerking van de volgende stap. Een soortgelijk voorbeeld mag altijd, maar dan telt de opgave niet meer mee. */
const NIVEAUS = [["1", "Beginner"], ["2", "Gevorderd"], ["3", "Expert"]];
function raaklijnOpgave(rnd = Math.random) {
  const a = tussen(rnd, -3, 3, [0]), b = tussen(rnd, -6, 6), c = tussen(rnd, -5, 5), p = tussen(rnd, -3, 3, [0]);
  const fp = a * p * p + b * p + c, m = 2 * a * p + b, q = fp - m * p;
  return { a, b, c, p, fp, m, q, f: [[a, 2], [b, 1], [c, 0]] };
}
function raaklijnStappen(o) {
  const { a, b, c, p, fp, m, q } = o, x = W.v("x");
  /* één term van een ingevulde som: k·(waarde), met het teken ervoor; 1· en 0-termen vallen weg */
  const term = (k, eerste, ...rest) => {
    if (k === 0 && !eerste) return "";
    const teken = eerste ? (k < 0 ? "−" : "") : (k < 0 ? " − " : " + ");
    const coef = Math.abs(k) === 1 && rest.length ? "" : W.getal(Math.abs(k)) + (rest.length ? "·" : "");
    return [teken, coef, rest];
  };
  const uitFp = [W.f("f", W.getal(p)), " = ", term(a, true, W.inv(p), h("sup", {}, "2")), term(b, false, W.inv(p)), term(c, false), " = ", W.getal(fp)];
  const uitAfg = [W.f("f′"), " = ", W.veelterm([[2 * a, 1], [b, 0]]), " (de afgeleide van ", W.v("x"), h("sup", {}, "2"), " is 2", W.v("x"), ")"];
  const uitM = [W.v("m"), " = ", W.f("f′", W.getal(p)), " = ", term(2 * a, true, W.inv(p)), term(b, false), " = ", W.getal(m)];
  const min = (v) => (v < 0 ? [" + ", W.getal(-v)] : [" − ", W.getal(v)]);  // x − p, of x + 3 als p = −3
  const uitT = [W.v("y"), min(fp), " = ", W.getal(m), "(", x, min(p), ")", ", dus ", W.v("y"), " = ", W.veelterm([[m, 1], [q, 0]])];
  return [
    { tot: 2, vraag: { 1: ["Het raakpunt ligt op de grafiek. Bereken de ", W.v("y"), "-coördinaat ervan: ", W.f("f", W.getal(p)), "."], 2: ["Bereken ", W.f("f", W.getal(p)), "."] },
      velden: [[W.f("f", W.getal(p)), " = "]], juist: [fp], uitwerking: uitFp },
    { tot: 1, vraag: { 1: ["De richtingscoëfficiënt van de raaklijn is de afgeleide in ", W.v("x"), " = ", W.getal(p), ". Bepaal eerst de afgeleide functie."] },
      velden: [[W.f("f′"), " = "], [W.v("x"), " + "]], juist: [2 * a, b], uitwerking: uitAfg },
    { tot: 2, vraag: { 1: ["Vul ", W.v("x"), " = ", W.getal(p), " in: zo vind je de richtingscoëfficiënt ", W.v("m"), " van de raaklijn."], 2: ["Bereken de richtingscoëfficiënt ", W.v("m"), " van de raaklijn."] },
      velden: [[W.v("m"), " = "]], juist: [m], uitwerking: uitM },
    { tot: 3, vraag: { 1: ["Stel de vergelijking op met ", W.v("y"), " − ", W.f("f", W.getal(p)), " = ", W.v("m"), "(", x, min(p), ") en werk uit."],
      2: ["Geef de vergelijking van de raaklijn."], 3: ["Geef de vergelijking van de raaklijn."] },
      velden: [[W.v("y"), " = "], [W.v("x"), " + "]], juist: [m, q], uitwerking: uitT },
  ];
}
function proefDifferentieer() {
  let niveau = 1, reeks = 0, opgave, telt, foutloos;
  const doel = h("div", { class: "oef-lijf" });
  const stand = h("p", { class: "oef-stand", "aria-live": "polite" });
  const voorbeeldPlek = h("div");
  const seg = segmentKnoppen(NIVEAUS, "1", (w) => { niveau = +w; reeks = 0; nieuw(); }, "Niveau");
  function toonStand() {
    vul(stand, h("span", { class: "zacht" }, "Niveau "), h("b", {}, NIVEAUS[niveau - 1][1]), " ",
      niveau < 3 ? [h("span", { class: "stippen", "aria-label": `${reeks} van 3 foutloos op rij` }, [0, 1, 2].map((i) => h("i", { class: i < reeks ? "aan" : "" }))),
        h("span", { class: "zacht klein" }, " drie keer foutloos op rij, en je gaat een niveau hoger")] : h("span", { class: "zacht klein" }, "alleen nog de toetsvraag"));
  }
  function nieuw() {
    opgave = raaklijnOpgave();
    telt = true; foutloos = true; vul(voorbeeldPlek);
    vul(doel, 
      h("p", { class: "oef-opgave" }, "Gegeven ", W.wis(W.f("f"), " = ", W.veelterm(opgave.f)), ". Bepaal de vergelijking van de raaklijn aan de grafiek van ", W.v("f"), " in het punt met ", W.wis(W.v("x"), " = ", W.getal(opgave.p)), "."),
      niveau > 1 ? h("p", { class: "oef-minder" }, niveau === 2 ? "Minder tussenstappen: je bent gevorderd." : "Geen tussenstappen meer: zo staat de vraag op de toets.") : null);
    let vorigeWeg = [];  // wat wegvalt op dit niveau, komt in de uitwerking van de volgende stap
    const lijst = [];
    raaklijnStappen(opgave).forEach((st) => { if (st.tot < niveau) vorigeWeg.push(st.uitwerking); else { lijst.push({ ...st, extra: vorigeWeg }); vorigeWeg = []; } });
    toonStap(lijst, 0);
    toonStand();
  }
  function toonStap(lijst, i) {
    if (i >= lijst.length) return klaar();
    const s = lijst[i];
    const velden = s.velden.map(() => invulVeld(3.6));
    const uit = h("div", { class: "oef-uit", "aria-live": "polite" });
    const knop = h("button", { class: "knop klein", type: "submit" }, "Controleer");
    const vorm = h("form", { class: "oef-stap", onsubmit: (e) => {
      e.preventDefault();
      const w = velden.map((v) => leesGetal(v.value));
      if (w.some((x) => x == null)) { vul(uit, h("p", { class: "fout-tekst" }, "Vul elk vakje in met een getal.")); return; }
      const ok = w.every((x, k) => Math.abs(x - s.juist[k]) < 1e-9);
      velden.forEach((v, k) => { v.disabled = true; v.classList.add(Math.abs(w[k] - s.juist[k]) < 1e-9 ? "goed" : "fout"); });
      knop.remove();
      if (!ok) foutloos = false;
      vul(uit, 
        h("p", { class: ok ? "oef-goed" : "oef-fout" }, ok ? "Juist." : "Nog niet. Zo moest het:"),
        (!ok || s.extra.length) ? h("div", { class: "uitwerking" }, s.extra.map((u) => h("p", { class: "zacht" }, u)), h("p", {}, s.uitwerking)) : null);
      toonStap(lijst, i + 1);
    } },
    h("p", { class: "oef-vraag" }, h("span", { class: "stapnr" }, String(i + 1)), h("span", {}, s.vraag[niveau] || s.vraag[Math.max(...Object.keys(s.vraag).map(Number).filter((k) => k <= niveau))])),
    h("div", { class: "oef-velden" }, s.velden.map((lab, k) => [W.wis(lab), velden[k]])), knop, uit);
    doel.append(vorm);
    velden[0].focus({ preventScroll: true });
  }
  function klaar() {
    if (!telt) reeks = 0;
    else if (foutloos) reeks++;
    else reeks = 0;
    let bericht = !telt ? "Je opende een voorbeeld: deze opgave telt niet mee." : foutloos ? "Foutloos!" : "Klaar. Probeer er nog een.";
    if (reeks >= 3 && niveau < 3) { niveau++; reeks = 0; seg.zet(String(niveau)); bericht = `Drie keer foutloos: je gaat naar ${NIVEAUS[niveau - 1][1]}. Er vallen hulpvragen weg.`; }
    toonStand();
    doel.append(h("div", { class: "oef-klaar" }, h("p", {}, bericht), h("button", { class: "knop klein", type: "button", onclick: nieuw }, "Nieuwe opgave")));
  }
  function voorbeeld() {
    telt = false; reeks = 0; toonStand();
    const o = raaklijnOpgave();
    vul(voorbeeldPlek, h("div", { class: "uitwerking voorbeeld" },
      h("p", {}, h("b", {}, "Soortgelijk voorbeeld. "), "Raaklijn aan de grafiek van ", W.wis(W.f("f"), " = ", W.veelterm(o.f)), " in ", W.wis(W.v("x"), " = ", W.getal(o.p)), ":"),
      h("ol", {}, raaklijnStappen(o).map((s) => h("li", {}, s.uitwerking))),
      h("p", { class: "zacht klein" }, "Nu jij: dezelfde aanpak, met de getallen van je eigen opgave. Deze opgave levert niets meer op.")));
  }
  nieuw();
  return proefKaart(
    h("div", { class: "proef-balk" }, seg, h("button", { class: "knop-tekst", type: "button", onclick: voorbeeld }, "Toon een soortgelijk voorbeeld")),
    stand, voorbeeldPlek, doel);
}

// --- 2. interactieve theorie ------------------------------------------------------------------------------
const SVG = "http://www.w3.org/2000/svg";
function svgEl(tag, attrs = {}, ...kinderen) {
  const el = document.createElementNS(SVG, tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) el.setAttribute(k, v);
  kinderen.flat().forEach((k) => k != null && el.append(k instanceof Node ? k : document.createTextNode(String(k))));
  return el;
}
function proefTheorie() {
  const fx = (x) => (x * x * x - 6 * x * x + 9 * x) / 4 + 1;               // f(x) = ¼(x³ − 6x² + 9x) + 1
  const Fx = (x) => (x ** 4 / 4 - 2 * x ** 3 + 4.5 * x * x) / 4 + x;
  const B = 520, H = 290, x0 = -0.35, x1 = 4.4, y0 = -0.35, y1 = 2.6;
  const X = (x) => ((x - x0) / (x1 - x0)) * B, Y = (y) => H - ((y - y0) / (y1 - y0)) * H;
  let n = 4, b = 3.5, wat = "beide", gelukt = false;
  const rechth = svgEl("g"), kromme = svgEl("path", { class: "rs-kromme", d: Array.from({ length: 121 }, (_, i) => { const x = i / 120 * 4.2; return (i ? "L" : "M") + X(x).toFixed(1) + " " + Y(fx(x)).toFixed(1); }).join(" ") });
  const greep = svgEl("g", { class: "rs-greep", tabindex: "0", role: "slider", "aria-label": "Bovengrens b", "aria-valuemin": "0.5", "aria-valuemax": "4" },
    svgEl("line", { y1: Y(0), y2: Y(0) - 0 }), svgEl("circle", { r: 9, cy: Y(0) }), svgEl("text", { y: Y(0) + 26, "text-anchor": "middle", class: "rs-label" }, "b"));
  const assen = svgEl("g", { class: "rs-as" },
    svgEl("line", { x1: 0, x2: B, y1: Y(0), y2: Y(0) }), svgEl("line", { x1: X(0), x2: X(0), y1: 0, y2: H }),
    [1, 2, 3, 4].map((k) => [svgEl("line", { x1: X(k), x2: X(k), y1: Y(0) - 4, y2: Y(0) + 4 }), svgEl("text", { x: X(k), y: Y(0) + 18, "text-anchor": "middle" }, String(k))]),
    [1, 2].map((k) => [svgEl("line", { x1: X(0) - 4, x2: X(0) + 4, y1: Y(k), y2: Y(k) }), svgEl("text", { x: X(0) - 10, y: Y(k) + 5, "text-anchor": "end" }, String(k))]),
    svgEl("text", { x: B - 6, y: Y(0) - 8, "text-anchor": "end", class: "rs-label" }, "x"), svgEl("text", { x: X(0) + 8, y: 14, class: "rs-label" }, "y"));
  const svg = svgEl("svg", { viewBox: `0 0 ${B} ${H}`, class: "rs-fig", role: "img", "aria-label": "Grafiek van f met rechthoekjes onder en boven de kromme" }, rechth, assen, kromme, greep);
  const uitOnder = h("output"), uitBoven = h("output"), uitVerschil = h("output"), uitOpp = h("output");
  const schuif = h("input", { type: "range", min: 1, max: 120, value: n, "aria-label": "Aantal deelintervallen n", oninput: () => { n = +schuif.value; teken(); } });
  const nTekst = h("output");
  const missie = h("p", { class: "missie" }, h("span", { class: "missie-vink", "aria-hidden": "true" }), h("span", {}, "Opdracht: maak het verschil tussen bovensom en ondersom kleiner dan 0,1."));
  const theorie = h("div", { class: "theoriekader", hidden: true },
    h("p", { class: "theorie-kop" }, "Wat je net zag"),
    h("p", {}, "Verdeel [0, ", W.v("b"), "] in ", W.v("n"), " gelijke stukken. De ondersom ", W.v("s"), h("sub", {}, W.v("n")), " gebruikt in elk stuk de kleinste functiewaarde, de bovensom ", W.v("S"), h("sub", {}, W.v("n")),
      " de grootste. De oppervlakte zit er altijd tussen. Hoe groter ", W.v("n"), ", hoe dichter beide sommen bij elkaar komen: hun gemeenschappelijke limiet is de bepaalde integraal ", W.integraal("0", W.v("b"), W.f("f")), "."));
  function minMax(a, c) { let lo = Infinity, hi = -Infinity; for (let i = 0; i <= 24; i++) { const y = fx(a + (c - a) * i / 24); lo = Math.min(lo, y); hi = Math.max(hi, y); } return [lo, hi]; }
  function teken() {
    const dx = b / n; let so = 0, sb = 0;
    const r = [];
    for (let i = 0; i < n; i++) {
      const [lo, hi] = minMax(i * dx, (i + 1) * dx); so += lo * dx; sb += hi * dx;
      const xl = X(i * dx), w = X((i + 1) * dx) - xl;
      if (wat !== "onder") r.push(svgEl("rect", { class: "rs-boven", x: xl, y: Y(hi), width: w, height: Y(0) - Y(hi) }));
      if (wat !== "boven") r.push(svgEl("rect", { class: "rs-onder", x: xl, y: Y(lo), width: w, height: Y(0) - Y(lo) }));
    }
    vul(rechth, ...r);
    greep.setAttribute("transform", `translate(${X(b).toFixed(1)} 0)`); greep.setAttribute("aria-valuenow", b.toFixed(2));
    greep.firstChild.setAttribute("y2", Y(fx(b)));
    nTekst.textContent = String(n);
    uitOnder.textContent = W.getal(+so.toFixed(3)); uitBoven.textContent = W.getal(+sb.toFixed(3));
    uitVerschil.textContent = W.getal(+(sb - so).toFixed(3)); uitOpp.textContent = W.getal(+Fx(b).toFixed(3));
    if (!gelukt && sb - so < 0.1) {
      gelukt = true; missie.classList.add("af");
      missie.lastChild.textContent = "Gelukt. Lees nu wat je zag: de theorie komt pas na het kijken.";
      theorie.hidden = false;
    }
  }
  // de bovengrens b verslepen (muis, vinger) of met de pijltjestoetsen
  const naarB = (e) => { const r = svg.getBoundingClientRect(); b = Math.min(4, Math.max(0.5, x0 + ((e.clientX - r.left) / r.width) * (x1 - x0))); teken(); };
  greep.addEventListener("pointerdown", (e) => { e.preventDefault(); greep.setPointerCapture(e.pointerId); greep.classList.add("sleept"); });
  greep.addEventListener("pointermove", (e) => { if (greep.hasPointerCapture(e.pointerId)) naarB(e); });
  greep.addEventListener("pointerup", () => greep.classList.remove("sleept"));
  greep.addEventListener("keydown", (e) => { const d = { ArrowRight: 0.1, ArrowUp: 0.1, ArrowLeft: -0.1, ArrowDown: -0.1 }[e.key]; if (d) { e.preventDefault(); b = Math.min(4, Math.max(0.5, b + d)); teken(); } });
  const seg = segmentKnoppen([["onder", "Ondersom"], ["boven", "Bovensom"], ["beide", "Beide"]], wat, (w) => { wat = w; teken(); }, "Welke som");
  teken();
  return proefKaart(
    h("p", { class: "proef-titel" }, "Ondersom en bovensom van ", W.wis(W.f("f"), " = ¼(", W.veelterm([[1, 3], [-6, 2], [9, 1]]), ") + 1"), " op [0, ", W.v("b"), "]"),
    h("p", { class: "zacht klein" }, "Sleep het bolletje ", W.v("b"), " en kies het aantal deelintervallen."),
    h("div", { class: "rs-werk" }, h("div", { class: "rs-figplek" }, svg),
      h("div", { class: "rs-paneel" },
        h("label", { class: "veld" }, h("span", {}, "Aantal deelintervallen ", W.v("n"), " = ", nTekst), schuif), seg,
        h("dl", { class: "rs-getallen" },
          h("dt", {}, h("span", { class: "vlek onder" }), h("span", {}, "Ondersom ", W.v("s"), h("sub", {}, W.v("n")))), h("dd", {}, uitOnder),
          h("dt", {}, h("span", { class: "vlek boven" }), h("span", {}, "Bovensom ", W.v("S"), h("sub", {}, W.v("n")))), h("dd", {}, uitBoven),
          h("dt", {}, h("span", {}, W.v("S"), h("sub", {}, W.v("n")), " − ", W.v("s"), h("sub", {}, W.v("n")))), h("dd", {}, uitVerschil),
          h("dt", {}, "Oppervlakte"), h("dd", {}, uitOpp)))),
    missie, theorie);
}

// --- 3. automatisch nakijken, met Fout? Herhaal --------------------------------------------------------------
function primitieveOpgave(rnd = Math.random, niveau = 2) {
  const a = tussen(rnd, 1, 4) * 3 * (rnd() < 0.3 ? -1 : 1), b = tussen(rnd, -5, 5, [0]) * 2, c = tussen(rnd, -7, 7, [0]);
  const termen = niveau === 1 ? [[a, 2], [c, 0]] : [[a, 2], [b, 1], [c, 0]];
  return { termen, F: termen.map(([k, e]) => [k / (e + 1), e + 1]) };
}
const waarde = (termen) => (x) => termen.reduce((t, [k, e]) => t + k * x ** e, 0);
const afgeleide = (termen) => termen.filter(([, e]) => e > 0).map(([k, e]) => [k * e, e - 1]);
function proefNakijken() {
  let o;
  const opgave = h("p", { class: "oef-opgave" });
  const veld = h("input", { type: "text", autocomplete: "off", spellcheck: "false", class: "invul breed", placeholder: "bv. 2x^3 - 5x + C", "aria-label": "Je primitieve functie F(x)" });
  const uit = h("div", { class: "oef-uit", "aria-live": "polite" });
  function nieuw() {
    o = primitieveOpgave();
    vul(opgave, "Geef een primitieve functie van ", W.wis(W.f("f"), " = ", W.veelterm(o.termen)), ".");
    veld.value = ""; vul(uit);
  }
  /* Gelijk als functie: vergelijk in een handvol punten. F mag een constante C bevatten. */
  const PUNTEN = [-1.7, -0.6, 0.35, 1.3, 2.2];
  const zelfde = (g, k) => PUNTEN.every((x) => Math.abs(g(x) - k(x)) < 1e-6 * Math.max(1, Math.abs(k(x))));
  const verschiltConstante = (g, k) => { const d = g(0) - k(0); return zelfde((x) => g(x) - d, k); };
  function kijkNa(e) {
    e.preventDefault();
    let F;
    try { F = leesFormule(veld.value); } catch (x) { vul(uit, h("p", { class: "fout-tekst" }, x.message)); return; }
    const FC = (x) => F(x, 0.37), af = (x) => (F(x + 1e-4, 0.37) - F(x - 1e-4, 0.37)) / 2e-4;
    const f = waarde(o.termen);
    const herhaal = (wat, nu) => h("div", { class: "herhaal" }, h("p", { class: "herhaal-kop" }, "Fout? Herhaal"),
      h("p", {}, "→ ", wat), h("p", { class: "zacht klein" }, "In de echte site wijst dit naar het voorbeeld en de oefening in het boek die bij deze fout horen, zoals het schema onder Test jezelf."),
      nu ? h("button", { class: "knop klein licht", type: "button", onclick: nieuw }, "Nieuwe opgave van deze soort") : null);
    let fout = null;
    if (PUNTEN.every((x) => Math.abs(af(x) - f(x)) < 1e-4 * Math.max(1, Math.abs(f(x))))) {
      vul(uit, h("p", { class: "oef-goed" }, "Juist. Elke ", W.wis(W.f("F"), " + ", W.v("C")), " is goed: de afgeleide van een constante is nul."),
        h("p", { class: "zacht klein" }, "Nagekeken door je antwoord af te leiden: je mocht het in elke vorm schrijven, ook met haakjes of breuken."));
      return;
    }
    if (zelfde(FC, waarde(afgeleide(o.termen))) || verschiltConstante(FC, waarde(afgeleide(o.termen)))) fout = ["Je leidde af in plaats van een primitieve te zoeken. Zoek een functie waarvan de afgeleide ", W.v("f"), " is."];
    else if (verschiltConstante(FC, waarde(o.termen.map(([k, e]) => [k, e + 1])))) fout = ["Je verhoogde de exponent, maar deelde niet door de nieuwe exponent: een primitieve van ", W.v("x"), h("sup", {}, W.v("n")), " is ", W.v("x"), h("sup", {}, [W.v("n"), "+1"]), " gedeeld door ", W.v("n"), " + 1."];
    else if (zelfde(FC, f)) fout = ["Dat is ", W.v("f"), " zelf. Een primitieve ", W.v("F"), " is een functie waarvoor ", W.wis(W.f("F′"), " = ", W.f("f")), "."];
    else if (PUNTEN.every((x) => Math.abs(af(x) - (f(x) - o.termen.at(-1)[0])) < 1e-4 * Math.max(1, Math.abs(f(x))))) fout = ["Kijk naar de constante term: een primitieve van ", W.getal(o.termen.at(-1)[0]), " is ", W.getal(o.termen.at(-1)[0]), W.v("x"), ", niet nul."];
    const t = 1;
    vul(uit, h("p", { class: "oef-fout" }, "Nog niet."),
      fout ? null : h("p", {}, "Controleer door af te leiden: in ", W.wis(W.v("x"), " = ", t), " geeft jouw ", W.f("F′", "1"), " ≈ ", W.getal(+af(t).toFixed(2)), ", maar ", W.f("f", "1"), " = ", W.getal(f(t)), "."),
      herhaal(fout || ["Een primitieve van een veelterm: term per term, de exponent één hoger en delen door de nieuwe exponent."], true),
      h("details", { class: "uitwerking" }, h("summary", {}, "Toon een juiste primitieve"), h("p", {}, W.wis(W.f("F"), " = ", W.veelterm(o.F), " + ", W.v("C")))));
  }
  nieuw();
  return proefKaart(opgave,
    h("form", { class: "oef-stap", onsubmit: kijkNa }, h("div", { class: "oef-velden" }, W.wis(W.f("F"), " ="), veld), h("button", { class: "knop klein" }, "Kijk na")),
    h("p", { class: "zacht klein" }, "Probeer ook eens een typische fout: leid af in plaats van te integreren, of vergeet te delen door de nieuwe exponent."),
    uit, h("p", {}, h("button", { class: "knop-tekst", type: "button", onclick: nieuw, style: { paddingLeft: 0 } }, "Andere opgave")));
}

// --- 4. toetsen en oefenreeksen uit de bank ------------------------------------------------------------------
/* Elke soort opgave is een generator met drie niveaus. Een toets is een blauwdruk (welke soort, welk niveau, in
   welke volgorde); versie A en B volgen dezelfde blauwdruk met andere getallen. */
const SOORTEN = {
  raaklijn: { naam: "Raaklijn", maak(rnd, n) {
    if (n === 3) {
      const a = tussen(rnd, 1, 3) * (rnd() < 0.5 ? -1 : 1), b = tussen(rnd, -5, 5), c = tussen(rnd, -4, 4), x0 = tussen(rnd, -3, 3, [0]);
      const k = 2 * a * x0 + b, y0 = a * x0 * x0 + b * x0 + c;
      return { opgave: ["In welk punt van de grafiek van ", W.wis(W.f("f"), " = ", W.veelterm([[a, 2], [b, 1], [c, 0]])), " is de raaklijn evenwijdig met ", W.wis(W.v("y"), " = ", W.veelterm([[k, 1]])), "? Geef ook de vergelijking van die raaklijn."],
        antwoord: ["(", W.getal(x0), ", ", W.getal(y0), "); ", W.wis(W.v("y"), " = ", W.veelterm([[k, 1], [y0 - k * x0, 0]]))] };
    }
    const o = raaklijnOpgave(n === 1 ? () => 0.5 + rnd() * 0.5 : rnd);
    return { opgave: ["Bepaal de vergelijking van de raaklijn aan de grafiek van ", W.wis(W.f("f"), " = ", W.veelterm(o.f)), " in het punt met ", W.wis(W.v("x"), " = ", W.getal(o.p)), "."],
      antwoord: [W.wis(W.v("y"), " = ", W.veelterm([[o.m, 1], [o.q, 0]]))] };
  } },
  primitieve: { naam: "Primitieve functie", maak(rnd, n) {
    const o = primitieveOpgave(rnd, n === 1 ? 1 : 2);
    if (n === 3) {
      const v = tussen(rnd, -6, 6), C = v - waarde(o.F)(1);
      return { opgave: ["Bepaal de primitieve functie ", W.v("F"), " van ", W.wis(W.f("f"), " = ", W.veelterm(o.termen)), " waarvoor ", W.wis(W.f("F", "1"), " = ", W.getal(v)), "."],
        antwoord: [W.wis(W.f("F"), " = ", W.veelterm([...o.F, [C, 0]]))] };
    }
    return { opgave: ["Geef een primitieve functie van ", W.wis(W.f("f"), " = ", W.veelterm(o.termen)), "."], antwoord: [W.wis(W.f("F"), " = ", W.veelterm(o.F), " + ", W.v("C"))] };
  } },
  integraal: { naam: "Bepaalde integraal", maak(rnd, n) {
    if (n === 1) {
      const k = tussen(rnd, 1, 4) * 2, c = tussen(rnd, 1, 5), b = tussen(rnd, 1, 4);
      return { opgave: ["Bereken ", W.wis(W.integraal("0", W.getal(b), "(", W.veelterm([[k, 1], [c, 0]]), ")")), "."], antwoord: [W.getal(k * b * b / 2 + c * b)] };
    }
    if (n === 2) {
      const p = tussen(rnd, 1, 3) * 3, q = tussen(rnd, -3, 3, [0]) * 2, a = tussen(rnd, -2, 0), b = tussen(rnd, 1, 3);
      const F = (x) => p / 3 * x ** 3 + q / 2 * x * x;
      return { opgave: ["Bereken ", W.wis(W.integraal(W.getal(a), W.getal(b), "(", W.veelterm([[p, 2], [q, 1]]), ")")), "."], antwoord: [W.getal(F(b) - F(a))] };
    }
    const b = tussen(rnd, 2, 5), c = tussen(rnd, -3, 4, [0]), v = b * b + c * b;
    return { opgave: ["Bepaal ", W.wis(W.v("b"), " > 0"), " zodat ", W.wis(W.integraal("0", W.v("b"), "(", W.veelterm([[2, 1], [c, 0]]), ")"), " = ", W.getal(v)), "."], antwoord: [W.wis(W.v("b"), " = ", W.getal(b))] };
  } },
};
const PUNTEN_NIVEAU = { 1: 2, 2: 3, 3: 5 };
function proefToets() {
  let soorten = new Set(Object.keys(SOORTEN)), mix = "gemengd", aantal = 6, reeks = 1, sleutel = false;
  const plek = h("div", { class: "toets-vellen" });
  function blauwdruk() {
    const rnd = zaadje(reeks * 7919);
    const lijst = [...soorten];
    const niveaus = { basis: [1, 1, 2], gemengd: [1, 2, 3], uitdaging: [2, 3, 3] }[mix];
    // de moeilijkheid stijgt over de toets, de soorten staan door elkaar (zoals bij de Opdrachten in het boek)
    const vragen = Array.from({ length: aantal }, (_, i) => ({ niveau: niveaus[Math.min(2, Math.floor(i * 3 / aantal))] }));
    let vorige = null;
    vragen.forEach((v) => { const kan = lijst.filter((k) => k !== vorige || lijst.length === 1); v.soort = kan[Math.floor(rnd() * kan.length)]; vorige = v.soort; });
    return vragen;
  }
  function vel(vragen, versie) {
    const rnd = zaadje(reeks * 104729 + (versie === "A" ? 1 : 2));
    const totaal = vragen.reduce((t, v) => t + PUNTEN_NIVEAU[v.niveau], 0);
    return h("section", { class: "toets-vel" },
      h("header", {}, h("b", {}, `Toets · versie ${versie}`), h("span", { class: "zacht" }, `… / ${totaal}`)),
      h("ol", {}, vragen.map((v) => {
        const g = SOORTEN[v.soort].maak(rnd, v.niveau);
        return h("li", {}, h("div", { class: "toets-kop" }, niveauBalkjes(v.niveau), h("span", { class: "zacht klein" }, `${SOORTEN[v.soort].naam} · ${PUNTEN_NIVEAU[v.niveau]} p.`)),
          h("p", {}, g.opgave), sleutel ? h("p", { class: "toets-antwoord" }, "Antwoord: ", g.antwoord) : null);
      })));
  }
  function teken() {
    if (!soorten.size) { vul(plek, h("p", { class: "leeg" }, "Kies minstens één onderwerp.")); return; }
    const vragen = blauwdruk();
    vul(plek, vel(vragen, "A"), vel(vragen, "B"));
  }
  const vinkjes = h("div", { class: "vinkjes", role: "group", "aria-label": "Onderwerpen" }, Object.entries(SOORTEN).map(([k, v]) =>
    h("label", { class: "chip-vink" }, h("input", { type: "checkbox", checked: true, onchange: (e) => { e.target.checked ? soorten.add(k) : soorten.delete(k); teken(); } }), v.naam)));
  const knopSleutel = h("button", { class: "knop klein licht", type: "button", "aria-pressed": "false", onclick: () => { sleutel = !sleutel; knopSleutel.setAttribute("aria-pressed", String(sleutel)); knopSleutel.textContent = sleutel ? "Verberg de verbetersleutel" : "Toon de verbetersleutel"; teken(); } }, "Toon de verbetersleutel");
  teken();
  return proefKaart(
    h("div", { class: "toets-keuze" },
      h("div", {}, h("p", { class: "ctrl-label" }, "Onderwerpen"), vinkjes),
      h("div", {}, h("p", { class: "ctrl-label" }, "Niveau"), segmentKnoppen([["basis", "Basis"], ["gemengd", "Gemengd"], ["uitdaging", "Uitdagend"]], mix, (w) => { mix = w; teken(); }, "Niveau")),
      h("div", {}, h("p", { class: "ctrl-label" }, "Vragen"), segmentKnoppen([["4", "4"], ["6", "6"], ["8", "8"]], "6", (w) => { aantal = +w; teken(); }, "Aantal vragen"))),
    h("div", { class: "proef-balk" }, h("button", { class: "knop klein", type: "button", onclick: () => { reeks++; teken(); } }, "Stel een andere toets samen"), knopSleutel),
    h("p", { class: "zacht klein" }, "Versie A en B hebben dezelfde opbouw en dezelfde punten, met andere getallen: handig als leerlingen naast elkaar zitten."),
    plek);
}

// --- 5. de handboeken als webpagina: toegankelijk lezen ------------------------------------------------------
function proefLezen() {
  let grootte = 1, rustig = false, leest = false;
  /* Elke zin staat er twee keer: zoals je hem ziet, en zoals je hem hoort (ook voor een schermlezer). */
  const zinnen = [
    [["Een functie ", W.v("F"), " is een primitieve functie van ", W.v("f"), " op een interval ", W.v("I"), " als ", W.wis(W.f("F′"), " = ", W.f("f")), " voor elke ", W.v("x"), " in ", W.v("I"), "."],
      "Een functie F is een primitieve functie van f op een interval I, als F accent van x gelijk is aan f van x, voor elke x in I."],
    [["Zo is ", W.wis(W.f("F"), " = ", W.veelterm([[1, 3]])), " een primitieve functie van ", W.wis(W.f("f"), " = ", W.veelterm([[3, 2]])), ", want de afgeleide van ", W.wis(W.veelterm([[1, 3]])), " is ", W.wis(W.veelterm([[3, 2]])), "."],
      "Zo is F van x gelijk aan x tot de derde, een primitieve functie van f van x gelijk aan 3 x kwadraat, want de afgeleide van x tot de derde is 3 x kwadraat."],
    [["Ook ", W.wis(W.veelterm([[1, 3], [5, 0]])), " is er een: een constante valt weg bij het afleiden."],
      "Ook x tot de derde plus 5 is er een: een constante valt weg bij het afleiden."],
  ];
  const spans = zinnen.map(([zien, horen]) => h("span", { class: "zin", "aria-label": horen }, zien, " "));
  const tekst = h("div", { class: "lees-tekst" }, h("p", { class: "theorie-kop" }, "Definitie"), h("p", {}, spans));
  const zet = () => { tekst.style.fontSize = grootte + "em"; tekst.classList.toggle("rustig", rustig); };
  const kanSpreken = "speechSynthesis" in window;
  const knopLees = h("button", { class: "knop klein", type: "button", disabled: !kanSpreken, onclick: () => (leest ? stop() : lees(0)) }, kanSpreken ? "▶ Lees voor" : "Je browser kan niet voorlezen");
  function stop() { leest = false; speechSynthesis.cancel(); spans.forEach((z) => z.classList.remove("nu")); knopLees.textContent = "▶ Lees voor"; }
  function lees(i) {
    if (i === 0) { speechSynthesis.cancel(); leest = true; knopLees.textContent = "■ Stop"; }
    if (!leest) return;
    spans.forEach((z, k) => z.classList.toggle("nu", k === i));
    if (i >= zinnen.length) return stop();
    const u = new SpeechSynthesisUtterance(zinnen[i][1]);
    u.lang = "nl-BE";
    const stem = speechSynthesis.getVoices().find((v) => v.lang === "nl-BE") || speechSynthesis.getVoices().find((v) => v.lang.startsWith("nl"));
    if (stem) u.voice = stem;
    u.rate = 0.95;
    u.onend = () => lees(i + 1);
    speechSynthesis.speak(u);
  }
  S.opruimen.push(() => { if (kanSpreken) speechSynthesis.cancel(); });
  return proefKaart(
    h("div", { class: "proef-balk" },
      h("div", { class: "segment", role: "group", "aria-label": "Lettergrootte" },
        h("button", { type: "button", "aria-label": "Kleiner", onclick: () => { grootte = Math.max(0.85, grootte - 0.15); zet(); } }, "A−"),
        h("button", { type: "button", "aria-label": "Groter", onclick: () => { grootte = Math.min(1.9, grootte + 0.15); zet(); } }, "A+")),
      h("button", { class: "knop klein licht", type: "button", "aria-pressed": "false", onclick: (e) => { rustig = !rustig; e.currentTarget.setAttribute("aria-pressed", String(rustig)); zet(); } }, "Leesvriendelijk"),
      knopLees),
    tekst,
    h("p", { class: "zacht klein" }, "Leesvriendelijk geeft meer ruimte tussen letters, woorden en regels, op een rustige achtergrond. Voorlezen leest ook de formules, zoals een leerkracht ze zou uitspreken."));
}

// --- 6. een open oefeningenbank ------------------------------------------------------------------------------
function proefBank() {
  let a, b, tab = "bron";
  const kies = () => { a = tussen(Math.random, 1, 4); b = tussen(Math.random, 2, 3); };
  const plek = h("div", { class: "bank-plek" });
  const antwoord = () => a * b ** 3 - b * b;
  function bron() {
    const regels = [
      ["- id: ", "voorproef-integraal"],
      ["  soort: ", "opdracht"],
      ["  niveau: ", "2"],
      ["  thema: ", "Bepaalde integraal"],
      ["  doelen: ", "[ ]", "      # nieuw: de nummers van de leerplandoelen"],
      ["  getallen:", "", "          # nieuw: a en b worden ingevuld; zo varieert de oefening online en in een toets"],
      ["    a: ", "1..4"],
      ["    b: ", "2..3"],
      ["  opgave: ", "|-"],
      ["    ", "Bereken $\\displaystyle\\int_0^{b} (3a\\,x^2-2x)\\,\\mathrm{d}x$."],
      ["  antwoord: ", "|-"],
      ["    ", "$a b^3-b^2$"],
      ["  uitwerking: ", "|-"],
      ["    ", "Een primitieve is $a x^3-x^2$, dus $\\left[a x^3-x^2\\right]_0^{b}=a b^3-b^2$."],
    ];
    return h("pre", { class: "bank-bron", "aria-label": "De oefening zoals ze in de bank staat" }, regels.map(([k, w, c]) =>
      h("div", {}, h("span", { class: "y-sleutel" }, k), h("span", { class: "y-waarde" }, w), c ? h("span", { class: "y-comm" }, c) : null)));
  }
  const opgave = () => ["Bereken ", W.wis(W.integraal("0", W.getal(b), "(", W.veelterm([[3 * a, 2], [-2, 1]]), ")")), "."];
  function boek() {
    return h("div", { class: "bank-boek" },
      h("div", { class: "bank-oef" }, h("span", { class: "bank-nr" }, "17"), niveauBalkjes(2), h("p", {}, opgave())),
      h("p", { class: "bank-antw zacht klein" }, h("b", {}, "Oplossingen · 17. "), W.getal(antwoord())),
      h("p", { class: "zacht klein" }, "In het boek staat de oefening met vaste getallen. Het nummer legt maak-pdf.py zelf vast."));
  }
  function online() {
    const veld = invulVeld(5, "Je antwoord");
    const uit = h("div", { class: "oef-uit", "aria-live": "polite" });
    return h("div", { class: "bank-online" },
      h("div", { class: "bank-oef" }, h("span", { class: "bank-nr" }, "17"), niveauBalkjes(2), h("p", {}, opgave())),
      h("form", { class: "oef-stap", onsubmit: (e) => {
        e.preventDefault(); const w = leesGetal(veld.value);
        if (w == null) { vul(uit, h("p", { class: "fout-tekst" }, "Vul een getal in.")); return; }
        const ok = Math.abs(w - antwoord()) < 1e-9;
        vul(uit, h("p", { class: ok ? "oef-goed" : "oef-fout" }, ok ? "Juist." : "Nog niet. Zo moest het:"),
          ok ? null : h("p", { class: "uitwerking" }, "Een primitieve is ", W.wis(W.veelterm([[a, 3], [-1, 2]])), ", dus de integraal is ", W.wis(W.getal(a), "·", W.getal(b), h("sup", {}, "3"), " − ", W.getal(b), h("sup", {}, "2"), " = ", W.getal(antwoord())), "."));
      } }, h("div", { class: "oef-velden" }, "Antwoord: ", veld), h("button", { class: "knop klein" }, "Controleer")), uit,
      h("button", { class: "knop-tekst", type: "button", style: { paddingLeft: 0 }, onclick: () => { kies(); teken(); } }, "Andere getallen"));
  }
  const teken = () => vul(plek, { bron, boek, online }[tab]());
  const tabs = h("div", { class: "tabs", role: "tablist" }, [["bron", "In de bank"], ["boek", "In het boek"], ["online", "Online"]].map(([k, l]) =>
    h("button", { type: "button", role: "tab", "data-k": k, "aria-selected": String(k === tab), onclick: (e) => {
      tab = k; tabs.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", String(x === e.currentTarget))); teken();
    } }, l)));
  kies(); teken();
  return proefKaart(tabs, plek);
}

// --- de pagina -------------------------------------------------------------------------------------------
const PLANNEN = [
  { id: "differentieren", titel: "Differentiërend oefenen", status: "ontwerp", proef: proefDifferentieer,
    tekst: [
      "Eén opgave, drie niveaus. Wie begint, krijgt hulpvragen die de opgave in stappen opdelen. Wie het al kan, krijgt minder stappen, en een expert alleen nog de vraag zoals ze op de toets staat. Wat wegvalt, blijft zichtbaar in de uitwerking.",
      "De opgaven komen uit generatoren: telkens andere getallen, dus eindeloos oefenen. Wie vastzit, opent een soortgelijk voorbeeld met andere getallen, maar dan telt de opgave niet meer mee. Bij een fout ziet de leerling meteen de juiste uitwerking, niet alleen \"fout\"."] },
  { id: "theorie", titel: "Interactieve theorie", status: "voorbeeld", proef: proefTheorie, voorbeeld: true,
    tekst: [
      "Eerst kijken, dan formaliseren. De leerling sleept zelf aan een figuur en ziet wat er gebeurt. Pas daarna benoemt de theorie wat hij net zag. Elke formule krijgt een tekening, met dezelfde letters en kleuren als de tekst.",
      "Voorbeelden lopen stap per stap: probeer de volgende stap eerst zelf, en klik dan pas verder. Het eerste hoofdstuk van Integralen bestaat al zo als voorbeeld."] },
  { id: "nakijken", titel: "Automatisch nakijken, met Fout? Herhaal", status: "voorbeeld", proef: proefNakijken,
    tekst: [
      "De leerling typt een antwoord als formule. De site kijkt na of het wiskundig klopt, niet of het letterlijk hetzelfde is: 2x³ − x² + C en x²(2x − 1) zijn allebei goed.",
      "Bij een fout herkent de site de bekende vergissingen en wijst ze naar de plek in het boek waar je dat herhaalt, zoals het schema Fout? Herhaal onder elke Test jezelf."] },
  { id: "toetsen", titel: "Toetsen en oefenreeksen op maat", status: "idee", proef: proefToets,
    tekst: [
      "Kies de onderwerpen, het niveau en het aantal vragen, en de oefeningenbank stelt een toets samen: met een versie A en B, een puntenverdeling en een verbetersleutel. Zoals in het boek staan de onderwerpen door elkaar en stijgt de moeilijkheid.",
      "Op dezelfde manier ontstaan oefenreeksen per leerling: wie de basis beheerst, krijgt verdieping; wie nog worstelt, krijgt meer van hetzelfde niveau."] },
  { id: "lezen", titel: "Het handboek als webpagina", status: "idee", proef: proefLezen,
    tekst: [
      "Naast de PDF ook een webversie van elk handboek: leesbaar op een gsm, met een grotere letter, een leesvriendelijke stand en voorlezen. Formules krijgen een uitgesproken vorm, zodat ook een schermlezer ze kan voorlezen.",
      "Dat helpt leerlingen met dyslexie of een visuele beperking, en iedereen die het boek op de bus wil lezen."] },
  { id: "bank", titel: "Een open oefeningenbank", status: "bank", proef: proefBank,
    tekst: [
      "Elke oefening staat één keer in de bank, met een vast nummer, een niveau, een antwoord en een uitwerking. Daaruit komen het boek, de oplossingen, de website en de toetsen.",
      "Straks voegen leerkrachten zelf oefeningen toe, via een formulier op deze site of rechtstreeks op GitHub. Het team kijkt ze na, en dan staan ze in het boek van iedereen. Nieuw is dat de getallen kunnen variëren, en dat elke oefening de leerplandoelen kent waarop ze oefent."] },
];

function toonPlannen() {
  const naar = (id) => (e) => { e.preventDefault(); document.getElementById("plan-" + id)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); };
  scherm("plannen",
    h("article", { class: "plannen" },
      h("header", { class: "plannen-kop" },
        h("p", { class: "bovenkop" }, "Toekomstige plannen"),
        h("h1", {}, "Wat we nog willen bouwen"),
        h("p", { class: "lead" }, "De handboeken zijn de eerste stap. Uit dezelfde oefeningenbank willen we meer maken, voor de klas en voor thuis. Van elk plan staat hier een klein voorproefje: het werkt echt, maar het is nog geen af product. De opgaven zijn voorbeelden met willekeurige getallen."),
        h("nav", { class: "plannen-inhoud", "aria-label": "Plannen" }, PLANNEN.map((p, i) =>
          h("a", { href: "#/plannen", onclick: naar(p.id) }, h("span", { class: "nr" }, String(i + 1)), p.titel)))),
      PLANNEN.map((p, i) => h("section", { class: "plan", id: "plan-" + p.id, "aria-labelledby": "kop-" + p.id },
        h("div", { class: "plan-tekst" },
          h("p", { class: "plan-nr" }, String(i + 1).padStart(2, "0"), h("span", { class: `plan-status st-${p.status}` }, STATUS[p.status])),
          h("h2", { id: "kop-" + p.id }, p.titel),
          p.tekst.map((t) => h("p", {}, t)),
          p.voorbeeld ? h("p", {}, h("a", { class: "knop klein licht", href: "/voorbeeld/integralen/", target: "_blank", rel: "noopener" }, "Open het voorbeeld: Integralen, hoofdstuk 1 ↗")) : null),
        p.proef())),
      h("section", { class: "plan plan-slot" },
        h("h2", {}, "Wat denk je ervan?"),
        h("p", {}, "Welk plan moet eerst? Wat ontbreekt er? ",
          S.ik ? [h("a", { href: "#/algemeen" }, "Geef algemene feedback"), ": over het idee, of over één plan."] : [h("a", { href: "#/aanmelden" }, "Meld je aan"), " als leerkracht en zeg het ons, of ", h("a", { href: "#/over" }, "lees waar Axiomath voor staat"), "."]))));
}
