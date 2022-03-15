import * as React from 'react';
import styled from 'styled-components';
import Meta from '../Meta';
import Title from '../Title';

const Header = () => (
  <StyledHeader>
    <Meta />
    <Title.H1>
      Gender and Race Intersectional Disproportionality-Tool
    </Title.H1>
    <Title.H2>(GRID-T)</Title.H2>
  </StyledHeader>
);

const StyledHeader = styled.header`
  margin-top: 20px;
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export default Header;
