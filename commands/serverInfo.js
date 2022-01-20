const os = require('os');
const util = require('minecraft-server-util');
module.exports = {
    name: 'ping',
    description: 'ping basic command',
    level: 0,
  
    execute(message) {
      message.channel.send("pong!")


      

      const options = {
          sessionID: 1, // a random 32-bit signed number, optional
          enableSRV: true // SRV record lookup
      };
      
      // The port and options arguments are optional, the
      // port will default to 25565 and the options will
      // use the default options.
      util.queryBasic('localhost', 25565, options)
          .then((result) => console.log(result))
          .catch((error) => console.error(error));

    }
  };