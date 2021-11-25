const fs = require('fs');
const Discord = require('discord.js');

const { prefix , token } = require('./Config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandfFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandfFiles){
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);

}

client.once('ready' , () => {
    console.log('Connexion réusite !');
    
    client.user.setActivity('renforcer les murs du dongeon');
    
});

client.on('message',message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply("Une erreur s'est produite pendant l'exécution de la commande :/");
    }
 })

client.login(token);