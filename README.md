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
mongoimport --uri mongodb+srv://gridt:16letters@cluster0.t4m7n.mongodb.net/gridt --drop --collection districts --type csv --file ~/dev/gridt/server/db/seedData/districts.csv --columnsHaveTypes --fields "LEA_STATE.string(), LEA_STATE_NAME.string(), LEAID.string(), LEA_NAME.string(), LEA_ADDRESS.string(), LEA_CITY.string(), LEA_ZIP.string(), CJJ.string(), LEA_ENR.auto(), LEA_ENR_NONLEAFAC.auto(), LEA_SCHOOLS.auto()"
```
