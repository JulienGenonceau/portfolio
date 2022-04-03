<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajouter article</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/972b17abf3.js" crossorigin="anonymous"></script>
</head>
<body>

<section class="container_ajouter_article">

<h2 class="ajouterarticle">AJOUTER ARTICLE</h2>
<div id="content">

    <form method="post" action = "uploadarticle_traitement.php" enctype="multipart/form-data">

<div class="cont">
        
        <div>
            <h3 class="formarticletitle">Nom de l'article</h3>
            <input type="text" name="article_title">
        </div>

        <h3 class="formarticletitle">Contenu de l'article</h3>
    <div id="editor" contenteditable="false">
        <section id="toolbar">
            <div id="bold" class="icon fa fa-bold"></div>
            <div id="italic" class="icon fa fa-italic"></div>
            <div id="createLink" class="icon fa fa-link"></div>
            <div id="insertUnorderedList" class="icon fa fa-list"></div>
            <div id="insertOrderedList" class="icon fa fa-list-ol"></div>
            <div id="justifyLeft" class="icon fa fa-align-left"></div>
            <div id="justifyRight" class="icon fa fa-align-right"></div>
            <div id="justifyCenter" class="icon fa fa-align-center"></div>
            <div id="justifyFull" class="icon fa fa-align-justify"></div>
        </section>

        <div id="page" contenteditable="true">
        
        </div>
    </div>

        <h3 class="formarticletitle">Image Principale</h3>

        <script class="jsbin" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<div class="file-upload">
  <button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Choisir une Image</button>

  <div class="image-upload-wrap">
    <input class="file-upload-input" type='file' name="image" onchange="readURL(this);" accept="image/*" />
    <div class="drag-text">
      <h3>Glisser deposer ou choisir une image</h3>
    </div>
  </div>
  <div class="file-upload-content">
    <img class="file-upload-image" src="#" alt="your image" />
    <div class="image-title-wrap">
      <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
    </div>
  </div>
</div>

        <h3 class="formarticletitle">Images Galerie</h3>

        <div class="file-uploader__message-area">
        <p>Select a file to upload</p>
        </div>
        <div class="file-chooser">

        <input class="file-chooser__input" name="uplod[]" type="file" multiple="multiple"></input>

        </div>


            <div>    
            <input id="article_contenu_input" type="hidden" name="article_contenu" value="">
    <button onclick="getContent()" type = "submit" name="upload" value="" class="log-out-client">
        <i class="fa fa-upload"></i>
        <span>Publier l'article</span>
    </button>
            </div>
    </form>

</div>
</div>

</section>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="script.js"></script>


</body>
</html>