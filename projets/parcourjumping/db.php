<?php
try {
    $dbh = new PDO('mysql:host=localhost;dbname=portfolio', 'root', '', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    $dbh = new PDO('mysql:host=db5006773180.hosting-data.io;dbname=dbs5603791', 'dbu725647', 'S6mV22za', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
}
?>