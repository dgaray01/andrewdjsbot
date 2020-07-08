const client = require('nekos.life');
const neko = new client();
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first(); 
  let foxGirl = await neko.sfw.foxGirl()
           
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | ¡FoxGirl!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta Viendo a algunos zorros ** ``🐾`` ')
  .setImage(foxGirl.url)
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}