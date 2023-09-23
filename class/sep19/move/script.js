
//.toggle is a way to start and stop

const moveSquare = () => {
  //  document.getElementById("square").classList.toggle("move-square");
  
  const square = document.getElementById("square")
    const button = document.getElementById("button-move")

  //is it currently animating
  if(square.classList.contains("move-square")) {
    square.classList.remove("move-square")
    button.innerHTML= "Start";
  } else {
square.classList.add("move-square")
button.innerHTML = "Stop";
  }
}



window.onload = () => {
    document.getElementById("button-move").onclick = moveSquare;
    
}


//make a div hamburger set styles under media to none
/*const toggleNav = () => {
//  document.getElementById("nav-items").classList.toggle("hide");
}


window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    
}

*/