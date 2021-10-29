import styled from 'styled-components';

const StyledHistogram = styled.div`
  display: flex;
  padding-top: 50px;
  height: 60vh;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 1280px) {
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 400px;
  }
`;

export default StyledHistogram;
