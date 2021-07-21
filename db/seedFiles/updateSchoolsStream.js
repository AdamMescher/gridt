const fs = require("fs");
const csv = require("fast-csv");
const disabilityAbbreviations = require("./disabilityAbbreviations");

const updateSchoolStream = async (collection) => {
  const basePath =
    "./seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/SCH/EDFacts/CSV/ID 74 SCH - Race by Sex by Disability plus LEP";
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
  for (let i = 0; i < filepaths.length; i++) {
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
        const options = { new: true };
        switch (i) {
          case 0:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.aut": stats } },
              options
            );
            break;
          case 1:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.db": stats } },
              options
            );
            break;
          case 2:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.dd": stats } },
              options
            );
            break;
          case 3:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.emn": stats } },
              options
            );
            break;
          case 4:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.hi": stats } },
              options
            );
            break;
          case 5:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.md": stats } },
              options
            );
            break;
          case 6:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.mr": stats } },
              options
            );
            break;
          case 7:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.ohi": stats } },
              options
            );
            break;
          case 8:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.oi": stats } },
              options
            );
            break;
          case 9:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.sld": stats } },
              options
            );
            break;
          case 10:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.sli": stats } },
              options
            );
            break;
          case 11:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.tbi": stats } },
              options
            );
            break;
          case 12:
            await collection.findOneAndUpdate(
              query,
              { $set: { "disabilities.vi": stats } },
              options
            );
            break;
        }
      })
      .on("end", () => {
        console.log(`FILE ${i + 1} / ${filepaths.length} COMPLETE`);
      });
  }
};

module.exports = updateSchoolStream;
