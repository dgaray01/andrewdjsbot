const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

              
         let user = message.mentions.users.first(); 
  let lizard = await neko.sfw.lizard()  
  

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Lagarto ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta Observando un Lagarto **')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
.setImage(lizard.url)
        message.channel.send({embed});
  
}