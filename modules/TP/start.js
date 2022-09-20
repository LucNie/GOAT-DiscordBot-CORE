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
					.setCustomId('tp_start_Terran')
					.setLabel('Terran')
					.setStyle(ButtonStyle.Primary),
			);
            const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('tp_start_Machine')
                    .setLabel('Machine')
                    .setStyle(ButtonStyle.Primary),
            );
            const row3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('tp_start_Alfarien')
                    .setLabel('Alfarien')
                    .setStyle(ButtonStyle.Primary),
            );
            const row4 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('tp_start_Erien')
                    .setLabel('Erien')
                    .setStyle(ButtonStyle.Primary),
            );
            await interaction.reply({ content : "Choisis votre race", components: [row,row2,row3,row4] });
            
        }

    },
    async buttonExecute(interaction,dataController){
        
        //get the choice of the button
        var choice = interaction.customId.buttonId.split("_")[3];

        
        dataController.mainData["tp"].users[interaction.user.id] = {}

        if (choice == "Terran" || choice == "Machine" || choice == "Alfarien" || choice == "Erien"){
            dataController.mainData["tp"].users[interaction.user.id].race = choice
        }
        
    }
    



};
