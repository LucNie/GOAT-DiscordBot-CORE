//modules discord ping 

module.exports = {

    name: 'powershell',
    description: 'Can use command',
    options: 1,
    auth: "admin",
    async execute(interaction) {
        // get command from user
       

        
        const { exec } = require('child_process');
        exec(interaction.options.getString('option0'), (err, stdout, stderr) => {
            if (err) {
                //some err occurred
                interaction.reply(`error: ${err.message}`);
            } else if (stdout.length !== 0){
                // the *entire* stdout and stderr (buffered)
                // max 2000 char
                if (stdout.length > 2000) {
                    stdout = stdout.substring(0, 2000);
                }
                interaction.reply(stdout);
            }
            else {
                interaction.reply("command executed");
            }
        });

    }
};

