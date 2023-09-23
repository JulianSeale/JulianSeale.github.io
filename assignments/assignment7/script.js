//toggle nav method from class
const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};


const changeExercise1 = () => {
    document.getElementById("exercise1").classList.toggle("hidden")
}

const changeExercise2 = () => {
    
    document.getElementById("exercise2").classList.toggle("hidden")
   
}

//Code for exercise 1
const sortperson = () => {
    const name1 = document.getElementById("txt-name1").value;
    const name2 = document.getElementById("txt-name2").value;
    const name3 = document.getElementById("txt-name3").value;
    const age1 = parseInt(document.getElementById("txt-age1").value);
    const age2 = parseInt(document.getElementById("txt-age2").value);
    const age3 = parseInt(document.getElementById("txt-age3").value);
    const error = document.getElementById("error-num");
    const Eresult = document.getElementById("txt-result");
    error.classList.add("hidden");
    Eresult.classList.add("hidden");
     if(isNaN(age1 || age2 || age3)){
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid number";
    }
        else if (age1 < 1 || age2 < 1 || age3 < 1) {
            error.classList.remove("hidden");
        error.innerHTML = "* Must be in years";
        }

   else if( age1 > age2 && age1>age3 && age2>age3 ) {
    
    Eresult.innerHTML = name1 + " " + age1 +", " + name2 + " " + age2 + ", " + name3 + " " + age3;
    Eresult.classList.remove("hidden");
 }

 else if(age1>age2 && age1>age3 && age3>age2) {
    Eresult.innerHTML = name1 + " " + age1 +", " + name3 + " " + age3 + ", " + name2 + " " + age2;
    Eresult.classList.remove("hidden");
 }


 else if(age2>age1 && age2>age3 && age1>age3) {
    Eresult.innerHTML = name2 + " " + age2 +", " + name1 + " " + age1 + ", " + name3 + " " + age3;
    Eresult.classList.remove("hidden");
 }

 else if(age2>age1 && age2>age3 && age3>age1) {
    Eresult.innerHTML = name2 + " " + age2 +", " + name3 + " " + age3 + ", " + name1 + " " + age1;
    Eresult.classList.remove("hidden");
 }


 else if(age3>age1 && age3>age2 && age2>age1) {
    Eresult.innerHTML = name3 + " " + age3 +", " + name2 + " " + age2 + ", " + name1 + " " + age1;
    Eresult.classList.remove("hidden");
 }

 else if(age3>age1 && age3>age2 && age1>age2) {
    Eresult.innerHTML = name3 + " " + age3 +", " + name1 + " " + age1 + ", " + name2 + " " + age2;
    Eresult.classList.remove("hidden");
 }
}

//Code Exercise 2

const fillbar = () => {
    const amountDonated = parseInt(document.getElementById("txt-funds").value);
    const errormes = document.getElementById("error-rec");

    if (amountDonated <= 2500 )
    {
        document.getElementById("rectangle").classList.add("twenfive");
    }
    else if (amountDonated >= 2501 && amountDonated <= 5000)
    {
        document.getElementById("rectangle").classList.add("fifty");
    }

    else if (amountDonated >= 5001 && amountDonated <= 7500)
    {
        document.getElementById("rectangle").classList.add("sevenfive");
    }
    else if (amountDonated >= 7501 && amountDonated <=10000)
    {
        document.getElementById("rectangle").classList.add("onehun"); 
    }
    else{
        errormes.innerHTML= "Please enter a valid number"
    }

}



window.onload = () => {
    
    document.getElementById("exe1").onclick = changeExercise1;
    document.getElementById("exe2").onclick = changeExercise2;
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-ages").onclick = sortperson;
    document.getElementById("button-display").onclick = fillbar;
}