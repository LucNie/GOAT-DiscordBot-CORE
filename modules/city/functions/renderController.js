const dataController = require('./dataController')
const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const emojis = {
    0: '0️⃣',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
  };
function renderEmojyMap(aIdPlayer) {

    const _player = dataController.getPlayer(aIdPlayer)
    let _map = _player.buildings
    let _x = 0
    let _y = 0
    let _mapRender = '';

    for (let i = 0; i < _map.length + 1; i++) {
        
        _mapRender += `${emojis[_x]} `
        _x++
    }

    _mapRender += '\n'

    for (let i = 0; i < _map.length; i++) {
        _y++
        _mapRender += `${emojis[_y]} `
        for (let j = 0; j < _map[i].length; j++) {
            _mapRender += '\u{200D}' + dataController.getBuildingEmoji(_map[i][j].id)
        }
        // render a new line
        _mapRender += '\n'
    }
    return _mapRender

}

function ressourceFild(aId,isInline = true){

    const _prod = dataController.getProduction(aId)
    const _mass = dataController.getMass(aId)
    const _storage = dataController.getStorage(aId)


    const _fields = { name: 'Production', value: `⚡Energy : ${_prod.energy}  \n 🧱Mass : ${_mass} / ${_storage.mass} (${_prod.massProduction} /min)`, inline: true }
    

    return _fields

}

function embedRenderMap(aIdPlayer,interaction){

    const _prod = dataController.getProduction(aIdPlayer)
    const _mass = dataController.getMass(aIdPlayer)
    const _fields = ressourceFild(aIdPlayer,false)

    console.log(_mass)
    const embed = new EmbedBuilder()
    .setColor('	#ffa500')
	.setTitle(`Map de ${interaction.user.username}`)
	.setDescription('Voici votre map')
	.addFields(
        { name: 'Map', value: renderEmojyMap(aIdPlayer), inline: false},
        _fields,
	)

    return embed
}

function embedRenderMenu(aIdPlayer,interaction){

    const _prod = dataController.getProduction(aIdPlayer)
    const _storage = dataController.getStorage(aIdPlayer)
    const _mass = dataController.getMass(aIdPlayer)
    console.log(_mass)
    const file = dataController.getcorePicturePath(aIdPlayer)
    const _fields = ressourceFild(aIdPlayer)

    const embed = new EmbedBuilder()
    .setColor('	#ffa500')
    .setTitle(`Menu de ${interaction.user.username}`)
    .setDescription('Voici votre menu')
    .addFields(
        _fields
    )
    .setImage(file)
    console.log(file)

    return  embed
}

function embedRenderBuildList(aIdPlayer,interaction){

    const _fields = ressourceFild(aIdPlayer)
    const _buildings = dataController.buildList() //string
    const embed = new EmbedBuilder()
    .setColor('	#ffa500')
    .setTitle(`Liste des batiments`)
    .setDescription('Voici la liste des batiments')
    .addFields(
        _fields,
        { name: 'Batiments', value: _buildings, inline: false},
    )

    return embed
}





module.exports = {
    name: 'renderController',
    description: '',
    embedRenderMap,
    embedRenderMenu,
    embedRenderBuildList
}