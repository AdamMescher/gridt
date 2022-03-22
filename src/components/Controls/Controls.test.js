import * as React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../ApolloClient';
import Controls from './index';
import selectOptions from '../../utils/selectOptions';

describe('Controls Component', () => {
  const setRace = jest.fn((value) => value);
  const setGender = jest.fn((value) => value);
  const setDisability = jest.fn((value) => value);
  const setSelectedSchool = jest.fn((value) => value);
  const setComparison = jest.fn((value) => value);
  const setGraphTitle = jest.fn((value) => value);
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
        />
      </ApolloProvider>,
    );
  });
  it('should be able to select a gender from expected options', () => {
    const expectedOptions = selectOptions.genderOptions.map(
      (gender) => gender.label,
    );
    const { queryByLabelText } = render(
      <ApolloProvider client={client}>
        <Controls
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
        />
      </ApolloProvider>,
    );
    expectedOptions.forEach((option) => {
      fireEvent.change(queryByLabelText('Select Gender'), { value: option });
    });
  });
  it('should be able to select a race from expected options when comparison is set to "wh"', () => {
    const expectedOptions = selectOptions.raceOptionsWhiteComparison.map(
      (race) => race.label,
    );
    const { queryByLabelText } = render(
      <ApolloProvider client={client}>
        <Controls
          comparison={'wh'}
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
        />
      </ApolloProvider>,
    );
    expectedOptions.forEach((option) => {
      fireEvent.change(queryByLabelText('Select Race'), { value: option });
    });
  });
  it('should be able to select a race from expected options when comparison is set to "pop"', () => {
    const expectedOptions = selectOptions.raceOptions.map((race) => race.label);
    const { queryByLabelText } = render(
      <ApolloProvider client={client}>
        <Controls
          comparison={'pop'}
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
        />
      </ApolloProvider>,
    );
    expectedOptions.forEach((option) => {
      fireEvent.change(queryByLabelText('Select Race'), { value: option });
    });
  });
  it('should be able to select a disability from expected options', () => {
    const expectedOptions = selectOptions.disabilityOptions.map(
      (disability) => disability.label,
    );
    const { queryByLabelText } = render(
      <ApolloProvider client={client}>
        <Controls
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
        />
      </ApolloProvider>,
    );
    expectedOptions.forEach((option) => {
      fireEvent.change(queryByLabelText('Select Disability'), {
        value: option,
      });
    });
  });
});
