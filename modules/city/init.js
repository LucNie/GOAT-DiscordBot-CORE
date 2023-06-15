const dataController = require('../../core/dataController')
const renderController = require('./functions/renderController')
const cc = require('../../core/console')
const cityDataController = require('./functions/dataController')
require('dotenv').config()
let instance = dataController.mainData.cyti

async function execute(client, dataController) {
    cc.info('cyti.init','city powering up...')
    // setInterval(() => {
    //     dataController.mainData.cyti = instance
    //     cc.info('cyti.init','city data saved')
    //     cityDataController.globalUpdate()
    // }, 60000); // 1 minute
    
}



module.exports = {
    name: 'init',
    description: '',
    execute
}

