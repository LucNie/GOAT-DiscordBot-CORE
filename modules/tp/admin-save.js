const cc = require('../../core/console')
const dataController = require('./functions/dataController');
// discord embed
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'admin-save' ,
    description: 'save the data in the json file',
    options : 0,
    auth: "admin",
    async execute(interaction) {

        dataController.saveData();

        interaction.reply("data saved");

    }
}

