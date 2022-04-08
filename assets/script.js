class projet {
  constructor(nom, image, lien, desc) {
    this.nom = nom;
    this.image = image;
    this.lien = lien;
    this.desc = desc;
  }
}

var currentItemList = new Array();
var currentItemID = 0;

var intervalSwipe = setInterval(function(){
}, 0); clearInterval(intervalSwipe);

var liste_projetspersos = [
  new projet("Onyx Workout", "assets/img/onyxworkout.png", "onyxworkout", "Onyx Workout est une application téléphone"),
  new projet("Metropolis", "assets/img/metropolis.png", "themetropolis", "Site de streaming"),
  new projet("SimplonFit2000", "assets/img/simplonfit2000.png", "SimplonFit2000", "Site de sport")
]

var liste_projetsequipe = [
  new projet("Guide voyage", "assets/img/avion.png", "guide_voyage", "Site de voyage à travers plusieurs destinations"),
  new projet("Pêche n' co", "assets/img/pechenco.png", "pechenco", "Un super site de pêche"),
  new projet("Snake Pôle Nord", "assets/img/snake.png", "snakepolenord", "Jeu vidéo programmé en language objet")
]

var tabID = 1

var tabs_container = document.getElementById("tabs")
var tabs = document.querySelectorAll(".tab")
const tab_display = document.getElementById("tab_display")

const tabIndicator = document.createElement("div")
tabIndicator.className = "tabIndicator"
tabs_container.appendChild(tabIndicator)


setPage(tabID, false)

function setPage(tabID, animated){

    self.tabID  = tabID

    setTabIndicatorPosition(tabID, animated)

    var delayInMilliseconds = 300

    if (animated){
      tab_display.style.transition = "opacity "+delayInMilliseconds+"ms"
      tab_display.style.opacity = 0
  
      setTimeout(function() {
        tab_display.innerHTML = ""
        create_page(tabID, true)
      }, delayInMilliseconds);
    }else{
      tab_display.innerHTML = ""
      create_page(tabID, true)
    }


}

function create_page(tabID, animated){

  tab_display.style.opacity = 0
  var delayInMilliseconds = 400

  if (animated){
    tab_display.style.transition = "opacity "+delayInMilliseconds+"ms"
    
  }else{
    tab_display.style.transition = ""
  }
  tab_display.style.opacity = 1

  if (tabID == 0){
    create_page_cv()
  }

  if (tabID == 1){
    create_page_projets(self.liste_projetspersos)
  }

  if (tabID == 2){
    create_page_projets(self.liste_projetsequipe)
  }

}

function setTabIndicatorPosition(tabID, animated){
  if (animated){
    tabIndicator.style.transition = "transform 0.6s"
  }else{
    tabIndicator.style.transition = ""
  }

  const tabwidth = tabs[0].offsetWidth
  const space_between_tabs = (tabs_container.offsetWidth - tabs.length*tabwidth)/(tabs.length-1)
  tabIndicator.style.transform = "translate("+tabID*(tabwidth + space_between_tabs)+"px, 0px)";
}

window.onresize = function(){
  setTabIndicatorPosition(tabID, false)
  initCarousel()
}

function initCarousel(){
  $('.carousel').carousel({
    dist: -50,
    padding: -100,
    numVisible: 3,
    onCycleTo: function (ele) {
      currentItemID = $(ele).index();
    },
    
  });
}

function create_page_projets(list){
currentItemList = list;
  
  const carouselContainer = document.createElement("div")
  carouselContainer.className = "carousel"
  tab_display.appendChild(carouselContainer)

  list.forEach(element => {
    
    const item = document.createElement("a")
    item.className = "carousel-item"
    item.href = "projets/"+element.lien+"/index.php"

    const img = document.createElement("img")
    img.src = element.image
    item.appendChild(img)
    carouselContainer.appendChild(item)

  });

  initCarousel()
  clearInterval(intervalSwipe)

  const flechegauche = document.createElement("div")
  flechegauche.className = "carouselarrow left"
  tab_display.appendChild(flechegauche)
  flechegauche.onclick = () =>{ 
    $('.carousel').carousel('prev'); clearInterval(intervalSwipe);
    setProjectTitle(list)  }
  
  const flechedroite = document.createElement("div")
  flechedroite.className = "carouselarrow right"
  tab_display.appendChild(flechedroite)
  flechedroite.onclick = () =>{ 
    $('.carousel').carousel('next'); clearInterval(intervalSwipe);
    setProjectTitle(list) }

  const projectTitle = document.createElement("h2")
  projectTitle.id = "projectTitle"
  projectTitle.innerHTML = list[currentItemID].nom.toUpperCase()
  tab_display.appendChild(projectTitle)

  const projectDesc = document.createElement("h2")
  projectDesc.id = "projectDesc"
  projectDesc.innerHTML = list[currentItemID].desc
  tab_display.appendChild(projectDesc)
}

intervalSwipe = setInterval(function(){
  if (!$('#tab_display:hover').length != 0) {
    $('.carousel').carousel('next');
    setProjectTitle(currentItemList)
}
}, 4000)



function create_page_cv(){

  const colonne1 = document.createElement("div")
  colonne1.className  = "colonnecv"
  tab_display.appendChild(colonne1)

  const colonne2 = document.createElement("div")
  colonne2.className  = "colonnecv"
  tab_display.appendChild(colonne2)

  //COLONE 1

  colonne_add(colonne1, "photo_cv")

  colonne_add(colonne1,"cv_lefttitle", "CONTACT")
  colonne_add(colonne1,"cv_line")
  colonne_add(colonne1,"cv_lefttext", "06 33 41 12 11")
  colonne_add(colonne1,"cv_lefttext", "juliengenonceau@hotmail.com")

  
  colonne_add(colonne1,"cv_lefttitle", "À PROPOS DE MOI")
  colonne_add(colonne1,"cv_line")
  colonne_add(colonne1,"cv_lefttext", "J'aime le code")

  //COLONE 2
  
  colonne_add(colonne2,"cv_name", "JULIEN GENONCEAU")
  colonne_add(colonne2, "cv_metier", "Developpeur web")
  
  colonne_add(colonne2,"cv_righttitle first", "LANGUAGES")
  colonne_add(colonne2,"cv_lefttext", "Javascript / Jquery<br>Swift<br>Php<br>HTML / CSS")

}

function colonne_add(colonne, classname, innertext){
  const element = document.createElement("div")
  element.className = classname
  if (innertext!=null){
    if (innertext!=""){
      element.innerHTML = innertext
    }
  }
  colonne.appendChild(element)
}

function setProjectTitle(list){
  var temps_anim = 0.5;

  var title = document.getElementById("projectTitle")
  var desc = document.getElementById("projectDesc")
  title.style.transition = "opacity "+temps_anim+"s"
  title.style.opacity = 0;
  desc.style.transition = "opacity "+temps_anim+"s"
  desc.style.opacity = 0;

  setTimeout(function(){
    title.innerHTML = list[currentItemID].nom.toUpperCase()
    desc.innerHTML = list[currentItemID].desc
    title.style.opacity = 1;
    desc.style.opacity = 1;
  }, temps_anim*1000);
}

var lastId = 0;
setInterval(function () {
  if (lastId != currentItemID) {
    lastId = currentItemID
    setProjectTitle(currentItemList)
  }
}, 100);