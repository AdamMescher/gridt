import * as React from 'react';
import StyledHeader from './styled';
import Meta from '../Meta';

const Header = () => (
  <StyledHeader>
    <Meta />
    <h1>
      <a href="#">GRID-T</a>
    </h1>
  </StyledHeader>
);

export default Header;
