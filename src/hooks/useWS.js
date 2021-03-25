import { useState, useEffect } from "react";

export const useWS = (token) => {
  const [wsData, setWsData] = useState({
    data: null,
    message: "",
    error: null,
  });

  useEffect(() => {
    var ws = new WebSocket(
      `wss://streaming-externo-v2.invertironline.com/MarketHub?access_token=${token}`
    );
    ws.onopen = function () {
      // setWsData({ ...wsData, message: "Conexion Abierta" });
      // setWsData({ ...wsData, message: "Proponiendo Protocolos" });
      // setWsData({ ...wsData, message: "Protocolo Sugerido" });
      console.log("Conexion Abierta");
      console.log("Proponiendo Protocolos");
      console.log("Protocolo Sugerido");

      ws.send('{"protocol":"json","version":1}' + String.fromCharCode(30));
    };
    ws.onclose = function () {
      // setWsData({ ...wsData, message: "Conexion Cerrada" });
      console.log("Conexion Cerrada");
    };
    ws.onmessage = function (message) {
      const accepted = "{}" + String.fromCharCode(30);
      const ping = '{"type":6}' + String.fromCharCode(30);
      if (message.data === accepted) {
        ws.send(
          '{"arguments":["3611-3"],"invocationId":"0","target":"JoinGroup","type":1}'
        );
        console.log("suscribiendo aapl");
        ws.send(
          '{"arguments":["66543-3"],"invocationId":"1","target":"JoinGroup","type":1}'
        );
        console.log("suscribiendo tsla");
      } else if (message.data === ping) {
        console.log("Recibido Ping");
        // setWsData({ ...wsData, message: "Recibido Ping" });
        ws.send(ping);
        console.log(`Enviado Ping: ${ping}`);
        // setWsData({ ...wsData, message: `Enviado Ping: ${ping}` });
      } else {
        setWsData({ ...wsData, data: JSON.parse(message.data.slice(0, -1)) });
        console.log(JSON.parse(message.data.slice(0, -1)));
        // setWsData({ ...wsData, message: `Enviado Ping: ${ping}` });
        console.log(`Enviado Ping: ${ping}`);
      }
    };
    ws.onerror = function (error) {
      console.log("Error:" + JSON.stringify(error));
      // setWsData({ ...wsData, error: `error: ${error}` });
    };
  }, []);

  return [wsData];
};
