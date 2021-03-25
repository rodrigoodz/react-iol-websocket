import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Input = styled.input`
  font-size: 1.2rem;
  border-radius: 0.2rem;
  outline: none;
  border-width: 0;
  background-color: #bdc3c7;
  width: 80%;
  text-align: center;

  &::placeholder {
    color: #aaa69d;
  }

  &::selection {
    background: transparent;
  }

  &:disabled {
    background: repeating-linear-gradient(
      -55deg,
      #222,
      #222 10px,
      #333 10px,
      #333 20px
    );

    opacity: 70%;
  }
`;

const Error = styled.p`
  color: red;
  margin-top: 0;
  margin-bottom: 0;
`;

const Wrapper = styled.form`
  display: flex;
  max-width: 80%;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
`;

const TokenInfo = ({ token, setToken, disableInput, setDisableInput }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInput = (e) => {
    setToken(e.target.value);
  };

  const handleButton = (e, type) => {
    e.preventDefault();
    console.log(type);
    if (token.length < 1) {
      setErrorMessage("Error!");
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    } else {
      if (type === "reset") {
        setErrorMessage(null);
        setToken("");
      }
      setDisableInput(!disableInput);
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder="Ingresá token"
        type="text"
        value={token}
        onChange={handleInput}
        disabled={disableInput}
      />
      {errorMessage ? (
        <Error>{errorMessage}</Error>
      ) : !disableInput ? (
        <Button
          text="Confirmar"
          handleButton={(e) => handleButton(e, "confirm")}
        />
      ) : (
        <Button
          text="Resetear"
          handleButton={(e) => handleButton(e, "reset")}
        />
      )}
    </Wrapper>
  );
};

export default TokenInfo;