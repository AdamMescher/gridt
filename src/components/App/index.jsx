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
  const client = useApolloClient();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSchools = async () => {
    setIsLoading(true);
    let query;
    let variables = {};
    let idb;
    if (comparison === 'pop') {
      if (race && gender && disability) {
        idb = `SCHOOLS_${race.value}_${gender.value}_${disability.value}_QUERY`;
      } else {
        idb = `SCHOOLS_${race.value}_${gender.value}_QUERY`;
      }
      query = queries[idb];
      if (gender && race && disability) {
        variables = {
          limit: -1,
          filter: {
            _operators: {
              [`RR_${race.value}_${gender.value}_POP_${disability.value}`]: {
                gte: 0,
              },
            },
          },
        };
      } else {
        variables = {
          limit: -1,
          filter: {
            _operators: {
              [`RR_${race.value}_${gender.value}_POP`]: {
                gte: 0,
              },
            },
          },
        };
      }
    }
    if (comparison === 'wh' && disability) {
      idb = `SCHOOLS_${race.value}_${gender.value}_WH_${gender.value}_${disability.value}_QUERY`;
      query = queries[idb];
      variables = {
        limit: -1,
        filter: {
          _operators: {
            [`RR_${race.value}_${gender.value}_WH_${gender.value}_${disability.value}`]:
              {
                gte: 0,
              },
          },
        },
      };
    } else if (comparison === 'wh' && !disability) {
      idb = `SCHOOLS_${race.value}_${gender.value}_WH_${gender.value}_QUERY`;
      query = queries[idb];
      variables = {
        limit: -1,
        filter: {
          _operators: {
            [`RR_${race.value}_${gender.value}_WH_${gender.value}`]: {
              gte: 0,
            },
          },
        },
      };
    }
    console.log({ query, variables });
    const { data } = await client.query({
      query,
      variables,
    });

    const dataTypeKey = Object.keys(data)[0];
    const key = Object.keys(data[dataTypeKey][0])[0];
    return data
      ? data[dataTypeKey].map((institution) => ({
          x: institution[key],
        }))
      : [];
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    if (gender && race && disability) {
      const idbKey =
        comparison === 'pop'
          ? `SCHOOLS_${race.value}_${gender.value}_${disability.value}_QUERY`
          : `SCHOOLS_${race.value}_${gender.value}_WH_${gender.value}_${disability.value}_QUERY`;
      setGraphTitle(
        `${race.label}_${gender.label}_${disability.label} Compared to Rest of Population`,
      );
      const newGraphTitle = `${race.label}_${gender.label}_${
        disability.label
      } Compared to ${
        comparison === 'wh' ? 'White population' : 'Rest of Popuation'
      }`;
      if (newGraphTitle !== graphTitle) {
        setGraphTitle(
          `${race.label}_${gender.label}_${disability.label} Compared to ${
            comparison === 'wh' ? 'White population' : 'Rest of Population'
          }`,
        );
      }
      const local = await localForage.getItem(idbKey);
      if (!local) {
        const schools = await fetchSchools();
        await localForage.setItem(idbKey, schools);
        setGraphData(schools);
        setIsLoading(false);
        return;
      } else {
        setGraphData(local);
        setIsLoading(false);
        return;
      }
    }
    if (gender && race && !disability) {
      const idbKey =
        comparison === 'pop'
          ? `SCHOOLS_${race.value}_${gender.value}_QUERY`
          : `SCHOOLS_${race.value}_${gender.value}_WH_${gender.value}_QUERY`;
      const newGraphTitle = `${race.label}_${gender.label} Compared to ${
        comparison === 'wh' ? 'White population' : 'Rest of Popuation'
      }`;
      if (newGraphTitle !== graphTitle) {
        setGraphTitle(
          `${race.label}_${gender.label} Compared to ${
            comparison === 'wh' ? 'White population' : 'Rest of Popuation'
          }`,
        );
        const local = await localForage.getItem(idbKey);
        if (!local) {
          const schools = await fetchSchools();
          await localForage.setItem(idbKey, schools);
          setGraphData(schools);
          setIsLoading(false);
          return;
        } else {
          setGraphData(local);
          setIsLoading(false);
          return;
        }
      }
    }
  }, [comparison, disability, fetchSchools, gender, graphTitle, race]);
  return (
    <StyledApp>
      <GlobalStyle />
      <Meta />
      <div className="header-container">
        <Header />
      </div>
      <div className="controls-container">
        <Controls
          comparison={comparison}
          setRace={setRace}
          setGender={setGender}
          setDisability={setDisability}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
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
          ) : (
            <Histogram
              data={graphData}
              title={graphTitle}
              race={race}
              gender={gender}
              selectedSchool={selectedSchool}
            />
          )}
        </div>
        <div className="stats-container">
          {isLoading ? <Ellipsis /> : <Stats data={graphData} />}
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </StyledApp>
  );
};

export default App;
