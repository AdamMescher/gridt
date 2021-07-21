const reader = require("xlsx");
const District= require('../schemas/districtSchema');

const seedDistricts = async (collection) => {
  const file = reader.readFile('./seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/LEA/CRDC/CSV/LEA Characteristics.csv');
  const sheets = file.SheetNames;
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    for (let j = 0; j < temp.length; j++) {
      const district = temp[j];
      const cleanedDistrict = new District({
        id: district["LEAID"],
        name: district["LEA_NAME"],
        city: district["LEA_CITY"],
        stateName: district["LEA_STATE_NAME"],
        stateAbbreviation: district["LEA_STATE"],
        enrollment: district["LEA_ENR"],
      });
      await collection.insertOne(cleanedDistrict);
    }
  }
};

module.exports = seedDistricts;
