
const exp = require('constants');
const fs = require('fs');
const path = require('path');

const data = {
    chara: {},
    groups: {},
    chp: {}
}



function loadChara(){
    const rawChara = fs.readFileSync(path.join(__dirname, '../data/characters.json'))
    for (const [key, value] of Object.entries(JSON.parse(rawChara))) {
        data.chara[value.id] = value
    }
}

function loadGroups(){
    const rawGroups = fs.readFileSync(path.join(__dirname, '../data/groups.json'))
    for (const [key, value] of Object.entries(JSON.parse(rawGroups))) {
        data.groups[value.id] = value
    }
}

function loadchp(){
    const rawchp = fs.readFileSync(path.join(__dirname, '../data/chp.json'))
    for (const [key, value] of Object.entries(JSON.parse(rawchp))) {
        data.chp[value.id] = value
    }
}

function getchp(id){
    return data.chp[id]
}

function getchps(){
    return data.chp
}


function getGroup(id){
    return data.groups[id]
}

function getGroups(){
    return data.groups
}

function getChara(id){
    return data.chara[id]
}
function getcharas(){
    return data.chara
}

loadChara()
loadGroups()
loadchp()
module.exports = {
    getChara,
    getcharas,
    getGroup,
    getGroups,
    getchp,
    getchps

}