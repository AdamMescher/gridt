import styled from 'styled-components';

const StyledRiskRatioDescription = styled.div`
  --orange: #fdba74;
  --dark-orange: #7c2d12;
  font-size: 14px;
  margin-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  p {
    align-self: flex-start;
    margin-right: 100px;
    line-height: 1.5;
  }
  .outcome,
  .risk {
    border-radius: 4px;
  }
  .outcome {
    background: var(--orange);
    color: var(--dark-orange);
    padding: 3px 7px;
  }
  .risk {
    background: #6ee7b7;
    padding: 3px 7px;
  }
`;

export default StyledRiskRatioDescription;
