const Discord = require("discord.js")
exports.run = (client, message, args) => {

let permiso = message.member.hasPermission("BAN_MEMBERS")
if (!permiso) return message.channel.send("No tienes permisos Suficientes!")
  let user = args[0];
  
  if (!user) return message.channel.send("Dime alguna id")    
  if(isNaN(user)) return message.channel.send("ID Invalida.")    

  message.guild.ban(user)
  message.channel.send("He baneado a <@" + user + ">")
}
