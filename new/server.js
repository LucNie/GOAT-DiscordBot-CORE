const fs = require("fs");
const path = require("path");
const Discord = require("discord.js");
const { SlashCommandBuilder } = require('discord.js');
const token = "token :3"

const client = global.client = new Discord.Client({
    intents: 0, //please use eNums as of v14.
});

client.commands = global.commands = new Discord.Collection();

var commands = []; // Array of commands
var exCommands = {}; // Object of commands

//update commands with all folder with commands in it : dossier.commands

const _folders = fs.readdirSync(path.join(__dirname, './modules'));
_folders.forEach(folder => {
    const _files = fs.readdirSync(path.join(__dirname, './modules', folder));
    exCommands[folder.toLocaleLowerCase()] = {};
    var _data = new SlashCommandBuilder()
        .setName(folder.toLowerCase())
        .setDescription('Commande de ' + folder);
    _files.forEach(file => {
        //add all commands filles from folder to commands
        const _command = require(path.join(__dirname, './modules', folder, file));
       //add subcommand
       exCommands[folder.toLocaleLowerCase()][file.split('.')[0]] = _command;
        _data.addSubcommand(subcommand =>
            subcommand
                .setName(_command.name)
                .setDescription(_command.description)
        );
    });
    commands.push(_data);
});

client.on('ready', () => {
    console.log("Bot is ready!");

    //register all commands
    client.application.commands.set(commands);
});

client.on('interactionCreate', async interaction => {
   console.log("{IFNO} [interactionCreate] message recu de " + interaction.user.username + " : " + interaction.commandName + " " + interaction.options.getSubcommand());
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    const command = client.commands.get(commandName);
    if (!command) return;
    try {
        await exCommands[commandName.toLocaleLowerCase()][interaction.options.getSubcommand()].execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.login(token);