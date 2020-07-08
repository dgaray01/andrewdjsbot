const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

              
         let user = message.mentions.users.first(); 
  let tickle = await neko.sfw.tickle()  
  
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Cosquillas", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para darle Cosquillas!")
  .addField("Ejemplo : ", "**a!tickle (@Mencion)**")
  .setImage("https://i.imgur.com/whAJ4GA.png")
  .setColor("RANDOM")
  .setThumbnail("https://i.imgur.com/Z1GyAQT.png")
  

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Cosquillas ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Dio Cosquillas a '+ user.username +'**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
.setImage(tickle.url)
        message.channel.send({embed});
  
}