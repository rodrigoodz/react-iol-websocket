import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useWS } from "../hooks/useWS";
import List from "./List";
import TickerFinder from "./TickerFinder";
import DataContext from "../context/DataContext";
import Loader from "react-loader-spinner";

const Wrapper = styled.section`
  background-color: #bdc3c7;
  border-radius: 1rem;
  box-shadow: 4px 4px 50px 0px rgba(0, 0, 0, 0.75);
  max-width: 80%;
  margin: 1rem auto;
  height: 100vh;
`;

const Error = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
  text-align: center;
  color: #631414;
`;

const WsInfo = styled.div`
  text-align: center;
  color: blue;
`;

const WebsocketList = () => {
  const { token } = useContext(DataContext);
  const [IDS, setIDS] = useState([
    { name: "ALUA", id: 17388 },
    { name: "BBAR", id: 1320 },
    { name: "BMA", id: 444 },
    { name: "BYMA", id: 88356 },
    { name: "CEPU", id: 773 },
    { name: "COME", id: 1016 },
    { name: "CRES", id: 1087 },
    { name: "CVH", id: 89062 },
    { name: "EDN", id: 34271 },
    { name: "GGAL", id: 3445 },
    { name: "MIRG", id: 1665 },
    { name: "PAMP", id: 1978 },
    { name: "SUPV", id: 83755 },
    { name: "TECO2", id: 2621 },
    { name: "TGNO4", id: 33643 },
    { name: "TGSU2", id: 2681 },
    { name: "TRAN", id: 2747 },
    { name: "TXAR", id: 1258 },
    { name: "VALO", id: 88875 },
    { name: "YPFD", id: 2846 },
  ]);
  const [data, message, error] = useWS(token, IDS);

  //TODO tengo que hacer que el websocket se reconecte automaticamente cuando hay algun error

  //TODO aca debeeria manejar la logica para agregar un nuevo ticker y que se agregue a listaIDS

  //TODO implementar que la data que viene de useWS la pueda ver
  // useEffect(() => {
  // console.log(data);
  // if (data.length > 0) {
  // console.log("data", data);
  // }
  // if (data[0] && JSON.parse(data[0]).type === 1) {
  //   const actual_data = JSON.parse(data[0]).arguments[0];
  //   setListaIDS((listaIDS) =>
  //     listaIDS.map((d) => {
  //       if (d.id === actual_data.idTitulo) {
  //         return {
  //           ...d,
  //           maximo: actual_data.maximo,
  //           variacionPuntos: actual_data.variacionPuntos,
  //           minimo: actual_data.minimo,
  //           montoOperado: actual_data.montoOperado,
  //           apertura: actual_data.apertura,
  //           ultimoPrecio: actual_data.ultimoPrecio,
  //           fechaHoraFormated: actual_data.fechaHoraFormated,
  //           cantidadOperaciones: actual_data.cantidadOperaciones,
  //         };
  //       } else {
  //         return d;
  //       }
  //     })
  //   );
  // }
  // }, [data]);

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <Wrapper>
      <TickerFinder />

      <WsInfo>
        {message.length === 0 ? (
          <Loader type="TailSpin" color="blue" height={20} width={20} />
        ) : (
          message
        )}
      </WsInfo>
      <Header />
      <hr />
      <List id_list={IDS} new_data={data} />
    </Wrapper>
  );
};

export default WebsocketList;
