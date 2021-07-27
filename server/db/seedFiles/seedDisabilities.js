import disabilities from './disabilities';
import Disability from '../schemas/disabilitySchema';

const seedDisabilities = async (collection) => {
  const allDisabilities = disabilities.map(
    ({ id, name, abbreviation }) =>
      new Disability({
        id,
        name,
        abbreviation,
      }),
  );
  await collection.insertMany(allDisabilities);
};

export default seedDisabilities;
