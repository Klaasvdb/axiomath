<?php
/* De enige publieke ingang van de server. Alle logica staat in app/, buiten public_html. */
require __DIR__ . '/../../app/lib.php';
try {
  route();
} catch (Throwable $e) {
  error_log('axiomath: ' . $e->getMessage());
  fout('Er liep iets mis op de server.', 500);
}
