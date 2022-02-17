import styled from 'styled-components';

const StyledControls = styled.div`
  display: flex;
  text-align: left;
  .controls-container {
    display: flex;
    flex-direction: column;
  }
  .grd-select-container {
    flex-grow: 1;
  }
  .school-select-container {
    flex-grow: 1;
    padding-left: 25px;
  }
  // react-select styling
  label {
    font-weight: 700;
    display: inline-block;
    align-self: flex-start;
    margin-top: 6px;
    margin-bottom: 2px;
    text-align: left;
  }
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
  }
`;

export default StyledControls;
