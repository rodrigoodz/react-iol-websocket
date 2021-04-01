import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em;
  border: 1px solid #f3f3f3;
  border-radius: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Link = styled.a`
  font-size: 0.9rem;
  background-color: #aaa69d;
  text-decoration: none;
  color: black;
  padding: 0.8rem;
  border-radius: 0.2rem;
  margin-top: 2rem;

  &:hover {
    background-color: #ecf0f1;
  }
`;

const Info = styled.p`
  color: rgba(255, 0, 0, 0.7);
  margin-top: 2rem;
  font-size: 0.6rem;
  width: 30%;
  text-align: center;
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
        <>
          <Link
            href={`https://www.invertironline.com/api/cotizaciones/idtitulo?simbolo=${ticker}&mercado=${market.value}`}
            target="blank"
            disabled
          >
            Buscar
          </Link>
          <Info>
            Si el ID que arroja la busqueda es 0, hay un error en los datos
            ingresados o el ticker no existe en IOL
          </Info>
        </>
      </Form>
    </Wrapper>
  );
};

export default SearchModal;
