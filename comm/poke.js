const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

              
         let user = message.mentions.users.first(); 
  let poke = await neko.sfw.poke()  
  
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Molestar a Alguien Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para Molestarle!")
  .addField("Ejemplo : ", "**a!kiss (@Mencion)**")
  .setImage("https://imgur.com/7YVMxbW.png")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Molestar", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta Fastidiando a '+ user.username +' ``👈`` **')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
.setImage(poke.url)
        message.channel.send({embed});
  
}