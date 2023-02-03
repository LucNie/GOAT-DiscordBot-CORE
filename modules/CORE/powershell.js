//modules discord ping 

module.exports = {

    name: 'powershell',
    description: 'Can use command',
    stringOption: true,
    async execute(interaction) {
        // get command from user
        const command = interaction.options.getString('argument');
        console.log(command);
        const { exec } = require('child_process');
        exec(command, (err, stdout, stderr) => {
            if (err) {
                //some err occurred
                console.error(err)
            } else {
                // the *entire* stdout and stderr (buffered)
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                interaction.reply(`stdout: ${stdout} stderr: ${stderr}`);
            }
        });

    }
};

