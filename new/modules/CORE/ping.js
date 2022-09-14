//modules discord ping 
module.exports = { 

    name: 'ping', 
    description: 'Ping!',
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
