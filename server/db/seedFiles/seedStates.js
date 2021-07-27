import states from './states';
import State from '../schemas/stateSchema';

const seedStates = async (collection) => {
  const allStates = states.map(
    ({ name, standard, postal }) =>
      new State({
        name,
        standard,
        postal,
      }),
  );
  await collection.insertMany(allStates);
};

export default seedStates;
