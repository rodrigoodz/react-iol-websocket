import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Row from "./Row";

const Wrapper = styled(motion.section)`
  flex: 1;
  background-color: ${(props) =>
    props.variacion < 0 ? "red" : props.variacion > 0 ? "green" : "blue"};

  /* border-radius: 0.2rem; */
  border-bottom-left-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
  margin-top: 0.2rem;
  @media (min-width: 640px) {
    padding: 0.2rem;
  }
`;

const P = styled.p`
  @media (min-width: 1280px) {
    font-size: 0.85rem;
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

const tickerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Ticker = ({ data }) => {
  const {
    name,
    maximo = null,
    variacion = null,
    minimo = null,
    montoOperado = null,
    apertura = null,
    ultimoPrecio = null,
    fechaHoraFormated = null,
    cantidadOperaciones = null,
  } = data;

  return (
    <Wrapper
      variacion={variacion}
      variants={tickerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Row>
        <Col>{name ? <P>{name}</P> : <P>-</P>}</Col>
        <Col>{variacion ? <P>{variacion.toFixed(2)}%</P> : <P>-</P>}</Col>
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
