const Discord = require("discord.js")
exports.run = (client, message, args) => {
  var info = new Discord.RichEmbed()
.setColor(process.env.COLOR)
.setThumbnail(client.user.avatarURL)
.setFooter("AndrewBot Info")
.setAuthor("AndrewBot Info", client.user.avatarURL)  
.setDescription("Andrew es un BOT beta , **AshuaBot**. Ya que Andrew es público, puede ocasionar errores, ¡así que no dudes en reportar!")
          
          message.author.send(info).then(message.channel.send("¡La informacíon general ha sido enviada!"))
}