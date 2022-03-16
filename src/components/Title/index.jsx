import * as React from 'react';
import styled from 'styled-components';

const Title = ({ level, align, color, size, children, ...rest }) => {
  let Component;
  switch (level) {
    case 1:
      Component = H1;
      break;
    case 2:
      Component = H2;
      break;
    case 3:
      Component = H3;
      break;
    case 4:
      Component = H4;
      break;
    case 5:
      Component = H5;
      break;
    case 6:
      Component = H6;
      break;
    default:
      Component = H1;
      break;
  }
  return (
    <Component level={level} color={color} align={align} {...rest}>
      {children}
    </Component>
  );
};
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
  font-size: ${({ size }) => (size ? size : null)};
`;

const StyledH1 = styled(Base)``;
const StyledH2 = styled(Base)``;
const StyledH3 = styled(Base)``;
const StyledH4 = styled(Base)``;
const StyledH5 = styled(Base)``;
const StyledH6 = styled(Base)``;

export default Title;
