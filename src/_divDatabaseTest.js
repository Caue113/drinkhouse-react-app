/**
 * Este arquivo JS é um exemplo de como realizar uma consulta E renderizar elementos na tela.
 *
 * 
 *  
 * ALERTA - SERÁ REMOVIDO EM FUTUROS UPDATES --> MÁ ARQUITETURA
 * 
 * 
 * 
 * 
 * 
 */

import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react"

function DivDB()
{
    const [dbContent, setDbContent] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3002/test2")
        .then((result) => {
            console.log("Axios Ran. Result:");
            console.log(result);
            setDbContent(result.data);
        });
    },[])
    
    let contentColor = "#222222"; //Dark Gray

    /**
     * Caso a consulta seja vazia, retorna uma visualização própria.
     */
    if(dbContent.length === 0 || dbContent === []){        
        return(
            <div>
                <p  color={contentColor}>
                    Resultado do banco: <span color="#ff3333">[]</span>
                </p>
            </div>
        );
    }

    /**
     * Retorna PRIMEIRA tupla existente na consulta.
     * 
     * 
     */
    return(
        <div>
            <p  color={contentColor}>
                Resultado do banco: {dbContent[0].nome}
            </p>
        </div>
    )
}


export default DivDB;