//modules discord ping 
const BAKusers = require('./data/users.json');
const BAKinstance = require('./data/instance.json');
module.exports = { 

    name: 'init', 
    description: 'init',
    async execute(interaction,dataController) {

        dataController.updateMainModulesData("tp",{users:BAKusers,instance:BAKinstance});
    }
}
