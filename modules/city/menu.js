const cc = require('../../core/console')
const renderController = require('./functions/renderController')
module.exports = {
    name: 'menu',
    description: 'menu de la ville',
    async execute(interaction) {
        const embed = renderController.embedRenderMenu(interaction.user.id,interaction)
        interaction.reply({ embeds: [embed] })
    }
}