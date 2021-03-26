import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useWS } from "../hooks/useWS";
import List from "./List";
import TickerFinder from "./TickerFinder";
import DataContext from "../context/DataContext";
import Loader from "react-loader-spinner";

const Wrapper = styled.section`
  background-color: #bdc3c7;
  border-radius: 1rem;
  box-shadow: 4px 4px 50px 0px rgba(0, 0, 0, 0.75);
  max-width: 80%;
  margin: 1rem auto;
  height: 100vh;
`;

const Error = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
  text-align: center;
  color: #631414;
`;

const WsInfo = styled.div`
  text-align: center;
  color: blue;
`;

const WebsocketList = () => {
  const { token } = useContext(DataContext);
  const [wsData] = useWS(token);
  const { data, message, error } = wsData;

  if (error) {
    return <Error>Error en conexion con Websocket</Error>;
  }
  console.log("data1", data);
  return (
    <Wrapper>
      <TickerFinder />

      <WsInfo>
        {message.length === 0 ? (
          <Loader type="TailSpin" color="blue" height={20} width={20} />
        ) : (
          message
        )}
      </WsInfo>
      <Header />
      <hr />
      <List data={data} />
    </Wrapper>
  );
};

export default WebsocketList;
