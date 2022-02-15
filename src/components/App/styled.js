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

  height: 100vh;
  width: 100%;
  padding-left: 20px;

  ol {
    list-style: number;
    padding-left: 20px;
  }
  ul li {
    list-style: none;
    padding-left: 25px;
  }

  .generate-graph {
    border: none;
    background: #075985;
    color: #f1f5f9;
    border-radius: 4px;
  }

  .generate-graph:hover {
    cursor: pointer;
    background: #0ea5e9;
  }

  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .steps {
    width: 60%;
  }

  .steps-subtitle {
    margin-top: 6px;
  }

  .steps li {
    margin-top: 6px;
  }

  .steps-definitions li {
    margin-top: 8px;
  }

  .steps-container .button {
    margin-top: 8px;
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
    display: grid;
    grid-area: 4 / 2 / 5 / 4;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding-top: 20px;
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

  .highlight {
    font-size: 18px;
  }

  .definition {
    display: inline-block;
    martin-top: 40px;
  }

  .risk {
    padding: 2px 4px 2px 4px;
    background: var(--emerald);
    color: var(--dark-emerald);
  }

  .outcome {
    padding: 2px 4px 2px 4px;
    background: var(--orange);
    color: var(--dark-orange);
  }

  .overrepresentation {
    padding: 2px 4px 2px 4px;
    background: var(--fuchsia);
    color: var(--dark-fuchsia);
  }

  .underrepresentation {
    padding: 2px 4px 2px 4px;
    background: var(--sky);
    color: var(--dark-sky);
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
