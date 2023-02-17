const dataController = require('../../core/dataController')
const cc = require('../../core/console')

require('dotenv').config()
let instance = dataController.mainData.cyti

function execute(client, dataController) {
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
