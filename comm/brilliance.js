const Discord = require('discord.js')



exports.run = async (client,message,args) => {
let userm = message.mentions.users.first()

if(!userm){  
    const embed = new Discord.RichEmbed()
      .setAuthor("Andrew | Brillance Avatar", client.user.avatarURL)
    .setDescription("Tu Avatar en el equipo Brillance")
    .setImage(`http://18.184.116.22/api/cerceve?cerceve=brilliance&url=${message.author.avatarURL}`)
    .setColor(0xff7f00)
    .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
    return message.channel.send(embed)
let userm = message.mentions.users.first()
}else{
 const embed = new Discord.RichEmbed()
       .setAuthor("Andrew | Brillance Avatar", client.user.avatarURL)
    .setDescription("Tu Avatar en el equipo Brillance")
    .setImage(`http://18.184.116.22/api/cerceve?cerceve=brilliance&url=${userm.displayAvatarURL}`)
    .setColor(0xff7f00)
 .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
    return message.channel.send(embed) 
}
}