 const Discord = require("discord.js");


exports.run = async (client, message) => {
  
    const snekfetch = require("snekfetch");
    
   let string = '';

  client.guilds.forEach(guild => {
    string += 'Nombre del servidor: ' + guild.name + '\n' + 'ID del servidor: ' + guild.id + '  ' + '\n\n';

  })
  
  message.channel.send("```"+string+"```");
  

} 