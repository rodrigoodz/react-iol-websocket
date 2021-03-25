import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Row from "./Row";

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const Header = () => {
  return (
    <Row>
      <Col>
        <Text>ID</Text>
      </Col>
      <Col>
        <Text>Variacion</Text>
      </Col>
      <Col>
        <Text>Ult. Precio</Text>
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
