var destination_id = window.location.href;
destination_id = destination_id.slice(-1)

if (destination_id == "l"){destination_id = "0"}

destination_france = {
    destination_name: "France",
    destination_description: "La France est un super pays !",
    destination_photos: ["img/france/france1.png","img/france/france2.png","img/france/france3.png","img/france/france4.png"],
    nb_pointsforts: 1
}

destination_italie = {
    destination_name: "Italie",
    destination_description: "L'Italie, on mange des pâtes",
    destination_photos: ["img/italie/italie1.png", "img/italie/italie2.png", "img/italie/italie3.png", "img/italie/italie4.png"],
    nb_pointsforts: 3
}

destination_espagne = {
    destination_name: "Espagne",
    destination_description: "Hablo español ?",
    destination_photos: ["img/espagne/espagne1.png", "img/espagne/espagne2.png", "img/espagne/espagne3.png","img/espagne/espagne4.png"],
    nb_pointsforts: 5

}

destination_paysbas = {
    destination_name: "Pays-Bas",
    destination_description: "Les Pays-Bas (en néerlandais : Nederland), en forme longue le royaume des Pays-Bas (Koninkrijk der Nederlanden), sont un pays transcontinental dont le territoire métropolitain est situé en Europe.",
    destination_photos: ["img/paysbas/paysbas1.png", "img/paysbas/paysbas2.png", "img/paysbas/paysbas3.png", "img/paysbas/paysbas4.png"],
    nb_pointsforts: 3
}

destination_allemagne = {
    destination_name: "Allemagne",
    destination_description: "L'Allemagne (/almaɲ/ ; en allemand : Deutschland",
    destination_photos: ["img/allemagne/allemagne1.png", "img/allemagne/allemagne2.png", "img/allemagne/allemagne3.png", "img/allemagne/allemagne4.png"],
    nb_pointsforts: 4
}

const destination_list = [destination_france, destination_italie, destination_espagne, destination_paysbas, destination_allemagne]
var destination = destination_list[destination_id]
var infos_img_showing_id = 0

const tv_debug = document.getElementById('debug')

const tv_paysname = document.getElementById('pays_name')
const tv_paysdesc = document.getElementById('pays_description')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')
const img5 = document.getElementById('img5')

const cadre_plusdinfos = document.getElementById('cadre_plusdinfo')
const cadre_plusdinfo_partie1 = document.getElementById('cardre_plusdinfo_part1')
const cadre_plusdinfo_partie2 = document.getElementById('cardre_plusdinfo_part2')

const infos_img_showing = document.getElementById('infos_img_showing')

const wrapper = document.getElementById('wrapperid')

window.onload = function(){
    tv_paysname.innerText = destination_id
    set_destination_texts_and_images()
    reportWindowSize()
    set_info_image(0)
}

window.addEventListener('resize', reportWindowSize);

function reportWindowSize(){
    var ratio = window.innerWidth/window.innerHeight
    tv_debug.innerText = window.innerWidth + " " + window.innerHeight + " | " + String(ratio)

    if (ratio < 1.3){
        cadre_plusdinfos.style.display = "block"
        cadre_plusdinfo_partie1.style.height = "40%"
        cadre_plusdinfo_partie2.style.height = "60%"
        cadre_plusdinfos.style.height = "100vh"
    }else{
        cadre_plusdinfos.style.display = "flex"
        cadre_plusdinfo_partie1.style.height = "100%"
        cadre_plusdinfo_partie2.style.height = "100%"
        cadre_plusdinfo_partie2.style.top = "5%"
        cadre_plusdinfos.style.height = "25vh"
    }
}

