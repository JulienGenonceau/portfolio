<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

if (isset($_SESSION['login'])) {
    ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include 'includes/head.php'?>
    <title>Film</title>
</head>
<body>

<?php include 'includes/navbar.php'?>

<div class="film_background" id="film_background">

<?php

// ouverture de la connexion

$dsn = 'mysql:host=localhost;dbname=metropolis';
$username = 'root';
$password = '';
$options = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
$db = new PDO($dsn, $username, $password, $options);
// création de la requête

$film;

$req=$db->query('SELECT * FROM film'); 
while($row = $req->fetch(PDO::FETCH_ASSOC)){
  if ($row['film_id'] == $_GET["id"]){
    $film = $row;
  }
}

echo "

<div id='film_background_flou'
style='background-image: url(\"img/images_wallpaper/".$film["film_img"].".jpg\")'
></div>
<div id='film_background_net'
style='background-image: url(\"img/images_wallpaper/".$film["film_img"].".jpg\")'
></div>


"

?>
<div class="film_bignamediv">

<p class="film_bigname"><?php echo strtoupper($film['film_name']) ?></p>
</div>

</div>
<div class="film_infos_container">
<div class="film_infos">
  <article><div class="film_info title">Résumé</div><div class="film_info text"><?php echo $film['film_desc'] ?></div></article>
  <article><div class="film_info title">Infos</div><div class="film_info text"><?php echo $film['film_infos'] ?></div></article>
  <article><div class="film_info title">Acteurs</div><div class="film_info text">
      - Lorem ipsum <br>
      - Lorem ipsum <br>
      - Lorem ipsum <br>
      - Lorem ipsum <br>
      - Lorem ipsum <br>
      - Lorem ipsum <br>
      - Lorem ipsum <br>
      - Lorem ipsum <br>
  </div></article>
</div>
</div>

<div class="film_video_container">
    <h2>Film</h2>

    <?php
    
    echo "<iframe class='video' src='https://www.youtube.com/embed/".$film['film_vid']."?autoplay=1' allow='autoplay'>
        </iframe>"

    ?>

</div>


<?php include 'includes/footer.php' ?>


<script src="js/script_textautosize.js"></script>
</body>
</html>

    <?php
}
else {
	header('Location:index.php');
}


?>