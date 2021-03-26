import { createGlobalStyle } from "styled-components";
import WebsocketList from "./WebsocketList";
import { Helmet } from "react-helmet";
import Title from "./Title";
import TokenInfo from "./TokenInfo";
import { useState } from "react";
import OutMarketTime from "./OutMarketTime";

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

function WebsocketApp() {
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
          disableInput={disableInput}
          setDisableInput={setDisableInput}
        />
        {disableInput ? <WebsocketList /> : null}
      </OutMarketTime>
    </>
  );
}

export default WebsocketApp;
