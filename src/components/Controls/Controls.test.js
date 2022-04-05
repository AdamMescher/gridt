import * as React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import selectEvent from 'react-select-event';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../ApolloClient';
import Controls from './Controls';

describe('Controls Component', () => {
  const setRace = jest.fn((value) => value);
  const setGender = jest.fn((value) => value);
  const setDisability = jest.fn((value) => value);
  const setSelectedSchool = jest.fn((value) => value);
  const setComparison = jest.fn((value) => value);
  const setGraphTitle = jest.fn((value) => value);
  const setSchoolState = jest.fn((value) => value);
  it('should render without errors', () => {
    render(
      <ApolloProvider client={client}>
        <Controls
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          setSchoolState={setSchoolState}
        />
      </ApolloProvider>,
    );
    expect(screen.queryByTestId('controls-form')).toBeInTheDocument();
    expect(screen.queryByLabelText('Select Gender')).toBeInTheDocument();
    expect(screen.queryByLabelText('Select Race')).toBeInTheDocument();
    expect(screen.queryByLabelText('Select Disability')).toBeInTheDocument();
    expect(
      screen.queryByLabelText('Select School by Name'),
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText('Filter Schools by State'),
    ).toBeInTheDocument();
    expect(screen.queryByLabelText('Rest of Population')).toBeInTheDocument();
    expect(screen.queryByLabelText('White Population')).toBeInTheDocument();
  });
  it('should be able to select a gender from expected options', async () => {
    const { queryByLabelText, queryByTestId } = render(
      <ApolloProvider client={client}>
        <Controls
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          setSchoolState={setSchoolState}
        />
      </ApolloProvider>,
    );
    expect(queryByTestId('controls-form')).toHaveFormValues({ gender: '' });
    await selectEvent.select(queryByLabelText('Select Gender'), 'Male');
    expect(queryByTestId('controls-form')).toHaveFormValues({ gender: 'M' });
    await selectEvent.clearAll(queryByLabelText('Select Gender'));
    expect(queryByTestId('controls-form')).toHaveFormValues({ gender: '' });
  });
  it('should be able to select a race from expected options when comparison is set to "pop"', async () => {
    const comparison = 'pop';
    const { queryByLabelText, queryByTestId } = render(
      <ApolloProvider client={client}>
        <Controls
          comparison={comparison}
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          setSchoolState={setSchoolState}
        />
      </ApolloProvider>,
    );
    expect(queryByTestId('controls-form')).toHaveFormValues({ race: '' });
    await selectEvent.select(queryByLabelText('Select Race'), 'White');
    expect(queryByTestId('controls-form')).toHaveFormValues({
      race: 'WH',
    });
    await selectEvent.clearAll(queryByLabelText('Select Race'));
    expect(queryByTestId('controls-form')).toHaveFormValues({ race: '' });
  });
  it('should be able to select a race from expected options when comparison', async () => {
    render(
      <ApolloProvider client={client}>
        <Controls
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          setSchoolState={setSchoolState}
        />
      </ApolloProvider>,
    );
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      gender: '',
    });
    await selectEvent.select(
      screen.queryByLabelText('Select Disability'),
      'Autism',
    );
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      disability: 'AUT',
    });
    await selectEvent.clearAll(screen.queryByLabelText('Select Disability'));
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      disability: '',
    });
  });
  it('should update race options to not include "White" when comparison is set to "White Population', () => {
    render(
      <ApolloProvider client={client}>
        <Controls
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          setSchoolState={setSchoolState}
        />
      </ApolloProvider>,
    );
    expect(screen.queryByLabelText('White Population')).toBeInTheDocument();
    expect(screen.queryByLabelText('Rest of Population')).toBeInTheDocument();
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      comparison: 'pop',
    });
    fireEvent.click(screen.queryByLabelText('White Population'));
    expect(screen.queryByLabelText('White Population')).toBeChecked();
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      comparison: 'wh',
    });
    fireEvent.click(screen.queryByLabelText('Rest of Population'));
    expect(screen.queryByLabelText('Rest of Population')).toBeChecked();
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      comparison: 'pop',
    });
  });
  it('should be able to select a race from expected options when comparison is set to "White Population"', async () => {
    const { queryByText, queryByLabelText, queryByTestId } = render(
      <ApolloProvider client={client}>
        <Controls
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          setSchoolState={setSchoolState}
        />
      </ApolloProvider>,
    );
    expect(queryByTestId('controls-form')).toHaveFormValues({ race: '' });
    fireEvent.click(screen.queryByLabelText('White Population'));
    expect(screen.queryByLabelText('White Population')).toBeChecked();
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      comparison: 'wh',
    });
    expect(queryByText('White')).not.toBeInTheDocument();
    await selectEvent.select(queryByLabelText('Select Race'), 'Hispanic');
    expect(queryByTestId('controls-form')).toHaveFormValues({ race: 'HI' });
    await selectEvent.clearAll(queryByLabelText('Select Race'));
    expect(queryByTestId('controls-form')).toHaveFormValues({ race: '' });
  });
  it('should be able to filter school search by name with state selection', async () => {
    render(
      <ApolloProvider client={client}>
        <Controls
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          setSchoolState={setSchoolState}
        />
      </ApolloProvider>,
    );
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      state: '',
    });
    await selectEvent.select(
      screen.queryByLabelText('Filter Schools by State'),
      'COLORADO',
    );
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      state: 'CO',
    });
    await selectEvent.clearAll(
      screen.queryByLabelText('Filter Schools by State'),
    );
    expect(screen.queryByTestId('controls-form')).toHaveFormValues({
      state: '',
    });
  });
});
