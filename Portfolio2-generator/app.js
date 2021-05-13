const fs = require('fs');

const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;





