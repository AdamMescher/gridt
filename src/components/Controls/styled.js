import styled from 'styled-components';

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h3 {
    margin-top: 35px;
    margin-bottom: 6px;
  }
  .controls-container {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1280px) {
    padding-top: 15px;
    padding-left: 35px;
    padding-right: 35px;
    .select,
    .radio {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 0.8rem;
      margin-top: 10px;
    }
  }
`;

export default StyledControls;
