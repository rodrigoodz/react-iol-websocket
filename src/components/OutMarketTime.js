import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color: #631414;
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

const H2 = styled.h2`
  color: #631414;
  text-align: center;
`;

const OutMarketTime = () => {
  const date = new Date();

  if (date.getHours() < 17 && date.getHours() > 11) {
    return null;
  } else {
    return (
      <Wrapper>
        <H1>No se puede utilizar websocket fuera del horario de mercado</H1>
        <H2>
          Hora Actual: {date.getHours()}:{date.getMinutes()} hs
        </H2>
      </Wrapper>
    );
  }
};

export default OutMarketTime;
