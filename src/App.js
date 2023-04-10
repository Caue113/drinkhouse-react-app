import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

/* importe das imagens da tela principal */
import titleImage from "./Assets/image1.png";
import logo2 from "./Assets/Logos/Logo2.png";

/* import das logos das cervejas */
import brahmaLogo from "./Assets/Logos/Brahma.png";
import heinekenLogo from "./Assets/Logos/Heineken.png";
import antarcticaLogo from "./Assets/Logos/Antarctica.png";
import bohemiaLogo from "./Assets/Logos/Bohemia.png";
import skolLogo from "./Assets/Logos/Skol.png";
import budweiserLogo from "./Assets/Logos/Budweiser.png";
import coronaLogo from "./Assets/Logos/Corona.png";

/* import de imagens uteis */
import caixa from "./Assets/Boxes/Caixa.png";
import mapa from "./Assets/local.png";
import cell from "./Assets/Icons/Cell.png";
import zap from "./Assets/Icons/Whatsapp.png";
import ze from "./Assets/Logos/zeDelivery.png";
import ifood from "./Assets/Logos/ifood.png";

/* import de componentes */
//import AlertTest from "./Layout/AlertTest";
//import DivDB from "./Components/_divDatabaseTest";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header.jsx";
//import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <main className="App">
        <Header />

        <div className="firstContainer">
          <h1 className="title">Sede?</h1>
          <div className="titles">
            <h3 className="subtitle">Sacie-se com</h3>
            <h3 className="underscoreSubtitle">The Drink House</h3>
          </div>

          <div className="imageContainer">
            <img className="titleImage" src={titleImage} alt="" />
          </div>
        </div>

        <div className="mainSearch">
          <div ClassName="searchLinks">
            <Nav.Link
              className="searches"
              style={{ color: "#79111E", fontSize: "125px", textAlign: "left" }}
            >
              {" "}
              Cervejas{" "}
            </Nav.Link>
            <Nav.Link
              className="searches"
              style={{ color: "#79111E", fontSize: "100px", textAlign: "left" }}
            >
              {" "}
              Vinhos{" "}
            </Nav.Link>
            <Nav.Link
              className="searches"
              style={{ color: "#79111E", fontSize: "75px", textAlign: "left" }}
            >
              {" "}
              Destilados{" "}
            </Nav.Link>
            <Nav.Link
              className="searches"
              style={{ color: "#79111E", fontSize: "50px", textAlign: "left" }}
            >
              {" "}
              Sucos e refrigerantes{" "}
            </Nav.Link>
          </div>
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
          <div className="titleDetail">
            <h1 className="boxTitle"> Conheça nossas </h1>
            <Link
              className="link1"
              style={{ fontSize: "45px", color: "#466362" }}
              to={"/caixas"}
            >
              {" "}
              Caixas Misteriosas{" "}
            </Link>
          </div>

          <img className="boxImage" src={caixa} alt="caixa misteriosa" />
        </div>

        <div className="findOut">
          <h1 className="mapsTitle"> Onde nos encontrar? </h1>
          <div className="mapAndNames">
            <img className="map" src={mapa} alt="localização" />
            <div className="names">
              <h3 className="localNames"> Campinas, SP </h3>
              <p className="streetNames"> R. Dr. Guilherme Silva </p>
              <h3 className="localNames"> Uberaba, MG </h3>
              <p className="streetNames"> AV. da Saudade </p>
              <h3 className="localNames"> Curitiba, PR </h3>
              <p className="streetNames"> Av. Visconde de Guarapará</p>
            </div>
          </div>
        </div>

        <div className="deliveryContainer">
          <div className="titleContainer">
            <h1 className="deliveryTitle"> Peça um delivery </h1>
          </div>

          <div className="conjunt1">
            <img className="cellIcon" src={cell} alt="icon" />
            <div className="numbers1">
              <h5 className="number"> (34) 3321-9999 </h5>
              <h5 className="number"> 0800 999 9999 </h5>
            </div>

            <div className="conjunt2">
              <img className="ZapZap" src={zap} alt="icon" />
              <div className="numbers2">
                <h5 className="number"> (34) 9 9999-9999 </h5>
              </div>
            </div>
          </div>

          <img className="deliveries" src={ze} alt="Zé Delivery" />
          <img className="deliveries" src={ifood} alt="ifood" />
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
