import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  .content-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .select-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .select {
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    width: 30%;
  }
  .autocomplete-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .autocomplete-container input {
    border: 2px solid blue;
    width: 500px;
  }
  .graph-container {
    width: 100%;
  }
  h3 {
    margin-top: 2rem;
  }
`;

export default StyledApp;
