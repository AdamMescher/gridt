import React from 'react';
import StyledYouTubeEmbed from './styled.js';

const YoutubeEmbed = ({ id }) => (
  <StyledYouTubeEmbed className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </StyledYouTubeEmbed>
);

export default YoutubeEmbed;
