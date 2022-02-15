import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  @media (max-width: 1280px) {
    text-align: center;
    padding-top: 15px;
    font-size: 0.8rem;
  }
  @media (max-width: 700px) {
    font-size: 0.6rem;
  }
  @media (max-width: 625px) {
    font-size: 0.55rem;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default StyledHeader;
