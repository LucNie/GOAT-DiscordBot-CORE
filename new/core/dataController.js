
var coreData = {
    "version": "0.0.1",
    "instance": "0",
}

var mainData = {}

module.exports = {



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
        mainData = data
    },
    newModules(aName) {
        mainData[aName] = {}
    },
    updateModules(aName, aData) {
        mainData[aName] = aData
    },
}