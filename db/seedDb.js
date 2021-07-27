/* eslint-disable no-console */
// const { pipeline } = require("stream");
import { MongoClient } from 'mongodb';
import seedGenders from './seedFiles/seedGenders';
import seedRaces from './seedFiles/seedRaces';
import seedDisabilities from './seedFiles/seedDisabilities';
import seedStates from './seedFiles/seedStates';
import seedDistrictsStream from './seedFiles/seedDistrictsStream';
import seedSchoolsStream from './seedFiles/seedSchoolsStream';

const url = 'mongodb://localhost/gridt';
const options = { useNewUrlParser: true };
const client = new MongoClient(url, options);

async function seedDb() {
  try {
    await client.connect();
    console.log('-----------------------');
    console.log('- CONNTECTED TO GRIDT -');
    console.log('-----------------------');
    const gendersCollection = client.db('gridt').collection('genders');
    const racesCollection = client.db('gridt').collection('races');
    const disabilitiesCollection = client
      .db('gridt')
      .collection('disabilities');
    const statesCollection = client.db('gridt').collection('states');
    const districtsCollection = client.db('gridt').collection('districts');
    const schoolsCollection = client.db('gridt').collection('schools');
    await gendersCollection.drop();
    await racesCollection.drop();
    await disabilitiesCollection.drop();
    await statesCollection.drop();
    await districtsCollection.drop();
    await schoolsCollection.drop();

    await seedGenders(gendersCollection);
    await seedRaces(racesCollection);
    await seedDisabilities(disabilitiesCollection);
    await seedStates(statesCollection);
    await seedDistrictsStream(districtsCollection);
    await seedSchoolsStream(schoolsCollection);
    await updateSchoolStream(schoolsCollection).catch();

    client.close();
  } catch (error) {
    console.log(error.stack);
  }
}

seedDb();
