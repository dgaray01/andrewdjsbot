exports.run = async (cliemnt, message, args) => {
const Discord = require("discord.js");
let cs = args.slice(0).join(' ')

var perms = message.member.hasPermission("ADMINISTRATOR")
if(!perms) return message.reply("No tienes permiso para usar este comando, permisos necesarios: `PRIORITY_SPEAKER`")
if(!cs) return message.reply("Porfavor escriba el objeto a sortear, el tienpo será por defecto 2 minutos.")
const em = new Discord.RichEmbed()
.setTitle("Sorteo!")
.setDescription(`El usuario: ${message.author} esta sorteando: \`| ${cs} |\` y todos los usuarios del servidor participan.`)
.setColor("#D26511")
.addField("Los resultados se daran en 5 minutos", "Atento... 👀")
message.delete()
message.channel.send(em)
.then(m => {
const em2 = new Discord.RichEmbed()
.setTitle("Sorteo!")
.setColor("#D26511")
.setDescription(`El usuario ${message.author} sorteó: \`| ${cs} |\``)
.addField("El ganador del sorteo fue", `${message.guild.members.filter(x => !x.user.bot).random().user}, Porfavor contacte con ${message.author} para reclamar su premio y si no se lo da reportelo. :)`)
setTimeout(() => {
m.edit(em2)
}, 300000)

})

}