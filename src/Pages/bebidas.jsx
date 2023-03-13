import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Bebidas (){

    return(
        <div>
            <Nav>
                <Nav.Item><Link to={"./bebida/1"}>Skol 239ml</Link></Nav.Item>
                <Nav.Item><Link to={"./bebida/2"}>Skol Garrafa</Link></Nav.Item>
            </Nav>
        </div>
    );
}

export default Bebidas;