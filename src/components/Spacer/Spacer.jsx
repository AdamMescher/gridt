import * as React from 'react';
import styled from 'styled-components';

const getHeight = ({ axis, size }) => (axis === 'horizontal' ? 1 : size);
const getWidth = ({ axis, size }) => (axis === 'vertical' ? 1 : size);

const Spacer = ({ children, ...rest }) => (
  <StyledSpacer aria-hidden="true" data-testid="spacer" {...rest}>
    {children}
  </StyledSpacer>
);

const StyledSpacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  max-height: ${getHeight}px;
`;

export default Spacer;
