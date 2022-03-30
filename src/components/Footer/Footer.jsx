import * as React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Container>
    <Copy>
      <Bold>Suggested citation</Bold>: Ford, A.J. (2021). Gender and Race
      Intersectional Disproportionality-Tool. grid-t.com
    </Copy>
  </Container>
);

const Container = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Copy = styled.p``;
const Bold = styled.span`
  font-weight: bold;
`;

export default Footer;
