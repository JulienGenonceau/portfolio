const paralax = document.getElementById('firstpage_paralax');
  window.addEventListener("scroll", () => {
    scrollParalax();
  });

  function scrollParalax(){
    let offset = window.pageYOffset;
    paralax.style.backgroundPositionY = (100) + (offset * 0.7) + "px";
  }

  window.onload = function(){
      scrollParalax();
  }