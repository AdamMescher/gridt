const School = require('../schemas/schoolSchema');

const seedSchools = async (collection) => {
  const file = reader.readFile(
    "./seedData/2017-18-crdc-data-corrected-publication 2/2017-18 Public-Use Files/Data/SCH/CRDC/CSV/School Characteristics.csv"
  );

  const sheets = file.SheetNames;
  for (let i = 0; i < sheets.length; i++) {
    const schools = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    for (let j = 0; j < schools.length; j++) {
      const school = schools[j];
      const cleanedSchool = new School({
        id: school["SCHID"],
        comboKey: school["COMBOKEY"],
        name: school["SCH_NAME"],
        grades: {
          ps: school["SCH_GRADE_PS"] === "Yes",
          kg: school["SCH_GRADE_KG"] === "Yes",
          g01: school["SCH_GRADE_G01"] === "Yes",
          g02: school["SCH_GRADE_G02"] === "Yes",
          g03: school["SCH_GRADE_G03"] === "Yes",
          g04: school["SCH_GRADE_G04"] === "Yes",
          g05: school["SCH_GRADE_G05"] === "Yes",
          g06: school["SCH_GRADE_G06"] === "Yes",
          g07: school["SCH_GRADE_G07"] === "Yes",
          g08: school["SCH_GRADE_G08"] === "Yes",
          g09: school["SCH_GRADE_G09"] === "Yes",
          g10: school["SCH_GRADE_G10"] === "Yes",
          g11: school["SCH_GRADE_G11"] === "Yes",
          g12: school["SCH_GRADE_G12"] === "Yes",
          ug: school["SCH_GRADE_UG"] === "Yes",
        },
        isSped: school["SCH_STATUS_MAGNET"] === "Yes",
        isMagnet: school["SCH_STATUS_MAGNET"] === "Yes",
        isCharter: school["SCH_STATUS_CHARTER"] === "Yes",
        stateName: school["LEA_STATE_NAME"],
        stateAbbreviation: school["LEA_STATE"],
        districtId: school["LEAID"],
        districtName: school["LEA_NAME"],
        disabilities: {}
      });
      await collection.insertOne(cleanedSchool);
    }
  }
};

module.exports = seedSchools;
