const cc = require('../../core/console')
const dataController = require('./functions/dataController');
const em = require('./functions/embed');
// discord embed
const {  ButtonBuilder ,ActionRowBuilder ,ButtonStyle} = require('discord.js');

module.exports = {
    name: 'menu' ,
    description: 'the main menu',
    options : 0,
    async execute(interaction) {

        const chpbuttons = new ButtonBuilder()
        .setCustomId('tp_menu_chp')
        .setLabel('Chapters')
        .setStyle(1)
        .setDisabled(false)
        .setEmoji('📖')

        const storybuttons = new ButtonBuilder()
        .setCustomId('tp_menu_story')
        .setLabel('Stories')
        .setStyle(1)
        .setDisabled(false)
        .setEmoji('📚')

        const settingsbuttons = new ButtonBuilder()
        .setCustomId('tp_menu_settings')
        .setLabel('Settings')
        .setStyle(1)
        .setDisabled(false)
        .setEmoji('⚙️')

        const characterbuttons = new ButtonBuilder()
        .setCustomId('tp_menu_character')
        .setLabel('Character')
        .setStyle(1)
        .setDisabled(false)
        .setEmoji('👤')

        const entrybuttons = new ButtonBuilder()
        .setCustomId('tp_menu_entry')
        .setLabel('Entry')
        .setStyle(1)
        .setDisabled(false)
        .setEmoji('📝')

        const exitbuttons = new ButtonBuilder()
        .setCustomId('tp_menu_exit')
        .setLabel('Exit')
        .setStyle(1)
        .setDisabled(false)
        .setEmoji('🚪')

        const  row2 = new ActionRowBuilder()
        .addComponents(storybuttons,settingsbuttons,characterbuttons);


            // Créer une rangée d'actions contenant le bouton
        const  row = new ActionRowBuilder()
        .addComponents(chpbuttons,entrybuttons,exitbuttons);



        interaction.reply({ embeds: [em.menu( interaction.user.id)] , components: [row,row2] })

    },
    async buttonExecute(interaction, indice) {
        cc.debug("buttonExecute", "buttonExecute")

        switch (indice) {
            case "chp":
                cc.debug("buttonExecute", "chp")
                break;
            case "settings":
                cc.debug("buttonExecute", "settings")
                break;
            case "character":
                cc.debug("buttonExecute", "character")
                break;
            case "entry":
                cc.debug("buttonExecute", "entry")
                break;
            case "exit":
                cc.debug("buttonExecute", "exit")
                break;
            default:
                cc.error("buttonExecute", "indice not found")
                break;
        }

        // reply the indice of the button
        await interaction.reply({ content: `You clicked button ${indice}`, ephemeral: false });

    }


}