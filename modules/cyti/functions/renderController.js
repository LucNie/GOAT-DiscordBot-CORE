const dataController = require('./dataController')
const { EmbedBuilder } = require('discord.js');

function renderEmojyMap(aIdPlayer) {

    const _player = dataController.getPlayer(aIdPlayer)
    console.log(_player)
    let _map = _player.buildings
    let _mapRender = '';
    for (let i = 0; i < _map.length; i++) {
        let ligne = ''
        for (let j = 0; j < _map[i].length; j++) {
            console.log(_map[i][j])
            _mapRender += dataController.getBuildingEmoji(_map[i][j].id)
        }
        // render a new line
        _mapRender += '\n'
    }
    return _mapRender

}

function embedRenderMap(aIdPlayer,interaction){

    
    const embed = new EmbedBuilder()
    .setColor('	#ffa500')
	.setTitle(`Map de ${interaction.user.username}`)
	.setDescription('Voici votre map')
	.addFields(
		{ name: 'vue aérienne', value: renderEmojyMap(aIdPlayer) },
	)

    return embed
}


module.exports = {
    name: 'renderController',
    description: '',
    embedRenderMap
}