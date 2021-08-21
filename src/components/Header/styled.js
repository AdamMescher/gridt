import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  background: pink;
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: red;
  }
`;

export default StyledHeader;
