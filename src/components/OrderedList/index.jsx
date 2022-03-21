import * as React from 'react';
import styled from 'styled-components';

const OrderedList = ({ children, ...rest }) => (
  <StyledList {...rest} data-testid="ordered-list">
    {children}
  </StyledList>
);

const Item = ({ children, ...rest }) => <StyledItem>{children}</StyledItem>;

const StyledList = styled.ol`
  padding-inline-start: 0;
  list-style: none;
  conunter-reset: section;
`;
const StyledItem = styled.li`
  counter-increment: steps;
  &::before {
    content: counter(steps);
    margin-right: 0.3rem;
    font-weight: bold;
  }
`;

OrderedList.Item = Item;

export default OrderedList;
