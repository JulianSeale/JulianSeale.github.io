//never use var(global scopes)
//const is default
//let is used to change or increment
/*const loadFunction = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML="hi";
}
*/



//call function when window is loaded 
//window.onload = loadFunction;
const changeText = () => {
   const helloP = document.getElementById("date");
    helloP.innerHTML="hi";
    helloP.classList.add("special");
}

const showJasper = ()  =>{
document.getElementById("jasper").classList.remove("hide")
}

const hideJasper = () =>{
document.getElementById("jasper").classList.add("hide");
}





//Annoymous Functions
//could take off the variable if wanted
window.onload = () => {
   /*const clickButton = document.getElementById("button-click");
   clickButton.onclick = ChangeText;*/

   document.getElementById("button-click").onclick = changeText
   document.getElementById("button-show").onclick = showJasper;
   document.getElementById("button-hide").onclick = showJasper;

//Alternate way to code the same result

  /* document.getElementById("button-click").onclick = () =>{
    const helloP = document.getElementById("date");
    helloP.innerHTML="hi"; 
   }*/
}





