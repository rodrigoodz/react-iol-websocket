import { createGlobalStyle } from "styled-components";
import Websocket from "./components/Websocket";
import { Helmet } from "react-helmet";
import Title from "./components/Title";
import TokenInfo from "./components/TokenInfo";
import { useState } from "react";
import OutMarketTime from "./components/OutMarketTime";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
  }
`;
const BodyStyle = createGlobalStyle`
  body {
    background-color: #34495e

  }
`;

function App() {
  const [token, setToken] = useState("");
  const [disableInput, setDisableInput] = useState(false);

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
      <BodyStyle />
      <Title text="Websocket IOL" />

      <OutMarketTime>
        <TokenInfo
          token={token}
          setToken={setToken}
          disableInput={disableInput}
          setDisableInput={setDisableInput}
        />
        {disableInput ? <Websocket token={token} /> : null}
      </OutMarketTime>
    </>
  );
}

export default App;
