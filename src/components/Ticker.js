import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Row from "./Row";

const Wrapper = styled.section`
  background-color: ${(props) =>
    props.variacion < 0 ? "red" : props.variacion > 0 ? "green" : "blue"};
`;

const P = styled.p`
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const Ticker = ({ data }) => {
  const {
    name,
    maximo = null,
    variacionPuntos = null,
    minimo = null,
    montoOperado = null,
    apertura = null,
    ultimoPrecio = null,
    fechaHoraFormated = null,
    cantidadOperaciones = null,
  } = data;

  return (
    <Wrapper variacion={variacionPuntos}>
      <Row>
        <Col>{name ? <P>{name}</P> : <P>-</P>}</Col>
        <Col>
          {variacionPuntos ? <P>{variacionPuntos.toFixed(2)}%</P> : <P>-</P>}
        </Col>
        <Col>{ultimoPrecio ? <P>{ultimoPrecio.toFixed(2)}$</P> : <P>-</P>}</Col>
        <Col>{apertura ? <P>{apertura.toFixed(2)}$</P> : <P>-</P>}</Col>
        <Col>{maximo ? <P>{maximo.toFixed(2)}$</P> : <P>-</P>}</Col>
        <Col>{minimo ? <P>{minimo.toFixed(2)}$</P> : <P>-</P>}</Col>
        <Col>{montoOperado ? <P>{montoOperado.toFixed(2)}$</P> : <P>-</P>}</Col>
        <Col>{fechaHoraFormated ? <P>{fechaHoraFormated}hs</P> : <P>-</P>}</Col>
        <Col>
          {cantidadOperaciones ? <P>{cantidadOperaciones}</P> : <P>-</P>}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Ticker;
