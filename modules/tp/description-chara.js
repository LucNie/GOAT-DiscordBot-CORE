const cc = require('../../core/console')
const dataController = require('./functions/dataController');
// discord embed
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'description-chara' ,
    description: 'Modify the description of a character',
    options : 2,
    async execute(interaction) {

        const result = dataController.setCharaDescription(interaction.options.getString('option0'), interaction.options.getString('option1'))

        if (result === false) {
            interaction.reply("character not found");
            return;
        }

        interaction.reply("character description set, you can see it with `/chara " + interaction.options.getString('option0') +"`");

    }
}