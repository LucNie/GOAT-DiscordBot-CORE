const cc = require('../../core/console')
const dataController = require('./functions/dataController');

module.exports = {
    name: 'set-story' ,
    description: 'select a story',
    options : 1,
    async execute(interaction) {

        const story = dataController.setStoryUser(interaction.user.id, interaction.options.getString('option0'))

        if (story == false) {
            interaction.reply("story not found");
            return;
        }

        interaction.reply("story set to " + story);
        
    }
}