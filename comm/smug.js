const client = require('nekos.life');
const neko = new client();
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first(); 
  let smug= await neko.sfw.smug()
           
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | ¡Presumir!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta Presumiendo ** ``😠`` ')
  .setImage(smug.url)
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}