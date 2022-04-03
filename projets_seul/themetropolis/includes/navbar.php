<?php 
$showOriginalNavBar = true;

if (isset($_SESSION['login'])) {
  $showOriginalNavBar = false;
}

if ($showOriginalNavBar){

  ?>

  <div class="nav">
  <ul>
    <section class="nav-section one">
    <li><a href="connexion.php" class="nav-link">Connexion</a></li>
    </section>
    <section class="nav-section two">
    <li><a href="inscription.php" class="nav-link">Inscription</a></li>
    </section>
  </ul>
</div>

<?php


}else{

  ?>
  <div class="nav" id="navbarid">
  <ul>
    <section class="nav-section one">
    <div id="navbar_logo"></div>
    </section>
    <section class="nav-section two" id="navbar_sectiontwo">
      
      <div id="searchbar_loupe"></div>
      <div id="searchbar_bar">
        <input id="navinput" type="text"></input>
      </div>

    <li class="nav2 no-click"><a class="nav-link no-click nav2">Bienvenue, 
      <?php echo $_SESSION['pseudo'] ?>
    </a></li>
    <li class="nav2"><a href="index.php" class="nav-link nav2">Accueil</a></li>
    <li class="nav2"><a href="traitement_deconnexion.php" class="nav-link nav2">Déconnexion</a></li>
    </section>
  </ul>
  
  <div class="burger" id="burger"></div>
  <div class="liens_burger" id="liens_burger">
    <li class="nav2"><a href="#" class="nav-link nav2">Accueil</a></li>
    <li class="nav2"><a href="#" class="nav-link nav2">Déconnexion</a></li>
  </div>

</div>
<script src="js/script_navbar.js"></script>
<?php

include "includes/search.php";

}

?>

<div id="page_main">