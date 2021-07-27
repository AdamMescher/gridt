/* eslint-disable no-console */
const fs = require('fs');
const csv = require('fast-csv');
const MultiStream = require('multistream');
const School = require('../schemas/schoolSchema');

// const basePath =
// './seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/SCH/EDFacts/CSV/ID 74 SCH - Race by Sex by Disability plus LEP';
// const autFilepath = `${basePath}_AUT.csv`;
// const dbFilepath = `${basePath}_DB.csv`;
// const ddFilepath = `${basePath}_DD.csv`;
// const emnFilepath = `${basePath}_EMN.csv`;
// const hiFilepath = `${basePath}_HI.csv`;
// const mdFilepath = `${basePath}_MD.csv`;
// const mrFilepath = `${basePath}_MR.csv`;
// const ohiFilepath = `${basePath}_OHI.csv`;
// const oiFilepath = `${basePath}_OI.csv`;
// const sldFilepath = `${basePath}_SLD.csv`;
// const sliFilepath = `${basePath}_SLI.csv`;
// const tbiFilepath = `${basePath}_TBI.csv`;
// const viFilepath = `${basePath}_VI.csv`;

// const addAllSchoolsStream = fs
//   .createReadStream(schoolsFilepath)
//   .pipe(csv.parse({ headers: true }))
//   .on('data', (school) => {
//     console.log('SCHOOL SCHOOL SCHOOL');
//     const newSchool = new School({
//       id: school.SCHID,
//       comboKey: school.COMBOKEY,
//       name: school.SCH_NAME,
//       grades: {
//         ps: school.SCH_GRADE_PS === 'Yes',
//         kg: school.SCH_GRADE_KG === 'Yes',
//         g01: school.SCH_GRADE_G01 === 'Yes',
//         g02: school.SCH_GRADE_G02 === 'Yes',
//         g03: school.SCH_GRADE_G03 === 'Yes',
//         g04: school.SCH_GRADE_G04 === 'Yes',
//         g05: school.SCH_GRADE_G05 === 'Yes',
//         g06: school.SCH_GRADE_G06 === 'Yes',
//         g07: school.SCH_GRADE_G07 === 'Yes',
//         g08: school.SCH_GRADE_G08 === 'Yes',
//         g09: school.SCH_GRADE_G09 === 'Yes',
//         g10: school.SCH_GRADE_G10 === 'Yes',
//         g11: school.SCH_GRADE_G11 === 'Yes',
//         g12: school.SCH_GRADE_G12 === 'Yes',
//         ug: school.SCH_GRADE_UG === 'Yes',
//       },
//       isSped: school.SCH_STATUS_MAGNET === 'Yes',
//       isMagnet: school.SCH_STATUS_MAGNET === 'Yes',
//       isCharter: school.SCH_STATUS_CHARTER === 'Yes',
//       stateName: school.LEA_STATE_NAME,
//       stateAbbreviation: school.LEA_STATE,
//       districtId: school.LEAID,
//       districtName: school.LEA_NAME,
//       disabilities: {},
//     });
//     allSchools.push(newSchool);
//   })
//   .on('end', async () => {
//     await collection
//       .insertMany(allSchools)
//       .then(console.log('SCHOOLS SEEDED SUCCESSFULLY'))
//       .catch((error) => console.error(error));
//   })
// .on('error', (err) => console.error(err));

const seedSchoolsStream = () => {
  const testFilepath = './sample.csv';
  const testStream = fs
    .createReadStream(testFilepath)
    .pipe(csv.parse({ headers: true }))
    .on('data', (row) => {
      console.log(row);
    })
    .on('end', () => {
      console.log('PART 1 DONE');
    })
    .on('error', (err) => {
      console.error(err);
    });
  const streams = [testStream];
  // const schoolsFilepath =
  //   './server/db/seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/SCH/CRDC/CSV/School Characteristics.csv';
  // eslint-disable-next-line no-new
  new MultiStream(streams);
  // console.log(thing);
};

module.exports = seedSchoolsStream;
