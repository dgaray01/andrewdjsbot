const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

              
         let user = message.mentions.users.first(); 
  let kemonomimi = await neko.sfw.kemonomimi()  
  

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Kemonomimi ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta Observando a un Kemonomimi **')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
.setImage(kemonomimi.url)
        message.channel.send({embed});
  
}