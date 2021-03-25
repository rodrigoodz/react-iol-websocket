import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { useWS } from "../hooks/useWS";
import List from "./List";
import TickerFinder from "./TickerFinder";

const Wrapper = styled.section`
  background-color: #bdc3c7;
  border-radius: 1rem;
  box-shadow: 4px 4px 50px 0px rgba(0, 0, 0, 0.75);
  max-width: 80%;
  margin: 1rem auto;
  height: 100vh;
`;

const Websocket = ({ token }) => {
  const [wsData] = useWS(token);
  console.log(wsData);

  return (
    <Wrapper>
      <TickerFinder />
      <Header />
      <hr />
      <List wsData={wsData} />
    </Wrapper>
  );
};

export default Websocket;
