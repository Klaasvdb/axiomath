<?php
/* Axiomath voor leerkrachten: accounts op uitnodiging, de handboeken lezen en feedback geven.

   Deze map (app/) staat naast public_html, niet erin: de databank, de configuratie en de PDF's zijn dus
   niet rechtstreeks via het web op te vragen. De enige ingang is public_html/api/index.php.

   Wat maak.py hier zet (en uitrol.py online):
     boeken.json        de pakketten, de handboeken en hun status (uit maak-voorkanten.py en voortgang.yaml)
     laatste.json       per handboek en per editie de jongste versie
     versies/<h>.pdf    elke PDF als vaste versie (h = begin van de SHA-256), met versies/<h>.json ernaast
                        (aantal pagina's, paginamaten, inhoudstafel). Een versie wordt nooit overschreven:
                        een opmerking blijft zo altijd bij de pagina waarop ze gemaakt is.
   Wat alleen hier op de server staat: config.php en de databank (accounts en feedback). */

const SOORTEN = [
  'fout' => 'Fout in de wiskunde', 'taal' => 'Tikfout of taal', 'oefening' => 'Oefening of oplossing',
  'uitleg' => 'Uitleg onduidelijk', 'figuur' => 'Figuur of opmaak', 'leerplan' => 'Leerplan of leerstof',
  'didactiek' => 'Didactisch voorstel', 'pluim' => 'Pluim', 'vraag' => 'Vraag', 'andere' => 'Andere',
];
const SOORTEN_ALGEMEEN = ['premisse' => 'De premisse van Axiomath', 'website' => 'Deze website'] + SOORTEN;
const ERNST = ['klein' => 'Klein', 'belangrijk' => 'Belangrijk', 'dringend' => 'Dringend'];
const STATUSSEN = ['nieuw' => 'Nieuw', 'behandeling' => 'In behandeling', 'verwerkt' => 'Verwerkt', 'afgewezen' => 'Niet weerhouden'];
const EDITIES = ['handboek' => 'Handboek', 'leerkracht' => 'Leerkrachtenversie', 'zelfstudie' => 'Zelfstudie',
                 'oplossingen' => 'Oplossingen', 'uitwerkingen' => 'Uitgewerkte oplossingen'];
date_default_timezone_set('Europe/Brussels');
const SESSIEDUUR = 30 * 86400;
const CODEDUUR = 30 * 86400;

/* config.php: ['databank' => pad, 'startcode' => code voor de eerste beheerder]. De testreeks wijst met
   AXIOMATH_CONFIG naar een eigen configuratie met een lege databank. */
function cfg() {
  static $c = null;
  if ($c === null) {
    $pad = getenv('AXIOMATH_CONFIG') ?: __DIR__ . '/config.php';
    $c = is_file($pad) ? require $pad : [];
  }
  return $c;
}

