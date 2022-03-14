import styled from 'styled-components';

const StyledModalContent = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.5;
  h2,
  p,
  button {
    margin-top: 1rem;
    border-radius: 4px;
  }
  h4 {
    margin-top: 10px;
  }
  ul {
    list-style-type: none;
  }
  li {
    margin: 0;
  }
  li p {
    padding: 12px;
  }
  .video {
    margin-top: 20px;
  }
  .topright {
    position: absolute;
    margin-top: 0;
    padding: 15px;
    right: -2px;
    top: -2px;
    border-radius: 0;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export default StyledModalContent;
