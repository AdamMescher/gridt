import * as React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Spacer from '../Spacer';

const Selection = ({ name, label, options, onChange, styles, isRequired }) => (
  <Wrapper htmlFor={name || label} data-testid={`${name || label}-select-form`}>
    {label ? (
      <>
        <SelectLabel htmlFor={name || label}>{label}</SelectLabel>
        <Spacer size={2} />
      </>
    ) : null}
    <Select
      required={isRequired}
      styles={styles}
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
  text-align: left;
`;

export default Selection;
