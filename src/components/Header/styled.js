import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 5vh;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
    font-size: 2em;
  }
  a:hover {
    color: gray;
  }
`;

export default StyledHeader;
