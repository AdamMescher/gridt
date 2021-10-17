import Select from 'react-select';
import styled from 'styled-components';

const StyledSelect = styled.div``;

const Selection = ({ options, onChange }) => (
  <StyledSelect>
    <Select options={options} isClearable onChange={onChange} />
  </StyledSelect>
);

export default Selection;
