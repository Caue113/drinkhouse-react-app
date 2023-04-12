import React from "react";
import BebidaCard from "../Components/BebidaCard";
import axios from "axios";

//Retrieve data from database.
    //4 Different drinks that are related to current drink.
    
    /* Algorithm #1
        Based on overall transactions, get all drinks bought together
        and count the number of times they have been bought together.
        After, make a rank for each case and retrieve only the first four.
    */

//Get 4 random numbers to display the drinks.
//As of now, we can only use ids 1 to 10.

let QTD_RELATED_DRINKS = 4;
let randomDrinks = [];
let requestRelatedDrinks;

for(let i = 0; i < 4; i++){
    let rng  = Math.floor(10 * Math.random() + 1);

    while(randomDrinks.includes(rng)){
        rng = Math.floor(10 * Math.random() + 1);
    }
    randomDrinks.push(rng);
}

try {
    
    axios.get(`http://localhost:3002/bebidas-relacionadas/`,
    {
        params: {
            relatedDrinks: randomDrinks,
        }
    })
    .then((res)=>{
        requestRelatedDrinks = res.data;
    })

} catch (error) {
    console.warn("ERRO EM:  " + BebidasRelacionadas.name);
    console.error(error);
}


function BebidasRelacionadas(){
    
    let bebidasRelacionadas = [];
    
    for(let i = 0; i < QTD_RELATED_DRINKS; i++){
        let card;
        card = <BebidaCard 
            bebidaId={requestRelatedDrinks[i].Id}
            name={requestRelatedDrinks[i].NomeBebida}
            imageURL={require("../Assets/imgs/Bebidas/" + requestRelatedDrinks[i].url_imagem) }
        />

        bebidasRelacionadas.push(card);
    }

    return(
        <>
            {bebidasRelacionadas}
        </>
    );
}

export default BebidasRelacionadas;