import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import localForage from 'localforage';
import { Grid, Ellipsis } from 'react-awesome-spinners';
import GlobalStyle from '../GlobalStyle';
import Meta from '../Meta';
import Header from '../Header';
import Footer from '../Footer';
import Controls from '../Controls';
import Histogram from '../Histogram';
import Stats from '../Stats';
import RiskRatioDescription from '../RiskRatioDescription';
import RiskRatioKey from '../RiskRatioKey';
import DisclosureModal from '../DisclosureModal';
import StyledApp from './styled';
import queries from '../../utils/queries';

const App = () => {
  const [gender, setGender] = React.useState('');
  const [race, setRace] = React.useState('');
  const [disability, setDisability] = React.useState('');
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [comparison, setComparison] = React.useState('pop');
  const [graphData, setGraphData] = React.useState([]);
  const [graphTitle, setGraphTitle] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(true);
  const [query, setQuery] = React.useState('');
  const [variables, setVariables] = React.useState({});
  const [thing, setThing] = React.useState('');
  const [
    shouldFetchSchoolDataFromDatabase,
    setShouldFetchSchoolDataFromDatabase,
  ] = React.useState(false);
  const [
    shouldFetchSchoolDataFromLocalForage,
    setShouldFetchSchoolDataFromLocalForage,
  ] = React.useState(false);
  const closeDisclosureModal = () => setModalIsOpen(false);
  const client = useApolloClient();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    if (shouldFetchSchoolDataFromLocalForage === true) {
      const data = await localForage.getItem(thing);
      setGraphData(data);
      setIsLoading(false);
      setShouldFetchSchoolDataFromDatabase(false);
      return;
    }
    if (shouldFetchSchoolDataFromDatabase === true) {
      const { data } = await client.query({ query, variables });
      console.log({ data });
      const dataTypeKey = Object.keys(data)[0];
      const key = Object.keys(data[dataTypeKey][0])[0];
      const cleanedData = data[dataTypeKey].map((institution) => ({
        x: institution[key],
      }));
      await localForage.setItem(thing, cleanedData);
      setGraphData(cleanedData);
      setIsLoading(false);
      setShouldFetchSchoolDataFromLocalForage(false);
      return;
    }
  }, [
    client,
    query,
    shouldFetchSchoolDataFromDatabase,
    shouldFetchSchoolDataFromLocalForage,
    thing,
    variables,
  ]);
  const fetchSchools = async () => {
    if (!race || !gender || !disability) {
      console.log('NOPE');
      return;
    }
    setIsLoading(true);
    let limit = -1;
    let riskRatioFilterFloor = 0;
    let enrollmentFilterFloor = 3;
    let _operators;
    let variables;
    let idb;
    if (comparison === 'pop') {
      idb = `SCHOOLS_${race.value}_${gender.value}_${disability.value}_QUERY`;
      if (disability.value === 'TOTAL') {
        _operators = {
          [`RR_${race.value}_${gender.value}_POP`]: {
            gte: riskRatioFilterFloor,
          },
          [`SCH_IDEAENR_${race.value}_${gender.value}`]: {
            gt: enrollmentFilterFloor,
          },
        };
      } else {
        _operators = {
          [`RR_${race.value}_${gender.value}_POP_${disability.value}`]: {
            gte: riskRatioFilterFloor,
          },
          [`SCH_${disability.value}_ENR_${race.value}_${gender.value}`]: {
            gt: enrollmentFilterFloor,
          },
        };
      }
    }
    if (comparison === 'wh') {
      idb = `SCHOOLS_${race.value}_${gender.value}_WH_${gender.value}_${disability.value}_QUERY`;
      if (disability.value === 'TOTAL') {
        _operators = {
          [`RR_${race.value}_${gender.value}_WH_${gender.value}`]: {
            gte: riskRatioFilterFloor,
          },
          [`SCH_IDEAENR_${race.value}_${gender.value}`]: {
            gt: enrollmentFilterFloor,
          },
        };
      } else {
        _operators = {
          [`RR_${race.value}_${gender.value}_WH_${gender.value}`]: {
            gte: riskRatioFilterFloor,
          },
          [`SCH_IDEAENR_${race.value}_${gender.value}`]: {
            gt: enrollmentFilterFloor,
          },
        };
      }
    }
    const query = queries[idb];
    variables = {
      limit,
      filter: { _operators },
    };
    setThing(idb);
    setQuery(query);
    setVariables(variables);
    const local = await localForage.getItem(idb);
    if (local) {
      setShouldFetchSchoolDataFromLocalForage(true);
    } else {
      setShouldFetchSchoolDataFromDatabase(true);
    }
  };
  return (
    <StyledApp>
      <GlobalStyle />
      <Meta />
      <DisclosureModal
        closeDisclosureModal={closeDisclosureModal}
        modalIsOpen={modalIsOpen}
      />
      <div className="header-container">
        <Header />
      </div>
      <h2>Welcome</h2>
      <h2>Local Patterns of Disproportionalityphs</h2>
      <h2>What Now?</h2>
      <div className="controls-container">
        <Controls
          comparison={comparison}
          race={race}
          gender={gender}
          disability={disability}
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
          fetchSchools={fetchSchools}
        />
      </div>
      <div className="description-container">
        <RiskRatioDescription />
      </div>
      <div className="content-container">
        <div className="legend-container">
          <RiskRatioKey />
        </div>
        <div className="graph-container">
          {isLoading ? (
            <Grid />
          ) : graphData?.length > 1 ? (
            <Histogram
              data={graphData}
              title={graphTitle}
              race={race}
              gender={gender}
              disability={disability}
              selectedSchool={selectedSchool}
            />
          ) : null}
        </div>
        <div className="stats-container">
          {isLoading ? (
            <Ellipsis />
          ) : graphData?.length >= 1 ? (
            <Stats data={graphData} />
          ) : null}
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </StyledApp>
  );
};

export default App;
