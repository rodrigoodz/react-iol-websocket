import { useState, useEffect, useRef } from "react";
/*
customHook para hacer uso del WS y devolver la informacion que recibe junto a un mensaje de estado, y en caso de error
*/

export const useWS = (token, ids) => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(
      `wss://streaming-externo-v2.invertironline.com/MarketHub?access_token=${token}`
    );

    ws.current.onopen = function () {
      console.log("CONEXION ABIERTA");
      setMessage("Conexion Abierta");
      console.log("Proponiendo Protocolos");
      ws.current.send(
        '{"protocol":"json","version":1}' + String.fromCharCode(30)
      );
    };

    ws.current.onclose = function () {
      setMessage("Conexion Cerrada");
      console.log("Conexion Cerrada");
    };

    ws.current.onmessage = function (message) {
      // console.log(message);
      let i = 0;
      if (message.data === "{}" + String.fromCharCode(30)) {
        console.log("Puntas : Protocolos Aceptados");
        setMessage("Puntas : Protocolos Aceptados");
        i = 0;
        ids.forEach(({ id }) => {
          ws.current.send(
            `{"arguments":["${id}-1"],"invocationId":"${i}","target":"JoinGroup","type":1}` +
              String.fromCharCode(30)
          );
          ws.current.send(
            `{"arguments":["${id}-3"],"invocationId":"${
              i + 1
            }","target":"JoinGroup","type":1}` + String.fromCharCode(30)
          );
          i = i + 2;
        });
      } else if (message.data.includes('{"type":3,"invocationId":')) {
        // console.log("Nuevos Datos");
        i = 0;
      } else if (message.data === '{"type":6}' + String.fromCharCode(30)) {
        setMessage("Recibido PING del Servidor de Puntas");
        console.log("Recibido PING del Servidor de Puntas");
        ws.current.send('{"type":6}' + String.fromCharCode(30));
        console.log("Enviando PONG al Servidor de Puntas");
        setMessage("Enviando PONG al Servidor de Puntas");
      } else {
        // console.log(message);
        setMessage("Recibido: Nuevas Puntas");
        console.log("Recibido: Nuevas Puntas");

        // a la data, la parseo y le anido el nombre del ticker para que sea mas practico despues mostrar la info
        // console.log(message.data.slice(0, -1).split(String.fromCharCode(30)));
        const aux = message.data
          .slice(0, -1)
          .split(String.fromCharCode(30))
          .filter((d) => d !== '{"type":6}')
          .map((d) => {
            const id = JSON.parse(d).arguments[0].idTitulo;
            const { name } = ids.find((d) => d.id === id);
            return { ...JSON.parse(d).arguments[0], name };
          });

        setData(aux);
        // setData(message.data.slice(0, -1).split(String.fromCharCode(30)));
      }
    };

    ws.current.onerror = function (error) {
      console.log("Error: " + JSON.stringify(error));
      setError("Error de Websocket");
      ws.current.close();
    };

    return () => {
      ws.current.close();
    };
  }, [token, ids]);

  return [data, message, error];
};
