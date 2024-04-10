// const fs = require('node:fs');
// const data = fs.readFileSync('./myReadMe.txt');
// console.log(data);
// console.log(data.toString());


const fs = require('node:fs');
const data = fs.readFileSync('./myReadMe.txt',{encoding: 'utf8'});
console.log(data);