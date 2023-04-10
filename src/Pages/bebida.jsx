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

/**
 * TO DO - REMOVE TEMP VALUES BELOW
 */
let tempBebida = {
  marca: "Skol",
  preco: 140,
  volume: 297,
  porcentagemAlcoolica: 5,
  promocao: null,
  estoque: 1,
};

export async function loader({ params }) {
  console.log("Rodando PARAMS de LOADER");
  console.log(params);

  let SQL_RESULT;

  try {
    await axios
      .get(`http://localhost:3002/bebidas/bebida/${params.bebidaId}`)
      .then((res) => {
        SQL_RESULT = res.data;
      });

    return SQL_RESULT;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

function promocaoElement() {
  let hasPromocao = tempBebida.promocao;

  if (hasPromocao) {
    return <p> Promoção de {tempBebida.promocao} </p>;
  }
}

function Bebida() {
  const SQL_DATA = useLoaderData();
  console.log(SQL_DATA);
  console.log(SQL_DATA[0].nome);

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
          <h1 className="bebida-titulo">{SQL_DATA[0].nome}</h1>
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
                {SQL_DATA[0].nome} - {tempBebida.marca}
              </h2>

              {promocaoElement()}

              <div className="d-flex flex-column dados">
                <div className="dados-produto">
                  <p>
                    Preço:{" "}
                    <span className="informacoes-destaque">
                      R$ {tempBebida.preco}
                    </span>
                  </p>
                </div>

                <div className="dados-produto">
                  <p>
                    Volume:{" "}
                    <span className="informacoes-destaque">
                      {tempBebida.volume} ml{" "}
                    </span>
                  </p>
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="dados">
                  <p className="text-center dados-produto ">
                    Porcentagem Alcoolica -{" "}
                    <span>{tempBebida.porcentagemAlcoolica}%</span>
                  </p>
                  <NivelAlcoolicoGotas
                    nivelAlcoolico={tempBebida.porcentagemAlcoolica}
                  />
                </div>
              </div>

              <div className="d-flex flex-row justify-content-end">
                <BotaoComprar
                  className="align-self-center"
                  estoque={tempBebida.estoque}
                  id={SQL_DATA[0].bebidaId}
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
