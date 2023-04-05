import React from "react";
import { Nav } from "react-bootstrap";

/* importe de imagens */
import caixa from "../Assets/caixa.jpg";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "./caixas.css";

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
        <img width={400} height={250} src={caixa} alt="Caixa" />
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
            <img width={400} height={250} src={caixa} alt="Case Misteriosa" />
            <p class="text-center" style={{ color: "#fff" }}>
              Case Misteriosa
            </p>
          </a>
          <a href="#">
            <img width={400} height={250} src={caixa} alt="Case Refinado" />
            <p class="text-center" style={{ color: "#fff" }}>
              Case Refinado
            </p>
          </a>
          <a href="#">
            <img width={400} height={250} src={caixa} alt="Case Kids" />
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
              <h3>Básico</h3>
              <p>Um pequeno agrado mensal</p>
              <p>R$ 00,00</p>
              <img width={300} height={150} src={caixa} alt="Case" />
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
              <img width={300} height={150} src={caixa} alt="Case" />
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
              <img width={300} height={150} src={caixa} alt="Case" />
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
              <img width={300} height={150} src={caixa} alt="Case" />
            </a>
            <p>Inclui: </p>
            <ul>
              <li>Guaranás</li>
              <li>Mini-Guaranás</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Caixas;
