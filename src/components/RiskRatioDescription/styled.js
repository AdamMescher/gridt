import styled from 'styled-components';

const StyledRiskRatioDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  p {
    align-self: flex-start;
    width: 30%;
    font-size: 16px;
    margin-right: 100px;
    line-height: 1.5;
  }
  .bold {
    font-weight: 700;
  }
  .word {
    padding: 2px 5px;
    background: #dce9fe;
    color: #2463eb;
  }
  .word:hover {
    cursor: pointer;
  }
  .definition {
    background: #334155;
    color: white;
    padding: 3px 8px;
  }
`;

export default StyledRiskRatioDescription;
