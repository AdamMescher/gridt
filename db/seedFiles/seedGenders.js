import genders from './genders';
import Gender from '../schemas/genderSchema';

const seedGenders = async (collection) => {
  const allGenders = genders.map(
    ({ id, name, abbreviation }) => new Gender({ id, name, abbreviation }),
  );
  await collection.insertMany({ allGenders });
};

export default seedGenders;
