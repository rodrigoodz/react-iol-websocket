import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  background-color: #feffde;
  outline: none;
  color: #424642;
`;

const PanelSelector = ({ changePanel }) => {
  const [panel, setPanel] = useState({ value: "" });

  const handleChange = (e) => {
    setPanel({ value: e.target.value });
    changePanel(e.target.value);
  };

  return (
    <Select value={panel.value} onChange={handleChange}>
      <option value="">PANEL: NO SELECCIONADO</option>
      <option value="merval">PANEL: MERVAL</option>
      <option value="bonos">PANEL: BONOS</option>
      <option value="opciones">PANEL: OPCIONES</option>
      <option value="cedears">PANEL: CEDEARS</option>
      <option value="sp500">PANEL: SP500</option>
      <option value="nasdaq100">PANEL: NASDAQ100</option>
    </Select>
  );
};

export default PanelSelector;
