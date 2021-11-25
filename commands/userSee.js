
module.exports = {
    name: 'seeUser',
    description: 'Ajoute un utilisateur',
    level: 3, //modo
  
    execute(message) {
         const Users = {

            name: "null",
            level: 0,
            inventaire: [],
            class: "employer",
            race: "Unknown",
    
            baseLife: 10,     //base 
            baseMana: 0,
            baseStamina: 10,
            baseArmor: 1,
    
            force: 1,
            perception: 1,
            endurance: 1,
            charisme: 1,
            intelligence: 1,
            agilite: 1,
            chance: 1
      }

      var lucas = Object.create(Users);

      console.log(lucas.name);

    }
  };