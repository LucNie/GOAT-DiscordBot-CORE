const cc = require('../../core/console')
const moduleNekos = require('./Functions/neko.js');
const neko = require('nekos-fun')


module.exports = {
    name: 'neko',
    description: 'generate a neko using nekos.fun',
    options: 1,
    async execute(interaction) {

        // lowercase
        let option1 = interaction.options.getString('option0');

        const sfw = Object.getOwnPropertyNames(neko.sfw);
        const nsfw = Object.getOwnPropertyNames(neko.nsfw);



        // test si l'interaction comporte un mot de la liste sfw ou nsfw sinon données la liste des mots disponibles
        if (sfw.includes(option1)) {
            interaction.reply({ embeds: [await moduleNekos.nekoEmbed(option1, true)] });
        }
        else if (nsfw.includes(option1)) {
            interaction.reply({ embeds: [await moduleNekos.nekoEmbed(option1, false)] });
        }
        else {
        
            interaction.reply({ embeds: [await moduleNekos.errorEmbed()] });

        }


    }
}