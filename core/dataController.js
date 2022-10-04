//import colors
var colors = require('colors');
var BAKmainData = require('./mainData.json');
//import fs
const fs = require('fs');

var coreData = {
    "version": "0.0.1",
    "instance": "0",
}


module.exports = {

    mainData : BAKmainData,

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
        if(this.mainData[aName] == undefined){
            this.mainData[aName] = {}
        } else {
            console.log("{INFO} [dataController] Module " + aName + " already exist")
        }
    },
    updateMainModulesData(aName, aData) {
        this.mainData[aName] = aData
    },

    init() {
        //function save mainData to mainData.json all 20 minutes
        setInterval(() => {
            fs.writeFile('./mainData.json', JSON.stringify(this.mainData), function (err) {
                if (err) return console.log(err);
                console.log("{INFO} [dataController] mainData.json saved" + colors.green(" ✔"));
                //recusrive 
                this.init();
            });
        }, 1200000);

    }
}