import React, { useEffect, useState } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { json, Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import "./bebida.css";


export async function loader({ params }){
    console.log("Rodando PARAMS de LOADER");
    console.log(params);

    let result;

    try {
        await axios.get(`http://localhost:3002/bebidas/bebida/${params.bebidaId}`)
                .then((res) =>{
                    result = res.data;
                });
        
        return {result};
    } catch (error) {
        console.warn(error)
    }

}


function Bebida (){
    const bebidas = useLoaderData();

    const bebidasRow = () =>{
        let temp = [];
        bebidas.result.forEach((value)=>{
            console.log(value)
            temp.push(<p key={value.bebida_id}>{value.bebida_id} {value.nome}</p>);
        });

        return (temp);
    }

    
    /* const [bebida, setBebida] = useState([]); */

    
    
/*     useEffect(() => {
        axios.get("http://localhost:3002/bebidas/bebida/1")
        .then((result) => {
            console.log("Axios Ran. Result:");
            console.log(result);
            console.log(result.data);
            console.log(result.data[0]);
            setBebida(result.data[0]);
        });
    },[]) */
    

    

    return(
        <div className="container">
            <Nav className="nav">
                <Nav.Item><Link to={"/"} className="nav__link">Menu Principal</Link></Nav.Item>
                <Nav.Item><Link to={"/bebidas"} className="nav__link">Menu de bebidas</Link></Nav.Item>
            </Nav>

            <div className="row">
                <img src="#" alt="bebida"></img>
                <div>{bebidasRow()}</div>
                
                <p>Bebida supimpa:</p>
            </div>

            <div className="row">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Bebida;