/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const seedGenders = require('./seedFiles/seedGenders');
const seedRaces = require('./seedFiles/seedRaces');
const seedDisabilities = require('./seedFiles/seedDisabilities');
const seedStates = require('./seedFiles/seedStates');
const seedDistrictsStream = require('./seedFiles/seedDistrictsStream');
const seedSchoolsStream = require('./seedFiles/seedSchoolsStream');

const url = 'mongodb://localhost/gridt';
const options = { useNewUrlParser: true, connectTimeoutMS: 10000 };
const client = new MongoClient(url, options);

const seedDb = async () => {
  try {
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
    console.log('\n', 'DROPPING COLLECTIONS');
    await gendersCollection.drop();
    await racesCollection.drop();
    await disabilitiesCollection.drop();
    await statesCollection.drop();
    await districtsCollection.drop();
    await schoolsCollection.drop();
    console.log('ALL COLLECTIONS DROPPED SUCCESSFULLY');

    console.log('\n', '--- SEEDING COLLECTIONS ---');
    await seedGenders(gendersCollection);
    await seedRaces(racesCollection);
    await seedDisabilities(disabilitiesCollection);
    await seedStates(statesCollection);
    await seedDistrictsStream(districtsCollection);
    await seedSchoolsStream(schoolsCollection);
  } catch (error) {
    console.log(error.stack);
  }
};

client.connect();

seedDb();
