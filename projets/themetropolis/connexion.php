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
    <?php include 'includes/navbar.php' ?>
    
    <div class="home_background" id="home_background">

    <form action="traitement_connexion.php" method="post">
        <h2>Connexion</h2>
      <label for="fname">E-Mail:</label><br>
      <input type="text" name="mail" required><br>
     <label for="lname">Mot de passe:</label><br>
     <input type="password" name="mdp" required><br><br>
     <input class="btn_submit" type="submit" value="Connexion">
    </form> 

    </div>

    <?php include 'includes/footer.php' ?>

<!-- Compiled and minified JavaScript -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
</body>
</html>