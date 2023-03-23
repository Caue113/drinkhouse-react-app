import React from "react";
import { Nav } from "react-bootstrap";

/* importe de imagens */
import caixa from "../Assets/caixa.jpg";

import "./caixas.css";

function Caixas() {
  return (
    <div>
      <h1>Desvenda a curiosidade com Lootboxes</h1>

      <h2>Conheça as Lootboxes</h2>

      <div class={"Direita"}>
        <p>
          As Lootboxes são uma forma diferente de apimentar festas e reuniões
          com bebidas sortidas que agradam o sabor da galera.
        </p>
        <img width={400} height={250} src={caixa} alt="Caixa" />
      </div>
      <h2>À gosto de todos</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <a href="#">
          <img width={400} height={250} src={caixa} alt="Case Misteriosa" />
          <p class="text-center">Case Misteriosa</p>
        </a>
        <a href="#">
          <img width={400} height={250} src={caixa} alt="Case Refinado" />
          <p class="text-center">Case Refinado</p>
        </a>
        <a href="#">
          <img width={400} height={250} src={caixa} alt="Case Kids" />
          <p class="text-center">Case Kids</p>
        </a>
      </div>
      <div>
        <p>
          A cada mês as Lootboxes ganham uma nova variação de bebidas para
          sempre garantir novidades em suas festas
        </p>
      </div>
      <div>
        <p>
          É usuário recorrente e quer aquele descontinho? Faça uma Assinatura
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <a href="#">
            <h3>Básico</h3>
            <p>Um pequeno agrado mensal</p>
            <p>R$ 00,00</p>
            <img width={400} height={250} src={caixa} alt="Case" />
          </a>
          <p>Inclui: </p>
          <ul>
            <li>Cervajas</li>
            <li>Chopes</li>
            <li>Refrigerantes</li>
          </ul>
        </div>
        <div>
          <a href="#">
            <h3>Fámilia</h3>
            <p>Para dividir com todos</p>
            <p>R$ 00,00</p>
            <img width={400} height={250} src={caixa} alt="Case" />
          </a>
          <p>Inclui: </p>
          <ul>
            <li>Cervajas</li>
            <li>Chopes</li>
            <li>Refrigerantes</li>
            <li>1 brinde</li>
          </ul>
        </div>
        <div>
          <a href="#">
            <h3>Refinado</h3>
            <p>Seleção única de vinhos e Champangnhes</p>
            <p>R$ 00,00</p>
            <img width={400} height={250} src={caixa} alt="Case" />
          </a>
          <p>Inclui: </p>
          <ul>
            <li>Vinhos brancos</li>
            <li>Chopes</li>
            <li>Refrigerantes</li>
            <li>1 brinde</li>
          </ul>
        </div>
        <div>
          <a href="#">
            <h3>Kids</h3>
            <p>A garotada também incluída</p>
            <p>R$ 00,00</p>
            <img width={400} height={250} src={caixa} alt="Case" />
          </a>
          <p>Inclui: </p>
          <ul>
            <li>Guaranás</li>
            <li>Mini-Guaranás</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Caixas;
