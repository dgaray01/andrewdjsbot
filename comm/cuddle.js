const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

              
         let user = message.mentions.users.first(); 
  let cuddle = await neko.sfw.cuddle()  
  
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Cuddle Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para dar cariño!")
  .addField("Ejemplo : ", "**a!kiss (@Mencion)**")
  .setImage("https://i.imgur.com/JKXf8UW.png")
  .setColor("RANDOM")
  .setThumbnail("https://i.imgur.com/Z1GyAQT.png")
  

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Cariño", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Dio Cariño a '+ user.username +' ``💆‍`` **')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
.setImage(cuddle.url)
        message.channel.send({embed});
  
}