<div id="page_searchMaindiv">

<?php

// ouverture de la connexion


try {

    $dsn = 'mysql:host=db5006773180.hosting-data.io;dbname=dbs5603791';
    $username = 'dbu725647';
    $password = 'S6mV22za';
    $options = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
    $db = new PDO($dsn, $username, $password, $options);
    
    }catch(PDOException $e){
    
        $dsn = 'mysql:host=localhost;dbname=portfolio';
        $username = 'root';
        $password = '';
        $options = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        $db = new PDO($dsn, $username, $password, $options);
    
    }

$requete = $db->prepare ("SELECT * FROM film 
INNER JOIN appartient ON film.film_id = appartient.film_id
INNER JOIN categorie ON categorie.categorie_id = appartient.categorie_id
");

$requete->execute();
$total=$requete->fetchAll();

echo '<div id="page_searchMaindivGrid">';

foreach ($total as $row) {

echo '<div class="film_recherche" id="film_categorieName'.$row['categorie_name'].'"> ';
include("includes/film_infos.php");
echo '</div>';

}

?>
</div>

</div>