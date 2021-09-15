import styled from 'styled-components';

const StyledHistogram = styled.div`
  display: flex;
  padding-top: 50px;
  height: 60vh;
  .all-buttons-container {
    width: 400px;
  }

  .two-button-container {
    margin-left: 10px;
    margin-top: 15px;
  }

  button {
    margin-left: 10px;
    width: 100px;
    padding: 10px 0 10px 0;
    border: 2px solid blue;
    background: white;
    color: blue;
  }

  button:hover {
    cursor: pointer;
    background: blue;
    color: white;
  }

  button:disabled {
    background: gray;
    border: black;
    color: darkgray;
  }

  .chart {
    border: 2px solid blue;
    background: yellow;
  }
`;

export default StyledHistogram;
