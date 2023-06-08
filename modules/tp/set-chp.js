const cc = require('../../core/console')
const dataController = require('./functions/dataController');

module.exports = {
    name: 'set-chp' ,
    description: 'set the chapter of a user',
    options : 1,
    async execute(interaction) { 

        const chp = dataController.setChpUser(interaction.user.id, interaction.options.getString('option0'))

        if (chp == false) {
            interaction.reply("chapter not found");
            return;
        }

        interaction.reply("chapter set to " + chp);
    }
}