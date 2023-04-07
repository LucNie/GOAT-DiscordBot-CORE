//import colors
let colors = require('colors');
let BAKmainData = require('./mainData.json');
let mainData = BAKmainData
// const serviceController = require('./serviceController.js');
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


function init() {
    //function save mainData to mainData.json all 20 minutes
    
    setInterval(() => {
        fs.writeFile('./core/mainData.json', JSON.stringify(mainData), function (err) {
            
            if (err) return console.log(err);
            console.log("{INFO} [dataController] mainData.json saved" + colors.green(" ✔"));
            console.log(mainData)
            //recusrive 
            init();
        });
    }, 1200000); // 20 minutes
}



    module.exports = {

        mainData,

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
                console.log("{INFO} [dataController] Module " + aName + " created")
            } else {
                // console.log("{INFO} [dataController] Module " + aName + " already exist")
            }
        },
        updateMainModulesData(aName, aData) {
            this.mainData[aName] = aData
        },
        init,
        mainData

    }