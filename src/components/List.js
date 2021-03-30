import React, { useEffect, useState } from "react";
import Ticker from "./Ticker";

const List = ({ id_list, new_data }) => {
  const [actualData, setActualData] = useState(id_list);

  // actualizo actualData si llega algun id nuevo en id_list
  // TODO

  // actualizo actualData si llega nueva data
  useEffect(() => {
    if (new_data.length > 0) {
      console.log("nuevas puntas", new_data);
      new_data.forEach((d) => {
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
  }, [new_data, setActualData]);

  // console.log(new_data);
  if (id_list.length === 0) {
    return null;
  }

  return (
    <div>
      {actualData.map((ticker) => {
        return <Ticker key={ticker.id} data={ticker} />;
      })}
    </div>
  );
  // return <div>{data.arguments && <Ticker data={data.arguments} />}</div>;
};

export default List;
