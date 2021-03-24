import React, { useState } from "react";
import styled from "styled-components";
import getIdByTicker from "../helpers/getIdByTicker";
import isNumber from "../helpers/isNumber";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  padding: 0.4rem 0;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid red;
  flex: 1;
`;

const Button = styled.button`
  margin-left: 1rem;
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
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
      } else {
        //   sino busco el id del ticker
        const dataTicker = getIdByTicker(ticker);
        if (!dataTicker) {
          setErrorMessage("No se pudo encontrar el ticker solicitado");
          setInterval(() => {
            setErrorMessage("");
          }, 3000);
        } else {
          console.log(dataTicker);
          alert(
            `ID: ${dataTicker.ID} \nTipo: ${dataTicker.Tipo} \nDescripcion: ${dataTicker.Descripcion}`
          );
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
        <Button type="button" onClick={handleButton}>
          Buscar
        </Button>
      </FormWrapper>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  );
};

export default TickerFinder;
