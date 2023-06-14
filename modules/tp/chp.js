const cc = require('../../core/console')
const { EmbedBuilder } = require('discord.js');
const dataController = require('./functions/dataController');

module.exports = {
    name: 'see-chapter' ,
    description: 'see a chapter of a story',
    options : 2,
    async execute(interaction) {

        const chp = dataController.getchp(interaction.options.getString('option0'));

        if (chp == undefined) {
            interaction.reply("chapter not found");
            return;
        }

        const embed = new EmbedBuilder()
            .setTitle( chp.title)
            .setDescription("Cycle: " + chp.cycle + "." + chp.subCycle + "\n" + chp.entry[interaction.options.getString('option1')])
            // white
            .setColor(0xFFFFFF)
            // end

        interaction.reply({ embeds: [embed] });

        
        
    }
}