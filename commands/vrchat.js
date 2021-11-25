const { report } = require("process");
const { MessageEmbed } = require('discord.js');
const { vrchatLogin } = require('../config.json');

module.exports = {
    name: 'vrchat',
    description: 'supprime les message précédent cette commande',
    level: 4,
    cooldown: 30,

    execute(message, args) {
        const vrchat = require("vrchat");
 
        const configuration = new vrchat.Configuration({
            username: vrchatLogin.username,
            password: vrchatLogin.password
        });
        
        const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
        const UsersApi = new vrchat.UsersApi(configuration);
        const SystemApi = new vrchat.SystemApi(configuration);
        
        SystemApi.getCurrentOnlineUsers().then(resp => {
            console.log(`Current Online Users: ${resp.data}`);
        
            // Calling getCurrentUser on Authentication API logs you in if the user isn't already logged in.
            AuthenticationApi.getCurrentUser().then(resps => {
                console.log(`Logged in as: ${resps.data.displayName}`);
                UsersApi.getUserByName(args).then(resp => {
                    //console.log(resp.data.displayName); // Should print out "Galaxial"
                    if (typeof resp.response != undefined ){
                    if (resp.response == 404){
                       message.channel.send("error 404"); 
                       return;
                    } 
                }
                    if (resp.data.status == "online"){
                        var color = "#00FF00";
                    }else{
                        var color = "#DC143C";
                    }

                        const exampleEmbed = new MessageEmbed()
                        .setColor(color)
                        .setURL(`https://vrchat.com/home`)
                        .setTitle(`${resp.data.displayName}`)
                        .setAuthor(`${resp.data.displayName}`, `${resp.data.currentAvatarImageUrl}?`, 'https://vrchat.com/home')
                        .setDescription(`:${resp.data.statusDescription}`)
                        .setThumbnail(`${resp.data.currentAvatarThumbnailImageUrl}?`)
                        .addFields(
                            {name: 'BIO', value: `:${resp.data.bio}`},
                        )
                        .addField(`TAG`, `${resp.data.tags.join("\n")}`, true)
                        .setImage('https://logos-world.net/wp-content/uploads/2021/04/VRChat-Emblem.png')
                        .setTimestamp()
                        .setFooter(`⚠️ Don't SPAM  Please ⚠️`, 'https://logos-world.net/wp-content/uploads/2021/04/VRChat-Emblem.png');

                            message.channel.send(exampleEmbed);

                }


                );
            }).catch((err) => {
                message.channel.send("Erreur (vrchat)")
                console.log(err)
                return;
            });
        });

    }
};

