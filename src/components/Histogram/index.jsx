/* eslint-disable */
import * as React from 'react';
import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryTooltip,
  VictoryHistogram,
} from 'victory';
import { useApolloClient, useLazyQuery, gql } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import StyledHistogram from './styled';
import { whileStatement } from '@babel/types';

const queries = {
  SCHOOLS_AM_F: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AM_F_POP
      }
    }
  `,
  SCHOOLS_AM_M: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AM_M_POP
      }
    }
  `,
  SCHOOLS_AS_F: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AS_F_POP
      }
    }
  `,
  SCHOOLS_AS_M: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AS_M_POP
      }
    }
  `,
  SCHOOLS_BL_F: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_BL_F_POP
      }
    }
  `,
  SCHOOLS_BL_M: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_BL_M_POP
      }
    }
  `,
  SCHOOLS_HI_F: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HI_F_POP
      }
    }
  `,
  SCHOOLS_HI_M: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HI_M_POP
      }
    }
  `,
  SCHOOLS_HP_F: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HP_F_POP
      }
    }
  `,
  SCHOOLS_HP_M: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HP_M_POP
      }
    }
  `,
  SCHOOLS_TR_F: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_TR_F_POP
      }
    }
  `,
  SCHOOLS_TR_M: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_TR_M_POP
      }
    }
  `,
  SCHOOLS_WH_F: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_WH_F_POP
      }
    }
  `,
  SCHOOLS_WH_M: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_WH_M_POP
      }
    }
  `,
};

const generateFill = (riskRatio) => {
  console.log({ riskRatio });
  if (riskRatio === null) {
    return 'white';
  } else if (riskRatio >= 0 && riskRatio < 1) {
    return 'green';
  } else if (riskRatio >= 1 && riskRatio <= 3) {
    return 'yellow';
  } else if (riskRatio > 3 && riskRatio <= 4) {
    return 'orange';
  } else if (riskRatio > 4) {
    return 'red';
  }
};

const Histogram = ({ selectedSchool, race, gender }) => {
  const client = useApolloClient();
  const [graphTitle, setGraphTitle] = React.useState(null);
  const [graphData, setGraphData] = React.useState([]);
  const fetchSchools = async (gender, race) => {
    const { data, loading, error } = await client.query({
      query: queries[`SCHOOLS_${race}_${gender}`],
      variables: {
        schoolsLimit: -1,
        schoolsFilter: {
          _operators: {
            [`RR_${race}_${gender}_POP`]: {
              gt: 0,
            },
          },
        },
      },
    });
    let key = Object.keys(data.schools[0])[0];
    return data ? data.schools.map((school) => ({ x: school[key] })) : [];
  };
  const handleButtonClick = async (race, gender) => {
    setGraphTitle(`${race} ${gender} risk ratio`);
    setGraphData(await fetchSchools(gender, race));
  };
  return (
    <StyledHistogram>
      <div className="all-buttons-container">
        <div className="two-button-container">
          <button onClick={() => handleButtonClick('AM', 'F')}>AM F</button>
          <button onClick={() => handleButtonClick('AM', 'M')}>AM M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => handleButtonClick('AS', 'F')}>AS F</button>
          <button onClick={() => handleButtonClick('AS', 'M')}>AS M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => handleButtonClick('BL', 'F')}>BL F</button>
          <button onClick={() => handleButtonClick('BL', 'M')}>BL M</button>
        </div>
        <div className="two-button-container">
          <button disabled onClick={() => handleButtonClick('HI', 'F')}>
            HI F
          </button>
          <button onClick={() => handleButtonClick('HI', 'M')}>HI M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => handleButtonClick('HP', 'F')}>HP F</button>
          <button onClick={() => handleButtonClick('HP', 'M')}>HP M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => handleButtonClick('TR', 'F')}>TR F</button>
          <button onClick={() => handleButtonClick('TR', 'M')}>TR M</button>
        </div>
        <div className="two-button-container">
          <button onClick={() => handleButtonClick('WH', 'F')}>WH F</button>
          <button onClick={() => handleButtonClick('WH', 'M')}>WH M</button>
        </div>
      </div>
      <VictoryChart className="chart">
        <VictoryLabel text={graphTitle} textAnchor="middle" x={225} y={10} />
        <VictoryHistogram
          data={graphData}
          bins={[
            0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
            0.75, 0.9, 1.05, 1.2, 1.35, 1.5, 1.65, 1.8, 1.95, 2.1, 2.25, 2.4,
            2.55, 2.7, 2.85, 3, 3.15, 3.3, 3.45, 3.6, 3.75, 3.9, 4,
          ]}
        />
        {selectedSchool && race.value && gender.value ? (
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={[
              {
                x: selectedSchool[`RR_${race.value}_${gender.value}_POP`],
                y: 5000,
                label: selectedSchool[`RR_${race.value}_${gender.value}_POP`],
              },
            ]}
            style={{
              data: {
                cursor: 'pointer',
                fill: generateFill(
                  selectedSchool[`RR_${race.value}_${gender.value}_POP`],
                ),
              },
            }}
          />
        ) : null}
      </VictoryChart>
    </StyledHistogram>
  );
};

export default Histogram;
