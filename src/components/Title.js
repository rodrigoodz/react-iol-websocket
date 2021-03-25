import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  padding-top: 1.2rem;
  color: #bdc3c7;
`;

const Title = ({ text }) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default Title;
