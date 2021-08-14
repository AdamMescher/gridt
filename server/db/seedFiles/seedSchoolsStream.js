const fs = require('fs');
const csv = require('fast-csv');
const {
  allSchools,
  aut,
  db,
  dd,
  emn,
  hi,
  md,
  mr,
  ohi,
  oi,
  sld,
  sli,
  tbi,
  vi,
} = require('./filepaths');

const seedSchoolsStream = async (collection) => {
  // eslint-disable-next-line no-console
  console.log('[6/6] STARTING SEEDING SCHOOLS');
  const files = [aut, db, dd, emn, hi, md, mr, ohi, oi, sld, sli, tbi, vi];
  fs.createReadStream(allSchools)
    .pipe(csv.parse({ headers: true }))
    .on('error', (err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    })
    .on('data', async (school) => {
      await collection.insertOne(school);
    })
    .on('end', async () => {
      // eslint-disable-next-line no-console
      console.log('- ALL SCHOOLS SEEDED');
      // eslint-disable-next-line no-console
      console.log('- UPDATING SCHOOLS WITH DISABILITY DATA');
      let completedFiles = 0;
      files.forEach((file, idx, arr) => {
        fs.createReadStream(file)
          .pipe(csv.parse({ headers: true }))
          // eslint-disable-next-line no-console
          .on('error', (error) => console.error(error))
          .on('data', async (school) => {
            const stats = {
              [school.DISABILITY_CATEGORY]: {
                DISABILITY_CATEGORY: school.DISABILITY_CATEGORY,
                TOTAL_STUDENTS_REPORTED: school.TOTAL_STUDENTS_REPORTED,
                TOT_ENR_M: school.TOT_ENR_M,
                TOT_ENR_F: school.TOT_ENR_F,
                AM_M_7: school.AM_M_7,
                AS_M_7: school.AS_M_7,
                BL_M_7: school.BL_M_7,
                HI_M_7: school.HI_M_7,
                PI_M_7: school.PI_M_7,
                TR_M_7: school.TR_M_7,
                WH_M_7: school.WH_M_7,
                AM_F_7: school.AM_F_7,
                AS_F_7: school.AS_F_7,
                BL_F_7: school.BL_F_7,
                HI_F_7: school.HI_F_7,
                PI_F_7: school.PI_F_7,
                TR_F_7: school.TR_F_7,
                WH_F_7: school.WH_F_7,
              },
            };
            const query = { COMBOKEY: school.NCESSCH };
            const update = { $set: stats };
            const options = { new: true };
            await collection.findOneAndUpdate(query, update, options);
          })
          .on('end', () => {
            completedFiles += 1;
            // eslint-disable-next-line no-console
            console.log(`- [${completedFiles}/${arr.length}] FILES COMPLETED`);
            if (completedFiles === arr.length) {
              // eslint-disable-next-line no-console
              console.log('DISABILITY DATA UPDATED FOR ALL SCHOOLS');
              // eslint-disable-next-line no-console
              console.log('ALL SCHOOLS SEEDED');
              // eslint-disable-next-line no-console
              console.log('------------------------------');
              // eslint-disable-next-line no-console
              console.log('- GRIDT SEEDED SUCCESSFULLY! -');
              // eslint-disable-next-line no-console
              console.log('------------------------------', '\n');
              // eslint-disable-next-line no-console
            }
          });
      });
    });
};

module.exports = seedSchoolsStream;
