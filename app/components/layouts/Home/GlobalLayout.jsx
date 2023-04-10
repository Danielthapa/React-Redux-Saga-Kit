import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
`;

const GlobalLayout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default GlobalLayout;
