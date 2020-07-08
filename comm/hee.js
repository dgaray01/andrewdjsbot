const Discord = require("discord.js")
exports.run = (client, message, args) => {

               
 var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('**Mira Privado te llego un mensaje!**')
  .setTimestamp()
  .setImage("https://cdn.discordapp.com/attachments/529814077606985748/551682886743490560/hqdefault.jpg")
 .setColor("RANDOM")
        message.channel.send(embed);

  
  message.author.send({files: ['https://cdn.discordapp.com/attachments/529814037731606553/551679847676641290/KCedkrp8_400x400.jpg']})
  message.author.send('**Hee hee**', {files: ['https://cdn.glitch.com/113be9e3-c6f9-4e9b-905c-b8a20f14a5ee%2FHee.mp3']})


}