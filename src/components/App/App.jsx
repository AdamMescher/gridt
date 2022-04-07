import * as React from 'react';
import styled from 'styled-components';
import { useApolloClient } from '@apollo/client';
import localForage from 'localforage';
import ReactGA from 'react-ga4';
import GlobalStyle from '../GlobalStyle';
import Meta from '../Meta';
import Header from '../Header';
import Footer from '../Footer';
import DisclosureModal from '../DisclosureModal';
import Welcome from '../Welcome';
import WhatNow from '../WhatNow';
import DataVisualization from '../DataVisualization';
import Title from '../Title';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Spacer from '../Spacer';
import queries from '../../utils/queries';
import generateIdb from '../../utils/generateIdb';
import generateOperators from '../../utils/generateOperators';
import generateSelectedSchoolRiskRatioProperty from '../../utils/generateSelectedSchoolRiskRatioProperty';

const App = () => {
  const graphFloor = 50;
  const [gender, setGender] = React.useState('');
  const [race, setRace] = React.useState('');
  const [disability, setDisability] = React.useState('');
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [comparison, setComparison] = React.useState('pop');
  const [schoolState, setSchoolState] = React.useState('');
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
      const gqlKeys = Object?.keys(data);
      if (data[gqlKeys[0]]?.length === 0) {
        await localForage.setItem(IDBKEY, []);
        setGraphData([]);
        setIsLoading(false);
        setShouldFetchSchoolDataFromDatabase(false);
        return;
      }
      if (data) {
        const dataTypeKey = Object?.keys(data)[0];
        const cleanedData = data[dataTypeKey].map((institution) => ({
          x: institution[
            generateSelectedSchoolRiskRatioProperty(
              race,
              gender,
              disability,
              comparison,
            )
          ],
        }));
        await localForage.setItem(IDBKEY, cleanedData);
        setGraphData(cleanedData);
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
    comparison,
    disability,
    gender,
    race,
  ]);
  const fetchSchools = async () => {
    if (!race || !gender || !disability) {
      return;
    }
    setIsLoading(true);
    let limit = -1;
    let riskRatioFilterFloor = 0;
    let enrollmentFilterFloor = 3;
    let _operators;
    let variables;
    let idb;
    idb = generateIdb(comparison, race, gender, disability);
    _operators = generateOperators(
      comparison,
      race,
      gender,
      disability,
      riskRatioFilterFloor,
      enrollmentFilterFloor,
    );
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
    <Wrapper>
      <GlobalStyle />
      <Meta />
      <MaxWidthWrapper>
        <DisclosureModal
          closeDisclosureModal={closeDisclosureModal}
          modalIsOpen={modalIsOpen}
        />
        <Spacer size={16} />
        <Header>
          <Title level={1}>
            Gender and Race Intersectional Disproportionality-Tool
          </Title>
          <Spacer size={4} />
          <Title level={2}>(GRID-T)</Title>
        </Header>
        <Spacer size={16} />
        <Welcome openDisclosureModal={openDisclosureModal} />
        <Spacer size={16} />
        <DataVisualization
          comparison={comparison}
          race={race}
          gender={gender}
          disability={disability}
          schoolState={schoolState}
          graphData={graphData}
          graphTitle={graphTitle}
          isLoading={isLoading}
          selectedSchool={selectedSchool}
          graphFloor={graphFloor}
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setSchoolState={setSchoolState}
          setGraphData={setGraphData}
          setGraphTitle={setGraphTitle}
          fetchSchools={fetchSchools}
        />
        <Spacer size={10} />
        <WhatNow />
        <Spacer size={10} />
      </MaxWidthWrapper>
      <Footer />
      <Spacer size={24} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export default App;
