import styled from 'styled-components';

const StyledRiskRatioDescription = styled.div`
  --orange: #fdba74;
  --dark-orange: #7c2d12;
  font-size: 14px;
  margin-top: 12px;
  p {
    align-self: flex-start;
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
  .outcome {
    background: var(--orange);
    color: var(--dark-orange);
    padding: 2px 4px 2px 4px;
  }
  .risk {
    background: #6ee7b7;
    padding: 2px 4px 2px 4px;
  }
`;

export default StyledRiskRatioDescription;
