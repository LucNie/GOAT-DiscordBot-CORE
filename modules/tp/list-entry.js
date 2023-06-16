const cc = require('../../core/console')
const dataController = require('./functions/dataController');
// discord embed
const { EmbedBuilder, InteractionCollector } = require('discord.js');
const em = require('./functions/embed');

const cachedPages = []

function pages(aNumber, interaction) {
    const entrys = dataController.getEntrys(interaction.user.id); //object
  
    if (aNumber < 0) {
      aNumber = 0;
    }
  
    if (entrys == undefined) {
      interaction.reply("entry not found");
      return;
    }
  
    // page system
    let page = 0;
    let charas = 0;
    let startEntry = 0;
    let listEntry = [];
  
    for (let i = 0; i < aNumber + 1; i++) {
      // if the page is full
      listEntry = [];
      console.log("tic")
      for (let j = startEntry; j < entrys.length; j++) {
        console.log("i:" + i + " j:" + j + " page:" + page + " charas:" + charas + 'aNumber:' + aNumber)
        
  
        if ((entrys[j].length + 10) > 1024) {
          cc.error("tp.list-entry", "entry too long 'j' = " + j);
        }
  
        if ((charas + 10) + entrys[j].length > 1024) {
          page++;
          charas = 0; // reset the charas
          break; // exit the inner loop
        } else {
          charas += entrys[j].length; // add the charas
          startEntry++; // increment the start entry
          listEntry.push(j); // add the entry to the list
          console.log(listEntry)
        }
      }
    }
  
    let text = "";
    console.log("Final" + JSON.stringify(listEntry))
    for (let i = 0 ; i < listEntry.length; i++) {
        text += listEntry[i] + "." + entrys[listEntry[i]] + "\n" + "\n";
    }

    if (text.length > 1024) {
        cc.error("tp.list-entry", "text too long");
        text = text.substring(0, 1024);
    }

    if(text == "") {
        text = "no entry found"
    }
  
    return text;
  }

module.exports = {
    name: 'list-entry' ,
    description: 'list all entry of the selected story and chapter',
    options : 0,
    async execute(interaction) {

        let page = 0

        const filter = (reaction, user) => {
            return ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === interaction.user.id;
          };





        // creat a collector for the reaction

        const message = await interaction.reply({ embeds: [em.basic( interaction.user.id, "List of entry", pages(0,interaction) )], fetchReply: true });
        message.react('⬅️')
        message.react('➡️')

        // 5 minutes
        const collector = message.createReactionCollector({ filter, time: 300000 });

        collector.on('collect', (reaction, user) => {
            cc.info("tp.list-entry", `Collected ${reaction.emoji.name} from ${user.tag}`);

            if (reaction.emoji.name === '⬅️') {
                console.log("go back")
                // go back
                // if the page is 0, do nothing
                if (page == 0) {
                    return;
                } else {
                    page -= 1;
                }
            } else if (reaction.emoji.name === '➡️') {
                console.log("go next")
                // go next
                // if the page is the last page, do nothing
                    page += 1;
            }

            // edit the message
            message.edit({ embeds: [em.basic( interaction.user.id, "List of entry", pages(page,interaction))] });
        })

        collector.on('end', collected => {
            cc.info("tp.list-entry", `Collected ${collected.size} items`);
        })
        
            
    }
}