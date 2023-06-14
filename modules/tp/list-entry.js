const cc = require('../../core/console')
const dataController = require('./functions/dataController');
// discord embed
const { EmbedBuilder } = require('discord.js');
const em = require('./functions/embed');

module.exports = {
    name: 'list-entry' ,
    description: 'list all entry of the selected story and chapter',
    options : 0,
    async execute(interaction) {

        const entrys = dataController.getEntrys( interaction.user.id ); //object

        if (entrys == undefined) {
            interaction.reply("entry not found");
            return;
        }

        let text = ""

        for (let i = 0; i < entrys.length ; i++) {
            if ((text.length + entrys[i].length) > 1024) {
                // exit the loop
                i = entrys.length
            } else {
            text += i +": " + entrys[i] + "\n" + "\n"
            }
        }



        interaction.reply({ embeds: [em.basic( interaction.user.id, "List of entry", text )] });
    }
}