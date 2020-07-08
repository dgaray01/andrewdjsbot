const Discord = require("discord.js")
exports.run = (client, message, args) => {
 const embed = new Discord.RichEmbed()
 .setTitle("Lista de las redes sociales de Andrew")
 .addField("🌐Página web", "[Click aquí](https://andrewdjs.glitch.me)") 
 .addField("🔗Servidor de Discord", "[Click aquí](https://discord.gg/DSdQqnq)")
 .setColor("RANDOM")
 message.channel.send(embed)
}