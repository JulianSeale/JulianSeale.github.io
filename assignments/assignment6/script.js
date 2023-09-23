// Create something to show and hide an image everytime its clicked
const showBear = ()  =>{
    document.getElementById("bear").classList.remove("hide")
    }
    
    const hideBear = () =>{
    document.getElementById("bear").classList.add("hide");
    }
   ///////////////////////////////////////////////////////////////
   
   //Create something to make a object dance etc

   const moveCircle = () => {
    document.getElementById("circle").classList.add("move-circle");
}

/////////////////////////////////////////////////////////////////////

//Create something for the users input to store multiple times

//Restart
 const changeText = () => {
    const prodName = document.getElementById("txt-product-name").value;
    const usercomment = document.getElementById("txt-comment").value;
    const rating = document.getElementById("txt-rating").value;
    const username = document.getElementById("txt-user-name").value;

    // Create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = "comment"; // 

    // Create the content for the new div
    const usehead = document.createElement("h3");
    usehead.innerHTML = prodName;

    const usebody = document.createElement("p");
    usebody.innerHTML = rating + "/5 stars " + usercomment;

    const usefooter = document.createElement("p");
    usefooter.innerHTML = "by: " + username;

    // Append the elements to the new div
    newDiv.appendChild(usehead);
    newDiv.appendChild(usebody);
    newDiv.appendChild(usefooter);

    // Get the existing output div and append the new div to it
    const outputDiv = document.getElementById("output");
    outputDiv.appendChild(newDiv);

    // Clear the input fields after adding the comment
    document.getElementById("txt-product-name").value = "";
    document.getElementById("txt-comment").value = "";
    document.getElementById("txt-rating").value = "";
    document.getElementById("txt-user-name").value = "";
};


    window.onload = () => {

       document.getElementById("button-show").onclick = showBear;
        document.getElementById("button-hide").onclick = hideBear;
        document.getElementById("button-dance").onclick = moveCircle;
        document.getElementById("button-comment").onclick = changeText;
    }