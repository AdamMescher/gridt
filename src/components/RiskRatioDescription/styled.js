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
