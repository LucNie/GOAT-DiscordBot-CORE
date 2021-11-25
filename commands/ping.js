module.exports = {
  name: 'ping',
  description: 'supprime les message précédent cette commande',
  level: 0,

  execute(message, args) {
      const nbr_message = parseInt(args[0]) + 1;

      if (isNaN(nbr_message)) {
          return message.reply("ce n'est pas un nombre valide !");

      }
      else if (nbr_message <= 1 || nbr_message > 100 ){
          return message.reply("cette commande est limiter , la valeurs doit ètre compris entre 1 et 50");
      }

      message.channel.bulkDelete(nbr_message)
      .then(message => console.log(`${message.size - 1} message suprimer`))
  }
};