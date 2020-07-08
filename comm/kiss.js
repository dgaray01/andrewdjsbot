const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

              
         let user = message.mentions.users.first(); 
  let kiss = await neko.sfw.kiss()  
  
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Kiss Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para besarle!")
  .addField("Ejemplo : ", "**a!kiss (@Mencion)**")
  .setImage("https://imgur.com/7YVMxbW.png")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Beso", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' besó a '+ user.username +'**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
.setImage(kiss.url)
        message.channel.send({embed});
  
}