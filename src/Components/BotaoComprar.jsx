import { Button } from "react-bootstrap";
import React from "react";

function BotaoComprar(props){
    let button;

    if(props.estoque === 0 || props.estoque === null){
        button = <Button disabled={true}>Fora de Estoque</Button>
    }
    else{
        button = <Button>Comprar</Button>
    }

    return(
        <div>
            {button}
        </div>
    );
}

export default BotaoComprar;