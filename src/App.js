import styled, { createGlobalStyle } from "styled-components";
import Websocket from "./components/Websocket";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #d1ccc0;
    box-sizing:border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem;
  color: #227093;
`;

function App() {
  return (
    <>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <GlobalStyle />
      <Title>Websocket IOL </Title>
      <Websocket />
    </>
  );
}

export default App;
