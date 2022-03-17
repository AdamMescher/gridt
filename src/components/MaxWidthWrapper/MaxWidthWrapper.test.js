import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MaxWidthWrapper from './index';

describe('MaxWidthWrapper Component', () => {
  it('render without errors', () => {
    render(<MaxWidthWrapper />);
  });
});
