# Gender and Race Intersectional Disproportionality-Tool

Audrey Ford's GRID-T

Suggested citation: Ford, A.J. (2021). Gender and Race Intersectional Disproportionality-Tool. grid-t.com

Live Site: https://grid-t.com/

| Netlify Build Status  | Heroku Environment Status |
| ------------- | ------------- |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/e86b99c3-8e6c-4886-b30d-c427cd968e51/deploy-status)](https://app.netlify.com/sites/priceless-wilson-fee0d4/deploys)  | ![](https://heroku-status-badges.herokuapp.com/gridt-apollo)  |

#### Screenshot

<img width="1680" alt="Screen Shot 2022-02-03 at 12 35 47 PM" src="https://user-images.githubusercontent.com/6540117/152431599-ae904630-00c5-475d-b47c-d94079d55973.png">

Built with
- Create React App (https://create-react-app.dev/)
- Apollo GraphQL (https://www.apollographql.com/)
- GraphQL (https://graphql.org/)
- GraphQL Compose | graphql-compose-mongoose (https://graphql-compose.github.io/)
- React Router (https://reactrouter.com/)
- localForage (https://localforage.github.io/localForage/)
- Victory for data visualization (https://formidable.com/open-source/victory/)
- React Select (https://react-select.com/home)
- React Table (https://react-table.tanstack.com/)

----

Database hosted on Mongo Atlas (https://www.mongodb.com/atlas/database)

Apollo Server hosted on Heroku (https://www.heroku.com/home)

Frontend hosted on Netlify (https://www.netlify.com/)

----

### MONGOIMPORT

#### Districts
```bash
mongoimport --uri mongodb+srv://usename:password@cluster0.t4m7n.mongodb.net/gridt --drop --collection districts --type csv --file ~/dev/gridt/server/db/seedData/districts.csv --columnsHaveTypes --fields="LEA_STATE.string()","LEA_STATE_NAME.string()","LEAID.string()","LEA_NAME.string()","LEA_ADDRESS.string()","LEA_CITY.string()","LEA_ZIP.string()","CJJ.string()","LEA_ENR.auto()","LEA_ENR_NONLEAFAC.auto()","LEA_SCHOOLS.auto()"
```

#### Schools

While the lines are long, the idea is simple - import LEAID and SCHID as string type in Mongo without otherwise interfering with  mongoimport on other fields. `.string()` property imports as string while `.auto()` lets mongoimport determine the type.

```bash
mongoimport --uri mongodb+srv://username:password@url --drop --collection schools --type csv --file ~/dev/gridt/server/db/seedData/schools_3.csv --columnsHaveTypes --fields="LEA_STATE.string()","LEA_STATE_NAME.string()","LEAID.string()","LEA_NAME.string()","SCHID.string()","SCH_NAME.string()","COMBOKEY.string()","SCH_IDEAENR_HI_M.auto()","SCH_ENR_HI_M.auto()","RI_HI_M.auto()","TOT_IDEA_W/O_HI_M.auto()","TOT_ENR_W/O_HI_M.auto()","RI_W/O_HI_M.auto()","RR_HI_M_POP.auto()","RR_HI_M_WH_M.auto()","SCH_IDEAENR_HI_F.auto()","SCH_ENR_HI_F.auto()","RI_HI_F.auto()","TOT_IDEA_W/O_HI_F.auto()","TOT_ENR_W/O_HI_F.auto()","RI_W/O_HI_F.auto()","RR_HI_F_POP.auto()","RR_HI_F_WH_F.auto()","SCH_IDEAENR_AM_M.auto()","SCH_ENR_AM_M.auto()","RI_AM_M.auto()","TOT_IDEA_W/O_AM_M.auto()","TOT_ENR_W/O_AM_M.auto()","RI_W/O_AM_M.auto()","RR_AM_M_POP.auto()","RR_AM_M_WH_M.auto()","SCH_IDEAENR_AM_F.auto()","SCH_ENR_AM_F.auto()","RI_AM_F.auto()","TOT_IDEA_W/O_AM_F.auto()","TOT_ENR_W/O_AM_F.auto()","RI_W/O_AM_F.auto()","RR_AM_F_POP.auto()","RR_AM_F_WH_F.auto()","SCH_IDEAENR_AS_M.auto()","SCH_ENR_AS_M.auto()","RI_AS_M.auto()","TOT_IDEA_W/O_AS_M.auto()","TOT_ENR_W/O_AS_M.auto()","RI_W/O_AS_M.auto()","RR_AS_M_POP.auto()","RR_AS_M_WH_M.auto()","SCH_IDEAENR_AS_F.auto()","SCH_ENR_AS_F.auto()","RI_AS_F.auto()","TOT_IDEA_W/O_AS_F.auto()","TOT_ENR_W/O_AS_F.auto()","RI_W/O_AS_F.auto()","RR_AS_F_POP.auto()","RR_AS_F_WH_F.auto()","SCH_IDEAENR_HP_M.auto()","SCH_ENR_HP_M.auto()","RI_HP_M.auto()","TOT_IDEA_W/O_HP_M.auto()","TOT_ENR_W/O_HP_M.auto()","RI_W/O_HP_M.auto()","RR_HP_M_POP.auto()","RR_HP_M_WH_M.auto()","SCH_IDEAENR_HP_F.auto()","SCH_ENR_HP_F.auto()","RI_HP_F.auto()","TOT_IDEA_W/O_HP_F.auto()","TOT_ENR_W/O_HP_F.auto()","RI_W/O_HP_F.auto()","RR_HP_F_POP.auto()","RR_HP_F_WH_F.auto()","SCH_IDEAENR_BL_M.auto()","SCH_ENR_BL_M.auto()","RI_BL_M.auto()","TOT_IDEA_W/O_BL_M.auto()","TOT_ENR_W/O_BL_M.auto()","RI_W/O_BL_M.auto()","RR_BL_M_POP.auto()","RR_BL_M_WH_M.auto()","SCH_IDEAENR_BL_F.auto()","SCH_ENR_BL_F.auto()","RI_BL_F.auto()","TOT_IDEA_W/O_BL_F.auto()","TOT_ENR_W/O_BL_F.auto()","RI_W/O_BL_F.auto()","RR_BL_F_POP.auto()","RR_BL_F_WH_F.auto()","SCH_IDEAENR_TR_M.auto()","SCH_ENR_TR_M.auto()","RI_TR_M.auto()","TOT_IDEA_W/O_TR_M.auto()","TOT_ENR_W/O_TR_M.auto()","RI_W/O_TR_M.auto()","RR_TR_M_POP.auto()","RR_TR_M_WH_M.auto()","SCH_IDEAENR_TR_F.auto()","SCH_ENR_TR_F.auto()","RI_TR_F.auto()","TOT_IDEA_W/O_TR_F.auto()","TOT_ENR_W/O_TR_F.auto()","RI_W/O_TR_F.auto()","RR_TR_F_POP.auto()","RR_TR_F_WH_F.auto()","SCH_IDEAENR_WH_M.auto()","SCH_ENR_WH_M.auto()","TOT_IDEA_W/O_WH_M.auto()","TOT_ENR_W/O_WH_M.auto()","RI_W/O_WH_M.auto()","RR_WH_M_POP.auto()","RI_WH_M.auto()","RR_WH_M_WH_M.auto()","SCH_IDEAENR_WH_F.auto()","SCH_ENR_WH_F.auto()","TOT_IDEA_W/O_WH_F.auto()","TOT_ENR_W/O_WH_F.auto()","RI_W/O_WH_F.auto()","RR_WH_F_POP.auto()","RI_WH_F.auto()","RR_WH_F_WH_F.auto()","TOT_IDEAENR_M.auto()","TOT_IDEAENR_F.auto()","TOT_IDEA_ENR.auto()","TOT_ENR_M.auto()","TOT_ENR_F.auto()","TOT_ENR.auto()","SCH_IDEA_WH_TOT.auto()","SCH_ENR_WH_TOT.auto()","RI_WH-TOT.auto()","TOT_IDEA_W/O_WH_TOT.auto()","TOT_ENR_W/O_WH_TOT.auto()","RI_W/O_WH_TOT.auto()","RR_WH_TOT_POP.auto()","RR_WH_TOT_WH_TOT.auto()","RR_HI_M_WH_TOT.auto()","RR_HI_F_WH_TOT.auto()","RR_AM_M_WH_TOT.auto()","RR_AM_F_WH_TOT.auto()","RR_AS_M_WH_TOT.auto()","RR_AS_F_WH_TOT.auto()","RR_HP_M_WH_TOT.auto()","RR_HP_F_WH_TOT.auto()","RR_BL_M_WH_TOT.auto()","RR_BL_F_WH_TOT.auto()","RR_TR_M_WH_TOT.auto()","RR_TR_F_WH_TOT.auto()"
```

#### AUTISM

```bash
mongoimport --uri mongodb+srv://usename:password@uri --drop --collection autism --type csv --file ~/dev/gridt/server/db/seedData/autism.csv --columnsHaveTypes --fields="LEA_STATE.string()","LEA_STATE_NAME.string()","NCESLEAID.string()","LEA_NAME.string()","SCHID.string()","SCHOOL_NAME.string()","COMBOKEY.string()","JJ.auto()","DISABILITY_CATEGORY.auto()","AM_M_7.auto()","AS_M_7.auto()","BL_M_7.auto()","HI_M_7.auto()","MU_M_7.auto()","PI_M_7.auto()","WH_M_7.auto()","AM_F_7.auto()","AS_F_7.auto()","BL_F_7.auto()","HI_F_7.auto()","MU_F_7.auto()","PI_F_7.auto()","WH_F_7.auto()","TOTAL_STUDENTS_REPORTED.auto()","SCH_AUT_ENR_HI_M.auto()","SCH_ENR_HI_M.auto()","RI_HI_M_AUT.auto()","TOT_AUT_W/O_HI_M.auto()","TOT_ENR_W/O_HI_M.auto()","RI_W/O_HI_M_AUT.auto()","RR_HI_M_POP_AUT.auto()","RI_WH_M_AUT_1.auto()","RR_HI_M_WH_M_AUT.auto()","SCH_AUT_ENR_HI_F.auto()","SCH_ENR_HI_F.auto()","RI_HI_F_AUT.auto()","TOT_AUT_W/O_HI_F.auto()","TOT_ENR_W/O_HI_F.auto()","RI_W/O_HI_F.auto()","RR_HI_F_POP_AUT.auto()","RI_WH_F_AUT_2.auto()","RR_HI_F_WH_F_AUT.auto()","SCH_AUT_ENR_AM_M.auto()","SCH_ENR_AM_M.auto()","RI_AM_M_AUT.auto()","TOT_AUT_W/O_AM_M.auto()","TOT_ENR_W/O_AM_M.auto()","RI_W/O_AM_M.auto()","RR_AM_M_POP_AUT.auto()","RI_WH_M_AUT_3.auto()","RR_AM_M_WH_M_AUT.auto()","SCH_AUT_ENR_AM_F.auto()","SCH_ENR_AM_F.auto()","RI_AM_F_AUT.auto()","TOT_AUT_W/O_AM_F.auto()","TOT_ENR_W/O_AM_F.auto()","RI_W/O_AM_F_AUT.auto()","RR_AM_F_POP_AUT.auto()","RI_WH_F_AUT_4.auto()","RR_AM_F_WH_F_AUT.auto()","SCH_AUT_ENR_AS_M.auto()","SCH_ENR_AS_M.auto()","RI_AS_M_AUT.auto()","TOT_AUT_W/O_AS_M.auto()","TOT_ENR_W/O_AS_M.auto()","RI_W/O_AS_M_AUT.auto()","RR_AS_M_POP_AUT.auto()","RI_WH_M_AUT_5.auto()","RR_AS_M_WH_M_AUT.auto()","SCH_AUT_ENR_AS_F.auto()","SCH_ENR_AS_F.auto()","RI_AS_F_AUT.auto()","TOT_AUT_W/O_AS_F.auto()","TOT_ENR_W/O_AS_F.auto()","RI_W/O_AS_F_AUT.auto()","RR_AS_F_POP_AUT.auto()","RI_WH_F_AUT_6.auto()","RR_AS_F_WH_F_AUT.auto()","SCH_AUT_ENR_HP_M.auto()","SCH_ENR_HP_M.auto()","RI_HP_M_AUT.auto()","TOT_AUT_W/O_HP_M.auto()","TOT_ENR_W/O_HP_M.auto()","RI_W/O_HP_M_AUT.auto()","RR_HP_M_POP_AUT.auto()","RI_WH_M_AUT_7.auto()","RR_HP_M_WH_M_AUT.auto()","SCH_AUT_ENR_HP_F.auto()","SCH_ENR_HP_F.auto()","RI_HP_F_AUT.auto()","TOT_AUT_W/O_HP_F.auto()","TOT_ENR_W/O_HP_F.auto()","RI_W/O_HP_F.auto()","RR_HP_F_POP_AUT.auto()","RI_WH_F_AUT_8.auto()","RR_HP_F_WH_F.auto()","SCH_AUT_ENR_BL_M.auto()","SCH_ENR_BL_M.auto()","RI_BL_M_AUT.auto()","TOT_AUT_W/O_BL_M.auto()","TOT_ENR_W/O_BL_M.auto()","RI_W/O_BL_M.auto()","RR_BL_MPOP_AUT.auto()","RI_WH_M_AUT_9.auto()","RR_BL_M_WH_M_AUT.auto()","SCH_AUT_ENR_BL_F.auto()","SCH_ENR_BL_F.auto()","RI_BL_F_AUT.auto()","TOT_AUT_W/O_BL_F.auto()","TOT_ENR_W/O_BL_F.auto()","RI_W/O_BL_F.auto()","RR_BL_F_POP_AUT.auto()","RI_WH_F_AUT_10.auto()","RR_BL_F_WH_F_AUT.auto()","SCH_AUT_ENR_TR_M.auto()","SCH_ENR_TR_M.auto()","RI_TR_M_AUT.auto()","TOT_AUT_W/O_TR_M.auto()","TOT_ENR_W/O_TR_M.auto()","RI_W/O_TR_M.auto()","RR_TR_M_POP_AUT.auto()","RI_WH_M_AUT_11.auto()","RR_TR_M_WH_M_AUT.auto()","SCH_AUT_ENR_TR_F.auto()","SCH_ENR_TR_F.auto()","RI_TR_F_AUT.auto()","TOT_AUT_W/O_TR_F.auto()","TOT_ENR_W/O_TR_F.auto()","RI_W/O_TR_F.auto()","RR_TR_F_POP_AUT.auto()","RI_WH_F_AUT_12.auto()","RR_TR_F_WH_F_AUT.auto()","SCH_AUT_ENR_WH_M.auto()","SCH_ENR_WH_M.auto()","RI_WH_M_AUT_13.auto()","TOT_AUT_W/O_WH_M.auto()","TOT_ENR_W/O_WH_M.auto()","RI_W/O_WH_M.auto()","RR_WH_M_POP_AUT.auto()","SCH_AUT_ENR_WH_F.auto()","SCH_ENR_WH_F.auto()","RI_WH_F_AUT_14.auto()","TOT_AUT_W/O_WH_F.auto()","TOT_ENR_W/O_WH_F.auto()","RI_W/O_WH_F.auto()","RR_WH_F_POP_AUT.auto()"
```

#### DEAF BLINDNESS
```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection deafblindnesses --type csv --file ~/dev/gridt/server/db/seedData/deaf-blindness.csv --columnsHaveTypes --fields="LEA_STATE.string()","LEA_STATE_NAME.string()","NCESLEAID.string()","LEA_NAME.string()","SCHID.string()","SCHOOL_NAME.string()","COMBOKEY.string()","JJ.auto()","DISABILITY_CATEGORY.string()","AM_M_7.auto()","AS_M_7.auto()","BL_M_7.auto()","HI_M_7.auto()","MU_M_7.auto()","PI_M_7.auto()","WH_M_7.auto()","AM_F_7.auto()","AS_F_7.auto()","BL_F_7.auto()","HI_F_7.auto()","MU_F_7.auto()","PI_F_7.auto()","WH_F_7.auto()","TOTAL_STUDENTS_REPORTED.auto()","SCH_DB_ENR_HI_M.auto()","SCH__ENR_HI_M.auto()","RI_HI_M_DB.auto()","TOT_DB_WO_HI_M.auto()","TOT_ENR_WO_HI_M.auto()","RI_WO_HI_M_DB.auto()","RR_HI_M_POP_DB.auto()","RI_WH_M_DB_1.auto()","RR_HI_M_WH_M_DB.auto()","SCH_DB_ENR_HI_F.auto()","SCH_ENR_HI_F.auto()","RI_HI_F_DB.auto()","TOT_DB_WO_HI_F.auto()","TOT_ENR_WO_HI_F.auto()","RI_WO_HI_F_DB.auto()","RR_HI_F_POP_DB.auto()","RI_WH_F_DB_2.auto()","RR_HI_F_WH_F_DB.auto()","SCH_DB_ENR_AM_M.auto()","SCH_ENR_AM_M.auto()","RI_AM_M_DB.auto()","TOT_DB_WO_AM_M.auto()","TOT_ENR_WO_AM_M.auto()","RI_WO_AM_M_DB.auto()","RR_AM_M_POP_DB.auto()","RI_WH_M_DB_3.auto()","RR_AM_M_WH_M_DB.auto()","SCH_DB_ENR_AM_F.auto()","SCH_ENR_AM_F.auto()","RI_AM_F_DB.auto()","TOT_DB_WO_AM_F.auto()","TOT_ENR_WO_AM_F.auto()","RI_WO_AM_F_DB.auto()","RR_AM_F_POP_DB.auto()","RI_WH_F_DB_4.auto()","RR_AM_F_WH_F_DB.auto()","SCH_DB_ENR_AS_M.auto()","SCH_ENR_AS_M.auto()","RI_AS_M_DB.auto()","TOT_DB_WO_AS_M.auto()","TOT_ENR_WO_AS_M.auto()","RI_WO_AS_M_DB.auto()","RR_AS_M_POP_DB.auto()","RI_WH_M_DB_5.auto()","RR_AS_M_WH_M_DB.auto()","SCH_DB_ENR_AS_F.auto()","SCH_ENR_AS_F.auto()","RI_AS_F_DB.auto()","TOT_DB_WO_AS_F.auto()","TOT_ENR_WO_AS_F.auto()","RI_WO_AS_F_DB.auto()","RR_AS_F_POP_DB.auto()","RI_WH_F_DB_6.auto()","RR_AS_F_WH_F_DB.auto()","SCH_DB_ENR_HP_M.auto()","SCH_ENR_HP_M.auto()","RI_HP_M_DB.auto()","TOT_DB_WO_HP_M.auto()","TOT_ENR_WO_HP_M.auto()","RI_WO_HP_M_DB.auto()","RR_HP_M_POP_DB.auto()","RI_WH_M_DB_7.auto()","RR_HP_M_WH_M_DB.auto()","SCH_DB_ENR_HP_F.auto()","SCH_ENR_HP_F.auto()","RI_HP_F_DB.auto()","TOT_DB_WO_HP_F.auto()","TOT_ENR_WO_HP_F.auto()","RI_WO_HP_F.auto()","RR_HP_F_POP_DB.auto()","RI_WH_F_DB_8.auto()","RR_HP_F_WH_F_DB.auto()","SCH_DB_ENR_BL_M.auto()","SCH_ENR_BL_M.auto()","RI_BL_M_DB.auto()","TOT_DB_WO_BL_M.auto()","TOT_ENR_WO_BL_M.auto()","RI_WO_BL_M_DB.auto()","RR_BL_M_POP_DB.auto()","RI_WH_M_DB_9.auto()","RR_BL_M_WH_M_DB.auto()","SCH_DB_ENR_BL_F.auto()","SCH_ENR_BL_F.auto()","RI_BL_F_DB.auto()","TOT_DB_WO_BL_F.auto()","TOT_EN_WO_BL_F.auto()","RI_WO_BL_F_DB.auto()","RR_BL_F_POP_DB.auto()","RI_WH_F_DB_10.auto()","RR_BL_F_WH_F_DB.auto()","SCH_DB_ENR_TR_M.auto()","SCH_ENR_TR_M.auto()","RI_TR_M_DB.auto()","TOT_DB_WO_TR_M.auto()","TOT_ENR_WO_TR_M.auto()","RI_WO_TR_M_DB.auto()","RR_TR_M_POP_DB.auto()","RI_WH_M_DB_11.auto()","RR_TR_M_WH_M_DB.auto()","SCH_DB_ENR_TR_F.auto()","SCH_ENR_TR_F.auto()","RI_TR_F_DB.auto()","TOT_DB_WO_TR_F.auto()","TOT_ENR_WO_TR_F.auto()","RI_WO_TR_F_DB.auto()","RR_TR_F_POP_DB.auto()","RI_WH_F_DB_12.auto()","RR_TR_F_WH_F_DB.auto()","SCH_DB_ENR_WH_M.auto()","SCH_ENR_WH_M.auto()","RI_WH_M_DB_13.auto()","TOT_DB_WO_WH_M.auto()","TOT_ENR_WO_WH_M.auto()","RI_WO_WH_M_DB.auto()","RR_WH_M_POP_DB.auto()","SCH_DB_ENR_WH_F.auto()","SCH_ENR_WH_F.auto()","RI_WH_F_DB_14.auto()","TOT_DB_WO_WH_F.auto()","TOT_ENR_WO_WH_F.auto()","RI_WO_WH_F_DB.auto()","RR_WH_F_POP_DB.auto()"
```

#### DEVELOPMENTAL DELAYS

```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection developmentaldelays --type csv --file ~/dev/gridt/server/db/seedData/development-delay.csv --columnsHaveTypes --fields="LEA_STATE.string()","LEA_STATE_NAME.string()","NCESLEAID.string()","LEA_NAME.string()","SCHID.string()","SCHOOL_NAME.string()","COMBOKEY.string()","JJ.auto()","DISABILITY_CATEGORY.string()","AM_M_7.auto()","AS_M_7.auto()","BL_M_7.auto()","HI_M_7.auto()","MU_M_7.auto()","PI_M_7.auto()","WH_M_7.auto()","AM_F_7.auto()","AS_F_7.auto()","BL_F_7.auto()","HI_F_7.auto()","MU_F_7.auto()","PI_F_7.auto()","WH_F_7.auto()","TOTAL_STUDENTS_REPORTED.auto()","SCH_DB_ENR_HI_M.auto()","SCH__ENR_HI_M.auto()","RI_HI_M_AUT.auto()","TOT_AUT_WO_HI_M.auto()","TOT_ENR_WO_HI_M.auto()","RI_WO_HI_M_AUT.auto()","RR_HI_M_POP_DD.auto()","RI_WH_M_DD_1.auto()","RR_HI_M_WH_M_DD.auto()","SCH_DD_ENR_HI_F.auto()","SCH_ENR_HI_F.auto()","RI_HI_F_DD.auto()","TOT_DD_WO_HI_F.auto()","TOT_ENR_WO_HI_F.auto()","RI_WO_HI_F_DD.auto()","RR_HI_F_POP_DD.auto()","RI_WH_F_DD_2.auto()","RR_HI_F_WH_F_DD.auto()","SCH_DD_ENR_AM_M.auto()","SCH_ENR_AM_M.auto()","RI_AM_M_DD.auto()","TOT_DD_WO_AM_M.auto()","TOT_ENR_WO_AM_M.auto()","RI_WO_AM_M_DD.auto()","RR_AM_M_POP_DD.auto()","RI_WH_M_DD_3.auto()","RR_AM_M_WH_M_DD.auto()","SCH_DD_ENR_AM_F.auto()","SCH_ENR_AM_F.auto()","RI_AM_F_DD.auto()","TOT_DD_WO_AM_F.auto()","TOT_ENR_WO_AM_F.auto()","RI_WO_AM_F_DD.auto()","RR_AM_F_POP_DD.auto()","RI_WH_F_DD_4.auto()","RR_AM_F_WH_F_DD.auto()","SCH_DD_ENR_AS_M.auto()","SCH_ENR_AS_M.auto()","RI_AS_M_DD.auto()","TOT_DD_WO_AS_M.auto()","TOT_ENR_WO_AS_M.auto()","RI_WO_AS_M_DD.auto()","RR_AS_M_POP_DD.auto()","RI_WH_M_DD_5.auto()","RR_AS_M_WH_M_DD.auto()","SCH_DD_ENR_AS_F.auto()","SCH_ENR_AS_F.auto()","RI_AS_F_DD.auto()","TOT_DD_WO_AS_F.auto()","TOT_ENR_WO_AS_F.auto()","RI_WO_AS_F_DD.auto()","RR_AS_F_POP_DD.auto()","RI_WH_F_DD_6.auto()","RR_AS_F_WH_F_DD.auto()","SCH_DD_ENR_HP_M.auto()","SCH_ENR_HP_M.auto()","RI_HP_M_DD.auto()","TOT_DD_WO_HP_M.auto()","TOT_ENR_WO_HP_M.auto()","RI_WO_HP_M_DD.auto()","RR_HP_M_POP_DD.auto()","RI_WH_M_DD_7.auto()","RR_HP_M_WH_M_DD.auto()","SCH_DD_ENR_HP_F.auto()","SCH_ENR_HP_F.auto()","RI_HP_F_DD.auto()","TOT_DD_WO_HP_F.auto()","TOT_ENR_WO_HP_F.auto()","RI_WO_HP_F.auto()","RR_HP_F_POP_DD.auto()","RI_WH_F_DD_8.auto()","RR_HP_F_WH_F_DD.auto()","SCH_DD_ENR_BL_M.auto()","SCH_ENR_BL_M.auto()","RI_BL_M_DD.auto()","TOT_DD_WO_BL_M.auto()","TOT_ENR_WO_BL_M.auto()","RI_WO_BL_M_DD.auto()","RR_BL_M_POP_DD.auto()","RI_WH_M_DD_9.auto()","RR_BL_M_WH_M_DD.auto()","SCH_DD_ENR_BL_F.auto()","SCH_ENR_BL_F.auto()","RI_BL_F_DD.auto()","TOT_DD_WO_BL_F.auto()","TOT_EN_WO_BL_F.auto()","RI_WO_BL_F_DD.auto()","RR_BL_F_POP_DD.auto()","RI_WH_F_DD_10.auto()","RR_BL_F_WH_F_DD.auto()","SCH_DD_ENR_TR_M.auto()","SCH_ENR_TR_M.auto()","RI_TR_M_DD.auto()","TOT_DD_WO_TR_M.auto()","TOT_ENR_WO_TR_M.auto()","RI_WO_TR_M_DD.auto()","RR_TR_M_POP_DD.auto()","RI_WH_M_DD_11.auto()","RR_TR_M_WH_M_DD.auto()","SCH_DD_ENR_TR_F.auto()","SCH_ENR_TR_F.auto()","RI_TR_F_DD.auto()","TOT_DD_WO_TR_F.auto()","TOT_ENR_WO_TR_F.auto()","RI_WO_TR_F_DD.auto()","RR_TR_F_POP_DD.auto()","RI_WH_F_DD_12.auto()","RR_TR_F_WH_F_DD.auto()","SCH_DD_ENR_WH_M.auto()","SCH_ENR_WH_M.auto()","RI_WH_M_DD_13.auto()","TOT_DD_WO_WH_M.auto()","TOT_ENR_WO_WH_M.auto()","RI_WO_WH_M_DD.auto()","RR_WH_M_POP_DD.auto()","SCH_DD_ENR_WH_F.auto()","SCH_ENR_WH_F.auto()","RI_WH_F_DD_14.auto()","TOT_DD_WO_WH_F.auto()","TOT_ENR_WO_WH_F.auto()","RI_WO_WH_F_DD.auto()","RR_WH_F_POP_AUT.auto()",
```

#### EMOTIONAL DISTURBANCE

```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection emotionaldisturbances --type csv --file ~/dev/gridt/server/db/seedData/emotional-disturbance.csv --columnsHaveTypes --fields=""
```

#### HEARING IMPAIRMENT
```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection hearingimpairments --type csv --file ~/dev/gridt/server/db/seedData/hearing-impairment.csv --columnsHaveTypes --fields=""
```


#### INTELLECTUAL DISABILITY

```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection intellectualdisabilities --type csv --file ~/dev/gridt/server/db/seedData/intellectual-disability.csv --columnsHaveTypes --fields=""
```

#### MULTIPLE DISABILITIES

```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection multipledisabilities --type csv --file ~/dev/gridt/server/db/seedData/multiple-disabilities.csv --columnsHaveTypes --fields=""
```

#### ORTHOPEDIC IMPAIRMENT

```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection orthopedicimpairments --type csv --file ~/dev/gridt/server/db/seedData/orthopedic-impairment.csv --columnsHaveTypes --fields=""
```

#### OTHER HEALTH IMPAIRMENT

```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection otherhealthimpairments --type csv --file ~/dev/gridt/server/db/seedData/other-health-impairment.csv --columnsHaveTypes --fields=""
```

#### SPECIFIC LEARNING DISABILITY
```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection specificlearningdisabilities --type csv --file ~/dev/gridt/server/db/seedData/specific-learning-disabilitiy.csv --columnsHaveTypes --fields=""
```

#### SPEECH-LANGUAGE IMPAIRMENT
```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection speechlanguageimpairments --type csv --file ~/dev/gridt/server/db/seedData/speech-language-impairment.csv --columnsHaveTypes --fields=""
```

#### TRAUMATIC BRAIN INJURY
```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection traumaticbraininjuries --type csv --file ~/dev/gridt/server/db/seedData/traumatic-brain-injury.csv --columnsHaveTypes --fields=""
```

#### VISUAL IMPAIRMENT

```bash
mongoimport --uri mongodb+srv://username:password@uri --drop --collection visualimpairments --type csv --file ~/dev/gridt/server/db/seedData/visual-impairments.csv --columnsHaveTypes --fields="LEA_STATE.string()","LEA_STATE_NAME.string()","NCESLEAID.string()","LEA_NAME.string()","SCHID.string()","SCHOOL_NAME.string()","COMBOKEY.string()","JJ.auto()","DISABILITY_CATEGORY.string()","AM_M_7.auto()","AS_M_7.auto()","BL_M_7.auto()","HI_M_7.auto()","MU_M_7.auto()","PI_M_7.auto()","WH_M_7.auto()","AM_F_7.auto()","AS_F_7.auto()","BL_F_7.auto()","HI_F_7.auto()","MU_F_7.auto()","PI_F_7.auto()","WH_F_7.auto()","TOTAL_STUDENTS_REPORTED.auto()","SCH_VI_ENR_HI_M.auto()","SCH__ENR_HI_M.auto()","RI_HI_M_VI.auto()","TOT_VI_WO_HI_M.auto()","TOT_ENR_WO_HI_M.auto()","RI_WO_HI_M_VI.auto()","RR_HI_M_POP_VI.auto()","RI_WH_M_VI_1.auto()","RR_HI_M_WH_M_VI.auto()","SCH_VI_ENR_HI_F.auto()","SCH_ENR_HI_F.auto()","RI_HI_F_VI.auto()","TOT_VI_WO_HI_F.auto()","TOT_ENR_WO_HI_F.auto()","RI_WO_HI_F_VI.auto()","RR_HI_F_POP_VI.auto()","RI_WH_F_VI_2.auto()","RR_HI_F_WH_F_VI.auto()","SCH_VI_ENR_AM_M.auto()","SCH_ENR_AM_M.auto()","RI_AM_M_VI.auto()","TOT_VI_WO_AM_M.auto()","TOT_ENR_WO_AM_M.auto()","RI_WO_AM_M_VI.auto()","RR_AM_M_POP_VI.auto()","RI_WH_M_VI_3.auto()","RR_AM_M_WH_M_VI.auto()","SCH_VI_ENR_AM_F.auto()","SCH_ENR_AM_F.auto()","RI_AM_F_VI.auto()","TOT_VI_WO_AM_F.auto()","TOT_ENR_WO_AM_F.auto()","RI_WO_AM_F_VI.auto()","RR_AM_F_POP_VI.auto()","RI_WH_F_VI_4.auto()","RR_AM_F_WH_F_VI.auto()","SCH_VI_ENR_AS_M.auto()","SCH_ENR_AS_M.auto()","RI_AS_M_VI.auto()","TOT_VI_WO_AS_M.auto()","TOT_ENR_WO_AS_M.auto()","RI_WO_AS_M_VI.auto()","RR_AS_M_POP_VI.auto()","RI_WH_M_VI_5.auto()","RR_AS_M_WH_M_VI.auto()","SCH_VI_ENR_AS_F.auto()","SCH_ENR_AS_F.auto()","RI_AS_F_VI.auto()","TOT_VI_WO_AS_F.auto()","TOT_ENR_WO_AS_F.auto()","RI_WO_AS_F_VI.auto()","RR_AS_F_POP_VI.auto()","RI_WH_F_VI_6.auto()","RR_AS_F_WH_F_VI.auto()","SCH_VI_ENR_HP_M.auto()","SCH_ENR_HP_M.auto()","RI_HP_M_VI.auto()","TOT_VI_WO_HP_M.auto()","TOT_ENR_WO_HP_M.auto()","RI_WO_HP_M_VI.auto()","RR_HP_M_POP_VI.auto()","RI_WH_M_VI_7.auto()","RR_HP_M_WH_M_VI.auto()","SCH_VI_ENR_HP_F.auto()","SCH_ENR_HP_F.auto()","RI_HP_F_VI.auto()","TOT_VI_WO_HP_F.auto()","TOT_ENR_WO_HP_F.auto()","RI_WO_HP_F.auto()","RR_HP_F_POP_VI.auto()","RI_WH_F_VI_8.auto()","RR_HP_F_WH_F_VI.auto()","SCH_VI_ENR_BL_M.auto()","SCH_ENR_BL_M.auto()","RI_BL_M_VI.auto()","TOT_VI_WO_BL_M.auto()","TOT_ENR_WO_BL_M.auto()","RI_WO_BL_M_VI.auto()","RR_BL_M_POP_VI.auto()","RI_WH_M_VI_9.auto()","RR_BL_M_WH_M_VI.auto()","SCH_VI_ENR_BL_F.auto()","SCH_ENR_BL_F.auto()","RI_BL_F_VI.auto()","TOT_VI_WO_BL_F.auto()","TOT_EN_WO_BL_F.auto()","RI_WO_BL_F_VI.auto()","RR_BL_F_POP_VI.auto()","RI_WH_F_VI_10.auto()","RR_BL_F_WH_F_VI.auto()","SCH_VI_ENR_TR_M.auto()","SCH_ENR_TR_M.auto()","RI_TR_M_VI.auto()","TOT_VI_WO_TR_M.auto()","TOT_ENR_WO_TR_M.auto()","RI_WO_TR_M_VI.auto()","RR_TR_M_POP_VI.auto()","RI_WH_M_VI_11.auto()","RR_TR_M_WH_M_VI.auto()","SCH_VI_ENR_TR_F.auto()","SCH_ENR_TR_F.auto()","RI_TR_F_VI.auto()","TOT_VI_WO_TR_F.auto()","TOT_ENR_WO_TR_F.auto()","RI_WO_TR_F_VI.auto()","RR_TR_F_POP_VI.auto()","RI_WH_F_VI_12.auto()","RR_TR_F_WH_F_VI.auto()","SCH_VI_ENR_WH_M.auto()","SCH_ENR_WH_M.auto()","RI_WH_M_VI_13.auto()","TOT_VI_WO_WH_M.auto()","TOT_ENR_WO_WH_M.auto()","RI_WO_WH_M_VI.auto()","RR_WH_M_POP_VI.auto()","SCH_VI_ENR_WH_F.auto()","SCH_ENR_WH_F.auto()","RI_WH_F_VI_14.auto()","TOT_VI_WO_WH_F.auto()","TOT_ENR_WO_WH_F.auto()","RI_WO_WH_F_VI.auto()","RR_WH_F_POP_VI.auto()"
```
