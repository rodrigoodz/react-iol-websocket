import React, { useState } from "react";

const PanelSelector = ({ changePanel }) => {
  const [panel, setPanel] = useState({ value: "" });

  const handleChange = (e) => {
    setPanel({ value: e.target.value });
    changePanel(e.target.value);
  };

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
