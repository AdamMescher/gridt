const fs = require('fs');
const csv = require('fast-csv');
const District = require('../schemas/districtSchema');

const seedDistrictsStream = async () => {
  await District.deleteMany({});
  // eslint-disable-next-line no-console
  console.log('[5/6] SEEDING DISTRICTS');
  const filepath =
    './server/db/seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/LEA/CRDC/CSV/LEA Characteristics.csv';
  const districts = [];
  fs.createReadStream(filepath)
    .pipe(csv.parse({ headers: true }))
    // eslint-disable-next-line no-console
    .on('error', (error) => console.error(error))
    .on('data', (district) => {
      const cleanedDistrict = new District({
        id: district.LEAID,
        name: district.LEA_NAME,
        city: district.LEA_CITY,
        stateName: district.LEA_STATE_NAME,
        stateAbbreviation: district.LEA_STATE,
        enrollment: district.LEA_ENR,
      });
      districts.push(cleanedDistrict);
    })
    .on('end', async () => {
      await District.insertMany(districts)
        // eslint-disable-next-line no-console
        .then(console.log('[5/6] ALL DISTRICTS SEEDED SUCCESSFULLY'))
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error));
    });
};

module.exports = seedDistrictsStream;
