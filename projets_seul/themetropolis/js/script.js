lecinemachezvous = document.getElementById("lecinemachezvous");
homeCinemaImage = document.getElementById("item1");
homeCinemaDesc = document.getElementById("item2")

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= lecinemachezvous.offsetHeight) {
    lecinemachezvous.style.opacity = "1"
  } else {
    lecinemachezvous.style.opacity = "0"
  }
  if (y >= homeCinemaImage.offsetHeight) {
    homeCinemaImage.style.opacity = "1"
    homeCinemaImage.style.marginLeft = "1vw"

    homeCinemaDesc.style.opacity = 1;
    homeCinemaDesc.style.marginLeft = "1vw"
  } else {
    homeCinemaImage.style.opacity = "0"
    homeCinemaImage.style.marginLeft = "-20%"
    
    homeCinemaDesc.style.opacity = 0;
    homeCinemaDesc.style.marginLeft = "20%"
  }
};

window.addEventListener("scroll", myScrollFunc);

const logofacebook = document.getElementById("logofacebook")
logofacebook.onclick=function() {window.open("https://www.facebook.com/CinemaMetropolisOfficiel/", '_blank').focus();};

const btn_accueil_voir = document.getElementById("btn_accueil_voir")
btn_accueil_voir.onclick = function() {
    window.location = "connexion.php"
}
