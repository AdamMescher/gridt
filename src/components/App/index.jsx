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
import DisclosureModal from '../DisclosureModal';
import Welcome from '../Welcome';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    if (shouldFetchSchoolDataFromLocalForage === true) {
      const data = await localForage.getItem(IDBKEY);
      console.log({ data });
      if (data?.length <= 1) {
        setGraphData([]);
        setIsLoading(false);
        return;
      } else {
        console.log({ data });
        setGraphData(data);
        setIsLoading(false);
        setShouldFetchSchoolDataFromDatabase(false);
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
      setShouldFetchSchoolDataFromLocalForage(false);
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
      <h2 style={{ marginTop: '20px' }}>
        Local Patterns of Disproportionality
      </h2>
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
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            className="button"
            disabled={isLoading}
            onClick={async () => {
              if (race && gender && disability) {
                setGraphTitle(
                  `${race.value} ${gender.value} ${disability.value} ${comparison}`,
                );
              }
              await fetchSchools();
            }}
            style={{
              marginTop: '20px',
              padding: '10px 30px 10px 30px',
            }}
          >
            Generate Graph
          </button>
        </div>
      </div>
      <div className="content-container">
        <div className="graph-container">
          {isLoading ? (
            <Grid />
          ) : graphData?.length > graphFloor ? (
            <Histogram
              data={graphData}
              title={graphTitle}
              race={race}
              gender={gender}
              disability={disability}
              comparison={comparison}
              selectedSchool={selectedSchool}
            />
          ) : (
            <div style={{ flexDirection: 'column' }}>
              {race &&
              gender &&
              disability &&
              graphData?.length < graphFloor &&
              graphTitle ===
                `${race.value} ${gender.value} ${disability.value} ${comparison}` ? (
                <div>
                  <p>
                    Sample size of {graphData.length} is not large enough to
                    generate meaningful data for this subgroup.
                  </p>
                  <p>Please try another.</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
        <div className="stats-container">
          {isLoading ? (
            <Ellipsis />
          ) : graphData?.length >= 1 ? (
            <Stats data={graphData} />
          ) : null}
        </div>
      </div>
      <WhatNow />
      <div className="footer-container">
        <Footer />
      </div>
    </StyledApp>
  );
};

export default App;
