const Discord = require('discord.js')


exports.run = async (client,message,args) => {
let userm = message.mentions.users.first()

if(!userm){
const embed = new Discord.RichEmbed()
      .setAuthor("Andrew | Bravery Avatar", client.user.avatarURL)
    .setDescription("Tu Avatar en el equipo Bravery")
    .setImage(`http://18.184.116.22/api/cerceve?cerceve=bravery2&url=${message.author.avatarURL}`)
    .setColor(0xff7f00)
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
    return message.channel.send(embed)
}else{
const embed2 = new Discord.RichEmbed()
      .setAuthor("Andrew | Bravery Avatar", client.user.avatarURL)
    .setDescription("Tu Avatar en el equipo Bravery")
    .setImage(`http://18.184.116.22/api/cerceve?cerceve=bravery2&url=${userm.displayAvatarURL}`)
    .setColor(0xff7f00)

.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
    return message.channel.send(embed2)
  }
}
