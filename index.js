// Requiring the module
const reader = require('xlsx')
// Reading our test file
const file = reader.readFile('./test.csv')
let data = []
const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
    temp.forEach((res, i) => {
        console.log(res, i)
        data.push(res)
    })
}
// Printing data
// console.log('DATA: ', data[0])

const keys = Object.keys(data[0])

const testValue = data[0]['SCHID']

console.log(testValue)