const fs = require('fs');
const csv = require('fast-csv');
const School = require('../schemas/schoolSchema');
const {
  aut,
  // db,
  // dd,
  // emn,
  // hi,
  // md,
  // mr,
  // ohi,
  // oi,
  // sld,
  // sli,
  // tbi,
  // vi,
} = require('./filepaths');

const updateSchoolsWithDisabilityData = async () => {
  let completedFiles = 0;
  const files = [aut];
  files.forEach((file, idx, arr) => {
    fs.createReadStream(file)
      .pipe(csv.parse({ headers: true }))
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
        const query = {
          COMBOKEY: {
            $in: [parseInt(school.NCESSCH, 10), school.NCESSCH.toString()],
          },
        };
        const update = { $set: stats };
        const options = { new: true };
        await School.findOneAndUpdate({
          query,
          update,
          options,
        });
      })
      .on('end', () => {
        completedFiles += 1;
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
};

module.exports = updateSchoolsWithDisabilityData;
