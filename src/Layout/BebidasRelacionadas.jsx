import React from "react";
import BebidaCard from "../Components/BebidaCard";

//Retrieve data from database.
    //4 Different drinks that are related to current drink.
    
    /* Algorithm #1
        Based on overall transactions, get all drinks bought together
        and count the number of times they have been bought together.
        After, make a rank for each case and retrieve only the first four.
    */
function BebidasRelacionadas(){
    
    let bebidasRelacionadas = [];

    //Bebidas temporárias. Substituir por GET da database
    let tempBebidas = [
        {
            id: 1,
            nome: "Antarctica",
            imageURL: "https://placekitten.com/g/99/99"
        },
        {
            id: 2,
            nome: "Crystal",
            imageURL: "https://placekitten.com/g/100/100"
        },
        {
            id: 3,
            nome: "Casillero del Diablo",
            imageURL: "https://placekitten.com/g/101/101"
        },
        {
            id: 4,
            nome: "Grey Goose",
            imageURL: "https://placekitten.com/g/102/102"
        },
    ]

    let QTD_BEBIDAS_RELACIONADAS = 4;
    
    for(let i = 0; i < QTD_BEBIDAS_RELACIONADAS; i++){
        let card;
        card = <BebidaCard 
            bebidaId={tempBebidas[i].id}
            name={tempBebidas[i].nome}
            imageURL={tempBebidas[i].imageURL}
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