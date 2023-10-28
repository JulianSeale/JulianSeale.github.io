const getAlcho = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    try{

        const response = await fetch(url);
        return await response.json();
    }
    catch(error){
        console.log(error);
    }

};


const showDrinks = async () => {
    let drinks =await getAlcho();
    let drinkSection = document.getElementById("drink-section");
    drinks.forEach((drink) =>
    drinkSection.append(getAlchoItem(drink))
    
    );

};

const getAlchoItem = (drink) =>{
    let drinksection = document.createElement("section");
     drinksection.classList.add("drink");
 let h3 = document.createElement("h3");
 h3.innerText= drink.strDrink;
 drinksection.append(h3);   

 return drinksection;
}
window.onload = () => showDrinks();
        
    
