import * as React from 'react';
import styled from 'styled-components';

const UnorderedList = ({ children, ...rest }) => (
  <List data-testid="unordered-list" {...rest}>
    {children}
  </List>
);

const List = ({ children, ...rest }) => (
  <StyledList {...rest}>{children}</StyledList>
);
const Item = ({ children, ...rest }) => (
  <StyledItem {...rest}>{children}</StyledItem>
);

const StyledList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;
const StyledItem = styled.li`
  margin-top: 4px;
`;

UnorderedList.List = List;
UnorderedList.Item = Item;

export default UnorderedList;
