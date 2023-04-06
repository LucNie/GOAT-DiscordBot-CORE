const cc = require('../../core/console')
const renderController = require('./functions/renderController')
module.exports = {
    name: 'buildlist' ,
    description: 'Listes des batiments',
    options : 1,
    async execute(interaction) {

    const embed = renderController.embedRenderBuildList(interaction.user.id,interaction)
    interaction.reply({ embeds: [embed] })
        
    }
}