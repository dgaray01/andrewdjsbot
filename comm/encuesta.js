const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
  let encuesta = args.join(" ")
     if(!encuesta) return message.channel.send("Debes añadir argumentos a la encuesta.")
  message.delete()
  message.delete()
 const embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Encuestas",client.user.avatarURL)
 .setThumbnail("https://cdn.dribbble.com/users/822468/screenshots/3034859/switch.gif")
 .addField("Nueva encuesta", `▔▔▔▔▔▔▔▔▔▔▔▔ \n ${encuesta}`)
 .setFooter("Reacciona para aportar a la encuesta.")
 .setColor("RANDOM")
 .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  message.channel.send(embed).then(async m => {
await m.react("✅")
await m.react("❌")
});
  
 }