
const exp = require('constants');
const fs = require('fs');
const path = require('path');
const cc = require('../../../core/console')

const data = {
    chara: JSON.parse(fs.readFileSync(path.join(__dirname, '../data/characters.json'))),
    groups: JSON.parse(fs.readFileSync(path.join(__dirname, '../data/groups.json'))),
    chp: JSON.parse(fs.readFileSync(path.join(__dirname, '../data/chapters.json'))),
    storys: JSON.parse(fs.readFileSync(path.join(__dirname, '../data/storys.json'))),
    users: JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')))
}



function getStory(id){
    return data.storys[id]
}

function getStorys(){
    return data.storys
}

function getUser(id){
    return data.users[id]
}

function getUsers(){
    return data.users
}

function getChp(id){
    return data.chp[id]
}

function getChps(){
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

function setCharaDescription(id, description){
    if (data.chara[id] == undefined) {
        return false
    }

    data.chara[id].description = description
    return true
}

function getCharasByStory(id){
    let charas = []
    for (const chara in data.chara) {
        if (data.chara[chara].story == id) {
            charas.push(data.chara[chara])
        }
    }
    return charas
}

function setStoryUser(id, story){
    console.log(id,story)
    if (data.users[id] == undefined) {
        data.users[id] = {}
    }
    if (data.storys[story] == undefined) {
        return false
    }

    data.users[id].story = story
    return data.storys[story].name
}
function setChpUser(id, chp){
    console.log(id,chp)
    if (data.users[id] == undefined) {
        data.users[id] = {}
    }
    if (data.chp[chp] == undefined) {
        return false
    }


    data.users[id].chp = chp
    return data.chp[chp].title
}
function newEntry(aIdUser, aText){
    if (data.users[aIdUser] == undefined) {
        data.users[aIdUser] = {}
    }

    if (data.users[aIdUser].entry == undefined) {
        data.users[aIdUser].entry = []
    }

    console.log(data.users[aIdUser].chp)

    data.chp[data.users[aIdUser].chp].entry.push(aText)
    
    return data.chp[data.users[aIdUser].chp].entry.length + 1;
    
}

function getEntrys(aIdUser){
    if (data.users[aIdUser] == undefined) {
        data.users[aIdUser] = {}
        return false
    }

    if (data.users[aIdUser].entry == undefined) {
        data.users[aIdUser].entry = []
        return false
    }

    return data.chp[data.users[aIdUser].chp].entry
}

function deleteEntry(aIdUser, aNumber){
    if (data.users[aIdUser] == undefined) {
        data.users[aIdUser] = {}
        return false
    }

    if (data.users[aIdUser].entry == undefined) {
        data.users[aIdUser].entry = []
        return false
    }

    if (data.users[aIdUser].entry[aNumber] == undefined) {
        return false
    }

    data.users[aIdUser].entry.splice(aNumber, 1)
    return true
}


function saveData(aNumber){

    cc.info('tp.dataController.saveData', 'saving data')

    switch (aNumber) {

        case 0:
   /*0*/ fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(data.users))
            break;
        case 1:
   /*1*/ fs.writeFileSync(path.join(__dirname, '../data/storys.json'), JSON.stringify(data.storys))
            break;
        case 2:
   /*2*/ fs.writeFileSync(path.join(__dirname, '../data/characters.json'), JSON.stringify(data.chara))
            break;
        case 3:
   /*3*/ fs.writeFileSync(path.join(__dirname, '../data/groups.json'), JSON.stringify(data.groups))
            break;
        case 4:
   /*4*/ fs.writeFileSync(path.join(__dirname, '../data/chapters.json'), JSON.stringify(data.chp))
            break;
        default:
    /*0*/ fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(data.users))
    /*1*/ fs.writeFileSync(path.join(__dirname, '../data/storys.json'), JSON.stringify(data.storys))
    /*2*/ fs.writeFileSync(path.join(__dirname, '../data/characters.json'), JSON.stringify(data.chara))
    /*3*/ fs.writeFileSync(path.join(__dirname, '../data/groups.json'), JSON.stringify(data.groups))
    /*4*/ fs.writeFileSync(path.join(__dirname, '../data/chapters.json'), JSON.stringify(data.chp))
            break;
    }
}

// save data every 30 minutes
setInterval(() => {
    saveData()
    cc.info("tp.dataController", "data saved")
}, 1800000); // 30 minutes


module.exports = {
    getChara,
    getcharas,
    getGroup,
    getGroups,
    getChp,
    getChps,
    getUser,
    getUsers,
    setStoryUser,
    setChpUser,
    getStory,
    getStorys,
    newEntry,
    setCharaDescription,
    getCharasByStory,
    getEntrys,
    saveData,
    deleteEntry


}