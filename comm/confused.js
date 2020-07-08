const Discord = require("discord.js")
exports.run = (client, message, args) => {

  let confused = [
    "https://cdn.discordapp.com/attachments/585624423977975818/585639472457318410/1.gif",
    "https://cdn.discordapp.com/attachments/585624423977975818/585639493550473216/2.gif",
    "https://cdn.discordapp.com/attachments/585624423977975818/585639517881368596/3.gif",
    "https://cdn.discordapp.com/attachments/585624423977975818/585639577499467794/4.gif",
    "https://cdn.discordapp.com/attachments/585624423977975818/585639593936814090/5.gif",
    "https://cdn.discordapp.com/attachments/585624423977975818/585639617039171584/6.gif"
  ]
  
 var embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Confundido!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(message.author.username + ' esta confundido! ``🥴``')
  .setTimestamp()
  .setFooter(message.author.tag, message.author.avatarURL)
  .setImage(confused[Math.floor(Math.random() * confused.length)])
        message.channel.send( embed );
                  
}
