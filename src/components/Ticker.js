import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Row from "./Row";

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
      minimo,
      montoOperado,
      apertura,
      ultimoPrecio,
      fechaHora,
      cantidadOperaciones,
    } = data[0];
    return (
      <Row>
        <Col>
          <p>{idTitulo}</p>
        </Col>
        <Col>
          <p>{ultimoPrecio}$</p>
        </Col>
        <Col>
          <p>{apertura}$</p>
        </Col>
        <Col>
          <p>{maximo}$</p>
        </Col>
        <Col>
          <p>{minimo}$</p>
        </Col>
        <Col>
          <p>{montoOperado}M</p>
        </Col>
        <Col>
          <p>{fechaHora}</p>
        </Col>
        <Col>
          <p>{cantidadOperaciones}</p>
        </Col>
      </Row>
    );
  }
};

export default Ticker;
