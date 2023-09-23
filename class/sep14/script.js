//messages
//Don't need the curly braces

//const add = (a,b) => a+b;
//add(5,6)

//const add = (a,b) => {return a + b}
//console.log (add(5,6));

//const square = a => a*a;
//console.log(square(5));

//const hello = () => console.log("Hello me!");
//hello();

//const helloSpecific = userName => console.log("Hello " + userName + "!")
//helloSpecific("Julian");

const helloFullName = (firstName,lastName) => {
console.log("Hello " + firstName + " " + lastName)
console.log("You are awesome")
};

helloFullName("julian","seale");

/* can not change a const */
//Dont assign a const outright if planning a change)
//const myFunct = () => console.log("Hey you")


const moveSquare = () => {
    document.getElementById("square").classList.add("move-square");
}
const displayName = () => {
    //gets the value from the text box
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!")
}


window.onload = () => {
    document.getElementById("button-move").onclick = moveSquare;
    document.getElementById("button-show-name").onclick = displayName;
}