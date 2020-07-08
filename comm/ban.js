const Discord = require("discord.js")
exports.run = (client, message, args) => {
  var perms = message.member.hasPermission("BAN_MEMBERS"); 
  if(!perms) return message.channel.send("No tienes el permiso `BAN_MEMBERS`.");
  let uban = message.mentions.members.first() || message.guild.members.get(args[0])
  let reason = args.join(" ").slice(1) //si como en Id Ban
  if (!uban) return message.channel.send('Menciona a un usuario.');
  if (!reason) reason = "No especificada.";
  const embed = new Discord.RichEmbed()
                    .addField("Usuario baneado", uban)
                    .addField("Razón", reason)
                    .addField("ID", uban.id)
                    .addField("Moderador", message.author)
                    .setColor("RANDOM")
           message.channel.send(embed)
  message.guild.ban(uban)
  
  
  } // que le pasa