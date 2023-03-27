import * as react from "react";
import { Nav } from "react-bootstrap";

/* folha css */
import "../Styles/header.css";

import Logo from "../Assets/Logo1.png";
import Carrinho from "../Assets/carrinho.png";

const Header = () => {
  return (
    <div className="headerstyle">
      <Nav className="justify-content-center">
        <Nav.Link className="button" href="/">
          <img className="logostyle" src={Logo} alt="logotipo" />
        </Nav.Link>
        <Nav.Link className="button" href="./bebidas">
          {" "}
          Bebidas{" "}
        </Nav.Link>
        <Nav.Link className="button" href="./caixas">
          {" "}
          Caixas{" "}
        </Nav.Link>
        <Nav.Link className="button" href="#">
          {" "}
          Sobre{" "}
        </Nav.Link>
        <Nav.Link className="button" href="#">
          {" "}
          Contato{" "}
        </Nav.Link>
        <Nav.Link className="button" href="#">
          <img className="cartstyle" src={Carrinho} alt="carrinho de compras" />
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Header;
