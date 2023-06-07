
const exp = require('constants');
const fs = require('fs');
const path = require('path');

const data = {
    chara: {},
}

function loadChara(){
    const rawChara = fs.readFileSync(path.join(__dirname, '../data/characters.json'))
    for (const [key, value] of Object.entries(JSON.parse(rawChara))) {
        data.chara[value.id] = value
    }
    console.log(data)
}

function getChara(id){
    return data.chara[id]
}
function getcharas(){
    return data.chara
}

loadChara()

module.exports = {
    getChara,
    getcharas
}