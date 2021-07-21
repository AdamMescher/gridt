const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost/gridt-db";
const options = { useNewUrlParser: true };
const client = new MongoClient(url, options);

const seedGenders = require("./seedFiles/seedGenders");
const seedRaces = require("./seedFiles/seedRaces");
const seedDisabilities = require("./seedFiles/seedDisabilities");
const seedDistricts = require("./seedFiles/seedDistricts");
const seedSchools = require("./seedFiles/seedSchools");
const updateSchoolsWithDisabilityData = require("./seedFiles/updateSchoolsWithDisabilityData");

async function seedDb() {
  try {
    await client.connect();
    console.log("-----------------------");
    console.log("- CONNTECTED TO GRIDT -");
    console.log("-----------------------");
    const gendersCollection = client.db("gridt").collection("genders");
    const racesCollection = client.db("gridt").collection("races");
    const disabilitiesCollection = client
      .db("gridt")
      .collection("disabilities");
    const districtsCollection = client.db("gridt").collection("districts");
    const schoolsCollection = client.db("gridt").collection("schools");
    console.log("------------------------------");
    console.log("- [1/3] DROPPING COLLECTIONS -");
    console.log("------------------------------");
    // await gendersCollection.drop();
    // await racesCollection.drop();
    // await disabilitiesCollection.drop();
    // await districtsCollection.drop();
    // await schoolsCollection.drop();
    console.log("---------------------------------------");
    console.log("- [1/3] DROPPING COLLECTIONS COMPLETE -");
    console.log("---------------------------------------");
    console.log("--------------------");
    console.log("- [2/3] SEEDING DB -");
    console.log("--------------------");
    console.log("[1/5] SEEDING GENDERS");
    await seedGenders(gendersCollection);
    console.log("[2/5] SEEDING GENDERS COMPLETE");
    console.log("[3/5] SEEDING RACES");
    await seedRaces(racesCollection);
    console.log("[3/5] SEEDING RACES COMPLETE");
    await seedDisabilities(disabilitiesCollection);
    console.log("[4/5] SEEDING DISTRICTS");
    await seedDistricts(districtsCollection);
    console.log("[4/5] SEEDING DISTRICTS COMPLETE");
    console.log("[5/5] SEEDING SCHOOLS");
    await seedSchools(schoolsCollection);
    console.log("[5/5] SEEDING SCHOOLS COMPLETE");
    console.log("-----------------------------");
    console.log("- [2/3] SEEDING DB COMPLETE -");
    console.log("-----------------------------");
    console.log("-----------------------------------------------");
    console.log("- [3/3] UPDATING SCHOOLS WITH DISABILITY DATA -");
    console.log("-----------------------------------------------");
    await updateSchoolsWithDisabilityData(schoolsCollection);
    console.log("--------------------------------------------------------");
    console.log("- [3/3] UPDATING SCHOOLS WITH DISABILITY DATA COMPLETE -");
    console.log("--------------------------------------------------------");

    client.close();
  } catch (error) {
    console.log(error.stack);
  }
}

seedDb();
