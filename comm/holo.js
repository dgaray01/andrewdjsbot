const client = require('nekos.life');
const neko = new client();
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first(); 
  let holo = await neko.sfw.holo()
           
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | ¡holo!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta Viendo a holo ** ``🐾`` ')
  .setImage(holo.url)
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}