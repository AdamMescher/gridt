/* eslint-disable */
import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import AsyncSelectInput from '../AsyncSelectInput';
import GlobalStyle from '../GlobalStyle';
import Page from '../Page';
import Select from 'react-select';
import Histogram from '../Histogram';
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
  const [currentGraph, setCurrentGraph] = React.useState('');
  const client = useApolloClient();
  const fetchSchools = async () => {
    setIsLoading(true);
    const query = queries[`SCHOOLS_${race.value}_${gender.value}_QUERY`];
    const { data } = await client.query({
      query,
      variables: {
        schoolsLimit: -1,
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
    if (
      gender &&
      race &&
      disability &&
      selectedSchool &&
      currentGraph !==
        `${race.value}_${gender.value}_${disability.value}_${selectedSchool?.COMBOKEY}`
    ) {
      setCurrentGraph(
        `${race.value}_${gender.value}_${disability.value}_${selectedSchool?.COMBOKEY}`,
      );
      const schools = await fetchSchools();
      setGraphData(schools);
      setIsLoading(false);
    } else if (
      gender &&
      race &&
      disability &&
      currentGraph !== `${race.value}_${gender.value}_${disability.value}`
    ) {
      const newCurrentGraph = `${race.value}_${gender.value}_${disability.value}`;
      setCurrentGraph(`${race.value}_${gender.value}_${disability.value}`);
      const schools = await fetchSchools();
      setGraphData(schools);
      setIsLoading(false);
    } else if (
      gender &&
      race &&
      selectedSchool &&
      currentGraph !==
        `${race.value}_${gender.value}_${selectedSchool.COMBOKEY}`
    ) {
      console.log('FIRED GENDER RACE SELECTEDSCHOOL');
      setCurrentGraph(
        `${race.value}_${gender.value}_${selectedSchool.COMBOKEY}`,
      );
      const schools = await fetchSchools();
      setGraphData(schools);
      setIsLoading(false);
    } else if (
      gender &&
      race &&
      currentGraph !== `${race?.value}_${gender?.value}`
    ) {
      setCurrentGraph(`${race.value}_${gender.value}`);
      const schools = await fetchSchools();
      setGraphData(schools);
      setIsLoading(false);
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
                onChange={setGender}
              />
            </div>
            <div className="select">
              <h3>Race</h3>
              <Select
                options={selectOptions.raceOptions}
                isClearable
                onChange={setRace}
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
            <AsyncSelectInput setSelectedSchool={setSelectedSchool} />
          </div>
          <div className="graph-container">
            {isLoading ? <Ring /> : <Histogram data={graphData} />}
          </div>
        </div>
      </Page>
    </StyledApp>
  );
};

export default App;
