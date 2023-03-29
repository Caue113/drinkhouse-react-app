import React, { useEffect, useState } from "react";
import axios from "axios";
import { json, Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import "./bebida.css";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";

import NivelAlcoolicoGotas from "../Components/NivelAlcoolicoGotas.jsx"
import BotaoComprar from "../Components/BotaoComprar";


import "../Styles/Bebida.css"
import BebidaCard from "../Components/BebidaCard";
import BebidasRelacionadas from "../Layout/BebidasRelacionadas";


let tempBebida = {
    marca: "Skol",
    preco: 140,
    volume: 297,
    porcentagemAlcoolica: 5,
    promocao: null,
    estoque: null,
}


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

    let hasPromocao = tempBebida.promocao;

    if(hasPromocao){
        return(
            <p> Promoção de {tempBebida.promocao} </p>
        );
    }
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

                <div className="row text-center">
                    <h1 className="font__bigger">{SQL_DATA[0].nome}</h1>
                </div>

                <div className="row" style={{backgroundColor: "orange"}}>

                    <div className="col-4 text-center img-fluid">
                        <img src="https://placekitten.com/g/200/300" class="img-fluid" alt="bebida"></img>
                    </div>

                    <div className="col-8">
                        <div className="d-flex flex-column">
                            <h2 className="text-center font__big">{SQL_DATA[0].nome} - {tempBebida.marca}</h2>
                            {promocaoElement()}
                            
                            <div className="d-flex flex-row">
                                <div className="">
                                    <p>Preço: R$ {tempBebida.preco}</p>
                                    
                                </div>
                                <div className="">
                                    <p>Volume: R$ {tempBebida.volume} ml</p>
                                </div>
                            </div>

                            <div className="d-flex flex-row">
                                <div className="col-12">
                                    <p>Porcentagem Alcoolica <span>{tempBebida.porcentagemAlcoolica}%</span></p>
                                    <NivelAlcoolicoGotas nivelAlcoolico={tempBebida.porcentagemAlcoolica}/>
                                </div>
                            </div>

                            <BotaoComprar estoque={tempBebida.estoque}/>
                        </div>
                    </div>
                    
                </div>

                <div className="row">
                    <h2>Bebidas Relacionadas</h2>

                    <div className="d-flex flex-direction-row justify-content-around">
                        <BebidasRelacionadas />
                    </div>

                </div>
            </main>

            <Footer></Footer>
        </>
        
    );
}

export default Bebida;