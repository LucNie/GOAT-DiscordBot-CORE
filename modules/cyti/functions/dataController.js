
const fs = require('fs');
const path = require('path');

const pathBuilding = path.join(__dirname, '../data/building.json');
const pathCors = path.join(__dirname, '../data/cors.json');
const pathPlayers = path.join(__dirname, '../data/players/');

const building = loadBuilding()
const cors = loadCors()
let instance = loadPlayers()



function getCors() {
    return cors;
}

function getBuilding() {
    return building;
}

function getPlayers() {
    return instance;
}

function getPlayer(id) {
    return instance[id];
}



 
function loadPlayers(){

    const _players = {};

    // for each file in the folder
    fs.readdirSync(pathPlayers).forEach(file => {
        
        _players[file.replace(/\.json$/, "")] = JSON.parse(fs.readFileSync(pathPlayers + file));
    });

    console.log(_players)


    return _players;
}

function loadBuilding() {
    
    const _buildingRAW = fs.readFileSync(pathBuilding, 'utf8');
    const _buildingRAWJSON = JSON.parse(_buildingRAW); // object


    // build talbeau de building index by id

    const _building = {};
    // for each index in the object 
    for (let index in _buildingRAWJSON) {
        // ignore first index
        for ( let index2 in _buildingRAWJSON[index]) {
            // set the building index by id
            _building[_buildingRAWJSON[index][index2].id] = _buildingRAWJSON[index][index2];
        }
    }


    return _building;
}

function getBuildingEmoji(id) {
    return building[id].emoji;
}

function loadCors() {

    const _corsRAW = fs.readFileSync(pathCors, 'utf8');
    const _corsRAWJSON = JSON.parse(_corsRAW); // object

    //  build talbeau de cors index by id

    const _cors = {};
    // for each index in the object
    for (let index in _corsRAWJSON) {
        // ignore first index
        for (let index2 in _corsRAWJSON[index]) {
            // set the cors index by id
            _cors[_corsRAWJSON[index][index2].id] = _corsRAWJSON[index][index2];
        }
    }


    return _cors;
}

module.exports = {
    name: 'building',
    description: 'building',
    getBuilding,
    getCors,
    getPlayers,
    getPlayer,
    getBuildingEmoji

}