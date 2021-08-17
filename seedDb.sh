mongoimport --type csv -d gridt -c genders --headerline --drop ./server/db/seedData/genders.csv
mongoimport --type csv -d gridt -c races --headerline --drop ./server/db/seedData/races.csv
mongoimport --type csv -d gridt -c disabilities --headerline --drop ./server/db/seedData/disabilities.csv
mongoimport --type csv -d gridt -c states --headerline --drop ./server/db/seedData/states.csv
mongoimport --type csv -d gridt -c districts --headerline --drop ./server/db/seedData/districts.csv
mongoimport --type csv -d gridt -c schools --headerline --drop ./server/db/seedData/schools.csv
# npm run db:seed