import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import "./App.css";
import axios from "axios";

/* importe das imagens da tela principal */
import titleImage from "./Assets/image1.png";
import logo2 from "./Assets/Logo2.png";

/* import das logos das cervejas */
import brahmaLogo from "./Assets/Brahma.png";
import heinekenLogo from "./Assets/Heineken.png";
import antarcticaLogo from "./Assets/Antarctica.png";
import bohemiaLogo from "./Assets/Bohemia.png";
import skolLogo from "./Assets/Skol.png";
import budweiserLogo from "./Assets/Budweiser.png";
import coronaLogo from "./Assets/Corona.png";

/* import de imagens uteis */
import caixa from "./Assets/Caixa.png";
import mapa from "./Assets/local.png";
import cell from "./Assets/Cell.png";
import zap from "./Assets/Whatsapp.png";
import ze from "./Assets/zeDelivery.png";
import ifood from "./Assets/ifood.png";

/* import de componentes */
import AlertTest from "./Layout/AlertTest";
import DivDB from "./Components/_divDatabaseTest";
import Footer from "./Layout/Footer";
import { Button } from "react-bootstrap";
import Header from "./Layout/Header";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3002/bebidas").then((res) => {
      console.log(res);
      setMessage(res.data);
    });
  }, []);

  return (
    <>
      <main className="App">
        <Header />
        <div className="firstContainer">
          <h1 className="title">Sede</h1>
          <h3 className="subtitle">Sacie-se com</h3>
          <h3 className="underscoreSubtitle">The Drink House</h3>
          <img className="titleImage" src={titleImage} alt="image" />
        </div>

        <div className="mainSearch">
          <Nav.Link className="searches"> Cervejas </Nav.Link>
          <Nav.Link className="searches"> Vinhos </Nav.Link>
          <Nav.Link className="searches"> Destilados </Nav.Link>
          <Nav.Link className="searches"> Sucos e refrigerantes </Nav.Link>
          <img className="imageSearch" src={logo2} alt="logo" />
        </div>

        <div className="partnes">
          <h1 className="titlePartnes"> Marcas Parceiras</h1>
          <img className="partnesImage" src={brahmaLogo} alt="marca" />
          <img className="partnesImage" src={heinekenLogo} alt="marca" />
          <img className="partnesImage" src={antarcticaLogo} alt="marca" />
          <img className="partnesImage" src={bohemiaLogo} alt="marca" />
          <img className="partnesImage" src={skolLogo} alt="marca" />
          <img className="partnesImage" src={budweiserLogo} alt="marca" />
          <img className="partnesImage" src={coronaLogo} alt="marca" />
        </div>

        <div className="mysteryBox">
          <h1 className="boxTitle"> conheça nossa </h1>
          <Nav.Link className="link1"> Caixas Misteriosas </Nav.Link>
          <img className="boxImage" src={caixa} alt="caixa misteriosa" />
        </div>

        <div className="findOut">
          <h1 className="mapsTitle"> Onde nos encontrar? </h1>
          <img className="map" src={mapa} alt="localização" />
          <h3 className="localNames"> Campinas, SP </h3>
          <p className="streetNames"> R. Dr. Guilherme Silva </p>
          <h3 className="localNames"> Uberaba, MG </h3>
          <p className="streetNames"> AV. da Saudade </p>
          <h3 className="localNames"> Curitiba, PR </h3>
        </div>

        <div className="deliveryContainer">
          <h1 className="deliveryTitle"> Peça um delivery </h1>
          <img className="cellIcon" src={cell} alt="icon" />
          <h5 className="number"> (34) 3321-9999 </h5>
          <h5 className="number"> 0800 999 9999 </h5>

          <img className="ZapZap" src={zap} alt="icon" />
          <h5 className="number"> (34) 9 9999-9999 </h5>

          <img className="deliveries" src={ze} alt="Zé Delivery" />
          <img className="deliveries" src={ifood} alt="ifood" />
        </div>
        <DivDB />
        <AlertTest />
        <Footer />
      </main>
    </>
  );
}

export default App;
