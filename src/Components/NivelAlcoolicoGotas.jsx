import React from "react";

import "../Styles/NivelAlcoolicoGotas.css"

import dripOff from "../Assets/drop.png"
import dripOn from "../Assets/drop2.png"



function NivelAlcoolicoGotas(props){
    let gotas = [];

    /*Porcentagem de álcool necessário para subir um nível*/
    let NiveisAlcool = [
        0,
        10,
        20,
        30,
        35,
    ];

    NiveisAlcool.map((nivel) =>{
        if(props.nivelAlcoolico >= nivel){
            gotas.push(<img src={dripOn} width="20%"/>);
        }
        else{
            gotas.push(<img src={dripOff} width="20%"/>);
        }
    })

    return(
        <div className="gotas-background">
            <img src="../sr" alt="" />
            {gotas}
        </div>
    );
}

export default NivelAlcoolicoGotas;