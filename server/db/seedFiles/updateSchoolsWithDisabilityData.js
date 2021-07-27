const reader = require("xlsx");

const updateSchoolsWithDisabilityData = async (collection) => {
  const basePath =
    "./seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/SCH/EDFacts/CSV/ID 74 SCH - Race by Sex by Disability plus LEP";
  const plusAut = reader.readFile(`${basePath}_AUT.csv`);
  const plusDb = reader.readFile(`${basePath}_DB.csv`);
  const plusDd = reader.readFile(`${basePath}_DD.csv`);
  const plusEmn = reader.readFile(`${basePath}_EMN.csv`);
  const plusHi = reader.readFile(`${basePath}_HI.csv`);
  const plusMd = reader.readFile(`${basePath}_MD.csv`);
  const plusMr = reader.readFile(`${basePath}_MR.csv`);
  const plusOhi = reader.readFile(`${basePath}_OHI.csv`);
  const plusOi = reader.readFile(`${basePath}_OI.csv`);
  const plusSld = reader.readFile(`${basePath}_SLD.csv`);
  const plusSli = reader.readFile(`${basePath}_SLI.csv`);
  const plusTbi = reader.readFile(`${basePath}_TBI.csv`);
  const plusVi = reader.readFile(`${basePath}_VI.csv`);
  const files = [
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
  for (let i = 0; i < files.length; i++) {
    console.log(`PROCESSING FILE [${i + 1} OF ${files.length}]`);
    const file = files[i];
    const sheets = file.SheetNames;
    for (let j = 0; j < sheets.length; j++) {
      const schools = reader.utils.sheet_to_json(file.Sheets[sheets[j]]);
      for (let q = 0; q < schools.length; q++) {
        if (q % 10000 === 0) {
          console.log(`BATCH ${q} / ${q + 10000}`);
        }
        const school = schools[q];
        const query = { comboKey: school.NCESSCH };
        const options = { new: true };
        const stats = {
          am: { m: school.AM_M_7, f: school.AM_F_7 },
          as: { m: school.AS_M_7, f: school.AS_F_7 },
          bl: { m: school.BL_M_7, f: school.BL_F_7 },
          hi: { m: school.HI_M_7, f: school.HI_F_7 },
          mu: { m: school.MU_M_7, f: school.MU_F_7 },
          pi: { m: school.PI_M_7, f: school.PI_F_7 },
          wh: { m: school.WH_M_7, f: school.WH_F_7 },
        };
        const update = {
          $set: { disability: stats },
        };
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
      }
    }
  }
};

module.exports = updateSchoolsWithDisabilityData;
