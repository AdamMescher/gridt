import styled from 'styled-components';

const StyledLink = styled.a`
  color: blue;
  text-decoration: none;
  :visited {
    color: orange;
  }
  :hover {
    color: pink;
    text-decoration: underline;
  }
  :active {
    color: yellow;
  }
`;

export default StyledLink;
