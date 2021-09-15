/* eslint-disable no-unused-vars */
import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import Select from 'react-select';
import AsyncSelectInput from '../AsyncSelectInput';
import GlobalStyle from '../GlobalStyle';
import Page from '../Page';
import Histogram from '../Histogram';
import StyledApp from './styled';

const genderOptions = [
  { value: 'F', label: 'Female' },
  { value: 'M', label: 'Male' },
];
const raceOptions = [
  { value: 'AM', label: 'American Indian / Alaskan Native' },
  { value: 'AS', label: 'Asian' },
  { value: 'BL', label: 'Black' },
  { value: 'HI', label: 'Hispanic' },
  { value: 'HP', label: 'Pacific Islander' },
  { value: 'TR', label: 'Two or More Races' },
  { value: 'WH', label: 'White' },
];
const disabilityOptions = [
  { value: 'AUT', label: 'Autism' },
  { value: 'DD', label: 'Deafness' },
  { value: 'DB', label: 'Deaf-Blindness' },
  { value: 'HI', label: 'Hearing Impairment' },
  { value: 'MD', label: 'multiple disabilities' },
  { value: 'MR', label: 'mr' },
  { value: 'OI', label: 'orthopedic impairment' },
  { value: 'OHI', label: 'other health impairment' },
  { value: 'SLD', label: 'specific learning disability' },
  { value: 'SLI', label: 'speech or language impairment' },
  { value: 'EMN', label: 'emotional disturbance' },
  { value: 'TBI', label: 'traumatic brain injury' },
];

const App = () => {
  const [gender, setGender] = React.useState('');
  const [race, setRace] = React.useState('');
  const [disability, setDisability] = React.useState('');
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  return (
    <StyledApp>
      <GlobalStyle />
      <Page>
        <div className="content-container">
          <div className="select-container">
            <div className="select">
              <h3>Gender</h3>
              <Select
                options={genderOptions}
                isClearable
                onChange={setGender}
              />
            </div>
            <div className="select">
              <h3>Race</h3>
              <Select options={raceOptions} isClearable onChange={setRace} />
            </div>
            <div className="select">
              <h3>Disability</h3>
              <Select
                options={disabilityOptions}
                isClearable
                onChange={setDisability}
              />
            </div>
          </div>
          <div className="autocomplete-container">
            <h3>Search School By Name</h3>
            <AsyncSelectInput setSelectedSchool={setSelectedSchool} />
          </div>
          <div className="graph-container">
            <Histogram
              selectedSchool={selectedSchool}
              race={race}
              gender={gender}
            />
          </div>
        </div>
      </Page>
    </StyledApp>
  );
};

export default App;
