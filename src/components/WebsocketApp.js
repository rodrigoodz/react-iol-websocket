import { createGlobalStyle } from "styled-components";
import Websocket from "./WebsocketList";
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
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NzA4NjQiLCJqdGkiOiJhYjBmN2U1Zi1kMTdjLTRlOTQtODUyNy03NzcyM2I4MWU2MDMiLCJleHAiOjE2MTY3OTA3MjcsImlzcyI6Imh0dHBzOi8vc3RyZWFtaW5nLXYyLmludmVydGlyb25saW5lLmNvbSIsImF1ZCI6IkludmVydGlyT25saW5lLmNvbSJ9.svJePSuUmIAOMpMNH2Hh_l7QTpiDhv-dvjqaG6dIigo"
  );
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

export default WebsocketApp;
