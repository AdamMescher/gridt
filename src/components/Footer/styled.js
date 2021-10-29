import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 5vh;
  @media (max-width: 1280px) {
    padding-top: 15px;
    font-size: 0.75rem;
    text-align: center;
  }
  @media (max-width: 550px) {
    font-size: 0.6rem;
  }
`;

export default StyledFooter;
