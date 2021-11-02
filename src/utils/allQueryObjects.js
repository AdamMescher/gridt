import selectOptions from './selectOptions';
import gqlQueries from './queries';

const genders = selectOptions.genderOptions.map((gender) => gender.value);
const races = selectOptions.raceOptions.map((race) => race.value);

const generateQueryObjects = (races, genders) => {
  const queries = {};
  for (let i = 0; i < races.length; i++) {
    for (let j = 0; j < genders.length; j++) {
      const queryPopulation =
        gqlQueries[`SCHOOLS_${races[i]}_${genders[j]}_QUERY`];
      const queryWhite =
        gqlQueries[`SCHOOLS_${races[i]}_${genders[j]}_WH_${genders[j]}_QUERY`];
      const variablesWhite = {
        schoolsLimit: -1,
        schoolsFilter: {
          _operators: {
            [`RR_${races[i]}_${genders[j]}_WH_${genders[j]}`]: {
              gt: 0,
            },
          },
        },
      };
      const variablesPopulation = {
        schoolsLimit: -1,
        schoolsFilter: {
          _operators: {
            [`RR_${races[i]}_${genders[j]}_WH_${genders[j]}`]: {
              gt: 0,
            },
          },
        },
      };
      queries[`${races[i]}_${genders[j]}`] = {
        query: queryPopulation,
        variables: variablesPopulation,
      };
      queries[`${races[i]}_${genders[j]}_WH_${genders[j]}`] = {
        query: queryPopulation,
        variables: variablesPopulation,
      };
    }
  }
  return queries;
};

const allQueryObjects = generateQueryObjects(races, genders);

export default allQueryObjects;
