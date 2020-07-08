const Discord = require("discord.js")
const db = require("quick.db")
exports.run = async (client, message, args) => { 

  const user = message.mentions.users.first()
  
  if(!user)return message.reply(" Tienes que mencionar a un usuario.")
  
  
  const warn = await db.fetch(`warns_${message.author.id}_${message.guild.id}`)
  const wanrs = await db.fetch(`warn_${message.author.id}_${message.guild.id}`)
  if(wanrs === null)return message.reply("Este usuario no tiene ningun warn en este servidor.")
  
  
  
  const embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Advertencias", client.user.avatarURL)
  .addField("Usuario", user, true)
  .addField("Razon", warn, true)
  .addField("Cantidad de warns", wanrs)
  .setColor("RANDOM")
  message.channel.send(embed)
  
}