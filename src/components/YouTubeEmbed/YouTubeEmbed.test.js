import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import YouTubeEmbed from './index';

describe('YouTubeEmbed Component', () => {
  it('should render without errors', () => {
    const id = 'AEkaA-aZkYc';
    render(<YouTubeEmbed id={id} />);
    expect(screen.queryByTestId('youtube-embed-' + id)).toBeInTheDocument();
  });
});
