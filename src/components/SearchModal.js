import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  padding: 1rem;
`;

const Input = styled.input`
  height: 1.4rem;
  font-size: 1rem;
  border-radius: 0.2rem;

  &::placeholder {
    color: #aaa69d;
  }
`;

const SearchModal = () => {
  const [market, setMarket] = useState({ value: "bcba" });
  const [ticker, setTicker] = useState("");

  const handleChange = (e) => {
    setMarket({ value: e.target.value });
  };

  const handleInput = (e) => {
    setTicker(e.target.value);
  };

  return (
    <Wrapper>
      <Form>
        <P>Ingresá el Ticker</P>
        <Input
          placeholder="Ticker"
          type="text"
          value={ticker}
          onChange={handleInput}
        />
        <P>Seleccioná Mercado</P>
        <select value={market} onChange={handleChange}>
          <option value="bcba">BCBA</option>
          <option value="nasdaq">NASDAQ</option>
          <option value="nyse">NYSE</option>
          <option value="amex">AMEX</option>
          <option value="bcs">BCS</option>
          <option value="rofx">ROFX</option>
        </select>
        <a
          href={`https://www.invertironline.com/api/cotizaciones/idtitulo?simbolo=ypfd&mercado=bcba`}
          target="blank"
        >
          Buscar
        </a>
      </Form>
    </Wrapper>
  );
};

export default SearchModal;
