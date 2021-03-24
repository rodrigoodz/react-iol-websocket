import React from "react";

const Ticker = ({ data }) => {
  if (data) {
    console.log(data[0]);
  }

  if (!data) {
    return null;
  } else {
    const {
      idTitulo,
      maximo,
      minimo,
      montoOperado,
      apertura,
      ultimoPrecio,
    } = data[0];
    return (
      <div>
        <h2>Id: {idTitulo}</h2>
        <h3>Ultimo Precio: {ultimoPrecio}</h3>
        <h3>Apetura: {apertura}</h3>
        <h3>Maximo: {maximo}$</h3>
        <h3>Minimo: {minimo}$</h3>
        <h3>Monto Operado {montoOperado}M</h3>
        <h3>Fecha Hora {montoOperado}M</h3>
      </div>
    );
  }
};

export default Ticker;
