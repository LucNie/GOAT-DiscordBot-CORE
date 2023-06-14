const cc = require('../../core/console')
const { EmbedBuilder } = require('discord.js');
const dataController = require('./functions/dataController');

module.exports = {
    name: 'see-group' ,
    description: 'list all group',
    options : 1,
    async execute(interaction) {

        const group = dataController.getGroup(interaction.options.getString('option0'));

        if (group == undefined) {
            interaction.reply("group not found");
            return;
        }

        const embed = new EmbedBuilder()
            .setTitle(group.name)
            .setDescription(group.description)
            // .setThumbnail(group.image)
            .setImage(group.image[0])
            .setThumbnail(group.logo[0])
            // purple
            .setColor(0x800080)
            // end
        
        interaction.reply({ embeds: [embed] });
    }
}