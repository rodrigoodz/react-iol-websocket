import { useState, useEffect } from "react";

export const useWS = () => {
  const [wsData, setWsData] = useState({
    data: null,
    message: "",
    error: null,
  });

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NzA4NjQiLCJqdGkiOiIxM2ZhN2JkZS1kODI2LTRkOWItODJlNS05ZWZkZTBiOTdkMzMiLCJleHAiOjE2MTY2MTc1NDYsImlzcyI6Imh0dHBzOi8vc3RyZWFtaW5nLXYyLmludmVydGlyb25saW5lLmNvbSIsImF1ZCI6IkludmVydGlyT25saW5lLmNvbSJ9.NNdAwUhmUJjMb0DthKEgQZCDnQrZFK7ctXkDA7bntOg";
    var ws = new WebSocket(
      `wss://streaming-externo-v2.invertironline.com/MarketHub?access_token=${token}`
    );
    ws.onopen = function () {
      setWsData({ ...wsData, message: "Opened" });
      setWsData({ ...wsData, message: "Proponiendo Protocolos" });
      setWsData({ ...wsData, message: "Protocolo Sugerido" });

      //   console.log("OPENED");
      //   console.log("Proponiendo Protocolos");
      //   console.log("Protocolo sugerido: ");
      ws.send('{"protocol":"json","version":1}' + String.fromCharCode(30));
    };
    ws.onclose = function () {
      //   console.log("CLOSED");
      //   setWsData("Cerrado");
      setWsData({ ...wsData, message: "Cerrado" });
    };
    ws.onmessage = function (message) {
      const accepted = "{}" + String.fromCharCode(30);
      const ping = '{"type":6}' + String.fromCharCode(30);
      if (message.data === accepted) {
        // console.log("Protocolo aceptado.");
        // setWsData("Protocolo aceptado");
        ws.send(
          '{"arguments":["3611-3"],"invocationId":"0","target":"JoinGroup","type":1}'
        );
        console.log("suscribiendo aluar");
      } else if (message.data === ping) {
        // console.log("recibido ping");
        ws.send(ping);
        // console.log("enviado ping");
      } else {
        // console.log("recibido: " + message);
        // console.log(JSON.parse(message.data.slice(0, -1)));
        setWsData({ ...wsData, data: JSON.parse(message.data.slice(0, -1)) });
        // ws.send(ping);
        // console.log("enviado ping");
      }
    };
    ws.onerror = function (error) {
      //   console.log("Error:" + error);
      setWsData({ ...wsData, error: `error: ${error}` });
    };
  }, []);

  return [wsData];
};
