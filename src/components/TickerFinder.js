import React, { useState } from "react";
import styled from "styled-components";
import isNumber from "../helpers/isNumber";
import Button from "./Button";
import Modal from "react-modal";
import SearchModal from "./SearchModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [ticker, setTicker] = useState("");

  const handleAddButton = (e) => {
    e.preventDefault();
    if (ticker.length < 1) {
      setErrorMessage("Error! No hay nada ingresado");
      setInterval(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setErrorMessage("");

      if (isNumber(ticker)) {
        console.log("agregar id");
        // si es  numero lo agrego...
      } else {
        setErrorMessage("Error! Ingresá un ID");
        setInterval(() => {
          setErrorMessage("");
        }, 3000);
      }
    }
  };

  const handleSearchButton = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleInput = (e) => {
    setTicker(e.target.value);
  };

  return (
    <Container>
      <FormWrapper>
        <Input
          placeholder="Ingresá ID cotización"
          type="text"
          value={ticker}
          onChange={handleInput}
        />
        <Button
          text="Agregar"
          handleButton={handleAddButton}
          isDisabled={errorMessage.length === 0 ? false : true}
        />
        <Button
          text="Obtener ID de una cotización"
          handleButton={handleSearchButton}
          isDisabled={errorMessage.length === 0 ? false : true}
        />
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <SearchModal />
        </Modal>
      </FormWrapper>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  );
};

export default TickerFinder;
