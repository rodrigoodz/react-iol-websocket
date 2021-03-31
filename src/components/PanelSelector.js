import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  background-color: #aaa69d;
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
      <option value="cedears">PANEL: CEDEARS</option>
    </Select>
  );
};

export default PanelSelector;
