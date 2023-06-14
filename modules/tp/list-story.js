const cc = require('../../core/console')
const dataController = require('./functions/dataController');
const em = require('./functions/embed');
// discord embed

module.exports = {
    name: 'list-story' ,
    description: 'list all story',
    options : 0,
    async execute(interaction) {

        const storys = dataController.getStorys(); //object

        if (storys == undefined) {
            interaction.reply("story not found");
            return;
        }

        let text = ""
        for (let i = 0; i < Object.keys(storys).length ; i++) {
            text += storys[i].id +": "+ storys[i].name + "\n"
        }

        


        interaction.reply({ embeds: [em.basic( interaction.user.id, "List of story", text )] });
    }
}