const cc = require('../../core/console')
const moduleNekos = require('./Functions/neko.js');



module.exports = {
    name: 'neko' ,
    description: 'generate a neko using nekos.fun',
    options : 1,
    async execute(interaction) {
            
        // lowercase
        let option1 = interaction.options.getString('option0').toLowerCase();

        const sfw = [
            "kiss",
            "lick",
            "hug",
            "baka",
            "cry",
            "poke",
            "smug",
            "slap",
            "tickle",
            "pat",
            "laugh",
            "feed",
            "cuddle"
        ]

        const nsfw = [
            "4k",
            "ass",
            "blowjob",
            "bj",
            "boobs",
            "cum",
            "feet",
            "hentai",
            "wallpapers",
            "spank",
            "gasm",
            "lesbien",
            "lewd",
            "pussy"
        ]


        // test si l'interaction comporte un mot de la liste sfw ou nsfw sinon données la liste des mots disponibles
        if (sfw.includes(option1)) {
            interaction.reply({ embeds: [await moduleNekos.nekoEmbed(option1, true )] });
        }
        else if (nsfw.includes(option1)) {
            interaction.reply({ embeds: [await moduleNekos.nekoEmbed(option1, false )] });
        }
        else {
            interaction.reply("option not found ! \n\n sfw : \n" + sfw.join("\n") + "\n\n nsfw : \n ||" + nsfw.join("\n") + "||");
        }
    

    }
}
