const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help' ,
    description: 'show this message',
    options : 0,
    async execute(interaction) {

        const text = `TP (TimeProject) is a modules of the bot that allow you to write a story with your friends. 
        You can create a story, add chapters, add entries in the chapters, add charactere and more. 

        **Commands** \n
        \`✅ /tp help \`  : show this message 
        \`❌ /tp create-story <name> \`  : create a story 
        \`❌ /tp delete-story <name> \`  : delete a story 
        \`✅ /tp list-story \`  : list all the story 
        \`✅ /tp select-story <name> \`  : select a story 
        \`❌ /tp unselect-story \`  : unselect a story 

        \`✅ /tp create-chapter <name> \`  : create a chapter 
        \`❌ /tp delete-chapter <name> \`  : delete a chapter) 
        \`✅ /tp list-chapter \`  : list all the chapter 
        \`✅ /tp select-chapter <name> \`  : select a chapter`

        const text2 = `\`✅ /tp add-entry <text> \`  : add an entry in a chapter 
        \`✅ /tp delete-entry <id> \`  : delete an entry in a chapter 
        \`✅ /tp list-entry \`  : list all the entry in a chapter 

        \`❌ /tp add-chara <name> <description> \`  : add a charactere 
        \`❌ /tp delete-chara <name> \`  : delete a charactere 
        \`✅ /tp list-chara \`  : list all the charactere 
        \`✅ /tp see-chara <name> \`  : see a charactere 

        \`❌ /tp add-chara-image <name> <url> \`  : add a charactere image 
        \`❌ /tp delete-chara-image <name> \`  : delete a charactere image`

        console.log(text)

        const embed = new EmbedBuilder()
            .setTitle('TimeProject')
            .addFields({
                name: 'Help',
                value: text
            }, {
                name: ' ',
                value: text2
            })
            // blue
            .setColor(0x00AE86)
            
        interaction.reply({ embeds: [embed] });

    }
}