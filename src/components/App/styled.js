import styled from 'styled-components';

const StyledApp = styled.div`
  --fuchsia: #f5d0fe;
  --dark-fuchsia: #701a75;
  --emerald: #6ee7b7;
  --dark-emerald: #064e3b;
  --sky: #bae6fd;
  --dark-sky: #0c4a6e;
  --orange: #fdba74;
  --dark-orange: #7c2d12;
  --rose: #fda4af;
  --dark-rose: #881337;

  height: 100vh;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .description-container {
    padding-top: 20px;
  }

  .controls-container {
    padding-top: 20px;
  }

  .content-container {
    padding-top: 20px;
  }

  .legend-container {
    display: flex;
    flex-direction: column;
  }

  .graph-container {
    display: flex;
    justify-content: center;
  }

  .stats-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-container {
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
