import React, { useState } from "react";
import styled from "styled-components";
import getIdByTicker from "../helpers/getIdByTicker";
import isNumber from "../helpers/isNumber";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0;
`;

const FormWrapper = styled.form`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  height: 1.4rem;
  font-size: 1rem;
  width: 80%;
  border-radius: 0.2rem;
  outline: none;
  border-width: 0;
  background-color: #84817a;

  &::placeholder {
    color: #aaa69d;
  }
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
  margin: 0;
`;

const TickerFinder = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [ticker, setTicker] = useState("");

  const handleButton = (e) => {
    e.preventDefault();
    if (ticker.length < 1) {
      setErrorMessage("Error! No hay nada ingresado");
      setInterval(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setErrorMessage("");

      if (isNumber(ticker)) {
        // si es id lo agrego directamente
        console.log(ticker);
        //TODO agregar cuando es numero
        setTicker("");
      } else {
        //   sino busco el id del ticker
        const dataTicker = getIdByTicker(ticker);
        if (!dataTicker) {
          setErrorMessage("No se pudo encontrar el ticker solicitado");
          setTicker("");

          setInterval(() => {
            setErrorMessage("");
          }, 4000);
        } else {
          console.log(dataTicker);
          alert(
            `ID: ${dataTicker.ID} \nTipo: ${dataTicker.Tipo} \nDescripcion: ${dataTicker.Descripcion}`
          );
          //TODO agregar cuando es texto, tomando el id de dataTicker.ID
          setTicker("");
        }
      }
    }
  };

  const handleInput = (e) => {
    setTicker(e.target.value);
  };

  return (
    <Container>
      <FormWrapper>
        <Input
          placeholder="Ingresá nombre ticker o ID"
          type="text"
          value={ticker}
          onChange={handleInput}
        />
        <Button text="Buscar" handleButton={handleButton} />
      </FormWrapper>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  );
};

export default TickerFinder;
