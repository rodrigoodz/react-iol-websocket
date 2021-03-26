import React from "react";
import Ticker from "./Ticker";

const List = ({ data }) => {
  if (!data) {
    return null;
  }
  return <div>{data.arguments && <Ticker data={data.arguments} />}</div>;
};

export default List;
