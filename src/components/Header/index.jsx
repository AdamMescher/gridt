import * as React from 'react';
import StyledHeader from './styled';
import Meta from '../Meta';
import Nav from '../Nav';

const Header = () => (
  <StyledHeader>
    <Meta />
    <h1>
      <a href="#">GRID-T</a>
    </h1>
    <Nav />
  </StyledHeader>
);

export default Header;
