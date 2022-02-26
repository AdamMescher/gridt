import * as React from 'react';
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
      <div className="school-select-container">
        <label>Search School By Name</label>
        <AsyncSelectInput
          styles={customStyles}
          setSelectedSchool={setSelectedSchool}
          gender={gender}
          race={race}
          disability={disability}
        />
        <div
          className="radio-container"
          onChange={(event) => setComparison(event.target.value)}
        >
          <details>
            <summary className="subtitle">Comparison</summary>
            <div>
              <div className="radio">
                <input
                  type="radio"
                  value="pop"
                  name="comparison"
                  id="rest-of-population"
                  defaultChecked
                />{' '}
                <label htmlFor="rest-of-population">Rest of Population</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value="wh"
                  name="comparison"
                  id="white-comparison"
                />{' '}
                <label htmlFor="white-comparison">White Population</label>
              </div>
            </div>
          </details>
        </div>
      </div>
    </StyledControls>
  );
};

export default Controls;
