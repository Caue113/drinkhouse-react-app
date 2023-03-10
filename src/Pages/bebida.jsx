import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { json, Link } from "react-router-dom";

function Bebida (){

    /* const [bebida, setBebida] = useState();



    useEffect(() =>{
        axios.get("http://localhost:3002/bebidas/1")
        .then((res) =>{
            console.log(res);
            setBebida(json(res.data));
            console.log(bebida);
        })
    }, []); */

    const [bebida, setBebida] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3002/bebidas/1")
        .then((result) => {
            console.log("Axios Ran. Result:");
/*             console.log(result);
            console.log(result.data); */
            console.log(result.data);
            console.log(result.data[0]);
            setBebida(result.data[0]);
        });
    },[])
    

    

    return(
        <div className="container">
            <Nav>
                <Nav.Item><Link to={"./"}>Menu Principal</Link></Nav.Item>
                <Nav.Item><Link to={"./bebidas"}>Menu de bebidas</Link></Nav.Item>
            </Nav>

            <div className="row">
                <img src="#" alt="bebida"></img>
                <p>Bebida supimpa:  {bebida[0]}</p>
            </div>
        </div>
    );
}

export default Bebida;