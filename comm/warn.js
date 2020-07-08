const Discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, message, args) => {  

  message.delete()
 if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("No tienes los permisos `GESTIONAR GUILD`.") 
let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!rUser) return message.channel.send("``👤``** Debe Mencionar a un usuario y mencionar la razon!**")
let rreason = args.join(" ").slice(22);
if (!rreason) rreason = "Razón no especificada."
 
   let reportEmbed = new Discord.RichEmbed()
   .setTitle("**Advertencia del Bot!**")
   .setAuthor("Andrew | Advertencia", client.user.avatarURL)
   .setThumbnail("https://66.media.tumblr.com/5cb6cec9004ddebc058944577a021dfd/tumblr_p9jcnlEnFq1v1fssvo1_1280.gif")
   .setColor("RANDOM")
   .addField("``👤`` Usuario Advertido", `${rUser} ID ${rUser.id}`)
   .addField("``🆔`` ID Advertido", `ID ${rUser.id}`)
   .addField("``📜`` Razón", rreason)
   .addField("``🔧`` Desarollador", `${message.author}`)
   .addField("``📡`` Canal", message.channel)
  .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)

    
  message.channel.send(reportEmbed);
  db.push(`warns_${message.author.id}_${message.guild.id}`, rreason)
  db.add(`warn_${message.author.id}_${message.guild.id}`, 1)
}