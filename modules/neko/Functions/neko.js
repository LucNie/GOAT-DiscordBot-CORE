const { EmbedBuilder } = require('discord.js');
const neko = require('nekos-fun')

async function nekoEmbed(aApiEndPoint,sfw){

    let result = undefined;
    let reaction = "";

    if (sfw == true) {
        result = await neko.sfw[aApiEndPoint]();
        reaction = "nyaa";
    } else {
        result =  await eko.nsfw[aApiEndPoint]();
        reaction = "u-ummm >///<";
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

module.exports = {
    nekoEmbed
}
