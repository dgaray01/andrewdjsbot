const Discord = require("discord.js")
exports.run = (client, message, args) => {

               
 var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('**Mira Privado te llego un mensaje!**')
 .addField("Si no te llego el Mensaje","mira tus configuraciones y pon que cualquiera te mande mensajes!")
  .setTimestamp()
  .setImage("https://i.pinimg.com/originals/b7/89/ef/b789ef305ae5e12059e30347c599f002.gif")
 .setColor("RANDOM")
        message.channel.send(embed);

  
  message.author.send({files: ['https://media1.tenor.com/images/fadb6897880befa253d1e998a1d21060/tenor.gif']})
  message.author.send('**Aqui te dejo un audio de Nico Nico Nii**', {files: ['https://cdn.glitch.com/41e7e015-db5b-4310-bee5-b4bc0991a5a5%2F2019_07_07_08_33_16_1.mp3']})

}