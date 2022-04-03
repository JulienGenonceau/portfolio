<?php 

session_start ();

if(isset($_POST['mail']) && isset($_POST['mdp'])){

$pseudo  = "";
$mail = $_POST['mail'];
$mdp = $_POST['mdp'];


//get bdd
// Create connection
$conn = new mysqli("localhost", "root", "", "metropolis");
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}else{
    echo "Bdd trouvée<br><br>";
}
$sql = "SELECT user_name, user_mail, user_password, role_id FROM users";
$result = $conn->query($sql);

$maillookingfor  = "";
$mdplookingfor = "";
$rolelookingfor = 0;


if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    if ($row["user_mail"]==$mail){

        $pseudo = $row["user_name"];
        $maillookingfor = $row["user_mail"];
        $mdplookingfor = $row["user_password"];
        $rolelookingfor = $row["role_id"];

        break;
    }
  }
} else {
  echo "0 results";
}
$conn->close();

if ($maillookingfor==$mail){
    if ($mdplookingfor == $mdp){
        echo ("Bienvenue, ".$pseudo. "<br><br>");

        
        switch ($rolelookingfor) {
          case 1:
            echo "Vous êtes un utilisateur";
              break;
          case 2:
              echo "Vous êtes un administrateur";
              break;
        }

        $_SESSION["login"]=true;
        $_SESSION["pseudo"]=$pseudo;
        
       // echo "<script> window.location.replace('index.php') </script>";
       header('Location: index.php');

    } else {
        echo ("Ce n'est pas le bon mot de passe");
    }
} else {
    echo "Votre mail n'existe pas dans notre base de données";
}

}

?>