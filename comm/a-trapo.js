const Discord = require("discord.js")
exports.run = (client, message, args) => {

               
 var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('**Mira Privado te llego un mensaje!**')
  .setTimestamp()
  .setImage("https://steamusercontent-a.akamaihd.net/ugc/906778958304964180/31F5478B0A78C6C72561F1488F6145762DB5AA01/")
 .setColor("RANDOM")
        message.channel.send(embed);

  
  message.author.send({files: ['http://pa1.narvii.com/6694/a7d5e4ad853dbd0b6e5ed86fe46be3c9504d6c04_00.gif']})
  message.author.send('**Aqui tienes tu audio de trapito**', {files: ['https://cdn.glitch.com/113be9e3-c6f9-4e9b-905c-b8a20f14a5ee%2FLoliTrapo.mp3']})

}