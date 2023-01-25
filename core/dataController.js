//import colors
let colors = require('colors');
let BAKmainData = require('./mainData.json');
const serviceController = require('./serviceController.js');
// dot env
require('dotenv').config()
//import fs
const fs = require('fs');

let coreData = {
    "version": "0.0.1",
    "instance": "0",
}

// serviceController.listPortsUsed().then((data) => {
//     Checker(data)
// })


function Checker(aArrayOfPorts) {
    const _portsToCheck = process.env.CHECK_PORT.split(",");
    const _PortsName = process.env.CHECK_NAME.split(",");
    const _portsShortName = process.env.CHECK_SHORT_NAME.split(",");

    let _text = '';

    for (let i = 0; i < _portsToCheck.length; i++) {
        if (aArrayOfPorts.includes(_portsToCheck[i])) {
            _text += _portsShortName[i] + '🟢 '
        } else {
            _text += _portsShortName[i] + '🔴 '
        }
    }
    // console.log(_text)
    return _text;
}

function init(aClientDiscord, ActivityType) {
    //function save mainData to mainData.json all 20 minutes

    serviceController.listPortsUsed().then((data) => {
       
        aClientDiscord.user.setPresence({
            activities: [{ name:  Checker(data), type: ActivityType.Playing }],
            status: 'dnd',
        })


    })

    setInterval(() => {
        fs.writeFile('./mainData.json', JSON.stringify(this.mainData), function (err) {
            if (err) return console.log(err);
            console.log("{INFO} [dataController] mainData.json saved" + colors.green(" ✔"));
            //recusrive 
            this.init();
        });
    }, 1200000); // 20 minutes
}

    // 

    module.exports = {

        mainData: BAKmainData,

        //principal function to get data from the server
        getCoreData() {
            return coreData
        },
        getMainData() {
            return mainData
        },
        setCoreData(data) {
            coreData = data
        },
        setMainData(data) {
            this.mainData = data
        },
        newModules(aName) {
            if (this.mainData[aName] == undefined) {
                this.mainData[aName] = {}
            } else {
                console.log("{INFO} [dataController] Module " + aName + " already exist")
            }
        },
        updateMainModulesData(aName, aData) {
            this.mainData[aName] = aData
        },
        init

    }