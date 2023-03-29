import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function BebidaCard(props){

    let route = "/bebida/"

    return(
        <Card>
            <Card.Header>
                <Card.Title>{props.name}</Card.Title>
            </Card.Header>

            <Link to={route + props.bebidaId}>
                <Card.Body>
                    <Card.Img src={props.imageURL}/>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default BebidaCard;