import React from "react";
import { Button } from "react-bootstrap";

function addProdutoCarrinhoSession(id){
    //Backend - Adaptar para usar sistema de SESSION
    //Código para adicionar no carrinho.
    //sessionStorage.setItem("produtoId",id);
    console.log("Adicionado produto!");
}

function BotaoComprar(props){
    let button;

    if(props.estoque === 0 || props.estoque === null){
        button = <Button disabled={true}>Fora de Estoque</Button>
    }
    else{
        button = <Button onClick={()=>{addProdutoCarrinhoSession(props.id)}}>Comprar</Button>
    }

    return(
        <div>
            {button}
        </div>
    );
}

export default BotaoComprar;