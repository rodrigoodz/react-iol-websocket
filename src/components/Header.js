import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Row from "./Row";

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 640px) {
    font-size: 0.5rem;
  }
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
