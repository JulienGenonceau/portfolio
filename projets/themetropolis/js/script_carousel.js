//TOP
var carouselTopPage = document.getElementById("carouselTopPage");
var intervalSwipe =  setInterval(function(){
  //rien
}, 0)

  $(document).ready(function(){
    $('#carouselTopPage').carousel({
      numVisible: 7,
      padding: 200,
      shift: -65
    });

    intervalSwipe = setInterval(function(){
      $('#carouselTopPage').carousel('next');
    }, 5000)
  });

  window.onmousedown = mousedown;
  window.onmouseup = mouseup;

  function mousedown(e) {

    mouseY = e.pageY;

    if (mouseY> (window.innerHeight*0.1) && mouseY< (window.innerHeight*0.1 + carouselTopPage.offsetHeight))
    {
      clearInterval(intervalSwipe);
    }
    
  };

  function mouseup(e) {

    mouseY = e.pageY;

    if (mouseY> (window.innerHeight*0.1) && mouseY< (window.innerHeight*0.1 + carouselTopPage.offsetHeight))
    {
    clearInterval(intervalSwipe)
    intervalSwipe =  setInterval(function(){
      $('#carouselTopPage').carousel('next');
    }, 5000)
    }
  }

//NOS FILMS

const section_nosfilms = document.getElementById('section_nosfilms');

//var categorie_id = String(categorieNames[i].id).replace("categorie_CategorieID", "")

class Categorie {
  constructor(name, filmsDivsList, id, categorieID) {
    this.name = name;
    this.filmsDivsList = filmsDivsList;
    this.films = [];
    this.divTitre = document.createElement("h4");
    this.div = document.createElement('div');
    this.categorieID = categorieID;
    this.page = 0;

    this.div.onscroll =  function() {
      list_categories[id].page = parseInt(this.scrollLeft/window.innerWidth);
      if (list_categories[id].div.scrollLeft==0){
        list_categories[id].divLeft.style.opacity="0";
      }
      if (list_categories[id].div.scrollLeft>=((list_categories[id].filmsDivsList.length*300) - window.innerWidth )){
        list_categories[id].divRight.style.opacity="0";
      }
    }

  this.divLeft = document.createElement("div");
  this.divLeft.className = "fleche-slider left"
  this.divLeft.style.opacity = "0";
  this.divRight = document.createElement("div");
  this.divRight.className = "fleche-slider right"
  this.divRight.style.opacity = "0";

  var imgLeft = document.createElement("img");
  var imgRight = document.createElement("img");
  imgRight.src = "img/arrow.png";
  imgLeft.src = "img/arrow.png";

  imgRight.className = "imgFleche";
  imgLeft.className = "imgFleche left";

  this.divRight.appendChild(imgRight);
  this.divLeft.appendChild(imgLeft);

    this.divRight.onclick = function() {
    
      list_categories[id].div.scrollTo( window.innerWidth*(list_categories[id].page+1),0);
  
    }
    this.divLeft.onclick = function() {
    
      list_categories[id].div.scrollTo( window.innerWidth*(list_categories[id].page-1),0);
  
    }

    var mouseY;
    $(document).mousemove(function(e) {
    mouseY = e.pageY;

    //souris en dessous de la position et au dessous de la position + la height (donc dedans horizontalement)
    if (mouseY>$(list_categories[id].div).position().top && mouseY < $(list_categories[id].div).position().top+list_categories[id].div.offsetHeight){
      list_categories[id].divLeft.style.opacity="1";
      list_categories[id].divRight.style.opacity="1";
        if (list_categories[id].div.scrollLeft==0){
          list_categories[id].divLeft.style.opacity="0";
        }
        if (list_categories[id].div.scrollLeft>=((list_categories[id].filmsDivsList.length*300) - window.innerWidth )){
          list_categories[id].divRight.style.opacity="0";
        }
    }else{
      list_categories[id].divLeft.style.opacity="0";
      list_categories[id].divRight.style.opacity="0";
    }

    }).mouseover(); 

  }

}

//Prendre la bdd appellée dans un include et faire un foreach
const categorieNames = [...document.querySelectorAll(".categorie_name")];

var list_categories = [];

