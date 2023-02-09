const exec = require('child_process').exec;
const colors = require('colors');
require('dotenv').config();





module.exports = { 

    name: 'init', 
    description: '',
    async execute() {
        console.log("{INFO} [COREInit] Core powering up !")
          
    },
};
