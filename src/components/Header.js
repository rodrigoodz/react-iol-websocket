import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Row from "./Row";

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Row>
      <Col>
        <Text>ID</Text>
      </Col>
      <Col>
        <Text>Ultimo Precio</Text>
      </Col>
      <Col>
        <Text>Apertura</Text>
      </Col>
      <Col>
        <Text>Maximo</Text>
      </Col>
      <Col>
        <Text>Minimo</Text>
      </Col>
      <Col>
        <Text>Volumen</Text>
      </Col>
      <Col>
        <Text>Fecha</Text>
      </Col>
      <Col>
        <Text>Cant. Oper.</Text>
      </Col>
    </Row>
  );
};

export default Header;
