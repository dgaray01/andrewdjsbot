const client = require('nekos.life');
const neko = new client();
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first(); 
  let nekoGif = await neko.sfw.neko()
           
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | ¡Nekos Bonitos!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta Viendo Nekos ** ``🐱`` ')
  .setImage(nekoGif.url)
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}