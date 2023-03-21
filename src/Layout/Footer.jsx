import React from "react";
import { ListGroup, ListGroupItem, Nav } from "react-bootstrap";

/*
    Exemplo de um Layout simples do footer. 
    
    TO-DO
    -Estilização deve ser um CSS separado.
    -Implementar 'React Router' nos links
*/

function Footer(){
    return(
        <div style={{backgroundColor: "#8B9DC3", display:"flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <Nav className="flex-column">
                <h3>Ajuda</h3>
                <Nav.Item>Preciso de Ajuda</Nav.Item>
                <Nav.Link href="https://google.com">Google</Nav.Link>
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
        </div>
    );
}

export default Footer;