const cc = require('../../../core/console')
const dataController = require('./dataController');
// discord embed
const { EmbedBuilder } = require('discord.js');

function menu(aIdUser) {

    const user = dataController.getUser(aIdUser);
    const story = dataController.getStory(user.story);
    const chp = dataController.getChp(user.chp);

    const embed = new EmbedBuilder()
    .setTitle("Main menu")
    .addFields({
        name: 'Selection', value : `story : ${user.story}: ${story.name}\nchapter : ${chp.title}`, inline: false
    },
    {
        name: "Welcome to the main menu" , value : "Please select an option", inline: false
    }
    )
    // white
    .setColor(0xFFFFFF)
    // end

return embed;

}


function basic(aIdUser,title,description) {

    if(title == undefined || description == undefined) {
        cc.error("embed.basic", "title or description is undefined");
        return;
    }

    if (aIdUser == undefined) {
        cc.error("embed.basic", "aIdUser is undefined");
        return;
    }

    if (description.length > 1024) {
        cc.warn("embed.basic", "description is too long");
        description = description.substring(0, 1024);
        return;
    }

    const user = dataController.getUser(aIdUser);
    const story = dataController.getStory(user.story);
    const chp = dataController.getChp(user.chp);

    const embed = new EmbedBuilder()
        .setTitle(title)
        .addFields({
            name: 'Selection', value : `story : ${user.story}: ${story.name}\nchapter user.chp : ${chp.title}`, inline: false
        },
        {
            name: title , value : description, inline: false
        })
        // white
        .setColor(0xFFFFFF)
        // end

    return embed;

}

module.exports = {
    basic,
    menu
}