import React from "react";
import styled from "styled-components";

const BTN = styled.button`
  margin-left: 1rem;
  font-size: 1rem;
  height: 1.4rem;
  background-color: #84817a;
  border-width: 0;
  border-radius: 0.2rem;
  outline: none;
  padding: 0.2rem;

  &:hover {
    background-color: #aaa69d;
    transform: translateY(-1px);
  }
`;

const Button = ({ text }) => {
  return <BTN>{text}</BTN>;
};

export default Button;
