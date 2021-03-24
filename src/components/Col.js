import React from "react";
import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Col = ({ children }) => {
  return <ColumnWrapper>{children}</ColumnWrapper>;
};

export default Col;
