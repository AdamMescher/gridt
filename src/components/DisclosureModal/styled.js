import styled from 'styled-components';

const StyledModalContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin-left: 20%;
  line-height: 1.5;
  h2,
  p,
  button {
    margin-top: 1rem;
  }
  button {
    border: none;
    padding: 8px 15px;
    background: #075985;
    color: #f1f5f9;
  }
  button:hover {
    cursor: pointer;
    background: #0ea5e9;
  }
`;

export default StyledModalContent;
