import styled from 'styled-components';

const StyledControls = styled.div`
  display: flex;
  width: 100%:
  h3 {
    margin-top: 35px;
    margin-bottom: 6px;
  }

  label {
    font-weight: 700;
  }

  .controls-container {
    display: flex;
    flex-direction: column;
  }

  .grd-select-container {
    flex-grow: 1;
  }

  .school-select-container {}

  .radio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .radio {
    align-self: flex-start;
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
