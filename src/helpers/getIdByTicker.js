import { titulos } from "../db/ids";

const getIdByTicker = (ticker) => {
  return titulos.find((a) => ticker.toUpperCase() === a.Simbolo);
};

export default getIdByTicker;
