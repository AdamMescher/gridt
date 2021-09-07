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
    border-radius: 10px;
      padding: 10px;
      border: 0;
      font-size: 2rem;
      &.loading {
        animation: ${glow} 0.5s ease-in-out infinite alternate;
      }
    }
  }
  ul {
    position: absolute;
    width: 100%;
    z-index: 2;
    border: 1px solid var(--lightGrey);
    list-style: none;
    background: white;
  }
  li {
    display: flex;
    align-items: center;
    margin-top: 15px;
    border-bottom: 1px solid var(--lightGrey);
  }
  .highlighted {
    background: red;s
  }
`;

export default StyledAutocomplete;
