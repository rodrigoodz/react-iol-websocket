import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useWS } from "../hooks/useWS";
import TickerFinder from "./TickerFinder";
import DataContext from "../context/DataContext";
import Loader from "react-loader-spinner";
import Ticker from "./Ticker";

const Wrapper = styled.section`
  background-color: #bdc3c7;
  border-radius: 1rem;
  box-shadow: 4px 4px 50px 0px rgba(0, 0, 0, 0.75);
  max-width: 80%;
  margin: 1rem auto;
  height: 100vh;
`;

const TickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotonTicker = styled.button`
  background: #fff;
  outline: none;
  border: 0;
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
const initial_ids = [
  { name: "ALUA", id: 17388 },
  // { name: "BBAR", id: 1320 },
  // { name: "BMA", id: 444 },
  // { name: "BYMA", id: 88356 },
  // { name: "CEPU", id: 773 },
  // { name: "COME", id: 1016 },
  // { name: "CRES", id: 1087 },
  // { name: "CVH", id: 89062 },
  // { name: "EDN", id: 34271 },
  // { name: "GGAL", id: 3445 },
  // { name: "MIRG", id: 1665 },
  // { name: "PAMP", id: 1978 },
  // { name: "SUPV", id: 83755 },
  // { name: "TECO2", id: 2621 },
  // { name: "TGNO4", id: 33643 },
  // { name: "TGSU2", id: 2681 },
  // { name: "TRAN", id: 2747 },
  // { name: "TXAR", id: 1258 },
  // { name: "VALO", id: 88875 },
  // { name: "YPFD", id: 2846 },
];

const WebsocketList = () => {
  const { token } = useContext(DataContext);

  const [IDS, setIDS] = useState(initial_ids);
  const [actualData, setActualData] = useState(initial_ids);

  // customHook
  const [data, message, error] = useWS(token, IDS);

  // |

  // cuando llega nueva data del WS, actualizo actualData
  useEffect(() => {
    if (data.length > 0) {
      console.log("nuevas puntas", data);
      data.forEach((d) => {
        setActualData((actualData) =>
          actualData.map((a) => {
            if (a.id === d.idTitulo) {
              return {
                ...a,
                maximo: d.maximo,
                variacionPuntos: d.variacionPuntos,
                minimo: d.minimo,
                montoOperado: d.montoOperado,
                apertura: d.apertura,
                ultimoPrecio: d.ultimoPrecio,
                fechaHoraFormated: d.fechaHoraFormated,
                cantidadOperaciones: d.cantidadOperaciones,
              };
            } else {
              return a;
            }
          })
        );
      });
    }
  }, [data, setActualData]);

  //TODO tengo que hacer que el websocket se reconecte automaticamente cuando hay algun error

  //TODO aca debeeria manejar la logica para agregar un nuevo ticker y que se agregue a listaIDS
  const handleRemoveID = (id) => {
    setIDS(IDS.filter((d) => d.id !== id));
    setActualData(actualData.filter((d) => d.id !== id));
  };

  const handleAddID = (name, id) => {
    setIDS([...IDS, { name, id }]);
    setActualData([...actualData, { name, id }]);
  };

  // if (error) {
  //   return <Error>{error}</Error>;
  // }

  return (
    <Wrapper>
      <TickerFinder addNewTicker={handleAddID} />

      <WsInfo>
        {message.length === 0 ? (
          <Loader type="TailSpin" color="blue" height={20} width={20} />
        ) : (
          message
        )}
      </WsInfo>
      <Header />
      <hr />
      <div>
        {actualData.map((ticker) => {
          return (
            <TickerWrapper key={ticker.id}>
              <Ticker data={ticker} />
              <BotonTicker onClick={() => handleRemoveID(ticker.id)}>
                X
              </BotonTicker>
            </TickerWrapper>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default WebsocketList;
