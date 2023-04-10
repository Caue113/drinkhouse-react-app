import React from "react";
import { Nav } from "react-bootstrap";

import { Link, Outlet /*, useParams*/ } from "react-router-dom";

const style = {
  backgroundColor: "blue",
  fontSize: "32px",
};

const style2 = {
  backgroundColor: "#f9f9ff",
};

function Bebidas() {
  return (
    <div className="container" style={style}>
      <Nav className="row">
        <Nav.Item>
          <Link to={"../bebida/1"}>Cerveja Brahma Duplo Malte</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/2"}>Cerveja Skol beats</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/3"}>Cerveja Nova Schin</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/4"}>Cerveja Heineken Origin</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/5"}>Cerveja Budweiser long neck</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/6"}>Cerveja Antarctica Sub Zero</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/7"}>Cerveja Petra Puro Malte</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/8"}>Cerveja Caracu Cerveja Escura</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/9"}>Cerveja Lokal Bier cerveja pilsen</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"../bebida/10"}>Cerveja Itaipava 100% Malte</Link>
        </Nav.Item>
      </Nav>

      <div className="row">
        <p>Context</p>
        <p>Context</p>
        <p>Context</p>
      </div>

      <div className="row" style={style2}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Bebidas;
