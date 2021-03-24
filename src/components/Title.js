import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding-top: 1.2rem;
  color: #227093;
`;

const Title = ({ text }) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default Title;
