import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DisclosureModal from './DisclosureModal';

describe('DisclosureModal component', () => {
  it('Should render without errors', () => {
    const { queryByText } = render(<DisclosureModal modalIsOpen={true} />);
    expect(
      queryByText(
        'Welcome to Gender and Race Intersectional Disproportionality-Tool',
      ),
    ).toBeInTheDocument();
  });
  it('Should not be rendered to the DOM if modalIsOpen is false', () => {
    const { queryByText } = render(<DisclosureModal modalIsOpen={false} />);
    expect(
      queryByText(
        'Welcome to Gender and Race Intersectional Disproportionality-Tool',
      ),
    ).not.toBeInTheDocument();
  });
});
