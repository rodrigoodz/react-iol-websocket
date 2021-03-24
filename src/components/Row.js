import React from "react";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = ({ children }) => {
  return <RowWrapper>{children}</RowWrapper>;
};

export default Row;
