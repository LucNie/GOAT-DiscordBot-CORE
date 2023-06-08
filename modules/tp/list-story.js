const cc = require('../../core/console')
const dataController = require('./functions/dataController');
// discord embed
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'list-story' ,
    description: 'list all story',
    options : 0,
    async execute(interaction) {

        const storys = dataController.getStorys(); //object

        if (storys == undefined) {
            interaction.reply("story not found");
            return;
        }

        let text = ""
        for (let i = 0; i < Object.keys(storys).length ; i++) {
            text += storys[i].id +": "+ storys[i].name + "\n"
        }

        const embed = new EmbedBuilder()
            .setTitle("List of storys")
            .setDescription(text)
            // white
            .setColor(0xFFFFFF)
            // end

        interaction.reply({ embeds: [embed] });
    }
}