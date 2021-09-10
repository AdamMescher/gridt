import styled from 'styled-components';

const StyledSimpleSearch = styled.div`
  ul {
    list-style: none;
  }
  li {
    padding: 20px;
    border: 1px solid gray;
  }
  li:hover {
    cursor: pointer;
    background: gray;
    color: white;
  }
`;

export default StyledSimpleSearch;
