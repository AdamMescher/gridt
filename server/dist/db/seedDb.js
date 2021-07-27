"use strict";

// const { pipeline } = require("stream");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost/gridt";
const options = {
  useNewUrlParser: true
};
const client = new MongoClient(url, options); // const seedGenders = require("./seedFiles/seedGenders");
// const seedRaces = require("./seedFiles/seedRaces");
// const seedDisabilities = require("./seedFiles/seedDisabilities");

const seedStates = require("./seedFiles/seedStates"); // const seedDistrictsStream = require("./seedFiles/seedDistrictsStream");
// const seedSchoolsStream = require("./seedFiles/seedSchoolsStream");
// const updateSchoolStream = require("./seedFiles/updateSchoolsStream");


async function seedDb() {
  try {
    await client.connect();
    console.log("-----------------------");
    console.log("- CONNTECTED TO GRIDT -");
    console.log("-----------------------"); // const gendersCollection = client.db("gridt").collection("genders");
    // const racesCollection = client.db("gridt").collection("races");
    // const disabilitiesCollection = client
    //   .db("gridt")
    //   .collection("disabilities");

    const statesCollection = client.db("gridt").collection("states"); // const districtsCollection = client.db("gridt").collection("districts");
    // const schoolsCollection = client.db("gridt").collection("schools");
    // await gendersCollection.drop();
    // await racesCollection.drop();
    // await disabilitiesCollection.drop();

    await statesCollection.drop(); // await districtsCollection.drop();
    // await schoolsCollection.drop();
    // await seedGenders(gendersCollection);
    // await seedRaces(racesCollection);
    // await seedDisabilities(disabilitiesCollection);

    await seedStates(statesCollection); // await seedDistrictsStream(districtsCollection);
    // await seedSchoolsStream(schoolsCollection);
    // await updateSchoolStream(schoolsCollection).catch();

    client.close();
  } catch (error) {
    console.log(error.stack);
  }
}

seedDb();