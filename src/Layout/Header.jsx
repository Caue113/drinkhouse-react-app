import * as react from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

/* folha css */
import "../Styles/header.css";

import Logo from "../Assets/Logo1.png";
import Carrinho from "../Assets/carrinho.png";
/* <Nav className="justify-content-center"> </Nav>*/
const Header = () => {
  return (
    <div>
      <Nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#D45C39" }}
      >
        <Nav.Item className="button">
          <Link to={"/"}>
            <img className="logostyle" src={Logo} alt="logotipo" />
          </Link>
        </Nav.Item>

        <Nav.Item className="nav-link active">
          <Link style={{ fontSize: "40px" }} to={"/bebidas"} class="text-light">
            Bebidas
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-link active">
          {" "}
          <Link style={{ fontSize: "40px" }} to={"/caixas"} class="text-light">
            Caixas
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-link active">
          {" "}
          <Link style={{ fontSize: "40px" }} to={"/WIP"} class="text-light">
            Sobre
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-link active">
          {" "}
          <Link style={{ fontSize: "40px" }} to={"/WIP"} class="text-light">
            Contato
          </Link>
        </Nav.Item>

        <Nav.Item className="button">
          <Link to={"/WIP"}>
            <img
              className="cartstyle"
              src={Carrinho}
              alt="carrinho de compras"
            />
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
