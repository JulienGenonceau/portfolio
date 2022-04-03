<?php

$playerId = $_POST["user_id"];

include 'db.php';

echo "<div class=invisible>";


foreach($dbh->query('SELECT player_id, player_name, posx, posy from player') as $row) {

    
echo "<div class=playername>";
        echo $row['player_name']. "<br>";
        echo "</div>";

echo "<div class=playerData>";
echo "<div class=playerData_name>".$row['player_name']."</div>";
echo "<div class=playerData_id>".$row['player_id']."</div>";
echo "<div class=playerData_posx>".$row['posx']."</div>";
echo "<div class=playerData_posy>".$row['posy']."</div>";
echo "</div>";        

}


echo "</div>";

?>

<script>

playerList.innerHTML = ""
playerList.innerText = ""
playerList.innerHTML = "Joueurs connectés: <br><br>"

var allPlayerNames = document.querySelectorAll(".playername");

allPlayerNames.forEach(element => 
playerList.innerHTML += element.innerText + "<br>"
);

var allPlayersData = document.querySelectorAll(".playerData");

//AFFICHER LES JOUEURS DANS LA GAME !!!!!

gameContainer.innerHTML = "";
allPlayersData.forEach(playerDisplay);

function playerDisplay(playerData) {
  
    var joueur_div = document.createElement("div");
    joueur_div.className = "joueur"
    const posx = playerData.children[2].innerHTML
    const posy = playerData.children[3].innerHTML
    joueur_div.style.transform = "translate("+posx+"px, "+posy+"px)";

    if (playerData.children[1].innerHTML != currentPlayerID){
        var pseudoDiv = document.createElement("div")
        pseudoDiv.className = "pseudo"
        pseudoDiv.innerHTML = playerData.children[0].innerHTML
        joueur_div.appendChild(pseudoDiv)
    }

    gameContainer.appendChild(joueur_div);

}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log("up")
        updatePos(2, -1)
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log("down")
        updatePos(2, 1)
    }
    else if (e.keyCode == '37') {
       // left arrow
        console.log("left")
        updatePos(1, -1)
    }
    else if (e.keyCode == '39') {
       // right arrow
        console.log("right")
        updatePos(1, 1)
    }

}

function updatePos(direction, value){

    $.post( 
    'changeplayerpos.php', // location of your php script
    { user_id: currentPlayerID, direction: direction, value: value}, // any data you want to send to the script
    function( data ){  // a function to deal with the returned information

        $( 'body ').append( data );

    });

}

$('.invisible').remove();

</script>