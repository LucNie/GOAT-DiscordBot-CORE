const fs = require('fs');
module.exports = {
    name: 'adduser',
    description: 'Ajoute un utilisateur',
    level: 3, //modo
  
    execute(message, args) {

      if(args[0] < 0 || args[0] > 5){
        message.channel.send("Le niveau d'acréditation ne doit pas etre supérieure a 5 !");
        return;
      }

      const path = 'users/user_'+message.author.id+".json";

        try {
          if (fs.existsSync(path)) {
            return message.channel.send("l'utilisateur "+ message.author.username + " existe deja!")//file exists
          }
        } catch(err) {
          console.error(err)
        }

         const User = function(name, level) {

            this.name= name;
            this.level= 0;
            this.inventaire= [];
            this.class = "employer";
            this.race= "Unknown";
            this.bio= "";
            this.statue="hello i'm new";
            this.status="free";//work//busy...
    
            this.baseLife= 10;     //base 
            this.baseMana= 0;
            this.baseStamina= 10;
            this.baseArmor= 1;
    
            this.force= 1;
            this.perception= 1;
            this.endurance= 1;
            this.charisme= 1;
            this.intelligence= 1;
            this.agilite= 1;
            this.chance= 1;
      }





      eval("var user_"+message.author.id+" = new User('"+message.author.username+"', "+args[0]+");")
      message.channel.send(eval("user_"+message.author.id+".name"));

      fs.writeFile('users/user_'+message.author.id+'.json', JSON.stringify(eval("user_"+message.author.id)), (err) => {  
        // Catch this!
        if (err) throw err;
    
        console.log('Users saved!');
    });

    }
  };