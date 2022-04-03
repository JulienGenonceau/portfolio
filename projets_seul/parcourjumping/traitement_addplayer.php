<?php

session_start();

try {
    $dbh = new PDO('mysql:host=localhost;dbname=parcourjumping', 'root', '');
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}

$sql = "INSERT INTO player (player_name, posx, posy) VALUES (?, ?,?)";
$dbh->prepare($sql)->execute([$_POST['nom'], 0,0]);

echo "<div id='player_id'>".$dbh->lastInsertId()."</div>";
echo "<div id='player_name'>".$_POST['nom']."</div>";


//header("Location/: game.php");

?>

<script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>

var url = 'game.php';
var form = $('<form action="' + url + '" method="post">' +
  '<input type="text" name="player_id" value="' + document.getElementById("player_id").innerText + '" />' +
  '<input type="text" name="player_name" value="' + document.getElementById("player_name").innerText + '" />' +
  '</form>');
$('body').append(form);
form.submit();

</script>