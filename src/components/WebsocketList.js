import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useWS } from "../hooks/useWS";
import TickerFinder from "./TickerFinder";
import TokenContext from "../context/TokenContext";
import Loader from "react-loader-spinner";
import Ticker from "./Ticker";
import IDSContext from "../context/IDSContext";
import PanelSelector from "./PanelSelector";
import { getPanel } from "../helpers/getPanel";

const Wrapper = styled.section`
  background-color: #bdc3c7;
  border-radius: 1rem;
  box-shadow: 4px 4px 50px 0px rgba(0, 0, 0, 0.75);
  max-width: 80%;
  margin: 1rem auto;
  height: 100vh;
`;

const InfoandPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: blue;
`;

const loader = <Loader type="TailSpin" color="blue" height={20} width={20} />;

const WebsocketList = () => {
  const { token } = useContext(TokenContext);
  const { IDS, setIDS } = useContext(IDSContext);
  const [actualData, setActualData] = useState(IDS);

  // customHook
  const [data, message, error] = useWS(token, IDS);

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

  // remover ticker -> con filter saco el ticker y actualizo el context de IDS y actualData
  const handleRemoveID = (id) => {
    setIDS(IDS.filter((d) => d.id !== id));
    setActualData(actualData.filter((d) => d.id !== id));
  };

  // agregar ticker -> agrego al context el nuevo id que llega de los inputs y en actualData lo mismo
  const handleAddID = (name, id) => {
    setIDS([...IDS, { name, id }]);
    setActualData([...actualData, { name, id }]);
  };

  // cambiar panel -> reemplazo directamente el context y actualData
  const handleChangePanel = (panel) => {
    const ids = getPanel(panel);
    setIDS(ids);
    setActualData(ids);
  };

  // si el ws tira error no muestro la lista
  // if (error) {
  //   return <Error>{error}</Error>;
  // }

  return (
    <Wrapper>
      <TickerFinder addNewTicker={handleAddID} />
      <InfoandPanelWrapper>
        <WsInfo>{message.length === 0 ? loader : message}</WsInfo>
        <PanelSelector changePanel={handleChangePanel} />
      </InfoandPanelWrapper>
      <Header />
      <hr />
      <>
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
      </>
    </Wrapper>
  );
};

export default WebsocketList;
