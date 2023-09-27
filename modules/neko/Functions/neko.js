const { EmbedBuilder } = require('discord.js');
const neko = require('nekos-fun')

async function nekoEmbed(aApiEndPoint,sfw){

    let result = undefined;
    let reaction = "";

    const sfwReaction = [
        "nyaa",
        "hehe :3",
        "uwu",
        "nya",
        "nya nya",
        "aww",
        "happy ^_^",
        "teehee",
        "yay!",
        "giggles",
        "blush",
        "smile :)",
        "greetings!",
        "cheerful!",
        "baka!",
        "squee!",
        "sparkles!",
        "wink ;)",
        "dance!",
        "purr~",
        "greet!",
        "snuggle",
        "glomp",
        "greetz!",
        "giggling",
        "cuddle",
        "excited!",
        "yippee!",
        "grin :D",
        "twirl!",
        "wave :wave:",
        "hug :hugging:",
        "happiness :happiness:",
        "love :heart:"
      ];

        const nsfwReaction = [
        "u-ummm >///<",
        "h-hentai!",
        "hentai!",
        "hiii (///▽///)",
        ":blush:",
        "s-senpai!",
        "horny >///<",
        "i'm not a pervert!",
        "hentai desu!",
        "aroo~",
        "more.. >///<",
        ];

    if (sfw == true) {
        result = await neko.sfw[aApiEndPoint]();
        reaction = sfwReaction[Math.floor(Math.random() * sfwReaction.length)];
    } else {
        result = await neko.nsfw[aApiEndPoint]();
        reaction = nsfwReaction[Math.floor(Math.random() * nsfwReaction.length)];
       
    }
        
    console.log("result: " + result)

    const embed = new EmbedBuilder()
    .setTitle("neko")
    .setDescription(reaction)
    .setImage(result)
    // rose
    .setColor(0xFF007F)
    // end
    
    return embed;
}

async function errorEmbed(){
    const sfw = Object.getOwnPropertyNames(neko.sfw);
    const nsfw = Object.getOwnPropertyNames(neko.nsfw);

    const embed = new EmbedBuilder()
    .setTitle("neko")
    .setDescription("option not found ! ")
    .addFields({
        name: 'sfw', value: sfw.join(","), inline: false
    },
        {
            name: 'nsfw', value: nsfw.join(","), inline: false
        })
    // rose
    .setColor(0xFF007F)
// end

return embed;
}

module.exports = {
    nekoEmbed,
    errorEmbed
}
