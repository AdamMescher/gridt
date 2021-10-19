/* eslint-disable */
import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import Select from 'react-select';
import GlobalStyle from '../GlobalStyle';
import AsyncSelectInput from '../AsyncSelectInput';
import Page from '../Page';
import Histogram from '../Histogram';
import Stats from '../Stats';
import StyledApp from './styled';
import selectOptions from '../../utils/selectOptions';
import queries from '../../utils/queries';

const App = () => {
  const [gender, setGender] = React.useState('');
  const [race, setRace] = React.useState('');
  const [disability, setDisability] = React.useState('');
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [graphData, setGraphData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [graphTitle, setGraphTitle] = React.useState('');
  const client = useApolloClient();
  const fetchSchools = async () => {
    setIsLoading(true);
    const query = queries[`SCHOOLS_${race.value}_${gender.value}_QUERY`];
    const { data } = await client.query({
      query,
      variables: {
        schoolsLimit: 50,
        schoolsFilter: {
          _operators: {
            [`RR_${race.value}_${gender.value}_POP`]: {
              gt: 0,
            },
          },
        },
      },
    });
    let key = Object.keys(data.schools[0])[0];
    return data ? data.schools.map((school) => ({ x: school[key] })) : [];
  };
  React.useEffect(async () => {
    if (gender && race && disability) {
      const newGraphTitle = `${race.label}_${gender.label}_${disability.label}`;
      if (newGraphTitle !== graphTitle) {
        setGraphTitle(`${race.label}_${gender.label}_${disability.label}`);
        const schools = await fetchSchools();
        setGraphData(schools);
        setIsLoading(false);
      }
    } else if (gender && race) {
      const newGraphTitle = `${race.label}_${gender.label}`;
      if (newGraphTitle !== graphTitle) {
        setGraphTitle(`${race.label}_${gender.label}`);
        const schools = await fetchSchools();
        setGraphData(schools);
        setIsLoading(false);
      }
    }
  });
  return (
    <StyledApp>
      <GlobalStyle />
      <Page>
        <div className="content-container">
          <div className="select-container">
            <div className="select">
              <h3>Gender</h3>
              <Select
                options={selectOptions.genderOptions}
                isClearable
                onChange={(option) => {
                  setGender(option);
                  if (!option) {
                    setGraphTitle(null);
                  }
                }}
              />
            </div>
            <div className="select">
              <h3>Race</h3>
              <Select
                options={selectOptions.raceOptions}
                isClearable
                onChange={(option) => {
                  setRace(option);
                  if (!option) {
                    setGraphTitle(null);
                  }
                }}
              />
            </div>
            <div className="select">
              <h3>Disability</h3>
              <Select
                options={selectOptions.disabilityOptions}
                isClearable
                onChange={setDisability}
              />
            </div>
          </div>
          <div className="autocomplete-container">
            <h3>Search School By Name</h3>
            <AsyncSelectInput
              setSelectedSchool={setSelectedSchool}
              race={race}
              gender={gender}
            />
          </div>
          <div className="graph-container">
            {isLoading ? (
              <Ring />
            ) : (
              <Histogram
                data={graphData}
                title={graphTitle}
                gender={gender}
                race={race}
                disability={disability}
                selectedSchool={selectedSchool}
              />
            )}
          </div>
        </div>
        <Stats data={graphData}/>
      </Page>
    </StyledApp>
  );
};

export default App;
