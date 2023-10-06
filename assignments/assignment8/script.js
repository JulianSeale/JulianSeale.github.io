//code 1 exercise
/*
THE MARGIN CODE IS FROM https://www.programmingwithbasics.com/2016/04/left-to-right-shift-move-image-javascript-onclick.html
I GOT THE "?" OPERATOR FROM https://www.w3schools.com/js/js_operators.asp
TOOGLE CODE FROM https://www.youtube.com/watch?v=ydeQbbF9jbw*/

let margin = 0;
let isRunning = true;

const movingimg = () => {

    const interval = setInterval(() => {
   
  const walkingmansc = document.getElementById("walking");
  const runningmansc = document.getElementById("running");
 
  margin += 20;
  walkingmansc.style.marginLeft = margin + "px";
  runningmansc.style.marginLeft = margin + "px";

    // Toggle between running and walking
    isRunning = !isRunning;
    runningmansc.style.display = isRunning ? "block" : "none";
    walkingmansc.style.display = isRunning ? "none" : "block";
    if(margin > 600)//pixels width
    {
        clearInterval(interval)
    }
}, 900);
};

//Code Exercise 2
//Got styles implementation from https://www.w3schools.com/jsref/prop_style_height.asp

const fillbar = () => {
    const amountDonated = parseInt(document.getElementById("txt-funds").value);
    const errormes = document.getElementById("error-rec");
    const barFill = document.querySelector('.fill');



    const percentage = (amountDonated / 10000) * 100;

    if (amountDonated >= -1 && amountDonated <= 10000 )
    {
        barFill.style.height = `${percentage}%`;
        
    }
    else{
        errormes.innerHTML= "Please enter a valid number";
    }

} 






window.onload = () => {
    document.getElementById("walking").onclick = movingimg;
    document.getElementById("button-display").onclick = fillbar;
    
}