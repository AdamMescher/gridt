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
    border-radius: 4px;
  }
  .video {
    margin-top: '20px';
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
  .citation {
    text-indent: -36px;
    padding-left: 36px;
    white-space: pre-line;
  }
`;

export default StyledModalContent;
