const cc = require('../../core/console')
const { EmbedBuilder } = require('discord.js');
const dataController = require('./functions/dataController');

module.exports = {
    name: 'see-chara' ,
    description: 'see a charactere description',
    options : 1,
    async execute(interaction) {

        const chara = dataController.getChara(interaction.options.getString('option0'));

        if (chara == undefined) {
            interaction.reply("chara not found");
            return;
        }

        const embed = new EmbedBuilder()
            .setTitle(chara.name)
            .setDescription(chara.description)
            // .setThumbnail(chara.image)
            .setImage(chara.image[0])
            .setThumbnail(chara.image[1])
            // orange
            .setColor(0xFFA500)
            // end

        
        interaction.reply({ embeds: [embed] });
        
        
    }
}