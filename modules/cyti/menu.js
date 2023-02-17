const cc = require('../../core/console')

module.exports = {
    name: 'menu',
    description: 'Menu not implemented yet',
    async execute(interaction) {
        cc.error('cyti.menu','Menu not implemented yet')
        interaction.reply('Menu not implemented yet')
    }
}