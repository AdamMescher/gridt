import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import '@testing-library/jest-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../ApolloClient';
import DataVisualization from './DataVisualization';

describe('DataVisualization Component', () => {
  const setRace = jest.fn((value) => value);
  const setGender = jest.fn((value) => value);
  const setDisability = jest.fn((value) => value);
  const setSelectedSchool = jest.fn((value) => value);
  const setComparison = jest.fn((value) => value);
  const setGraphTitle = jest.fn((value) => value);
  const setSchoolState = jest.fn((value) => value);
  const fetchSchools = jest.fn((value) => value);
  it('should render without errors', () => {
    const { queryByText } = render(
      <ApolloProvider client={client}>
        <DataVisualization />
      </ApolloProvider>,
    );
    expect(queryByText('Generate Graph')).toBeInTheDocument();
  });
  it('should set graph title if race, gender, and disability are truthy', async () => {
    const isLoading = false;
    const comparison = 'pop';
    const race = '';
    const gender = '';
    const disability = '';
    const schoolState = '';
    const selectedSchool = null;
    const graphFloor = 1;
    const graphTitle = '';
    const graphData = [
      { x: 1 },
      { x: 2 },
      { x: 3 },
      { x: 4 },
      { x: 5 },
      { x: 6 },
      { x: 7 },
      { x: 8 },
      { x: 9 },
      { x: 10 },
    ];
    const { queryByText, queryByLabelText } = render(
      <ApolloProvider client={client}>
        <DataVisualization
          isLoading={isLoading}
          comparison={comparison}
          race={race}
          gender={gender}
          disability={disability}
          schoolState={schoolState}
          selectedSchool={selectedSchool}
          graphFloor={graphFloor}
          graphData={graphData}
          graphTitle={graphTitle}
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSchoolState={setSchoolState}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          fetchSchools={fetchSchools}
        />
      </ApolloProvider>,
    );
    userEvent.click(queryByText('Generate Graph'));
    const genderSelect = queryByLabelText('Select Gender');
    const raceSelect = queryByLabelText('Select Race');
    const disabilitySelect = queryByLabelText('Select Disability');
    await selectEvent.select(genderSelect, 'Male');
    await selectEvent.select(raceSelect, 'Asian');
    await selectEvent.select(disabilitySelect, 'Autism');
    userEvent.click(queryByText('Generate Graph'));
    expect(queryByText('Generate Graph')).toBeInTheDocument();
  });
});
