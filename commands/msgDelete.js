

module.exports = {
    name: 'delete',
    description: 'ping basic command',
    level: 3, //modo
  
    execute(message,args) {

        if (levelVerif(message.author.id,3)){
            console.log(message.author.username + " a effacer "+ args[0] +" messages");

            message.channel.bulkDelete(args[0], true)
            .then((_message) => {
              message.channel
                // do you want to include the current message here?
                // if not it should be ${_message.size - 1}
                .send(`Bot cleared \`${_message.size}\` messages :broom:`)
                .then((sent) => {
                  setTimeout(() => {
                    sent.delete();
                  }, 2500);
                });
            });
          

        }else{
            message.reply("permission refusée (votre niveau de permission: " + user_data.level+ ")") 
        }
        




    }
  };




const fs = require('fs');
function levelVerif(id, alevel) {
    const jsonUser = "../users/user_"+id+".json";
    const user_data_row  = require(jsonUser);
    const user_data = JSON.parse(JSON.stringify(user_data_row));

    if (user_data.level >= alevel){
        return true;
    }else{
        return false;
    }
}