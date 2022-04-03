const burger = document.getElementById("burger")
const burgerlinks = document.getElementById("liens_burger")
var open = false;
burger.onclick = function(){
    if (open){
        burgerlinks.style.display = "none";
    }else{
        burgerlinks.style.display = "flex";
    }
    open = !open;
}

window.onresize = function(){
    if (window.innerWidth>1200){
        open=false;
        burgerlinks.style.display = "none";
    }
};

window.addEventListener('click', function(e){   
    if (burger.contains(e.target)||burgerlinks.contains(e.target)){
      // Clicked in box
    } else{
      // Clicked outside the box
      open=false;
      burgerlinks.style.display = "none";
    }
  });

  document.getElementById("navbar_logo").onclick = function(){
    window.location = "index.php"
  }

  searchbar_loupe = document.getElementById("searchbar_loupe")
  searchbar_bar = document.getElementById("searchbar_bar")
  searchbar_opened = false;

  animTimout = setTimeout(function() {
  }, 0);
  

searchbar_loupe.addEventListener("click", function(){

  searchbar_opened = !searchbar_opened;

  if (searchbar_opened) {
    searchbar_bar.style.width = "30vw"
    animTimout = setTimeout(function() {
      searchbar_bar.style.transition = "width 0ms"
    }, 800);
  }else{
    
    searchbar_bar.style.transition = "width 800ms"
    searchbar_bar.style.width = "0vw"
    animTimout = setTimeout(function() {
    }, 0);
  }

})

window.onresize = function(){
  searchbar_bar.style.transition = "width 0ms"
  animTimout = setTimeout(function() {
  }, 0);
}

const navinput = document.getElementById("navinput")

divFilms_created = false;

var divResultatLabel;

navinput.addEventListener('input', function () {

  const page_main = document.getElementById("page_main")
  const page_searchMaindiv = document.getElementById("page_searchMaindiv")
  const searchGrid= document.getElementById("page_searchMaindivGrid")
  const filmsList = [...document.querySelectorAll(".film_recherche")];

  
  if (!divFilms_created){
    divResultatLabel = document.createElement("h3");
    divResultatLabel.className = "film_recherche_resultatLabel"
    page_searchMaindiv.appendChild(divResultatLabel);
  }
  divResultatLabel.innerText = "Résultats pour \" "+String(this.value)+" \""

  if (String(this.value).length>0){
    console.log(this.value)
    var searchbar_string = String(this.value);

    //Page de recherche
    page_main.style.display = "none";
    page_searchMaindiv.style.display = "grid";

    
  for (var i = 0; i < filmsList.length; i++) {
  
    var film = filmsList[i]

    
  if (!divFilms_created){

    divCadre = document.createElement("div")
    divCadre.className = "searchFilmCadre"
    divCadre.style.backgroundImage = "url(img/images_slider/" + film.children[1].innerText +".jpg)"
    
    divItemHover = document.createElement("div");
    divItemHover.className = "search-film-hover";
    divItemHover.innerHTML += '<a class="aFilm" href="film.php?id='+String(film.children[6].innerText)+'"></a>';
    divCadre.appendChild(divItemHover)
    film.appendChild(divCadre)

  }

    const string_film = String(film.children[0].innerText);
    const string_categorie = String(film.id.replace('film_categorieName',''))

    if ( (string_film.toUpperCase()).includes(searchbar_string.toUpperCase())
    || 
    (string_categorie.toUpperCase()).includes(searchbar_string.toUpperCase())
    ){
      film.style.display = "block"
    }else{
      film.style.display = "none"
    }

  }

  
  divFilms_created = true;





  }else{
    page_main.style.display = "block"
    page_searchMaindiv.style.display = "none";
  }
});