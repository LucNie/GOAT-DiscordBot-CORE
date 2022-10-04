//modules discord ping 
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
module.exports = { 

    name: 'start', 
    description: 'creat a new perso!',
    async execute(interaction,dataController) {

        if(typeof(dataController.mainData["tp"].users[interaction.user.id]) == "undefined"){

            //ask user to choose a race with button
            const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('tp_start_Humanoid')
					.setLabel('Humanoid')
					.setStyle(ButtonStyle.Primary),
			);
            const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('tp_start_Machine')
                    .setLabel('Machine')
                    .setStyle(ButtonStyle.Primary),
            );
            await interaction.reply({ embeds: [SpeciesField], components: [row,row2] });
            
        }

    },
    async buttonExecute(interaction,dataController){
        
        //get the choice of the button
        var choice = interaction.customId.buttonId.split("_")[3];

        
        dataController.mainData["tp"].users[interaction.user.id] = {}

        if (choice == "Humanoid" || choice == "Machine"){
            dataController.mainData["tp"].users[interaction.user.id].race = choice
        }
        
    }

};


const SpeciesField = {
	color: 0x0099ff,
	title: 'Choice your Species',
	fields: [
		{
			name: 'Humanoid :',
			value: '- Humanoid biological species gain experience over time, and can be genetically modified and can add robotic prostheses\n\nHumanoid biological species generally need to be maintained with some form of food.',
		},
		{
			name: 'Machine:',
			value: '- Robotic species need to modify / change their modules with money to be more efficient\n\nRobotic species generally adapt to all types of climates, and certain extreme conditions\n\nthe modules and the core of the robot wear out over time',
		},
	],
	timestamp: new Date().toISOString(),
};

