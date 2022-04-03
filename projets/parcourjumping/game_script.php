


<?php

session_start();

include 'db.php';

$playerID = $_POST['player_id'];
$playerName = $_POST['player_name'];

$foundPlayer = false;
foreach($dbh->query('SELECT player_id from player') as $row) {
    if ($row['player_id']==$playerID) {$foundPlayer = true; break;}
}

if (!$foundPlayer) {
    echo "Vous êtes déconnecté";
    die();
}

echo "Player Name: ".$playerName.", Player ID: <div id=player_id>".$playerID."</div><br><br>";

echo "<div id='playerList'>";
echo "Joueurs connectés: <br><br>";
foreach($dbh->query('SELECT player_name from player') as $row) {

        echo $row['player_name']. "<br>";

}
echo"</div>";


echo "<div id='gameContainer'>";


echo "<div id=currentPlayerID class='currentPlayerID'>".$playerID."</div>";
?>

<script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
const playerList = document.getElementById("playerList")
const gameContainer = document.getElementById("gameContainer")
const currentPlayerID = document.getElementById('currentPlayerID').innerHTML;

setInterval(function () {
   
    $.post( 
    'game_interval.php', // location of your php script
    { user_id: document.getElementById("player_id").innerText }, // any data you want to send to the script
    function( data ){  // a function to deal with the returned information

        $( 'body ').append( data );

    });

}, 50);

</script>
<?php
echo"</div>";

?>

<script type="text/javascript">

window.onbeforeunload = function(){

    $.post( 
    'traitement_pagequit.php', // location of your php script
    { user_id: document.getElementById("player_id").innerText }, // any data you want to send to the script
    function( data ){  // a function to deal with the returned information

        $( 'body ').append( data );

    });
    
};


</script>