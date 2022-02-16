import styled from 'styled-components';

const StyledYouTubeEmbed = styled.div`
  z-index: 5;
  height: 200px;
  margin-top: 30px;
  aspect-ratio: 16/9;
  iframe {
    height: 100%;
    width: 100%;
  }
`;

export default StyledYouTubeEmbed;