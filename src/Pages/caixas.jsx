import React from "react";
import { Nav } from "react-bootstrap";

/* importe de imagens */
import caixa from "../Assets/Caixa.png"

import caixa1 from "../Assets/greenMysteryBox.png"
import caixa2 from "../Assets/niggerMisteryBox.png"
import caixa3 from "../Assets/blueMysteryBox.png"
import caixa4 from "../Assets/redMysteryBox.png"

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "../Styles/caixas.css";

function Caixas() {
  return (
    <div style={{ backgroundColor: "#A0BAB2" }}>
      <Header />
      <div class={"Container"}>
        <h1 class={"Title"}>
          Desvenda a{" "}
          <div style={{ color: "#d45c39", textDecorationLine: "underline" }}>
            curiosidade
          </div>{" "}
          com Lootboxes
        </h1>
      </div>

      <div
        class={"Container"}
        style={{ marginBottom: "2px", backgroundColor: "#466362" }}
      >
        <h2 style={{ color: "#fff", marginLeft: "10%", fontSize: "50px" }}>
          Conheça as Lootboxes
        </h2>
      </div>

      <div class={"Direita"}>
        <p
          style={{
            fontSize: "30px",
            textAlign: "right",
            marginTop: "40px",
            padding: "5px",
          }}
        >
          As Lootboxes são uma forma diferente de apimentar festas e reuniões
          com bebidas sortidas que agradam o sabor da galera.
        </p>
        <img width={300} height={300} src={caixa} alt="Caixa" />
      </div>

      <div
        class={"Container"}
        style={{ marginBottom: "2px", backgroundColor: "#eb984b" }}
      >
        <h2 style={{ marginLeft: "10%", fontSize: "50px" }}>
          À gosto de todos
        </h2>
      </div>
      <div
        style={{
          backgroundColor: "#466362",
          paddingTop: "30px",
        }}
        class={"Container"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <a href="#">
            <img width={300} height={300} src={caixa1} alt="Case Misteriosa" />
            <p class="text-center" style={{ color: "#fff" }}>
              Case Misteriosa
            </p>
          </a>
          <a href="#">
            <img width={300} height={300} src={caixa3} alt="Case Refinado" />
            <p class="text-center" style={{ color: "#fff" }}>
              Case Refinado
            </p>
          </a>
          <a href="#">
            <img width={300} height={300} src={caixa4} alt="Case Kids" />
            <p class="text-center" style={{ color: "#fff" }}>
              Case Kids
            </p>
          </a>
        </div>
      </div>
      <div
        class={"Container"}
        style={{
          marginTop: "150px",
          marginBottom: "150px",
          backgroundColor: "#eb984b",
        }}
      >
        <p style={{ textAlign: "center", fontSize: "50px" }}>
          A cada mês as Lootboxes ganham uma nova variação de bebidas para
          sempre garantir novidades em suas festas!
        </p>
      </div>
      <div class={"Container"} style={{ backgroundColor: "#eb984b" }}>
        <div style={{ textAlign: "center", fontSize: "50px" }}>
          <p>
            É usuário recorrente e quer aquele descontinho? Faça uma Assinatura
          </p>
        </div>
        <div
          style={{
            marginTop: "70px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <a href="#">
              <h3>Standart</h3>
              <p>Um pequeno agrado mensal</p>
              <p>R$ 74.90</p>
              <img width={200} height={200} src={caixa1} alt="Case" />
            </a>
            <p>Inclui: </p>
            <ul>
              <li>2 Cervajas</li>
              <li>2 destilados</li>
              <li>2 Refrigerantes</li>
            </ul>
          </div>
          <div>
            <a href="#">
              <h3>Bebidas Finas</h3>
              <p>Para aquele encontro marcante</p>
              <p>R$ 454,50</p>
              <img width={200} height={200} src={caixa3} alt="Case" />
            </a>
            <p>Inclui: </p>
            <ul>
              <li>1 vinho tinto</li>
              <li>1 vinho seco</li>
              <li>1 vinho branco</li>
              <li>2 champangnhes</li>
              <li>2 taças de 450ml</li>
            </ul>
          </div>
          <div>
            <a href="#">
              <h3>Destilados diversos</h3>
              <p>Para os mais exigentes paladares</p>
              <p>R$ 415,98</p>
              <img width={200} height={200} src={caixa2} alt="Case" />
            </a>
            <p>Inclui: </p>
            <ul>
              <li>1 cachaça branca</li>
              <li>1 cachaça dourada</li>
              <li>2 conhaques </li>
              <li>2 Whiskeys </li>
              <li>2 vodkas </li>
              <li>6 copos de 60ml</li>
            </ul>
          </div>
          <div>
            <a href="#">
              <h3>Kids</h3>
              <p>A garotada também incluída</p>
              <p>R$ 99,98</p>
              <img width={200} height={200} src={caixa4} alt="Case" />
            </a>
            <p>Inclui: </p>
            <ul>
              <li>2 refrigerantes de 2L</li>
              <li>2 sucos de 2L</li>
              <li>1 refrigerante de 450ml</li>
              <li>1 suco de 450ml </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Caixas;
