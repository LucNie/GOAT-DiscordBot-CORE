module.exports = { 

    name: 'repeat', 
    description: 'repeat!',
    options: 1,
    async execute(interaction) {
        await interaction.reply(interaction.options.getString('option0'));
    },
};
