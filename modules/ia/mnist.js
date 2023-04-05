const ia = require('./functions/main.js');

module.exports = {
    name: 'mnist',
    description: 'create a neural network to recognize handwritten digits',
    async execute(interaction) {
        console.log("mnist")
        interaction.reply('Training the network...');
        ia.asyncTrain(interaction)
    }
}