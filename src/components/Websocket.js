import React from "react";
import styled from "styled-components";
import { useWS } from "../hooks/useWS";
import Header from "./Header";
import Ticker from "./Ticker";

const Wrapper = styled.section`
  background-color: #8e44ad;
  border-radius: 1rem;
  border: 1px solid black;
  max-width: 80%;
  margin: auto;
  height: 100vh;
`;

const Websocket = () => {
  const [wsData] = useWS();
  return (
    <Wrapper>
      <Header />
      <>{wsData.data && <Ticker data={wsData.data.arguments} />}</>
    </Wrapper>
  );
};

export default Websocket;
