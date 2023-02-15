require('dotenv').config()
const cc = require('./console')
const fs = require('fs');
const path = require("path");

// read file
let whiteList = JSON.parse(fs.readFileSync(path.join(__dirname, './whiteList.json'), 'utf8')); //object

function isWhiteListed(aLevel, aId) {
    if (aLevel === undefined){
        return true
    }
    if (whiteList[aLevel] === undefined) {
        cc.error('WhiteList', 'Level ' + aLevel + ' not found')
        return false
    } else {
        if (whiteList[aLevel].includes(aId)) {
            return true
        } else {
            return false
        }
    }
}

module.exports = {
    isWhiteListed
}