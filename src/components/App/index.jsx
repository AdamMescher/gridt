import * as React from 'react';
// import { useQuery, gql } from '@apollo/client';
import Select from 'react-select';
import Page from '../Page';
import GlobalStyle from '../GlobalStyle';
import StyledApp from './styled';
import Autocomplete from '../Autocomplete';

const genderOptions = [
  { value: 'f', label: 'Female' },
  { value: 'm', label: 'Male' },
];
const raceOptions = [
  { value: 'am', label: 'American Indian / Alaskan Native' },
  { value: 'bl', label: 'Black' },
  { value: 'hi', label: 'Hispanic' },
  { value: 'pi', label: 'Pacific Islander' },
  { value: 'tr', label: 'Two or More Races' },
  { value: 'wh', label: 'White' },
];
const disabilityOptions = [
  { value: 'aut', label: 'Autism' },
  { value: 'dd', label: 'Deafness' },
  { value: 'db', label: 'Deaf-Blindness' },
  { value: 'hi', label: 'Hearing Impairment' },
  { value: 'md', label: 'multiple disabilities' },
  { value: 'mr', label: 'mr' },
  { value: 'oi', label: 'orthopedic impairment' },
  { value: 'ohi', label: 'other health impairment' },
  { value: 'sld', label: 'specific learning disability' },
  { value: 'sli', label: 'speech or language impairment' },
  { value: 'emn', label: 'emotional disturbance' },
  { value: 'tbi', label: 'traumatic brain injury' },
];

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <Page>
      <h3>Gender</h3>
      <Select options={genderOptions} isClearable />
      <h3>Race</h3>
      <Select options={raceOptions} isClearable />
      <h3>Disability</h3>
      <Select options={disabilityOptions} isClearable />
      <h3>School Name</h3>
      <Autocomplete />
    </Page>
  </StyledApp>
);

export default App;
