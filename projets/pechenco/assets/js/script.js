//SLIDER
const slider = document.getElementById("slider")
const slider_container = document.getElementById("slider_container");
const slider_text = document.getElementById("div_slider_text");
var slider_page = 1;
const slider_leftarrow = document.getElementById("slider_leftarrow")
const slider_rightarrow = document.getElementById("slider_rightarrow")

const container_backtotop = document.getElementById("container_backtotop");
const btt_carre_load = document.getElementById("carre_load");

window.onscroll = function(){

  var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

  var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  btt_carre_load.style.marginTop = -(100-percent)+"%"

  if (percent<20){
    container_backtotop.style.opacity = 0;
  }else{
    var opacity =  ((percent-20)/100)*5;
    if (opacity>1){opacity=1}
    container_backtotop.style.opacity = String(opacity);
  }
}

var sliding = true;

var slider_img0 = document.getElementById("slider_img0");
var slider_img1 = document.getElementById("slider_img1");
var slider_img2 = document.getElementById("slider_img2");
var slider_img3 = document.getElementById("slider_img3");
var slider_img4 = document.getElementById("slider_img4");
var slider_img5 = document.getElementById("slider_img5");
var all_imgs = [slider_img0, slider_img1, slider_img2, slider_img3, slider_img4, slider_img5]

//PARALAX
const mainDivParallax = document.getElementById("parallax");
const nuage1Parallax = document.getElementById("parallax_nuage1")
const nuage2Parallax = document.getElementById("parallax_nuage2")

window.onload = function(){

  //slider
  slide_auto()

  //parallax
  mainDivParallax.style.color = "red";
  parallax_scroll()

  resizing();

}

window.addEventListener("scroll", function(){
    parallax_scroll()
})


function parallax_scroll(){

    let position_parallax_y = -(mainDivParallax.getBoundingClientRect().top) + 200;
    let offsetMer = position_parallax_y -500;
    let offsetN1 = position_parallax_y -500;
    let offsetN2 = position_parallax_y -300;
    let offsetN2X = position_parallax_y +600;
    mainDivParallax.style.backgroundPositionY = offsetMer * 0.7 + "px";
    
    //NUAGE1
    nuage1Parallax.style.backgroundPositionY = offsetN1 * 0.7 + "px";
    nuage1Parallax.style.backgroundPositionX = offsetN1 * 0.5 + "px";
    //NUAGE2
    nuage2Parallax.style.backgroundPositionY = offsetN2 * 0.7 + "px";
    nuage2Parallax.style.backgroundPositionX = offsetN2X * 0.9 + "px";
}


  //SLIDER

  function slide_auto(){
    if (sliding){
    setTimeout(function() {
                      
    
    if (slider_page==5){
      if(sliding){slide_to_first_no_animation();}
    }else{

      if(sliding){slide_to_right();}
    }
    
    slide_auto()
  }, 2500)}
}

function slide_to_right(){
  for (let i = 0; i < all_imgs.length; i++) {
    all_imgs[i].style.transition = "all 1s"
    all_imgs[i].style.marginLeft = -100*(slider_page)+"%";
  }
  slider_page+=1;
}


function slide_to_first_no_animation(){
  for (let i = 0; i < all_imgs.length; i++) {
    all_imgs[i].style.transition = "all 0s"
    all_imgs[i].style.marginLeft = "0%";
  }
  slider_page=1;
 
setTimeout(function() {

if(sliding){ 
slide_to_right();
}
}, 100)

}

function slide_to_left(){
  for (let i = 0; i < all_imgs.length; i++) {
    all_imgs[i].style.transition = "all 1s"
    all_imgs[i].style.marginLeft = -100*(slider_page-2)+"%";
  }
  slider_page-=1;
}


function slide_to_last_no_animation(){
  for (let i = 0; i < all_imgs.length; i++) {
    all_imgs[i].style.transition = "all 0s"
    all_imgs[i].style.marginLeft = "-300%";
  }
  slider_page=4;
 
setTimeout(function() {

if(sliding){ 
slide_to_right();
}
}, 100)

}

//////////////////

slider_leftarrow.onclick = function(){

  stop_sliding_for_time();
  if (slider_page==1){
    slide_to_last_no_animation();
  }else{
    slide_to_left();
  }

}

slider_rightarrow.onclick = function(){

  stop_sliding_for_time();
  if (slider_page==5){
    slide_to_first_no_animation();
  }else{
    slide_to_right();
  }
  
}

window.onresize = function(){
  resizing()
}

const slider_to_img = document.getElementById("slider_to_img");

function resizing(){
  if (window.innerWidth>1024){
    slider.style.display = "block";
    slider_to_img.style.display = "none";
    mainDivParallax.style.height = "400px";
    container_backtotop.style.display = "block"
  }else{
    slider.style.display = "none";
    slider_to_img.style.display = "block";
    mainDivParallax.style.height = "0";
    container_backtotop.style.display = "none"
  }
}

function stop_sliding_for_time(){
  sliding = false;
  setTimeout(function() {
    sliding = true;
    slide_auto();
    }, 3500)
}