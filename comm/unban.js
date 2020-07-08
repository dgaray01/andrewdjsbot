const Discord = require("discord.js")
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes los permisos `ADMINISTRATOR`.")
if(!args[0]) return message.channel.send("Introduce una ID de usuario")
let id = args[0]

if(isNaN(id)) return message.channel.send("Introduce una ID válida.")
if(id == client.user.id) return message.channel.send("No puedo desbanear al usuario.")
if(message.guild.members.get(id)) return message.channel.send("¡No cuela! Esta ID es de un usuario de este servidor.")

client.fetchUser(id).then(async (usuario) => { 
   let banusers = await message.guild.fetchBans();
   if(!banusers.has(usuario.id)) return message.channel.send('Este usuario no esta baneado.');
 
   message.guild.unban(usuario.id).then(  () => {
     
     const embed = new Discord.RichEmbed()
        .setAuthor("Andrew | UnBan", client.user.avatarURL)
   .setThumbnail("https://cdn.dribbble.com/users/539158/screenshots/3829704/remote_door_open_small.gif")
                    .addField("``👤`` Usuario", usuario.username)
                    .addField("``🆔`` ID", usuario.id)
                    .addField("``🔧`` Moderador", message.author)
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp(message.createdAt)
                    .setColor("RANDOM")
           message.channel.send(embed)
     //si no quereis richembed --> message.channel.send(`User unbanned: ${usuario.username}#${usuario.discriminator}`)
    }).catch(error => {
       message.channel.send("error: "+error.message)
   })
}).catch(error => {
   message.channel.send("``🆔`` **Esta ID no existe**")
})
}