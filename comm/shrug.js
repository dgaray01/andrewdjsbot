const Discord = require("discord.js")
exports.run = (client, message, args) => {

  let confused = [
    "https://media1.tenor.com/images/8e74b7dbfadfd639c35cfddf33252bbd/tenor.gif",
    "https://media.tenor.com/images/7787afe13149ca16b616585e2ad220fa/tenor.gif",
    "https://i.pinimg.com/originals/83/ce/94/83ce948166a598c00b08fb558b07f224.gif",
    "https://thumbs.gfycat.com/MedicalDazzlingAzurewingedmagpie-size_restricted.gif",
    "https://i.pinimg.com/originals/f5/f1/a5/f5f1a56660804a6f20ece2c88309c4d9.gif",
    "https://tenor.com/6HAF.gif",
    "https://tenor.com/5rCO.gif",
    "https://tenor.com/TjiG.gif",
    "https://tenor.com/ZIsy.gif",
    "https://tenor.com/XLaR.gif",
    "https://tenor.com/H6uP.gif"
  ]
  
 var embed = new Discord.RichEmbed()
  .setAuthor("Andrew | encogimiento de hombros!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription("**"+ message.author.username + '** No sabe o le da igual! ``🤷‍``')
  .setTimestamp()
  .setFooter(message.author.tag, message.author.avatarURL)
  .setImage(confused[Math.floor(Math.random() * confused.length)])
        message.channel.send( embed );
                  
}
