const basePath =
  './server/db/seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/SCH/EDFacts/CSV/ID 74 SCH - Race by Sex by Disability plus LEP';
const aut = `${basePath}_AUT.csv`;
const db = `${basePath}_DB.csv`;
const dd = `${basePath}_DD.csv`;
const emn = `${basePath}_EMN.csv`;
const hi = `${basePath}_HI.csv`;
const md = `${basePath}_MD.csv`;
const mr = `${basePath}_MR.csv`;
const ohi = `${basePath}_OHI.csv`;
const oi = `${basePath}_OI.csv`;
const sld = `${basePath}_SLD.csv`;
const sli = `${basePath}_SLI.csv`;
const tbi = `${basePath}_TBI.csv`;
const vi = `${basePath}_VI.csv`;

const filepaths = {
  allSchools: './server/db/seedData/Dissertation_RAW_2_GRIDT.csv',
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
};

module.exports = filepaths;
