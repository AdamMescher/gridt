import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px blue;
  }
  to {
    box-shadow: 0 0 10px 1px blue;
  }
`;

const StyledAutocomplete = styled.div`
  .autocomplete-container {
    display: flex;
    flex-direction: column;
  }
  input {
      width: 100%;
      padding: 10px;
      border: 0;
      font-size: 2rem;
      &.loading {
        animation: ${glow} 0.5s ease-in-out infinite alternate;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  li {
    border: 2px solid black;
  }
`;

export default StyledAutocomplete;
