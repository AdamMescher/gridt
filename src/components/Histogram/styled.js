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

  .chart {
    border: 2px solid blue;
    background: yellow;
  }

  .school-bar:hover {
    cursor: pointer;
  }
`;

export default StyledHistogram;
