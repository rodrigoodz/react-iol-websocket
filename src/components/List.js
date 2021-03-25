import React from "react";
import Ticker from "./Ticker";

const List = ({ wsData }) => {
  if (!wsData) {
    return null;
  }
  return <div>{wsData.data && <Ticker data={wsData.data.arguments} />}</div>;
};

export default List;
