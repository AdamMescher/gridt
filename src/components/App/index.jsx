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
      console.log({ data });
      console.log({ length: data.length });
      if (data?.length <= 1) {
        console.log('FIRED LENGTH IS LESS THAN ONE');
        setGraphData([]);
        setIsLoading(false);
        return;
      } else {
        if (data) {
          const dataTypeKey = Object.keys(data)[0];
          const key = Object.keys(data[dataTypeKey][0])[0];
          const cleanedData = data[dataTypeKey].map((institution) => ({
            x: institution[key],
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
      <div className="steps-container">
        <h2>Welcome</h2>
        <h3 className="steps-subtitle">How to use GRID-T</h3>
        <ol className="steps">
          <li>
            Select Race, Gender, and Disability Category or Total Special
            Education population
          </li>
          <li>
            A histogram will appear that represents the frequency of each{' '}
            <span className="risk highlight">Risk Ratio</span> across the United
            States. This gives a national perspective as to whether this
            subgroup is either overrepresented, underrepresented, or
            proportionate.
          </li>
          <li>
            Examine the descriptive statistics table to see n (how many schools
            are involved in the calculation), IQR (interquartile ranges), Mean
            (average <span className="risk highlight">Risk Ratio</span> for that
            subgroup intersection), and Mode (most common{' '}
            <span className="risk highlight">Risk Ratio</span> for that subgroup
            intersection)
          </li>
          <li>
            Type your school’s name into the search box to see if the data is
            present for that subgroup.
          </li>
          <li>
            If the data is present and there are more than three students
            represented in that subgroup, a color-coded line will appear with
            your school’s <span className="risk highlight">Risk Ratio</span>.
            The color signifies how underrepresented, overrepresented, or
            proportionate your school’s subgroup is in the selected dis/ability
            category or Total special Education population.
          </li>
          <li>
            Read the “What Now?” section to look through resources that will
            help you to address your local area’s patterns of
            disproportionality.
          </li>
        </ol>
        <button className="button" onClick={openDisclosureModal}>
          Show Welcome to GRID-T Resources
        </button>
        <h3 className="steps-subtitle">Important Definitions</h3>
        <ul className="steps-definitions">
          <li>
            <p>
              <span className="risk highlight definition">Risk Ratio</span>: A
              single number summary that describes the probability that a
              subgroup is placed in special education compared to the
              probability that the rest of the group is in special education
              (Cruz & Rodl, 2018)
            </p>
          </li>
          <li>
            <p>
              <span className="outcome highlight definition">Outcome</span>:
              special education placement
            </p>
          </li>
          <li className="definition">
            <p className="description">
              <span className="underrepresentation highlight">
                Underrepresentation
              </span>
              : the target group is <em>less</em> likely to be placed in special
              education.
            </p>
          </li>
          <li>
            <p className="description">
              <span className="overrepresentation highlight definition">
                Overrepresentation
              </span>
              : the target group is <em>more</em> likely to be placed in special
              education.
            </p>
          </li>
        </ul>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <RiskRatioDescription />
          <RiskRatioKey />
        </div>
      </div>
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
            className="generate-graph"
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
        <div className="legend-container">
          <RiskRatioKey />
        </div>
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
              graphData.length < graphFloor &&
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
      <h2 style={{ marginTop: '20px' }}>What Now?</h2>
      <ol style={{ marginTop: '14px' }}>
        <li>
          <a href="https://docs.google.com/document/d/1KxDbYr8IV30PubICWSEtScYrlYi8dDyKJew3DUAXWDo/edit?usp=sharing">
            Use the linked guide to take preliminary notes on your local
            patterns of disproportionality and make a plan for moving forward.
          </a>
        </li>
        <li>
          <p>
            Explore possible interventions for your patterns of
            disproportionality. Please note that your findings for different
            subgroups might require different actions.
          </p>
        </li>
      </ol>
      <div>
        <p>
          Munk, T., O’Hara, N., and Sulzberger, L. (2019). Examining
          representation and identification: Over, under, or both?. (Version
          2.0). IDEA Data Center. Rockville, MD: Westat.
        </p>
        <a href="https://ideadata.org/resources/resource/1592/examining-representation-and-identification-over-under-or-both">
          https://ideadata.org/resources/resource/1592/examining-representation-and-identification-over-under-or-both
        </a>
        <p>
          Fergus, E. (2016). Solving disproportionality and achieving equity: A
          leader's guide to using data to change hearts and minds. Corwin Press.
        </p>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </StyledApp>
  );
};

export default App;
