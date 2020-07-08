const Discord = require('discord.js')
const Jimp = require('jimp')

exports.run = async (client, message, prefix, args) => {
  
  let user = message.mentions.users.first() || message.author;
  let ua = await Jimp.read(user.displayAvatarURL)
  Jimp.read('https://i.pinimg.com/originals/fa/55/54/fa55549b16becd6f542bfe530bf7f3b9.jpg', (e, img) => {
    
    ua.resize(305, 305)
    
    img.blit(ua, 245, 106)
    
    img.getBuffer(Jimp.MIME_PNG, (e, image) => {
      
       let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Tu quieres eso?", client.user.avatarURL)
  .setDescription ( message.author.username + " **Quiere eso**  ``🎈``")
  .attachFiles([{
    attachment: image,
    name: "7987.png"
  }])
  .setImage("attachment://7987.png")
  .setColor("RANDOM")
      
      message.channel.send(embed)
    });
  });
  
} 
