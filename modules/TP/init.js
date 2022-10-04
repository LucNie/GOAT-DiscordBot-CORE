//modules discord ping 
const BAKusers = require('./data/users.json');
const BAKinstance = require('./data/instance.json');
const itemsControllers = require('./functions/itemsControllers.js');
module.exports = { 

    name: 'init', 
    description: 'init',
    async execute(interaction,dataController) {
        if (typeof(dataController.mainData["tp"]) == "undefined"){
            dataController.newModules("tp")
        }else if(typeof(dataController.mainData["tp"].users) == "undefined"){
            dataController.mainData["tp"].users = {}
        }else if(typeof(dataController.mainData["tp"].instance) == "undefined"){
            dataController.mainData["tp"].instance = {}
        }
        itemsControllers.initIdsList(dataController);


    }
    
}
