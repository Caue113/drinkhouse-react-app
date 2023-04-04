import React from "react";
import { Nav } from "react-bootstrap";

/* folha css */

import "../Styles/footer.css";

import logo from "../Assets/Logo1.png";
import { Link } from "react-router-dom";

/*
    Exemplo de um Layout simples do footer. 
    
    TO-DO
    -Estilização deve ser um CSS separado.
    -Implementar 'React Router' nos links
*/

const Footer = () => {
  return (
    <div className="footerBackground">
      <Nav className="flex-column" style={{ backgroundColor: "#000" }}>
        <h3 className="footerTitles">Ajuda</h3>
        <Nav.Item>
          <Link class="text-light" to={"/WIP"}>
            Preciso de Ajuda
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link class="text-light" to={"/WIP"}>
            Preguntas comuns
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link class="text-light" to={"/WIP"}>
            SAC
          </Link>
        </Nav.Item>
      </Nav>

      <Nav className="flex-column" style={{ backgroundColor: "#000" }}>
        <h3 className="footerTitles">Contato</h3>
        <Nav.Item>
          <Link class="text-light" to={"/WIP"}>
            Sobre nós
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link class="text-light" to={"/WIP"}>
            Contatos
          </Link>
        </Nav.Item>
      </Nav>

      <Nav className="flex-column" style={{ backgroundColor: "#000" }}>
        <h3 className="footerTitles">Termos e Políticas</h3>
        <Nav.Item>
          <Link class="text-light" to={"/WIP"}>
            Política de Privacidade
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link class="text-light" to={"/WIP"}>
            Termos de Uso
          </Link>
        </Nav.Item>
      </Nav>

      <Nav.Item>
        <Link to={"/"}>
          <img className="footerImage" src={logo} alt="logo" />
        </Link>
      </Nav.Item>
    </div>
  );
};

export default Footer;
