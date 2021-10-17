import * as React from 'react';
import AsyncSelectInput from '../AsyncSelectInput';
import GlobalStyle from '../GlobalStyle';
import Page from '../Page';
import Selection from '../Selection';
import Histogram from '../Histogram';
import StyledApp from './styled';
import selectOptions from '../../utils/selectOptions';

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
              <Selection
                options={selectOptions.genderOptions}
                onChange={setGender}
              />
            </div>
            <div className="select">
              <h3>Race</h3>
              <Selection
                options={selectOptions.raceOptions}
                onChange={setRace}
              />
            </div>
            <div className="select">
              <h3>Disability</h3>
              <Selection
                options={selectOptions.disabilityOptions}
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
              disability={disability}
            />
          </div>
        </div>
      </Page>
    </StyledApp>
  );
};

export default App;
