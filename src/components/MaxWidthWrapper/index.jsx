import * as React from 'react';
import styled from 'styled-components';

const MaxWidthWrapper = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

const Wrapper = styled.div`
  width: clamp(320px, 95%, 1280px);
  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export default MaxWidthWrapper;
