import React from "react";
import { Nav } from "react-bootstrap";

import { Link, Outlet, useParams } from "react-router-dom";

const style = {
    backgroundColor : "blue",
    fontSize: "32px"
}

const style2 = {
    backgroundColor: "#f9f9ff",
}


function Bebidas (){

    return(
        <div className="container" style={style}>
            <Nav className="row">
                <Nav.Item><Link to={"./bebida/1"}>Skol 239ml</Link></Nav.Item>
                <Nav.Item><Link to={"./bebida/2"}>Skol Garrafa</Link></Nav.Item>
            </Nav>

            <div className="row">
                <p>Context</p>
                <p>Context</p>
                <p>Context</p>
            </div>

            <div className="row" style={style2}>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Bebidas;