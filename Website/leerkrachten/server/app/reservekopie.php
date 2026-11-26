<?php
/* Elke nacht een reservekopie van de databank (accounts en feedback), via de cron van DirectAdmin (uitrol.py zet die
   taak klaar). De kopie komt in app/reservekopie/, naast de databank en dus buiten public_html: nooit via het web op te
   vragen. VACUUM INTO maakt een volledige, samenhangende kopie, ook terwijl de site schrijft (WAL). We bewaren er 30:
   wat iemand laat wissen, is dus na 30 dagen ook uit de kopieën weg.

       php reservekopie.php            maak de kopie van vandaag en wis die ouder dan 30 dagen
*/
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require __DIR__ . '/lib.php';

const BEWAAR = 30;
$map = __DIR__ . '/reservekopie';
if (!is_dir($map) && !mkdir($map, 0700)) { fwrite(STDERR, "kan $map niet maken\n"); exit(1); }
$doel = $map . '/axiomath-' . date('Y-m-d') . '.sqlite';
if (is_file($doel)) unlink($doel);  // een tweede keer op dezelfde dag: opnieuw
db()->exec('VACUUM INTO ' . db()->quote($doel));
chmod($doel, 0600);
$ok = rij('PRAGMA integrity_check');
$kopie = new PDO('sqlite:' . $doel);
$telling = $kopie->query('SELECT COUNT(*) FROM gebruikers')->fetchColumn() . ' accounts, '
         . $kopie->query('SELECT COUNT(*) FROM feedback')->fetchColumn() . ' opmerkingen';
$kopie = null;
$alle = glob($map . '/axiomath-*.sqlite');
sort($alle);
foreach (array_slice($alle, 0, max(0, count($alle) - BEWAAR)) as $oud) unlink($oud);
echo date('c') . " reservekopie " . basename($doel) . ": $telling, " . round(filesize($doel) / 1024) . " kB, "
   . min(count($alle), BEWAAR) . " kopieën bewaard (databank: " . ($ok ? reset($ok) : '?') . ")\n";
