import React from "react";
import { useRouteError, Link } from "react-router-dom";

import { Card } from "react-bootstrap";


function ErrorPage(){

    const error = useRouteError();
    console.error(error);
    

    return(
        <div className="container">
            <Card>
                <Card.Header>
                        <Card.Title className="text-center">Opa!</Card.Title>
                        <Card.Subtitle>Algo não está certo...</Card.Subtitle>
                </Card.Header>

                <Card.Body>
                    <Card.Text>Veja o que pode ser feito com o erro abaixo</Card.Text>
                    <Card.Text>
                        <i>{error.statusText || error.message}</i>
                    </Card.Text>
                    <Card.Text>Voltar à <Link to={"/"}>página principal</Link></Card.Text>
                </Card.Body>

            </Card>

{/*             <h1>Opa!</h1>
            <p>Algo não está certo...</p>

            <p>
                <i>{ error.statusText || error.message }</i>
            </p> */}
        </div>
    );
};


export default ErrorPage;