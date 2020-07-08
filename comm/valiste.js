const Discord = require("discord.js")
exports.run = (client, message, args) => {

               
 var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('**Mira Privado te llego un mensaje!**')
 .addField("Si no te llego el Mensaje","mira tus configuraciones y pon que cualquiera te mande mensajes!")
  .setTimestamp()
  .setImage("https://i.pinimg.com/originals/93/3b/95/933b953937cb6c83fa66ca8a84058d84.gif")
 .setColor("RANDOM")
        message.channel.send(embed);

  
  message.author.send({files: ['https://thumbs.gfycat.com/BowedOrneryGoa-small.gif']})
  message.author.send('**Ya Valistes OniChan**', {files: ['https://cdn.glitch.com/41e7e015-db5b-4310-bee5-b4bc0991a5a5%2FValiste%20onichan.mp3']})

}