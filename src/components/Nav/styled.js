import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 100%;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  li {
    margin-left: 10px;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: gray;
  }
`;

export default StyledNav;
