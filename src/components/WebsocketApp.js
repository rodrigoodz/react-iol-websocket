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
    background-color: #2f5d62

  }
`;

function WebsocketApp() {
  /*  
  este state ademas de servirme para no modificar el token una vez 
  ingresado lo aprovecho para saber si mostrar la lista de tickers o no
  */
  const [disableInput, setDisableInput] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BodyStyle />
      <Helmet>
        <title>Websocket IOL</title>
        <meta
          name="description"
          content="Websocket IOL para obtener las cotizaciones en tiempo real"
        />
      </Helmet>

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
