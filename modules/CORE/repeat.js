module.exports = { 

    name: 'repeat', 
    description: 'repeat!',
    async execute(interaction) {
        await interaction.reply(interaction.options.getString('argument'));
    },
};
