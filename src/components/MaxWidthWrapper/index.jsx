import * as React from 'react';
import styled from 'styled-components';

const MaxWidthWrapper = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

const Wrapper = styled.div`
  max-width: 1200px;
  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;
`;

export default MaxWidthWrapper;
