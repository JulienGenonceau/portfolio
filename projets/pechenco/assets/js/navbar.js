/* Nav */
const toggleButton = document.getElementById('nav-toggle-button')
const navLinks = document.getElementById('nav-links')
const navBar =document.getElementById('navbar')
var burger_opened = false;

//open burger
toggleButton.onclick = function(){
    if (!burger_opened){
        navLinks.style.display = "flex"
        navBar.style.borderBottomLeftRadius = "20px"
        navBar.style.borderBottomRightRadius = "20px"
        burger_opened = true;
    }else{
        navLinks.style.display = "none"
        navBar.style.borderBottomLeftRadius = "0px"
        navBar.style.borderBottomRightRadius = "0px"
        burger_opened = false;
    }
}

//burger animation
toggleButton.addEventListener('click', () => {;
    if(burger_opened) {
        toggleButton.classList.add('open-hamburger');
    } else {
        toggleButton.classList.remove('open-hamburger')
        toggleButton = false
    }
})

//click out
window.addEventListener('click', function(e){

          if (!navBar.contains(e.target) && window.innerWidth < 600){
            navLinks.style.display = "none"
            burger_opened = false;
          }

})

//window size
window.addEventListener('resize', function(){
    if (window.innerWidth > 600){
        navLinks.style.display = "flex"
        navBar.style.borderBottomLeftRadius = "0px"
        navBar.style.borderBottomRightRadius = "0px"
    }
    if (window.innerWidth < 600){
        navLinks.style.display = "none"
        toggleButton.classList.remove('open-hamburger')
    }
})

//Fin Nav