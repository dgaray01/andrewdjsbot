let Discord = require('discord.js');
 

exports.run = async (client, message, args) => {
  const Idiot = require("idiotic-api");
client.API = new Idiot.Client("o5w3W99vRDOO7eEcXapd", { dev: true });
   const buffer = (new Discord.Attachment(
     await client.API.wanted(message.author.displayAvatarURL),"wanted.png"));
  
   
      const embed = new Discord.RichEmbed()
      .attachFiles([ buffer]) 
      .setAuthor("Andrew | Buscado", client.user.avatarURL)
      .setDescription("Se Busca a **" + message.author.username + "** Cuidado! ``📟``")
      .setImage('attachment://wanted.png') 
      .setColor("RANDOM") 
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp(message.createdAt)

  await  message.channel.send (embed);
    }

  
  

