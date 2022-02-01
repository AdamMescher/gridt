import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 3fr 50px;
  grid-template-rows: 75px 150px 3fr 50px;
  .header-container {
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }
  .description-container {
    border: 2px solid white;
    grid-area: 2 / 2 / 3 / 4;
    z-index: 2;
  }
  .controls-container {
    grid-area: 3 / 2 / 4 / 3;
    border-right: 2px solid black;
    padding-right: 25px;
  }
  .content-container {
    grid-area: 3 / 3 / 4 / 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    background: aliceblue;
  }
  .footer-container {
    grid-area: 4 / 1 / 5 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .graph-container {
    grid-area: 1 / 1 / 5 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
  }
  .stats-container {
    grid-area: 1 / 3 / 4 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    font-size: 0.8rem;
  }
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    .controls-container {
      padding: 0;
    }
    .content-container {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .stats-container {
      padding: 0;
    }
  }
`;

export default StyledApp;
