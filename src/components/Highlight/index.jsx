import * as React from 'react';
import StyledHighlight from './styled';

const Highlight = (props) => {
  return <StyledHighlight {...props}>{props.text}</StyledHighlight>;
};

export default Highlight;
