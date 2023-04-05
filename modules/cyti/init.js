const dataController = require('../../core/dataController')
const renderController = require('./functions/renderController')
const cc = require('../../core/console')
const cityDataController = require('./functions/dataController')
require('dotenv').config()
let instance = dataController.mainData.cyti

async function execute(client, dataController) {
    cc.info('cyti.init','Cyti powering up...')
    setInterval(() => {
        dataController.mainData.cyti = instance
        cc.info('cyti.init','Cyti data saved')
    }, 120000); // 20 minutes
}



module.exports = {
    name: 'init',
    description: '',
    execute
}

