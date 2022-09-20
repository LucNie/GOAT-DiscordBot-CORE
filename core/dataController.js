//import colors
var colors = require('colors');
var BAKmainData = require('./mainData.json');

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


}
    //function save mainData to mainData.json all 20 minutes
    setInterval(function () {
        fs.writeFile("./mainData.json", JSON.stringify(this.mainData), (err) => {
            if (err) console.error(err)
        });
        console.log("{INFO} [dataController] mainData.json saved".green )
    }, 1200000); // 20 minutes

