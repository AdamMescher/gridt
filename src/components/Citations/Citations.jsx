import * as React from 'react';
import styled from 'styled-components';

const Citations = ({ children, ...rest }) => (
  <StyledList {...rest}>{children}</StyledList>
);

const Item = ({ children, ...rest }) => (
  <ListItem {...rest}>{children}</ListItem>
);

const Citation = ({ children, ...rest }) => (
  <StyledCitation {...rest}>{children}</StyledCitation>
);

const StyledList = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;
`;
const ListItem = styled.li`
  margin-top: 6px;
`;
const StyledCitation = styled.cite`
  font-style: normal;
`;

Citations.Item = Item;
Citations.Citation = Citation;

export default Citations;
