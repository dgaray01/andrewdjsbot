const Discord = require("discord.js")
exports.run = (client, message, args) => {

let sv = client.guilds.get(args[0])
    
        if (!sv) return message.channel.send(`Pon una ID válida`)
    sv.channels.random().createInvite({maxAge: 0}).then(invite => {
    const embed = new Discord.RichEmbed()
    .setColor(0x36393E)
    .setAuthor('Invitación sacada.', client.user.avatarURL)
    .addField('━━━━━━━━━━\nNombre del servidor:', sv)
    .addField('ID del Servidor', sv.id)
    .addField('Owner Info:', `\`\Owner name\`\:  ${sv.owner.user.tag}  \n\n\`\Owner ID\`\:  ${sv.owner.user.id}`)                      
    .addField('Estadisticas:', `Usuarios: **${sv.memberCount}** | Canales: **${sv.channels.size}** | Roles: **${sv.roles.size}**`)
    .addField('invitación del servidor:\n━━━━━━━━━━', invite)
    .setThumbnail(sv.iconURL) 
   
    message.channel.send(embed)
    })

   
  }