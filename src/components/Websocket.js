import React from "react";
import styled from "styled-components";
import Header from "./Header";
import List from "./List";
import OutMarketTime from "./OutMarketTime";

const Wrapper = styled.section`
  background-color: #8e44ad;
  border-radius: 1rem;
  border: 1px solid black;
  max-width: 80%;
  margin: auto;
  height: 100vh;
`;

const Websocket = () => {
  return (
    <Wrapper>
      <Header />
      <>
        <List />
        <OutMarketTime />
      </>
    </Wrapper>
  );
};

export default Websocket;
