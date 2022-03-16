import * as React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Spacer from '../Spacer';

const Selection = ({ name, label, options, onChange }) => (
  <Wrapper>
    {label ? (
      <>
        <SelectLabel htmlFor={name || label}>{label}</SelectLabel>
        <Spacer size={2} />
      </>
    ) : null}
    <Select
      name={name}
      inputId={name}
      options={options}
      isClearable
      onChange={onChange}
    />
  </Wrapper>
);

const Wrapper = styled.div``;
const SelectLabel = styled.label`
  font-weight: 700;
  display: inline-block;
  align-self: flex-start;
  margin-top: 6px;
  text-align: left;
  @media (max-width: 800px) {
    margin-top: 8px;
  }
`;

export default Selection;
