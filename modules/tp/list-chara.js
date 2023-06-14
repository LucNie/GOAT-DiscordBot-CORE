const cc = require('../../core/console')
const { EmbedBuilder } = require('discord.js');
const dataController = require('./functions/dataController');

module.exports = {
    name: 'list-chara' ,
    description: 'see a charactere',
    options : 1,
    async execute(interaction) {

        const chara = dataController.getCharas();


        

        
        interaction.reply("not implemented yet");

        
        
    }
}