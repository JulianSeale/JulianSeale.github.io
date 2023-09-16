// Create something to show and hide an image everytime its clicked
const showJasper = ()  =>{
    document.getElementById("bear").classList.remove("hide")
    }
    
    const hideJasper = () =>{
    document.getElementById("bear").classList.add("hide");
    }
   ///////////////////////////////////////////////////////////////
   
   //Create something to make a object dance etc

   const moveCircle = () => {
    document.getElementById("circle").classList.add("move-circle");
}

/////////////////////////////////////////////////////////////////////

//Create something for the users input to store multiple times


    //gets the value from the text box
  //  const prodName = document.getElementById("txt-product-name").value;

const changeText = () => {
    const prodName = document.getElementById("txt-product-name").value;
    const usercomment = document.getElementById("txt-comment").value;
    const rating = document.getElementById("txt-rating").value;
    const username = document.getElementById("txt-user-name").value;
    const head = document.getElementById("userheader");
     head.innerHTML= prodName;

     const body = document.getElementById("userbody")
     body.innerHTML=rating + "/5 stars " + usercomment 

     const footer = document.getElementById("userfooter")
     footer.innerHTML= "by: " + username

 }

 

    window.onload = () => {

       document.getElementById("button-show").onclick = showJasper;
        document.getElementById("button-hide").onclick = hideJasper;
        document.getElementById("button-dance").onclick = moveCircle;
        document.getElementById("button-comment").onclick = changeText;
    }