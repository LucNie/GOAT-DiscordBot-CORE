//modules discord ping 
module.exports = { 

    name: 'ping', 
    description: 'Ping!',
    async execute(interaction) {
        // console.log("{INFO} [ping] message recu de " + interaction.user.username + " : " + interaction.commandName + " " + interaction.options.getSubcommand());
        await interaction.reply('Pong!');
    },
};
