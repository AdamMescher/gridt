import * as React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useApolloClient,
} from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { Grid, Ellipsis } from 'react-awesome-spinners';
import Select from 'react-select';
import GlobalStyle from '../GlobalStyle';
import AsyncSelectInput from '../AsyncSelectInput';
import Meta from '../Meta';
import Header from '../Header';
import Footer from '../Footer';
import Controls from '../Controls';
import Histogram from '../Histogram';
import Stats from '../Stats';
import Recommendation from '../Recommendation';
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
  console.log({ client });
  const fetchSchools = async () => {
    console.log('FIRED UE');
    setIsLoading(true);
    let query;
    let variables = {};
    if (comparison === 'pop') {
      query = queries[`SCHOOLS_${race.value}_${gender.value}_QUERY`];
      variables = {
        schoolsLimit: -1,
        schoolsFilter: {
          _operators: {
            [`RR_${race.value}_${gender.value}_POP`]: {
              gt: 0,
            },
          },
        },
      };
    }
    if (comparison === 'wh') {
      query =
        queries[
          `SCHOOLS_${race.value}_${gender.value}_WH_${gender.value}_QUERY`
        ];
      variables = {
        schoolsLimit: -1,
        schoolsFilter: {
          _operators: {
            [`RR_${race.value}_${gender.value}_WH_${gender.value}`]: {
              gt: 0,
            },
          },
        },
      };
    }
    const { data } = await client.query({
      query,
      variables,
    });
    const key = Object.keys(data.schools[0])[0];
    return data
      ? data.schools.map((school) => ({
          x: school[key],
        }))
      : [];
  };
  React.useEffect(async () => {
    if (gender && race) {
      const newGraphTitle = `${race.label}_${gender.label} Compared to ${
        comparison === 'wh' ? 'White population' : 'Rest of Popuation'
      }`;
      if (newGraphTitle !== graphTitle) {
        setGraphTitle(
          `${race.label}_${gender.label} Compared to ${
            comparison === 'wh' ? 'White population' : 'Rest of Popuation'
          }`,
        );
        const schools = await fetchSchools();
        setGraphData(schools);
        setIsLoading(false);
      }
    }
  });
  return (
    <StyledApp>
      <GlobalStyle />
      <Meta />
      <div className="header-container">
        <Header />
      </div>
      <div className="controls-container">
        <Controls
          race={race}
          gender={gender}
          setRace={setRace}
          setGender={setGender}
          setSelectedSchool={setSelectedSchool}
          setComparison={setComparison}
          setGraphTitle={setGraphTitle}
        />
      </div>
      <div className="content-container">
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