function db() {
  static $pdo = null;
  if ($pdo) return $pdo;
  $pdo = new PDO('sqlite:' . (cfg()['databank'] ?? __DIR__ . '/axiomath.sqlite'), null, null, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
  $pdo->exec('PRAGMA journal_mode = WAL');
  $pdo->exec('PRAGMA busy_timeout = 5000');
  $pdo->exec("
    CREATE TABLE IF NOT EXISTS gebruikers(
      id INTEGER PRIMARY KEY, email TEXT UNIQUE NOT NULL, naam TEXT NOT NULL, wachtwoord TEXT NOT NULL,
      rol TEXT NOT NULL DEFAULT 'leerkracht', actief INTEGER NOT NULL DEFAULT 1, aangemaakt INTEGER, gezien INTEGER);
    CREATE TABLE IF NOT EXISTS codes(
      code TEXT PRIMARY KEY, soort TEXT NOT NULL, rol TEXT, gebruiker INTEGER, notitie TEXT,
      aangemaakt INTEGER, vervalt INTEGER, gebruikt INTEGER, gebruikt_door INTEGER);
    CREATE TABLE IF NOT EXISTS sessies(token TEXT PRIMARY KEY, gebruiker INTEGER NOT NULL, vervalt INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS feedback(
      id INTEGER PRIMARY KEY, gebruiker INTEGER NOT NULL, niveau TEXT NOT NULL, sleutel TEXT, versie TEXT, editie TEXT,
      pagina INTEGER, x0 REAL, y0 REAL, x1 REAL, y1 REAL, citaat TEXT, hoofdstuk TEXT, sectie TEXT,
      soort TEXT NOT NULL, ernst TEXT NOT NULL DEFAULT 'klein', tekst TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'nieuw', notitie TEXT, aangemaakt INTEGER, bijgewerkt INTEGER);
    CREATE INDEX IF NOT EXISTS feedback_sleutel ON feedback(sleutel);
    CREATE INDEX IF NOT EXISTS feedback_versie ON feedback(versie);
    CREATE TABLE IF NOT EXISTS reacties(
      id INTEGER PRIMARY KEY, feedback INTEGER NOT NULL, gebruiker INTEGER NOT NULL, tekst TEXT NOT NULL, aangemaakt INTEGER);
    CREATE TABLE IF NOT EXISTS steun(feedback INTEGER NOT NULL, gebruiker INTEGER NOT NULL, PRIMARY KEY (feedback, gebruiker));
    CREATE TABLE IF NOT EXISTS pogingen(sleutel TEXT PRIMARY KEY, n INTEGER NOT NULL, tot INTEGER NOT NULL);
  ");
  return $pdo;
}

function q($sql, $params = []) { $s = db()->prepare($sql); $s->execute($params); return $s; }
function rij($sql, $params = []) { return q($sql, $params)->fetch() ?: null; }
function iso($t) { return $t ? date('c', (int)$t) : null; }

// --- antwoorden ----------------------------------------------------------------------------------

function antwoord($data, $code = 200, $type = 'application/json; charset=utf-8', $kop = []) {
  http_response_code($code);
  header("Content-Type: $type");
  header('X-Content-Type-Options: nosniff');
  header('Referrer-Policy: same-origin');
  header('X-Frame-Options: DENY');
  header('Cache-Control: ' . ($kop['Cache-Control'] ?? 'no-store'));
  unset($kop['Cache-Control']);
  foreach ($kop as $k => $v) header("$k: $v");
  echo str_contains($type, 'json') ? json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) : $data;
  exit;
}
function fout($boodschap, $code = 400) { antwoord(['fout' => $boodschap], $code); }

function body() {
  $raw = file_get_contents('php://input');
  if (strlen($raw) > 200000) fout('Te groot.', 413);
  if ($raw === '') return [];
  $d = json_decode($raw, true);
  if (!is_array($d)) fout('Ongeldige JSON.');
  return $d;
}

function lengte($s) { return function_exists('mb_strlen') ? mb_strlen($s) : strlen($s); }
function tekstveld($d, $naam, $max = 5000, $verplicht = true) {
  $w = is_string($d[$naam] ?? null) ? trim($d[$naam]) : '';
  if ($verplicht && $w === '') fout("Vul '$naam' in.");
  if (lengte($w) > $max) fout("'$naam' is te lang (max. $max tekens).");
  return $w;
}

// --- accounts ------------------------------------------------------------------------------------

function is_https() {
  return (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
}
function koekje($token, $duur) {
  setcookie('axiomath', $token, ['expires' => $duur ? time() + $duur : time() - 3600, 'path' => '/',
                                 'httponly' => true, 'samesite' => 'Lax', 'secure' => is_https()]);
}
function start_sessie($gid) {
  $token = bin2hex(random_bytes(32));
  q('INSERT INTO sessies(token, gebruiker, vervalt) VALUES (?,?,?)', [hash('sha256', $token), $gid, time() + SESSIEDUUR]);
  q('DELETE FROM sessies WHERE vervalt < ?', [time()]);
  koekje($token, SESSIEDUUR);
}
function ik() {
  $token = $_COOKIE['axiomath'] ?? '';
  if (!is_string($token) || $token === '') return null;
  $r = rij('SELECT g.* FROM sessies s JOIN gebruikers g ON g.id = s.gebruiker WHERE s.token = ? AND s.vervalt > ? AND g.actief = 1',
           [hash('sha256', $token), time()]);
  if ($r && (int)$r['gezien'] < time() - 300) q('UPDATE gebruikers SET gezien = ? WHERE id = ?', [time(), $r['id']]);
  return $r;
}

/* Hoogstens 10 mislukte aanmeldingen per kwartier per IP-adres. */
function rem_check($sleutel) {
  $r = rij('SELECT * FROM pogingen WHERE sleutel = ?', [$sleutel]);
  if ($r && $r['tot'] > time() && $r['n'] >= 10) fout('Te veel pogingen. Probeer het over een kwartier opnieuw.', 429);
}
function rem_mislukt($sleutel) {
  $r = rij('SELECT * FROM pogingen WHERE sleutel = ?', [$sleutel]);
  if ($r && $r['tot'] > time()) q('UPDATE pogingen SET n = n + 1 WHERE sleutel = ?', [$sleutel]);
  else q('INSERT OR REPLACE INTO pogingen(sleutel, n, tot) VALUES (?, 1, ?)', [$sleutel, time() + 900]);
}

function maak_code($soort, $rol = null, $gebruiker = null, $notitie = null) {
  $abc = 'abcdefghjkmnpqrstuvwxyz23456789';  // geen 0/O, 1/l/I
  $delen = [];
  for ($i = 0; $i < 3; $i++) {
    $s = '';
    for ($j = 0; $j < 4; $j++) $s .= $abc[random_int(0, strlen($abc) - 1)];
    $delen[] = $s;
  }
  $code = implode('-', $delen);
  q('INSERT INTO codes(code, soort, rol, gebruiker, notitie, aangemaakt, vervalt) VALUES (?,?,?,?,?,?,?)',
    [$code, $soort, $rol, $gebruiker, $notitie, time(), time() + CODEDUUR]);
  return $code;
}
function code_rij($code, $soort) {
  $r = rij('SELECT * FROM codes WHERE code = ? AND soort = ?', [strtolower(trim((string)$code)), $soort]);
  if (!$r || $r['gebruikt'] || $r['vervalt'] < time()) fout('Deze code is ongeldig, al gebruikt of vervallen. Vraag een nieuwe aan het team.');
  return $r;
}

// --- handboeken en versies -----------------------------------------------------------------------

function json_bestand($naam) {
  $pad = __DIR__ . '/' . $naam;
  return is_file($pad) ? json_decode(file_get_contents($pad), true) : null;
}
function boekdata() {
  static $b = null;
  if ($b === null) $b = json_bestand('boeken.json') ?? fout('De site is nog niet gebouwd: boeken.json ontbreekt (maak.py).', 500);
  return $b;
}
function boek($sleutel) {
  foreach (boekdata()['boeken'] as $b) if ($b['sleutel'] === $sleutel) return $b;
  return null;
}
function laatste() {
  static $l = null;
  if ($l === null) $l = json_bestand('laatste.json') ?? [];
  return $l;
}
/* $ik: wie het vraagt. Zonder account (null) alleen de editie 'handboek'. Bij het maken van feedback is er
   altijd een account, dus daar mag $ik wegblijven. */
function versie($h, $ik = true) {
  if (!is_string($h) || !preg_match('/^[0-9a-f]{20}$/', $h)) fout('Onbekende versie.', 404);
  $v = json_bestand("versies/$h.json") ?? fout('Onbekende versie.', 404);
  if (!$ik && $v['editie'] !== 'handboek') fout('Meld je aan om deze editie te lezen.', 401);
  return $v;
}
function plaats_in_boek($inhoud, $pagina) {
  $hfst = $sectie = null;
  foreach ($inhoud as [$niveau, $titel, $p]) {
    if ($p > $pagina) break;
    if ($niveau == 1) { $hfst = $titel; $sectie = null; }
    elseif ($niveau == 2) $sectie = $titel;
  }
  return [$hfst, $sectie];
}
function nette_citaat($t) {
  $t = preg_replace('/(?:\s*\.){3,}/u', ' … ', (string)$t);  // puntjeslijnen van de inhoudstafel
  $t = trim(preg_replace('/\s+/u', ' ', $t));
  return function_exists('mb_substr') ? mb_substr($t, 0, 600) : substr($t, 0, 600);
}

// --- feedback ------------------------------------------------------------------------------------

function feedback_rijen($ik, $waar = '1=1', $params = [], $met_namen = true) {
  $rijen = q("SELECT f.*, g.naam AS auteur,
                (SELECT COUNT(*) FROM steun s WHERE s.feedback = f.id) AS steun,
                (SELECT COUNT(*) FROM steun s WHERE s.feedback = f.id AND s.gebruiker = ?) AS gesteund
              FROM feedback f JOIN gebruikers g ON g.id = f.gebruiker WHERE $waar ORDER BY f.aangemaakt DESC, f.id DESC",
             array_merge([$ik['id']], $params))->fetchAll();
  $reacties = [];
  if ($rijen) {
    $ids = array_column($rijen, 'id');
    $s = q('SELECT r.*, g.naam, g.rol FROM reacties r JOIN gebruikers g ON g.id = r.gebruiker
            WHERE r.feedback IN (' . implode(',', array_fill(0, count($ids), '?')) . ') ORDER BY r.aangemaakt, r.id', $ids);
    foreach ($s as $r) $reacties[$r['feedback']][] = ['id' => (int)$r['id'], 'tekst' => $r['tekst'], 'naam' => $r['naam'],
                                                     'team' => $r['rol'] === 'beheerder', 'op' => iso($r['aangemaakt'])];
  }
  $uit = [];
  foreach ($rijen as $r) {
    $d = [
      'id' => (int)$r['id'], 'niveau' => $r['niveau'], 'sleutel' => $r['sleutel'], 'versie' => $r['versie'], 'editie' => $r['editie'],
      'pagina' => $r['pagina'] === null ? null : (int)$r['pagina'], 'citaat' => $r['citaat'], 'hoofdstuk' => $r['hoofdstuk'],
      'sectie' => $r['sectie'], 'soort' => $r['soort'], 'ernst' => $r['ernst'], 'tekst' => $r['tekst'], 'status' => $r['status'],
      'steun' => (int)$r['steun'], 'gesteund' => (bool)$r['gesteund'], 'van_mij' => (int)$r['gebruiker'] === (int)$ik['id'],
      'rect' => $r['x0'] === null ? null : [(float)$r['x0'], (float)$r['y0'], (float)$r['x1'], (float)$r['y1']],
      'auteur' => $met_namen ? $r['auteur'] : null, 'aangemaakt' => iso($r['aangemaakt']), 'bijgewerkt' => iso($r['bijgewerkt']),
      'reacties' => $reacties[$r['id']] ?? [],
    ];
    if (($ik['rol'] ?? '') === 'beheerder') $d['notitie'] = $r['notitie'];
    $uit[] = $d;
  }
  return $uit;
}
function een_feedback($ik, $id) { return feedback_rijen($ik, 'f.id = ?', [$id])[0]; }

function filter_sql($f) {
  $waar = ['1=1']; $p = [];
  foreach (['sleutel', 'soort', 'ernst', 'niveau', 'editie'] as $veld) {
    if (!empty($f[$veld])) { $waar[] = "f.$veld = ?"; $p[] = $f[$veld]; }
  }
  $st = $f['status'] ?? '';
  if ($st === 'open') $waar[] = "f.status IN ('nieuw','behandeling')";
  elseif ($st !== '') { $waar[] = 'f.status = ?'; $p[] = $st; }
  if (!empty($f['pakket'])) { $waar[] = 'f.sleutel LIKE ?'; $p[] = $f['pakket'] . '/%'; }
  if (!empty($f['zoek'])) { $waar[] = '(f.tekst LIKE ? OR f.citaat LIKE ?)'; $p[] = "%{$f['zoek']}%"; $p[] = "%{$f['zoek']}%"; }
  return [implode(' AND ', $waar), $p];
}

function titel_van($sleutel) {
  $b = boek($sleutel);
  return $b ? "{$b['titel']} (pakket {$b['pakketnr']})" : ($sleutel ?: 'Algemeen');
}

/* Geordend zoals je ze verwerkt: per handboek, per editie, per hoofdstuk, op paginavolgorde.
   Zonder namen: dit bestand mag in een issue of naast de cursus belanden. */
function als_markdown($rijen) {
  $volgorde = array_merge([''], array_column(boekdata()['boeken'], 'sleutel'));
  $groepen = [];
  foreach ($rijen as $r) $groepen[$r['sleutel'] ?? ''][] = $r;
  uksort($groepen, function ($a, $b) use ($volgorde) {
    $ia = array_search($a, $volgorde, true); $ib = array_search($b, $volgorde, true);
    return ($ia === false ? 999 : $ia) <=> ($ib === false ? 999 : $ib);
  });
  $l = ['# Feedback Axiomath (' . date('d-m-Y') . ')', ''];
  foreach ($groepen as $sleutel => $rs) {
    $l[] = '## ' . ($sleutel === '' ? 'Algemeen (premisse, website, alle handboeken)' : titel_van($sleutel));
    $l[] = '';
    if ($b = boek($sleutel)) { $l[] = "Map: `Handboeken/{$b['pakket']}/{$b['map']}/`"; $l[] = ''; }
    $orde = ['algemeen' => 0, 'handboek' => 1, 'plek' => 2];
    usort($rs, fn($a, $b) => [$orde[$a['niveau']], $a['editie'] ?? '', $a['pagina'] ?? 0, $a['rect'][1] ?? 0]
                         <=> [$orde[$b['niveau']], $b['editie'] ?? '', $b['pagina'] ?? 0, $b['rect'][1] ?? 0]);
    $huidige = null;
    foreach ($rs as $r) {
      $kop = $r['niveau'] === 'algemeen' ? 'Algemeen' : ($r['niveau'] === 'handboek' ? 'Over het hele handboek'
           : (EDITIES[$r['editie']] ?? $r['editie']) . ' · ' . ($r['hoofdstuk'] ?: 'Voor het eerste hoofdstuk'));
      if ($kop !== $huidige) { $l[] = "### $kop"; $l[] = ''; $huidige = $kop; }
      $plaats = $r['pagina'] ? 'p. ' . $r['pagina'] . ($r['sectie'] ? ', ' . $r['sectie'] : '') : '';
      $jongste = laatste()[$sleutel][$r['editie'] ?? '']['hash'] ?? null;
      $oud = $r['versie'] && $jongste && $jongste !== $r['versie'];
      $meta = array_filter([$plaats, SOORTEN_ALGEMEEN[$r['soort']] ?? $r['soort'], ERNST[$r['ernst']] ?? $r['ernst'],
                            STATUSSEN[$r['status']], $r['steun'] ? "{$r['steun']} steun" : '', $oud ? 'oudere versie' : '']);
      $l[] = "- [ ] **#{$r['id']}** " . implode(' · ', $meta);
      if ($r['citaat']) $l[] = '  > ' . $r['citaat'];
      foreach (preg_split('/\R/u', trim($r['tekst'])) as $regel) $l[] = "  $regel";
      foreach ($r['reacties'] as $re) $l[] = '  - *' . ($re['team'] ? 'Team' : 'Leerkracht') . ':* ' . preg_replace('/\s+/u', ' ', $re['tekst']);
      $l[] = '';
    }
  }
  return implode("\n", $l) . "\n";
}

function als_csv($rijen) {
  $f = fopen('php://temp', 'r+');
  fputcsv($f, ['id', 'handboek', 'niveau', 'editie', 'pagina', 'hoofdstuk', 'sectie', 'soort', 'ernst', 'status', 'steun',
               'tekst', 'citaat', 'auteur', 'aangemaakt', 'notitie'], ';', '"', '');
  foreach ($rijen as $r) {
    fputcsv($f, [$r['id'], $r['sleutel'], $r['niveau'], $r['editie'], $r['pagina'], $r['hoofdstuk'], $r['sectie'], $r['soort'],
                 $r['ernst'], $r['status'], $r['steun'], $r['tekst'], $r['citaat'], $r['auteur'], $r['aangemaakt'], $r['notitie'] ?? ''],
            ';', '"', '');
  }
  rewind($f);
  return "\u{FEFF}" . stream_get_contents($f);  // BOM: Excel opent het dan als UTF-8
}

// --- routes --------------------------------------------------------------------------------------

/* De app vraagt api/index.php?r=<pad>. Alles wat iets wijzigt, komt als POST met de kop X-Axiomath
   (een formulier van een andere site kan die niet zetten: dat volstaat tegen CSRF). PATCH en DELETE
   reizen als POST met X-Methode, omdat niet elke gedeelde hosting ze doorlaat. */
function route() {
  $pad = trim((string)($_GET['r'] ?? ''), '/');
  $m = $_SERVER['REQUEST_METHOD'] === 'HEAD' ? 'GET' : $_SERVER['REQUEST_METHOD'];
  if ($m === 'POST') {
    if (($_SERVER['HTTP_X_AXIOMATH'] ?? '') !== '1') fout('Verzoek geweigerd.', 403);
    $x = $_SERVER['HTTP_X_METHODE'] ?? '';
    if (in_array($x, ['PATCH', 'DELETE'], true)) $m = $x;
  } elseif ($m !== 'GET') {
    fout('Niet toegestaan.', 405);
  }
  $delen = explode('/', $pad);

  // zonder aanmelden
  if ("$m $pad" === 'GET menu') antwoord(['soorten' => SOORTEN, 'soorten_algemeen' => SOORTEN_ALGEMEEN, 'ernst' => ERNST,
                                           'statussen' => STATUSSEN, 'edities' => EDITIES]);
  if ("$m $pad" === 'POST aanmelden') aanmelden();
  if ("$m $pad" === 'POST registreer') registreer();
  if ("$m $pad" === 'POST herstel') herstel();

  $ik = ik();
  if ("$m $pad" === 'GET ik') antwoord($ik ? ['id' => (int)$ik['id'], 'naam' => $ik['naam'], 'email' => $ik['email'], 'rol' => $ik['rol']] : null);

  // Zonder account: de boekenkast en de editie 'handboek' (lezen en downloaden). De andere edities
  // (leerkrachtenversie, zelfstudie, oplossingen) en alle feedback alleen met een account.
  if ("$m $pad" === 'GET boeken') boeken($ik);
  if ($m === 'GET' && $delen[0] === 'versie' && count($delen) === 2) {
    $v = versie($delen[1], $ik);
    $v['label'] = EDITIES[$v['editie']] ?? $v['editie'];
    $v['jongste'] = laatste()[$v['sleutel']][$v['editie']]['hash'] ?? null;
    antwoord($v, 200, 'application/json; charset=utf-8', ['Cache-Control' => 'private, max-age=60']);
  }
  if ($m === 'GET' && $delen[0] === 'pdf' && count($delen) === 2) pdf($delen[1], $ik);
  if (!$ik) fout('Meld je aan.', 401);

  if ("$m $pad" === 'POST afmelden') {
    q('DELETE FROM sessies WHERE token = ?', [hash('sha256', (string)($_COOKIE['axiomath'] ?? ''))]);
    koekje('', 0);
    antwoord(['ok' => true]);
  }
  if ("$m $pad" === 'POST wachtwoord') {
    $d = body();
    if (!password_verify((string)($d['oud'] ?? ''), $ik['wachtwoord'])) fout('Je huidige wachtwoord klopt niet.');
    if (strlen((string)($d['nieuw'] ?? '')) < 10) fout('Kies een wachtwoord van minstens 10 tekens.');
    q('UPDATE gebruikers SET wachtwoord = ? WHERE id = ?', [password_hash($d['nieuw'], PASSWORD_DEFAULT), $ik['id']]);
    antwoord(['ok' => true]);
  }
  if ($pad === 'feedback' && $m === 'GET') feedback_lijst($ik);
  if ($pad === 'feedback' && $m === 'POST') feedback_nieuw($ik);
  if ($delen[0] === 'feedback' && isset($delen[1]) && ctype_digit($delen[1])) feedback_een($ik, $m, (int)$delen[1], $delen[2] ?? null);
  if ($delen[0] === 'beheer') {
    if ($ik['rol'] !== 'beheerder') fout('Alleen voor beheerders.', 403);
    beheer($ik, $m, array_slice($delen, 1));
  }
  fout('Onbekende vraag.', 404);
}

function aanmelden() {
  $d = body();
  $sleutel = 'ip:' . ($_SERVER['REMOTE_ADDR'] ?? '?');
  rem_check($sleutel);
  $r = rij('SELECT * FROM gebruikers WHERE email = ?', [strtolower(tekstveld($d, 'email', 200))]);
  if (!$r || !password_verify((string)($d['wachtwoord'] ?? ''), $r['wachtwoord']) || !$r['actief']) {
    rem_mislukt($sleutel);
    fout('E-mailadres of wachtwoord klopt niet.', 401);
  }
  start_sessie($r['id']);
  antwoord(['ok' => true]);
}

function registreer() {
  $d = body();
  $naam = tekstveld($d, 'naam', 100);
  $email = strtolower(tekstveld($d, 'email', 200));
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) fout('Dat is geen geldig e-mailadres.');
  $w = (string)($d['wachtwoord'] ?? '');
  if (strlen($w) < 10) fout('Kies een wachtwoord van minstens 10 tekens.');
  $code = strtolower(trim((string)($d['code'] ?? '')));
  $sleutel = 'ip:' . ($_SERVER['REMOTE_ADDR'] ?? '?');
  rem_check($sleutel);
  $start = strtolower((string)(cfg()['startcode'] ?? ''));
  $c = null;
  if ($start !== '' && hash_equals($start, $code)) {
    // De startcode uit config.php maakt de eerste beheerder, en werkt niet meer zodra er een is.
    if (rij("SELECT 1 FROM gebruikers WHERE rol = 'beheerder'")) fout('Deze startcode is al gebruikt. Vraag een uitnodiging aan het team.');
    $rol = 'beheerder';
  } else {
    $r = rij('SELECT * FROM codes WHERE code = ? AND soort = ?', [$code, 'uitnodiging']);
    if (!$r || $r['gebruikt'] || $r['vervalt'] < time()) { rem_mislukt($sleutel); code_rij($code, 'uitnodiging'); }
    $c = $r;
    $rol = $c['rol'] ?: 'leerkracht';
  }
  if (rij('SELECT 1 FROM gebruikers WHERE email = ?', [$email])) fout('Er bestaat al een account met dit e-mailadres. Meld je aan.');
  q('INSERT INTO gebruikers(email, naam, wachtwoord, rol, aangemaakt, gezien) VALUES (?,?,?,?,?,?)',
    [$email, $naam, password_hash($w, PASSWORD_DEFAULT), $rol, time(), time()]);
  $gid = (int)db()->lastInsertId();
  if ($c) q('UPDATE codes SET gebruikt = ?, gebruikt_door = ? WHERE code = ?', [time(), $gid, $c['code']]);
  start_sessie($gid);
  antwoord(['ok' => true]);
}

function herstel() {
  $d = body();
  $w = (string)($d['wachtwoord'] ?? '');
  if (strlen($w) < 10) fout('Kies een wachtwoord van minstens 10 tekens.');
  $c = code_rij($d['code'] ?? '', 'herstel');
  q('UPDATE gebruikers SET wachtwoord = ? WHERE id = ?', [password_hash($w, PASSWORD_DEFAULT), $c['gebruiker']]);
  q('DELETE FROM sessies WHERE gebruiker = ?', [$c['gebruiker']]);
  q('UPDATE codes SET gebruikt = ?, gebruikt_door = ? WHERE code = ?', [time(), $c['gebruiker'], $c['code']]);
  start_sessie($c['gebruiker']);
  antwoord(['ok' => true]);
}

/* Zonder account: alleen de editie 'handboek' en geen tellingen van de feedback ('feedback' => null). */
function boeken($ik) {
  $bd = boekdata();
  $tel = [];
  if ($ik) foreach (q("SELECT sleutel, COUNT(*) AS totaal, SUM(status IN ('nieuw','behandeling')) AS open, SUM(gebruiker = ?) AS mijn
              FROM feedback WHERE sleutel IS NOT NULL GROUP BY sleutel", [$ik['id']]) as $r) {
    $tel[$r['sleutel']] = ['totaal' => (int)$r['totaal'], 'open' => (int)$r['open'], 'mijn' => (int)$r['mijn']];
  }
  $boeken = [];
  foreach ($bd['boeken'] as $b) {
    $ed = laatste()[$b['sleutel']] ?? [];
    $b['edities'] = [];
    foreach (EDITIES as $e => $label) {
      if (!$ik && $e !== 'handboek') continue;
      if (isset($ed[$e])) $b['edities'][] = ['editie' => $e, 'label' => $label, 'hash' => $ed[$e]['hash'],
                                             'paginas' => $ed[$e]['paginas'], 'gebouwd' => iso($ed[$e]['gebouwd'])];
    }
    $omslag = $ed['handboek']['hash'] ?? ($b['edities'][0]['hash'] ?? null);
    $b['omslag'] = $omslag ? "/omslagen/$omslag.webp" : null;
    $b['feedback'] = $ik ? ($tel[$b['sleutel']] ?? ['totaal' => 0, 'open' => 0, 'mijn' => 0]) : null;
    $boeken[] = $b;
  }
  antwoord(['pakketten' => $bd['pakketten'], 'boeken' => $boeken, 'voortgang' => $bd['voortgang']]);
}

function pdf($h, $ik) {
  $v = versie($h, $ik);
  $pad = __DIR__ . "/versies/$h.pdf";
  if (!is_file($pad)) fout('Deze PDF staat niet op de server.', 404);
  $b = boek($v['sleutel']);
  $naam = rawurlencode('Axiomath ' . ($b['titel'] ?? 'handboek') . ' - ' . (EDITIES[$v['editie']] ?? '') . '.pdf');
  http_response_code(200);
  header('Content-Type: application/pdf');
  header('Content-Length: ' . filesize($pad));
  header("Content-Disposition: inline; filename*=UTF-8''$naam");
  header('Cache-Control: private, max-age=31536000, immutable');  // een versie verandert nooit
  header('X-Content-Type-Options: nosniff');
  readfile($pad);
  exit;
}

function feedback_lijst($ik) {
  $g = $_GET;
  if (($g['van'] ?? '') === 'ik') antwoord(feedback_rijen($ik, 'f.gebruiker = ?', [$ik['id']]));
  if (!empty($g['versie'])) antwoord(feedback_rijen($ik, "f.versie = ? AND f.niveau = 'plek'", [$g['versie']]));
  if (!empty($g['sleutel'])) antwoord(feedback_rijen($ik, 'f.sleutel = ?', [$g['sleutel']]));
  if (($g['niveau'] ?? '') === 'algemeen') antwoord(feedback_rijen($ik, "f.niveau = 'algemeen'"));
  fout('Kies een handboek.');
}

function feedback_nieuw($ik) {
  $d = body();
  $niveau = $d['niveau'] ?? '';
  $tekst = tekstveld($d, 'tekst');
  $soort = $d['soort'] ?? '';
  $ernst = $d['ernst'] ?? 'klein';
  if (!isset(ERNST[$ernst])) fout('Kies hoe belangrijk het is.');
  $rij = ['niveau' => $niveau, 'soort' => $soort, 'ernst' => $ernst, 'tekst' => $tekst, 'sleutel' => null, 'versie' => null,
          'editie' => null, 'pagina' => null, 'x0' => null, 'y0' => null, 'x1' => null, 'y1' => null, 'citaat' => null,
          'hoofdstuk' => null, 'sectie' => null];
  if ($niveau === 'algemeen') {
    if (!isset(SOORTEN_ALGEMEEN[$soort])) fout('Kies wat voor feedback het is.');
    if (is_string($d['sleutel'] ?? null) && boek($d['sleutel'])) $rij['sleutel'] = $d['sleutel'];
  } elseif ($niveau === 'handboek') {
    if (!isset(SOORTEN[$soort]) || !is_string($d['sleutel'] ?? null) || !boek($d['sleutel'])) fout('Kies wat voor feedback het is.');
    $rij['sleutel'] = $d['sleutel'];
  } elseif ($niveau === 'plek') {
    if (!isset(SOORTEN[$soort])) fout('Kies wat voor feedback het is.');
    $v = versie($d['versie'] ?? '');
    $n = (int)($d['pagina'] ?? 0);
    if ($n < 1 || $n > $v['paginas']) fout('Die pagina bestaat niet.');
    $r = $d['rect'] ?? null;
    if (!is_array($r) || count($r) !== 4) fout('Ongeldige plaats.');
    $r = array_map(fn($x) => min(max((float)$x, 0.0), 1.0), array_values($r));
    [$hfst, $sectie] = plaats_in_boek($v['inhoud'], $n);
    $rij = array_merge($rij, ['sleutel' => $v['sleutel'], 'versie' => $v['hash'], 'editie' => $v['editie'], 'pagina' => $n,
      'x0' => min($r[0], $r[2]), 'y0' => min($r[1], $r[3]), 'x1' => max($r[0], $r[2]), 'y1' => max($r[1], $r[3]),
      'citaat' => nette_citaat($d['citaat'] ?? '') ?: null, 'hoofdstuk' => $hfst, 'sectie' => $sectie]);
  } else {
    fout('Onbekend soort feedback.');
  }
  $kol = array_keys($rij);
  q('INSERT INTO feedback(gebruiker, ' . implode(', ', $kol) . ', aangemaakt, bijgewerkt) VALUES (?, '
    . implode(', ', array_fill(0, count($kol), '?')) . ', ?, ?)', array_merge([$ik['id']], array_values($rij), [time(), time()]));
  antwoord(een_feedback($ik, (int)db()->lastInsertId()));
}

function feedback_een($ik, $m, $id, $actie) {
  $r = rij('SELECT * FROM feedback WHERE id = ?', [$id]) ?? fout('Deze feedback bestaat niet meer.', 404);
  $beheerder = $ik['rol'] === 'beheerder';
  $eigen = (int)$r['gebruiker'] === (int)$ik['id'];
  if ($actie === 'reactie' && $m === 'POST') {
    if (!$eigen && !$beheerder) fout('Je kan alleen reageren op je eigen feedback.', 403);
    q('INSERT INTO reacties(feedback, gebruiker, tekst, aangemaakt) VALUES (?,?,?,?)', [$id, $ik['id'], tekstveld(body(), 'tekst', 3000), time()]);
    if ($beheerder && $r['status'] === 'nieuw') q("UPDATE feedback SET status = 'behandeling' WHERE id = ?", [$id]);
    q('UPDATE feedback SET bijgewerkt = ? WHERE id = ?', [time(), $id]);
  } elseif ($actie === 'steun' && $m === 'POST') {
    if (rij('SELECT 1 FROM steun WHERE feedback = ? AND gebruiker = ?', [$id, $ik['id']])) q('DELETE FROM steun WHERE feedback = ? AND gebruiker = ?', [$id, $ik['id']]);
    elseif (!$eigen) q('INSERT INTO steun(feedback, gebruiker) VALUES (?,?)', [$id, $ik['id']]);
  } elseif ($actie === null && $m === 'PATCH') {
    $d = body();
    $velden = [];
    if (($eigen && $r['status'] === 'nieuw') || $beheerder) {
      if (array_key_exists('tekst', $d) && $eigen) $velden['tekst'] = tekstveld($d, 'tekst');
      if (isset(SOORTEN_ALGEMEEN[$d['soort'] ?? ''])) $velden['soort'] = $d['soort'];
      if (isset(ERNST[$d['ernst'] ?? ''])) $velden['ernst'] = $d['ernst'];
    }
    if ($beheerder) {
      if (isset(STATUSSEN[$d['status'] ?? ''])) $velden['status'] = $d['status'];
      if (array_key_exists('notitie', $d)) $velden['notitie'] = tekstveld($d, 'notitie', 3000, false);
    }
    if (!$velden) fout('Deze feedback kan je niet meer aanpassen.', 403);
    $set = implode(', ', array_map(fn($k) => "$k = ?", array_keys($velden)));
    q("UPDATE feedback SET $set, bijgewerkt = ? WHERE id = ?", array_merge(array_values($velden), [time(), $id]));
  } elseif ($actie === null && $m === 'DELETE') {
    if (!(($eigen && $r['status'] === 'nieuw') || $beheerder)) fout('Deze feedback is al in behandeling en kan je niet meer verwijderen.', 403);
    q('DELETE FROM reacties WHERE feedback = ?', [$id]);
    q('DELETE FROM steun WHERE feedback = ?', [$id]);
    q('DELETE FROM feedback WHERE id = ?', [$id]);
    antwoord(['ok' => true]);
  } else {
    fout('Onbekende vraag.', 404);
  }
  antwoord(een_feedback($ik, $id));
}

function beheer($ik, $m, $delen) {
  $pad = implode('/', $delen);
  if ("$m $pad" === 'GET feedback') {
    [$waar, $p] = filter_sql($_GET);
    antwoord(feedback_rijen($ik, $waar, $p));
  }
  if ("$m $pad" === 'GET overzicht') {
    antwoord(['telling' => array_map(fn($r) => $r + ['n' => (int)$r['n']],
      q('SELECT sleutel, soort, status, ernst, COUNT(*) AS n FROM feedback GROUP BY sleutel, soort, status, ernst')->fetchAll())]);
  }
  if ("$m $pad" === 'GET export') {
    [$waar, $p] = filter_sql($_GET);
    $csv = ($_GET['formaat'] ?? '') === 'csv';
    $rijen = feedback_rijen($ik, $waar, $p, $csv);
    $datum = date('Y-m-d');
    if ($csv) antwoord(als_csv($rijen), 200, 'text/csv; charset=utf-8', ['Content-Disposition' => "attachment; filename=\"feedback-$datum.csv\""]);
    antwoord(als_markdown($rijen), 200, 'text/markdown; charset=utf-8', ['Content-Disposition' => "attachment; filename=\"feedback-$datum.md\""]);
  }
  if ("$m $pad" === 'GET gebruikers') {
    $g = [];
    foreach (q('SELECT g.*, (SELECT COUNT(*) FROM feedback f WHERE f.gebruiker = g.id) AS n FROM gebruikers g ORDER BY g.naam COLLATE NOCASE') as $r) {
      $g[] = ['id' => (int)$r['id'], 'naam' => $r['naam'], 'email' => $r['email'], 'rol' => $r['rol'], 'actief' => (bool)$r['actief'],
              'aangemaakt' => iso($r['aangemaakt']), 'gezien' => iso($r['gezien']), 'feedback' => (int)$r['n']];
    }
    $c = [];
    foreach (q('SELECT * FROM codes WHERE gebruikt IS NULL AND vervalt > ? ORDER BY aangemaakt DESC', [time()]) as $r) {
      $c[] = ['code' => $r['code'], 'soort' => $r['soort'], 'rol' => $r['rol'], 'notitie' => $r['notitie'],
              'aangemaakt' => iso($r['aangemaakt']), 'vervalt' => iso($r['vervalt'])];
    }
    antwoord(['gebruikers' => $g, 'codes' => $c]);
  }
  if ("$m $pad" === 'POST uitnodiging') {
    $d = body();
    $rol = ($d['rol'] ?? '') === 'beheerder' ? 'beheerder' : 'leerkracht';
    $aantal = min(max((int)($d['aantal'] ?? 1), 1), 50);
    $notitie = tekstveld($d, 'notitie', 200, false) ?: null;
    $codes = [];
    for ($i = 0; $i < $aantal; $i++) $codes[] = maak_code('uitnodiging', $rol, null, $notitie);
    antwoord(['codes' => $codes]);
  }
  if ($m === 'DELETE' && ($delen[0] ?? '') === 'code' && isset($delen[1])) {
    q('DELETE FROM codes WHERE code = ? AND gebruikt IS NULL', [$delen[1]]);
    antwoord(['ok' => true]);
  }
  if ($m === 'POST' && ($delen[0] ?? '') === 'herstel' && ctype_digit($delen[1] ?? '')) {
    antwoord(['code' => maak_code('herstel', null, (int)$delen[1])]);
  }
  if ($m === 'PATCH' && ($delen[0] ?? '') === 'gebruiker' && ctype_digit($delen[1] ?? '')) {
    $gid = (int)$delen[1];
    if ($gid === (int)$ik['id']) fout('Je eigen account pas je hier niet aan.');
    $d = body();
    if (array_key_exists('actief', $d)) {
      q('UPDATE gebruikers SET actief = ? WHERE id = ?', [$d['actief'] ? 1 : 0, $gid]);
      if (!$d['actief']) q('DELETE FROM sessies WHERE gebruiker = ?', [$gid]);
    }
    if (in_array($d['rol'] ?? '', ['leerkracht', 'beheerder'], true)) q('UPDATE gebruikers SET rol = ? WHERE id = ?', [$d['rol'], $gid]);
    antwoord(['ok' => true]);
  }
  fout('Onbekende vraag.', 404);
}
