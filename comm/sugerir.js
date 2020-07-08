exports.run = async (client, message, args) => {
const Discord = require("discord.js");
  
const canal =  client.channels.get("599789587270991902")

  
  
  const embed = new Discord.RichEmbed()
 .setAuthor("Andrew | Pedir", client.user.avatarURL)
  .setThumbnail("https://cdn.dribbble.com/users/722246/screenshots/4087457/icon-animation.gif")
  .setDescription("¡Gracias por haber mandado tu peticion!")
  .setColor("RANDOM")
  message.channel.send(embed)
  
  
  const embed2 = new Discord.RichEmbed()
   .setAuthor("Andrew | Pedir", client.user.avatarURL)
  .setThumbnail("https://cdn.dribbble.com/users/722246/screenshots/4087457/icon-animation.gif")
  .setColor("GREEN")
  .addField("Usuario:", message.author.username)
  .addField("Peticion:", args.join(" "))
  
canal.send(embed2)
  
  
  
  

}