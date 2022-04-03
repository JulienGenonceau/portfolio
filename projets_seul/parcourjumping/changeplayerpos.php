<?php


try {
    $dbh = new PDO('mysql:host=localhost;dbname=parcourjumping', 'root', '', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}



$playerID = $_POST["user_id"];
$direction = $_POST["direction"];
$value = $_POST["value"];

$pos = "";

if ($direction == 1){
$pos = "posx";
}

if ($direction == 2){
$pos = "posy";
}

$newpos = 0;
$speed = 5;

foreach($dbh->query('SELECT player_id, posx, posy from player') as $row) {
    if ($row['player_id']==$playerID) {
        
            if ($direction == 1){
            $newpos = $row['posx']+(1*$speed)*$value;
            }
            
            if ($direction == 2){
                $newpos = $row['posy']+(1*$speed)*$value;
            }

        break;}
}

$sql = "UPDATE player SET $pos=? WHERE player_id=?";
$stmt= $dbh->prepare($sql);
$stmt->execute([$newpos, $playerID]);

?>