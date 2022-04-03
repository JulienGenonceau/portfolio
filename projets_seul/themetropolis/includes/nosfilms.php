<?php include 'navbar.php';?>

<div class="carousel" id="carouselTopPage">
<?php

$req=$db->query('SELECT film_img, film_id FROM film'); 
while($row = $req->fetch(PDO::FETCH_ASSOC)){

echo '

    <a class="carousel-item top" href="film.php?id='.$row['film_id'].'"><img src="img/affiches/'.$row['film_img'].'.jpg"></a>

    ';
}

?>    
  </div>

  <section class="nosfilms" id="section_nosfilms">
    <h2>Nos Films</h2>
  
  </section>

<?php

// création de la requête

$req=$db->query('SELECT categorie_name, categorie_id FROM categorie'); 
while($row = $req->fetch(PDO::FETCH_ASSOC)){
  echo "<div class='categorie_name' id='categorie_CategorieID".$row['categorie_id']."'>" . $row['categorie_name'] ."</div>";
}

 // echo "<div class='categorie_name'>". $row['categorie_name'] ."</div>";



$requete = $db->prepare ("SELECT * FROM film 
INNER JOIN appartient ON film.film_id = appartient.film_id
INNER JOIN categorie ON categorie.categorie_id = appartient.categorie_id
");

$requete->execute();
$total=$requete->fetchAll();

foreach ($total as $row) {
  echo "<div class='categorie_film' id='film_CategorieID". $row['categorie_id'] . "'>";
  include("includes/film_infos.php");
  echo "</div>";
}

?>

  <?php include 'footer.php'; ?>

<!-- Compiled and minified JavaScript -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
  <script src = "js/script_carousel.js">
      
  </script>

  
<!-- echo "<div class='categorie_name'>". $row['categorie_name'] ."</div>"; -->