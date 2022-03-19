import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DisclosureModal from './index';

describe('DisclosureModal component', () => {
  it('should render without errors', () => {
    const closeDisclosureModal = jest.fn();
    render(
      <div id="root" />,
      <DisclosureModal
        modalIsOpen={true}
        closeDisclosureModal={closeDisclosureModal}
      />,
    );
  });
  it('should not render if isOpen is false', () => {
    const closeDisclosureModal = jest.fn();
    render(
      <div id="root" />,
      <DisclosureModal
        modalIsOpen={false}
        closeDisclosureModal={closeDisclosureModal}
      />,
    );
  });
});
