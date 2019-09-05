const faker = require('faker');
const strings = require('./string');

const name = faker.name.findName();

console.log(name);
console.log(strings.lowercase.name)
console.log(strings.uppercase.name)