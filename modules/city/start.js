const cc = require('../../core/console')
const dataController = require('./functions/dataController')

module.exports = {
    name: 'start',
    description: 'crée un nouveau joueur',
    async execute(interaction) {
        cc.info('cyti.start','création d\'un nouveau joueur')
        dataController.newPlayer(interaction.user.id) ? interaction.reply('nouveau joueur créé ! faite /cyti menu pour accéder au menu') : interaction.reply('vous avez déjà un joueur !')
    }
}