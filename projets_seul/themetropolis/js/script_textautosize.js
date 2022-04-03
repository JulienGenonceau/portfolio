const getFontSize = (textLength) => {
    const baseSize = 9
    if (textLength >= baseSize) {
      textLength = baseSize - 2
    }
    const fontSize = baseSize - textLength
    return `${fontSize}vw`
  }
  
  const boxes = document.querySelectorAll('.film_bigname')
    
  boxes.forEach(box => {
      if (box.textContent.length>25){
          box.style.fontSize = "4.5vh";
          box.style.lineHeight = "4.5vh"
      }else{
        box.style.fontSize = "10vh";
        box.style.lineHeight = "10vh"
      }
  })