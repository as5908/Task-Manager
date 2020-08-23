const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());

data.name = 'Abhinav';
data.age = '36';

fs.writeFileSync('1-json.json', JSON.stringify(data));
console.log(data);
