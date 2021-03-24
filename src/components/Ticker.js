import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Row from "./Row";

const Wrapper = styled.section`
  background-color: ${(props) => (props.variacion < 0 ? "red" : "green")};
`;

const Ticker = ({ data }) => {
  if (data) {
    console.log(data[0]);
  }

  if (!data) {
    return null;
  } else {
    const {
      idTitulo,
      maximo,
      variacionPuntos,
      minimo,
      montoOperado,
      apertura,
      ultimoPrecio,
      fechaHora,
      cantidadOperaciones,
    } = data[0];
    console.log(variacionPuntos < 0);
    return (
      <Wrapper variacion={variacionPuntos}>
        <Row>
          <Col>
            <p>{idTitulo}</p>
          </Col>
          <Col>
            <p>{variacionPuntos} %</p>
          </Col>
          <Col>
            <p>{ultimoPrecio} $</p>
          </Col>
          <Col>
            <p>{apertura} $</p>
          </Col>
          <Col>
            <p>{maximo} $</p>
          </Col>
          <Col>
            <p>{minimo} $</p>
          </Col>
          <Col>
            <p>{montoOperado} M</p>
          </Col>
          <Col>
            <p>{fechaHora.match(/\d\d:\d\d:\d\d/)} hs</p>
          </Col>
          <Col>
            <p>{cantidadOperaciones}</p>
          </Col>
        </Row>
      </Wrapper>
    );
  }
};

export default Ticker;
