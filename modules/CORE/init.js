const exec = require('child_process').exec;
const cc = require('../../core/console')
require('dotenv').config();





module.exports = { 

    name: 'init', 
    description: '',
    async execute() {
        cc.info('COREInit','Core powering up !')
          
    },
};
