import React from "react";
import styled from "styled-components";
import { useWS } from "../hooks/useWS";
import Ticker from "./Ticker";

const Wrapper = styled.section`
  padding: 4em;
  background-color: #8e44ad;
`;

const Websocket = () => {
  const [wsData] = useWS();
  return (
    <Wrapper>{wsData.data && <Ticker data={wsData.data.arguments} />}</Wrapper>
  );
};

export default Websocket;
