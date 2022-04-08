<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Peche&Co</title>
    <style> @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap'); </style> 
    <style> @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans:wght@300&display=swap'); </style> 
    <script src="https://kit.fontawesome.com/45e38e596f.js" crossorigin="anonymous"></script>
</head>
<body>
    <?php include("assets/includes/navbar.php"); ?>
    <?php include("assets/includes/slider.php"); ?>
    <?php include("assets/includes/section1.php"); ?>
    <?php include("assets/includes/parallax.php"); ?>
    <?php include("assets/includes/acceuil.php"); ?>
    <?php include("assets/includes/footer.php"); ?>
    <div class="container_backtotop" id="container_backtotop">
        <div class = "btt_ombre"></div>
        <div class = "btt_bg">
                 <div class = "btt_carre_chargement" id="carre_load"></div>
        </div>
        <div class = "btt_front"></div>
        <a href="#" class="btt_a"></a>
        <img src="assets/img/fleche.png" class="btt_fleche">
    </div>

    <?php include("assets/includes/scriptjs.php"); ?>
    <script src="assets/js/navbar.js"></script>
</body>
</html>
