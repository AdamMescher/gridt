"use strict";

const fs = require("fs");

const csv = require("fast-csv");

const District = require("../schemas/districtSchema");

const seedDistrictsStream = async collection => {
  const filepath = "./db/seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/LEA/CRDC/CSV/LEA Characteristics.csv";
  const districts = [];
  await fs.createReadStream(filepath).pipe(csv.parse({
    headers: true
  })).on("error", error => console.error(error)).on("data", district => {
    const cleanedDistrict = new District({
      id: district["LEAID"],
      name: district["LEA_NAME"],
      city: district["LEA_CITY"],
      stateName: district["LEA_STATE_NAME"],
      stateAbbreviation: district["LEA_STATE"],
      enrollment: district["LEA_ENR"]
    });
    districts.push(cleanedDistrict);
  }).on("end", async () => {
    console.log("SEEDING DISTRICTS");
    await collection.insertMany(districts).then(console.log("SEEDING DISTRICTS COMPLETE")).catch(error => console.error(error));
  });
};

module.exports = seedDistrictsStream;