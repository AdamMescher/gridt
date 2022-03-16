import * as React from 'react';
import styled from 'styled-components';

const Title = ({ level, align, color, size, children, ...rest }) => {
  return (
    <StyledTitle
      as={level ? `h${level}` : 'h1'}
      level={level}
      color={color}
      align={align}
      size={size}
      {...rest}
    >
      {children}
    </StyledTitle>
  );
};

const StyledTitle = styled.span`
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align || 'inherit'};
  font-size: ${({ size }) => (size ? size : null)};
`;

export default Title;
