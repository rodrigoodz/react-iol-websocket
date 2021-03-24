import { useWS } from "../hooks/useWS";
import React from "react";
import Ticker from "./Ticker";

const List = () => {
  const [wsData] = useWS();

  return <div>{wsData.data && <Ticker data={wsData.data.arguments} />}</div>;
};

export default List;
