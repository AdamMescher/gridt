import Select from 'react-select';
import StyledControls from './styled.js';
import AsyncSelectInput from '../AsyncSelectInput';
import selectOptions from '../../utils/selectOptions.js';
const Controls = ({
  race,
  gender,
  setRace,
  setGender,
  setSelectedSchool,
  setComparison,
  setGraphTitle,
}) => {
  return (
    <StyledControls>
      <h3>Select Gender</h3>
      <Select
        isClearable
        options={selectOptions.genderOptions}
        onChange={(option) => {
          setGender(option);
          if (!option) {
            setGraphTitle(null);
          }
        }}
      />
      <h3>Select Race</h3>
      <Select
        isClearable
        options={selectOptions.raceOptions}
        onChange={(option) => {
          setRace(option);
          if (!option) {
            setGraphTitle(null);
          }
        }}
      />
      <h3>Search School By Name</h3>
      <AsyncSelectInput setSelectedSchool={setSelectedSchool} />
      <h3>Comparison</h3>
      <div
        className="radio-container"
        onChange={(event) => setComparison(event.target.value)}
      >
        <input type="radio" value="pop" name="comparison" defaultChecked />{' '}
        Rest of Population
        <input type="radio" value="wh" name="comparison" /> White
      </div>
    </StyledControls>
  );
};

export default Controls;