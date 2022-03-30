import * as React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  padding: 8px 15px;
  background: #075985;
  color: #f1f5f9;
  &:hover {
    cursor: pointer;
    background: #0ea5e9;
  }
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const Button = ({ children, ...rest }) => {
  return <BaseButton {...rest}>{children}</BaseButton>;
};

export default Button;
