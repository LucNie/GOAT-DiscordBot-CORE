require('dotenv').config()

const fs = require("fs");
const path = require("path");
const Discord = require("discord.js");
const { SlashCommandBuilder, ActivityType } = require('discord.js');
const dataController = require("./core/dataController");
const cc = require('./core/console')
const auth = require('./core/autorisationController')


const client = global.client = new Discord.Client({
    intents: 0, //please use eNums as of v14.
});

client.commands = global.commands = new Discord.Collection();

let commands = []; // Array of commands
let exCommands = {}; // Object of commands

//update commands with all folder with commands in it : dossier.commands

const _folders = fs.readdirSync(path.join(__dirname, './modules'));
_folders.forEach(folder => {
    const _files = fs.readdirSync(path.join(__dirname, './modules', folder)).filter(file => file.endsWith('.js'));
    exCommands[folder.toLocaleLowerCase()] = {};
    dataController.newModules(folder.toLocaleLowerCase());
    let _data = new SlashCommandBuilder()
        .setName(folder.toLowerCase())
        .setDescription('Commande de ' + folder);
    _files.forEach(file => {
        //add all commands filles from folder to commands
        const _command = require(path.join(__dirname, './modules', folder, file));
        //add subcommand
        if (file != "init.js") {
            exCommands[folder.toLocaleLowerCase()][file.split('.')[0]] = _command;
            _data.addSubcommand(subcommand =>
                subcommand
                    .setName(_command.name)
                    .setDescription(_command.description)
                    .addStringOption(option =>
                        option.setName('argument')
                            .setDescription('argument de la commande')
                            .setRequired(false)
                    )
            );
        } else {
            _command.execute(client, dataController);
        }
    });
    commands.push(_data);
});

// apps commands


client.on('ready', () => {
    // console.log("bot is ready   " + client.user.tag);
    cc.info('Start','Bot ' + client.user.tag + ' is ready !')

    // client.user.setPresence({
    //     activities: [{ name: `Rebuild itself`, type: ActivityType.Playing }],
    //     status: 'dnd',
    // });

    //register all commands

    dataController.init();

    client.application.commands.set(commands);
});

client.on('interactionCreate', async interaction => {
    cc.info('interactionCreate',"message recu de " + interaction.user.username + " : " + interaction.commandName );
    if (interaction.isCommand()) {
        const { commandName } = interaction;
        const command = client.commands.get(commandName);
        // if (!command) return;
        try {
            cc.debug(interaction.user.id)
            if(auth.isWhiteListed(exCommands[commandName.toLocaleLowerCase()][interaction.options.getSubcommand()].auth, interaction.user.id)){
            await exCommands[commandName.toLocaleLowerCase()][interaction.options.getSubcommand()].execute(interaction, dataController);
            }else{
                await interaction.reply({ content: 'You are not allowed to use this command!', ephemeral: false });
            }
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: false });
        }

    }else if(interaction.isButton()){
        //get button id
        const buttonId = interaction.customId;
        //get module name
        const moduleName = buttonId.split("_")[0];
        //get command name
        const commandName = buttonId.split("_")[1];
        try{
            await exCommands[moduleName.toLocaleLowerCase()][commandName.toLocaleLowerCase()].buttonExecute(interaction, dataController);
        } catch (error){
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this button!', ephemeral: true });
        }
    }
});


client.login(process.env.TOKEN);