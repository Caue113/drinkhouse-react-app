import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Carousel, Nav } from "react-bootstrap";
import { json, Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import "./bebida.css";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";


export async function loader({ params }){
    console.log("Rodando PARAMS de LOADER");
    console.log(params);

    let SQL_RESULT;

    try {
        await axios.get(`http://localhost:3002/bebidas/bebida/${params.bebidaId}`)
                .then((res) =>{
                    SQL_RESULT = res.data;
                });
        
        return SQL_RESULT;
    } catch (error) {
        console.warn(error);
        throw error;
    }

}


function promocaoElement(){

    let hasPromocao;

    if(hasPromocao){
        return(
            <p> Promoção de 20% </p>
        );
    }

    
}

function buttonState(){
    let button;
    let hasInStock = true;  //Pegar valor da database

    if(hasInStock){
        button = <Button>Comprar</Button>
    }
    else{
        button = <Button disabled={true}>Fora de Estoque</Button>
    }
    return(button);
}


function Bebida (){
    const SQL_DATA = useLoaderData();
    console.log(SQL_DATA)
    console.log(SQL_DATA[0].nome)


    //Lógica temporária. Deve ser feita em outro ambiente
    if(SQL_DATA === undefined || SQL_DATA.length === 0){
        return(
            <>
                <h1>Bebida não encontrada</h1>
                <p>Lamentamos, mas parece que essa bebida não existe :(</p>
            </>
        );
    }
    
    return(
        <>
            <Header></Header>
            <main className="container">

                <div className="row">
                    <h1>{SQL_DATA[0].nome}</h1>
                </div>

                <div className="row" style={{backgroundColor: "orange"}}>
                    <div className="d-flex flex-row">
                        <div>
                            <img src="https://placekitten.com/g/200/300" class="img-fluid" alt="bebida"></img>
                        </div>

                        <div className="d-flex flex-column">
                            <h2 className="text-center">{SQL_DATA[0].nome} - Marca X</h2>
                            {promocaoElement()}
                            
                            <div className="d-flex flex-row">
                                <div className="col-4">
                                    <p>Preço: R$ {"preco"}</p>
                                    
                                </div>
                                <div className="col-4">
                                    <p>Volume: R$ {"volume"}</p>
                                </div>
                            </div>

                            <div className="d-flex flex-row">
                                <div className="col-12">
                                    <p>Porcentagem Alcoolica</p>
                                    <div>
                                        {"QuantidadeGotasAlcoolico"}
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row">
                                <div className="col-12">
                                    <p>Porcentagem Alcoolica</p>
                                    <div>
                                        {"QuantidadeGotasAlcoolicoComponente"}
                                    </div>
                                </div>
                            </div>
                            {buttonState()}
                        </div>

                    </div>
                </div>

                <div className="row">
                    <h2>Bebidas Relacionadas</h2>

                    <div className="d-flex flex-direction-row">
                        <img src="https://placekitten.com/g/100/100" className=""></img>
                        <img src="https://placekitten.com/g/100/100" className=""></img>
                        <img src="https://placekitten.com/g/100/100" className=""></img>
                        <img src="https://placekitten.com/g/100/100" className=""></img>
                    </div>

                </div>
            </main>
            <Footer></Footer>
        </>
        
    );
}

export default Bebida;