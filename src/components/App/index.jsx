import * as React from 'react';
import Select from 'react-select';
import Page from '../Page';
import GlobalStyle from '../GlobalStyle';
import Histogram from '../Histogram';
import StyledApp from './styled';

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

const App = () => {
  const [gender, setGender] = React.useState('');
  const [race, setRace] = React.useState('');
  const [disability, setDisability] = React.useState('');
  return (
    <StyledApp>
      <GlobalStyle />
      <Page>
        <div class="content-container">
          <div class="select-container">
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
          <div class="autocomplete-container">
            <h3>Search School By Name</h3>
          </div>
          <div class="graph-container">
            <Histogram />
          </div>
        </div>
      </Page>
    </StyledApp>
  );
};

export default App;
