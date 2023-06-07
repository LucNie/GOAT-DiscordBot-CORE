
const fs = require('fs');
const path = require('path');

const pathBuilding = path.join(__dirname, '../data/building.json');
const pathcore = path.join(__dirname, '../data/core.json');
const pathPlayers = path.join(__dirname, '../data/players/');

const building = loadBuilding()
const core = loadcore()
let instance = loadPlayers()



function getcore() {
    return core;
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

function getcorePicturePath(aId) {
    const _core = getPlayer(aId).core.id;
    return core[_core].picture;
}



function loadPlayers() {

    const _players = {};

    // for each file in the folder
    fs.readdirSync(pathPlayers).forEach(file => {

        _players[file.replace(/\.json$/, "")] = JSON.parse(fs.readFileSync(pathPlayers + file));
    });


    return _players;
}

function newPlayer(aId) {

    // vérifier si le joueur existe déjà
    if (instance[aId]) {
        return false;
    }

    instance[aId] = {
        "id": aId,
        "energy": 0,
        "mass": 0,
        "massProduction": 0,
        "core": {
            "id": 1,
            "hull": 100,
            "armor": 0,
            "shield": 0,
            "option": []
        },
        "buildings": [
            [
                {
                    "id": 1,
                    "option": []
                },
                {
                    "id": 0,
                    "option": []
                },
                {
                    "id": 0,
                    "option": []
                }
            ],
            [
                {
                    "id": 1,
                    "option": []
                },
                {
                    "id": 4,
                    "option": []
                },
                {
                    "id": 0,
                    "option": []
                }
            ],
            [
                {
                    "id": 1,
                    "option": []
                },
                {
                    "id": 0,
                    "option": []
                },
                {
                    "id": 0,
                    "option": []
                }
            ]
        ]
    }

    savePlayer(aId);

    return true;
}

function globalUpdate() {

    for (let index in instance) {
        // updatePlayer(index)
        // savePlayer(index)
    }


}

function build(aId, aX, aY, aBuildingId) {
    // vérifier si le joueur existe déjà
    if (!instance[aId]) {
        return 'player not found';
    }
    // obtient la taille du tableau via la taille du core
    const _size = core[instance[aId].core.id].maps;

    // vérifie si un batiment est déjà présent
    if (instance[aId].buildings[aX][aY].id === aBuildingId) {
        return 'building already present';
    }

    // vérifie si le joueur a assez d'énergie 
    if (instance[aId].energy < building[aBuildingId].cost.energy) {
        return 'not enough energy';
    }
    // vérifie si le joueur a assez de masse
    if (instance[aId].mass < building[aBuildingId].cost.mass) {
        return 'not enough mass';
    }

    // build 
    instance[aId].buildings[aX][aY].id = aBuildingId;

    // update mass
    instance[aId].mass -= building[aBuildingId].cost.mass;

    // update energy (not used yet)
    // instance[aId].energy -= building[aBuildingId].cost.energy;

    savePlayer(aId);    
   
    return true;
}

function buildList(aId){ //aID not used yet
    //format du champs text
    //id:nom:cout en énergie:cout en masse:production en énergie:production en masse:stockage en énergie:stockage en masse:temps de construction
    //regroupe par type de batiment
    const _buildList = {};
    for (let index in building) {
        // si type non défini on le crée
        if (!_buildList[building[index].type]) {
            _buildList[building[index].type] = [];
        }
        // on ajoute le batiment brut
        _buildList[building[index].type].push(building[index]);
    }
    // formatage du tableau en texte
    // ==(type)==
    // id:nom:cout en énergie:cout en masse:production en énergie:production en masse:stockage en énergie:stockage en masse:temps de construction

    let _text = '';
    for (let index in _buildList) {
        _text += '```==' + index + '==' + '\n';
        for (let index2 in _buildList[index]) {
            // on ajoute les informations général id:nom:emji
            _text += _buildList[index][index2].id + ':' + _buildList[index][index2].name + ':' + _buildList[index][index2].emoji + '\n';
            // si existe on ajoute les informations de cout
            if (_buildList[index][index2].cost) {
                _text += "COUT : \n"
                // si existe on ajoute les informations de cout en énergie
                if (_buildList[index][index2].cost.hasOwnProperty('energy')) {
                    _text += "⚡ : " + _buildList[index][index2].cost.energy + ':';
                }
                // si existe on ajoute les informations de cout en masse
                if (_buildList[index][index2].cost.hasOwnProperty('mass')) {
                    _text += "🧱 : " + _buildList[index][index2].cost.mass + '\n';
                }
            }
            // si existe on ajoute les informations de production
            if (_buildList[index][index2].production) {
                _text += "PRODUCTION : \n"
                // si existe on ajoute les informations de production en énergie
                if (_buildList[index][index2].production.hasOwnProperty('energy')) {
                    _text += "⚡ : " + _buildList[index][index2].production.energy + ':';
                }
                // si existe on ajoute les informations de production en masse
                if (_buildList[index][index2].production.hasOwnProperty('mass')) {
                    _text += "🧱 : " + _buildList[index][index2].production.mass + '\n';
                }
            }
            // si existe on ajoute les informations de stockage
            if (_buildList[index][index2].storage) {
                _text += "STOCKAGE : \n"
                // si existe on ajoute les informations de stockage en énergie
                if (_buildList[index][index2].storage.hasOwnProperty('energy')) {
                    _text += "⚡ : " + _buildList[index][index2].storage.energy + ':';
                }
                // si existe on ajoute les informations de stockage en masse
                if (_buildList[index][index2].storage.hasOwnProperty('mass')) {
                    _text += "🧱 : " + _buildList[index][index2].storage.mass + '\n';
                }
            }
            // si existe on ajoute les informations de temps de construction (not used yet)

            _text += '\n';

        }
        _text += '```';
    }
    return _text;

}

function updatePlayer(aId) {

    const _production = getProduction(aId);
    // update production
    instance[aId].massProduction = _production.massProduction;
    instance[aId].energy = _production.energy;

    // update mass
    if (instance[aId].mass + instance[aId].massProduction > getStorage(aId).mass) {
        instance[aId].mass = getStorage(aId).mass;
    } else {
        instance[aId].mass += instance[aId].massProduction;
    }

    return true;

}

function getMass(aId) {
    return instance[aId].mass;
}

function getStorage(aID) {

    const _storageMax = {
        energy: 0,
        mass: 0
    }

    for (index in instance[aID].buildings) {
        for (index2 in instance[aID].buildings[index]) {
            if (building[instance[aID].buildings[index][index2].id].production) {// si le batiment produit de l'énergie
                {
                    if (building[instance[aID].buildings[index][index2].id].production.hasOwnProperty('energy')) {// si le batiment produit de l'énergie
                        _storageMax.energy += building[instance[aID].buildings[index][index2].id].production.energy;
                    }
                }
                if (building[instance[aID].buildings[index][index2].id].storage) {// si le batiment n'a pas de stockage
                    if (building[instance[aID].buildings[index][index2].id].storage.hasOwnProperty('mass')) {// si le batiment a du stockage de masse
                        _storageMax.mass += building[instance[aID].buildings[index][index2].id].storage.mass;
                    }
                }
            }
        }
    }

    // ajouter le stockage du core
    _storageMax.mass += core[instance[aID].core.id].storage.mass;

    return _storageMax;
}

function getProduction(aID) {
    let _storage = {
        energy: 0,
        massProduction : 0
    };

    for (index in instance[aID].buildings) {
        for (index2 in instance[aID].buildings[index]) {
            if (!building[instance[aID].buildings[index][index2].id].production) {// si le batiment produit de l'énergie
                continue;
            }
            if (building[instance[aID].buildings[index][index2].id].production.hasOwnProperty('energy')) {// si le batiment produit de l'énergie
                _storage.energy += building[instance[aID].buildings[index][index2].id].production.energy;
            }
            if (building[instance[aID].buildings[index][index2].id].production.hasOwnProperty('mass')) {// si le batiment produit de la masse
                _storage.massProduction += building[instance[aID].buildings[index][index2].id].production.mass;
            }
        }
    }

    // check if cors produce energy & mass
    if (core[instance[aID].core.id].hasOwnProperty('production')) {
        if (core[instance[aID].core.id].production.hasOwnProperty('energy')) {
            _storage.energy += core[instance[aID].core.id].production.energy;
        }
        if (core[instance[aID].core.id].production.hasOwnProperty('mass')) {
            _storage.massProduction += core[instance[aID].core.id].production.mass;
        }
    }


        

    console.log(_storage)
    return _storage;
}

function getMassProduction(aID) {
    return instance[aID].core.massProduction;
}

function savePlayer(aID) {

    fs.writeFileSync(pathPlayers + aID + '.json', JSON.stringify(instance[aID]));

    return true;

}

function loadBuilding() {

    const _buildingRAW = fs.readFileSync(pathBuilding, 'utf8');
    const _buildingRAWJSON = JSON.parse(_buildingRAW); // object


    // build talbeau de building index by id

    const _building = {};
    // for each index in the object 
    for (let index in _buildingRAWJSON) {
        // ignore first index
        for (let index2 in _buildingRAWJSON[index]) {
            // set the building index by id
            _building[_buildingRAWJSON[index][index2].id] = _buildingRAWJSON[index][index2];
        }
    }


    return _building;
}

function getBuildingEmoji(id) {
    return building[id].emoji;
}

function loadcore() {

    const _coreRAW = fs.readFileSync(pathcore, 'utf8');
    const _coreRAWJSON = JSON.parse(_coreRAW); // object

    //  build talbeau de core index by id

    const _core = {};
    // for each index in the object
    for (let index in _coreRAWJSON) {
        // ignore first index
        for (let index2 in _coreRAWJSON[index]) {
            // set the core index by id
            _core[_coreRAWJSON[index][index2].id] = _coreRAWJSON[index][index2];
        }
    }


    return _core;
}

module.exports = {
    name: 'building',
    description: 'building',
    getBuilding,
    getcore,
    getPlayers,
    getPlayer,
    getBuildingEmoji,
    newPlayer,
    savePlayer,
    getProduction,
    getcorePicturePath,
    getMass,
    getMassProduction,
    getStorage,
    globalUpdate,
    buildList,
    build,

}