module.exports = {
    name: 'adduser',
    description: 'Ajoute un utilisateur',
    level: 3, //modo
  
    execute(message) {
         const User = function(name) {

            this.name= name;
            this.level= 0;
            this.inventaire= [];
            this.class = "employer";
            this.race= "Unknown";
    
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

      eval("var user_"+message.author.id+" = new User('"+message.author.username+"');")
      message.channel.send(eval("user_"+message.author.id+".name"));

    }
  };