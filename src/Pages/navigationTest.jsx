import React from "react";
import { Link } from "react-router-dom";

function NavigationTest (){
    return(
        <div>
            <h1>Content</h1>
            <p>No content</p>


            <p>Go back to <a href="/">main page</a> </p>

            <Link to={"/"}> Voltar à pagina principal</Link>
            <br/>

            <Link to={"/bebidas/"}>Página de Bebidas</Link>
            <br/>
            <Link to={"/bebidas/1"}>Bebida n°1</Link>
            <br/>
            <Link to={"/bebidas/2"}>Bebida n°1</Link>
        </div>
    );
}

export default NavigationTest;