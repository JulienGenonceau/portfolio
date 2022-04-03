<?php

if(isset($_POST['pseudo']) && isset($_POST['mdp']) && isset($_POST['mdp'])){


    $pseudo = $_POST['pseudo'];
    $mail = $_POST['mail'];
    $mdp = $_POST['mdp'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "metropolis";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Verifier que l'adresse n'est pas déjà prise
$mail_existe = false;
$sql = "SELECT user_mail FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    if ($row['user_mail'] == $mail){
        $mail_existe = true;
    }
  }
}

if (!$mail_existe){
    $sql = "INSERT INTO users (user_name, user_password, user_mail, role_id)
    VALUES ('$pseudo', '$mdp', '$mail', '1')";
    
    if ($conn->query($sql) === TRUE) {
      echo "Compte créé avec succès<br>";
      // On démarre la session
      session_start ();

      // On détruit les variables de notre session
      session_unset ();

      // On détruit notre session
      session_destroy ();

      session_start ();

        $_SESSION["login"]=true;
        $_SESSION["pseudo"]=$pseudo;

      header("Location: index.php");
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error. "<br>";
    }
}else{
    echo "Impossible de creer le compte, un compte est déjà entré avec cette adresse mail<br>";
}

//AFFICHER TOUS LES COMPTES

$sql = "SELECT user_name, user_mail, role_id FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "Name: " . $row["user_name"]. " Mail: " . $row["user_mail"]. " - Role: " . $row["role_id"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();

}
?>