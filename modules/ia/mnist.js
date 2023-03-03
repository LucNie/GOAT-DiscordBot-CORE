const ia = require('./functions/main.js');

module.exports = {
    name: 'mnist',
    description: 'create a neural network to recognize handwritten digits',
    async execute(interaction) {

        // response to user
        interaction.reply('Training the network...');
        // train the network and resend the response
        let _result = await ia.asyncTrain();
        // interaction.editReply('Done training the network!');
        // send the result
        // interaction.channel.send({ content: 'Result: ' });
    }
}