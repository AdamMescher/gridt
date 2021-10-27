import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 3fr 50px;
  grid-template-rows: 100px 1fr 100px;
  .header-container {
    grid-area: 1 / 1 / 2 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .controls-container {
    grid-area: 2 / 2 / 3 / 3;
    border-right: 2px solid black;
    padding-right: 10px;
  }
  .content-container {
    grid-area: 2 / 3 / 3 / 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .footer-container {
    grid-area: 3 / 1 / 4 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .graph-container {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .stats-container {
    grid-area: 1 / 3 / 2 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
  }
`;

export default StyledApp;
