const fs = require("fs");
const csv = require("fast-csv");

const updateSchoolStream = async (collection) => {
  const basePath =
    "./db/seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/SCH/EDFacts/CSV/ID 74 SCH - Race by Sex by Disability plus LEP";
  console.log("UPDATING SCHOOLS");
  const plusAut = `${basePath}_AUT.csv`;
  const plusDb = `${basePath}_DB.csv`;
  const plusDd = `${basePath}_DD.csv`;
  const plusEmn = `${basePath}_EMN.csv`;
  const plusHi = `${basePath}_HI.csv`;
  const plusMd = `${basePath}_MD.csv`;
  const plusMr = `${basePath}_MR.csv`;
  const plusOhi = `${basePath}_OHI.csv`;
  const plusOi = `${basePath}_OI.csv`;
  const plusSld = `${basePath}_SLD.csv`;
  const plusSli = `${basePath}_SLI.csv`;
  const plusTbi = `${basePath}_TBI.csv`;
  const plusVi = `${basePath}_VI.csv`;

  const filepaths = [
    plusAut,
    plusDb,
    plusDd,
    plusEmn,
    plusHi,
    plusMd,
    plusMr,
    plusOhi,
    plusOi,
    plusSld,
    plusSli,
    plusTbi,
    plusVi,
  ];

  var promises = filepaths.map(
    (file) =>
      new Promise((resolve, reject) => {
        await fs
          .createReadStream(filepaths[i])
          .pipe(csv.parse({ headers: true }))
          .on("error", (err) => console.error(err))
          .on("data", async (school) => {
            const stats = {
              am: { m: school.AM_M_7, f: school.AM_F_7 },
              as: { m: school.AS_M_7, f: school.AS_F_7 },
              bl: { m: school.BL_M_7, f: school.BL_F_7 },
              hi: { m: school.HI_M_7, f: school.HI_F_7 },
              mu: { m: school.MU_M_7, f: school.MU_F_7 },
              pi: { m: school.PI_M_7, f: school.PI_F_7 },
              wh: { m: school.WH_M_7, f: school.WH_F_7 },
            };

            const query = { comboKey: parseInt(school.NCESSCH.toString(), 10) };
            const update = { $set: { [school.DISABILITY_CATEGORY]: stats } };
            const options = { new: true };
            await collection.findOneAndUpdate(query, update, options);
          })
          .on("end", () => {
            console.log(`FILE ${i + 1} / ${filepaths.length} COMPLETE`);
          });
      })
  );

  Promise.all(promises)
    .then((res) => console.log("SUCCESS"))
    .catch((error) => console.error(error));
};

module.exports = updateSchoolStream;
