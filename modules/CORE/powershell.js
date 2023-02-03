//modules discord ping 

module.exports = {

    name: 'powershell',
    description: 'Can use command',
    stringOption: true,
    async execute(interaction) {
        // get command from user
       

        
        const { exec } = require('child_process');
        exec(interaction.options.getString('argument'), (err, stdout, stderr) => {
            if (err) {
                //some err occurred
                interaction.reply(`error: ${err.message}`);
            } else {
                // the *entire* stdout and stderr (buffered)
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                interaction.reply(`stdout: ${stdout} stderr: ${stderr}`);
            }
        });

    }
};

