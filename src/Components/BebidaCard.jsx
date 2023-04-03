import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function BebidaCard(props){

    let ROUTE = "/bebida/"

    return(
        <Card>
            <Card.Header>
                <Card.Title>{props.name}</Card.Title>
            </Card.Header>

            <Link to={ROUTE + props.bebidaId}>
                <Card.Body>
                    <Card.Img src={props.imageURL}/>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default BebidaCard;