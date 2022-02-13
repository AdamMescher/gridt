import React from 'react';
import Select from 'react-select';
import StyledControls from './styled.js';
import AsyncSelectInput from '../AsyncSelectInput';
import selectOptions from '../../utils/selectOptions.js';

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    cursor: 'pointer',
  }),
  control: (styles) => ({
    ...styles,
    cursor: 'pointer',
  }),
};

const Controls = ({
  comparison,
  gender,
  race,
  disability,
  setRace,
  setGender,
  setDisability,
  setSelectedSchool,
  setComparison,
  setGraphTitle,
  fetchSchools,
}) => {
  return (
    <StyledControls>
      <div className="grd-select-container" style={{ paddingRight: '25px' }}>
        <label htmlFor="gender">Select Gender</label>
        <Select
          className="select"
          styles={customStyles}
          isClearable
          name="gender"
          inputId="gender"
          options={selectOptions.genderOptions}
          onChange={(option) => {
            setGender(option);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
        <label htmlFor="race">Select Race</label>
        <Select
          className="select"
          styles={customStyles}
          isClearable
          name="race"
          inputId="race"
          options={
            comparison === 'wh'
              ? selectOptions.raceOptionsWhiteComparison
              : selectOptions.raceOptions
          }
          onChange={(option) => {
            setRace(option);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
        <label htmlFor="disability">Select Disability</label>
        <Select
          className="select"
          styles={customStyles}
          isClearable
          name="disability"
          inputId="disability"
          options={selectOptions.disabilityOptions}
          onChange={(option) => {
            setDisability(option);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
      </div>
      <div
        className="school-select-container"
        style={{ flexGrow: 1, paddingLeft: '25px' }}
      >
        <label>Search School By Name</label>
        <AsyncSelectInput
          styles={customStyles}
          setSelectedSchool={setSelectedSchool}
          gender={gender}
          race={race}
          disability={disability}
        />
        <div
          style={{ flexGrow: 1 }}
          className="radio-container"
          onChange={(event) => setComparison(event.target.value)}
        >
          <h3 style={{ marginTop: '10px' }}>Comparison</h3>
          <div className="radio">
            <input type="radio" value="pop" name="comparison" defaultChecked />{' '}
            Rest of Population
          </div>
          <div className="radio">
            <input type="radio" value="wh" name="comparison" /> White Population
          </div>
        </div>
      </div>
      <button onClick={fetchSchools}>GENERATE GRAPH</button>
    </StyledControls>
  );
};

export default Controls;
