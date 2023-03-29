import * as react from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

/* folha css */
import "../Styles/header.css";

import Logo from "../Assets/Logo1.png";
import Carrinho from "../Assets/carrinho.png";

const Header = () => {
  return (
    <div className="headerstyle">
      <Nav className="justify-content-center">
        <Nav.Item className="button">
          <Link to={"/"}>
            <img className="logostyle" src={Logo} alt="logotipo" />
          </Link>
        </Nav.Item>
        <Nav.Item className="button">
          <Link to={"/bebidas"}>Bebidas</Link>
        </Nav.Item>
        <Nav.Item className="button">
          {" "}
          <Link to={"/caixas"}>Caixas</Link>
        </Nav.Item>
        <Nav.Item className="button"> Sobre </Nav.Item>
        <Nav.Item className="button"> Contato </Nav.Item>
        <Nav.Item className="button">
          <Link to={"/"}>
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
