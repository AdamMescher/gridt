import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 5vh;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  @media (max-width: 1280px) {
    padding-top: 15px;
    font-size: 0.8rem;
  }
`;

export default StyledHeader;
