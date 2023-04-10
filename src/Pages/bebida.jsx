import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import "../Styles/Bebida.css";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";

import NivelAlcoolicoGotas from "../Components/NivelAlcoolicoGotas.jsx";
import BotaoComprar from "../Components/BotaoComprar";

import "../Styles/Bebida.css";
//import BebidaCard from "../Components/BebidaCard";
import BebidasRelacionadas from "../Layout/BebidasRelacionadas";

export async function loader({ params }) {
  console.log("Rodando PARAMS de LOADER");
  console.log(params);

  let SQL_RESULT;

  try {
    await axios
      .get(`http://localhost:3002/bebida/${params.bebidaId}`)
      .then((res) => {
        SQL_RESULT = res.data;
      });

    return SQL_RESULT;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

/* 
function promocaoElement(){

    let hasPromocao = row.promocao;

    if(hasPromocao){
        return(
            <p> Promoção de {row.promocao} </p>
        );
    }
}
 */

/**
 * Formatador de preço para BRL
 * @returns {String} Valor formatado
 */
const CurrencyFormatBRL = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function Bebida() {
  const SQL_DATA = useLoaderData();
  let row;
  console.log(SQL_DATA);

  if (SQL_DATA[0]) {
    row = SQL_DATA[0];
    console.log(row);
  }

  //Lógica temporária. Deve ser feita em outro ambiente
  if (SQL_DATA === undefined || SQL_DATA.length === 0) {
    return (
      <>
        <h1>Bebida não encontrada</h1>
        <p>Lamentamos, mas parece que essa bebida não existe :(</p>
      </>
    );
  }

  console.log("TESTE");
  return (
    <>
      <Header></Header>
      <main className="container">
        <div className="row text-center">
          <h1 className="bebida-titulo">{row.NomeBebida}</h1>
        </div>

        <div className="row informacoes">
          <div className="col-4">
            <img
              src="https://placekitten.com/g/100/200"
              class="img-fluid bebida-imagem"
              alt="bebida"
            ></img>
          </div>

          <div className="col-8">
            <div className="d-flex flex-column">
              <h2 className="text-center informacoes-titulo">
                {row.NomeBebida} - {row.Marca}
              </h2>

              {/* {promocaoElement()} */}

              <div className="d-flex flex-column dados">
                <div className="dados-produto">
                  <p>
                    Preço:{" "}
                    <span className="informacoes-destaque">
                      {CurrencyFormatBRL.format(row.Preco)}
                    </span>
                  </p>
                </div>

                <div className="dados-produto">
                  <p>
                    Volume:{" "}
                    <span className="informacoes-destaque">{row.Volume}</span>
                  </p>
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="dados">
                  <p className="text-center dados-produto ">
                    Porcentagem Alcoolica - <span>{row.TeorAlcoolico}%</span>
                  </p>
                  <NivelAlcoolicoGotas nivelAlcoolico={row.TeorAlcoolico} />
                </div>
              </div>

              <div className="d-flex flex-row justify-content-end">
                <BotaoComprar
                  className="align-self-center"
                  estoque={row.estoque}
                  id={row.id}
                />
              </div>
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
