const cc = require('../../core/console')
const dataController = require('./functions/dataController');
// discord embed
const { EmbedBuilder } = require('discord.js');
const em = require('./functions/embed');

module.exports = {
    name: 'add-entry' ,
    description: 'add an entry in a chapter of a story',
    options : 1,
    async execute(interaction) {

        const entry = dataController.newEntry(interaction.user.id, interaction.options.getString('option0'))

        if (entry == false) {
            interaction.reply( 'You have to select a story and a chapter first');
            return
        }
        
        interaction.reply('Entry added, you can see the list with /list-entry or /entry ' + entry);

    }
}