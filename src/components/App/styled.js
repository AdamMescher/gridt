import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 3fr 50px;
  grid-template-rows: 75px 1fr 1fr 3fr 50px;

  .header-container {
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description-container {
    padding-top: 20px;
    grid-area: 2 / 2 / 3 / 4;
  }

  .controls-container {
    padding-top: 20px;
    grid-area: 3 / 2 / 4 / 4;
  }

  .content-container {
    padding-top: 20px;
    grid-area: 4 / 2 / 5 / 4;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  .legend-container {
    grid-area: 1 / 1 / 5 / 2;
    display: flex;
    flex-direction: column;
  }

  .graph-container {
    grid-area: 1 / 2 / 5 / 3;
    display: flex;
    justify-content: center;
  }

  .stats-container {
    grid-area: 1 / 3 / 5 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-container {
    grid-area: 5 / 1 / 6 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
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
