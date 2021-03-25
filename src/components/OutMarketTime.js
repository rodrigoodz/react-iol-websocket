import React from "react";
import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  position: relative;
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

const OutMarketTime = ({ children }) => {
  const date = new Date();

  if (date.getHours() < 17 && date.getHours() > 11) {
    return <>{children}</>;
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
