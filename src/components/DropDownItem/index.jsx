import * as React from 'react';
import StyledDropDownItem from './styled';

const DropDownItem = ({ item, label }) => (
  <StyledDropDownItem>
    <p>{item[label]}</p>
  </StyledDropDownItem>
);

export default DropDownItem;
