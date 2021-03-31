import React, { useEffect, useState } from "react";
import { getPanel } from "../helpers/getPanel";

const PanelSelector = ({ changePanel }) => {
  const [panel, setPanel] = useState({ value: "" });

  const handleChange = (e) => {
    setPanel({ value: e.target.value });
  };

  useEffect(() => {
    const ids = getPanel(panel.value);
    changePanel(ids);
  }, [panel, changePanel]);

  return (
    <select value={panel.value} onChange={handleChange}>
      <option value=""> </option>
      <option value="merval">MERVAL</option>
      <option value="bonos">BONOS</option>
      <option value="cedears">CEDEARS</option>
    </select>
  );
};

export default PanelSelector;
