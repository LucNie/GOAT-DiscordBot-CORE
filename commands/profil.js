const { images } = require('../config.json');

    module.exports = {
        name: 'profil',
        description: 'ping basic command',
        level: 0,
      
        execute(message) {
          message.channel.send("pong!")

          const jsonUser = "../users/user_"+id+".json";
          const user_data_row  = require(jsonUser);
          const user_data = JSON.parse(JSON.stringify(user_data_row));








        }
      };