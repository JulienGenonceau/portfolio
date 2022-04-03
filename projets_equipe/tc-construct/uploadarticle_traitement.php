<?php
  
  
    //IMAGES GALLERIE
    $files = array_filter($_FILES['uplod']['name']); //Use something similar before processing files.
    // Count the number of uploaded files in array
    $total_count = count($_FILES['uplod']['name']);
    // Loop through every file

    $liste_sans_doublonsTmp = [];
    $liste_sans_doublons = [];

    for( $i=0 ; $i < $total_count ; $i++ ) {
      
      if (!in_array($_FILES['uplod']['name'][$i], $liste_sans_doublons))
      {
      array_push($liste_sans_doublons, $_FILES['uplod']['name'][$i]);
      array_push($liste_sans_doublonsTmp, $_FILES['uplod']['tmp_name'][$i]);
      }


    }
$msg = "<br>Failed to upload images";
    for( $i=0 ; $i < count($liste_sans_doublons) ; $i++ ) {
      $image = rand(0,9999999).$liste_sans_doublons[$i];
      $target = "img/articles/gallerie/".basename($image);

      if (move_uploaded_file($liste_sans_doublonsTmp[$i], $target)) {
          $msg = "Image uploaded successfully";
      }


  }

  echo $msg;

  //INSERER IMAGE DANS DOSSIER
  if (isset($_POST['upload'])) {
  	// Get image name
  	$image = rand(0,9999999).$_FILES['image']['name'];

  	// image file directory
  	$target = "img/articles/".basename($image);

  	if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
  		$msg = "Image uploaded successfully";
  	}else{
  		$msg = "Failed to upload image";
  	}
      
    echo "<div id = 'article_title'>".$_POST["article_title"]."</div>";
    echo "<div id = 'article_imageurl'>".$image."</div>";
    echo "<div id = 'article_contenu'>".$_POST["article_contenu"]."</div>";
  }
  
  //Connexion bdd

  try{
    $bdd = new PDO('mysql:host=localhost;dbname=tcconstruction','root','');
    $bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);
    }catch(PDOException $e){
        echo 'Connexion impossible';
        die();
    }

    $article_title = $_POST["article_title"];
    $article_contenu = $_POST["article_contenu"];
    $article_date = date("d.m.y");

    $req = $bdd->prepare("INSERT INTO article (titre_article, imgp_article, contenu_article, date_article, id_categorie) VALUES (?, ?, ?, ?, ?)");
    $req->execute(array(
            $article_title,
            $image,
            $article_contenu,
            $article_date,
            1
            ));

     $stmt = $bdd->prepare("SELECT id_article FROM article ORDER BY id_article DESC LIMIT 1"); 
     $stmt->execute(); 
     $row = $stmt->fetch();
     $id_article = $row->id_article;

     for( $i=0 ; $i < count($liste_sans_doublons) ; $i++ ) {

      $req = $bdd->prepare("INSERT INTO image (url_image, id_article) VALUES (?, ?)");
      $req->execute(array(
               $liste_sans_doublons[$i],
               $id_article
              ));

     }


?>