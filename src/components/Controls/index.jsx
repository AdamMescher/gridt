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
  setRace,
  setGender,
  setSelectedSchool,
  setComparison,
  setGraphTitle,
}) => {
  return (
    <StyledControls>
      <div className="grd-select-container">
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
          options={selectOptions.raceOptions}
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
            setRace(option);
            if (!option) {
              setGraphTitle(null);
            }
          }}
        />
      </div>
      <div className="school-select-container" style={{ flexGrow: 1 }}>
        <label>Search School By Name</label>
        <AsyncSelectInput
          styles={customStyles}
          setSelectedSchool={setSelectedSchool}
        />
      </div>
      <div
        style={{ flexGrow: 1 }}
        className="radio-container"
        onChange={(event) => setComparison(event.target.value)}
      >
        <h3>Comparison</h3>
        <div className="radio">
          <input type="radio" value="pop" name="comparison" defaultChecked />{' '}
          Rest of Population
        </div>
        <div className="radio">
          <input type="radio" value="wh" name="comparison" /> White Population
        </div>
      </div>
    </StyledControls>
  );
};

export default Controls;
