import * as React from 'react';
import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import '@testing-library/jest-dom';
import Selection from '../Selection';

describe('Selection', () => {
  it('renders without errors', () => {
    render(<Selection name="frank" label="label maker" />);
    expect(screen.queryByLabelText('label maker')).toBeInTheDocument();
  });
  it('should not render a label if neither name or label prop are provided', () => {
    render(<Selection />);
    expect(screen.queryByText('label')).not.toBeInTheDocument();
  });
  it('should not render a label if only name prop is provided', () => {
    render(<Selection name="frank" />);
    expect(screen.queryByText('frank')).not.toBeInTheDocument();
  });
  it('should render a label if only the label prop is provided', () => {
    render(<Selection label="Sony Music Entertainment" />);
    expect(screen.queryByText('Sony Music Entertainment')).toBeInTheDocument();
  });
  it('should render with expected options', async () => {
    const genderOptions = [
      { value: 'F', label: 'Female' },
      { value: 'M', label: 'Male' },
    ];
    render(
      <form data-testid="selection-form">
        <Selection
          name="gender"
          label="Select Gender"
          options={genderOptions}
        />
      </form>,
    );
    expect(screen.queryByTestId('selection-form')).toHaveFormValues({
      gender: '',
    });
    await selectEvent.select(screen.queryByLabelText('Select Gender'), 'Male');
    expect(screen.queryByTestId('selection-form')).toHaveFormValues({
      gender: 'M',
    });
  });
});
