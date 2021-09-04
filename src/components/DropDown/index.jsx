import * as React from 'react';
import StyledDropDown from './styled';
import DropDownItem from '../DropDownItem';

const DropDown = ({ items, label }) => (
  <StyledDropDown>
    {items.map((item) => (
      <DropDownItem item={item} label={label} />
    ))}
  </StyledDropDown>
);

export default DropDown;
