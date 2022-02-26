import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import localForage from 'localforage';
import ReactGA from 'react-ga4';
import { Ellipsis } from 'react-awesome-spinners';
import GlobalStyle from '../GlobalStyle';
import Meta from '../Meta';
import Header from '../Header';
import Footer from '../Footer';
import Controls from '../Controls';
import Graph from '../Graph';
import Stats from '../Stats';
import DisclosureModal from '../DisclosureModal';
import Welcome from '../Welcome';
import GraphKey from '../GraphKey';
import WhatNow from '../WhatNow';
import StyledApp from './styled';
import queries from '../../utils/queries';

const App = () => {
  const graphFloor = 50;
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
  const [IDBKEY, setIDBKEY] = React.useState('');
  const [
    shouldFetchSchoolDataFromDatabase,
    setShouldFetchSchoolDataFromDatabase,
  ] = React.useState(false);
  const [
    shouldFetchSchoolDataFromLocalForage,
    setShouldFetchSchoolDataFromLocalForage,
  ] = React.useState(false);
  const closeDisclosureModal = () => setModalIsOpen(false);
  const openDisclosureModal = () => setModalIsOpen(true);
  const client = useApolloClient();
  React.useEffect(() => {
    ReactGA.initialize('G-G5RN2PP9CD');
    ReactGA.send('pageview');
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    if (shouldFetchSchoolDataFromLocalForage === true) {
      const data = await localForage.getItem(IDBKEY);
      if (data?.length <= 1) {
        setGraphData([]);
        setIsLoading(false);
        return;
      } else {
        setGraphData(data);
        setIsLoading(false);
        setShouldFetchSchoolDataFromLocalForage(false);
        return;
      }
    }
    if (shouldFetchSchoolDataFromDatabase === true) {
      const { data } = await client.query({ query, variables });
      if (data?.length <= 1) {
        setGraphData([]);
        setIsLoading(false);
        return;
      } else {
        if (data) {
          const dataTypeKey = Object.keys(data)[0];
          const key = Object.keys(data[dataTypeKey][0])[0];
          const cleanedData = data[dataTypeKey].map((institution) => ({
            x: institution[key],
            SCH_NAME: institution.SCH_NAME,
          }));
          await localForage.setItem(IDBKEY, cleanedData);
          setGraphData(cleanedData);
        }
      }
      setIsLoading(false);
      setShouldFetchSchoolDataFromDatabase(false);
      return;
    }
  }, [
    client,
    query,
    shouldFetchSchoolDataFromDatabase,
    shouldFetchSchoolDataFromLocalForage,
    IDBKEY,
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
    setIDBKEY(idb);
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
      <Welcome openDisclosureModal={openDisclosureModal} />
      <h2 className="title">Local Patterns of Disproportionality</h2>
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
        <div className="generate-graph-button-container">
          <button
            className="button generate-graph-button"
            disabled={isLoading}
            onClick={async () => {
              if (race && gender && disability) {
                setGraphTitle(
                  `${race.value} ${gender.value} ${disability.value} ${comparison}`,
                );
              }
              await fetchSchools();
            }}
          >
            Generate Graph
          </button>
        </div>
      </div>
      <div className="content-container">
        <GraphKey
          isLoadingƒ={isLoading}
          race={race}
          gender={gender}
          disability={disability}
          graphTitle={graphTitle}
        />
        <Graph
          isLoading={isLoading}
          graphData={graphData}
          graphFloor={graphFloor}
          graphTitle={graphTitle}
          gender={gender}
          race={race}
          disability={disability}
          comparison={comparison}
          selectedSchool={selectedSchool}
        />
        <div className="stats-container">
          {isLoading ? (
            <Ellipsis />
          ) : graphData?.length >= 1 ? (
            <Stats data={graphData} />
          ) : null}
        </div>
      </div>
      <WhatNow />
      <Footer />
    </StyledApp>
  );
};

export default App;
