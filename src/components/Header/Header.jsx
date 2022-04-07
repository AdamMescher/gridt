import * as React from 'react';
import styled from 'styled-components';
import Meta from '../Meta';

const Header = ({ children, ...rest }) => (
  <StyledHeader {...rest}>
    <Meta />
    {children}
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
