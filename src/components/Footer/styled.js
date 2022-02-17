import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 20px;
  padding-bottom: 10px;
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
