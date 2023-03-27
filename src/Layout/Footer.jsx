import React from "react";
import { Nav } from "react-bootstrap";

/* folha css */

import "../Styles/footer.css";

import logo from "../Assets/Logo1.png";

/*
    Exemplo de um Layout simples do footer. 
    
    TO-DO
    -Estilização deve ser um CSS separado.
    -Implementar 'React Router' nos links
*/

const Footer = () => {
  return (
    <div className="footerBackground">
      <Nav className="flex-column">
        <h3>Ajuda</h3>
        <Nav.Link href="#">Preciso de Ajuda</Nav.Link>
        <Nav.Link href="#">Perguntas Comuns</Nav.Link>
        <Nav.Link href="#">SAC</Nav.Link>
      </Nav>

      <Nav className="flex-column">
        <h3>Contato</h3>
        <Nav.Link href="#">Sobre nós</Nav.Link>
        <Nav.Link href="#">Contatos</Nav.Link>
      </Nav>

      <Nav className="flex-column">
        <h3>Termos e Políticas</h3>
        <Nav.Link href="#">Política de Privacidade</Nav.Link>
        <Nav.Link href="/amongus">Termos de Uso</Nav.Link>
      </Nav>

      <Nav.Link href="/">
        <img className="footerImage" src={logo} alt="logo" />
      </Nav.Link>
    </div>
  );
};

export default Footer;
