import  { createGlobalStyle } from "styled-components";
import Websocket from "./components/Websocket";
import { Helmet } from "react-helmet";
import Title from "./components/Title";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #d1ccc0;
    box-sizing:border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

function App() {
  return (
    <>
      <Helmet>
        <title>Websocket IOL</title>
        <meta
          name="description"
          content="Websocket IOL para obtener las cotizaciones en tiempo real"
        />
      </Helmet>
      <GlobalStyle />
      <Title text="Websocket IOL" />
      <Websocket />
    </>
  );
}

export default App;
