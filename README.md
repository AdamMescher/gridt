# Gender and Race Intersectional Disproportionality-Tool

Audrey Ford's GRID-T

Suggested citation: Ford, A.J. (2021). Gender and Race Intersectional Disproportionality-Tool. grid-t.com

Live Site: https://grid-t.com/

| Netlify Build Status  | Heroku Environment Status |
| ------------- | ------------- |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/e86b99c3-8e6c-4886-b30d-c427cd968e51/deploy-status)](https://app.netlify.com/sites/priceless-wilson-fee0d4/deploys)  | ![](https://heroku-status-badges.herokuapp.com/gridt-apollo)  |

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

MONGOIMPORT

Districts
```bash
mongoimport --uri mongodb+srv://gridt:16letters@cluster0.t4m7n.mongodb.net/gridt --drop --collection districts --type csv --file ~/dev/gridt/server/db/seedData/districts.csv --columnsHaveTypes --fields="LEA_STATE.string()","LEA_STATE_NAME.string()","LEAID.string()","LEA_NAME.string()","LEA_ADDRESS.string()","LEA_CITY.string()","LEA_ZIP.string()","CJJ.string()","LEA_ENR.auto()","LEA_ENR_NONLEAFAC.auto()","LEA_SCHOOLS.auto()"
```
Schools

While the lines are long, the idea is simple - import LEAID and SCHID as string type in Mongo without otherwise interfering with  mongoimport on other fields. `.string()` property imports as string while `.auto()` lets mongoimport determine the type.

```bash
mongoimport --uri mongodb+srv://username:password@url/gridt --drop --collection schools --type csv --file ~/dev/gridt/server/db/seedData/schools.csv --columnsHaveTypes --fields="LEA_STATE.string()","LEA_STATE_NAME.string()","LEAID.string()","LEA_NAME.string()","SCHID.string()","SCH_NAME.string()","COMBOKEY.string()","SCH_IDEAENR_HI_M.auto()","SCH_ENR_HI_M.auto()","RI_HI_M.auto()","TOT_IDEA_W/O_HI_M.auto()","TOT_ENR_W/O_HI_M.auto()","RI_W/O_HI_M.auto()","RR_HI_M_POP.auto()","RI_WH_M_1.auto()","RR_HI_M_WH_M.auto()","SCH_IDEAENR_HI_F.auto()","SCH_ENR_HI_F.auto()","RI_HI_F.auto()","TOT_IDEA_W/O_HI_F.auto()","TOT_ENR_W/O_HI_F.auto()","RI_W/O_HI_F.auto()","RR_HI_F_POP.auto()","RI_WH_F_1.auto()","RR_HI_F_WH_F.auto()","SCH_IDEAENR_AM_M.auto()","SCH_ENR_AM_M.auto()","RI_AM_M.auto()","TOT_IDEA_W/O_AM_M.auto()","TOT_ENR_W/O_AM_M.auto()","RI_W/O_AM_M.auto()","RR_AM_M_POP.auto()","RI_WH_M_2.auto()","RR_AM_M_WH_M.auto()","SCH_IDEAENR_AM_F.auto()","SCH_ENR_AM_F.auto()","RI_AM_F.auto()","TOT_IDEA_W/O_AM_F.auto()","TOT_ENR_W/O_AM_F.auto()","RI_W/O_AM_F.auto()","RR_AM_F_POP.auto()","RI_WH_F_2.auto()","RR_AM_F_WH_F.auto()","SCH_IDEAENR_AS_M.auto()","SCH_ENR_AS_M.auto()","RI_AS_M.auto()","TOT_IDEA_W/O_AS_M.auto()","TOT_ENR_W/O_AS_M.auto()","RI_W/O_AS_M.auto()","RR_AS_M_POP.auto()","RI_WH_M_3.auto()","RR_AS_M_WH_M.auto()","SCH_IDEAENR_AS_F.auto()","SCH_ENR_AS_F.auto()","RI_AS_F.auto()","TOT_IDEA_W/O_AS_F.auto()","TOT_ENR_W/O_AS_F.auto()","RI_W/O_AS_F.auto()","RR_AS_F_POP.auto()","RI_WH_F_3.auto()","RR_AS_F_WH_F.auto()","SCH_IDEAENR_HP_M.auto()","SCH_ENR_HP_M.auto()","RI_HP_M.auto()","TOT_IDEA_W/O_HP_M.auto()","TOT_ENR_W/O_HP_M.auto()","RI_W/O_HP_M.auto()","RR_HP_M_POP.auto()","RI_WH_M_4.auto()","RR_HP_M_WH_M.auto()","SCH_IDEAENR_HP_F.auto()","SCH_ENR_HP_F.auto()","RI_HP_F.auto()","TOT_IDEA_W/O_HP_F.auto()","TOT_ENR_W/O_HP_F.auto()","RI_W/O_HP_F.auto()","RR_HP_F_POP.auto()","RI_WH_F_4.auto()","RR_HP_F_WH_F.auto()","SCH_IDEAENR_BL_M.auto()","SCH_ENR_BL_M.auto()","RI_BL_M.auto()","TOT_IDEA_W/O_BL_M.auto()","TOT_ENR_W/O_BL_M.auto()","RI_W/O_BL_M.auto()","RR_BL_M_POP.auto()","RI_WH_M_5.auto()","RR_BL_M_WH_M.auto()","SCH_IDEAENR_BL_F.auto()","SCH_ENR_BL_F.auto()","RI_BL_F.auto()","TOT_IDEA_W/O_BL_F.auto()","TOT_ENR_W/O_BL_F.auto()","RI_W/O_BL_F.auto()","RR_BL_F_POP.auto()","RI_WH_F_5.auto()","RR_BL_F_WH_F.auto()","SCH_IDEAENR_TR_M.auto()","SCH_ENR_TR_M.auto()","RI_TR_M.auto()","TOT_IDEA_W/O_TR_M.auto()","TOT_ENR_W/O_TR_M.auto()","RI_W/O_TR_M.auto()","RR_TR_M_POP.auto()","RI_WH_M_6.auto()","RR_TR_M_WH_M.auto()","SCH_IDEAENR_TR_F.auto()","SCH_ENR_TR_F.auto()","RI_TR_F.auto()","TOT_IDEA_W/O_TR_F.auto()","TOT_ENR_W/O_TR_F.auto()","RI_W/O_TR_F.auto()","RR_TR_F_POP.auto()","RI_WH_F_6.auto()","RR_TR_F_WH_F.auto()","SCH_IDEAENR_WH_M.auto()","SCH_ENR_WH_M.auto()","RI_WH_M_7.auto()","TOT_IDEA_W/O_WH_M.auto()","TOT_ENR_W/O_WH_M.auto()","RI_W/O_WH_M.auto()","RR_WH_M_POP.auto()","RI_WH_M.auto()","RR_WH_M_WH_M.auto()","SCH_IDEAENR_WH_F.auto()","SCH_ENR_WH_F.auto()","RI_WH_F_7.auto()","TOT_IDEA_W/O_WH_F.auto()","TOT_ENR_W/O_WH_F.auto()","RI_W/O_WH_F.auto()","RR_WH_F_POP.auto()","RI_WH_F.auto()","RR_WH_F_WH_F.auto()","TOT_IDEAENR_M.auto()","TOT_IDEAENR_F.auto()","TOT_IDEA_ENR.auto()","TOT_ENR_M.auto()","TOT_ENR_F.auto()","TOT_ENR.auto()","SCH_IDEA_WH_TOT.auto()","SCH_ENR_WH_TOT.auto()","RI_WH_TOT.auto()","TOT_IDEA_W/O_WH_TOT.auto()","TOT_ENR_W/O_WH_TOT.auto()","RI_W/O_WH_TOT.auto()","RR_WH_TOT_POP.auto()","RR_WH_TOT_WH_TOT.auto()","RR_HI_M_WH_TOT.auto()","RR_HI_F_WH_TOT.auto()","RR_AM_M_WH_TOT.auto()","RR_AM_F_WH_TOT.auto()","RR_AS_M_WH_TOT.auto()","RR_AS_F_WH_TOT.auto()","RR_HP_M_WH_TOT.auto()","RR_HP_F_WH_TOT.auto()","RR_BL_M_WH_TOT.auto()","RR_BL_F_WH_TOT.auto()","RR_TR_M_WH_TOT.auto()","RR_TR_F_WH_TOT.auto()"
```
