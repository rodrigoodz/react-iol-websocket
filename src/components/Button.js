import React from "react";
import styled from "styled-components";

const BTN = styled.button`
  font-size: 0.9rem;
  background-color: #f3f4ed;
  margin-right: 0.5rem;
  outline: none;
  padding: 0.2rem;
  border: none;
  border-radius: 0.2rem;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: #bfcba8;
  }

  @media (max-width: 640px) {
    margin: 0.1rem 0;
  }
`;

const Button = ({ text, handleButton, isDisabled = false }) => {
  return (
    <BTN type="submit" onClick={handleButton} disabled={isDisabled}>
      {text}
    </BTN>
  );
};

export default Button;
