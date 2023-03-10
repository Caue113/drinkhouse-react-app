import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Bebidas (){
    return(
        <div>
            <Nav>
                <Nav.Item><Link to={"./bebida/1"}>Skol 239ml</Link></Nav.Item>
                <Nav.Item><Link to={"./bebida/"}>Skol Garrafa</Link></Nav.Item>
            </Nav>
        </div>
    );
}

export default Bebidas;