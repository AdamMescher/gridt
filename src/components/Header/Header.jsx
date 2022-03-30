import * as React from 'react';
import styled from 'styled-components';
import Meta from '../Meta';
import Title from '../Title';
import Spacer from '../Spacer';

const Header = () => (
  <StyledHeader>
    <Meta />
    <Title level={1}>
      Gender and Race Intersectional Disproportionality-Tool
    </Title>
    <Spacer size={4} />
    <Title level={2}>(GRID-T)</Title>
  </StyledHeader>
);

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export default Header;
