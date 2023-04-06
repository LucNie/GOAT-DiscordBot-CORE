const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// read json file
const building = fs.readFileSync(path.join(__dirname, '../data/building.json'));

