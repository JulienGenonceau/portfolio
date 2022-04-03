<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include 'includes/head.php';?>
    <title>The Metropolis</title>
</head>
<body>
 
<?php

if (isset($_SESSION['login'])) {
    include 'includes/nosfilms.php';
}
else {
	include 'includes/accueil.php';
}


?>
  
</body>
</html>