for (var i = 0; i < categorieNames.length; i++) {
var listDivsFilms = [];
const listDivsFilmsFiltering = [...document.querySelectorAll(".categorie_film")];

var categorie_id = String(categorieNames[i].id).replace("categorie_CategorieID", "")

for (var k = 0; k < listDivsFilmsFiltering.length; k++) {
  if (String(categorieNames[i].id).replace("categorie_CategorieID", "")
  == 
  String(listDivsFilmsFiltering[k].id).replace("film_CategorieID", "")
  ){
    listDivsFilms.push(listDivsFilmsFiltering[k])
  }
}

  list_categories.push(new Categorie(categorieNames[i].innerText, listDivsFilms, i))
}


for (var i = 0; i < list_categories.length; i++) {
  var divTitre = list_categories[i].divTitre;
  divTitre.className = "category";
  divTitre.innerHTML = list_categories[i].name;
  
  divTitre.appendChild(list_categories[i].divLeft);
  divTitre.appendChild(list_categories[i].divRight);

  divTitre.style.alignSelf = "flex-start";
  section_nosfilms.appendChild(divTitre);

  var divHorizontalScroll = list_categories[i].div
  divHorizontalScroll.className = "horizontal-scroll";
  section_nosfilms.appendChild(divHorizontalScroll);

    for (var k = -1; k < list_categories[i].filmsDivsList.length; k++) {
      if (k == -1){
        divItemInvisible = document.createElement("div");
        divItemInvisible.className = "horizontal-scroll__item invisible";
        divHorizontalScroll.appendChild(divItemInvisible);
      }else{
      divItem = document.createElement("div");
      divItem.className = "horizontal-scroll__item";
      divItem.style.backgroundImage = "url(img/images_slider/"+String(list_categories[i].filmsDivsList[k].children[1].innerText)+".jpg)"
      divItem.style.backgroundSize = "cover";
      divHorizontalScroll.appendChild(divItem);
      
      divItemHover = document.createElement("div");
      divItemHover.className = "slider-film-hover";
      divItemHover_title = document.createElement("h4");
      divItemHover_title.className = "titrefilm";
      divItemHover_title.innerText = String(list_categories[i].filmsDivsList[k].children[0].innerText).toUpperCase()
      divItemHover.appendChild(divItemHover_title);
      divItemHover_desc = document.createElement("p");
      divItemHover_desc.className = "descfilm";
      divItemHover_desc.innerText = String(list_categories[i].filmsDivsList[k].children[2].innerText)

      
      divItemHoverBarreNoire = document.createElement("div");
      divItemHoverBarreNoire.className = "divItemHoverBarreNoire"
      divItemHover.appendChild(divItemHoverBarreNoire);

      var btnFavoris = document.createElement("div");
      btnFavoris.className = "btn_hoverFilm"
      var btnPouceHaut = document.createElement("div");
      btnPouceHaut.className = "btn_hoverFilm"
      var btnPouceBas = document.createElement("div");
      btnPouceBas.className = "btn_hoverFilm"
      
      btnFavoris.style.backgroundImage = "url(img/plus.png)"
      btnPouceHaut.style.backgroundImage = "url(img/poucehaut.png)"
      btnPouceBas.style.backgroundImage = "url(img/poucebas.png)"

      divItemHoverBarreNoire.appendChild(btnFavoris)
      divItemHoverBarreNoire.appendChild(btnPouceHaut)
      divItemHoverBarreNoire.appendChild(btnPouceBas)

      divItemHover.appendChild(divItemHover_desc);

      divItem.appendChild(divItemHover);
      
      var filmAbsoluteId = list_categories[i].filmsDivsList[k].children[6].innerText;
      divItemHover.innerHTML += '<a class="aFilm" href="film.php?id='+String(filmAbsoluteId)+'"></a>';
      /*
      divItem.onclick = function(i){
        console.log(filmAbsoluteId)
        window.location = "film.php?="+String(i);
      }*/

      //<div class="items" onclick="window.location.href='movie.php?id=<?php echo $value['id_film'] ?>'">

      }
    }
    
    divItemInvisible = document.createElement("div");
    divItemInvisible.className = "horizontal-scroll__item invisible";
    divItemInvisible.innerHTML = k;
    divHorizontalScroll.appendChild(divItemInvisible);

}