function set_destination_texts_and_images(){

    document.getElementById('page_title').innerText = destination.destination_name

    wrapper.innerHTML = ""
    cadre_plusdinfo_partie2.innerHTML = ""

    tv_paysname.textContent = destination.destination_name
    tv_paysdesc.textContent = destination.destination_description
    img1.src = destination.destination_photos[0]
    img2.src = destination.destination_photos[1]
    img3.src = destination.destination_photos[2]
    img4.src = destination.destination_photos[3]
    img5.src = destination.destination_photos[0]

    infos_img_showing.src = destination.destination_photos[0]

    var stringg = "Interdum et malesuada fames ac ante ipsum primis in faucibust in consectetur condimengravida nunc vitae euismod."

    var infos_container = document.createElement("div");
    infos_container.className = "cardre_plusdinfo_part2_contenaire_infos"

    for (let i = 0; i < destination.nb_pointsforts; i++) {

        var div_info = document.createElement("div");
        div_info.style.width = "90%";
        div_info.style.height = String(100/(destination.nb_pointsforts) - 5)+"%";
        div_info.style.margin = "auto"
        div_info.style.display = "flex"

        var info_point = document.createElement("div");
        info_point.className = "point_fort_point"

        var info_text = document.createElement("div");
        info_text.className = "point_fort_text"
        info_text.innerHTML = stringg

        div_info.appendChild(info_point);
        div_info.appendChild(info_text);

        infos_container.appendChild(div_info)

      }
      
      cadre_plusdinfo_partie2.appendChild(infos_container);

      var btn_reserver = document.createElement("button");
      btn_reserver.className = "btn_reserver"
      btn_reserver.innerHTML = "RESERVER"
      
      cadre_plusdinfo_partie2.appendChild(btn_reserver);

      var decalage_id = 0;

      var divs_pays_list = [];
      var divs_pays_btn_list = [];

      var divs_pays_img_list = [];
      var divs_pays_img2_list = [];

      for (let i = 0; i < destination_list.length-1; i++) {
        
        if (i == destination_id){decalage_id = 1}

        const id_showing = i+decalage_id;

        div_pays = document.createElement("div");
        div_pays.className = "pays_autres_destinations"

        div_pays_name = document.createElement("div");
        div_pays_name.className = "pays_autres_destinations_name"
        div_pays_name.innerHTML = destination_list[id_showing].destination_name.toUpperCase()
        div_pays.appendChild(div_pays_name)

        div_pays_img = document.createElement("img");
        div_pays_img.className = "pays_autres_destinations_img"
        div_pays_img.src = destination_list[id_showing].destination_photos[0]
        div_pays.appendChild(div_pays_img)
        div_pays_img2 = document.createElement("img");
        div_pays_img2.className = "pays_autres_destinations_img2"
        div_pays_img2.src = destination_list[id_showing].destination_photos[1]
        div_pays.appendChild(div_pays_img2)

        div_pays_btn = document.createElement("button");
        div_pays_btn.className = "pays_autres_destinations_btn"
        div_pays_btn.innerHTML = "VOIR"
        
        divs_pays_btn_list.push(div_pays_btn)
        divs_pays_img_list.push(div_pays_img)
        divs_pays_img2_list.push(div_pays_img2)

        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            div_pays_btn.style.opacity = "0"
           }

            div_pays.onmouseenter = function()
            {
                divs_pays_btn_list[i].style.opacity = 1.0
                divs_pays_btn_list[i].addEventListener("click", function () {
                    destination_id = id_showing
                    destination = destination_list[destination_id]
                    set_destination_texts_and_images()
                    set_info_image(0)
                    window.scrollTo({top: 0, behavior: 'smooth'});
             });

                fadeIn(divs_pays_img2_list[i])
            };
            div_pays.onmouseleave = function()
            {
                divs_pays_btn_list[i].style.opacity = 0.0
              //  divs_pays_img2_list[i].style.opacity = 0.0
            };

        div_pays.appendChild(div_pays_btn)

        if (i == destination_list.length-2){
            div_pays.style.marginRight = "10%"
        }

        divs_pays_list.push(div_pays)

    }

    for (let i = 0; i < divs_pays_list.length; i++){
        wrapper.appendChild(divs_pays_list[i])
    }
}

//Animation fade_image

function fadeIn(img) {
    var tick = function () {
        img.style.opacity = +img.style.opacity + 0.01;
        if (+img.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

//Swiper

var sb1 = document.getElementById('sb1');
sb1.style.cursor = 'pointer';
sb1.onclick = function() {
    set_info_image(0)
};
var sb2 = document.getElementById('sb2');
sb2.style.cursor = 'pointer';
sb2.onclick = function() {
    set_info_image(1)
};
var sb3 = document.getElementById('sb3');
sb3.style.cursor = 'pointer';
sb3.onclick = function() {
    set_info_image(2)
};
var sb4 = document.getElementById('sb4');
sb4.style.cursor = 'pointer';
sb4.onclick = function() {
    set_info_image(3)
};

var infos_btn_left = document.getElementById('arrowleft')
var infos_btn_right = document.getElementById('arrowright')
infos_btn_left.onclick = function(){infos_go_left()}
infos_btn_right.onclick =function(){infos_go_right()}

function infos_go_left(){
    var id = infos_img_showing_id-1
    if (id < 0){id=3};set_info_image(id)
}
function infos_go_right(){
    var id = infos_img_showing_id+1
    if (id > 3){id=0};set_info_image(id)
}

function set_info_image(id){
    infos_img_showing.src = destination.destination_photos[id]
    var all_sb = [sb1, sb2, sb3, sb4]
    all_sb[infos_img_showing_id].style.backgroundColor = "white"
    all_sb[infos_img_showing_id].style.width = "4%"
    infos_img_showing_id = id
    all_sb[infos_img_showing_id].style.backgroundColor = "rgb(100,200,200)"
    all_sb[infos_img_showing_id].style.width = "5%"
}


////////////// SLIDE ON CLICK

const slider = document.querySelector('.wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

slider.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    slider.scrollBy({ left: evt.deltaY*5, behavior: 'smooth' });
});