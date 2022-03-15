import * as React from 'react';
import styled from 'styled-components';

const Title = ({ align, color, children, ...rest }) => (
  <Base color={color} align={align} {...rest}>
    {children}
  </Base>
);
const H1 = ({ children, ...rest }) => (
  <StyledH1 as={'h1'} {...rest}>
    {children}
  </StyledH1>
);
const H2 = ({ children, ...rest }) => (
  <StyledH2 as={'h2'} {...rest}>
    {children}
  </StyledH2>
);
const H3 = ({ children, ...rest }) => (
  <StyledH3 as={'h3'} {...rest}>
    {children}
  </StyledH3>
);
const H4 = ({ children, ...rest }) => (
  <StyledH4 as={'h4'} {...rest}>
    {children}
  </StyledH4>
);
const H5 = ({ children, ...rest }) => (
  <StyledH5 as={'h5'} {...rest}>
    {children}
  </StyledH5>
);
const H6 = ({ children, ...rest }) => (
  <StyledH6 as={'h6'} {...rest}>
    {children}
  </StyledH6>
);

const Base = styled.span`
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align || 'inherit'};
`;

const StyledH1 = styled(Base)``;
const StyledH2 = styled(Base)``;
const StyledH3 = styled(Base)``;
const StyledH4 = styled(Base)``;
const StyledH5 = styled(Base)``;
const StyledH6 = styled(Base)``;

Title.H1 = H1;
Title.H2 = H2;
Title.H3 = H3;
Title.H4 = H4;
Title.H5 = H5;
Title.H6 = H6;

export default Title;
