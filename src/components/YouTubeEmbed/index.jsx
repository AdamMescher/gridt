import * as React from 'react';
import styled from 'styled-components';

const YoutubeEmbed = ({ id }) => (
  <Wrapper className="video-responsive">
    <IFrame
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 200px;
  aspect-ratio: 16/9;
`;
const IFrame = styled.iframe`
  height: 100%;
  width: 100%;
`;

export default YoutubeEmbed;
