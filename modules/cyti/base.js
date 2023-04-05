const renderController = require('./functions/renderController')
module.exports = {
    name: 'base',
    description: 'See the base of a player',
    async execute(interaction) {
        // get discord id of the interactor
        const embed = renderController.embedRenderMap(interaction.user.id,interaction)
        interaction.reply({ embeds: [embed] })
       
    }
}