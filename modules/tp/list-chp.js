const cc = require('../../core/console')
const dataController = require('./functions/dataController');
const em = require('./functions/embed');
// discord embed
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'list-chp',
    description: 'list all chapter',
    options : 0,
    async execute(interaction) {

        const chps = dataController.getChps(); //object

        if (chps == undefined) {
            interaction.reply("chapter not found");
            return;
        }

        let text = ""
        for (let i = 0; i < Object.keys(chps).length ; i++) {
            text += chps[i].id +": "+ chps[i].title + "\n"
        }

        

        interaction.reply({ embeds: [em.basic( interaction.user.id, "List of chapter", text )] });

    }
}