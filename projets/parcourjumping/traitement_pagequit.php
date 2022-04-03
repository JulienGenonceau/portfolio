<?php

include 'db.php';

$sql = "DELETE FROM player WHERE player_id=?";
$stmt= $dbh->prepare($sql);
$stmt->execute([$_POST['user_id']]);

// $sql = "INSERT INTO player (player_name, posx, posy) VALUES (?, ?,?)";
// $dbh->prepare($sql)->execute(["ce pelo a été ajouté quand on a quitté la page", 0,0]);

?>