const cc = require('../../core/console')
const dataController = require('./functions/dataController')
module.exports = {
    name: 'build' ,
    description: 'Construire un batiment',
    options : 4,
    async execute(interaction) {

        dataController.build(interaction.user.id, interaction.options.getString('type'), interaction.options.getInteger('x'), interaction.options.getInteger('y'), interaction.options.getInteger('z'))
        const embed = dataController.build(interaction.user.id,interaction)
        interaction.reply({ embeds: [embed] })
    
        
    }
}